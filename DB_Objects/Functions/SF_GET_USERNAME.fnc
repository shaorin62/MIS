CREATE OR REPLACE FUNCTION UWZ."SF_GET_USERNAME" (
   iUSER_IDXX       TM_USERXM.USER_IDXX%TYPE
)
RETURN VARCHAR2 IS
RET_NAME    TM_USERXM.USER_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_USERNAME
   PURPOSE :  ��ü ����� �����ID/��
              �ڵ��Ī�� ������� ������ ���� �ʱ� �����̴�.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016.08.04            ��￵              1. Created this function.
   2.0      2016.08.30            �ǹ̿�               
   NOTES:
   * �ڵ尡 ���ٸ� �Էµ� �ڵ带 �״�� �����ش�.
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

