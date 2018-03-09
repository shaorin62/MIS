CREATE OR REPLACE PACKAGE UWZ."PKG_TMMIFWKNT" AS

    /***************************************************************************
      NAME:       PKG_TMMIFWKNT
      PURPOSE:    공통 인터페이스 작업알림 API
      REVISIONS:
      Ver        Date        Author           Description
      ---------  ----------  ---------------  ---------------------------------
      1.0        2016.11.02  김삼영           1. Created this package.
    ***************************************************************************/

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 저장
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iWKNT_TYCD      IN  TM_WKNTXM.WKNT_TYCD%TYPE    /* ●작업알림유형코드[WKNT_TYCD] */
      , iSOUS_LNKY      IN  TM_WKNTXM.SOUS_LNKY%TYPE    /* ●출처연결키 */
      , iWKNT_CNTT      IN  TM_WKNTXM.WKNT_CNTT%TYPE    /* ●작업알림내용 */
    );
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 저장(현재시점)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_SAVENOW (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_TYCD      IN  TM_WKNTXM.WKNT_TYCD%TYPE    /* ●작업알림유형코드[WKNT_TYCD] */
      , iSOUS_LNKY      IN  TM_WKNTXM.SOUS_LNKY%TYPE    /* ●출처연결키 */
      , iWKNT_CNTT      IN  TM_WKNTXM.WKNT_CNTT%TYPE    /* ●작업알림내용 */
    );

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 전체 확인(현재 시간 기준 과거 알림 일괄 확인 처리)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_READALL (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
    );

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 개별 확인
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_READ (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iSRAL_NUMB      IN  TM_WKNTXM.SRAL_NUMB%TYPE    /* ●일련번호 */
    );

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 일괄 삭제(지정 된 작업알림 과거 자료 삭제)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_DELETEALL (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
    );
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 삭제
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_DELETE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iSRAL_NUMB      IN  TM_WKNTXM.SRAL_NUMB%TYPE    /* ●일련번호 */
    );

END PKG_TMMIFWKNT;
/