CREATE OR REPLACE PACKAGE UWZ."PKG_FAMB0030" AS


  /******************************************************************************
     NAME:       PKG_FAMB0030
     PURPOSE:    회계전표
     REVISIONS:
     Ver        Date        Author           Description
     ---------  ----------  ---------------  ------------------------------------
     1.0        2016.07.20  하창연           1. Created this package.
  ******************************************************************************/

    TA_SLIPXM_ROW        TA_SLIPXM%ROWTYPE;    /* 전표마스터*/
    TA_SLIPNT_ROW        TA_SLIPNT%ROWTYPE;    /* 전표라인*/
    TA_SLGBXM_ROW        TA_SLGBXM%ROWTYPE;    /* 전표유형구분*/
    TA_ACCTXM_ROW        TA_ACCTXM%ROWTYPE;    /* 계정코드*/
    TA_ACCTXD_ROW        TA_ACCTXD%ROWTYPE;    /* 계정관리항목코드*/
    TA_ACCTXF_ROW        TA_ACCTXF%ROWTYPE;    /* 관리항목코드*/
    TM_CODEXD_ROW        TM_CODEXD%ROWTYPE;    /* 공통코드상세*/

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 전표마스터 저장/수정
    ***************************************************************************/
    PROCEDURE SP_GEN_NUMBER_FA (
        iSYST_LNCD      IN  VARCHAR2                    /* 시스템언어코드 */
      , iUPDT_USID      IN  VARCHAR2                    /* 수정작업자 */
      , iSTDS_DATE      IN  VARCHAR2                    /* 기준일자 */
      , iACGN_TYCD      IN  VARCHAR2                    /* 회계채번유형코드 */
      , iACGN_STXT      IN  VARCHAR2                    /* 회계채번보조문자열 */
      , oACGN_NUMB      OUT VARCHAR2                    /* 회계채번번호 */
    );

    /**********************************************
        전표마스터 저장/수정
    **********************************************/
    PROCEDURE SP_SLIP_MASTER_SAVE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
        ,iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
        ,iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
        ,iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
        ,iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
        ,iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
        ,iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
        ,iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
        ,oSLIP_NUMB    OUT TA_SLIPXM.SLIP_NUMB%TYPE   /* 생성된 전표번호 반환. */
       );

      /**********************************************
        전표마스터 저장/수정 세부 저장
       **********************************************/
    PROCEDURE SP_SLIP_MASTER_SAVE_SUB01 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
        ,iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
        ,iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
        ,iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
        ,iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
        ,iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
        ,iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
        ,iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
        ,iAUTO_YSNO     IN TA_SLIPXM.AUTO_YSNO%TYPE   /* 자동전표여부 */
       );

      /**********************************************
        전표마스터 저장/수정 세부 수정
       **********************************************/
    PROCEDURE SP_SLIP_MASTER_SAVE_SUB02 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iACCT_UNIT     IN TA_SLIPXM.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iSLIP_DATE     IN TA_SLIPXM.SLIP_DATE%TYPE   /* 전표일자 */
        ,iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
        ,iREQU_NUMB     IN TA_SLIPXM.REQU_NUMB%TYPE   /* 품의번호 */
        ,iTITL_NAME     IN TA_SLIPXM.TITL_NAME%TYPE   /* 제목 */
        ,iEMPL_NUMB     IN TA_SLIPXM.EMPL_NUMB%TYPE   /* 사원번호 */
        ,iDEPT_CODE     IN TA_SLIPXM.DEPT_CODE%TYPE   /* 부서코드 */
        ,iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
        ,iSOUS_LNKY     IN TA_SLIPXM.SOUS_LNKY%TYPE   /* 출처연결키 */
       );

      /**********************************************
        전표라인 저장/수정
       **********************************************/
    PROCEDURE SP_SLIP_LINE_SAVE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
        ,iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
        ,iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
        ,iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
        ,iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
        ,iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
        ,iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
        ,iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
        ,iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
        ,iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
        ,iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
        ,iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
        ,iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
        ,iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
        ,iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
        ,iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
        ,iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
        ,iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
        ,iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
        ,iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
        ,iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
        ,iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
        ,iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
        ,iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
        ,iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
        ,iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
        ,iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
        ,iSLCT_CODE     IN TA_SLIPNT.SLCT_CODE%TYPE   /* 전표통제유형코드 */
       );

      /**********************************************
        전표라인 저장/수정 저장
       **********************************************/
    PROCEDURE SP_SLIP_LINE_SAVE_SUB01 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
        ,iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
        ,iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
        ,iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
        ,iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
        ,iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
        ,iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
        ,iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
        ,iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
        ,iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
        ,iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
        ,iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
        ,iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
        ,iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
        ,iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
        ,iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
        ,iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
        ,iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
        ,iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
        ,iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
        ,iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
        ,iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
        ,iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
        ,iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
        ,iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
        ,iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
        ,iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
        ,iSLCT_CODE     IN TA_SLIPNT.SLCT_CODE%TYPE   /* 전표통제유형코드 */
       );

      /**********************************************
        전표라인 저장/수정 수정
       **********************************************/
    PROCEDURE SP_SLIP_LINE_SAVE_SUB02 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_SLIPNT.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iACCT_UNIT     IN TA_SLIPNT.ACCT_UNIT%TYPE   /* 회계단위 */
        ,iACCT_GUBN     IN TA_SLIPNT.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iACCT_INTL     IN TA_SLIPNT.ACCT_INTL%TYPE   /* 계정과목코드 */
        ,iUSEX_DEPT     IN TA_SLIPNT.USEX_DEPT%TYPE   /* 사용부서 */
        ,iCSTC_CODE     IN TA_SLIPNT.CSTC_CODE%TYPE   /* 코스트센터코드 */
        ,iDRCR_GUBN     IN TA_SLIPNT.DRCR_GUBN%TYPE   /* 차대구분 */
        ,iCURR_GUBN     IN TA_SLIPNT.CURR_GUBN%TYPE   /* 통화구분 */
        ,iEXCH_RATE     IN TA_SLIPNT.EXCH_RATE%TYPE   /* 환율 */
        ,iFORI_AMNT     IN TA_SLIPNT.FORI_AMNT%TYPE   /* 외화금액 */
        ,iSLIP_AMNT     IN TA_SLIPNT.SLIP_AMNT%TYPE   /* 전표금액 */
        ,iOSLI_NUMB     IN TA_SLIPNT.OSLI_NUMB%TYPE   /* 상대전표번호 */
        ,iOSLI_LINE     IN TA_SLIPNT.OSLI_LINE%TYPE   /* 상대전표순번 */
        ,iBUDG_GUBN     IN TA_SLIPNT.BUDG_GUBN%TYPE   /* 예산구분 */
        ,iPROJ_CODE     IN TA_SLIPNT.PROJ_CODE%TYPE   /* 프로젝트코드 */
        ,iBGRQ_NUMB     IN TA_SLIPNT.BGRQ_NUMB%TYPE   /* 예산품의번호 */
        ,iBUDG_DEPT     IN TA_SLIPNT.BUDG_DEPT%TYPE   /* 예산부서코드 */
        ,iBUDG_YYMM     IN TA_SLIPNT.BUDG_YYMM%TYPE   /* 예산년월 */
        ,iBDSB_CODE     IN TA_SLIPNT.BDSB_CODE%TYPE   /* 예산과목코드 */
        ,iBDSP_CODE     IN TA_SLIPNT.BDSP_CODE%TYPE   /* 예산세목코드 */
        ,iREMK_NAME     IN TA_SLIPNT.REMK_NAME%TYPE   /* 적요 */
        ,iREMK_NAM2     IN TA_SLIPNT.REMK_NAM2%TYPE   /* 적요2 */
        ,iREMK_NAM3     IN TA_SLIPNT.REMK_NAM3%TYPE   /* 적요3 */
        ,iEVID_DOCU     IN TA_SLIPNT.EVID_DOCU%TYPE   /* 증빙종류 */
        ,iPAYX_YSNO     IN TA_SLIPNT.PAYX_YSNO%TYPE   /* 출납처리여부 */
        ,iPAYX_DATE     IN TA_SLIPNT.PAYX_DATE%TYPE   /* 지급일 */
        ,iLEDG_GUBN     IN TA_SLIPNT.LEDG_GUBN%TYPE   /* 출납방법 */
        ,iBANK_INOU     IN TA_SLIPNT.BANK_INOU%TYPE   /* 입출구분 */
        ,iPRIN_ORDR     IN TA_SLIPNT.PRIN_ORDR%TYPE   /* 출력순서 */
        ,iSORT_ORDR     IN TA_SLIPNT.SORT_ORDR%TYPE   /* 정렬순서 */
       );

      /**********************************************
        전표라인 관리항목 저장/수정
       **********************************************/
    PROCEDURE SP_SLIP_LINERF_SAVE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPRF.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPRF.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iCOND_CODE     IN TA_SLIPRF.COND_CODE%TYPE   /* 관리항목코드 */
        ,iCOND_VACD     IN TA_SLIPRF.COND_VACD%TYPE   /* 관리항목값 */
        ,iCOND_VANM     IN TA_SLIPRF.COND_VANM%TYPE   /* 관리항목값명 */
       );

      /**********************************************
        전표라인 부가세 저장/수정
       **********************************************/
    PROCEDURE SP_SLIP_LINEVAT_SAVE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
        ,iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
        ,iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
        ,iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
        ,iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
        ,iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
        ,iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
        ,iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
        ,iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
        ,iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
        ,iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
        ,iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
        ,iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
        ,iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
        ,iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */

       );

      /**********************************************
        전표라인 부가세 저장/수정 저장
       **********************************************/
    PROCEDURE SP_SLIP_LINEVAT_SAVE_SUB01 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
        ,iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
        ,iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
        ,iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
        ,iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
        ,iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
        ,iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
        ,iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
        ,iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
        ,iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
        ,iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
        ,iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
        ,iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
        ,iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
        ,iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */
        ,iACCT_GUBN     IN TA_VATXXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iEVID_DOCU     IN TA_VATXXM.EVID_DOCU%TYPE   /* 증빙종류 */
       );

      /**********************************************
        전표라인 부가세 저장/수정 수정
       **********************************************/
    PROCEDURE SP_SLIP_LINEVAT_SAVE_SUB02 (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
        ,iSLIP_NUMB     IN TA_VATXXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_VATXXM.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iCARD_NUMB     IN TA_VATXXM.CARD_NUMB%TYPE   /* 카드번호 */
        ,iCARD_APPR     IN TA_VATXXM.CARD_APPR%TYPE   /* 카드승인번호 */
        ,iTRNS_DATE     IN TA_VATXXM.TRNS_DATE%TYPE   /* 전송일 */
        ,iVATX_GUBN     IN TA_VATXXM.VATX_GUBN%TYPE   /* 매입매출구분 */
        ,iVATX_TYPE     IN TA_VATXXM.VATX_TYPE%TYPE   /* 부가세종류 */
        ,iBULG_GUBN     IN TA_VATXXM.BULG_GUBN%TYPE   /* 불공제구분 */
        ,iPURC_GUBN     IN TA_VATXXM.PURC_GUBN%TYPE   /* 매입구분 */
        ,iEBIL_GUBN     IN TA_VATXXM.EBIL_GUBN%TYPE   /* 전자발행여부 */
        ,iCUST_CODE     IN TA_VATXXM.CUST_CODE%TYPE   /* 거래처코드 */
        ,iBSNS_NUMB     IN TA_VATXXM.BSNS_NUMB%TYPE   /* 사업자등록번호 */
        ,iITEM_NAME     IN TA_VATXXM.ITEM_NAME%TYPE   /* 품목명 */
        ,iSUPP_AMNT     IN TA_VATXXM.SUPP_AMNT%TYPE   /* 공급가액 */
        ,iVATX_AMNT     IN TA_VATXXM.VATX_AMNT%TYPE   /* 부가세액 */
        ,iREMK_NAME     IN TA_VATXXM.REMK_NAME%TYPE   /* 적요 */
        ,iETIS_YSNO     IN TA_VATXXM.ETIS_YSNO%TYPE   /* 타사이트발행여부 */
        ,iACCT_GUBN     IN TA_VATXXM.ACCT_GUBN%TYPE   /* 회계구분_사업장 */
        ,iEVID_DOCU     IN TA_VATXXM.EVID_DOCU%TYPE   /* 증빙종류 */
       );

      /**********************************************
        전표작성종료
       **********************************************/
    PROCEDURE SP_SLIP_FINISH (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
       );

      /**********************************************
        전표라인 삭제
       **********************************************/
    PROCEDURE SP_SLIP_LINE_DELETE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iDELE_OPTN     IN VARCHAR2   /* 삭제옵션 */
       );

      /**********************************************
        전표라인 관리항목 삭제
       **********************************************/
    PROCEDURE SP_SLIP_LINERF_DELETE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        ,iCOND_CODE     IN TA_SLIPRF.COND_CODE%TYPE   /* 관리항목코드 */
       );

      /**********************************************
        전표라인 부가세 삭제
       **********************************************/
    PROCEDURE SP_SLIP_LINEVAT_DELETE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
       );


      /**********************************************
        전표 삭제
       **********************************************/
    PROCEDURE SP_SLIP_DELETE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iDELE_OPTN     IN VARCHAR2   /* 삭제옵션 */
       );
       
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.05
        내      용 : 전표변경이력생성
    ***************************************************************************/
    PROCEDURE SP_SLIP_CREATE_LOG (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPNT.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPNT.SLIP_NUMB%TYPE    /* ●전표번호 */
      , iSLIP_LINE      IN  TA_SLIPNT.SLIP_LINE%TYPE    /* ◎전표라인번호 */
      , iLOGX_GUBN      IN  TA_SLIPXMLOG.LOGX_GUBN%TYPE /* ●이력구분[LOGX_GUBN](C.승인취소,D.삭제) */
      , iLOGX_EMPL      IN  TA_SLIPXMLOG.LOGX_EMPL%TYPE /* ●이력사원번호 */
      , iLOGX_OPTN      IN  VARCHAR2                    /* ◎이력옵션 */      
    );   

      /**********************************************
        전표마스터
       **********************************************/
    PROCEDURE SP_TA_SLIPXM (
         iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
       );

      /**********************************************
        전표라인
       **********************************************/
    PROCEDURE SP_TA_SLIPNT (
         iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
       );

      /**********************************************
        계정과목
       **********************************************/
    PROCEDURE SP_TA_ACCTXM (
         iACCT_INTL     IN TA_ACCTXM.ACCT_INTL%TYPE   /* 계정과목코드 */
       );

      /**********************************************
        계정관리항목코드
       **********************************************/
    PROCEDURE SP_TA_ACCTXD (
         iACCT_INTL     IN TA_ACCTXD.ACCT_INTL%TYPE   /* 계정과목코드 */
        ,iCOND_CODE     IN TA_ACCTXD.COND_CODE%TYPE   /* 관리항목코드 */
       );

      /**********************************************
        전표종류
       **********************************************/
    PROCEDURE SP_TA_SLGBXM (
         iSLIP_GUBN     IN TA_SLGBXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
       );

      /**********************************************
        공통코드
       **********************************************/
    PROCEDURE SP_TM_CODEXD (
         iCOMM_CODE     IN TM_CODEXD.COMM_CODE%TYPE   /* 공통코드 */
        ,iCOMD_CODE     IN TM_CODEXD.COMD_CODE%TYPE   /* 세부코드 */
       );

      /**********************************************
        관리항목
       **********************************************/
    PROCEDURE SP_TA_ACCTXF (
         iCOND_CODE     IN TA_ACCTXF.COND_CODE%TYPE   /* 관리항목코드 */
       );

      /**********************************************
        전표승인상태 확인해서 수정,삭제,저장 가능한지를 확인한다.
       **********************************************/
    PROCEDURE SP_UPDATE_CHK (
         iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
       );

      /**********************************************
        필수항목 확인
       **********************************************/
    PROCEDURE SP_MUST_CHECK (
         iCHEK_GUBN     VARCHAR2   /* 확인구분 */
        ,iSLIP_NUMB     VARCHAR2   /* 전표번호 */
        ,iSLIP_LINE     VARCHAR2   /* 전표라인번호 */
        ,iCHEK_VALU     VARCHAR2   /* 항목값 */
        ,iCHEK_NAME     VARCHAR2   /* 항목명 */
        ,iCHEK_TYPE     VARCHAR2   DEFAULT 'CHAR' /* 항목데이터타입 */
        ,iINPT_YSNO     VARCHAR2   DEFAULT '1'    /* 필수입력여부 */
       );

      /**********************************************
        건별반제정리
       **********************************************/
    PROCEDURE SP_BANJE_SLIP (
         iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
       );

      /**********************************************
        전표마감확인
       **********************************************/
    PROCEDURE SP_SLIP_CLOSE_CHK (
         iSLIP_GUBN     IN TA_SLIPXM.SLIP_GUBN%TYPE   /* 전표유형구분 */
        ,iMAGA_DATE     IN VARCHAR2   /* 마감확인일자 */
        ,iMAGA_GUBN     IN VARCHAR2   DEFAULT '2' /* 마감확인구분 1=전표일자 2=회계일자*/
       );

      /**********************************************
        CRUD TYPE(INS,UPD)을 확인한다.
       **********************************************/
    PROCEDURE SP_CRUD_TYPE_CHK (
         iCRUD_TYPE        IN VARCHAR2        /* CRUD TYPE(INS,UPD)*/
       );

      /**********************************************
        발생전표금액 잔액
       **********************************************/
    FUNCTION SF_SLIP_BALA (
         iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iSLIP_LINE     IN TA_SLIPNT.SLIP_LINE%TYPE   /* 전표라인번호 */
        )
    RETURN NUMBER;

      /**********************************************
        전표승인
       **********************************************/
    PROCEDURE SP_SLIP_APPROVAL (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iAPPR_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 승인자 */
        ,iACCT_DATE     IN TA_SLIPXM.ACCT_DATE%TYPE   /* 회계일자 */
        ,iAPRV_OPTN     IN VARCHAR2       /* 승인옵션 */
       );

      /**********************************************
        전표승인취소
       **********************************************/
    PROCEDURE SP_SLIP_CANCEL (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iAPPR_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 승인취소자 */
        ,iCANC_OPTN     IN VARCHAR2   /* 승인취소옵션 */
       );

      /**********************************************
        역분개전표생성
       **********************************************/
    PROCEDURE SP_SLIP_REVERSE (
         iSYST_LNCD        IN VARCHAR2        /* 시스템언어코드*/
        ,iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iREVJ_EMPL     IN TA_SLIPXM.APPR_EMPL%TYPE   /* 역분개자사원번호 */
        ,iREVJ_DATE     IN VARCHAR2   /* 역분개일자 */
        ,iREVJ_TYPE     IN VARCHAR2   /* 역분개유형 SW.Switch Dr/Cr, CS,Change Sign*/
        ,iREVJ_OPTN     IN VARCHAR2   /* 역분개옵션 */
        ,iREVJ_SLNO    OUT TA_SLIPXM.SLIP_NUMB%TYPE   /* 역분개전표번호 */
       );

      /**********************************************
        일집계반영
       **********************************************/
    PROCEDURE SP_DAILY_SUM (
         iUPDT_USID        IN VARCHAR2        /* 수정작업자*/
        ,iSLIP_NUMB     IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
        ,iPLUS_NUMB     IN NUMBER       /* 승인=1 승인취소=-1 */
       );
     
      /**********************************************
        예산체크
       **********************************************/
    PROCEDURE SP_SLIP_BUDG_CHECK (
         iSLIP_NUMB        IN TA_SLIPNT.SLIP_NUMB%TYPE     /* 전표번호 */
        ,iSLIP_LINE        IN TA_SLIPNT.SLIP_LINE%TYPE     /* 전표 라인 < 생략시 전체 전표 조회 > */
       );   
     
      /**********************************************
        전표 인쇄용 순번 재산출
       **********************************************/ 
    PROCEDURE SP_SET_PRINT_ORDER (
        iSLIP_NUMB      IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
    );
    
    
      /**********************************************
        전자결재연동 문서번호 업데이트
       **********************************************/ 
    PROCEDURE SP_GWAP_APPRSEQN_UPDATE (
        iSYST_LNCD      IN VARCHAR2        /* 시스템언어코드*/
       ,iUPDT_USID      IN VARCHAR2        /* 수정작업자*/
       ,iSLIP_NUMB      IN TA_SLIPXM.SLIP_NUMB%TYPE   /* 전표번호 */
       ,iAPPR_DOCN      IN TA_SLIPXM.APPR_DOCN%TYPE   /* 결재문서번호 */
    );
    
      /**********************************************
        전자결재 연동 후처리 - 회계전표 결재상태코드 업데이트
       **********************************************/ 
    PROCEDURE SP_GWAP_AFTER (
        iDOCU_IDXX      TM_APPRXH.DOCU_IDXX%TYPE    /* 문서ID */
      , iAPPR_SEQN      TM_APPRXH.APPR_SEQN%TYPE    /* 결재일련번호 */
      , iAPPR_STAT      TM_APPRXH.APPR_STAT%TYPE    /* 결재상태 */
      , iENDX_DATE      TM_APPRXH.ENDX_DATE%TYPE    /* 결재완료일자 */
    );
    
END PKG_FAMB0030;
/