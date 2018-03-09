CREATE OR REPLACE PACKAGE BODY UWZ."PKG_FAMB0030" AS

    /***************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.07.20
        내      용 : 전표마스터 저장/수정
    ************************************************************************** */
    PROCEDURE SP_GEN_NUMBER_FA (
        iSYST_LNCD      IN VARCHAR2                    /* 시스템언어코드 */
      , iUPDT_USID      IN VARCHAR2                    /* 수정작업자 */
      , iSTDS_DATE      IN VARCHAR2                    /* 기준일자 */
      , iACGN_TYCD      IN VARCHAR2                    /* 회계채번유형코드 */
      , iACGN_STXT      IN VARCHAR2                    /* 회계채번보조문자열 */
      , oACGN_NUMB     OUT VARCHAR2                    /* 회계채번번호 */
    )
    IS
        LV_SQRN        NUMBER(6);    /* 일련번호 */
    BEGIN

        /* 전표번호채번 */
        IF iACGN_TYCD = 'SLIP_NUMB' THEN

            SELECT TO_NUMBER(NVL(MAX(SUBSTR(SM.ACGN_NUMB,11)), '0')) + 1
              INTO LV_SQRN
              FROM TA_NUMBXM SM
             WHERE SM.STDS_DATE = iSTDS_DATE    /* 전표일자 = 기준일자  */
               AND SM.ACGN_STXT = iACGN_STXT    /* 회계단위 = 회계채번보조문자열 */
               AND SM.ACGN_TYCD = iACGN_TYCD    /* 회계채번유형코드 */
            ;

            /* 번호생성 */
            oACGN_NUMB := iACGN_STXT || iSTDS_DATE || LPAD(LV_SQRN, 4, '0');

        END IF;

        /* 회계공용번호채번 */
        UPDATE TA_NUMBXM SET
               ACGN_NUMB   = oACGN_NUMB     /* 회계채번번호 */
             , UPDT_USID   = iUPDT_USID     /* 수정작업자 */
             , UPDT_DATE   = SYSDATE        /* 수정일시 */
         WHERE STDS_DATE    = iSTDS_DATE    /* 기준일 */
           AND ACGN_TYCD    = iACGN_TYCD    /* 회계채번유형코드[ACGN_TYCD] */
           AND ACGN_STXT    = iACGN_STXT    /* 회계채번보조문자열 */
        ;

        IF SQL%ROWCOUNT = 0 THEN
            /* 회계공용번호채번 */
            INSERT INTO TA_NUMBXM (
                 STDS_DATE          /* 기준일 */
               , ACGN_TYCD          /* 회계채번유형코드[ACGN_TYCD] */
               , ACGN_STXT          /* 회계채번보조문자열 */
               , ACGN_NUMB          /* 회계채번번호 */
               , INST_USID          /* 입력작업자 */
               , INST_DATE          /* 입력일시 */
               , UPDT_USID          /* 수정작업자 */
               , UPDT_DATE          /* 수정일시 */
            )
            VALUES
            (
                 iSTDS_DATE       /* 기준일 */
               , iACGN_TYCD       /* 회계채번유형코드[ACGN_TYCD] */
               , iACGN_STXT       /* 회계채번보조문자열 */
               , oACGN_NUMB       /* 회계채번번호 */
               , iUPDT_USID       /* 입력작업자 */
               , SYSDATE          /* 입력일시 */
               , iUPDT_USID       /* 수정작업자 */
               , SYSDATE          /* 수정일시 */
            );
        END IF;

    END;

      /**********************************************
        전표마스터 저장/수정
       ********************************************* */
    PROCEDURE SP_SLIP_MASTER_SAVE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
      , iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
      , iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
      , iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
      , iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
      , iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
      , iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
      , iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
      , oSLIP_NUMB    OUT TA_SLIPXM.SLIP_NUMB%TYPE   /* 생성된 전표번호 반환. */
    )
    IS
        LV_SLIP_NUMB    TA_SLIPXM.SLIP_NUMB%TYPE;   /* 전표번호 */
        LV_EMPL_NUMB    TA_SLIPXM.EMPL_NUMB%TYPE;   /* 회계구분_사업장 */
        LV_ACCT_GUBN    TA_SLIPXM.ACCT_GUBN%TYPE;   /* 회계구분_사업장 */
        LV_ACCT_DATE    TA_SLIPXM.ACCT_DATE%TYPE;   /* 회계일자 */
        LV_AUTO_YSNO    TA_SLIPXM.AUTO_YSNO%TYPE;   /* 자동전표여부 */

    BEGIN

        /* CRUD_TYPE 확인 */
        SP_CRUD_TYPE_CHK (iCRUD_TYPE);

        /* 필수항목 확인한다. */ /* 확인구분, 전표번호, 전표라인번호, 항목명, 항목값 */
        SP_MUST_CHECK ('[SLIP_MST_SAVE_001]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iACCT_UNIT, '회계단위');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_002]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iSLIP_DATE, '전표일자');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_003]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iSLIP_GUBN, '전표유형구분');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_004]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iTITL_NAME, '제목');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_005]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iEMPL_NUMB, '사원번호');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_006]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iDEPT_CODE, '부서코드');
        SP_MUST_CHECK ('[SLIP_MST_SAVE_006]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iUPDT_USID, '작업자');

        /* 자동전표인경우 필수…자동전표 발생 원천 자료 KEY 조합 (다중키인 경우 '/'로 구분하여 조합) */
        SP_TA_SLGBXM (iSLIP_GUBN);
        IF TA_SLGBXM_ROW.SLIP_TYCD = 'AUTO' THEN
            SP_MUST_CHECK ('[SLIP_MST_SAVE_007]' || CHR(13) || '전표작성', iSLIP_NUMB, '', iSOUS_LNKY, '출처연결키');
            LV_AUTO_YSNO := '1';    /* 자동전표 */
        ELSE
            LV_AUTO_YSNO := '0';    /* 자동전표 아님 */
        END IF;

        /* 수정일때 */
        IF UPPER(iCRUD_TYPE) = 'UPD' THEN
            IF iSLIP_NUMB IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_008]' || CHR(13) || '수정 전표번호가 없습니다.');
            END IF;
            LV_SLIP_NUMB := iSLIP_NUMB; /* 전표번호는 */
        END IF;

        /* 저장 */
        IF UPPER(iCRUD_TYPE) = 'INS' THEN
            IF iSLIP_NUMB IS NOT NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_009]' || CHR(13) || '전표생성할때는 전표번호를 지정할 수 없습니다. 지정된 전표번호[' || iSLIP_NUMB || ']');
            END IF;

            SP_GEN_NUMBER_FA (
                 iSYST_LNCD        /* 시스템언어코드 */
               , iUPDT_USID        /* 수정작업자 */
               , iSLIP_DATE        /* 기준일자 */
               , 'SLIP_NUMB'       /* 회계채번유형코드 */
               , iACCT_UNIT        /* 회계채번보조문자열 */
               , LV_SLIP_NUMB      /* 회계채번번호 */
            );
        END IF;

        /* 작성자 유효성 체크 */
        BEGIN

            SELECT MAX(EMPL_NUMB)
              INTO LV_EMPL_NUMB
              FROM HR_MASTXM
             WHERE EMPL_NUMB = iEMPL_NUMB
             ;

            IF LV_EMPL_NUMB IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_010]' || CHR(13) || '인사정보에 등록되지 않은' 
                                        || ' 사원번호 [' || iEMPL_NUMB || ' ' || SF_GET_DEPTNAME(iEMPL_NUMB) || '] 입니다.');
            END IF;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_011]' || CHR(13) || '등록되지 않은'
                                        || ' 사원번호 [' || iEMPL_NUMB || ' ' || SF_GET_DEPTNAME(iEMPL_NUMB) || '] 입니다.');

        END;
        
        /* 회계구분_사업장이 유효성 체크 */
        BEGIN

            SELECT MAX(DP.ENFC_CODE)
              INTO LV_ACCT_GUBN
              FROM VI_DEPTXM DP
             WHERE DP.DEPT_CODE = iDEPT_CODE
             ;

            IF LV_ACCT_GUBN IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_012]' || CHR(13) || '사업장이 지정되지 않은'
                                        || ' 전표작성부서 [' || iDEPT_CODE || ' ' || SF_GET_DEPTNAME(iDEPT_CODE) || '] 입니다.');
            END IF;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_MST_SAVE_013]' || CHR(13) || '등록되지 않은'
                                        || ' 전표작성부서 [' || iDEPT_CODE || ' ' || SF_GET_DEPTNAME(iDEPT_CODE) || '] 입니다.');

        END;


        /* 1) 회계일자는 최초 전표 생성 시 지정 가능하며 승인시 유효해짐.
           2) 회계일자가 빈경우 전표일자를 회계일자로 채워줌. */
        IF iACCT_DATE IS NULL THEN
            LV_ACCT_DATE := iSLIP_DATE;
        ELSE
            LV_ACCT_DATE := iACCT_DATE;
        END IF;


        /* 저장 */
        IF UPPER(iCRUD_TYPE) = 'INS' THEN
            SP_SLIP_MASTER_SAVE_SUB01 (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , LV_SLIP_NUMB   /* 전표번호 */
               , iACCT_UNIT     /* 회계단위 */
               , LV_ACCT_GUBN   /* 회계구분_사업장 */
               , iSLIP_DATE     /* 전표일자 */
               , iSLIP_GUBN     /* 전표유형구분 */
               , iREQU_NUMB     /* 품의번호 */
               , iTITL_NAME     /* 제목 */
               , iEMPL_NUMB     /* 사원번호 */
               , iDEPT_CODE     /* 부서코드 */
               , LV_ACCT_DATE   /* 회계일자 */
               , iSOUS_LNKY     /* 출처연결키 */
               , LV_AUTO_YSNO   /* 자동전표여부 */
            );

        /* 저장 */
        ELSIF UPPER(iCRUD_TYPE) = 'UPD' THEN
            SP_SLIP_MASTER_SAVE_SUB02 (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , LV_SLIP_NUMB   /* 전표번호 */
               , iACCT_UNIT     /* 회계단위 */
               , LV_ACCT_GUBN   /* 회계구분_사업장 */
               , iSLIP_DATE     /* 전표일자 */
               , iSLIP_GUBN     /* 전표유형구분 */
               , iREQU_NUMB     /* 품의번호 */
               , iTITL_NAME     /* 제목 */
               , iEMPL_NUMB     /* 사원번호 */
               , iDEPT_CODE     /* 부서코드 */
               , LV_ACCT_DATE   /* 회계일자 */
               , iSOUS_LNKY     /* 출처연결키 */
            );

        END IF;

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (LV_SLIP_NUMB);

        oSLIP_NUMB := LV_SLIP_NUMB; /* 전표번호는 */

    END;


      /**********************************************
        전표마스터 저장/수정 세부 저장
       ********************************************* */
    PROCEDURE SP_SLIP_MASTER_SAVE_SUB01 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
      , iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
      , iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
      , iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
      , iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
      , iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
      , iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
      , iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
      , iAUTO_YSNO     IN TA_SLIPXM.AUTO_YSNO%TYPE   /* 자동전표여부 */
    )
    IS
        M_ROW        TA_SLIPXM%ROWTYPE;    /* 전표마스터 */

    BEGIN

        M_ROW.SLIP_NUMB := iSLIP_NUMB;         /* 전표번호 */
        M_ROW.ACCT_UNIT := iACCT_UNIT;         /* 회계단위 */
        M_ROW.ACCT_GUBN := iACCT_GUBN;         /* 회계구분_사업장 */
        M_ROW.SLIP_DATE := iSLIP_DATE;         /* 전표일자 */
        M_ROW.SLIP_GUBN := iSLIP_GUBN;         /* 전표유형구분 */
        M_ROW.REQU_NUMB := iREQU_NUMB;         /* 품의번호 */
        M_ROW.TITL_NAME := iTITL_NAME;         /* 제목 */
        M_ROW.EMPL_NUMB := iEMPL_NUMB;         /* 사원번호 */
        M_ROW.DEPT_CODE := iDEPT_CODE;         /* 부서코드 */
        M_ROW.ACCT_DATE := iACCT_DATE;         /* 회계일자 */
        M_ROW.SOUS_LNKY := iSOUS_LNKY;         /* 출처연결키 */
        M_ROW.AUTO_YSNO := iAUTO_YSNO;         /* 자동전표여부 */

        M_ROW.APPS_CODE := 'X';                /* 결재상태코드 작성오류=X */

        M_ROW.INST_USID := iUPDT_USID;         /* 입력작업자 */
        M_ROW.UPDT_USID := iUPDT_USID;         /* 수정작업자 */

        /* 전표마스터 */
        INSERT INTO TA_SLIPXM (
             SLIP_NUMB          /* 전표번호 */
           , ACCT_UNIT          /* 회계단위 */
           , ACCT_GUBN          /* 회계구분_사업장 */
           , SLIP_DATE          /* 전표일자 */
           , SLIP_GUBN          /* 전표유형구분 */
           , REQU_NUMB          /* 품의번호 */
           , TITL_NAME          /* 제목 */
           , EMPL_NUMB          /* 사원번호 */
           , DEPT_CODE          /* 부서코드 */
           , ACCT_DATE          /* 회계일자 */
           , SOUS_LNKY          /* 출처연결키 */
           , INST_USID          /* 입력작업자 */
           , INST_DATE          /* 입력일시 */
           , UPDT_USID          /* 수정작업자 */
           , UPDT_DATE          /* 수정일시 */
           , APPR_DATE          /* 승인일자 */
           , APPS_CODE          /* 결재상태코드 작성오류=X  */
           , AUTO_YSNO          /* 자동전표여부 */
           , APPR_DOCN          /* 결재문서번호 */
        )
        VALUES
        (
             M_ROW.SLIP_NUMB    /* 전표번호 */
           , M_ROW.ACCT_UNIT    /* 회계단위 */
           , M_ROW.ACCT_GUBN    /* 회계구분_사업장 */
           , M_ROW.SLIP_DATE    /* 전표일자 */
           , M_ROW.SLIP_GUBN    /* 전표유형구분 */
           , M_ROW.REQU_NUMB    /* 품의번호 */
           , M_ROW.TITL_NAME    /* 제목 */
           , M_ROW.EMPL_NUMB    /* 사원번호 */
           , M_ROW.DEPT_CODE    /* 부서코드 */
           , M_ROW.ACCT_DATE    /* 회계일자 */
           , M_ROW.SOUS_LNKY    /* 출처연결키 */
           , M_ROW.UPDT_USID    /* 입력작업자 */
           , SYSDATE            /* 입력일시 */
           , M_ROW.UPDT_USID    /* 수정작업자 */
           , SYSDATE            /* 수정일시 */
           , M_ROW.ACCT_DATE    /* 회계일자 */
           , M_ROW.APPS_CODE    /* 결재상태코드 작성오류=X  */
           , M_ROW.AUTO_YSNO    /* 자동전표여부 */
           , M_ROW.APPR_DOCN    /* 결재문서번호 */
        );

    END;

      /**********************************************
        전표마스터 저장/수정 세부 수정
       ********************************************* */
    PROCEDURE SP_SLIP_MASTER_SAVE_SUB02 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
      , iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
      , iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
      , iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
      , iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
      , iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
      , iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
      , iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
    )
    IS
        M_ROW        TA_SLIPXM%ROWTYPE;    /* 전표마스터 */

    BEGIN
        
        M_ROW.SLIP_NUMB := iSLIP_NUMB;         /* 전표번호 */
        M_ROW.ACCT_UNIT := iACCT_UNIT;         /* 회계단위 */
        M_ROW.ACCT_GUBN := iACCT_GUBN;         /* 회계구분_사업장 */
        M_ROW.SLIP_DATE := iSLIP_DATE;         /* 전표일자 */
        M_ROW.SLIP_GUBN := iSLIP_GUBN;         /* 전표유형구분 */
        M_ROW.REQU_NUMB := iREQU_NUMB;         /* 품의번호 */
        M_ROW.TITL_NAME := iTITL_NAME;         /* 제목 */
        M_ROW.EMPL_NUMB := iEMPL_NUMB;         /* 사원번호 */
        M_ROW.DEPT_CODE := iDEPT_CODE;         /* 부서코드 */
        M_ROW.ACCT_DATE := iACCT_DATE;         /* 회계일자 */
        M_ROW.SOUS_LNKY := iSOUS_LNKY;         /* 출처연결키 */

        M_ROW.INST_USID := iUPDT_USID;         /* 입력작업자 */
        M_ROW.UPDT_USID := iUPDT_USID;         /* 수정작업자 */

        /* 전표마스터 */
        UPDATE TA_SLIPXM 
           SET ACCT_UNIT = M_ROW.ACCT_UNIT /* 회계단위 */
             , ACCT_GUBN = M_ROW.ACCT_GUBN /* 회계구분_사업장 */
             , SLIP_DATE = M_ROW.SLIP_DATE /* 전표일자 */
             , SLIP_GUBN = M_ROW.SLIP_GUBN /* 전표유형구분 */
             , REQU_NUMB = M_ROW.REQU_NUMB /* 품의번호 */
             , TITL_NAME = M_ROW.TITL_NAME /* 제목 */
             , EMPL_NUMB = M_ROW.EMPL_NUMB /* 사원번호 */
             , DEPT_CODE = M_ROW.DEPT_CODE /* 부서코드 */
             , ACCT_DATE = M_ROW.ACCT_DATE /* 회계일자 */
             , APPR_DATE = M_ROW.ACCT_DATE /* 회계일자 */
             , SOUS_LNKY = M_ROW.SOUS_LNKY /* 출처연결키 */
             , APPR_DOCN = M_ROW.APPR_DOCN /* 결재문서번호 */
             , UPDT_USID = M_ROW.UPDT_USID /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
         WHERE SLIP_NUMB = M_ROW.SLIP_NUMB /* 전표번호 */
         ;

    END;

      /**********************************************
        전표라인 저장/수정
       ********************************************* */
    PROCEDURE SP_SLIP_LINE_SAVE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
      , iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
      , iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
      , iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
      , iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
      , iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
      , iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
      , iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
      , iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
      , iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
      , iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
      , iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
      , iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
      , iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
      , iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
      , iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
      , iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
      , iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
      , iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
      , iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
      , iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
      , iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
      , iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
      , iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
      , iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
      , iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
      , iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
      , iSLCT_CODE     IN TA_SLIPNT.SLCT_CODE%TYPE   /* 전표통제유형코드 */
    )
    IS
        LV_ACCT_UNIT    TA_SLIPNT.ACCT_UNIT%TYPE;   /* 회계단위 */
        LV_ACCT_GUBN    TA_SLIPNT.ACCT_GUBN%TYPE;   /* 회계구분_사업장 */

        LV_OSLI_CNTX    NUMBER(10);    /* 발생전표건수 */

    BEGIN

        /* CRUD_TYPE 확인 */
        SP_CRUD_TYPE_CHK (iCRUD_TYPE);

        /* 필수항목 확인한다. */ /* 확인구분, 전표번호, 전표라인번호, 항목명, 항목값 */
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_001]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iSLIP_NUMB, '전표번호');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_002]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iSLIP_LINE, '행번호');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_002]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iUPDT_USID, '작업자');

        /* 행번호 */
        IF LENGTH(iSLIP_LINE) <> 4 THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_SAVE_003]' || CHR(13) || '전표행번호는 4자리 이어야 합니다. [' || iSLIP_LINE || ']');
        END IF;

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);

        LV_ACCT_UNIT := TA_SLIPXM_ROW.ACCT_UNIT; /* 회계단위 */
        LV_ACCT_GUBN := TA_SLIPXM_ROW.ACCT_GUBN; /* 회계구분_사업장 */

