CREATE OR REPLACE FUNCTION UWZ."SF_GET_CONDCOLM" (
    iCOND_CODE      TA_ACCTXF.COND_CODE%TYPE    /* 관리항목코드*/
)
RETURN VARCHAR2
IS
/******************************************************************************
   NAME    :  SF_GET_CONDCOLM
   PURPOSE :  관리항목컬럼을 얻기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016.09.26            권미영              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/

    RET_NAME    TA_ACCTXF.COND_CODE%TYPE;   --관리항목컬럼
    
BEGIN

    RET_NAME := NULL;

    BEGIN

        SELECT COND_COLM    --관리항목컬럼
          INTO RET_NAME
          FROM TA_ACCTXF    --[관리항목코드]
         WHERE COND_CODE = COND_CODE   --관리항목코드
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME :=  RET_NAME;
        WHEN OTHERS THEN
            RET_NAME :=  RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_CONDCOLM;
/