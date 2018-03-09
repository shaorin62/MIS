create or replace PACKAGE           "PKG_HRME0020" 

AS
    /******************************************************************************
    *   NAME:       PKG_HRME0020
    *   PURPOSE:    인사발령확정
    *
    *   REVISIONS:
    *   Ver        Date        Author           Description
    *   ---------  ----------  ---------------  ------------------------------------
    *   1.0        2016-09-23             1. Created this package.
    ******************************************************************************/

    /*******************************************************************************
        작  성  자 : 김춘호
        작  성  일 : 2013-01-09
        내      용 : 인사발령확정
    ********************************************************************************/
    PROCEDURE SP_HRME0020_PROC00 (
         iUPDT_USID IN HR_APPOXM.UPDT_USID%TYPE   --수정자
        ,iAPNT_HOCT IN HR_APPOXM.APNT_HOCT%TYPE   --발령호수
        ,iAPAL_YSNO IN HR_APPOXM.APAL_YSNO%TYPE   --발령승인여부
    );

    /*******************************************************************************
    * 작  성  자 : 김춘호
    * 작  성  일 : 2013-01-09
    * 내      용 : 인사정보를 발령정보에 업데이트
    *********************************************************************************/
    PROCEDURE SP_HRME0020_PROC01 (
         iEMPL_NUMB IN HR_APPOXD.EMPL_NUMB%TYPE    --사번
        ,iAPNT_DATE IN HR_APPOXD.APNT_DATE%TYPE    --발령일
        ,iAPNT_SEQN IN HR_APPOXD.APNT_SEQN%TYPE    --발령순번
    );

    /*******************************************************************************
    * 작  성  자 : 김춘호
    * 작  성  일 : 2013-01-09
    * 내      용 : 발령사항 인사정보에 업데이트
    *********************************************************************************/
    PROCEDURE SP_HRME0020_PROC02 (
        iEMPL_NUMB IN HR_MASTXM.EMPL_NUMB%TYPE   --사번
    );

    /*******************************************************************************
        작  성  자 : 김춘호
        작  성  일 : 2013-01-09
        내      용 : 인사발령확정(스케줄링)
    ********************************************************************************/
    PROCEDURE SP_HRME0020_PROC03;

END PKG_HRME0020;