CREATE OR REPLACE FUNCTION UWZ."SF_GET_JUNLACCT" (
    iJUNL_CODE       TA_JUNLXM.JUNL_CODE%TYPE  --분개코드
)

RETURN VARCHAR2 IS
RET_NAME    TA_JUNLXM.ACCT_INTL%TYPE;

/******************************************************************************
   NAME    :  SF_GET_JUNLACCT
   PURPOSE :  분개코드에 해당하는 계정코드를 반환

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-09-23            권미영              1. Created this function.

   NOTES:
   * 계정코드가 없다면 공백을 반환
******************************************************************************/
BEGIN

    RET_NAME := '';

    BEGIN

        SELECT ACCT_INTL
          INTO RET_NAME
          FROM TA_JUNLXM
         WHERE JUNL_CODE = iJUNL_CODE
         ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
             RET_NAME := RET_NAME;
        WHEN OTHERS THEN
             RET_NAME := RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_JUNLACCT;
/