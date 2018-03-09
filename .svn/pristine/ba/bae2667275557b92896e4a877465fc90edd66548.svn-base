CREATE OR REPLACE PACKAGE BODY UWZ.PKG_IFGWAPPROVAL AS

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.19
        내      용 : I/F LOG 기록
    ***************************************************************************/
    PROCEDURE SP_WRITE_LOG (
        iITFC_TMST      TM_IFLOGL.ITFC_TMST%TYPE    --인터페이스타임스템프
      , iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드
      , iCMPL_YSNO      TM_IFLOGL.CMPL_YSNO%TYPE    --완료여부
      , iREMK_300X      TM_IFLOGL.REMK_300X%TYPE    --비고300      
    )
    AS
        PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    
        --[인터페이스로그]
        MERGE INTO TM_IFLOGL A
             USING (SELECT iITFC_TMST AS ITFC_TMST FROM DUAL) B
                ON (A.ITFC_TMST = B.ITFC_TMST)
        WHEN MATCHED THEN 
            UPDATE                   
               SET A.ITFC_TYPE = iITFC_TYPE     --인터페이스유형[ITFC_TYPE]
                 , A.REF1_FILD = iREF1_FILD     --보조1필드
                 , A.REF2_FILD = iREF2_FILD     --보조2필드
                 , A.REF3_FILD = iREF3_FILD     --보조3필드
                 , A.ITFC_EDTM = SYSDATE        --인터페이스종료일시
                 , A.CMPL_YSNO = iCMPL_YSNO     --완료여부
                 , A.REMK_300X = iREMK_300X     --비고300
                 , A.UPDT_USID = iWORK_USID     --수정작업자
                 , A.UPDT_DATE = SYSDATE        --수정일시
        WHEN NOT MATCHED THEN 
            INSERT (    
                        ITFC_TMST       --인터페이스타임스템프
                      , ITFC_TYPE       --인터페이스유형[ITFC_TYPE]
                      , REF1_FILD       --보조1필드
                      , REF2_FILD       --보조2필드
                      , REF3_FILD       --보조3필드
                      , ITFC_BEDT       --인터페이스시작일시
                      , ITFC_EDTM       --인터페이스종료일시
                      , CMPL_YSNO       --완료여부
                      , REMK_300X       --비고300
                      , INST_USID       --입력작업자
                      , INST_DATE       --입력일시
                      , UPDT_USID       --수정작업자
                      , UPDT_DATE       --수정일시
            ) VALUES (
                        iITFC_TMST      --인터페이스타임스템프
                      , iITFC_TYPE      --인터페이스유형[ITFC_TYPE]
                      , iREF1_FILD      --보조1필드
                      , iREF2_FILD      --보조2필드
                      , iREF3_FILD      --보조3필드
                      , SYSDATE         --인터페이스시작일시
                      , NULL            --인터페이스종료일시
                      , '0'             --완료여부
                      , iREMK_300X      --비고300
                      , iWORK_USID      --입력작업자
                      , SYSDATE         --입력일시
                      , iWORK_USID      --수정작업자
                      , SYSDATE         --수정일시
            )
        ;
        
        COMMIT;
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재일련번호 채번 반환
        예      제 : PKG_IFGWAPPROVAL.SP_GET_APPRSEQN_NEW('KFI102');
    ***************************************************************************/
    FUNCTION SP_GET_APPRSEQN_NEW (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
    )
    RETURN VARCHAR2
    IS
        sAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE;   /* 전자결재일련번호 */
    BEGIN
    
        /*======================================================================
            전자결재 일련번호 채번 = YYYYMMDD00000
        ======================================================================*/
        SELECT NVL(MAX(APPR_SEQN) + 1, TO_CHAR(SYSDATE,'YYYYMMDD')||LPAD('1',5,0)) 
          INTO sAPPR_SEQN
          FROM TM_APPRXH   /* [전자결재연동]*/
         WHERE APPR_SEQN LIKE TO_CHAR(SYSDATE,'YYYYMMDD')||'%'
        ;
    
        RETURN sAPPR_SEQN;
        
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.10.12
        내      용 : 전자결재 연동 자료 저장
        예      제 : PKG_IFGWAPPROVAL.SP_GWAP_SAVE('KFI102', '2016100600039', 'T', NULL);
    ***************************************************************************/
    PROCEDURE SP_GWAP_SAVE (
        iUPDT_USID      TM_APPRXH.DOCU_IDXX%TYPE    /* 작업자ID */
      , iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 결재문서양식ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 전자결재일련번호 */
      , iEMPL_NUMB      TM_APPRXH.EMPL_NUMB%TYPE    /* 사원번호(결재요청자) */
      , iSUBJ_NAME      TM_APPRXH.SUBJ_NAME%TYPE    /* 전자결재제목 */
      , iDEPT_CODE      TM_APPRXH.DEPT_CODE%TYPE    /* 부서코드(신청자) */
    )
    IS
    BEGIN
    
        /*======================================================================
            STEP 1. 필수 입력 체크
        ======================================================================*/
        IF iUPDT_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_001] 작업자ID(iUPDT_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iDOCU_IDXX IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_002] 결재문서양식ID(iDOCU_IDXX)는 필수 입력 항목 입니다.'); END IF;
        IF iAPPR_SEQN IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_003] 전자결재일련번호(iAPPR_SEQN)는 필수 입력 항목 입니다.'); END IF;
        IF iEMPL_NUMB IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_004] 사원번호(결재요청자)(iEMPL_NUMB)는 필수 입력 항목 입니다.'); END IF;
        IF iSUBJ_NAME IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_005] 전자결재제목(iSUBJ_NAME)은 필수 입력 항목 입니다.'); END IF;
        IF iDEPT_CODE IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_SAVE_006] 부서코드(신청자)(iDEPT_CODE)는 필수 입력 항목 입니다.'); END IF;
        
        /*======================================================================
            STEP 2. 전자결재연동 자료 저장
        ======================================================================*/
        INSERT INTO TM_APPRXH (     --[전자결재연동]
                    DOCU_IDXX       --결재문서양식ID
                  , APPR_SEQN       --전자결재일련번호
                  , EMPL_NUMB       --사원번호
                  , APPR_DATE       --승인일자(신청일)
                  , SUBJ_NAME       --제목명
                  , APPR_STAT       --전자결재상태코드
                  , DEPT_CODE       --부서코드(신청자)
                  , ENDX_DATE       --종료일(결재완료일)
                  , INST_USID       --입력작업자
                  , INST_DATE       --입력일시
                  , UPDT_USID       --수정작업자
                  , UPDT_DATE       --수정일시
        ) VALUES (
                    iDOCU_IDXX      --결재문서양식ID
                  , iAPPR_SEQN      --전자결재일련번호
                  , iEMPL_NUMB      --사원번호
                  , TO_CHAR(SYSDATE,'YYYYMMDD') --승인일자(신청일)
                  , iSUBJ_NAME      --제목명
                  , 'N'             --전자결재상태코드(기본값: N.임시저장)
                  , iDEPT_CODE      --부서코드(신청자)
                  , NULL            --종료일(결재완료일)
                  , iUPDT_USID      --입력작업자
                  , SYSDATE         --입력일시
                  , iUPDT_USID      --수정작업자
                  , SYSDATE         --수정일시
        );

    END;


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
    )
    IS
        sAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE;   /* 전자결재상태코드 */
    BEGIN
    
        /*======================================================================
            STEP 1-1. 필수 입력 체크
        ======================================================================*/
        IF iUPDT_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_001] 작업자ID(iUPDT_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iDOCU_IDXX IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_002] 결재문서양식ID(iDOCU_IDXX)는 필수 입력 항목 입니다.'); END IF;
        IF iAPPR_SEQN IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_003] 전자결재일련번호(iAPPR_SEQN)는 필수 입력 항목 입니다.'); END IF;

        /*======================================================================
            STEP 1-2. 유효성 체크
        ======================================================================*/
        BEGIN
        
            SELECT A.APPR_STAT      --전자결재상태코드
              INTO sAPPR_STAT
              FROM TM_APPRXH A      --[전자결재연동]
             WHERE A.DOCU_IDXX = iDOCU_IDXX     --결재문서양식ID
               AND A.APPR_SEQN = iAPPR_SEQN     --전자결재일련번호
            ;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_010] 삭제 할 전자결재 연동자료('||iDOCU_IDXX||'-'||iAPPR_SEQN||')를 찾을 수 없습니다.');
        END;
        
        --P.결재진행
        IF sAPPR_STAT = 'P' THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_011] 결재가 진행 중인 전자결재 연동자료('||iAPPR_SEQN||')는 삭제 할 수 없습니다.'); END IF;
        --Y.결재완료
        IF sAPPR_STAT = 'Y' THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_DEL_012] 결재가 완료 전자결재 연동자료('||iAPPR_SEQN||')는 삭제 할 수 없습니다.'); END IF;
        
        /*======================================================================
            STEP 2. 전자결재연동 자료 삭제
        ======================================================================*/
        DELETE FROM TM_APPRXH               --[전자결재연동]
         WHERE DOCU_IDXX = iDOCU_IDXX       --결재문서양식ID
           AND APPR_SEQN = iAPPR_SEQN       --전자결재일련번호
        ;
    
    END;
               
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
    )
    AS
        cITFC_TMST      TM_IFLOGL.ITFC_TMST%TYPE;    --인터페이스타임스템프
        sAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE;   /* 전자결재상태코드 */
        sENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE;   /* 종료일(결재완료일) */
        sGWAP_AFSP      TM_CODEXD.REF1_FILD%TYPE;   /* 전자결재후처리프로시저 */
        sSQL            VARCHAR2(2000);             /* QUERY STRING */
    BEGIN
        
        cITFC_TMST := SYSTIMESTAMP;     --인터페이스타임스템프
        
        --로그 기록 시작
        SP_WRITE_LOG(cITFC_TMST, 'GW-APRV', 'GWAP', iDOCU_IDXX, iAPPR_SEQN, iAPPR_STAT, '1', NULL);
    
        /*======================================================================
            STEP 1-1. 필수 입력 체크
        ======================================================================*/
        IF iDOCU_IDXX IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_POST_001] 결재문서양식ID(iDOCU_IDXX)는 필수 입력 항목 입니다.'); END IF;
        IF iAPPR_SEQN IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_POST_002] 전자결재일련번호(iAPPR_SEQN)는 필수 입력 항목 입니다.'); END IF;
        IF iAPPR_STAT IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_POST_003] 전자결재상태코드(iAPPR_STAT)는 필수 입력 항목 입니다.'); END IF;

        /*======================================================================
            STEP 1-2. 유효성 체크
        ======================================================================*/
        BEGIN
        
            SELECT A.APPR_STAT      --전자결재상태코드
                 , B.REF1_FILD      --보조1필드 >> 전자결재후처리프로시저
              INTO sAPPR_STAT, sGWAP_AFSP
              FROM TM_APPRXH A      --[전자결재연동]
                   LEFT JOIN TM_CODEXD B    --[공통코드상세]
                          ON B.COMM_CODE = 'DOCU_IDXX'    --공통코드: DOCU_IDXX.전자결재문서양식ID
                         AND A.DOCU_IDXX = B.COMD_CODE    --세부코드 << 전자결재문서양식ID
             WHERE A.DOCU_IDXX = iDOCU_IDXX     --결재문서양식ID
               AND A.APPR_SEQN = iAPPR_SEQN     --전자결재일련번호
            ;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[IFAP_POST_010] 결재연동 후속 처리 할 자료('||iDOCU_IDXX||'-'||iAPPR_SEQN||')를 찾을 수 없습니다.');
        END;

        --Y.결재완료
        IF sAPPR_STAT = 'Y' THEN RAISE_APPLICATION_ERROR(-20000, '[IFAP_POST_011] 결재가 완료 된 전자결재 연동자료('||iAPPR_SEQN||')는 결재상태를 변경 할 수 없습니다.'); END IF;
        
        /*======================================================================
            STEP 2. 전자결재 연동 자료 결재상태 갱신
        ======================================================================*/
        --종료일(결재완료일): Y.결재완료
        sENDX_DATE := CASE WHEN iAPPR_STAT = 'Y' THEN TO_CHAR(SYSDATE,'YYYYMMDD') ELSE NULL END;       
        
        UPDATE TM_APPRXH                    --[전자결재연동]
           SET APPR_DATE = DECODE(iAPPR_STAT, 'T', TO_CHAR(SYSDATE,'YYYYMMDD'), APPR_DATE)  --승인일자(신청일): T.기안대기
             , APPR_STAT = iAPPR_STAT       --전자결재상태코드
             , ENDX_DATE = sENDX_DATE       --종료일(결재완료일): Y.결재완료
             , UPDT_USID = 'GW-APRV'        --수정작업자
             , UPDT_DATE = SYSDATE          --수정일시
         WHERE DOCU_IDXX = iDOCU_IDXX       --결재문서양식ID
           AND APPR_SEQN = iAPPR_SEQN       --전자결재일련번호
        ;
        
        /*======================================================================
            STEP 3. 전자결재 연동 후처리 수행
        ======================================================================*/
        IF sGWAP_AFSP IS NOT NULL THEN

            sSQL := 'BEGIN ' || sGWAP_AFSP  || '('
                             || CHR(39) || iDOCU_IDXX || CHR(39) || ', '    --결재문서양식ID
                             || CHR(39) || iAPPR_SEQN || CHR(39) || ', '    --전자결재일련번호
                             || CHR(39) || iAPPR_STAT || CHR(39) || ', '    --전자결재상태코드
                             || CHR(39) || sENDX_DATE || CHR(39) || ');'    --종료일(결재완료일)
                             || 'END;';

            EXECUTE IMMEDIATE sSQL;
        
        END IF;
        
        --정상 처리 로그 기록
        SP_WRITE_LOG(cITFC_TMST, 'GW-APRV', 'GWAP', iDOCU_IDXX, iAPPR_SEQN, iAPPR_STAT, '1', NULL);
        
    EXCEPTION
        WHEN OTHERS THEN
            --오류 로그 기록
            SP_WRITE_LOG(cITFC_TMST, 'GW-APRV', 'GWAP', iDOCU_IDXX, iAPPR_SEQN, iAPPR_STAT, '0', '['||SQLCODE||'] ' || SQLERRM);
            RAISE;                                                                      
    END;

END PKG_IFGWAPPROVAL;
/