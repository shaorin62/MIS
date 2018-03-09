CREATE OR REPLACE PACKAGE BODY UWZ.PKG_IFAPPRSTAT_PROC AS


    /***************************************************************************
        공용변수
    ***************************************************************************/
   sSql               VARCHAR2(32000);


    /***************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.10.06
        내      용 : 회계전표등록 결재상태코드 업데이트
    ***************************************************************************/
    PROCEDURE SP_SLIP_APPS_UPDATE (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TA_SLIPXM.APPR_DOCN%TYPE    /* 결재문서번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    )
    AS
        sSLIP_NUMB      TA_SLIPXM.SLIP_NUMB%TYPE;   /* 전표번호 */
        sAPPS_CODE      TA_SLIPXM.APPS_CODE%TYPE;   /* 회계전표 결재상태코드 */     
        
    BEGIN
        
        IF iDOCU_IDXX <> 'KFI102' THEN
            RETURN;
            RAISE_APPLICATION_ERROR(-20000, '회계전표 결재문서 ID가 아닙니다. 결재문서 ID[' || iDOCU_IDXX || ']');
        END IF;
        
        
        /* 1. 전표의 결재상태 값 확인 */
        BEGIN
            SELECT SLIP_NUMB, APPS_CODE
              INTO sSLIP_NUMB, sAPPS_CODE
              FROM TA_SLIPXM
             WHERE APPR_DOCN = iAPPR_SEQN;
             
             IF sAPPS_CODE = '5' OR sAPPS_CODE = 'FA0' OR sAPPS_CODE = 'FA1' THEN   /* 결재완료, 회계미승인, 회계승인 */
                RETURN;
                RAISE_APPLICATION_ERROR(-20000, '결재완료된 문서입니다. 결재상태 [' || SF_GET_COMMNAME('APPS_CODE', sAPPS_CODE) || ']'
                                            || ' 전표번호 [' || sSLIP_NUMB || ']' );
             END IF; 
             
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RETURN;
                RAISE_APPLICATION_ERROR(-20000,'전자결재 문서번호[' || iAPPR_SEQN || ']에 해당하는 회계전표가 존재하지 않습니다.');

        END;
         
         
        /* 2. 전자결재상태코드에 해당되는 회계전표용 결재상태코드를 가져온다. */
        SELECT COMD_CODE
          INTO sAPPS_CODE    
          FROM TM_CODEXD
         WHERE COMM_CODE = 'APPS_CODE'  /* 결재상태코드 */
           AND REF3_FILD = iAPPR_STAT;  /* 전자결재상태코드 */
        
        
        /* 3. 회계전표 결재상태 UPDATE */
        UPDATE TA_SLIPXM
           SET APPS_CODE = sAPPS_CODE   /* 결재상태코드 */
         WHERE APPR_DOCN = iAPPR_SEQN;  /* 결재문서번호 */
         
    
    END;

               
    /***************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.10.06
        내      용 : 인터페이스 전자결재 연동 후처리 실행하기
    ***************************************************************************/
    PROCEDURE SP_APPRSTAT_PROC (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    )
    AS
    
    BEGIN
    
        /*======================================================================
            문서ID별 전자결재 후처리 프로시저 수행하기
        ======================================================================*/
        
        /* 회계전표등록 */ 
        IF iDOCU_IDXX = 'KFI102'  THEN
           
            SP_SLIP_APPS_UPDATE(
                  iDOCU_IDXX        /* 문서ID */
                , iAPPR_SEQN        /* 결재일련번호 */
                , iAPPR_STAT        /* 결재상태 */
                , iENDX_DATE        /* 결재완료일자 */
            );
        
        END IF;
                
                                                                                               
    END;

END PKG_IFAPPRSTAT_PROC;
/