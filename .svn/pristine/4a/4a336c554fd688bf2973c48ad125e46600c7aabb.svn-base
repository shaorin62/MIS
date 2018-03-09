CREATE OR REPLACE FUNCTION UWZ.SF_GET_CONDPRINT (
    iCOND_CODE       TA_SLIPRF.COND_CODE%TYPE  --관리항목코드
   ,iCOND_VACD       TA_SLIPRF.COND_VACD%TYPE  --관리코드
) RETURN VARCHAR2 IS

RET_NAME    VARCHAR2(100);
sNUMB_MASK  VARCHAR2(100);
sCOND_KIND  VARCHAR2(4);
sCOMM_CODE  VARCHAR2(8);
sCOND_COLM  VARCHAR2(20);

/******************************************************************************
   NAME    :  SF_GET_CONDPRINT
   PURPOSE :  관리항목 코드값
              인쇄물용 데이터 가공을 하기 위해 사용한다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-09-29            권미영  1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME := '';

    BEGIN
        -- 공콩코드의 정보를 가져온다.
        SELECT COND_KIND, COMM_CODE, COND_COLM
        INTO   sCOND_KIND, sCOMM_CODE, sCOND_COLM
        FROM   TA_ACCTXF
        WHERE  COND_CODE = iCOND_CODE;
         
        IF sCOND_KIND = 'CCOM' THEN   -- 공통코드일 경우 공통코드테이블에서 가져온다.
            
            RETURN SF_GET_COMMNAME(sCOMM_CODE, iCOND_VACD);

        ELSIF sCOND_KIND = 'CALE' THEN  -- 대상이 일자인 경우

            SELECT DECODE( LENGTH(iCOND_VACD), 8, TO_CHAR(TO_DATE(iCOND_VACD, 'YYYYMMDD'), 'YYYY-MM-DD')
                                             , 6, TO_CHAR(TO_DATE(iCOND_VACD || '01', 'YYYYMMDD'), 'YYYY-MM')
                                             , iCOND_VACD )
            INTO   RET_NAME
            FROM   DUAL
            ;

        ELSIF sCOND_KIND = 'NUMB' THEN  -- 대상이 숫자인 경우

            SELECT TRIM(TO_CHAR(iCOND_VACD, CASE WHEN INSTR(iCOND_VACD, '.') > 0 THEN '999,999,999,999,999' || RPAD('.', LENGTH(iCOND_VACD) - INSTR(iCOND_VACD, '.') + 1, '9')
                                                 ELSE '999,999,999,999,999' END ) )
            INTO   RET_NAME
            FROM   DUAL
            ;

        ELSIF sCOND_KIND = 'HELP' THEN    -- 고유 관리 테이블이 따로 있는경우

            /* 금융기관 */
            IF sCOND_COLM = 'BABR_CODE' THEN
                
                RETURN SF_GET_BABRNAME(iCOND_VACD);
            
            /* 거래처 */
            ELSIF sCOND_COLM = 'CUST_CODE' THEN
                
                RETURN SF_GET_CUSTNAME(iCOND_VACD);
                
--                SELECT  SUBSTR(BIZR_NUMB,0,3) || '-' || SUBSTR(BIZR_NUMB,4,2) || '-' || SUBSTR(BIZR_NUMB,6,5)
--                INTO    RET_NAME
--                FROM    TA_CUSTXM
--                WHERE   CUST_CODE = iCOND_VACD
--                OR      BIZR_NUMB   = iCOND_VACD;

            /* 사번 */
            ELSIF sCOND_COLM = 'EMPL_NUMB' THEN
            
                RETURN SF_GET_EMPLNAME(iCOND_VACD);
                
                
            /* 부서 */
            ELSIF sCOND_COLM = 'DEPT_CODE' THEN
            
                RETURN SF_GET_DEPTNAME(iCOND_VACD);

            /* 카드번호 */
            ELSIF sCOND_COLM = 'CARD_NUMB' THEN
                
                RETURN iCOND_VACD;
--                SELECT  SF_GET_DEPTNAME(USEX_DEPT) || NVL2(USEX_DEPT || USER_EMPL, '_', '') || SF_GET_EMPLNAME(USER_EMPL)
--                INTO    RET_NAME
--                FROM    TA_CARDXM
--                WHERE   CARD_NUMB = iCOND_VACD;
                

            /* 계정코드 */
            ELSIF sCOND_COLM = 'ACCT_INTL' THEN
            
                RETURN SF_GET_ACCTNAME(iCOND_VACD);

            /* 사업장 */
            ELSIF sCOND_COLM = 'OFFI_NAME' THEN
            
                RETURN SF_GET_OFFINAME(iCOND_VACD);
                
            /* 계좌번호 */
            ELSIF sCOND_COLM = 'ACNT_NUMB' THEN
            
                --RETURN SF_GET_ACNTNAME(iCOND_VACD);
            
                SELECT  ACNT_NUMB
                INTO    RET_NAME
                FROM    TA_ACNTXM
                WHERE   PURE_ACNB  = REPLACE(iCOND_VACD, '-', '');

            ELSE                              -- 그외 기타항목
                RET_NAME := iCOND_VACD;
            END IF;

        ELSIF sCOND_KIND = 'EDIT' THEN  -- 대상이 EDIT인 경우

            RET_NAME := iCOND_VACD;
                     
        ELSE    -- 이도 저도 아니면 그대로 뿌린다.
        
            RET_NAME := iCOND_VACD;
            
        END IF;


        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                 RET_NAME :=  RET_NAME;
            WHEN OTHERS THEN
                 RET_NAME :=  RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_CONDPRINT;
/