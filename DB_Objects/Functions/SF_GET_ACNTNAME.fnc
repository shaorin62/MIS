CREATE OR REPLACE FUNCTION UWZ."SF_GET_ACNTNAME" 
(
  iACNT_NUMB       TA_ACNTXM.ACNT_NUMB%TYPE  --계좌번호
)

RETURN VARCHAR2 IS
RET_NAME    TA_ACNTXM.ACNT_NAME%TYPE;

/******************************************************************************
   NAME    :  sf_get_ACNTNAME
   PURPOSE :  계좌명

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2007-04-05            김호근              1. Created this function.

   NOTES:
   * 코드가 없다면 ''을 반환.
******************************************************************************/
BEGIN

   RET_NAME := '';

   BEGIN

        SELECT NVL(ACNT_NAME, ' ') AS ACNT_NAME
        INTO   RET_NAME
        FROM   TA_ACNTXM
        WHERE  ACNT_NUMB = iACNT_NUMB
        ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RET_NAME :=  RET_NAME;
            WHEN OTHERS THEN
                RET_NAME :=  RET_NAME;

    END;

    RETURN RET_NAME;

END sf_get_ACNTNAME;
/