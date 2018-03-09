CREATE OR REPLACE FUNCTION UWZ."SF_GET_BABRNAME" 

(
  iBABR_CODE       TA_BANKBR.BABR_CODE%TYPE   --은행지점코드
)

RETURN VARCHAR2 IS
RET_NAME    TA_BANKBR.BABR_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_BABRNAME
   PURPOSE :  은행지점명 리턴
              코드명칭을 얻기위한 조인을 하지 않기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2014-11-24            JYH             1. Created this function.

   NOTES:
   * 코드가 없다면 ''을 반환.
******************************************************************************/
BEGIN

   RET_NAME := '';

   BEGIN

       SELECT BABR_ABNM
       INTO   RET_NAME
       FROM   TA_BANKBR
       WHERE  BABR_CODE = iBABR_CODE;

       EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RET_NAME :=  RET_NAME;
            WHEN OTHERS THEN
                RET_NAME :=  RET_NAME;

    END;

    RETURN RET_NAME;

END SF_GET_BABRNAME;
/