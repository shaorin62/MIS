﻿CREATE OR REPLACE PACKAGE UWZ."PKG_FAME0020" AS

  /*****************************************************************************
     NAME:       PKG_FAME0020
     PURPOSE:    전표재집계및이월관리
     REVISIONS:
     Ver        Date        Author           Description
     ---------  ----------  ---------------  -----------------------------------
     1.0        2016.07.20  하창연           1. Created this package.
  *****************************************************************************/

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 이월 처리
    ***************************************************************************/
    PROCEDURE SP_PROC00 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YEAR    IN  VARCHAR2            /* 이월연도 */
    );

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 집계 처리
    ***************************************************************************/
    PROCEDURE SP_PROC01 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YYMM    IN  VARCHAR2            /* 집계연월 */
    );

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 집계 취소
    ***************************************************************************/
    PROCEDURE SP_PROC02 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YYMM    IN  VARCHAR2            /* 집계연월 */
    );

END PKG_FAME0020;
/