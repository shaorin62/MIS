CREATE OR REPLACE FUNCTION UWZ."SF_GET_CONDVANM" (
   iCOND_COLM       TA_ACCTXF.COND_COLM%TYPE  /* 관리항목컬럼*/
  ,iCOND_VACD        VARCHAR2    /* 관리항목값*/
  ,iCOMM_CODE        VARCHAR2 DEFAULT ''    /* 공통코드*/
)

RETURN VARCHAR2 IS

RET_NAME        TA_SLIPRF.COND_VANM%TYPE;

/******************************************************************************
   NAME    :  SF_GET_DEPTFUNM
   PURPOSE :  관리항목값명 얻기위한 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-11-07            권미영              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN
   
       RET_NAME := '';
       
--    IF TRIM(iCOND_COLM) IS NULL OR TRIM(iCOND_VACD) IS NULL THEN
--        RETURN '';
--    END IF;

    /* 거래처 */
    IF iCOND_COLM = 'CUST_CODE' THEN
    
        RETURN SF_GET_CUSTNAME(iCOND_VACD);

    /* 부서 */
    ELSIF iCOND_COLM = 'DEPT_CODE' THEN
    
        RETURN SF_GET_DEPTNAME(iCOND_VACD);

    /* 사번 */
    ELSIF iCOND_COLM = 'EMPL_NUMB' THEN
    
        RETURN SF_GET_EMPLNAME(iCOND_VACD);

    /* 계좌번호 */
    ELSIF iCOND_COLM = 'ACNT_NUMB' THEN
    
        RETURN SF_GET_ACNTNAME(iCOND_VACD);

    /* 계정코드 */
    ELSIF iCOND_COLM = 'ACCT_INTL' THEN
    
        RETURN SF_GET_ACCTNAME(iCOND_VACD);

    /* 금융기관 */
    ELSIF iCOND_COLM = 'BABR_CODE' THEN
    
        RETURN SF_GET_BABRNAME(iCOND_VACD);      

    /* 카드번호 */
    ELSIF iCOND_COLM = 'CARD_NUMB' THEN
    
        RETURN SF_GET_CARDNAME(iCOND_VACD);        

    /* 사업장 */
    ELSIF iCOND_COLM = 'OFFI_NAME' THEN
    
        RETURN SF_GET_OFFINAME(iCOND_VACD);   

    /* 공통코드 */
    ELSIF iCOND_COLM = 'COMM_CODE' THEN
    
        RETURN SF_GET_COMMNAME(iCOMM_CODE, iCOND_VACD);
    
    ELSE
        RET_NAME := iCOND_VACD;
        
    END IF;

    RETURN RET_NAME;

END SF_GET_CONDVANM;
/