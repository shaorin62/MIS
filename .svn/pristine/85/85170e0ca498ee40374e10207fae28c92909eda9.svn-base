CREATE OR REPLACE FUNCTION UWZ."SF_GET_USERNAME" (
   iUSER_IDXX       TM_USERXM.USER_IDXX%TYPE
)
RETURN VARCHAR2 IS
RET_NAME    TM_USERXM.USER_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_USERNAME
   PURPOSE :  전체 사용자 사용자ID/명
              코드명칭을 얻기위한 조인을 하지 않기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016.08.04            김삼영              1. Created this function.
   2.0      2016.08.30            권미영               
   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME := NULL;

    BEGIN

      SELECT USER_NAME
        INTO RET_NAME
        FROM TM_USERXM
       WHERE USER_IDXX = iUSER_IDXX;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME := RET_NAME;
        WHEN OTHERS THEN
            RET_NAME := RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_USERNAME; 
/

