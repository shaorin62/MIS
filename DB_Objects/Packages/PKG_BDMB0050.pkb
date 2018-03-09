CREATE OR REPLACE PACKAGE BODY UWZ."PKG_BDMB0050" AS


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
        ,iACCT_UNIT      IN TB_CPLADD.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iBUDG_YYMM      IN TB_CPLADD.BUDG_YYMM%TYPE   /* 예산연월 */
        ,iCSTC_CODE      IN TB_CPLADD.CSTC_CODE%TYPE   /* 코스트센터 */
        ,iBDSB_CODE      IN TB_CPLADD.BDSB_CODE%TYPE   /* 예산과목 */
        ,iAPPR_SEQN      IN TB_CPLADD.APPR_SEQN%TYPE   /* 결재문서번호 */
       )
    IS
    
        sAPPR_STAT      TB_CPLADD.APPR_STAT%TYPE;   /* 결재상태코드 */     
    
    BEGIN

        BEGIN
        
            SELECT  APPR_STAT
            INTO    sAPPR_STAT
            FROM    TB_CPLADD
            WHERE   ACCT_UNIT   = iACCT_UNIT    /* 회계단위 */
            AND     BUDG_YYMM   = iBUDG_YYMM    /* 예산연월 */
            AND     CSTC_CODE   = iCSTC_CODE    /* 코스트센터 */
            AND     BDSB_CODE   = iBDSB_CODE    /* 예산과목 */
            ;
        
           
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '해당하는 추가예산신청 자료를 찾을 수 없습니다.');
        END;
        
        IF sAPPR_STAT <> 'N' THEN  /* 결재상태코드 */
            RAISE_APPLICATION_ERROR(-20000, '결재상태가 임시저장상태가 아니므로 전자결재 상신이 불가 합니다. 결재상태 ['
                            || SF_GET_COMMNAME('APPR_STAT', sAPPR_STAT) || ']' );
        END IF;
         
        
        /* 추가예산신청 결재문서번호 UPDATE */ 
        UPDATE  TB_CPLADD
        SET     APPR_SEQN   = iAPPR_SEQN   /* 결재문서번호 */
               ,UPDT_USID   = iUPDT_USID   /* 수정작업자 */
               ,UPDT_DATE   = SYSDATE       /* 수정일시 */
        WHERE   ACCT_UNIT   = iACCT_UNIT    /* 회계단위 */
        AND     BUDG_YYMM   = iBUDG_YYMM    /* 예산연월 */
        AND     CSTC_CODE   = iCSTC_CODE    /* 코스트센터 */
        AND     BDSB_CODE   = iBDSB_CODE    /* 예산과목 */
        ;

        
    END;
    
    
      /**********************************************
        전자결재 연동 후처리 - 추가예산 결재상태코드 업데이트
       **********************************************/ 
    PROCEDURE SP_GWAP_AFTER (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    )
    IS
       
        sAPPR_STAT      TB_CPLADD.APPR_STAT%TYPE;   /* 결재상태코드 */
        nCHEK_DELE      INT;    /* 전자결재 문서번호 초기화 여부 */
        
    BEGIN
        
        IF iDOCU_IDXX <> 'KFI101' THEN
            RAISE_APPLICATION_ERROR(-20000, '추가예산신청 결재문서 ID가 아닙니다. 결재문서 ID[' || iDOCU_IDXX || ']');
        END IF;
        
        nCHEK_DELE := 0;
        
        /* 1. 추가예산신청의 결재상태 값 확인 */
        BEGIN              
            SELECT APPR_STAT
              INTO sAPPR_STAT
              FROM TB_CPLADD
             WHERE APPR_SEQN = iAPPR_SEQN;
             
             IF sAPPR_STAT = 'Y' THEN   /* 결재완료 */
                
                RAISE_APPLICATION_ERROR(-20000, '결재완료된 문서입니다. 결재상태 [' || SF_GET_COMMNAME('APPR_STAT', sAPPR_STAT) || ']');
             
             ELSIF sAPPR_STAT = 'R' AND iAPPR_STAT = 'N' THEN /* 결재반려 -> 문서삭제 -> 임시저장상태값으로 변경된 경우 */
             
                nCHEK_DELE := 1;
                
             END IF; 
             
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '전자결재 문서번호[' || iAPPR_SEQN || ']에 해당하는 추가예산신청 데이터가 존재하지 않습니다.');

        END;
         
         
        /* 2. 추가예산신청 결재상태 UPDATE */
        UPDATE TB_CPLADD
           SET APPR_STAT = iAPPR_STAT   /* 결재상태코드 */
             , APPR_SEQN = DECODE(nCHEK_DELE, 1, NULL, APPR_SEQN) /* 문서가 삭제된 경우 전자결재문서번호 초기화 */
         WHERE APPR_SEQN = iAPPR_SEQN;  /* 결재문서번호 */
         
    
    END;  

END PKG_BDMB0050;
/