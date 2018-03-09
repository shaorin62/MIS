CREATE OR REPLACE FUNCTION UWZ."SF_GET_DEPTFCOD" (
    iDEPT_CODE  IN  TM_DEPTXM.DEPT_CODE%TYPE --부서코드
  , iSTDS_DATE  IN  VARCHAR2  DEFAULT TO_CHAR(SYSDATE, 'YYYYMMDD')  --기준일자
)
RETURN VARCHAR2 IS
RET_NAME    VI_DEPTXM.DEPT_FCOD%TYPE;

/******************************************************************************
   NAME    :  SF_GET_DEPTFCOD
   PURPOSE :  전체부서코드 조회

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2012-04-19            김춘호              1. Created this function.
   1.1      2016-12-30            김삼영               시점 자료 반환 기능 추가
   NOTES:
******************************************************************************/
BEGIN

    RET_NAME := NULL;

    BEGIN

        IF iSTDS_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD') THEN
        
            SELECT DEPT_FCOD
              INTO RET_NAME
              FROM VI_DEPTXM
             WHERE DEPT_CODE = iDEPT_CODE;
             
        ELSE
        
            SELECT DEPT_FCOD
              INTO RET_NAME
              FROM TABLE(SF_TM_DEPTXM(iSTDS_DATE))
             WHERE DEPT_CODE = iDEPT_CODE;
             
        END IF;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME :=  RET_NAME;
        WHEN OTHERS THEN
            RET_NAME :=  RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_DEPTFCOD;
/