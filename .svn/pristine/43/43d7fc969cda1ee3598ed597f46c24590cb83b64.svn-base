CREATE OR REPLACE FUNCTION UWZ."SF_GET_USEREMPL" (
   iUSER_IDXX       TM_USERXM.USER_IDXX%TYPE
)
RETURN VARCHAR2 IS
RET_NAME    TM_USERXM.EMPL_NUMB%TYPE;

/******************************************************************************
   NAME    :  SF_GET_USEREMPL
   PURPOSE :  사용자ID에 대한 사원번호 반환

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016.09.05            김삼영              1. Created this function.               
   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME := NULL;

    BEGIN

      SELECT EMPL_NUMB
        INTO RET_NAME
        FROM TM_USERXM  /* [사용자]  */
       WHERE USER_IDXX = iUSER_IDXX;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME := RET_NAME;
        WHEN OTHERS THEN
            RET_NAME := RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_USEREMPL;
/