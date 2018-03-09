CREATE OR REPLACE PACKAGE UWZ.PKG_IFGWAPPROVAL AS
/******************************************************************************
   NAME:       PKG_IFGWAPPROVAL
   PURPOSE:    전자결재(그룹웨어) 연계 처리(전/후처리)

   REVISIONS:
   Ver        Date        Author           Description
   ---------  ----------  ---------------  ------------------------------------
   1.0        2016.10.12      김삼영       1. Created this package.
******************************************************************************/

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재일련번호 채번 반환
        예      제 : PKG_IFGWAPPROVAL.SP_GET_APPRSEQN_NEW('KFI102');
    ***************************************************************************/
    FUNCTION SP_GET_APPRSEQN_NEW (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
    )
    RETURN VARCHAR2;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재 연동 자료 저장
        예      제 : PKG_IFGWAPPROVAL.SP_GWAP_SAVE('KFI102', '2016100600039', '20160000', '제목', 'TM_APPRXH');
    ***************************************************************************/
    PROCEDURE SP_GWAP_SAVE (
        iUPDT_USID      TM_APPRXH.DOCU_IDXX%TYPE    /* 작업자ID */
      , iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 전자결재일련번호 */
      , iEMPL_NUMB      TM_APPRXH.EMPL_NUMB%TYPE    /* 사원번호(결재요청자) */
      , iSUBJ_NAME      TM_APPRXH.SUBJ_NAME%TYPE    /* 전자결재제목 */
      , iDEPT_CODE      TM_APPRXH.DEPT_CODE%TYPE    /* 부서코드(신청자) */
    );
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재 연동 자료 삭제
        예      제 : PKG_IFGWAPPROVAL.SP_GWAP_DELETE('KFI102', '2016100600039');
    ***************************************************************************/
    PROCEDURE SP_GWAP_DELETE (
        iUPDT_USID      TM_APPRXH.DOCU_IDXX%TYPE    /* 작업자ID */
      , iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 전자결재일련번호 */
    );

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재 연동 후 처리
        예      제 : PKG_IFGWAPPROVAL.SP_GWAP_POST('KFI102', '2016100600039', 'T', NULL);
    ***************************************************************************/
    PROCEDURE SP_GWAP_POST (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 전자결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 전자결재상태코드 */
    );

END PKG_IFGWAPPROVAL;
/