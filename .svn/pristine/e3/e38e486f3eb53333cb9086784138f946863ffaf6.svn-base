CREATE OR REPLACE PACKAGE BODY UWZ."PKG_FAMIFSLIP" AS

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표마스터 저장
    ***************************************************************************/
    PROCEDURE SP_MASTER_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iACCT_UNIT      IN  TA_SLIPXM.ACCT_UNIT%TYPE    /* ●회계단위 */
      , iACCT_GUBN      IN  TA_SLIPXM.ACCT_GUBN%TYPE    /* ●회계구분_사업장 */
      , iSLIP_DATE      IN  TA_SLIPXM.SLIP_DATE%TYPE    /* ●전표일자(회계일자) */
      , iSLIP_GUBN      IN  TA_SLIPXM.SLIP_GUBN%TYPE    /* ●전표유형구분 */
      , iTITL_NAME      IN  TA_SLIPXM.TITL_NAME%TYPE    /* ●제목 */
      , iEMPL_NUMB      IN  TA_SLIPXM.EMPL_NUMB%TYPE    /* ●사원번호 */
      , iDEPT_CODE      IN  TA_SLIPXM.DEPT_CODE%TYPE    /* ●부서코드 */
      , iSOUS_LNKY      IN  TA_SLIPXM.SOUS_LNKY%TYPE    /* ●출처연결키 */
      , iEXTRA_01       IN  VARCHAR2                    /* ◎미사용여분인수1 */
      , iEXTRA_02       IN  VARCHAR2                    /* ◎미사용여분인수2 */
      , iEXTRA_03       IN  VARCHAR2                    /* ◎미사용여분인수3 */
      , iEXTRA_04       IN  VARCHAR2                    /* ◎미사용여분인수4 */
      , iEXTRA_05       IN  VARCHAR2                    /* ◎미사용여분인수5 */
      , oSLIP_NUMB      OUT TA_SLIPXM.SLIP_NUMB%TYPE    /* ●전표번호(생성된 전표번호 반환) */
    )
    AS
        
    BEGIN

        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        --MANU.수기전표
        IF iSLIP_GUBN = 'MANU' THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_MS_001] 수기전표유형(MANU)은 자동전표용 패키지에서 사용할 수 없습니다.'); END IF;
    
        /*======================================================================
            STEP 2. 전표마스터 저장 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_MASTER_SAVE (
            iSYST_LNCD      /* 시스템언어코드*/
          , iUPDT_USID      /* 수정작업자*/
          , 'INS'           /* CRUD TYPE(INS,UPD)*/
          , NULL            /* 전표번호 */
          , iACCT_UNIT      /* 회계단위 */
          , iACCT_GUBN      /* 회계구분_사업장 */
          , iSLIP_DATE      /* 전표일자 */
          , iSLIP_GUBN      /* 전표유형구분 */
          , NULL            /* 품의번호 */
          , iTITL_NAME      /* 제목 */
          , iEMPL_NUMB      /* 사원번호 */
          , iDEPT_CODE      /* 부서코드 */
          , iSLIP_DATE      /* 회계일자 << 전표일자 */
          , iSOUS_LNKY      /* 출처연결키 */
          , oSLIP_NUMB      /* 생성된 전표번호 반환. */
       );
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표라인 저장
    ***************************************************************************/
    PROCEDURE SP_LINE_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPNT.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPNT.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iSLIP_LINE      IN  TA_SLIPNT.SLIP_LINE%TYPE    /* ●전표라인번호 */
      , iACCT_UNIT      IN  TA_SLIPNT.ACCT_UNIT%TYPE    /* ●회계단위 */
      , iACCT_GUBN      IN  TA_SLIPNT.ACCT_GUBN%TYPE    /* ●회계구분_사업장 */
      , iACCT_INTL      IN  TA_SLIPNT.ACCT_INTL%TYPE    /* ●계정과목코드 OR 분개코드 */
      , iUSEX_DEPT      IN  TA_SLIPNT.USEX_DEPT%TYPE    /* ●사용부서 */
      , iCSTC_CODE      IN  TA_SLIPNT.CSTC_CODE%TYPE    /* ◎코스트센터코드 */
      , iDRCR_GUBN      IN  TA_SLIPNT.DRCR_GUBN%TYPE    /* ●차대구분 */
      , iCURR_GUBN      IN  TA_SLIPNT.CURR_GUBN%TYPE    /* ●통화구분 */
      , iEXCH_RATE      IN  TA_SLIPNT.EXCH_RATE%TYPE    /* ●환율 */
      , iFORI_AMNT      IN  TA_SLIPNT.FORI_AMNT%TYPE    /* ●외화금액 */
      , iSLIP_AMNT      IN  TA_SLIPNT.SLIP_AMNT%TYPE    /* ●전표금액 */
      , iOSLI_NUMB      IN  TA_SLIPNT.OSLI_NUMB%TYPE    /* ◎상대전표번호 */
      , iOSLI_LINE      IN  TA_SLIPNT.OSLI_LINE%TYPE    /* ◎상대전표순번 */
      , iBUDG_GUBN      IN  TA_SLIPNT.BUDG_GUBN%TYPE    /* ◎예산구분 */
      , iPROJ_CODE      IN  TA_SLIPNT.PROJ_CODE%TYPE    /* ◎프로젝트코드 */
      , iBGRQ_NUMB      IN  TA_SLIPNT.BGRQ_NUMB%TYPE    /* ◎예산품의번호 */
      , iBUDG_DEPT      IN  TA_SLIPNT.BUDG_DEPT%TYPE    /* ◎예산부서코드 */
      , iBUDG_YYMM      IN  TA_SLIPNT.BUDG_YYMM%TYPE    /* ◎예산년월 */
      , iBDSB_CODE      IN  TA_SLIPNT.BDSB_CODE%TYPE    /* ◎예산과목코드 */
      , iBDSP_CODE      IN  TA_SLIPNT.BDSP_CODE%TYPE    /* ◎예산세목코드 */
      , iREMK_NAME      IN  TA_SLIPNT.REMK_NAME%TYPE    /* ●적요 */
      , iEVID_DOCU      IN  TA_SLIPNT.EVID_DOCU%TYPE    /* ◎증빙종류 */
      , iPAYX_YSNO      IN  TA_SLIPNT.PAYX_YSNO%TYPE    /* ◎출납처리여부 */
      , iPAYX_DATE      IN  TA_SLIPNT.PAYX_DATE%TYPE    /* ◎지급일 */
      , iLEDG_GUBN      IN  TA_SLIPNT.LEDG_GUBN%TYPE    /* ◎출납방법 */
      , iBANK_INOU      IN  TA_SLIPNT.BANK_INOU%TYPE    /* ◎입출구분 */
      , iPRIN_ORDR      IN  TA_SLIPNT.PRIN_ORDR%TYPE    /* ◎출력순서 */
      , iSORT_ORDR      IN  TA_SLIPNT.SORT_ORDR%TYPE    /* ◎정렬순서 */
      , iEXTRA_01       IN  VARCHAR2                    /* ◎미사용여분인수1 */
      , iEXTRA_02       IN  VARCHAR2                    /* ◎미사용여분인수2 */
      , iEXTRA_03       IN  VARCHAR2                    /* ◎미사용여분인수3 */
      , iEXTRA_04       IN  VARCHAR2                    /* ◎미사용여분인수4 */
      , iEXTRA_05       IN  VARCHAR2                    /* ◎미사용여분인수5 */
    )
    AS
        rTA_JUNLXM          TA_JUNLXM%ROWTYPE;
        sACCT_INTL          TA_SLIPNT.ACCT_INTL%TYPE;   /* 계정과목코드 */
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/

        --분개코드 여부 체크(분개코드 규칙 샘플: TR001-0001)    
        IF INSTR(iACCT_INTL, '-') = 0 THEN
        
            sACCT_INTL := iACCT_INTL;   /* 계정과목코드 */
        
        --분개코드인 경우 계정과목코드 가져오기
        ELSE

            SELECT *
              INTO rTA_JUNLXM
              FROM TA_JUNLXM A      /* [분개코드] */
             WHERE A.JUNL_CODE = iACCT_INTL    /* 분개코드 */
            ;
            
            sACCT_INTL := rTA_JUNLXM.ACCT_INTL;   /* 계정과목코드 */
            
        END IF;
    
        /*======================================================================
            STEP 2. 전표라인 저장 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_LINE_SAVE (
            iSYST_LNCD      /* 시스템언어코드*/
          , iUPDT_USID      /* 수정작업자*/
          , 'INS'           /* CRUD TYPE(INS,UPD)*/
          , iSLIP_NUMB      /* 전표번호 */
          , iSLIP_LINE      /* 전표라인번호 */
          , iACCT_UNIT      /* 회계단위 */
          , iACCT_GUBN      /* 회계구분_사업장 */
          , sACCT_INTL      /* 계정과목코드 */
          , iUSEX_DEPT      /* 사용부서 */
          , iCSTC_CODE      /* 코스트센터코드 */
          , iDRCR_GUBN      /* 차대구분 */
          , iCURR_GUBN      /* 통화구분 */
          , iEXCH_RATE      /* 환율 */
          , iFORI_AMNT      /* 외화금액 */
          , iSLIP_AMNT      /* 전표금액 */
          , iOSLI_NUMB      /* 상대전표번호 */
          , iOSLI_LINE      /* 상대전표순번 */
          , iBUDG_GUBN      /* 예산구분 */
          , iPROJ_CODE      /* 프로젝트코드 */
          , iBGRQ_NUMB      /* 예산품의번호 */
          , iBUDG_DEPT      /* 예산부서코드 */
          , iBUDG_YYMM      /* 예산년월 */
          , iBDSB_CODE      /* 예산과목코드 */
          , iBDSP_CODE      /* 예산세목코드 */
          , iREMK_NAME      /* 적요 */
          , NULL            /* 적요2 */
          , NULL            /* 적요3 */
          , iEVID_DOCU      /* 증빙종류 */
          , iPAYX_YSNO      /* 출납처리여부 */
          , iPAYX_DATE      /* 지급일 */
          , iLEDG_GUBN      /* 출납방법 */
          , iBANK_INOU      /* 입출구분 */
          , iPRIN_ORDR      /* 출력순서 */
          , iSORT_ORDR      /* 정렬순서 */
          , 'AUTO'          /* 전표통제유형코드 */
       );
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표라인 관리항목 세트 저장
    ***************************************************************************/
    PROCEDURE SP_LINERF_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPRF.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPRF.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iSLIP_LINE      IN  TA_SLIPRF.SLIP_LINE%TYPE    /* ●전표라인번호 */
      , iCOND_COD1      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드1 */
      , iCOND_VAC1      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값1 */
      , iCOND_COD2      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드2 */
      , iCOND_VAC2      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값2 */
      , iCOND_COD3      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드3 */
      , iCOND_VAC3      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값3 */
      , iCOND_COD4      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드4 */
      , iCOND_VAC4      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값4 */
      , iCOND_COD5      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드5 */
      , iCOND_VAC5      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값5 */
      , iCOND_COD6      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드6 */
      , iCOND_VAC6      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값6 */
      , iCOND_COD7      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드7 */
      , iCOND_VAC7      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값7 */
      , iCOND_COD8      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드8 */
      , iCOND_VAC8      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값8 */
      , iCOND_COD9      IN  TA_SLIPRF.COND_CODE%TYPE    /* ◎관리항목코드9 */
      , iCOND_VAC9      IN  TA_SLIPRF.COND_VACD%TYPE    /* ◎관리항목값9 */
    )
    AS
    
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
    
        /*======================================================================
            STEP 2. 전표라인 관리항목 저장 PKG 호출
        ======================================================================*/
        /* 시스템언어코드, 수정작업자, 전표번호, 전표라인번호, 관리항목코드, 관리항목값, 관리항목값명 */
        IF iCOND_COD1 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD1, iCOND_VAC1, NULL); END IF;
        IF iCOND_COD2 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD2, iCOND_VAC2, NULL); END IF;
        IF iCOND_COD3 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD3, iCOND_VAC3, NULL); END IF;
        IF iCOND_COD4 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD4, iCOND_VAC4, NULL); END IF;
        IF iCOND_COD5 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD5, iCOND_VAC5, NULL); END IF;
        IF iCOND_COD6 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD6, iCOND_VAC6, NULL); END IF;
        IF iCOND_COD7 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD7, iCOND_VAC7, NULL); END IF;
        IF iCOND_COD8 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD8, iCOND_VAC8, NULL); END IF;
        IF iCOND_COD9 IS NOT NULL THEN PKG_FAMB0030.SP_SLIP_LINERF_SAVE (iSYST_LNCD, iUPDT_USID, iSLIP_NUMB, iSLIP_LINE, iCOND_COD9, iCOND_VAC9, NULL); END IF;
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표라인 부가세 저장
    ***************************************************************************/
    PROCEDURE SP_LINEVAT_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_VATXXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_VATXXM.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iSLIP_LINE      IN  TA_VATXXM.SLIP_LINE%TYPE    /* ●전표라인번호 */
      , iCARD_NUMB      IN  TA_VATXXM.CARD_NUMB%TYPE    /* ◎카드번호 */
      , iCARD_APPR      IN  TA_VATXXM.CARD_APPR%TYPE    /* ◎카드승인번호 */
      , iTRNS_DATE      IN  TA_VATXXM.TRNS_DATE%TYPE    /* ●전송일(계산서발행일/카드승인일) */
      , iVATX_GUBN      IN  TA_VATXXM.VATX_GUBN%TYPE    /* ●매입매출구분[VATX_GUBN] */
      , iVATX_TYPE      IN  TA_VATXXM.VATX_TYPE%TYPE    /* ●부가세종류[VATX_TYPE] */
      , iPURC_GUBN      IN  TA_VATXXM.PURC_GUBN%TYPE    /* ◎부가세유형[PURC_GUBN] */
      , iBULG_GUBN      IN  TA_VATXXM.BULG_GUBN%TYPE    /* ◎불공제구분[BULG_GUBN] */
      , iEBIL_GUBN      IN  TA_VATXXM.EBIL_GUBN%TYPE    /* ◎전자발행여부(1.Yes,0.No) */
      , iCUST_CODE      IN  TA_VATXXM.CUST_CODE%TYPE    /* ●거래처코드 */
      , iITEM_NAME      IN  TA_VATXXM.ITEM_NAME%TYPE    /* ●품목명 */
      , iSUPP_AMNT      IN  TA_VATXXM.SUPP_AMNT%TYPE    /* ●공급가액 */
      , iVATX_AMNT      IN  TA_VATXXM.VATX_AMNT%TYPE    /* ●부가세액 */
      , iSUMX_AMNT      IN  TA_VATXXM.SUMX_AMNT%TYPE    /* ●합계금액 */
      , iREMK_NAME      IN  TA_VATXXM.REMK_NAME%TYPE    /* ●적요 */
      , iETIS_YSNO      IN  TA_VATXXM.ETIS_YSNO%TYPE    /* ◎타사이트발행여부(1.Yes,0.No) */
      , iEXTRA_01       IN  VARCHAR2                    /* ◎미사용여분인수1 */
      , iEXTRA_02       IN  VARCHAR2                    /* ◎미사용여분인수2 */
    )
    AS
    
        sBIZR_NUMB          TA_CUSTXM.BIZR_NUMB%TYPE;   /* 사업자번호 */
    
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
    
        --거래처 사업자번호 조회
        SELECT A.BIZR_NUMB      --사업자번호
          INTO sBIZR_NUMB
          FROM TA_CUSTXM A      --[거래처정보]
         WHERE A.CUST_CODE = iCUST_CODE     --거래처코드
        ;
    
        /*======================================================================
            STEP 2. 전표라인 부가세 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_LINEVAT_SAVE (
            iSYST_LNCD      /* 시스템언어코드*/
          , iUPDT_USID      /* 수정작업자*/
          , 'INS'           /* CRUD TYPE(INS,UPD)*/
          , iSLIP_NUMB      /* 전표번호 */
          , iSLIP_LINE      /* 전표라인번호 */
          , iCARD_NUMB      /* 카드번호 */
          , iCARD_APPR      /* 카드승인번호 */
          , iTRNS_DATE      /* 전송일 */
          , iVATX_GUBN      /* 매입매출구분 */
          , iVATX_TYPE      /* 부가세종류 */
          , iBULG_GUBN      /* 불공제구분 */
          , iPURC_GUBN      /* 매입구분 */
          , iEBIL_GUBN      /* 전자발행여부 */
          , iCUST_CODE      /* 거래처코드 */
          , sBIZR_NUMB      /* 사업자등록번호 */
          , iITEM_NAME      /* 품목명 */
          , iSUPP_AMNT      /* 공급가액 */
          , iVATX_AMNT      /* 부가세액 */
          --TODO.08.29 FAMB0030 부가세 합계금액 파라메터 추가 필요 by김삼영
          --, iSUMX_AMNT      IN  TA_VATXXM.SUMX_AMNT%TYPE    /* ●합계금액 */
          , iREMK_NAME      /* 적요 */
          , iETIS_YSNO      /* 타사이트발행여부 */
       );
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표 작성 종료
    ***************************************************************************/
    PROCEDURE SP_FINISH (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPXM.SLIP_NUMB%TYPE    /* ●전표번호 */
    )
    AS
    
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/

        /*======================================================================
            STEP 2. 전표 작성 종료 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_FINISH (
            iSYST_LNCD      /* 시스템언어코드*/
          , iUPDT_USID      /* 수정작업자*/
          , iSLIP_NUMB      /* 전표번호 */
       );
    
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표 삭제
    ***************************************************************************/
    PROCEDURE SP_DELETE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPXM.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iDELE_OPTN      IN  VARCHAR2                    /* ◎삭제옵션 */
    )
    AS
    
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/

        /*======================================================================
            STEP 2. 전표 삭제 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_DELETE (
            iSYST_LNCD      /* 시스템언어코드*/
          , iUPDT_USID      /* 수정작업자*/
          , iSLIP_NUMB      /* 전표번호 */
          , iDELE_OPTN      /* 삭제옵션 */
       );
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 역분개전표생성
    ***************************************************************************/
    PROCEDURE SP_REVERSE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPXM.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iREVJ_EMPL      IN  TA_SLIPXM.APPR_EMPL%TYPE    /* ●역분개자사원번호 */
      , iREVJ_DATE      IN  TA_SLIPXM.SLIP_DATE%TYPE    /* ●역분개일자 */
      , iREVJ_TYPE      IN  VARCHAR2                    /* ●역분개유형 SW.Switch Dr/Cr, CS,Change Sign*/
      , iREVJ_OPTN      IN  VARCHAR2                    /* ◎역분개옵션 */
      , oREVJ_SLNO      OUT TA_SLIPXM.SLIP_NUMB%TYPE    /* ●역분개전표번호 반환 */
    )
    AS
    
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/

        /*======================================================================
            STEP 2. 역분개전표생성 PKG 호출
        ======================================================================*/
        PKG_FAMB0030.SP_SLIP_REVERSE (
            iSYST_LNCD              /* 시스템언어코드*/
          , iUPDT_USID              /* 수정작업자*/
          , iSLIP_NUMB              /* 전표번호 */
          , iREVJ_EMPL              /* 역분개자사원번호 */
          , iREVJ_DATE              /* 역분개일자 */
          , NVL(iREVJ_TYPE, 'CS')   /* 역분개유형 SW.Switch Dr/Cr, CS,Change Sign*/
          , iREVJ_OPTN              /* 역분개옵션 */
          , oREVJ_SLNO              /* 역분개전표번호 반환 */
       );
    
    END;

END PKG_FAMIFSLIP;
/