--                RAISE_APPLICATION_ERROR(-20000, '회계구분_사업장['
--                    || LV_ACCT_GUBN || ' '
--                    || ' 행번호[' || iSLIP_LINE || ']'
--                    );

        SP_MUST_CHECK ('[SLIP_LINE_SAVE_004]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, LV_ACCT_UNIT, '회계단위');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_005]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, LV_ACCT_GUBN, '회계구분_사업장');

        SP_MUST_CHECK ('[SLIP_LINE_SAVE_006]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iACCT_INTL, '계정과목코드');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_007]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iUSEX_DEPT, '사용부서');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_008]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iDRCR_GUBN, '차대구분');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_009]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iCURR_GUBN, '통화구분');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_010]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iEXCH_RATE, '환율', 'NUMBER');
--        SP_MUST_CHECK ('전표라인', iSLIP_NUMB, iSLIP_LINE, iFORI_AMNT, '외화금액', 'NUMBER');
--        SP_MUST_CHECK ('전표라인', iSLIP_NUMB, iSLIP_LINE, iSLIP_AMNT, '전표금액', 'NUMBER');

        SP_MUST_CHECK ('[SLIP_LINE_SAVE_011]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iREMK_NAME, '적요');
        SP_MUST_CHECK ('[SLIP_LINE_SAVE_012]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iSORT_ORDR, '정렬순서', 'NUMBER');

        /* 계정과목 */
        SP_TA_ACCTXM (iACCT_INTL);

        /* 계정코드 사용여부를 확인한다. */
        IF NVL(TA_ACCTXM_ROW.SLIP_YSNO, '0') <> '1' OR NVL(TA_ACCTXM_ROW.ACCT_YSNO, '0') <> '1' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_SAVE_013]' || CHR(13) 
                                    || '[' || iACCT_INTL || ' ' || TA_ACCTXM_ROW.ACCT_NAME || '] 계정과목은'
                                    || ' 전표에서 사용할 수 없습니다.'
                                    || ' 행번호[' || iSLIP_LINE || ']');
        END IF;

 

        /* 계정코드 증빙사용여부=1 이면 증빙종류는 필수이다. */
        /* 계정코드 차대구분과 전표 차대구분이 같을때 */
        IF TA_ACCTXM_ROW.EVID_YSNO = '1' AND TA_ACCTXM_ROW.DRCR_GUBN = iDRCR_GUBN THEN
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_014]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iEVID_DOCU, '증빙종류', 'CHAR', TA_ACCTXM_ROW.EVID_YSNO);
        ELSE
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_015]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iEVID_DOCU, '증빙종류', 'CHAR', '0');
        END IF;

        /* 계정코드 코스트센터사용여부=1 이면 코스트센터는 필수이다. */
        /* 계정코드 차대구분과 전표 차대구분이 같을때 */
        IF TA_ACCTXM_ROW.CSUS_YSNO = '1' AND TA_ACCTXM_ROW.DRCR_GUBN = iDRCR_GUBN THEN
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_016]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iCSTC_CODE, '코스트센터', 'CHAR', TA_ACCTXM_ROW.CSUS_YSNO);
        ELSE
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_017]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iCSTC_CODE, '코스트센터', 'CHAR', '0');
        END IF;

        /* 계정코드 예산사용여부=1 이면 예산과목은 필수이다. */
        /* 계정코드 차대구분과 전표 차대구분이 같을때 */
        IF TA_ACCTXM_ROW.BUDG_YSNO = '1' AND TA_ACCTXM_ROW.DRCR_GUBN = iDRCR_GUBN THEN
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_018]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iBUDG_GUBN, '예산구분', 'CHAR', TA_ACCTXM_ROW.BUDG_YSNO);
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_019]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iBDSB_CODE, '예산과목', 'CHAR', TA_ACCTXM_ROW.BUDG_YSNO);
        ELSE 
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_020]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iBUDG_GUBN, '예산구분', 'CHAR', '0');
            SP_MUST_CHECK ('[SLIP_LINE_SAVE_021]' || CHR(13) || '전표라인', iSLIP_NUMB, iSLIP_LINE, iBDSB_CODE, '예산과목', 'CHAR', '0');
        END IF;

        /* 미결계정이 정산처리 될때는 발생전표가 있어야 한다. */
        IF TA_ACCTXM_ROW.GUNB_YSNO = '1' AND TA_ACCTXM_ROW.DRCR_GUBN <> iDRCR_GUBN THEN
            IF iOSLI_NUMB IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_SAVE_022]' || CHR(13) 
                                        || '계정과목 [' || TA_ACCTXM_ROW.ACCT_NAME || '] 이(가) ' 
                                        || SF_GET_COMMNAME('DRCR_GUBN', iDRCR_GUBN) || '일 때는 발생전표를 지정해야 합니다.'
                                        || ' 정산행번호[' || iSLIP_LINE || ']');
            END IF;

        ELSIF iOSLI_NUMB IS NOT NULL THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_SAVE_023]' || CHR(13) 
                                    || '계정과목 [' || TA_ACCTXM_ROW.ACCT_NAME || '] 은(는)' 
                                    || ' 미결계정이 아니므로 발생전표를 지정할 수 없습니다.'
                                    || ' 행번호[' || iSLIP_LINE || ']');

        END IF;

        /* 환율 */
        IF iCURR_GUBN = 'KRW' THEN
            IF NVL(iEXCH_RATE, 0) <> 1 THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_SAVE_024]' || CHR(13) || '원화(KRW) 환율은 1 이어야 합니다. 행번호[' || iSLIP_LINE || ']');
            END IF;
        END IF;
        
        /* 전표증빙이 증빙자료생성여부=1 아니면 부가세를 정리한다. */
        IF NVL(SF_GET_REFXFILD('EVID_DOCU', iEVID_DOCU, '2'), '0') <> '1' THEN
            SP_SLIP_LINEVAT_DELETE (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , iSLIP_NUMB     /* 전표번호 */
               , iSLIP_LINE     /* 전표라인번호 */
            );
        END IF;

        /* 저장 */
        IF UPPER(iCRUD_TYPE) = 'INS' THEN
            SP_SLIP_LINE_SAVE_SUB01 (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , iCRUD_TYPE     /* CRUD TYPE(INS,UPD) */
               , iSLIP_NUMB     /* 전표번호 */
               , iSLIP_LINE     /* 전표라인번호 */
               , LV_ACCT_UNIT   /* 회계단위 */
               , LV_ACCT_GUBN   /* 회계구분_사업장 */
               , iACCT_INTL     /* 계정과목코드 */
               , iUSEX_DEPT     /* 사용부서 */
               , iCSTC_CODE     /* 코스트센터코드 */
               , iDRCR_GUBN     /* 차대구분 */
               , iCURR_GUBN     /* 통화구분 */
               , iEXCH_RATE     /* 환율 */
               , iFORI_AMNT     /* 외화금액 */
               , iSLIP_AMNT     /* 전표금액 */
               , iOSLI_NUMB     /* 상대전표번호 */
               , iOSLI_LINE     /* 상대전표순번 */
               , iBUDG_GUBN     /* 예산구분 */
               , iPROJ_CODE     /* 프로젝트코드 */
               , iBGRQ_NUMB     /* 예산품의번호 */
               , iBUDG_DEPT     /* 예산부서코드 */
               , iBUDG_YYMM     /* 예산년월 */
               , iBDSB_CODE     /* 예산과목코드 */
               , iBDSP_CODE     /* 예산세목코드 */
               , iREMK_NAME     /* 적요 */
               , iREMK_NAM2     /* 적요2 */
               , iREMK_NAM3     /* 적요3 */
               , iEVID_DOCU     /* 증빙종류 */
               , iPAYX_YSNO     /* 출납처리여부 */
               , iPAYX_DATE     /* 지급일 */
               , iLEDG_GUBN     /* 출납방법 */
               , iBANK_INOU     /* 입출구분 */
               , iPRIN_ORDR     /* 출력순서 */
               , iSORT_ORDR     /* 정렬순서 */
               , iSLCT_CODE     /* 전표통제유형코드 */
            );

        /* 저장 */
        ELSIF UPPER(iCRUD_TYPE) = 'UPD' THEN
            SP_SLIP_LINE_SAVE_SUB02 (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , iCRUD_TYPE     /* CRUD TYPE(INS,UPD) */
               , iSLIP_NUMB     /* 전표번호 */
               , iSLIP_LINE     /* 전표라인번호 */
               , LV_ACCT_UNIT   /* 회계단위 */
               , LV_ACCT_GUBN   /* 회계구분_사업장 */
               , iACCT_INTL     /* 계정과목코드 */
               , iUSEX_DEPT     /* 사용부서 */
               , iCSTC_CODE     /* 코스트센터코드 */
               , iDRCR_GUBN     /* 차대구분 */
               , iCURR_GUBN     /* 통화구분 */
               , iEXCH_RATE     /* 환율 */
               , iFORI_AMNT     /* 외화금액 */
               , iSLIP_AMNT     /* 전표금액 */
               , iOSLI_NUMB     /* 상대전표번호 */
               , iOSLI_LINE     /* 상대전표순번 */
               , iBUDG_GUBN     /* 예산구분 */
               , iPROJ_CODE     /* 프로젝트코드 */
               , iBGRQ_NUMB     /* 예산품의번호 */
               , iBUDG_DEPT     /* 예산부서코드 */
               , iBUDG_YYMM     /* 예산년월 */
               , iBDSB_CODE     /* 예산과목코드 */
               , iBDSP_CODE     /* 예산세목코드 */
               , iREMK_NAME     /* 적요 */
               , iREMK_NAM2     /* 적요2 */
               , iREMK_NAM3     /* 적요3 */
               , iEVID_DOCU     /* 증빙종류 */
               , iPAYX_YSNO     /* 출납처리여부 */
               , iPAYX_DATE     /* 지급일 */
               , iLEDG_GUBN     /* 출납방법 */
               , iBANK_INOU     /* 입출구분 */
               , iPRIN_ORDR     /* 출력순서 */
               , iSORT_ORDR     /* 정렬순서 */
            );

        END IF;

        /* 예산체크 */
        IF iBUDG_GUBN IS NOT NULL THEN
              SP_SLIP_BUDG_CHECK(iSLIP_NUMB, iSLIP_LINE);
        END IF;

        /* 발생전표를 정리한다. */
        IF iOSLI_NUMB IS NOT NULL THEN
            SP_BANJE_SLIP(iSLIP_NUMB, iSLIP_LINE);
        END IF;

    END;

      /**********************************************
        전표라인 저장/수정 저장
       ********************************************* */
    PROCEDURE SP_SLIP_LINE_SAVE_SUB01 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
      , iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
      , iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
      , iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
      , iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
      , iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
      , iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
      , iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
      , iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
      , iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
      , iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
      , iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
      , iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
      , iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
      , iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
      , iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
      , iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
      , iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
      , iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
      , iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
      , iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
      , iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
      , iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
      , iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
      , iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
      , iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
      , iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
      , iSLCT_CODE     IN TA_SLIPNT.SLCT_CODE%TYPE   /* 전표통제유형코드 */
    )
    IS
        N_ROW        TA_SLIPNT%ROWTYPE;    /* 전표라인 */

    BEGIN

        N_ROW.SLIP_NUMB := iSLIP_NUMB;         /* 전표번호 */
        N_ROW.SLIP_LINE := iSLIP_LINE;         /* 전표라인번호 */
        N_ROW.ACCT_UNIT := iACCT_UNIT;         /* 회계단위 */
        N_ROW.ACCT_GUBN := iACCT_GUBN;         /* 회계구분_사업장 */
        N_ROW.ACCT_INTL := iACCT_INTL;         /* 계정과목코드 */
        N_ROW.USEX_DEPT := iUSEX_DEPT;         /* 사용부서 */
        N_ROW.CSTC_CODE := iCSTC_CODE;         /* 코스트센터코드 */
        N_ROW.DRCR_GUBN := iDRCR_GUBN;         /* 차대구분 */
        N_ROW.CURR_GUBN := iCURR_GUBN;         /* 통화구분 */
        N_ROW.EXCH_RATE := iEXCH_RATE;         /* 환율 */
        N_ROW.FORI_AMNT := iFORI_AMNT;         /* 외화금액 */
        N_ROW.SLIP_AMNT := iSLIP_AMNT;         /* 전표금액 */
        N_ROW.OSLI_NUMB := iOSLI_NUMB;         /* 상대전표번호 */
        N_ROW.OSLI_LINE := iOSLI_LINE;         /* 상대전표순번 */
        N_ROW.UNMC_YSNO := '0';                /* 미불완료여부 */
        N_ROW.BUDG_GUBN := iBUDG_GUBN;         /* 예산구분 */
        N_ROW.PROJ_CODE := iPROJ_CODE;         /* 프로젝트코드 */
        N_ROW.BGRQ_NUMB := iBGRQ_NUMB;         /* 예산품의번호 */
        N_ROW.BUDG_DEPT := iBUDG_DEPT;         /* 예산부서코드 */
        N_ROW.BUDG_YYMM := iBUDG_YYMM;         /* 예산년월 */
        N_ROW.BDSB_CODE := iBDSB_CODE;         /* 예산과목코드 */
        N_ROW.BDSP_CODE := iBDSP_CODE;         /* 예산세목코드 */
        N_ROW.REMK_NAME := iREMK_NAME;         /* 적요 */
        N_ROW.REMK_NAM2 := iREMK_NAM2;         /* 적요2 */
        N_ROW.REMK_NAM3 := iREMK_NAM3;         /* 적요3 */
        N_ROW.EVID_DOCU := iEVID_DOCU;         /* 증빙종류 */
        N_ROW.PAYX_YSNO := iPAYX_YSNO;         /* 출납처리여부 */
        N_ROW.PAYX_DATE := iPAYX_DATE;         /* 지급일 */
        N_ROW.LEDG_GUBN := iLEDG_GUBN;         /* 출납방법 */
        N_ROW.BANK_INOU := iBANK_INOU;         /* 입출구분 */
        N_ROW.PRIN_ORDR := iPRIN_ORDR;         /* 출력순서 */
        N_ROW.SORT_ORDR := iSORT_ORDR;         /* 정렬순서 */
        N_ROW.INST_USID := iUPDT_USID;         /* 입력작업자 */
        N_ROW.UPDT_USID := iUPDT_USID;         /* 수정작업자 */
        N_ROW.SLCT_CODE := iSLCT_CODE;         /* 전표통제유형코드 */
        
        /* 전표마스터 */
--        SP_TA_SLIPXM (iSLIP_NUMB);
--        N_ROW.ACCT_DATE := TA_SLIPXM_ROW.ACCT_DATE; /* 회계일자 */

        /* 전표분개내역 */
        INSERT INTO TA_SLIPNT (
             SLIP_NUMB          /* 전표번호 */
           , SLIP_LINE          /* 전표라인번호 */
           , ACCT_UNIT          /* 회계단위 */
           , ACCT_GUBN          /* 회계구분_사업장 */
           , ACCT_INTL          /* 계정과목코드 */
           , USEX_DEPT          /* 사용부서 */
           , CSTC_CODE          /* 코스트센터코드 */
           , DRCR_GUBN          /* 차대구분 */
           , CURR_GUBN          /* 통화구분 */
           , EXCH_RATE          /* 환율 */
           , FORI_AMNT          /* 외화금액 */
           , SLIP_AMNT          /* 전표금액 */
           , OSLI_DATE          /* 상대전표일자 */
           , OSLI_NUMB          /* 상대전표번호 */
           , OSLI_LINE          /* 상대전표순번 */
           , UNMC_YSNO          /* 미불완료여부 */
           , BUDG_GUBN          /* 예산구분 */
           , PROJ_CODE          /* 프로젝트코드 */
           , BGRQ_NUMB          /* 예산품의번호 */
           , BUDG_DEPT          /* 예산부서코드 */
           , BUDG_YYMM          /* 예산년월 */
           , BDSB_CODE          /* 예산과목코드 */
           , BDSP_CODE          /* 예산세목코드 */
           , REMK_NAME          /* 적요 */
           , REMK_NAM2          /* 적요2 */
           , REMK_NAM3          /* 적요3 */
           , EVID_DOCU          /* 증빙종류 */
           , PAYX_YSNO          /* 출납처리여부 */
           , PAYX_DATE          /* 지급일 */
           , LEDG_GUBN          /* 출납방법 */
           , BANK_INOU          /* 입출구분 */
           , PRIN_ORDR          /* 출력순서 */
           , SORT_ORDR          /* 정렬순서 */
           , SLCT_CODE          /* 전표통제유형코드 */
           , SEND_KEY1          /* 전송키1 */
           , SEND_KEY2          /* 전송키2 */
           , ACCT_DATE          /* 회계일자 */
           , INST_USID          /* 입력작업자 */
           , INST_DATE          /* 입력일시 */
           , UPDT_USID          /* 수정작업자 */
           , UPDT_DATE          /* 수정일시 */
        )
        VALUES
        (
             N_ROW.SLIP_NUMB    /* 전표번호 */
           , N_ROW.SLIP_LINE    /* 전표라인번호 */
           , N_ROW.ACCT_UNIT    /* 회계단위 */
           , N_ROW.ACCT_GUBN    /* 회계구분_사업장 */
           , N_ROW.ACCT_INTL    /* 계정과목코드 */
           , N_ROW.USEX_DEPT    /* 사용부서 */
           , N_ROW.CSTC_CODE    /* 코스트센터코드 */
           , N_ROW.DRCR_GUBN    /* 차대구분 */
           , N_ROW.CURR_GUBN    /* 통화구분 */
           , N_ROW.EXCH_RATE    /* 환율 */
           , N_ROW.FORI_AMNT    /* 외화금액 */
           , N_ROW.SLIP_AMNT    /* 전표금액 */
           , N_ROW.OSLI_DATE    /* 상대전표일자 */
           , N_ROW.OSLI_NUMB    /* 상대전표번호 */
           , N_ROW.OSLI_LINE    /* 상대전표순번 */
           , N_ROW.UNMC_YSNO    /* 미불완료여부 */
           , N_ROW.BUDG_GUBN    /* 예산구분 */
           , N_ROW.PROJ_CODE    /* 프로젝트코드 */
           , N_ROW.BGRQ_NUMB    /* 예산품의번호 */
           , N_ROW.BUDG_DEPT    /* 예산부서코드 */
           , N_ROW.BUDG_YYMM    /* 예산년월 */
           , N_ROW.BDSB_CODE    /* 예산과목코드 */
           , N_ROW.BDSP_CODE    /* 예산세목코드 */
           , N_ROW.REMK_NAME    /* 적요 */
           , N_ROW.REMK_NAM2    /* 적요2 */
           , N_ROW.REMK_NAM3    /* 적요3 */
           , N_ROW.EVID_DOCU    /* 증빙종류 */
           , N_ROW.PAYX_YSNO    /* 출납처리여부 */
           , N_ROW.PAYX_DATE    /* 지급일 */
           , N_ROW.LEDG_GUBN    /* 출납방법 */
           , N_ROW.BANK_INOU    /* 입출구분 */
           , N_ROW.PRIN_ORDR    /* 출력순서 */
           , N_ROW.SORT_ORDR    /* 정렬순서 */
           , N_ROW.SLCT_CODE    /* 전표통제유형코드 */
           , N_ROW.SEND_KEY1    /* 전송키1 */
           , N_ROW.SEND_KEY2    /* 전송키2 */
           , N_ROW.ACCT_DATE    /* 회계일자 */
           , N_ROW.UPDT_USID    /* 입력작업자 */
           , SYSDATE            /* 입력일시 */
           , N_ROW.UPDT_USID    /* 수정작업자 */
           , SYSDATE            /* 수정일시 */
        );

    END;

      /**********************************************
        전표라인 저장/수정 수정
       ********************************************* */
    PROCEDURE SP_SLIP_LINE_SAVE_SUB02 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
      , iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
      , iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
      , iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
      , iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
      , iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
      , iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
      , iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
      , iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
      , iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
      , iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
      , iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
      , iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
      , iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
      , iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
      , iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
      , iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
      , iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
      , iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
      , iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
      , iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
      , iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
      , iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
      , iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
      , iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
      , iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
      , iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
      , iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
    )
    IS
        N_ROW           TA_SLIPNT%ROWTYPE;    /* 전표라인 */

        LV_OSLI_NUMB    TA_SLIPNT.OSLI_NUMB%TYPE;   /* 상대전표번호 */
        LV_OSLI_LINE    TA_SLIPNT.OSLI_LINE%TYPE;   /* 상대전표순번 */

    BEGIN

        /* 전표라인 */
        SP_TA_SLIPNT (iSLIP_NUMB, iSLIP_LINE);

        LV_OSLI_NUMB := TA_SLIPNT_ROW.OSLI_NUMB;    /* 상대전표번호 */
        LV_OSLI_LINE := TA_SLIPNT_ROW.OSLI_LINE;    /* 상대전표순번 */

        /* 발생전표가 지정되어 있으면 신규 발생전표와 비교해서 이전과 다르면 미불완료여부를 정리해야 한다. */
        IF LV_OSLI_NUMB IS NOT NULL THEN
            UPDATE TA_SLIPNT
               SET UNMC_YSNO = '0'                 /* 미불완료여부 */
             WHERE SLIP_NUMB = LV_OSLI_NUMB        /* 발생전표번호 */
               AND SLIP_LINE = LV_OSLI_LINE        /* 발생전표행번호 */
               ;
        END IF;

        N_ROW.SLIP_NUMB := iSLIP_NUMB;         /* 전표번호 */
        N_ROW.SLIP_LINE := iSLIP_LINE;         /* 전표라인번호 */
        N_ROW.ACCT_UNIT := iACCT_UNIT;         /* 회계단위 */
        N_ROW.ACCT_GUBN := iACCT_GUBN;         /* 회계구분_사업장 */
        N_ROW.ACCT_INTL := iACCT_INTL;         /* 계정과목코드 */
        N_ROW.USEX_DEPT := iUSEX_DEPT;         /* 사용부서 */
        N_ROW.CSTC_CODE := iCSTC_CODE;         /* 코스트센터코드 */
        N_ROW.DRCR_GUBN := iDRCR_GUBN;         /* 차대구분 */
        N_ROW.CURR_GUBN := iCURR_GUBN;         /* 통화구분 */
        N_ROW.EXCH_RATE := iEXCH_RATE;         /* 환율 */
        N_ROW.FORI_AMNT := iFORI_AMNT;         /* 외화금액 */
        N_ROW.SLIP_AMNT := iSLIP_AMNT;         /* 전표금액 */
        N_ROW.OSLI_NUMB := iOSLI_NUMB;         /* 상대전표번호 */
        N_ROW.OSLI_LINE := iOSLI_LINE;         /* 상대전표순번 */
        N_ROW.BUDG_GUBN := iBUDG_GUBN;         /* 예산구분 */
        N_ROW.PROJ_CODE := iPROJ_CODE;         /* 프로젝트코드 */
        N_ROW.BGRQ_NUMB := iBGRQ_NUMB;         /* 예산품의번호 */
        N_ROW.BUDG_DEPT := iBUDG_DEPT;         /* 예산부서코드 */
        N_ROW.BUDG_YYMM := iBUDG_YYMM;         /* 예산년월 */
        N_ROW.BDSB_CODE := iBDSB_CODE;         /* 예산과목코드 */
        N_ROW.BDSP_CODE := iBDSP_CODE;         /* 예산세목코드 */
        N_ROW.REMK_NAME := iREMK_NAME;         /* 적요 */
        N_ROW.REMK_NAM2 := iREMK_NAM2;         /* 적요2 */
        N_ROW.REMK_NAM3 := iREMK_NAM3;         /* 적요3 */
        N_ROW.EVID_DOCU := iEVID_DOCU;         /* 증빙종류 */
        N_ROW.PAYX_YSNO := iPAYX_YSNO;         /* 출납처리여부 */
        N_ROW.PAYX_DATE := iPAYX_DATE;         /* 지급일 */
        N_ROW.LEDG_GUBN := iLEDG_GUBN;         /* 출납방법 */
        N_ROW.BANK_INOU := iBANK_INOU;         /* 입출구분 */
        N_ROW.PRIN_ORDR := iPRIN_ORDR;         /* 출력순서 */
        N_ROW.SORT_ORDR := iSORT_ORDR;         /* 정렬순서 */
        N_ROW.INST_USID := iUPDT_USID;         /* 입력작업자 */
        N_ROW.UPDT_USID := iUPDT_USID;         /* 수정작업자 */

