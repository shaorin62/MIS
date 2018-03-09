CREATE OR REPLACE PACKAGE UWZ."PKG_FAMIFSLIP" AS

    /***************************************************************************
      NAME:       PKG_FAMIFSLIP
      PURPOSE:    회계 인터페이스 전표 API
      REVISIONS:
      Ver        Date        Author           Description
      ---------  ----------  ---------------  ---------------------------------
      1.0        2016.08.29  김삼영           1. Created this package.
    ***************************************************************************/

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
    );

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
    );

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
    );

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
    );

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.08.29
        내      용 : 전표 작성 종료
    ***************************************************************************/
    PROCEDURE SP_FINISH (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iUPDT_USID      IN  TA_SLIPXM.UPDT_USID%TYPE    /* ●수정작업자*/
      , iSLIP_NUMB      IN  TA_SLIPXM.SLIP_NUMB%TYPE    /* ●전표번호 */
    );
    
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
    );

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
    );

END PKG_FAMIFSLIP;
/