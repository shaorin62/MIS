CREATE OR REPLACE FUNCTION UWZ."SF_GET_BDSBNAME" (
    iBDSB_CODE       TB_BDSBXM.BDSB_CODE%TYPE  --예산코드
)

RETURN VARCHAR2 IS
RET_NAME    TB_BDSBXM.BDSB_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_BDSBNAME
   PURPOSE :  예산코드 / 명
              코드명칭을 얻기위한 조인을 하지 않기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-08-30            권미영              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME := '';

    BEGIN

        SELECT BDSB_NAME
          INTO RET_NAME
          FROM TB_BDSBXM
         WHERE BDSB_CODE = iBDSB_CODE
         ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
             RET_NAME := RET_NAME;
        WHEN OTHERS THEN
             RET_NAME := RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_BDSBNAME; 
/

