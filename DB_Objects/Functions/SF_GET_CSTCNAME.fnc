CREATE OR REPLACE FUNCTION UWZ."SF_GET_CSTCNAME" 
(
    iCSTC_CODE      IN TA_CSTCXM.CSTC_CODE%TYPE  --코스트센터코드
   ,iSTDS_DATE      IN VARCHAR2  --기준일
)

RETURN VARCHAR2 IS

RET_NAME VARCHAR2(1000);
sSTDS_DATE VARCHAR2(8);

TYPE TYPE_CUR IS REF CURSOR;
FETCH_CURSOR     TYPE_CUR;

/******************************************************************************
   NAME    :  SF_GET_CSTCNAME
   PURPOSE :  코스트센터명 (최근 기준일 데이터) 

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-08-29            권미영              1. Created this function.

   NOTES:
   * 코드가 없다면 ''을 반환.
******************************************************************************/
BEGIN

    RET_NAME := '';
    
    IF LENGTH(iSTDS_DATE) = 4 THEN
        sSTDS_DATE := iSTDS_DATE || '0101';
    ELSIF LENGTH(iSTDS_DATE) = 6 THEN
        sSTDS_DATE := iSTDS_DATE || '01';
    ELSE
        sSTDS_DATE := iSTDS_DATE;
    END IF;
    
    BEGIN
    
        SELECT CSTC_NAME
          INTO RET_NAME
          FROM TA_CSTCXM
         WHERE CSTC_CODE = iCSTC_CODE
           AND BGIN_DATE = ( SELECT MAX(BGIN_DATE)
                             FROM TA_CSTCXM
                            WHERE CSTC_CODE = iCSTC_CODE
                              AND sSTDS_DATE BETWEEN BGIN_DATE AND ENDX_DATE )
                              ;
      

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RET_NAME :=  RET_NAME;
            WHEN OTHERS THEN
                RET_NAME :=  RET_NAME;

    END;

    RETURN RET_NAME;

END SF_GET_CSTCNAME;
/