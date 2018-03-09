CREATE OR REPLACE FUNCTION UWZ."SF_GET_BDSBNAME" (
    iBDSB_CODE       TB_BDSBXM.BDSB_CODE%TYPE  --�����ڵ�
)

RETURN VARCHAR2 IS
RET_NAME    TB_BDSBXM.BDSB_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_BDSBNAME
   PURPOSE :  �����ڵ� / ��
              �ڵ��Ī�� ������� ������ ���� �ʱ� �����̴�.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-08-30            �ǹ̿�              1. Created this function.

   NOTES:
   * �ڵ尡 ���ٸ� �Էµ� �ڵ带 �״�� �����ش�.
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

