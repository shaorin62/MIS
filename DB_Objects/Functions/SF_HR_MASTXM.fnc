CREATE OR REPLACE
FUNCTION "SF_HR_MASTXM" 
(
     iv_EMPL_NUMB IN HR_MASTXM.EMPL_NUMB%TYPE
    ,iv_STDS_DATE IN VARCHAR2 DEFAULT TO_CHAR(SYSDATE,'yyyymmdd')
)
RETURN TTYPE_HR_MASTXM AS

  v_tab TTYPE_HR_MASTXM := TTYPE_HR_MASTXM();
  /******************************************************************************
   NAME    :  SF_HR_MASTXM
   PURPOSE :  발령정보를 바탕으로 기준일의 직원정보를 구하기 위함.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2012-04-05            김춘호              1. Created this function.

   NOTES:
   * 발령정보가 없으면 현재 인사마스터를 가져오도록 되어 있음.
  ******************************************************************************/
BEGIN
    FOR CUR IN (
        SELECT A.EMPL_NUMB   --사원번호
             , A.EMPL_NAME   --사원명
             , A.CCEM_NAME   --한자사원명
             , A.ENEE_NAME   --영문사원명
             , SF_DECRYPT(A.RERN_NUMB) AS RERN_NUMB   --주민등록번호
             , A.EMPL_BIRT   --사원생년월일
             , A.REAL_BIRT   --실제생년월일
             , A.SLCA_CODE   --양력음력구분코드
             , A.GNDR_CODE   --성별코드
             , A.REDI_CODE   --채용구분코드
             , A.WRDV_CODE   --근무구분코드
             , A.CLSD_CODE   --직원구분코드
             , A.PCOP_JCDT   --그룹입사일
             , A.ANSD_DATE   --연차기준일
             , A.ENCO_DATE   --입사일
             , A.RETR_DATE   --퇴사일
             , CASE WHEN A.ENCO_DATE <= IV_STDS_DATE AND (A.RETR_DATE >= IV_STDS_DATE OR A.RETR_DATE IS NULL) THEN '1' ELSE '2' END AS WODN_CODE   --재직구분코드
             , B.WRKS_CODE  /*근무상태코드*/
             , B.PYTY_CODE  --급여형태코드
             , B.DEPT_CODE  --부서코드
             --, B.JBGP_CODE  --직군코드
             --, B.SPOS_CODE  --직렬코드
             , B.CPOS_CODE  --직급코드
             , B.OPOS_CODE  --직위코드
             , B.DURS_CODE  /*직책코드*/
             , B.DUTY_CODE   --직무코드
             , B.PSTP_CODE AS PSTP_CODE   --호봉코드
             --, B.JOAG_CODE AS JOAG_CODE   --직무대리코드
             --, B.CLPT_YSNO AS CLPT_YSNO   --직급대우여부
             , B.DSPT_DTCD AS DSPT_DTCD   --파견부서코드
             --, B.EXTR_PLDH AS EXTR_PLDH   --외부파견지
             , B.DTMN_YSNO AS DTMN_YSNO   --부서장여부
             , B.DTMN_DTCD AS DTMN_DTCD   --부서장부서코드
             , A.LBJO_YSNO   --노조가입여부
            -- , NVL(B.JBGP_DATE, A.JBGP_DATE) AS JBGP_DATE   --직군일
             , NVL(B.DUTY_DATE, A.DUTY_DATE) AS DUTY_DATE   --직무일
             , NVL(B.DURS_DATE, A.DURS_DATE) AS DURS_DATE   --직책일
             , NVL(B.SEAS_DATE, A.SEAS_DATE) AS SEAS_DATE   --소속발령일
             , NVL(B.DEAT_DATE, A.DEAT_DATE) AS DEAT_DATE   --부서발령일
             , NVL(B.PRON_DATE, A.PRON_DATE) AS PRON_DATE   --승진일
             , NVL(B.PARE_DATE, A.PARE_DATE) AS PARE_DATE   --승급일
             , NVL(B.NETP_DATE, A.NETP_DATE) AS NETP_DATE   --차기승급일
             , NVL(B.NEPR_DATE, A.NEPR_DATE) AS NEPR_DATE     --차기승진일
             , CASE WHEN (B.APDN_CODE = '017') THEN B.PBNR_YSNO ELSE TO_NCHAR(0) END AS  PBNR_YSNO  --수습여부
             , CASE WHEN (B.APDN_CODE = '017') THEN B.APNT_DATE ELSE A.PBNR_ENDD END AS  PBNR_ENDD  --수습종료일
             , NVL(B.DSPT_YSNO, A.DSPT_YSNO) AS DSPT_YSNO     --파견여부
             , NVL(B.LEAV_YSNO, A.LEAV_YSNO) AS LEAV_YSNO     --휴직여부
             --, NVL(B.OVSV_YSNO, A.OVSV_YSNO) AS OVSV_YSNO   --해외근무여부
             , A.OVSV_YSNO AS OVSV_YSNO   --해외근무여부
             , NVL(B.TEMT_DATE, A.TEMT_DATE) AS TEMT_DATE     --정규직전환일
             , A.FILE_PATH   --파일ID 
          FROM HR_MASTXM A
          LEFT OUTER JOIN (
            SELECT * FROM (
              SELECT
                ROW_NUMBER() OVER (PARTITION BY EMPL_NUMB ORDER BY APNT_DATE DESC, APNT_SEQN DESC) AS R_NUM
               ,A.*
              FROM HR_APPOXD A
              WHERE A.APAL_YSNO = '1'
                AND A.EMPL_NUMB = iv_EMPL_NUMB
                AND A.APNT_DATE <= iv_STDS_DATE
            )
            WHERE R_NUM = 1
          ) B ON A.EMPL_NUMB = B.EMPL_NUMB
      WHERE A.EMPL_NUMB = iv_EMPL_NUMB
    )
      LOOP
        v_tab.extend;
        v_tab(v_tab.last) := RTYPE_HR_MASTXM
    (
         cur.EMPL_NUMB   /*사원번호*/
        ,cur.EMPL_NAME   /*사원명*/
        ,cur.CCEM_NAME   /*한자사원명*/
        ,cur.ENEE_NAME   /*영문사원명*/
        ,cur.RERN_NUMB   /*주민등록번호*/
        ,cur.EMPL_BIRT  /*사원생년월일*/
        ,cur.REAL_BIRT  /*실제생년월일*/
        ,cur.SLCA_CODE  /*양력음력구분코드*/
        ,cur.GNDR_CODE  /*성별코드*/
        ,cur.REDI_CODE  /*채용구분코드*/
        ,cur.WRDV_CODE  /*근무구분코드*/
        ,cur.CLSD_CODE  /*직원구분코드*/
        ,cur.PCOP_JCDT  /*그룹입사일*/
        ,cur.ANSD_DATE  /*연차기준일*/
        ,cur.ENCO_DATE  /*입사일*/
        ,cur.RETR_DATE  /*퇴사일*/
        ,cur.WODN_CODE  /*재직구분코드*/
        ,cur.WRKS_CODE  /*근무상태코드*/
        ,cur.PYTY_CODE  /*급여형태코드*/
        ,cur.DEPT_CODE   /*부서코드*/
        --,cur.JBGP_CODE  /*직군코드*/
        --,cur.SPOS_CODE  /*직렬코드*/
        ,cur.CPOS_CODE  /*직급코드*/
        ,cur.OPOS_CODE  /*직위코드*/
        ,cur.DURS_CODE  /*직책코드*/
        ,cur.DUTY_CODE  /*직무코드*/
        ,cur.PSTP_CODE  /*호봉코드*/
        --,cur.JOAG_CODE  /*직무대리코드*/
        --,cur.CLPT_YSNO  /*직급대우여부*/
        ,cur.DSPT_DTCD  /*파견부서코드*/
        --,cur.EXTR_PLDH  /*외부파견지*/
        ,cur.DTMN_YSNO  /*부서장여부*/
        ,cur.DTMN_DTCD  /*부서장부서코드*/
        ,cur.LBJO_YSNO  /*노조가입여부*/
        --,cur.JBGP_DATE  /*직군일*/
        ,cur.DUTY_DATE  /*직무일*/
        ,cur.DURS_DATE  /*직책일*/
        ,cur.SEAS_DATE  /*소속발령일*/
        ,cur.DEAT_DATE  /*부서발령일*/
        ,cur.PRON_DATE  /*승진일*/
        ,cur.PARE_DATE  /*승급일*/
        ,cur.NETP_DATE  /*차기승급일*/
        ,cur.NEPR_DATE  /*차기승진일*/
        ,cur.PBNR_YSNO  /*수습여부*/
        ,cur.PBNR_ENDD  /*수습종료일*/
        ,cur.FILE_PATH  /*파일경로*/
        ,cur.DSPT_YSNO  /*파견여부*/
        ,cur.LEAV_YSNO  /*휴직여부*/
        ,cur.OVSV_YSNO  /*해외근무여부*/
        ,cur.TEMT_DATE  /*정규직전환일*/
    );

    END LOOP;
    RETURN v_tab;

END SF_HR_MASTXM;