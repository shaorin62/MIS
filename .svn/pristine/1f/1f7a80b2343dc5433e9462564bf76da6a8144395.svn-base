create or replace PACKAGE PKG_PAYC0255 AS

    /******************************************************************************
        NAME:       PKG_PAYC0255
        PURPOSE:    소급계산
        REVISIONS:
        Ver        Date        Author           Description
        ---------  ----------  ---------------  ------------------------------------
        1.0        2016-10-14    이용관         1. Created this package.
    ******************************************************************************/

    /**********************************************
        Return Cursor Type Define 
        조회 시 조회 결과를 받을 Cursor .Type 정의
    **********************************************/
    TYPE REC_TYPE IS REF CURSOR;

    /**********************************************
        작  성  자 : 이용관
        작  성  일 : 2016-09-20
        내      용 : 소급계산
    **********************************************/
    PROCEDURE SP_PAYC0255_PROC00 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDCAL.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDCAL.WAGE_CODE%TYPE   --급여코드
        ,iRTBG_YMTH   IN PY_REPAYX.RTBG_YMTH%TYPE   --소급시작년월
        ,iRTED_YMTH   IN PY_REPAYX.RTED_YMTH%TYPE   --소급종료년월        
    );
END;