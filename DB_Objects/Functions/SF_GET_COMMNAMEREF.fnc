create or replace FUNCTION "SF_GET_COMMNAMEREF" (
   iCOMCODE       VI_COMMCODE.COMM_CODE%TYPE,
   iSUBCODE       VI_COMMCODE.COMD_CODE%TYPE,
   iREFSEQX       IN VARCHAR2
)

RETURN NVARCHAR2 IS
RET_NAME    VI_COMMCODE.COMM_CDNM%TYPE;

/******************************************************************************
   NAME    :  SF_GET_COMMNAME
   PURPOSE :  공통 코드를 입력 받아서 보조필드 값을 가져오는 함수.
              코드명칭을 얻기위한 조인을 하지 않기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2010-07-21            김용성              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

   RET_NAME := '';

   BEGIN

        SELECT CASE WHEN iREFSEQX = 1 THEN REF1_FILD
                    WHEN iREFSEQX = 2 THEN REF2_FILD
                    WHEN iREFSEQX = 3 THEN REF3_FILD
                    WHEN iREFSEQX = 4 THEN REF4_FILD
                    WHEN iREFSEQX = 5 THEN REF5_FILD
                    WHEN iREFSEQX = 6 THEN REF6_FILD
                    WHEN iREFSEQX = 7 THEN REF7_FILD
                    WHEN iREFSEQX = 8 THEN REF8_FILD
                    WHEN iREFSEQX = 9 THEN REF9_FILD
                    WHEN iREFSEQX = 10 THEN RE10_FILD
                    ELSE REMK_100X END
                    INTO RET_NAME
        FROM TM_CODEXD
        WHERE COMM_CODE = iCOMCODE
          AND COMD_CODE = iSUBCODE;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME :=  RET_NAME;
        WHEN OTHERS THEN
           RET_NAME :=  RET_NAME;
   END;

   RETURN RET_NAME;

END SF_GET_COMMNAMEREF;