--        /* 전표마스터 */
--        SP_TA_SLIPXM (iSLIP_NUMB);
--        N_ROW.ACCT_DATE := TA_SLIPXM_ROW.ACCT_DATE; /* 회계일자 */
        
        /* 전표분개내역 */
        UPDATE TA_SLIPNT 
           SET ACCT_UNIT = N_ROW.ACCT_UNIT /* 회계단위 */
             , ACCT_GUBN = N_ROW.ACCT_GUBN /* 회계구분_사업장 */
             , ACCT_INTL = N_ROW.ACCT_INTL /* 계정과목코드 */
             , USEX_DEPT = N_ROW.USEX_DEPT /* 사용부서 */
             , CSTC_CODE = N_ROW.CSTC_CODE /* 코스트센터코드 */
             , DRCR_GUBN = N_ROW.DRCR_GUBN /* 차대구분 */
             , CURR_GUBN = N_ROW.CURR_GUBN /* 통화구분 */
             , EXCH_RATE = N_ROW.EXCH_RATE /* 환율 */
             , FORI_AMNT = N_ROW.FORI_AMNT /* 외화금액 */
             , SLIP_AMNT = N_ROW.SLIP_AMNT /* 전표금액 */
             , OSLI_NUMB = N_ROW.OSLI_NUMB /* 상대전표번호 */
             , OSLI_LINE = N_ROW.OSLI_LINE /* 상대전표순번 */
             , BUDG_GUBN = N_ROW.BUDG_GUBN /* 예산구분 */
             , PROJ_CODE = N_ROW.PROJ_CODE /* 프로젝트코드 */
             , BGRQ_NUMB = N_ROW.BGRQ_NUMB /* 예산품의번호 */
             , BUDG_DEPT = N_ROW.BUDG_DEPT /* 예산부서코드 */
             , BUDG_YYMM = N_ROW.BUDG_YYMM /* 예산년월 */
             , BDSB_CODE = N_ROW.BDSB_CODE /* 예산과목코드 */
             , BDSP_CODE = N_ROW.BDSP_CODE /* 예산세목코드 */
             , REMK_NAME = N_ROW.REMK_NAME /* 적요 */
             , REMK_NAM2 = N_ROW.REMK_NAM2 /* 적요2 */
             , REMK_NAM3 = N_ROW.REMK_NAM3 /* 적요3 */
             , EVID_DOCU = N_ROW.EVID_DOCU /* 증빙종류 */
             , PAYX_YSNO = N_ROW.PAYX_YSNO /* 출납처리여부 */
             , PAYX_DATE = N_ROW.PAYX_DATE /* 지급일 */
             , LEDG_GUBN = N_ROW.LEDG_GUBN /* 출납방법 */
             , BANK_INOU = N_ROW.BANK_INOU /* 입출구분 */
             , PRIN_ORDR = N_ROW.PRIN_ORDR /* 출력순서 */
             , SORT_ORDR = N_ROW.SORT_ORDR /* 정렬순서 */
             , SEND_KEY1 = N_ROW.SEND_KEY1 /* 전송키1 */
             , SEND_KEY2 = N_ROW.SEND_KEY2 /* 전송키2 */
             , ACCT_DATE = N_ROW.ACCT_DATE /* 회계일자 */
             , UPDT_USID = N_ROW.UPDT_USID /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
         WHERE SLIP_NUMB = N_ROW.SLIP_NUMB /* 전표번호 */
           AND SLIP_LINE = N_ROW.SLIP_LINE /* 전표라인번호 */
        ;

        /* 정산전표는 발생전표가 승인처리 되있어야 한다. */
        IF iOSLI_NUMB IS NOT NULL THEN
            SP_BANJE_SLIP(iSLIP_NUMB, iSLIP_LINE);
        END IF;

    END;

      /**********************************************
        전표라인 관리항목 저장/수정
       ********************************************* */
    PROCEDURE SP_SLIP_LINERF_SAVE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPRF.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPRF.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iCOND_CODE     IN TA_SLIPRF.COND_CODE%TYPE   /* 관리항목코드 */
      , iCOND_VACD     IN TA_SLIPRF.COND_VACD%TYPE   /* 관리항목값 */
      , iCOND_VANM     IN TA_SLIPRF.COND_VANM%TYPE   /* 관리항목값명 */
    )
    IS
        F_ROW        TA_SLIPRF%ROWTYPE;    /* 전표라인 관리항목 */

    BEGIN

        /* 필수항목 확인한다. */ /* 확인구분, 전표번호, 전표라인번호, 항목명, 항목값 */
        SP_MUST_CHECK ('[SLIP_RF_SAVE_001]' || CHR(13) || '전표관리항목', iSLIP_NUMB, iSLIP_LINE, iSLIP_NUMB, '전표번호');
        SP_MUST_CHECK ('[SLIP_RF_SAVE_002]' || CHR(13) || '전표관리항목', iSLIP_NUMB, iSLIP_LINE, iSLIP_LINE, '행번호');
        SP_MUST_CHECK ('[SLIP_RF_SAVE_002]' || CHR(13) || '전표관리항목', iSLIP_NUMB, iSLIP_LINE, iUPDT_USID, '작업자');

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);
        /* 전표라인 */
        SP_TA_SLIPNT (iSLIP_NUMB, iSLIP_LINE);
        /* 계정코드 */
        SP_TA_ACCTXM (TA_SLIPNT_ROW.ACCT_INTL);
        /* 계정관리항목 */
        SP_TA_ACCTXD (TA_SLIPNT_ROW.ACCT_INTL, iCOND_CODE);

        /* 관리항목코드 등록여부를 확인한다. */
        IF TA_ACCTXD_ROW.COND_CODE IS NULL THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_RF_SAVE_003]' || CHR(13) 
                                    || '계정코드 관리항목에 등록되지 않은 관리코드를 지정 하였습니다.' || CHR(13)
                                    || '계정과목 [' || TA_SLIPNT_ROW.ACCT_INTL || ' ' || SF_GET_ACCTNAME(TA_SLIPNT_ROW.ACCT_INTL) || ']'
                                    || ' 관리코드 [' || iCOND_CODE || ' ' || SF_GET_CONDNAME(iCOND_CODE) || ']'
                                    || ' 행번호 [' || iSLIP_LINE || ']');
        END IF;

        /*  TA_ACCTXD_ROW.DRCR_YSNO
        0    차대변선택
        1    차대변필수
        2    차변필수
        3    대변필수
        4    차변선택
        5    대변선택
        */

        /* 관리항목이 미불여부=1 이면 차대모두 필수이다. */
        IF TA_ACCTXD_ROW.UNUS_YSNO = '1' THEN
            TA_ACCTXD_ROW.DRCR_YSNO := '1'; /* 차대변필수 */
        END IF;

        /* 관리항목 공란이면 확인한다. */
        IF iCOND_VACD IS NULL THEN
            IF TA_ACCTXD_ROW.DRCR_YSNO = '1' OR     /* 차대변필수 */
                (TA_ACCTXD_ROW.DRCR_YSNO = '2' AND TA_SLIPNT_ROW.DRCR_GUBN = 'D') OR      /* 차변필수 */
                (TA_ACCTXD_ROW.DRCR_YSNO = '3' AND TA_SLIPNT_ROW.DRCR_GUBN = 'C') THEN     /* 대변필수 */
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_RF_SAVE_004]' || CHR(13) 
                                        || '[' || TA_ACCTXM_ROW.ACCT_INTL || ' ' || TA_ACCTXM_ROW.ACCT_NAME || '] 계정과목의 ' 
                                        || SF_GET_COMMNAME('DRCR_GUBN', TA_SLIPNT_ROW.DRCR_GUBN)
                                        || ' 관리항목 [' || SF_GET_CONDNAME(iCOND_CODE) || ']은(는)'
                                        || ' 필수입니다.'
                                        || ' [' ||SF_GET_COMMNAME('DRCR_YSNO', TA_ACCTXD_ROW.DRCR_YSNO) || ']'
                                        || ' 행번호 [' ||  iSLIP_LINE || ']');
            END IF;
        END IF;

        F_ROW.SLIP_NUMB := iSLIP_NUMB;         /* 전표번호 */
        F_ROW.SLIP_LINE := iSLIP_LINE;         /* 전표라인번호 */
        F_ROW.COND_CODE := iCOND_CODE;         /* 관리항목코드 */
        F_ROW.COND_VACD := TRIM(iCOND_VACD);   /* 관리항목값 */
        F_ROW.COND_VANM := iCOND_VANM;         /* 관리항목값명 */
        F_ROW.INST_USID := iUPDT_USID;         /* 입력작업자 */
        F_ROW.UPDT_USID := iUPDT_USID;         /* 수정작업자 */

        /* 관리항목코드를 가져온다 */
        SP_TA_ACCTXF (iCOND_CODE);

        /* 관리항목컬럼으로 관리항목값명을 정리한다. 관리항목값이 없으면 처리하지 않는다. */
        IF TA_ACCTXF_ROW.COND_COLM IS NOT NULL AND TRIM(iCOND_VACD) IS NOT NULL THEN
            F_ROW.COND_VANM := SF_GET_CONDVANM(TA_ACCTXF_ROW.COND_COLM, F_ROW.COND_VACD, TA_ACCTXF_ROW.COMM_CODE);

            IF F_ROW.COND_VANM IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_RF_SAVE_005]' || CHR(13) 
                                        || '[' || TA_ACCTXM_ROW.ACCT_INTL  || ' ' || TA_ACCTXM_ROW.ACCT_NAME || ']'
                                        || ' 계정과목 ' || SF_GET_COMMNAME('DRCR_GUBN', TA_SLIPNT_ROW.DRCR_GUBN) || '의'
                                        || ' 관리항목값 [' || iCOND_VACD || ']은(는) 유효한 ' || SF_GET_CONDNAME(iCOND_CODE) || '코드가 아닙니다.'
                                        || ' 행번호 [' ||  iSLIP_LINE || ']');
            END IF;
        END IF;

        /* 관리항목값명이 공란이면 관리항목값으로 정리한다. */
        IF F_ROW.COND_VANM IS NULL THEN
            F_ROW.COND_VANM := F_ROW.COND_VACD;
        END IF;

        /* 삭제하고 저장한다. */
        /* 전표관리항목 */
        DELETE TA_SLIPRF
         WHERE SLIP_NUMB = F_ROW.SLIP_NUMB  /* 전표번호 */
           AND SLIP_LINE = F_ROW.SLIP_LINE  /* 전표라인번호 */
           AND COND_CODE = F_ROW.COND_CODE  /* 관리항목코드 */
           ;

        /* 전표관리항목 */
        INSERT INTO TA_SLIPRF (
             SLIP_NUMB          /* 전표번호 */
           , SLIP_LINE          /* 전표라인번호 */
           , COND_CODE          /* 관리항목코드 */
           , COND_VACD          /* 관리항목값 */
           , COND_VANM          /* 관리항목값명 */
           , INST_USID          /* 입력작업자 */
           , INST_DATE          /* 입력일시 */
           , UPDT_USID          /* 수정작업자 */
           , UPDT_DATE          /* 수정일시 */
        )
        VALUES
        (
             F_ROW.SLIP_NUMB    /* 전표번호 */
           , F_ROW.SLIP_LINE    /* 전표라인번호 */
           , F_ROW.COND_CODE    /* 관리항목코드 */
           , F_ROW.COND_VACD    /* 관리항목값 */
           , F_ROW.COND_VANM    /* 관리항목값명 */
           , F_ROW.UPDT_USID    /* 입력작업자 */
           , SYSDATE            /* 입력일시 */
           , F_ROW.UPDT_USID    /* 수정작업자 */
           , SYSDATE            /* 수정일시 */
        );
    END;

      /**********************************************
        전표라인 부가세 저장/수정
       ********************************************* */
    PROCEDURE SP_SLIP_LINEVAT_SAVE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
      , iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
      , iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
      , iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
      , iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
      , iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
      , iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
      , iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
      , iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
      , iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
      , iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
      , iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
      , iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
      , iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
      , iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */
    )
    IS
        LV_REMK_NAME    TA_VATXXM.REMK_NAME%TYPE;   /* 적요 */
        LV_VATX_CNTX    NUMBER(9);

    BEGIN

        /* CRUD_TYPE 확인 */
        SP_CRUD_TYPE_CHK (iCRUD_TYPE);

        /* 필수항목 확인한다. */ /* 확인구분, 전표번호, 전표라인번호, 항목명, 항목값 */
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_001]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iSLIP_NUMB, '전표번호');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_002]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iSLIP_LINE, '행번호');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_002]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iUPDT_USID, '작업자');

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);
        
        /* 전표라인 */
        SP_TA_SLIPNT (iSLIP_NUMB, iSLIP_LINE);

        /* 전표행의 증빙이 증빙생성여부=1 이 아니면 처리 할 수 없다 */
        IF NVL(SF_GET_REFXFILD('EVID_DOCU', TA_SLIPNT_ROW.EVID_DOCU, '2'), '0') <> '1' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_VAT_SAVE_003]' || CHR(13) 
                                    || '증빙구분 [' || SF_GET_COMMNAME('EVID_DOCU', TA_SLIPNT_ROW.EVID_DOCU) || ']은(는)' 
                                    || ' 증빙항목을 입력할 수 없습니다.'
                                    || ' 행번호[' || TA_SLIPNT_ROW.SLIP_LINE || ']');
        END IF;

        SP_MUST_CHECK ('[SLIP_VAT_SAVE_004]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iTRNS_DATE, '발행일');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_005]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iVATX_GUBN, '매입매출구분');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_006]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iVATX_TYPE, '부가세종류');
--        SP_MUST_CHECK ('증빙항목', iSLIP_NUMB, iSLIP_LINE, iPURC_GUBN, '부가세유형');
--        SP_MUST_CHECK ('증빙항목', iSLIP_NUMB, iSLIP_LINE, iBULG_GUBN, '불공제구분');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_007]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iEBIL_GUBN, '전자발행여부');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_008]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iCUST_CODE, '거래처코드');
--        SP_MUST_CHECK ('증빙항목', iSLIP_NUMB, iSLIP_LINE, iBSNS_NUMB, '사업자등록번호');
        SP_MUST_CHECK ('[SLIP_VAT_SAVE_009]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iSUPP_AMNT, '공급가액', 'NUMBER');
--        SP_MUST_CHECK ('증빙항목', iSLIP_NUMB, iSLIP_LINE, iVATX_AMNT, '부가세액');

        /* 적요가 공란이면 전표의 적요를 인정한다. */
        LV_REMK_NAME := TRIM(iREMK_NAME);
        IF LV_REMK_NAME IS NULL THEN
            LV_REMK_NAME := TRIM(TA_SLIPNT_ROW.REMK_NAME);
        END IF;

        /* 부가세종류[VATX_TYPE]에서 세액필수여부를 확인한다. */
        SP_TM_CODEXD ('VATX_TYPE', iVATX_TYPE);
        IF TM_CODEXD_ROW.REF1_FILD = '1' THEN    /* 세액필수여부 */
            SP_MUST_CHECK ('[SLIP_VAT_SAVE_010]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iVATX_AMNT, '부가세액', 'NUMBER');
        
        --면세, 영세율 부가세 금액 입력 오류 체크 기능 추가(2016.11.03 by302)
        ELSIF TM_CODEXD_ROW.REF1_FILD = '0' AND iVATX_AMNT <> 0 THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_VAT_SAVE_011]' || CHR(13) 
                                    || '부가세종류 [' || SF_GET_COMMNAME('VATX_TYPE', iVATX_TYPE) ||']은(는)'
                                    || ' 부가세액이 0원이어야 합니다.' || CHR(13)
                                    || '부가세액을 확인하세요.'
                                    || ' 부가세액 [' || iVATX_AMNT || '] 행번호 [' || TA_SLIPNT_ROW.SLIP_LINE || ']');            
        END IF;
        
        /* 부가세액 허용 오차범위 체크(2016.11.03 by302) */
        IF    (iVATX_AMNT > 0 AND (ROUND(iSUPP_AMNT * 0.09) > iVATX_AMNT OR ROUND(iSUPP_AMNT * 0.11) < iVATX_AMNT))
           OR (iVATX_AMNT < 0 AND (ROUND(iSUPP_AMNT * 0.09) < iVATX_AMNT OR ROUND(iSUPP_AMNT * 0.11) > iVATX_AMNT)) THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_VAT_SAVE_012]' || CHR(13) 
                                    || '부가세금액이 허용 오차범위(+/- 1%)를 벗어납니다.' || CHR(13)
                                    || '부가세액을 확인하세요.'
                                    || ' 부가세액 [' || iVATX_AMNT || '] 행번호 [' || TA_SLIPNT_ROW.SLIP_LINE || ']');
        END IF;

        /* 부가세유형[PURC_GUBN]이 공란이 아니면 불공제일때 불공제세부를 확인한다. */
        IF iPURC_GUBN IS NOT NULL THEN
            SP_TM_CODEXD ('PURC_GUBN', iPURC_GUBN);
            /* 불공제필수여부 */
            IF TM_CODEXD_ROW.REF1_FILD = '1' THEN
                SP_MUST_CHECK ('[SLIP_VAT_SAVE_013]' || CHR(13) || '증빙항목', iSLIP_NUMB, iSLIP_LINE, iBULG_GUBN, '불공제구분');

                /* 불공제인데 전표라인 금액이 0이 아닌 경우 오류 체크  */
                IF TA_SLIPNT_ROW.SLIP_AMNT <> 0 THEN
                    RAISE_APPLICATION_ERROR(-20000, '[SLIP_VAT_SAVE_014]' || CHR(13) 
                                            || '부가세유형이 불공제인 경우 전표 라인의 금액은 0원이어야 합니다. 행번호 [' || TA_SLIPNT_ROW.SLIP_LINE || ']'); 
                END IF;
            END IF;
        END IF;

        /* 부가세코드에 등록된 증빙종류,매입매출구분,부가세종류,부가세유형,불공제세부 인지를 확인한다. */
        SELECT COUNT(1)
          INTO LV_VATX_CNTX
          FROM TA_VATCDH VH             /* [부가세종류코드헤더] */
               LEFT JOIN TA_VATCDD VD   /* [부가세종류코드세부] */
                      ON VH.VATH_TYPECD = VD.VATH_TYPECD
         WHERE VH.SALE_TYPECD = iVATX_GUBN                      /* 매입매출구분 */
           AND VD.VAT_LINKCD1 = TA_SLIPNT_ROW.EVID_DOCU         /* 증빙구분 */
           AND VD.VAT_LINKCD2 = iVATX_TYPE                      /* 부가세종류 */
           AND NVL(VD.VAT_LINKCD3, ' ') = NVL(iPURC_GUBN, ' ')  /* 부가세유형 */
           AND NVL(VD.VAT_LINKCD4, ' ') = NVL(iBULG_GUBN, ' ')  /* 불공제구분 */
           ;

        IF NVL(LV_VATX_CNTX,0) = 0 THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_VAT_SAVE_015]' || CHR(13) || '['
                                    || TA_SLIPNT_ROW.EVID_DOCU || ' ' || SF_GET_COMMNAME('EVID_DOCU', TA_SLIPNT_ROW.EVID_DOCU) || ' / '
                                    || iVATX_GUBN || ' ' || SF_GET_COMMNAME('VATX_GUBN', iVATX_GUBN) || ' / '
                                    || iVATX_TYPE || ' ' || SF_GET_COMMNAME('VATX_TYPE', iVATX_TYPE) || ' / '
                                    || iPURC_GUBN || ' ' || SF_GET_COMMNAME('PURC_GUBN', iPURC_GUBN) || ' / '
                                    || iBULG_GUBN || ' ' || SF_GET_COMMNAME('BULG_GUBN', iBULG_GUBN) || ']' || CHR(13)
                                    || '부가세코드에 등록 되지 않은 유형입니다. 확인하십시요. 행번호 [' || TA_SLIPNT_ROW.SLIP_LINE || ']');

        END IF;
        
        /* 저장 */
        IF UPPER(iCRUD_TYPE) = 'INS' THEN
            SP_SLIP_LINEVAT_SAVE_SUB01 (
                 iSYST_LNCD                 /* 시스템언어코드 */
               , iUPDT_USID                 /* 수정작업자 */
               , iCRUD_TYPE                 /* CRUD TYPE(INS,UPD) */
               , iSLIP_NUMB                 /* 전표번호 */
               , iSLIP_LINE                 /* 전표라인번호 */
               , iCARD_NUMB                 /* 카드번호 */
               , iCARD_APPR                 /* 카드승인번호 */
               , iTRNS_DATE                 /* 전송일 */
               , iVATX_GUBN                 /* 매입매출구분 */
               , iVATX_TYPE                 /* 부가세종류 */
               , iBULG_GUBN                 /* 불공제구분 */
               , iPURC_GUBN                 /* 매입구분 */
               , NVL(iEBIL_GUBN, '0')         /* 전자발행여부 */
               , iCUST_CODE                 /* 거래처코드 */
               , iBSNS_NUMB                 /* 사업자등록번호 */
               , iITEM_NAME                 /* 품목명 */
               , iSUPP_AMNT                 /* 공급가액 */
               , iVATX_AMNT                 /* 부가세액 */
               , LV_REMK_NAME               /* 적요 */
               , NVL(iETIS_YSNO, '0')         /* 타사이트발행여부 */
               , TA_SLIPNT_ROW.ACCT_GUBN      /* 회계구분_사업장 */
               , TA_SLIPNT_ROW.EVID_DOCU      /* 증빙종류 */
            );

        /* 저장 */
        ELSIF UPPER(iCRUD_TYPE) = 'UPD' THEN
            SP_SLIP_LINEVAT_SAVE_SUB02 (
                 iSYST_LNCD                 /* 시스템언어코드 */
               , iUPDT_USID                 /* 수정작업자 */
               , iCRUD_TYPE                 /* CRUD TYPE(INS,UPD) */
               , iSLIP_NUMB                 /* 전표번호 */
               , iSLIP_LINE                 /* 전표라인번호 */
               , iCARD_NUMB                 /* 카드번호 */
               , iCARD_APPR                 /* 카드승인번호 */
               , iTRNS_DATE                 /* 전송일 */
               , iVATX_GUBN                    /* 매입매출구분 */
               , iVATX_TYPE                 /* 부가세종류 */
               , iBULG_GUBN                 /* 불공제구분 */
               , iPURC_GUBN                 /* 매입구분 */
               , NVL(iEBIL_GUBN, '0')         /* 전자발행여부 */
               , iCUST_CODE                 /* 거래처코드 */
               , iBSNS_NUMB                 /* 사업자등록번호 */
               , iITEM_NAME                 /* 품목명 */
               , iSUPP_AMNT                 /* 공급가액 */
               , iVATX_AMNT                 /* 부가세액 */
               , LV_REMK_NAME               /* 적요 */
               , NVL(iETIS_YSNO, '0')         /* 타사이트발행여부 */
               , TA_SLIPNT_ROW.ACCT_GUBN    /* 회계구분_사업장 */
               , TA_SLIPNT_ROW.EVID_DOCU    /* 증빙종류 */
            );
        END IF;

    END;

      /**********************************************
        전표라인 부가세 저장/수정 저장
       ********************************************* */
    PROCEDURE SP_SLIP_LINEVAT_SAVE_SUB01 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
      , iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
      , iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
      , iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
      , iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
      , iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
      , iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
      , iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
      , iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
      , iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
      , iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
      , iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
      , iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
      , iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
      , iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */
      , iACCT_GUBN     IN TA_VATXXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iEVID_DOCU     IN TA_VATXXM.EVID_DOCU%TYPE   /* 증빙종류 */
    )
    IS
        V_ROW        TA_VATXXM%ROWTYPE;    /* 전표라인 부가세 */

    BEGIN

        V_ROW.SLIP_NUMB := iSLIP_NUMB;                 /* 전표번호 */
        V_ROW.SLIP_LINE := iSLIP_LINE;                 /* 전표라인번호 */
        V_ROW.SLIP_INPU := 'SLIP';                     /* 전표등록구분 */
        V_ROW.ACCT_GUBN := iACCT_GUBN;                 /* 회계구분_사업장 */
        V_ROW.EVID_DOCU := iEVID_DOCU;                 /* 증빙종류 */
        V_ROW.CARD_NUMB := iCARD_NUMB;                 /* 카드번호 */
        V_ROW.CARD_APPR := iCARD_APPR;                 /* 카드승인번호 */
        V_ROW.TRNS_DATE := iTRNS_DATE;                 /* 전송일 */
        V_ROW.VATX_GUBN := iVATX_GUBN;                 /* 매입매출구분 */
        V_ROW.VATX_TYPE := iVATX_TYPE;                 /* 부가세종류 */
        V_ROW.BULG_GUBN := iBULG_GUBN;                 /* 불공제구분 */
        V_ROW.PURC_GUBN := iPURC_GUBN;                 /* 매입구분 */
        V_ROW.EBIL_GUBN := NVL(iEBIL_GUBN, '0');    /* 전자발행여부 */
        V_ROW.CUST_CODE := iCUST_CODE;                 /* 거래처코드 */
        V_ROW.BSNS_NUMB := iBSNS_NUMB;                 /* 사업자등록번호 */
        V_ROW.ITEM_NAME := iITEM_NAME;                 /* 품목명 */
        V_ROW.SUPP_AMNT := NVL(iSUPP_AMNT,0);         /* 공급가액 */
        V_ROW.VATX_AMNT := NVL(iVATX_AMNT,0);          /* 부가세액 */
        V_ROW.REMK_NAME := iREMK_NAME;                 /* 적요 */
        V_ROW.ETIS_YSNO := NVL(iETIS_YSNO,0);          /* 타사이트발행여부 */
        V_ROW.DEET_YSNO := '0';                     /* 신고제외여부 */
        V_ROW.INST_USID := iUPDT_USID;                 /* 입력작업자 */
        V_ROW.UPDT_USID := iUPDT_USID;                 /* 수정작업자 */

        V_ROW.SUMX_AMNT := NVL(iSUPP_AMNT,0) + NVL(iVATX_AMNT,0); /* 합계금액 */

        /* 전표부가세 */
        INSERT INTO TA_VATXXM (
             VATX_SEQN          /* 부가세일련번호 */
           , SLIP_NUMB          /* 전표번호 */
           , SLIP_LINE          /* 전표라인번호 */
           , SLIP_INPU          /* 전표등록구분 */
           , ACCT_GUBN          /* 회계구분_사업장 */
           , EVID_DOCU          /* 증빙종류 */
           , CARD_NUMB          /* 카드번호 */
           , CARD_APPR          /* 카드승인번호 */
           , TRNS_DATE          /* 전송일 */
           , VATX_GUBN          /* 매입매출구분 */
           , VATX_TYPE          /* 부가세종류 */
           , BULG_GUBN          /* 불공제구분 */
           , PURC_GUBN          /* 매입구분 */
           , EBIL_GUBN          /* 전자발행여부 */
           , CUST_CODE          /* 거래처코드 */
           , BSNS_NUMB          /* 사업자등록번호 */
           , ITEM_NAME          /* 품목명 */
           , SUPP_AMNT          /* 공급가액 */
           , VATX_AMNT          /* 부가세액 */
           , REMK_NAME          /* 적요 */
           , ETIS_YSNO          /* 타사이트발행여부 */
           , DEET_YSNO          /* 신고제외여부 */
           , INST_USID          /* 입력작업자 */
           , INST_DATE          /* 입력일시 */
           , UPDT_USID          /* 수정작업자 */
           , UPDT_DATE          /* 수정일시 */
           , SUMX_AMNT          /* 합계금액 */
        )
        VALUES 
        (
            (
            SELECT 'V' || TO_CHAR(SYSDATE, 'YYYYMM') || LPAD(TO_NUMBER(NVL(MAX(SUBSTR(VT.VATX_SEQN,8)), '0')) + 1, 6, '0')
              FROM TA_VATXXM VT
             WHERE VT.VATX_SEQN LIKE 'V' || TO_CHAR(SYSDATE, 'YYYYMM') || '%'
            )                   /* 부가세일련번호 */
           , V_ROW.SLIP_NUMB    /* 전표번호 */
           , V_ROW.SLIP_LINE    /* 전표라인번호 */
           , V_ROW.SLIP_INPU    /* 전표등록구분 */
           , V_ROW.ACCT_GUBN    /* 회계구분_사업장 */
           , V_ROW.EVID_DOCU    /* 증빙종류 */
           , V_ROW.CARD_NUMB    /* 카드번호 */
           , V_ROW.CARD_APPR    /* 카드승인번호 */
           , V_ROW.TRNS_DATE    /* 전송일 */
           , V_ROW.VATX_GUBN    /* 매입매출구분 */
           , V_ROW.VATX_TYPE    /* 부가세종류 */
           , V_ROW.BULG_GUBN    /* 불공제구분 */
           , V_ROW.PURC_GUBN    /* 매입구분 */
           , V_ROW.EBIL_GUBN    /* 전자발행여부 */
           , V_ROW.CUST_CODE    /* 거래처코드 */
           , V_ROW.BSNS_NUMB    /* 사업자등록번호 */
           , V_ROW.ITEM_NAME    /* 품목명 */
           , V_ROW.SUPP_AMNT    /* 공급가액 */
           , V_ROW.VATX_AMNT    /* 부가세액 */
           , V_ROW.REMK_NAME    /* 적요 */
           , V_ROW.ETIS_YSNO    /* 타사이트발행여부 */
           , V_ROW.DEET_YSNO    /* 신고제외여부 */
           , V_ROW.UPDT_USID    /* 입력작업자 */
           , SYSDATE            /* 입력일시 */
           , V_ROW.UPDT_USID    /* 수정작업자 */
           , SYSDATE            /* 수정일시 */
           , V_ROW.SUMX_AMNT    /* 합계금액 */
        );

    END;

      /**********************************************
        전표라인 부가세 저장/수정 수정
       ********************************************* */
    PROCEDURE SP_SLIP_LINEVAT_SAVE_SUB02 (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iCRUD_TYPE     IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
      , iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
      , iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
      , iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
      , iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
      , iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
      , iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
      , iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
      , iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
      , iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
      , iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
      , iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
      , iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
      , iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
      , iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
      , iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */
      , iACCT_GUBN     IN TA_VATXXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
      , iEVID_DOCU     IN TA_VATXXM.EVID_DOCU%TYPE   /* 증빙종류 */
    )
    IS
        V_ROW        TA_VATXXM%ROWTYPE;    /* 전표라인 부가세 */

    BEGIN

        V_ROW.SLIP_NUMB := iSLIP_NUMB;                 /* 전표번호 */
        V_ROW.SLIP_LINE := iSLIP_LINE;                 /* 전표라인번호 */
        --V_ROW.SLIP_INPU := iSLIP_INPU;                 /* 전표등록구분 */
        V_ROW.ACCT_GUBN := iACCT_GUBN;                 /* 회계구분_사업장 */
        V_ROW.EVID_DOCU := iEVID_DOCU;                 /* 증빙종류 */
        V_ROW.CARD_NUMB := iCARD_NUMB;                 /* 카드번호 */
        V_ROW.CARD_APPR := iCARD_APPR;                 /* 카드승인번호 */
        V_ROW.TRNS_DATE := iTRNS_DATE;                 /* 전송일 */
        V_ROW.VATX_GUBN := iVATX_GUBN;                 /* 매입매출구분 */
        V_ROW.VATX_TYPE := iVATX_TYPE;                 /* 부가세종류 */
        V_ROW.BULG_GUBN := iBULG_GUBN;                 /* 불공제구분 */
        V_ROW.PURC_GUBN := iPURC_GUBN;                 /* 매입구분 */
        V_ROW.EBIL_GUBN := NVL(iEBIL_GUBN, '0');    /* 전자발행여부 */
        V_ROW.CUST_CODE := iCUST_CODE;                 /* 거래처코드 */
        V_ROW.BSNS_NUMB := iBSNS_NUMB;                 /* 사업자등록번호 */
        V_ROW.ITEM_NAME := iITEM_NAME;                 /* 품목명 */
        V_ROW.SUPP_AMNT := iSUPP_AMNT;                 /* 공급가액 */
        V_ROW.VATX_AMNT := NVL(iVATX_AMNT,0);          /* 부가세액 */
        V_ROW.REMK_NAME := iREMK_NAME;                 /* 적요 */
        V_ROW.ETIS_YSNO := NVL(iETIS_YSNO, '0');    /* 타사이트발행여부 */
