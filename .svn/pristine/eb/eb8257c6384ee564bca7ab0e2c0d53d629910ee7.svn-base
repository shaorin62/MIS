create or replace PACKAGE           "PKG_PAY_FUNC" 

AS

    /******************************************************************************
        NAME:       PKG_PAY_FUNC
        PURPOSE:    급여정의함수         
        REVISIONS:  
        Ver        Date        Author           Description
        ---------  ----------  ---------------  ------------------------------------
        1.0        2016-09-19    김춘호         1. Created this package.
    ******************************************************************************/

    /*******************************************************************************
      작  성  자 : 김춘호
      작  성  일 : 2014.01.25
      내      용 : 전역변수  
    ********************************************************************************/
--    g_PAYX_DATE   PY_PMMAST.PAYX_DATE%TYPE;  --지급일 
--    g_WAGE_CODE   PY_PMMAST.WAGE_CODE%TYPE;  --급여코드
--    g_EMPL_NUMB   PY_PMMAST.EMPL_NUMB%TYPE;  --사원번호    
    g_EXPD_CODE   PY_ALLDED.EXPD_CODE%TYPE;  --수당공제코드
--    g_WAGP_CODE   PY_PMMAST.WAGP_CODE%TYPE;  --급여그룹코드  
--    g_ENFC_CODE   PY_PMMAST.ENFC_CODE%TYPE;  --사업장코드 
    
    --인사마스터 정보
    g_WRKS_CODE   HR_MASTXM.WRKS_CODE%TYPE;   /*근무상태코드*/
    g_WRDV_CODE   HR_MASTXM.WRDV_CODE%TYPE;  /*근무구분코드*/
    g_DEPT_CODE   HR_MASTXM.DEPT_CODE%TYPE;  --부서 
    g_CPOS_CODE   HR_MASTXM.CPOS_CODE%TYPE;  --직급   
    g_OPOS_CODE   HR_MASTXM.OPOS_CODE%TYPE;  --직위
    g_JBGP_CODE   HR_MASTXM.JBGP_CODE%TYPE;  --직군
    g_PSTP_CODE   HR_MASTXM.PSTP_CODE%TYPE;  --호봉    
--    g_ENCO_DATE   HR_MASTXM.ENCO_DATE%TYPE;  --입사일
--    g_RETR_DATE   HR_MASTXM.RETR_DATE%TYPE;  --퇴사일 2014추가
--    g_PCOP_JCDT   HR_MASTXM.RETR_DATE%TYPE;  --공단입사일(최초임용일)2014추가
    g_CLSD_CODE   HR_MASTXM.CLSD_CODE%TYPE;  --직원구분 2014추가
    g_DUTY_CODE   HR_MASTXM.DUTY_CODE%TYPE;  /*직무코드*/
    g_DURS_CODE   HR_MASTXM.DURS_CODE%TYPE;  /*직책코드*/
                        
--    g_LBJO_YSNO   HR_MASTXM.LBJO_YSNO%TYPE;  --노조가입여부  
--    g_FADT_NOPS   PY_PMMAST.FADT_NOPS%TYPE;  --부양가족수
--    g_MACN_NOPS   PY_PMMAST.MACN_NOPS%TYPE;  --다자녀수   
    
    --소득세 함수
--    g_TAX_PAYAMT  PY_PMDETL.EXPD_AMOT%TYPE;   --총소득액(비과세제외)
--    g_TAX_PAYTAX  PY_PMDETL.EXPD_AMOT%TYPE;   --기납부세액
--    g_TAX_PAYCNT  INT; --급여나간 월의 갯수
--    g_TAX_JUMIN   PY_PMDETL.EXPD_AMOT%TYPE;   --
--    g_TAX_RATAL   PY_PMDETL.EXPD_AMOT%TYPE;   --과표
    
    g_TAX_INMON1  PY_PMDIRY.ITCS_YMTH%TYPE;   --소득구간시작
    g_TAX_INMON2  PY_PMDIRY.ITCE_YMTH%TYPE;   --소득구간종료  
    
    g_INCM_SETN   PY_PMMAST.INCM_SETN%TYPE;
  
    --고용보험
--    g_EMPL_IPAY   PY_PMDETL.EXPD_AMOT%TYPE;
    --g_UNPY_WORR   PY_EMPLIS.UNPY_WORR%TYPE;
    
    --통상임금, 기본급, 일할계산기본급
--    g_ODNY_WAGE PY_PMMAST.ODNY_WAGE%TYPE; 
--    g_BSLY_AMOT PY_PMMAST.BSLY_AMOT%TYPE;    
--    g_WORK_DATE PY_PMDCAL.REWK_DCNT%TYPE;  --근무일수
--    g_STDS_DATE PY_PMDCAL.STDS_DATE%TYPE;  --일할계산기준일
    
    
    --소급시 원래 급여
--    g_RPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE;
--    g_RWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE;
    
    TYPE REC_TYPE IS REF CURSOR;
    
    FUNCTION SF_기본급 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_연장수당 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_임원상여 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_특별상여지급율 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_연봉월액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
--    FUNCTION SF_기본급 RETURN VARCHAR2;
    FUNCTION SF_소득세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_세액적용율 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_급여월 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;

    FUNCTION SF_지급공제금액 (
        iBGIN_DATE IN PY_ALDEYN.BGIN_DATE%TYPE
       ,iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_지급공제일수 (
        iBGIN_DATE IN PY_ALDEYN.BGIN_DATE%TYPE
       ,iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_월일수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_배우자수(
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_부양가족수 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_자녀수 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    /*
    FUNCTION SF_직책수당 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_학자금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2; 
    */
    FUNCTION SF_직위 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_직급 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_국민연금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_국민연금미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_국민연금환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_건강보험 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_건강보험미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_건강보험환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_노인장기요양보험 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_노인장기요양미수금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_노인장기요양환급금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_건강보험정산 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
--    FUNCTION SF_고용보험대상 RETURN VARCHAR2;
--    FUNCTION SF_과세총액 RETURN VARCHAR2;
--    FUNCTION SF_지급총액 RETURN VARCHAR2;
--    FUNCTION SF_공제총액 RETURN VARCHAR2;
--    FUNCTION SF_노조가입구분 RETURN VARCHAR2;
--    FUNCTION SF_성과급지급율 RETURN VARCHAR2;
    
    FUNCTION SF_통상임금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_초과근무시간 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_야간근무시간 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_휴일근무일수 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_급여차감 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_써클회비 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_고용보험대상금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_소급금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_보증보험금액 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_연차수당 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;
    
    FUNCTION SF_연말정산소득세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;    
    
    FUNCTION SF_연말정산주민세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;    
    
    FUNCTION SF_연말정산농특세 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;    
    
    FUNCTION SF_퇴직전환금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2;    
    
    FUNCTION SF_성과상여금 (
        iPAYX_DATE PY_PMMAST.PAYX_DATE%TYPE   --지급일
       ,iWAGE_CODE PY_PMMAST.WAGE_CODE%TYPE   --급여코드
       ,iEMPL_NUMB PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
       ,iWAGE_YMTH PY_PMDETL.WAGE_YMTH%TYPE   --급여년월  
    ) RETURN VARCHAR2; 

END PKG_PAY_FUNC;