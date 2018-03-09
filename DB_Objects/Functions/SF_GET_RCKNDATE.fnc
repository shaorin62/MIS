create or replace FUNCTION "SF_GET_RCKNDATE" (
    iEMPL_NUMB       HR_MASTXM.EMPL_NUMB%TYPE   --사원번호
   ,iSTDS_DATE       PY_RTRESE.RCKN_DATE%TYPE   --기준일자
)
RETURN VARCHAR2 IS
  RET_NAME    PY_RTRESE.RCKN_DATE%TYPE;
  
  vRCKN_DATE  PY_RTRESE.RCKN_DATE%TYPE;
/******************************************************************************
   NAME    :  SF_GET_RCKNDATE
   PURPOSE :  퇴직금 추계용 기산일을 산출한다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-11-16            이용관              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME    :=  '';
    vRCKN_DATE  :=  '';
    
    
    --DC형의 퇴직연금 납입 년월을 기준으로 기산일 가져오기
    BEGIN
      SELECT TO_CHAR(LAST_DAY(TO_DATE(MAX(STDS_YMTH)||'01', 'YYYYMMDD') ) + 1, 'YYYYMMDD')
        INTO vRCKN_DATE
        FROM PY_RTPSDC
       WHERE EMPL_NUMB = iEMPL_NUMB
         AND STDS_YMTH < SUBSTR(iSTDS_DATE,1,6)
      HAVING MAX(STDS_YMTH) IS NOT NULL
     ;
    EXCEPTION
      WHEN NO_DATA_FOUND THEN 
          vRCKN_DATE  :=  '';
    END;
    
    
    SELECT CASE WHEN ((C.REEP_DIVC = '3') AND (C.REAY_DATE <= iSTDS_DATE)) THEN
                    NVL(vRCKN_DATE, C.REAY_DATE)
                ELSE
                    TO_NCHAR(NVL(TO_CHAR(TO_DATE(B.RETR_DATE,'YYYYMMDD') + 1,'YYYYMMDD'),NVL(TO_CHAR(TO_DATE(C.RECP_DATE,'YYYYMMDD') + 1, 'YYYYMMDD'), A.ENCO_DATE)))
                END
      INTO RET_NAME
      FROM HR_MASTXM A 
               INNER JOIN PY_MASTPM C
                  ON A.EMPL_NUMB = C.EMPL_NUMB
               LEFT OUTER JOIN (
                                 SELECT EMPL_NUMB
                                       ,MAX(FINL_ENDT) AS RETR_DATE
                                       ,ENFC_CODE
                                 FROM PY_RTPCXM
                                 WHERE FINL_ENDT <= iSTDS_DATE
                                   AND RERE_CODE = '5'
                                 GROUP BY EMPL_NUMB, ENFC_CODE
                               ) B
                 ON A.EMPL_NUMB = B.EMPL_NUMB   
     WHERE A.EMPL_NUMB = iEMPL_NUMB           
      ;

    RETURN RET_NAME;

END SF_GET_RCKNDATE;