--        V_ROW.DEET_YSNO := iDEET_YSNO;             /* 신고제외여부 */
        V_ROW.INST_USID := iUPDT_USID;                 /* 입력작업자 */
        V_ROW.UPDT_USID := iUPDT_USID;                 /* 수정작업자 */

        V_ROW.SUMX_AMNT := NVL(iSUPP_AMNT,0) + NVL(iVATX_AMNT,0); /* 합계금액 */

        /* 전표부가세 */
        UPDATE TA_VATXXM 
           SET EVID_DOCU = V_ROW.EVID_DOCU /* 증빙종류 */
             , CARD_NUMB = V_ROW.CARD_NUMB /* 카드번호 */
             , CARD_APPR = V_ROW.CARD_APPR /* 카드승인번호 */
             , TRNS_DATE = V_ROW.TRNS_DATE /* 전송일 */
             , VATX_GUBN = V_ROW.VATX_GUBN /* 매입매출구분 */
             , VATX_TYPE = V_ROW.VATX_TYPE /* 부가세종류 */
             , BULG_GUBN = V_ROW.BULG_GUBN /* 불공제구분 */
             , PURC_GUBN = V_ROW.PURC_GUBN /* 매입구분 */
             , EBIL_GUBN = V_ROW.EBIL_GUBN /* 전자발행여부 */
             , CUST_CODE = V_ROW.CUST_CODE /* 거래처코드 */
             , BSNS_NUMB = V_ROW.BSNS_NUMB /* 사업자등록번호 */
             , ITEM_NAME = V_ROW.ITEM_NAME /* 품목명 */
             , SUPP_AMNT = V_ROW.SUPP_AMNT /* 공급가액 */
             , VATX_AMNT = V_ROW.VATX_AMNT /* 부가세액 */
             , REMK_NAME = V_ROW.REMK_NAME /* 적요 */
             , ETIS_YSNO = V_ROW.ETIS_YSNO /* 타사이트발행여부 */
             , UPDT_USID = V_ROW.UPDT_USID /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
             , SUMX_AMNT = V_ROW.SUMX_AMNT /* 합계금액 */
         WHERE SLIP_NUMB = V_ROW.SLIP_NUMB /* 전표번호 */
           AND SLIP_LINE = V_ROW.SLIP_LINE /* 전표라인번호 */
           ;

    END;

      /**********************************************
        전표작성종료
       ********************************************* */
    PROCEDURE SP_SLIP_FINISH (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
    )
    IS
        LV_CHAX_AMNT    NUMBER(19); /* 차변금액 */
        LV_DAEX_AMNT    NUMBER(19); /* 대변금액 */
        LV_LINE_CNTX    NUMBER(19); /* 전표라인행수 */
        LV_CSTC_CODE    TA_CSTCXM.CSTC_CODE%TYPE;   /* 코스트센터코드 */

    BEGIN
        
        /*=============================================================
            1. 차/대변 금액 체크
          ============================================================= */
        SELECT NVL(SUM(CASE WHEN ST.DRCR_GUBN = 'D' THEN ST.SLIP_AMNT END),0) AS CHAX_AMNT /* 차변금액 */
             , NVL(SUM(CASE WHEN ST.DRCR_GUBN = 'C' THEN ST.SLIP_AMNT END),0) AS DAEX_AMNT /* 대변금액 */
             , COUNT(1)
          INTO LV_CHAX_AMNT /* 차변금액 */
             , LV_DAEX_AMNT /* 대변금액 */
             , LV_LINE_CNTX /* 전표라인행수 */
          FROM TA_SLIPNT ST
         WHERE ST.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
         ;

        IF NVL(LV_CHAX_AMNT,0) <> NVL(LV_DAEX_AMNT,0) THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_001]' || CHR(13) 
                                    || '차변금액 [' || LV_CHAX_AMNT || ']과 대변금액 [' || LV_DAEX_AMNT || ']의 합이 다릅니다. 전표번호 [' || iSLIP_NUMB || ']');
        END IF;

        IF NVL(LV_LINE_CNTX,0) < 2 THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_002]' || CHR(13) || '전표번호에 전표행은 2건이상 이어야 합니다. 전표번호 [' || iSLIP_NUMB || ']');
        END IF;


        /*=============================================================
            2. 부가세 증빙자료 체크
          ============================================================= */
        FOR RS IN (
            SELECT ST.*
                 , VT.VATX_SEQN    /* 부가세일련번호 */
              FROM TA_SLIPNT ST
                   LEFT JOIN TA_VATXXM VT
                          ON VT.SLIP_NUMB = ST.SLIP_NUMB
                         AND VT.SLIP_LINE = ST.SLIP_LINE
             WHERE ST.SLIP_NUMB = iSLIP_NUMB
        )
        LOOP

            IF RS.EVID_DOCU IS NOT NULL THEN
                /* 증빙구분이 증빙자료생성여부 = 1 이면 증빙자료는 등록해야 한다. */
                IF NVL(SF_GET_REFXFILD('EVID_DOCU', RS.EVID_DOCU, '2'), '0') = '1' THEN
                    IF RS.VATX_SEQN IS NULL THEN
                        RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_003]' || CHR(13) 
                                                || '증빙구분 [' || RS.EVID_DOCU || ' ' || SF_GET_COMMNAME('EVID_DOCU', RS.EVID_DOCU) || ']은(는)' 
                                                || ' 증빙자료를 생성해야 합니다.'
                                                || ' 행번호 [' || RS.SLIP_LINE || ']');
                    END IF;
                END IF;
            END IF;

        END LOOP;
        
        /*=============================================================
            3. - 필수관리항목 체크
               - 미지급구매카드 계정의 거래처 구매카드가맹점번호 체크
          ============================================================= */
        FOR RS IN (
            SELECT A.SLIP_LINE
                 , A.ACCT_INTL
                 , SF_GET_ACCTNAME(A.ACCT_INTL) AS ACCT_NAME
                 , A.DRCR_GUBN
                 , DECODE(C.UNUS_YSNO, '1', '1', C.DRCR_YSNO) AS DRCR_YSNO  /* 관리항목이 미불여부=1 이면 차대모두 필수이다. */
                 , C.COND_CODE
                 , B.COND_VACD
                 , D.COMD_CODE
                 , E.CUST_NAME
                 , E.PUCD_NUMB
              FROM TA_SLIPNT A
                   LEFT JOIN TA_ACCTXD C
                          ON A.ACCT_INTL = C.ACCT_INTL
                   LEFT JOIN TA_SLIPRF B
                          ON A.SLIP_NUMB = B.SLIP_NUMB
                         AND A.SLIP_LINE = B.SLIP_LINE
                         AND B.COND_CODE = C.COND_CODE
                   LEFT JOIN TM_CODEXD D
                          ON D.COMM_CODE = 'PUCD_ACCT'  /* 구매카드 계정 */
                         AND A.ACCT_INTL = D.COMD_CODE
                   LEFT JOIN TA_CUSTXM E
                          ON B.COND_VACD = E.CUST_CODE
             WHERE A.SLIP_NUMB = iSLIP_NUMB
               AND C.DRCR_YSNO IN ('1', DECODE(A.DRCR_GUBN, 'D', '2', '3'))   /* 1:차대변필수, 2:차변필수, 3:대변필수 */
        )
        LOOP
       
            IF RS.DRCR_YSNO = '1' OR     /* 차대변필수 */
                (RS.DRCR_YSNO = '2' AND RS.DRCR_GUBN = 'D') OR      /* 차변필수 */
                (RS.DRCR_YSNO = '3' AND RS.DRCR_GUBN = 'C') THEN    /* 대변필수 */
                
                /* 필수관리항목 체크 */
                IF RS.COND_VACD IS NULL THEN
                
                    RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_004]' || CHR(13) 
                                            || '계정과목 [' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || ']의 '
                                            || SF_GET_COMMNAME('DRCR_GUBN', RS.DRCR_GUBN)
                                            || ' 관리항목 [' || RS.COND_CODE || ' ' || SF_GET_CONDNAME(RS.COND_CODE) || ']은(는)'
                                            || ' 필수입니다.'
                                            || ' 행번호 [' ||  RS.SLIP_LINE || ']');
                            
                END IF;         
                        
                /* 미지급구매카드 계정의 거래처 구매카드가맹점번호 체크 */       
                IF RS.ACCT_INTL = RS.COMD_CODE AND RS.COND_CODE = '0002' THEN
                
                    IF RS.PUCD_NUMB IS NULL THEN    
                     
                        RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_005]' || CHR(13) 
                                                || '계정과목 [' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || ']의 '
                                                || SF_GET_COMMNAME('DRCR_GUBN', RS.DRCR_GUBN)
                                                || ' 관리항목 거래처 [' || RS.COND_VACD || ' ' || RS.CUST_NAME || ']'
                                                || ' 의 구매카드가맹점번호 값이 존재하지 않습니다.'
                                                || ' 행번호 [' ||  RS.SLIP_LINE || ']');
                                
                    END IF;
                    
                END IF;
                
            END IF;
            
        END LOOP;
        
        /*=============================================================
            4. (NSCOM 농심기획용)
              - 채권채무 계정의 거래처 관리항목이 "관계사" 인 경우
                반대변의 관리항목값 필수 체크
          ============================================================= */
        FOR RS IN (
            SELECT A.SLIP_LINE
                 , A.ACCT_INTL
                 , SF_GET_ACCTNAME(A.ACCT_INTL) AS ACCT_NAME
                 , A.DRCR_GUBN
                 , C.COND_CODE
                 , B.COND_VACD
              FROM TA_SLIPNT A
                   INNER JOIN TM_CODEXD D
                           ON D.COMM_CODE IN ('CSFS_AP', 'CSFS_AR')           /* 연결채무잔고내역, 연결채권잔고내역 */
                          AND A.ACCT_INTL BETWEEN D.REF2_FILD AND D.REF3_FILD /* 계정과목코드 */
                   INNER JOIN TA_ACCTXD C
                           ON A.ACCT_INTL = C.ACCT_INTL
                          AND C.COND_CODE = '0002'   /* 거래처관리항목 */
                   INNER JOIN TA_SLIPRF B
                           ON A.SLIP_NUMB = B.SLIP_NUMB
                          AND A.SLIP_LINE = B.SLIP_LINE
                          AND B.COND_CODE = '0002'   /* 거래처관리항목 */
                   INNER JOIN TA_CUSTXM E
                           ON B.COND_VACD = E.CUST_CODE
                          AND E.CUTY_CODE = 'TS100010' /* 관계사 */
             WHERE A.SLIP_NUMB = iSLIP_NUMB
        )
        LOOP
        
            FOR RS2 IN (
                SELECT A.SLIP_LINE
                     , A.ACCT_INTL
                     , SF_GET_ACCTNAME(A.ACCT_INTL) AS ACCT_NAME
                     , A.DRCR_GUBN
                     , B.COND_VACD
                  FROM TA_SLIPNT A
                       INNER JOIN TM_CODEXD D
                               ON D.COMM_CODE IN ('CSFS_EX', 'CSFS_PU', 'CSFS_RE', 'CSFS_SA')  /* 관련계정 - 비용, 매입, 수익, 매출 */
                              AND A.ACCT_INTL BETWEEN D.REF2_FILD AND D.REF3_FILD /* 계정과목코드 */
                       LEFT  JOIN TA_SLIPRF B
                               ON A.SLIP_NUMB = B.SLIP_NUMB
                              AND A.SLIP_LINE = B.SLIP_LINE
                              AND B.COND_CODE = '0002'    /* 거래처관리항목 */
                 WHERE A.SLIP_NUMB  = iSLIP_NUMB
                   AND A.SLIP_LINE <> RS.SLIP_LINE  /* 채권채무 계정라인이 아닌 전표라인 */
            )
            LOOP
            
            
                /* 거래처 관리항목 체크 */
                IF RS2.COND_VACD IS NULL THEN
                    RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_006]' || CHR(13) 
                                            || '계정과목 [' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || '] 행번호 [' || RS.SLIP_LINE || ']의 거래처가 관계사입니다.' || CHR(13)
                                            || '계정과목 [' || RS2.ACCT_INTL || ' ' || RS2.ACCT_NAME || ']의 '
                                            || SF_GET_COMMNAME('DRCR_GUBN', RS2.DRCR_GUBN)
                                            || ' 관리항목 [거래처]는 필수입니다.'
                                            || ' 행번호 [' ||  RS2.SLIP_LINE || ']');
                END IF;
                
            
            END LOOP; /* RS2 */
        
        
        END LOOP; /* RS */

           
        /*=============================================================
            5. (NSCOM 농심기획용)
              - 1. 전표 작성부서별 사용가능 계정 권한 체크
              - 2. 귀속부서의 코스트센터 값 유효성 체크
          ============================================================= */
        FOR RS IN (
            SELECT A.SLIP_NUMB  /* 전표번호 */
                 , A.SLIP_LINE  /* 전표라인 */
                 , B.SLIP_DATE  /* 전표일자 */
                 , B.DEPT_CODE  /* 작성부서 */
                 , A.ACCT_INTL  /* 계정코드 */
                 , C.ACCT_NAME  /* 계정과목명 */
                 , A.USEX_DEPT  /* 라인 귀속부서 */
                 , A.CSTC_CODE  /* 코스트센터코드 */
                 , C.COST_GUBN  /* 계정 원가구분 */
              FROM TA_SLIPNT A
                   LEFT JOIN TA_SLIPXM B
                          ON A.SLIP_NUMB = B.SLIP_NUMB
                   LEFT JOIN TA_ACCTXM C
                          ON A.ACCT_INTL = C.ACCT_INTL
             WHERE A.SLIP_NUMB = iSLIP_NUMB
        )
        LOOP
            
            /* << 5-1 >> 작성부서별 사용가능 계정 권한여부 */
            FOR RS2 IN (                
                SELECT B.POSS_ACCT
                  FROM TA_ACCTXM A
                       LEFT JOIN (
                                 SELECT DISTINCT D.ACCT_INTL AS POSS_ACCT   /* 사용권한 계정 */
                                   FROM TA_CSTCXM C1
                                        INNER JOIN TA_AAGRXD D    /* [계정사용권한] */
                                                ON C1.AAGR_CODE = D.AAGR_CODE    /* 계정권한그룹코드 */
                                  WHERE RS.SLIP_DATE BETWEEN C1.BGIN_DATE AND C1.ENDX_DATE
                                    AND C1.DEPT_CODE = RS.DEPT_CODE    /* 작성부서 */
                               ) B                                                               
                             ON A.ACCT_INTL = B.POSS_ACCT
                 WHERE A.SLIP_YSNO = '1' /* 기표계정 */
                   AND A.ACCT_INTL = RS.ACCT_INTL /* 계정코드 */
            )
            LOOP
            
                /* 계정에 대한 권한 없음 */
                IF RS2.POSS_ACCT IS NULL THEN
                    RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_007]' || CHR(13) 
                                            || '[' || RS.DEPT_CODE || ' ' || SF_GET_DEPTNAME(RS.DEPT_CODE) || '] 작성부서는' 
                                            || ' [' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || '] 계정과목에 대한'
                                            || ' 사용 권한이 없습니다.'
                                            || ' 행번호 [' ||  RS.SLIP_LINE || ']');
                            
                END IF;
                
            
            END LOOP; /* RS2 */
            
            
            /* << 5-2 >> 귀속부서의 코스트센터 값 유효성 체크 */
            IF RS.CSTC_CODE IS NOT NULL THEN
                
                BEGIN                    
                    
                    IF RS.COST_GUBN = '10' THEN /* 전표계정의 원가구분 */
                        
                        /* 계정의 원가구분이 판관비인 경우
                             - 코스트센터의 부서와 전표의 귀속부서가 동일
                             - 코스트센터의 원가구분과 전표계정의 원가구분이 모두 판관비!! */  
                        SELECT CSTC_CODE
                          INTO LV_CSTC_CODE 
                          FROM TA_CSTCXM
                         WHERE RS.SLIP_DATE BETWEEN BGIN_DATE AND ENDX_DATE    /* 전표일자 */
                           AND DEPT_CODE = RS.USEX_DEPT  /* 귀속부서 */
                           AND CSTC_CODE = RS.CSTC_CODE  /* 전표의 코스트센터코드 */
                           AND COST_GUBN = '10'          /* 코스트센터의 원가구분이 판관비 */
                           ;

                    ELSE
                        
                        /* 계정의 원가구분이 판관비가 아닌 경우
                             - 코스트센터의 부서와 전표의 귀속부서가 동일
                             - 코스트센터의 원가구분과 전표계정의 원가구분이 판관비가 아닌!! */  
                        SELECT CSTC_CODE
                          INTO LV_CSTC_CODE 
                          FROM TA_CSTCXM
                         WHERE RS.SLIP_DATE BETWEEN BGIN_DATE AND ENDX_DATE    /* 전표일자 */
                           AND DEPT_CODE = RS.USEX_DEPT  /* 귀속부서 */
                           AND CSTC_CODE = RS.CSTC_CODE  /* 전표의 코스트센터코드 */
                           AND COST_GUBN <> '10'         /* 코스트센터의 원가구분이 판관비가 아님 */
                           ;              
                    
                    END IF;
                    
                EXCEPTION
                    WHEN NO_DATA_FOUND THEN
                        RAISE_APPLICATION_ERROR(-20000, '[SLIP_FINISH_008]' || CHR(13) 
                                                || '귀속부서 [' || RS.USEX_DEPT || ' ' || SF_GET_DEPTNAME(RS.USEX_DEPT) || ']은(는)'
                                                || ' [' || RS.CSTC_CODE || ' ' || SF_GET_CSTCNAME(RS.CSTC_CODE, RS.SLIP_DATE) || '] 코스트센터를'
                                                || ' 사용할 수 없습니다.' || CHR(13)
                                                || '[' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || '] 계정과목의'
                                                || ' 원가구분은 [' || SF_GET_COMMNAME('COST_GUBN', RS.COST_GUBN) || '] 입니다.'
                                                || ' 전표일자 [' || RS.SLIP_DATE || '] 행번호 [' ||  RS.SLIP_LINE || ']');                                                
                END;
                
                
            END IF;
            
        
        END LOOP; /* RS */
          
              

        /*=============================================================
            6. 작성오류 -> 임시저장 상태로 변경
          ============================================================= */
        UPDATE TA_SLIPXM
           SET APPS_CODE = '0'
             , UPDT_USID = iUPDT_USID   /* 수정작업자 */
             , UPDT_DATE = SYSDATE      /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB
           AND APPS_CODE = 'X';

    END;

      /**********************************************
        전표라인 삭제
       ********************************************* */
    PROCEDURE SP_SLIP_LINE_DELETE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iDELE_OPTN     IN VARCHAR2   /* 삭제옵션 */
    )
    IS
    BEGIN

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);
        /* 전표 라인 */
        SP_TA_SLIPNT(iSLIP_NUMB, iSLIP_LINE);
         
        /* 발생전표이면서 정산전표가 있으면 삭제 할 수가 없다.  */
        FOR RS IN (
            SELECT *
              FROM TA_SLIPNT ST
             WHERE ST.OSLI_NUMB = TA_SLIPNT_ROW.SLIP_NUMB
               AND ST.OSLI_LINE = TA_SLIPNT_ROW.SLIP_LINE
        )
        LOOP
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_LINE_DEL_001]' || CHR(13) 
                                    || '현재의 전표를 정산처리한 전표가 존재합니다. 정산전표를 먼저 삭제 하십시요.' || CHR(13)
                                    || '정산전표번호 [' || RS.SLIP_NUMB || '] 정산행번호[' || RS.SLIP_LINE || ']' );
        END LOOP;

        /* 정산전표이면 발생전표를 정리해야 한다. */
        IF  TA_SLIPNT_ROW.OSLI_NUMB IS NOT NULL THEN
            UPDATE TA_SLIPNT
               SET UNMC_YSNO = '0'    /* 미불완료여부 */
             WHERE SLIP_NUMB = TA_SLIPNT_ROW.OSLI_NUMB
               AND SLIP_LINE = TA_SLIPNT_ROW.OSLI_LINE
               ;
        END IF;

        /* 부가세삭제 */
        SP_SLIP_LINEVAT_DELETE (
             iSYST_LNCD     /* 시스템언어코드 */
           , iUPDT_USID     /* 수정작업자 */
           , iSLIP_NUMB     /* 전표번호 */
           , iSLIP_LINE     /* 전표라인번호 */
        );

        /* 전표관리항목 */
        DELETE TA_SLIPRF
         WHERE SLIP_NUMB = iSLIP_NUMB       /* 전표번호 */
           AND SLIP_LINE = iSLIP_LINE       /* 전표라인번호 */
           ;

        /* 전표분개내역 */
        DELETE TA_SLIPNT
         WHERE SLIP_NUMB = iSLIP_NUMB       /* 전표번호 */
           AND SLIP_LINE = iSLIP_LINE       /* 전표라인번호 */
           ;

    END;


      /**********************************************
        전표라인 관리항목 삭제
       ********************************************* */
    PROCEDURE SP_SLIP_LINERF_DELETE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
      , iCOND_CODE     IN TA_SLIPRF.COND_CODE%TYPE   /* 관리항목코드 */
    )
    IS
    BEGIN

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);

        /* 전표관리항목 */
        DELETE TA_SLIPRF
         WHERE SLIP_NUMB = iSLIP_NUMB       /* 전표번호 */
           AND SLIP_LINE = iSLIP_LINE       /* 전표라인번호 */
           AND COND_CODE = iCOND_CODE       /* 관리항목코드 */
           ;

    END;

      /**********************************************
        전표라인 부가세 삭제
       ********************************************* */
    PROCEDURE SP_SLIP_LINEVAT_DELETE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
    )
    IS
    BEGIN

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);

        /* 전표부가세 */
        DELETE TA_VATXXM
         WHERE SLIP_NUMB = iSLIP_NUMB       /* 전표번호 */
           AND SLIP_LINE = iSLIP_LINE       /* 전표라인번호 */
           ;

    END;

      /**********************************************
        전표 삭제
       ********************************************* */
    PROCEDURE SP_SLIP_DELETE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iDELE_OPTN     IN VARCHAR2   /* 삭제옵션 */
    )
    IS
    BEGIN

        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);
        
        /*======================================================================
            전표변경이력생성 (D.삭제)                     2016.09.05 by김삼영
        ====================================================================== */
        PKG_FAMB0030.SP_SLIP_CREATE_LOG (
            iSYST_LNCD                  /* ●시스템언어코드 */
          , iUPDT_USID                  /* ●수정작업자 */
          , iSLIP_NUMB                  /* ●전표번호 */
          , NULL                        /* ◎전표라인번호 */
          , 'D'                         /* ●이력구분[LOGX_GUBN](C.승인취소,D.삭제) */
          , SF_GET_USEREMPL(iUPDT_USID) /* ●이력사원번호 */
          , NULL                        /* ◎이력옵션 */      
        );

        /* 전표행 삭제 */
        FOR RS IN (
            SELECT *
              FROM TA_SLIPNT ST
             WHERE ST.SLIP_NUMB = iSLIP_NUMB
        )
        LOOP
            /* 전표행 삭제 */
            SP_SLIP_LINE_DELETE (
                 iSYST_LNCD     /* 시스템언어코드 */
               , iUPDT_USID     /* 수정작업자 */
               , RS.SLIP_NUMB   /* 전표번호 */
               , RS.SLIP_LINE   /* 전표라인번호 */
               , ''             /* 삭제옵션 */
            );

        END LOOP;

        /* 전표마스터 */
        DELETE TA_SLIPXM
         WHERE SLIP_NUMB = iSLIP_NUMB       /* 전표번호 */
         ;

    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.05
        내      용 : 전표변경이력생성
    ************************************************************************** */
    PROCEDURE SP_SLIP_CREATE_LOG (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iUPDT_USID      IN  TA_SLIPNT.UPDT_USID%TYPE    /* ●수정작업자 */
      , iSLIP_NUMB      IN  TA_SLIPNT.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iSLIP_LINE      IN  TA_SLIPNT.SLIP_LINE%TYPE    /* ◎전표라인번호 */
      , iLOGX_GUBN      IN  TA_SLIPXMLOG.LOGX_GUBN%TYPE /* ●이력구분[LOGX_GUBN](C.승인취소,D.삭제) */
      , iLOGX_EMPL      IN  TA_SLIPXMLOG.LOGX_EMPL%TYPE /* ●이력사원번호 */
      , iLOGX_OPTN      IN  VARCHAR2                    /* ◎이력옵션 */      
    )
    IS
    
        nLOGX_SEQX          TA_SLIPXMLOG.LOGX_SEQX%TYPE;    /* 이력순번 */
    
    BEGIN
 
        /*======================================================================
            STEP 1. 필수 항목 체크(확인구분, 전표번호, 전표라인번호, 항목명, 항목값)
        ====================================================================== */
        SP_MUST_CHECK ('[SLIP_LOG_SAVE_001]' || CHR(13) || '전표변경이력', iSLIP_NUMB, iSLIP_LINE, iSYST_LNCD, '시스템언어코드');
        SP_MUST_CHECK ('[SLIP_LOG_SAVE_002]' || CHR(13) || '전표변경이력', iSLIP_NUMB, iSLIP_LINE, iUPDT_USID, '수정작업자');
        SP_MUST_CHECK ('[SLIP_LOG_SAVE_003]' || CHR(13) || '전표변경이력', iSLIP_NUMB, iSLIP_LINE, iSLIP_NUMB, '전표번호');
        SP_MUST_CHECK ('[SLIP_LOG_SAVE_004]' || CHR(13) || '전표변경이력', iSLIP_NUMB, iSLIP_LINE, iLOGX_GUBN, '이력구분');
        SP_MUST_CHECK ('[SLIP_LOG_SAVE_005]' || CHR(13) || '전표변경이력', iSLIP_NUMB, iSLIP_LINE, iLOGX_EMPL, '이력사원번호');
    
        /*======================================================================
            STEP 2-0. 전표마스터변경이력 이력순번 채번
        ====================================================================== */        
        SELECT NVL(MAX(A.LOGX_SEQX), 0) + 1 /* 이력순번 */
          INTO nLOGX_SEQX
          FROM TA_SLIPXMLOG A           /* [전표마스터변경이력] */
         WHERE A.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
         ;
        
        /*======================================================================
            STEP 2-1. 전표마스터변경이력 생성
        ====================================================================== */
        INSERT INTO TA_SLIPXMLOG (  /* [전표마스터변경이력] */
                    SLIP_NUMB       /* 전표번호 */
                  , LOGX_SEQX       /* 이력순번 */
                  , LOGX_GUBN       /* 이력구분 */
                  , LOGX_EMPL       /* 이력사원번호 */
                  , LOGX_DATE       /* 이력일시 */
                  , ACCT_UNIT       /* 회계단위 */
                  , ACCT_GUBN       /* 회계구분_사업장 */
                  , SLIP_DATE       /* 전표일자 */
                  , SLIP_GUBN       /* 전표유형구분 */
                  , REQU_NUMB       /* 품의번호 */
                  , TITL_NAME       /* 제목 */
                  , EMPL_NUMB       /* 사원번호 */
                  , DEPT_CODE       /* 부서코드 */
                  , ACCT_DATE       /* 회계일자 */
                  , APPR_DATE       /* 승인일자 */
                  , SLAP_NUMB       /* 전표승인번호 */
                  , APPR_EMPL       /* 승인자 */
                  , APPR_DEPT       /* 승인부서 */
                  , APPR_DOCN       /* 결재문서번호 */
                  , APPS_CODE       /* 결재상태코드 */
                  , APCP_YEAR       /* 결재완료년도 */
                  , APPR_DTCD       /* 결재부서코드 */
                  , PROC_DATE       /* 처리일 */
                  , AUTO_YSNO       /* 자동전표여부 */
                  , SOUS_LNKY       /* 출처연결키 */
                  , RECE_DATE       /* 수신일 */
                  , RECE_EMPL       /* 수신자 */
                  , RECE_DEPT       /* 수신부서 */
                  , EVID_ACPT       /* 증빙제출구분 */
                  , MEMO_REMK       /* 메모비고 */
                  , INST_USID       /* 입력작업자 */
                  , INST_DATE       /* 입력일시 */
                  , UPDT_USID       /* 수정작업자 */
                  , UPDT_DATE       /* 수정일시 */
        )
        SELECT A.SLIP_NUMB                  /* 전표번호 */
             , nLOGX_SEQX   AS LOGX_SEQX    /* 이력순번 */
             , iLOGX_GUBN   AS LOGX_GUBN    /* 이력구분 */
             , iLOGX_EMPL   AS LOGX_EMPL    /* 이력사원번호 */
             , SYSDATE      AS LOGX_DATE    /* 이력일시 */
             , A.ACCT_UNIT      /* 회계단위 */
             , A.ACCT_GUBN      /* 회계구분_사업장 */
             , A.SLIP_DATE      /* 전표일자 */
             , A.SLIP_GUBN      /* 전표유형구분 */
             , A.REQU_NUMB      /* 품의번호 */
             , A.TITL_NAME      /* 제목 */
             , A.EMPL_NUMB      /* 사원번호 */
             , A.DEPT_CODE      /* 부서코드 */
             , A.ACCT_DATE      /* 회계일자 */
             , A.APPR_DATE      /* 승인일자 */
             , A.SLAP_NUMB      /* 전표승인번호 */
             , A.APPR_EMPL      /* 승인자 */
             , A.APPR_DEPT      /* 승인부서 */
             , A.APPR_DOCN      /* 결재문서번호 */
             , A.APPS_CODE      /* 결재상태코드 */
             , A.APCP_YEAR      /* 결재완료년도 */
             , A.APPR_DTCD      /* 결재부서코드 */
             , A.PROC_DATE      /* 처리일 */
             , A.AUTO_YSNO      /* 자동전표여부 */
             , A.SOUS_LNKY      /* 출처연결키 */
             , A.RECE_DATE      /* 수신일 */
             , A.RECE_EMPL      /* 수신자 */
             , A.RECE_DEPT      /* 수신부서 */
             , A.EVID_ACPT      /* 증빙제출구분 */
             , A.MEMO_REMK      /* 메모비고 */
             , A.INST_USID      /* 입력작업자 */
             , A.INST_DATE      /* 입력일시 */
             , A.UPDT_USID      /* 수정작업자 */
             , A.UPDT_DATE      /* 수정일시 */
          FROM TA_SLIPXM A      /* [전표마스터] */
         WHERE A.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
        ;
    
           
        /*======================================================================
            STEP 2-2. 전표분개내역변경이력 생성
        ====================================================================== */
        INSERT INTO TA_SLIPNTLOG (  /* [전표분개내역변경이력] */
                    SLIP_NUMB       /* 전표번호 */
                  , LOGX_SEQX       /* 이력순번 */
                  , SLIP_LINE       /* 전표라인번호 */
                  , ACCT_UNIT       /* 회계단위 */
                  , ACCT_GUBN       /* 회계구분_사업장 */
                  , ACCT_INTL       /* 계정과목코드 */
                  , USEX_DEPT       /* 사용부서 */
                  , CSTC_CODE       /* 코스트센터코드 */
                  , DRCR_GUBN       /* 차대구분 */
                  , CURR_GUBN       /* 통화구분 */
                  , EXCH_RATE       /* 환율 */
                  , FORI_AMNT       /* 외화금액 */
                  , SLIP_AMNT       /* 전표금액 */
                  , OSLI_DATE       /* 상대전표일자 */
                  , OSLI_NUMB       /* 상대전표번호 */
                  , OSLI_LINE       /* 상대전표순번 */
                  , UNMC_YSNO       /* 미불완료여부 */
                  , BUDG_GUBN       /* 예산구분 */
                  , PROJ_CODE       /* 프로젝트코드 */
                  , BGRQ_NUMB       /* 예산품의번호 */
                  , BUDG_DEPT       /* 예산부서코드 */
                  , BUDG_YYMM       /* 예산년월 */
                  , BDSB_CODE       /* 예산과목코드 */
                  , BDSP_CODE       /* 예산세목코드 */
                  , REMK_NAME       /* 적요 */
                  , REMK_NAM2       /* 적요2 */
                  , REMK_NAM3       /* 적요3 */
                  , EVID_DOCU       /* 증빙종류 */
                  , PAYX_YSNO       /* 출납처리여부 */
                  , PAYX_DATE       /* 지급일 */
                  , LEDG_GUBN       /* 출납방법 */
                  , BANK_INOU       /* 입출구분 */
                  , PRIN_ORDR       /* 출력순서 */
                  , SORT_ORDR       /* 정렬순서 */
                  , SEND_KEY1       /* 전송키1 */
                  , SEND_KEY2       /* 전송키2 */
                  , ACCT_DATE       /* 회계일자 */
                  , INST_USID       /* 입력작업자 */
                  , INST_DATE       /* 입력일시 */
                  , UPDT_USID       /* 수정작업자 */
                  , UPDT_DATE       /* 수정일시 */
        )
        SELECT A.SLIP_NUMB                  /* 전표번호 */
             , nLOGX_SEQX   AS LOGX_SEQX    /* 이력순번 */
             , A.SLIP_LINE      /* 전표라인번호 */
             , A.ACCT_UNIT      /* 회계단위 */
             , A.ACCT_GUBN      /* 회계구분_사업장 */
             , A.ACCT_INTL      /* 계정과목코드 */
             , A.USEX_DEPT      /* 사용부서 */
             , A.CSTC_CODE      /* 코스트센터코드 */
             , A.DRCR_GUBN      /* 차대구분 */
             , A.CURR_GUBN      /* 통화구분 */
             , A.EXCH_RATE      /* 환율 */
             , A.FORI_AMNT      /* 외화금액 */
             , A.SLIP_AMNT      /* 전표금액 */
             , A.OSLI_DATE      /* 상대전표일자 */
             , A.OSLI_NUMB      /* 상대전표번호 */
             , A.OSLI_LINE      /* 상대전표순번 */
             , A.UNMC_YSNO      /* 미불완료여부 */
             , A.BUDG_GUBN      /* 예산구분 */
             , A.PROJ_CODE      /* 프로젝트코드 */
             , A.BGRQ_NUMB      /* 예산품의번호 */
             , A.BUDG_DEPT      /* 예산부서코드 */
             , A.BUDG_YYMM      /* 예산년월 */
             , A.BDSB_CODE      /* 예산과목코드 */
             , A.BDSP_CODE      /* 예산세목코드 */
             , A.REMK_NAME      /* 적요 */
             , A.REMK_NAM2      /* 적요2 */
             , A.REMK_NAM3      /* 적요3 */
             , A.EVID_DOCU      /* 증빙종류 */
             , A.PAYX_YSNO      /* 출납처리여부 */
             , A.PAYX_DATE      /* 지급일 */
             , A.LEDG_GUBN      /* 출납방법 */
             , A.BANK_INOU      /* 입출구분 */
             , A.PRIN_ORDR      /* 출력순서 */
             , A.SORT_ORDR      /* 정렬순서 */
             , A.SEND_KEY1      /* 전송키1 */
             , A.SEND_KEY2      /* 전송키2 */
             , A.ACCT_DATE      /* 회계일자 */
             , A.INST_USID      /* 입력작업자 */
             , A.INST_DATE      /* 입력일시 */
             , A.UPDT_USID      /* 수정작업자 */
             , A.UPDT_DATE      /* 수정일시 */
          FROM TA_SLIPNT A      /* [전표분개내역] */
         WHERE A.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
        ;
           
        /*======================================================================
            STEP 2-3. 전표관리항목변경이력 생성
        ====================================================================== */
        INSERT INTO TA_SLIPRFLOG (  /* [전표관리항목변경이력] */
                    SLIP_NUMB       /* 전표번호 */
                  , LOGX_SEQX       /* 이력순번 */
                  , SLIP_LINE       /* 전표라인번호 */
                  , COND_CODE       /* 관리항목코드 */
                  , COND_VACD       /* 관리항목값 */
                  , COND_VANM       /* 관리항목값명 */
                  , INST_USID       /* 입력작업자 */
                  , INST_DATE       /* 입력일시 */
                  , UPDT_USID       /* 수정작업자 */
                  , UPDT_DATE       /* 수정일시 */
        )
        SELECT A.SLIP_NUMB      /* 전표번호 */
             , nLOGX_SEQX   AS LOGX_SEQX    /* 이력순번 */
             , A.SLIP_LINE      /* 전표라인번호 */
             , A.COND_CODE      /* 관리항목코드 */
             , A.COND_VACD      /* 관리항목값 */
             , A.COND_VANM      /* 관리항목값명 */
             , A.INST_USID      /* 입력작업자 */
             , A.INST_DATE      /* 입력일시 */
             , A.UPDT_USID      /* 수정작업자 */
             , A.UPDT_DATE      /* 수정일시 */
          FROM TA_SLIPRF A      /* [전표관리항목] */
         WHERE A.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
        ;
    
    END;

      /**********************************************
        전표마스터
       ********************************************* */
    PROCEDURE SP_TA_SLIPXM (
        iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_SLIPXM_ROW
              FROM TA_SLIPXM SM
             WHERE SM.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
             ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_XM_001]' || CHR(13) 
                                        || '등록되지 않은 전표번호를 지정하였습니다. 전표번호 [' || iSLIP_NUMB || ']');
        END;

    END;

      /**********************************************
        전표라인
       ********************************************* */
    PROCEDURE SP_TA_SLIPNT (
        iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_SLIPNT_ROW
              FROM TA_SLIPNT ST
             WHERE ST.SLIP_NUMB = iSLIP_NUMB /* 전표번호 */
               AND ST.SLIP_LINE = iSLIP_LINE /* 전표라인번호 */
               ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_NT_001]' || CHR(13) 
                                        || '등록되지 않은 전표 행번호를 지정하였습니다. 전표번호 [' || iSLIP_NUMB || '] 행번호 [' || iSLIP_LINE || ']');
        END;

    END;

      /**********************************************
        계정과목
       ********************************************* */
    PROCEDURE SP_TA_ACCTXM (
        iACCT_INTL     IN TA_ACCTXM.ACCT_INTL%TYPE   /* 계정과목코드 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_ACCTXM_ROW
              FROM TA_ACCTXM AC
             WHERE AC.ACCT_INTL = iACCT_INTL    /* 계정과목코드 */
             ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_ACCT_001]' || CHR(13) 
                                        || '등록되지 않은 계정과목코드 입니다. 계정과목코드 [' || iACCT_INTL || ']');
        END;


    END;

      /**********************************************
        계정관리항목코드
       ********************************************* */
    PROCEDURE SP_TA_ACCTXD (
        iACCT_INTL     IN TA_ACCTXD.ACCT_INTL%TYPE   /* 계정과목코드 */
      , iCOND_CODE     IN TA_ACCTXD.COND_CODE%TYPE   /* 관리항목코드 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_ACCTXD_ROW
              FROM TA_ACCTXD AD
             WHERE AD.ACCT_INTL = iACCT_INTL    /* 계정과목코드 */
               AND AD.COND_CODE = iCOND_CODE    /* 관리항목코드 */
               ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                TA_ACCTXD_ROW := NULL;
        END;

    END;


      /**********************************************
        전표종류
       ********************************************* */
    PROCEDURE SP_TA_SLGBXM (
        iSLIP_GUBN     IN TA_SLGBXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_SLGBXM_ROW
              FROM TA_SLGBXM SB
             WHERE SB.SLIP_GUBN = iSLIP_GUBN /* 전표유형구분 */
             ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_GUBN_001]' || CHR(13) 
                                        || '등록되지 않은 전표유형 입니다. 전표유형 [' || iSLIP_GUBN || ']');
        END;


    END;

      /**********************************************
        관리항목
       ********************************************* */
    PROCEDURE SP_TA_ACCTXF (
        iCOND_CODE     IN TA_ACCTXF.COND_CODE%TYPE   /* 관리항목코드 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TA_ACCTXF_ROW
              FROM TA_ACCTXF AF
             WHERE AF.COND_CODE = iCOND_CODE    /* 관리항목코드 */
             ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_COND_001]' || CHR(13) 
                                        || '등록되지 않은 관리항목코드 입니다. 관리항목코드 [' || iCOND_CODE || ']');
        END;

    END;

      /**********************************************
        공통코드
       ********************************************* */
    PROCEDURE SP_TM_CODEXD (
        iCOMM_CODE     IN TM_CODEXD.COMM_CODE%TYPE   /* 공통코드 */
      , iCOMD_CODE     IN TM_CODEXD.COMD_CODE%TYPE   /* 세부코드 */
    )
    IS
    BEGIN

        BEGIN

            SELECT *
              INTO TM_CODEXD_ROW
              FROM TM_CODEXD CD
             WHERE CD.COMM_CODE = iCOMM_CODE /* 공통코드 */
               AND CD.COMD_CODE = iCOMD_CODE /* 세부코드 */
               ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_COMM_001]' || CHR(13) 
                                        || '등록되지 않은 공통코드 입니다. 공통코드 [' || iCOMM_CODE || '] 세부코드 [' || iCOMD_CODE || ']');
        END;

    END;


      /**********************************************
        전표승인상태 확인해서 수정,삭제,저장 가능한지를 확인한다.
       ********************************************* */
    PROCEDURE SP_UPDATE_CHK (
        iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
    )
    IS
    BEGIN

        /* 전표마스터 */
        SP_TA_SLIPXM(iSLIP_NUMB);

        /* 결재상태 수정여부=1 확인한다. */
        IF NVL(SF_GET_REFXFILD('APPS_CODE', TA_SLIPXM_ROW.APPS_CODE, '1'), ' ') = '0' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_UPDT_001]' || CHR(13) 
                                    || '요청한 작업을 처리할 수 없는 전표승인상태 입니다.' 
                                    || ' 전표승인상태 [' || TA_SLIPXM_ROW.APPS_CODE || ' ' || SF_GET_COMMNAME('APPS_CODE', TA_SLIPXM_ROW.APPS_CODE) || ']');
        END IF;

        /* 마감확인 전표일자 */
        SP_SLIP_CLOSE_CHK (
             TA_SLIPXM_ROW.SLIP_GUBN     /* 전표유형구분 */
           , TA_SLIPXM_ROW.SLIP_DATE     /* 마감확인일자 */
           , '1'                         /* 마감확인구분 1=전표일자 2=회계일자 */
        );

        /* 마감확인 회계일자 */
        SP_SLIP_CLOSE_CHK (
             TA_SLIPXM_ROW.SLIP_GUBN     /* 전표유형구분 */
           , TA_SLIPXM_ROW.ACCT_DATE     /* 마감확인일자 */
           , '2'                         /* 마감확인구분 1=전표일자 2=회계일자 */
        );

    END;


      /**********************************************
        필수항목 확인
       ********************************************* */
    PROCEDURE SP_MUST_CHECK (
        iCHEK_GUBN     VARCHAR2   /* 확인구분 */
      , iSLIP_NUMB     VARCHAR2   /* 전표번호 */
      , iSLIP_LINE     VARCHAR2   /* 전표라인번호 */
      , iCHEK_VALU     VARCHAR2   /* 항목값 */
      , iCHEK_NAME     VARCHAR2   /* 항목명 */
      , iCHEK_TYPE     VARCHAR2   DEFAULT 'CHAR' /* 항목데이터타입 */
      , iINPT_YSNO     VARCHAR2   DEFAULT '1'    /* 필수입력여부 */
    )
    IS
    BEGIN
        
        /* 필수입력인 경우 */
        IF TRIM(iINPT_YSNO) IS NULL OR TRIM(iINPT_YSNO) = '1' THEN
        
            IF TRIM(iCHEK_VALU) IS NULL OR (UPPER(iCHEK_TYPE) = 'NUMBER' AND iCHEK_VALU = '0') THEN
                
                RAISE_APPLICATION_ERROR(-20000, iCHEK_GUBN || '에서 '
                                        || '[' || iCHEK_NAME || ']은(는) 필수 항목입니다.'
                                        || CASE WHEN iSLIP_NUMB IS NOT NULL THEN CHR(13) || '전표번호 [' || iSLIP_NUMB || '] ' END
                                        || CASE WHEN iSLIP_LINE IS NOT NULL THEN '행번호 [' || iSLIP_LINE || ']' END);
                                        
            END IF;
        
        /* 필수입력이 아닌 경우 */
        ELSE  
            IF TRIM(iCHEK_VALU) IS NOT NULL OR (UPPER(iCHEK_TYPE) = 'NUMBER' AND iCHEK_VALU <> '0') THEN
                  
                RAISE_APPLICATION_ERROR(-20000, iCHEK_GUBN || '에서 '
                                        || '[' || iCHEK_NAME || ']은(는) 필수 항목이 아닙니다.'
                                        || CASE WHEN iSLIP_NUMB IS NOT NULL THEN CHR(13) || '전표번호 [' || iSLIP_NUMB || '] ' END
                                        || CASE WHEN iSLIP_LINE IS NOT NULL THEN '행번호 [' || iSLIP_LINE || ']' END);
                    
            END IF;
        
        END IF;

    END;

      /**********************************************
        미결정리
       ********************************************* */
    PROCEDURE SP_BANJE_SLIP (
        iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
    )
    IS
        LV_OSLI_CNTX    NUMBER(10);    /* 발생전표건수 */
        LV_SLIP_BALA    NUMBER(19);    /* 발생금액잔액 */

    BEGIN

        LV_OSLI_CNTX := 0;          /* 발생전표건수 */
        FOR RS IN (
            SELECT ST.SLIP_NUMB   /* 전표번호 */
                 , ST.SLIP_LINE   /* 전표라인번호 */
                 , ST.ACCT_INTL   /* 계정과목코드 */
                 , ST.DRCR_GUBN   /* 차대구분 */
                 , ST.CURR_GUBN   /* 통화구분 */
                 , ST.EXCH_RATE   /* 환율 */
                 , ST.FORI_AMNT   /* 외화금액 */
                 , ST.SLIP_AMNT   /* 전표금액 */
                 , ST.OSLI_DATE   /* 상대전표일자 */
                 , ST.OSLI_NUMB   /* 상대전표번호 */
                 , ST.OSLI_LINE   /* 상대전표순번 */
                 , ST.UNMC_YSNO   /* 미불완료여부 */
                 , AC.GUNB_YSNO   /* 미결관리항목 */
                 , AC.ACCT_NAME   /* 계정명 */
                 , SM.SLIP_DATE   /* 전표일자 */
                 , SM.ACCT_DATE   /* 회계일자 */
                 , SM.APPR_DOCN   /* 결재문서번호 */
                 , SM.APPS_CODE   /* 결재상태코드 */
                 , SM.APCP_YEAR   /* 결재완료년도 */
                 , SM.APPR_DTCD   /* 결재부서코드 */
                 , OS.SLIP_NUMB AS OSLI_SLIP_NUMB   /* 발생전표번호 */
                 , OS.SLIP_LINE AS OSLI_SLIP_LINE   /* 발생전표라인번호 */
                 , OS.ACCT_INTL AS OSLI_ACCT_INTL   /* 발생계정과목코드 */
                 , OS.DRCR_GUBN AS OSLI_DRCR_GUBN   /* 발생차대구분 */
                 , OM.SLIP_DATE AS OSLI_SLIP_DATE   /* 전표일자 */
                 , OM.ACCT_DATE AS OSLI_ACCT_DATE   /* 회계일자 */
                 , OM.APPR_DOCN AS OSLI_APPR_DOCN   /* 결재문서번호 */
                 , OM.APPS_CODE AS OSLI_APPS_CODE   /* 결재상태코드 */
                 , OM.APCP_YEAR AS OSLI_APCP_YEAR   /* 결재완료년도 */
                 , OM.APPR_DTCD AS OSLI_APPR_DTCD   /* 결재부서코드 */
              FROM TA_SLIPNT ST
                   LEFT JOIN TA_ACCTXM AC
                          ON AC.ACCT_INTL = ST.ACCT_INTL    /* 계정과목 */
                   LEFT JOIN TA_SLIPXM SM
                          ON ST.SLIP_NUMB = SM.SLIP_NUMB
                   LEFT JOIN TA_SLIPNT OS
                          ON OS.SLIP_NUMB = ST.OSLI_NUMB    /* 발생전표번호 */
                         AND OS.SLIP_LINE = ST.OSLI_LINE    /* 발생행번호 */
                   LEFT JOIN TA_SLIPXM OM
                          ON OM.SLIP_NUMB = OS.SLIP_NUMB    /* 전표번호 */
             WHERE ST.SLIP_NUMB = iSLIP_NUMB    /* 전표번호 */
               AND ST.SLIP_LINE = iSLIP_LINE    /* 전표행번호 */
        )
        LOOP
            LV_OSLI_CNTX := LV_OSLI_CNTX + 1;

            /* 발생전표가 없으면 작업하지 않는다. */
            IF RS.OSLI_NUMB IS NULL THEN  /* 상대전표번호 */
                EXIT;
            END IF;

            IF NVL(RS.GUNB_YSNO, '0') <> '1' THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_001]' || CHR(13)
                                        || '[' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || ']'
                                        || ' 미결 정산대상이 아닌 계정과목 행에 발생전표를 지정하였습니다.'
                                        || ' 정산행번호 [' || iSLIP_LINE || ']');
            END IF;

            /* 발생전표 존재를 확인한다. */
            IF RS.OSLI_SLIP_NUMB IS NULL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_002]' || CHR(13)
                                        || '정산하기 위해 지정한 발생전표가 존재하지 않습니다.'
                                        || ' 정산행번호 [' || iSLIP_LINE || ']'
                                        || ' 발생전표번호 [' || RS.OSLI_NUMB || ']'
                                        || ' 발생행번호 [' || RS.OSLI_LINE || ']');
            END IF;

            /* 발생계정 확인 */
            IF RS.ACCT_INTL <> RS.OSLI_ACCT_INTL THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_003]' || CHR(13) 
                                        || '정산하기 위해 지정한 발생전표행의 계정과목 [' || RS.OSLI_ACCT_INTL || ' ' || SF_GET_ACCTNAME(RS.OSLI_ACCT_INTL) || ']와(과)'
                                        || ' 정산행의 계정과목 [' || RS.ACCT_INTL || ' ' || RS.ACCT_NAME || ']가(이) 다릅니다.'
                                        || ' 정산행번호 [' || iSLIP_LINE || ']');
            END IF;

            /* 발생전표가 결재완료가 아니면 */
            IF NVL(RS.OSLI_APPS_CODE, '0') <> 'FA1' THEN
                 RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_004]' || CHR(13)
                                        || '정산하기 위해 지정한 발생전표가 승인되지 않았습니다.'
                                        || ' 정산행번호 [' || iSLIP_LINE || ']'
                                        || ' 발생전표번호 [' || RS.OSLI_NUMB || ']');
            END IF;

            /* 정산 전표의 회계일 체크(발생전표 회계일 <= 정산전표 NVL(회계일,전표일)) */
            IF RS.OSLI_ACCT_DATE > NVL(RS.ACCT_DATE, RS.SLIP_DATE) THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_005]' || CHR(13)
                                        || '정산하기 위해 지정한 발생전표의 회계일자가 정산전표의 회계일자 또는 전표일자보다 이후에 처리 되었습니다.' || CHR(13)
                                        || '정산행번호 [' || iSLIP_LINE || ']'
                                        || ' 발생전표번호 [' || RS.OSLI_NUMB || ']'
                                        || ' 발생전표의 회계일자 [' || RS.OSLI_ACCT_DATE || ']');

            END IF;

            LV_OSLI_CNTX := LV_OSLI_CNTX + 1;    /* 발생전표건수 */

            LV_SLIP_BALA := SF_SLIP_BALA(RS.OSLI_NUMB, RS.OSLI_LINE);

            /* 정산전표의 금액합이 발생전표금액을 초과하면 안된다. */
            IF LV_SLIP_BALA < 0 THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_BANJ_006]' || CHR(13)
                                        || '[' || LV_SLIP_BALA || '] 정산금액의 합이 발생계정 금액의 합을 초과 할수 없습니다.' || CHR(13)
                                        || '정산행번호 [' || iSLIP_LINE || ']'
                                        || ' 발생전표번호 [' || RS.OSLI_NUMB || ']'
                                        || ' 발생행번호 [' || RS.OSLI_LINE || ']'
                                        || ' 의 상계내역을 확인하십시요.');
            END IF;

            /* 발생전표를 종료한다. */
            IF LV_SLIP_BALA = 0 THEN
                UPDATE TA_SLIPNT
                   SET UNMC_YSNO = '1'    /* 미불완료여부 */
                 WHERE SLIP_NUMB = RS.OSLI_NUMB    /* 발생전표번호 */
                   AND SLIP_LINE = RS.OSLI_LINE    /* 발생전표행번호 */
                   ;
            END IF;

        END LOOP;

    END;

      /**********************************************
        전표마감확인
       ********************************************* */
    PROCEDURE SP_SLIP_CLOSE_CHK (
        iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
      , iMAGA_DATE     IN VARCHAR2   /* 마감확인일자 */
      , iMAGA_GUBN     IN VARCHAR2   DEFAULT '2' /* 마감확인구분 1=전표일자 2=회계일자 */
    )
    IS
        G_ROW        TA_SLGBXM%ROWTYPE;    /* 전표유형구분 */
        S_ROW        TA_MAGAMX%ROWTYPE;    /* 전표마감 */

    BEGIN

        /* 마감확인일자가 공란이면 확인하지 않는다. */
        IF iMAGA_DATE IS NULL THEN
            RETURN;
        END IF;

        /* 전표종류확인 */
        SP_TA_SLGBXM (iSLIP_GUBN);

        /* 마감확인 */
        BEGIN

            SELECT *
              INTO S_ROW
              FROM TA_MAGAMX S
             WHERE S.MAGA_DATE = iMAGA_DATE                /* 마감일 */
               AND S.SLCL_TYCD = TA_SLGBXM_ROW.SLCL_TYCD   /* 전표마감유형코드 */
               ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RETURN;    /* 마감이 등록되지 않으면 통과한다. */

        END;

        /* 회계일자 */
        IF iMAGA_GUBN = '2' THEN
            IF NVL(S_ROW.APPR_YSNO, '0') = '1' THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_CLOS_001]' || CHR(13) 
                                        || '회계일자가 마감되어 처리할 수 없습니다. 회계일자 [' || iMAGA_DATE || ']');

            END IF;

        /* 전표일자 */
        ELSE
            IF NVL(S_ROW.EDIT_YSNO, '0') = '1' THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_CLOS_002]' || CHR(13) 
                                        || '전표일자가 마감되어 처리할 수 없습니다. 전표일자 [' || iMAGA_DATE || ']');

            END IF;
        END IF;

    END;

      /**********************************************
        CRUD TYPE(INS,UPD)을 확인한다.
       ********************************************* */
    PROCEDURE SP_CRUD_TYPE_CHK (
        iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD) */
    )
    IS
    BEGIN

        IF NVL(iCRUD_TYPE, ' ') NOT IN ('INS', 'UPD') THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_CRUD_001]' || CHR(13) 
                                    || 'CRUD TYPE 오류 [' || iCRUD_TYPE || ']'
                                    || ' CRUD TYPE 은 INS(입력)/UPD(수정) 만 올 수 있습니다.');
        END IF;

    END;


      /**********************************************
        발생전표금액 잔액
       ********************************************* */
    FUNCTION SF_SLIP_BALA (
        iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
    )
    RETURN NUMBER
    IS
        LV_SLIP_BALA    NUMBER(19);

    BEGIN

        SELECT NVL(SUM(ST.SLIP_AMNT),0)
          INTO LV_SLIP_BALA
          FROM (
                SELECT CASE WHEN ST.DRCR_GUBN = AC.DRCR_GUBN THEN 1 ELSE -1 END * ST.SLIP_AMNT AS  SLIP_AMNT
                  FROM TA_SLIPNT ST
                       LEFT JOIN TA_ACCTXM AC
                              ON AC.ACCT_INTL = ST.ACCT_INTL
                 WHERE ST.SLIP_NUMB = iSLIP_NUMB    /* 전표번호 */
                   AND ST.SLIP_LINE = iSLIP_LINE    /* 전표행번호 */
                 UNION ALL
                SELECT CASE WHEN ST.DRCR_GUBN = AC.DRCR_GUBN THEN 1 ELSE -1 END * ST.SLIP_AMNT AS  SLIP_AMNT
                  FROM TA_SLIPNT ST
                       LEFT JOIN TA_ACCTXM AC
                              ON AC.ACCT_INTL = ST.ACCT_INTL
                 WHERE ST.OSLI_NUMB = iSLIP_NUMB    /* 전표번호 */
                   AND ST.OSLI_LINE = iSLIP_LINE    /* 전표행번호 */
                ) ST
                ;

        RETURN LV_SLIP_BALA;

    END;

      /**********************************************
        전표승인
       ********************************************* */
    PROCEDURE SP_SLIP_APPROVAL (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iAPPR_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 승인자 */
      , iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
      , iAPRV_OPTN     IN VARCHAR2       /* 승인옵션 */
    )
    IS

        HR_MASTXM_ROW        HR_MASTXM%ROWTYPE;    /* 인사마스터 */

    BEGIN

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);

        /* 승인여부확인 */
        IF NVL(TA_SLIPXM_ROW.APPS_CODE, '0') = 'FA1' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_APPR_001]' || CHR(13) || '이미 회계승인 처리된 전표번호입니다. 전표번호 [' || iSLIP_NUMB || ']');
        END IF;

        /* 회계일자 */
        IF iACCT_DATE IS NULL THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_APPR_002]' || CHR(13) || '승인처리 작업은 회계일자가 필수입니다. 전표번호 [' || iSLIP_NUMB || ']');
        END IF;

        /* 회계일자 */
        IF ISDATE(iACCT_DATE) = '0' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_APPR_003]' || CHR(13) 
                                    || '회계일자를 확인하십시요.'
                                    || ' 회계일자 [' || iACCT_DATE || '] 전표번호 [' || iSLIP_NUMB || ']');
        END IF;

        BEGIN
            SELECT *
              INTO HR_MASTXM_ROW
              FROM HR_MASTXM HM
             WHERE HM.EMPL_NUMB = iAPPR_EMPL
             ;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                HR_MASTXM_ROW := NULL;
        END;


        /* 마감확인 회계일자 */
        SP_SLIP_CLOSE_CHK (
             TA_SLIPXM_ROW.SLIP_GUBN     /* 전표유형구분 */
           , TA_SLIPXM_ROW.ACCT_DATE     /* 마감확인일자 */
           , '2'                         /* 마감확인구분 1=전표일자 2=회계일자 */
        );
        
        /* 전표마스터 */
        UPDATE TA_SLIPXM 
           SET ACCT_DATE = iACCT_DATE      /* 회계일자 */
             , APPR_DATE = iACCT_DATE      /* 승인일자 */
             , APPR_EMPL = iAPPR_EMPL      /* 승인자 */
             , APPR_DEPT = HR_MASTXM_ROW.DEPT_CODE    /* 승인부서 */
             , APPS_CODE = 'FA1'             /* 결재상태코드 회계승인=FA1 */
             , PROC_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD')      /* 처리일 */
             , UPDT_USID = iUPDT_USID      /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB      /* 전표번호 */
         ;

        /* 전표라인 */
        UPDATE TA_SLIPNT 
           SET ACCT_DATE = iACCT_DATE      /* 회계일자 */
             , UPDT_USID = iUPDT_USID      /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB      /* 전표번호 */
         ;

        /* 일집계반영 */
        SP_DAILY_SUM (
             iUPDT_USID        /* 수정작업자 */
           , iSLIP_NUMB     /* 전표번호 */
           , 1     /* 승인=1 승인취소=-1 */
        );

    END;

      /**********************************************
        전표승인취소
       ********************************************* */
    PROCEDURE SP_SLIP_CANCEL (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iAPPR_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 승인취소자 */
      , iCANC_OPTN     IN VARCHAR2        /* 승인취소옵션 */
    )
    IS
        iOSLI_CNT   INT;  /* 발생전표처리 건수 */
        sSLIP_NUMB  TA_SLIPNT.SLIP_NUMB%TYPE;
    BEGIN

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);

        /* 전표승인취소 여부확인 */
        IF NVL(TA_SLIPXM_ROW.APPS_CODE, '0') = 'FA0' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_CANCEL_001]' || CHR(13) || '이미 회계승인취소 처리된 전표번호입니다. 전표번호 [' || iSLIP_NUMB || ']');
        END IF;

        /* 전표승인완료건이 아니면 승인취소 하지 않는다 */
        IF NVL(TA_SLIPXM_ROW.APPS_CODE, '0') <> 'FA1' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_CANCEL_002]' || CHR(13) || '회계승인 처리된 건만 승인취소할 수 있습니다. 전표번호 [' || iSLIP_NUMB || ']'
                                    || ' 승인상태 [' || TA_SLIPXM_ROW.APPS_CODE || ' ' || SF_GET_COMMNAME('APPS_CODE', TA_SLIPXM_ROW.APPS_CODE) || ']');
        END IF;


        /* 마감확인 회계일자 */
        SP_SLIP_CLOSE_CHK (
             TA_SLIPXM_ROW.SLIP_GUBN     /* 전표유형구분 */
           , TA_SLIPXM_ROW.ACCT_DATE     /* 마감확인일자 */
           , '2'                         /* 마감확인구분 1=전표일자 2=회계일자 */
        );
        
        
        /*======================================================================
            발생전표처리된 전표여부 체크                     2016.09.08 by권미영
        ====================================================================== */
        SELECT COUNT(1)
             , MAX(SLIP_NUMB)
          INTO iOSLI_CNT
             , sSLIP_NUMB
          FROM TA_SLIPNT A
         WHERE A.OSLI_NUMB = iSLIP_NUMB
         ;

        IF iOSLI_CNT > 0 THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_CANCEL_003]' || CHR(13) 
                                    || '현재의 전표가 정산처리되어 승인취소를 할 수 없습니다. 정산전표를 먼저 삭제 하십시요.' || CHR(13) 
                                    || '전표번호 [' || iSLIP_NUMB || '] 정산전표번호 [' || sSLIP_NUMB || ']');
        END IF;

        
        
        
        /*======================================================================
            전표변경이력생성 (C.승인취소)                   2016.09.05 by김삼영
        ====================================================================== */
        PKG_FAMB0030.SP_SLIP_CREATE_LOG (
            iSYST_LNCD                  /* ●시스템언어코드 */
          , iUPDT_USID                  /* ●수정작업자 */
          , iSLIP_NUMB                  /* ●전표번호 */
          , NULL                        /* ◎전표라인번호 */
          , 'C'                         /* ●이력구분[LOGX_GUBN](C.승인취소,D.삭제) */
          , SF_GET_USEREMPL(iUPDT_USID) /* ●이력사원번호 */
          , NULL                        /* ◎이력옵션 */      
        );
        

        /* 전표마스터 */
        UPDATE TA_SLIPXM 
           SET APPR_EMPL = ''            /* 승인자 */
             , APPR_DEPT = ''            /* 승인부서 */
             , APPS_CODE = CASE WHEN APPR_DOCN IS NULL THEN '0' ELSE 'FA0' END /* 결재상태코드 회계미승인='FA0'(전자결재문서 번호 존재) / 임시저장='0'(전자결재문서번호 미존재) */
             , PROC_DATE = TO_CHAR(SYSDATE, 'YYYYMMDD')      /* 처리일 */
             , UPDT_USID = iUPDT_USID    /* 수정작업자 */
             , UPDT_DATE = SYSDATE      /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB   /* 전표번호 */
         ;

        /* 전표라인 */
        UPDATE TA_SLIPNT 
           SET ACCT_DATE = ''              /* 회계일자 */
             , UPDT_USID = iUPDT_USID      /* 수정작업자 */
             , UPDT_DATE = SYSDATE         /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB      /* 전표번호 */
         ;

        /* 일집계반영 */
        SP_DAILY_SUM (
             iUPDT_USID     /* 수정작업자 */
           , iSLIP_NUMB     /* 전표번호 */
           , -1             /* 승인=1 승인취소=-1 */
        );

    END;

      /**********************************************
        역분개전표생성
       ********************************************* */
    PROCEDURE SP_SLIP_REVERSE (
        iSYST_LNCD     IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iREVJ_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 역분개자사원번호 */
      , iREVJ_DATE     IN VARCHAR2   /* 역분개일자 */
      , iREVJ_TYPE     IN VARCHAR2   /* 역분개유형 SW.Switch Dr/Cr, CS,Change Sign */
      , iREVJ_OPTN     IN VARCHAR2   /* 역분개옵션 */
      , iREVJ_SLNO    OUT TA_SLIPXM.SLIP_NUMB%TYPE   /* 역분개전표번호 */
    )
    IS
    BEGIN

        NULL;

    END;


      /**********************************************
        일집계반영
       ********************************************* */
    PROCEDURE SP_DAILY_SUM (
        iUPDT_USID     IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iPLUS_NUMB     IN NUMBER       /* 승인=1 승인취소=-1 */
    )
    IS
    BEGIN

        MERGE INTO TA_MAMNTM T
        USING (
                SELECT A.ACCT_UNIT        /* 회계단위 */
                     , A.ACCT_GUBN        /* 회계구분_사업장 */
                     , B.ACCT_DATE        /* 회계일자 */
                     , A.ACCT_INTL        /* 계정과목코드 */
                     , A.CURR_GUBN        /* 통화구분 */
                     , SUM(CASE WHEN A.DRCR_GUBN = 'D' THEN A.SLIP_AMNT ELSE 0 END) * iPLUS_NUMB  AS SLIP_CHAX        /* 전표차변 */
                     , SUM(CASE WHEN A.DRCR_GUBN = 'C' THEN A.SLIP_AMNT ELSE 0 END) * iPLUS_NUMB  AS SLIP_DAEX        /* 전표대변 */
                     , SUM(CASE WHEN A.DRCR_GUBN = 'D' THEN A.FORI_AMNT ELSE 0 END) * iPLUS_NUMB  AS FORI_CHAX        /* 외화차변 */
                     , SUM(CASE WHEN A.DRCR_GUBN = 'C' THEN A.FORI_AMNT ELSE 0 END) * iPLUS_NUMB  AS FORI_DAEX       /* 외화대변 */
                  FROM TA_SLIPNT A
                       LEFT JOIN TA_SLIPXM B
                              ON B.SLIP_NUMB = A.SLIP_NUMB
                 WHERE A.SLIP_NUMB = iSLIP_NUMB
                   AND B.ACCT_DATE IS NOT NULL    /* 회계일자가 공란이면 작업하지 않는다. */
                 GROUP BY
                       A.ACCT_UNIT        /* 회계단위 */
                     , A.ACCT_GUBN        /* 회계구분_사업장 */
                     , B.ACCT_DATE        /* 회계일자 */
                     , A.ACCT_INTL        /* 계정과목코드 */
                     , A.CURR_GUBN        /* 통화구분 */
            ) A
           ON (
                    T.ACCT_UNIT = A.ACCT_UNIT     /* 회계단위 */
                AND T.ACCT_GUBN = A.ACCT_GUBN     /* 회계구분_사업장 */
                AND T.ACCT_DATE = A.ACCT_DATE     /* 회계일자 */
                AND T.ACCT_INTL = A.ACCT_INTL     /* 계정과목코드 */
                AND T.CURR_GUBN = A.CURR_GUBN     /* 통화구분 */
            )
         WHEN MATCHED THEN UPDATE SET
              T.SLIP_CHAX = NVL(T.SLIP_CHAX,0) + NVL(A.SLIP_CHAX,0)     /* 전표차변 */
            , T.SLIP_DAEX = NVL(T.SLIP_DAEX,0) + NVL(A.SLIP_DAEX,0)     /* 전표대변 */
            , T.FORI_CHAX = NVL(T.FORI_CHAX,0) + NVL(A.FORI_CHAX,0)     /* 외화차변 */
            , T.FORI_DAEX = NVL(T.FORI_DAEX,0) + NVL(A.FORI_DAEX,0)     /* 외화대변 */
            , T.UPDT_USID = iUPDT_USID     /* 수정작업자 */
            , T.UPDT_DATE = SYSDATE         /* 수정일시 */
         WHEN NOT MATCHED THEN INSERT
         (
                 ACCT_UNIT          /* 회계단위 */
               , ACCT_GUBN          /* 회계구분_사업장 */
               , ACCT_DATE          /* 회계일자 */
               , ACCT_INTL          /* 계정과목코드 */
               , CURR_GUBN          /* 통화구분 */
               , SLIP_CHAX          /* 전표차변 */
               , SLIP_DAEX          /* 전표대변 */
               , FORI_CHAX          /* 외화차변 */
               , FORI_DAEX          /* 외화대변 */
               , INST_USID          /* 입력작업자 */
               , INST_DATE          /* 입력일시 */
               , UPDT_USID          /* 수정작업자 */
               , UPDT_DATE          /* 수정일시 */
         ) VALUES (
                 A.ACCT_UNIT        /* 회계단위 */
               , A.ACCT_GUBN        /* 회계구분_사업장 */
               , A.ACCT_DATE        /* 회계일자 */
               , A.ACCT_INTL        /* 계정과목코드 */
               , A.CURR_GUBN        /* 통화구분 */
               , A.SLIP_CHAX        /* 전표차변 */
               , A.SLIP_DAEX        /* 전표대변 */
               , A.FORI_CHAX        /* 외화차변 */
               , A.FORI_DAEX        /* 외화대변 */
               , iUPDT_USID         /* 입력작업자 */
               , SYSDATE            /* 입력일시 */
               , iUPDT_USID         /* 수정작업자 */
               , SYSDATE            /* 수정일시 */
         )
         ;

    END;


      /**********************************************
        예산체크
       ********************************************* */
    PROCEDURE SP_SLIP_BUDG_CHECK (
        iSLIP_NUMB        TA_SLIPNT.SLIP_NUMB%TYPE     /* 전표번호 */
      , iSLIP_LINE        TA_SLIPNT.SLIP_LINE%TYPE     /* 전표 라인 < 생략시 전체 전표 조회 > */
    )
    IS

        sERRMSG             VARCHAR2(1000);
        iEXCE_AMNT          NUMBER;     /* 예산초과금액 */
        iBUDG_AMNT          NUMBER;     /* 예산배정금액 */
    
    BEGIN
    
        BEGIN    
            SELECT '예산금액이 초과 되었습니다. 전표번호[' || SLIP_NUMB || '] 행번호 [' || MAX(SLIP_LINE) || '] ' || CHR(13)
                            || '예산과목 [' || SF_GET_BDSBNAME(BDSB_CODE) || ']'
                 , NVL(SF_GET_BUDG_EXEC_AMNT(ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YMST, BUDG_YMED, BUDG_GUBN, '', ''), 0)
                        - NVL(SF_GET_BUDG_AMNT(ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YYMM, BUDG_GUBN), 0)   /* 예산초과금액 */
                 , SF_GET_BUDG_AMNT(ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YYMM, BUDG_GUBN)        /* 예산배정금액 */
              INTO sERRMSG
                 , iEXCE_AMNT
                 , iBUDG_AMNT
              FROM (
                    SELECT XM.ACCT_UNIT        /* 회계단위 */
                         , NT.CSTC_CODE        /* 코스트센터코드 */
                         , NT.BDSB_CODE        /* 예산과목코드 */
                         , SUBSTR(XM.SLIP_DATE, 0, 6) AS BUDG_YYMM      /* 전표월 */
                         , NT.BUDG_GUBN        /* 예산구분 */
                         , CASE WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '03' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '01'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '06' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '04'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '09' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '07'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '12' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '10'
                                ELSE TO_NCHAR('') END AS BUDG_YMST      /* 분기 시작월 */
                         , CASE WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '03' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '03'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '06' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '06'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '09' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '09'
                                WHEN NT.BUDG_GUBN = TO_NCHAR('10') AND SUBSTR(XM.SLIP_DATE, 5, 2) <= '12' THEN SUBSTR(XM.SLIP_DATE, 0, 4) || '12'
                                ELSE TO_NCHAR('') END AS BUDG_YMED      /* 분기 종료월 */
                         , NT.SLIP_NUMB       /* 전표번호 */
                         , NT.SLIP_LINE       /* 전표라인번호 */
                         , NT.SLIP_AMNT       /* 전표금액 */
                      FROM TA_SLIPXM XM
                           INNER JOIN TA_SLIPNT NT 
                                   ON NT.SLIP_NUMB = XM.SLIP_NUMB
                           INNER JOIN TA_ACCTXM AC 
                                   ON AC.ACCT_INTL = NT.ACCT_INTL 
                                  AND AC.BUDG_YSNO = '1'    /* 예산관리 계정만 */
                     WHERE XM.SLIP_NUMB = iSLIP_NUMB
                       AND NT.SLIP_LINE = NVL(iSLIP_LINE, NT.SLIP_LINE)
                 ) A
             GROUP BY ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YMST, BUDG_YMED, BUDG_GUBN, BUDG_YYMM, SLIP_NUMB
            HAVING NVL(SF_GET_BUDG_AMNT(ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YYMM, BUDG_GUBN), 0)     /* 배정금액 */
                    < NVL(SF_GET_BUDG_EXEC_AMNT(ACCT_UNIT, CSTC_CODE, BDSB_CODE, BUDG_YMST, BUDG_YMED, BUDG_GUBN, '', ''), 0) /* 실적금액(미승인 자료포함) */
            ;
        
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                sERRMSG := '';
        END;
        
        /* 편성금액이 0인경우 체크 제외 */
        IF LENGTH(sERRMSG) > 1 
            AND (iBUDG_AMNT IS NULL OR iBUDG_AMNT > 0) THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_BUDG_001]' || CHR(13) || sERRMSG || ' 초과금액 [' || iEXCE_AMNT || ']');
        END IF;
         
    END ;
    
    
      /**********************************************
        전표 인쇄용 순번 재산출
       ********************************************* */
    PROCEDURE SP_SET_PRINT_ORDER (
        iSLIP_NUMB   IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
    ) AS

    sFRST_DRCR VARCHAR2(1);
    sSLIP_SEQX INT := 0;
    sDRCR_GUBN VARCHAR2(2) := ' ';

    BEGIN

        BEGIN
        
            SELECT A.DRCR_GUBN
              INTO sFRST_DRCR    /* 첫행의 차대구분값 */
              FROM TA_SLIPNT A
                   INNER JOIN (SELECT iSLIP_NUMB AS SLIP_NUMB
                                    , MIN(SLIP_LINE) AS MINN_LINE
                                FROM TA_SLIPNT
                               WHERE SLIP_NUMB = iSLIP_NUMB
                               ORDER BY SORT_ORDR, SLIP_LINE
                            ) B 
                           ON A.SLIP_NUMB = B.SLIP_NUMB
                          AND A.SLIP_LINE = B.MINN_LINE
             WHERE A.SLIP_NUMB = iSLIP_NUMB
             ;
            
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                sFRST_DRCR := 'D';
        END;
        
        
        FOR CUR IN (
            SELECT SLIP_LINE
                 , DECODE(DRCR_GUBN, sFRST_DRCR, '01', '02') AS  DRCR_GUBN  /* 01 : 첫행의 차대구분 값, 02 : 첫행이 차변이면 대변. 첫행이 대변이면 차변 */
              FROM TA_SLIPNT
             WHERE SLIP_NUMB = iSLIP_NUMB
             ORDER BY SORT_ORDR, SLIP_LINE

        ) LOOP

            IF ( (sDRCR_GUBN = ' ') OR (sDRCR_GUBN = CUR.DRCR_GUBN) OR (CUR.DRCR_GUBN = '01') ) THEN
                sSLIP_SEQX := sSLIP_SEQX + 1;
            END IF;

            sDRCR_GUBN := CUR.DRCR_GUBN;

            /* 전표 상태 변경 */
            UPDATE TA_SLIPNT
               SET PRIN_ORDR = sSLIP_SEQX || CUR.DRCR_GUBN
             WHERE SLIP_NUMB = iSLIP_NUMB
               AND SLIP_LINE = CUR.SLIP_LINE;

        END LOOP;

    END;

      /**********************************************
       전자결재연동 문서번호 업데이트
       ********************************************* */ 
    PROCEDURE SP_GWAP_APPRSEQN_UPDATE (
        iSYST_LNCD      IN VARCHAR2        /* 시스템언어코드 */
      , iUPDT_USID      IN VARCHAR2        /* 수정작업자 */
      , iSLIP_NUMB      IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
      , iAPPR_DOCN      IN TA_SLIPXM.APPR_DOCN%TYPE   /* 결재문서번호 */
    )
    IS
    
    BEGIN

        /* 전표마스터 */
        SP_TA_SLIPXM (iSLIP_NUMB);
            
        IF TA_SLIPXM_ROW.APPS_CODE <> '0' THEN  /* 결재상태코드 */
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_GWAP_001' || CHR(13) 
                                    || '결재상태가 임시저장상태가 아니므로 전자결재 상신이 불가 합니다.' 
                                    || ' 결재상태 [' || TA_SLIPXM_ROW.APPS_CODE || ' ' || SF_GET_COMMNAME('APPS_CODE', TA_SLIPXM_ROW.APPS_CODE) || ']');
        END IF; 
        
        /* 처리 가능 여부를 확인한다 */
        SP_UPDATE_CHK (iSLIP_NUMB);
            
        /* 전표마스터 결재문서번호 UPDATE */ 
        UPDATE TA_SLIPXM
           SET APPR_DOCN = iAPPR_DOCN   /* 결재문서번호 */
             , UPDT_USID = iUPDT_USID   /* 수정작업자 */
             , UPDT_DATE = SYSDATE      /* 수정일시 */
         WHERE SLIP_NUMB = iSLIP_NUMB   /* 전표번호 */
         ;
        
    END;
    
      /**********************************************
        전자결재 연동 후처리 - 회계전표 결재상태코드 업데이트
       ********************************************* */ 
    PROCEDURE SP_GWAP_AFTER (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    )
    IS
        LV_SLIP_NUMB    TA_SLIPXM.SLIP_NUMB%TYPE;   /* 전표번호 */
        LV_APPS_CODE    TA_SLIPXM.APPS_CODE%TYPE;   /* 회계전표 결재상태코드 */
        nCHEK_DELE      INT;    /* 전자결재 문서번호 초기화 여부 */
    
    BEGIN

        IF iDOCU_IDXX <> 'KFI102' THEN
            RAISE_APPLICATION_ERROR(-20000, '[SLIP_GWAP_AFTER_001]' || CHR(13) || '회계전표 결재문서 ID가 아닙니다. 결재문서 ID [' || iDOCU_IDXX || ']');
        END IF;
        
        nCHEK_DELE := 0;
        
        /* 1. 전표의 결재상태 값 확인 */
        BEGIN
            SELECT SLIP_NUMB
                 , APPS_CODE
              INTO LV_SLIP_NUMB
                 , LV_APPS_CODE
              FROM TA_SLIPXM
             WHERE APPR_DOCN = iAPPR_SEQN;
             
             IF LV_APPS_CODE = '5' OR LV_APPS_CODE = 'FA0' OR LV_APPS_CODE = 'FA1' THEN   /* 결재완료, 회계미승인, 회계승인 */
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_GWAP_AFTER_002]' || CHR(13) 
                                        || '결재완료된 문서입니다. 결재상태 [' || LV_APPS_CODE || ' ' || SF_GET_COMMNAME('APPS_CODE', LV_APPS_CODE) || ']'
                                        || ' 전표번호 [' || LV_SLIP_NUMB || ']');   
             
             ELSIF LV_APPS_CODE = 'R' AND iAPPR_STAT = 'N' THEN /* 결재반려 -> 문서삭제 -> 임시저장상태값으로 변경된 경우 */
             
                nCHEK_DELE := 1;
                
             END IF; 
             
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE_APPLICATION_ERROR(-20000, '[SLIP_GWAP_AFTER_003]' || CHR(13) 
                                        || '전자결재 문서번호 [' || iAPPR_SEQN || ']에 해당하는 회계전표가 존재하지 않습니다.');

        END;
         
         
        /* 2. 전자결재상태코드에 해당되는 회계전표용 결재상태코드를 가져온다. */
        SELECT COMD_CODE
          INTO LV_APPS_CODE    
          FROM TM_CODEXD
         WHERE COMM_CODE = 'APPS_CODE'      /* 결재상태코드 */
           AND REF3_FILD = iAPPR_STAT;      /* 전자결재상태코드 */
        
        
        /* 3. 회계전표 결재상태 UPDATE */
        UPDATE TA_SLIPXM
           SET APPS_CODE = LV_APPS_CODE     /* 결재상태코드 */
             , APPR_DOCN = DECODE(nCHEK_DELE, 1, NULL, APPR_DOCN) /* 문서가 삭제된 경우 전자결재문서번호 초기화 */
         WHERE APPR_DOCN = iAPPR_SEQN;      /* 결재문서번호 */
        
    END;  

END PKG_FAMB0030;
/