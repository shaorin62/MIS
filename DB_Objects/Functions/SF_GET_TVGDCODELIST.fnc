create or replace FUNCTION "SF_GET_TVGDCODELIST" (
    iEMPL_NUMB        HR_MASTXM.EMPL_NUMB%TYPE  --사원번호
   ,iPRON_STDE        HR_PROMTN.PRON_STDE%TYPE  --승진일자
)

RETURN VARCHAR2 IS
RET_NAME    VARCHAR2(100);

/******************************************************************************
   NAME    :  SF_GET_TVGDCODELIST
   PURPOSE :  사원의 승진년한 평가등급코드 리스트를 조회한다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-10-26            이용관              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
    v_EVG1_CODE	  HR_PROMTN.EVG1_CODE%TYPE;	/*평가등급1년코드*/
    v_EVG2_CODE	  HR_PROMTN.EVG2_CODE%TYPE;	/*평가등급2년코드*/
    v_EVG3_CODE	  HR_PROMTN.EVG3_CODE%TYPE;	/*평가등급3년코드*/
    v_EVG4_CODE	  HR_PROMTN.EVG4_CODE%TYPE;	/*평가등급4년코드*/
    v_EVG5_CODE	  HR_PROMTN.EVG5_CODE%TYPE;	/*평가등급5년코드*/
    v_OPOS_YCNT   VARCHAR2(100);
    v_CPOS_BCNT   VARCHAR2(100);
    v_CPOS_YEAR   VARCHAR2(100);
    nCNT		      INT;
BEGIN

    RET_NAME := '';

    --평가등급코드 초기화
    v_EVG1_CODE	:=	'';
    v_EVG2_CODE	:=	'';
    v_EVG3_CODE	:=	'';
    v_EVG4_CODE	:=	'';
    v_EVG5_CODE	:=	'';
    
    nCNT 	:=	0;
    
    
    SELECT SF_GET_WORKPRD4(A.PARE_DATE, iPRON_STDE )          AS  OPOS_YCNT    	/* 승급근속년수 */
         , SF_GET_COMMNAMEREF('CPOS_CODE', A.CPOS_CODE, '4')	AS  CPOS_BCNT	/*기준승급소요년수*/	
         , SUBSTR(A.PARE_DATE,1,4)	                          AS	CPOS_YEAR	/*승급년도*/
      INTO v_OPOS_YCNT, v_CPOS_BCNT, v_CPOS_YEAR   
      FROM HR_MASTXM A 
     WHERE A.EMPL_NUMB = iEMPL_NUMB      
    ;
    
    FOR SUB IN (
      SELECT A.*
       FROM (
             SELECT ROW_NUMBER() OVER (ORDER BY EMPL_NUMB) AS R_NUM
                   , STDS_YEAR	/*기준년도*/
                   , TVGD_CODE	/*종합평가등급코드*/
                FROM EV_WGTOTL
               WHERE EMPL_NUMB 	= iEMPL_NUMB
                 AND STDS_YEAR 	>= v_CPOS_YEAR
             ORDER BY STDS_YEAR ASC
            ) A
        WHERE A.R_NUM > (TO_NUMBER(v_OPOS_YCNT) - TO_NUMBER(v_CPOS_BCNT))
    ) LOOP
      
      nCNT	:=	nCNT	+	1;				
      
      IF (nCNT = 1) THEN
        v_EVG1_CODE	:=	SUB.TVGD_CODE;
      ELSIF (nCNT = 2) THEN
        v_EVG2_CODE	:=	SUB.TVGD_CODE;
      ELSIF (nCNT = 3) THEN
        v_EVG3_CODE	:=	SUB.TVGD_CODE;
      ELSIF (nCNT = 4) THEN
        v_EVG4_CODE	:=	SUB.TVGD_CODE;
      ELSIF (nCNT = 5) THEN
        v_EVG5_CODE	:=	SUB.TVGD_CODE;
      END IF;
    
    END LOOP;  
    
    RET_NAME  :=  v_EVG1_CODE || ',' || v_EVG2_CODE || ',' || v_EVG3_CODE || ',' || v_EVG4_CODE || ',' || v_EVG5_CODE;
    
    RETURN RET_NAME;

END SF_GET_TVGDCODELIST;