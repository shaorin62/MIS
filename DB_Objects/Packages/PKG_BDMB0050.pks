CREATE OR REPLACE PACKAGE UWZ."PKG_BDMB0050" AS



  /******************************************************************************
     NAME:       PKG_BDMB0050
     PURPOSE:    추가예산 전자결재 연동 후처리
     REVISIONS:
     Ver        Date        Author           Description
     ---------  ----------  ---------------  ------------------------------------
     1.0        2016-10-12  권미영           1. Created this package.
  ******************************************************************************/


      /**********************************************
        전자결재연동 문서번호 업데이트
       **********************************************/ 
    PROCEDURE SP_GWAP_APPRSEQN_UPDATE (
        iUPDT_USID      IN VARCHAR2        /* 수정작업자*/
       ,iACCT_UNIT      IN TB_CPLADD.ACCT_UNIT%TYPE   /* 전표번호 */
       ,iBUDG_YYMM      IN TB_CPLADD.BUDG_YYMM%TYPE   /* 예산연월 */
       ,iCSTC_CODE      IN TB_CPLADD.CSTC_CODE%TYPE   /* 코스트센터 */
       ,iBDSB_CODE      IN TB_CPLADD.BDSB_CODE%TYPE   /* 예산과목 */
       ,iAPPR_SEQN      IN TB_CPLADD.APPR_SEQN%TYPE   /* 결재문서번호 */
    );
    
      /**********************************************
        전자결재 연동 후처리 - 추가예산 결재상태코드 업데이트
       **********************************************/ 
    PROCEDURE SP_GWAP_AFTER (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    );
    
END PKG_BDMB0050;
/