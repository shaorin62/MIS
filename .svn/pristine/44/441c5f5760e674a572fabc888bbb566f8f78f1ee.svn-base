CREATE OR REPLACE PACKAGE UWZ.PKG_IFAPPRSTAT_PROC AS
/******************************************************************************
   NAME:       PKG_IFAPPRSTAT_PROC
   PURPOSE:    인터페이스 전자결재 연동 후처리

   REVISIONS:
   Ver        Date        Author           Description
   ---------  ----------  ---------------  ------------------------------------
   1.0        2016.10.06      권미영       1. Created this package.
******************************************************************************/

    /*******************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.10.06
        내      용 : 인터페이스 전자결재 연동 후처리 실행하기
        예      제 : PKG_IFAPPRSTAT_PROC.SP_APPRSTAT_PROC('KFI102', '2016100600039', 'T', NULL);
    ********************************************************************************/
    PROCEDURE SP_APPRSTAT_PROC (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    );

END PKG_IFAPPRSTAT_PROC;
/