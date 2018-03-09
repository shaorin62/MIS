CREATE OR REPLACE FUNCTION UWZ."SF_GET_ENFCNAME" (
    iENFC_CODE       TM_OFFICE.ACCT_GUBN%TYPE
   ,iSTDS_DATE       TM_OFFICE.ESTA_DATE%TYPE DEFAULT TO_CHAR(SYSDATE, 'YYYYMMDD')
)
RETURN VARCHAR2 
IS
    RET_NAME    TM_OFFICE.OFFI_NAME%TYPE;

/******************************************************************************
   NAME    :  SF_GET_ENFCNAME
   PURPOSE :  사업장코드/명
              코드명칭을 얻기위한 조인을 하지 않기 위함이다.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016.08.29            김삼영              1. Created this function.

   NOTES:
   * 코드가 없다면 입력된 코드를 그대로 보여준다.
******************************************************************************/
BEGIN

    RET_NAME := '';

    BEGIN
   
        /*--WebSquare 표준용
        SELECT ENFC_NAME
          INTO RET_NAME
          FROM (
                SELECT X.*
                     , ROW_NUMBER() OVER (PARTITION BY ENFC_CODE ORDER BY STDS_DATE DESC) AS R_NUM
                  FROM TM_BRCHXM X
                 WHERE X.STDS_DATE <= iSTDS_DATE
               )
         WHERE R_NUM = 1
           AND ENFC_CODE = iENFC_CODE;
        */

        --Nexacro 표준용
        SELECT A.OFFI_NAME      --사업장명칭
          INTO RET_NAME
          FROM TM_OFFICE A      --[사업장정보]
         WHERE A.ACCT_GUBN = iENFC_CODE     --회계구분_사업장
        ;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RET_NAME :=  RET_NAME;
        WHEN OTHERS THEN
            RET_NAME :=  RET_NAME;
    END;

    RETURN RET_NAME;

END SF_GET_ENFCNAME;
/