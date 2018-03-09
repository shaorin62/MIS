CREATE OR REPLACE FUNCTION UWZ."SF_YEA_MASTXD" 
(
     iv_YEA_EMP_YMD IN VARCHAR2 DEFAULT TO_CHAR(SYSDATE, 'YYYYMMDD')
)
RETURN TTYPE_YEA_MASTXD AS

  v_tab TTYPE_YEA_MASTXD := TTYPE_YEA_MASTXD();
  /******************************************************************************
   NAME    :  SF_YEA_MASTXM
   PURPOSE :  연말정산용 발령정보를 바탕으로 기준일의 직원정보를 구하기 위함.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2015-01-05               PKM              1. Created this function.

   NOTES:
   * 발령정보가 없으면 현재 인사마스터를 가져오도록 되어 있음.
  ******************************************************************************/
BEGIN
    FOR CUR IN (
        SELECT A.EMPL_NUMB AS YEA_EMP_NO   /*YEA_사원번호*/
             , A.EMPL_NAME AS YEA_EMP_NM   /*YEA_사원명*/
             , SF_GET_DECODE(A.RERN_NUMB) AS YEA_EMP_SSN   /*YEA_주민등록번호*/
             , A.ENCO_DATE AS YEA_HIRE_YMD   /*YEA_입사일*/
             , A.RETR_DATE AS YEA_QUIT_YMD   /*YEA_퇴사일*/
             , A.PRON_DATE AS YEA_PROMOTE_YMD   /*YEA_승진일*/             
             , A.WRDV_CODE AS YEA_EMP_CD   /*YEA_직원구분코드*/
             , E.DTL1_ADDR AS YEA_HOME_ADDRESS1  /*YEA_집주소1*/
             , E.DTL2_ADDR AS YEA_HOME_ADDRESS2  /*YEA_집주소2*/
             , CASE WHEN A.ENCO_DATE <= iv_YEA_EMP_YMD AND (A.RETR_DATE >= iv_YEA_EMP_YMD OR A.RETR_DATE IS NULL) THEN '1' ELSE '0' END AS YEA_INOFFICE_YN  /*YEA_재직여부*/
             , A.WODN_CODE AS YEA_INOFFICE_CD   /*YEA_재직구분코드   <-comm 코드로 변환*/
             , NVL(B.DEPT_CODE, A.DEPT_CODE) AS YEA_DEPT_CD   /*YEA_부서코드*/
             , NVL(B.CPOS_CODE, A.CPOS_CODE) AS YEA_RANK_CD   /*YEA_직급코드*/
             , B.OPOS_CODE  AS YEA_POST_CD   /*YEA_직위코드*/
             , A.DUTY_CODE AS YEA_DUTY_CD   /*YEA_직무코드*/
             , E.HALT_CODE AS YEA_DISABLED_CD /*YEA_장애코드*/
             , /*D.STTD_YSNO*/'0' AS YEA_STANTAX_YN /*YEA_표준세액공제여부*/
             , NVL(F.YEA_COMD_CD,'1') AS YEA_LOFO_CD   /*YEA_내외국인구분코드*/ 
             , G.YEA_COMD_CD AS YEA_NATION_CD   /*YEA_국적코드*/
             , H.YEA_COMD_CD AS YEA_LIVE_CD   /*YEA_거주구분코드*/             
             , D.DOMC_CODE AS YEA_LIVE_NATION_CD   /*YEA_거주지국코드*/
             , D.TARA_YSNO AS YEA_RATE_YN   /*YEA_단일세율여부*/
             , D.HSHL_YSNO AS YEA_HOUSEHOLD_YN   /*YEA_세대주여부*/
             , E.COMP_TENR AS YEA_OFFICE_TEL_NO   /*YEA_회사전화번호*/
             , E.OHOM_TENR AS YEA_HOME_TEL_NO   /*YEA_집전화번호*/
             , E.HNPN_TENR AS YEA_CELL_NO   /*YEA_휴대전화번호*/
             , D.TARN_STDT AS YEA_EROS_BEG_YMD /*YEA_중소기업취업감면시작일*/
             , D.TARN_ENDT AS YEA_EROS_END_YMD /*YEA_중소기업취업감면종료일*/
          FROM HR_MASTXM A
          LEFT JOIN (SELECT * 
                       FROM (SELECT ROW_NUMBER() OVER (PARTITION BY A.EMPL_NUMB ORDER BY A.APNT_DATE DESC, A.APNT_SEQN DESC) AS R_NUM
                                   ,A.*
                               FROM HR_APPOXD A
                              WHERE A.APNT_DATE <= iv_YEA_EMP_YMD
                            )
                      WHERE R_NUM = 1
                    ) B 
            ON A.EMPL_NUMB = B.EMPL_NUMB
          LEFT JOIN PY_MASTPM D
            ON A.EMPL_NUMB = D.EMPL_NUMB
          LEFT JOIN HR_MASTXD E
            ON A.EMPL_NUMB = E.EMPL_NUMB
          LEFT JOIN VI_YEA_CODEXD F
            ON F.YEA_COMM_CD = 'YEA_90007'
            AND D.LFDN_CODE = F.YEA_ASIS_CD
          LEFT JOIN VI_YEA_CODEXD G
            ON G.YEA_COMM_CD = 'YEA_90003'
            AND D.NANY_CODE = G.YEA_ASIS_CD          
          LEFT JOIN VI_YEA_CODEXD H
            ON H.YEA_COMM_CD = 'YEA_90008'
            AND 'RM08000'||D.RECL_CODE = H.YEA_ASIS_CD
          WHERE 1 = 1
          --ORDER BY C.ORGZ_ORDR, D.TITL_RANK, E.SORT_ORDR, A.EMPL_DATE
    )
      LOOP
        v_tab.extend;
        v_tab(v_tab.last) := RTYPE_YEA_MASTXD
    (        cur.YEA_EMP_NO   /*YEA_사원번호*/
            ,cur.YEA_EMP_NM   /*YEA_사원명*/
            ,cur.YEA_EMP_SSN   /*YEA_주민등록번호*/
            ,cur.YEA_HIRE_YMD  /*YEA_입사일*/
            ,cur.YEA_QUIT_YMD  /*YEA_퇴사일*/
            ,cur.YEA_PROMOTE_YMD  /*YEA_승진일*/
            ,cur.YEA_EMP_CD  /*YEA_직원구분코드*/
            ,cur.YEA_HOME_ADDRESS1  /*YEA_집주소1*/
            ,cur.YEA_HOME_ADDRESS2  /*YEA_집주소2*/
            ,cur.YEA_INOFFICE_YN  /*YEA_재직여부*/
            ,cur.YEA_INOFFICE_CD  /*YEA_재직구분코드*/
            ,cur.YEA_DEPT_CD   /*YEA_부서코드*/
            ,cur.YEA_RANK_CD  /*YEA_직급코드*/
            ,cur.YEA_POST_CD  /*YEA_직위코드*/
            ,cur.YEA_DUTY_CD  /*YEA_직무코드*/
            ,cur.YEA_DISABLED_CD /*YEA_장애코드*/
            ,cur.YEA_STANTAX_YN /*YEA_표준세액공제여부*/
            ,cur.YEA_LOFO_CD  /*YEA_내외국인구분코드*/
            ,cur.YEA_NATION_CD  /*YEA_국적코드*/
            ,cur.YEA_LIVE_CD   /*YEA_거주구분코드*/
            ,cur.YEA_LIVE_NATION_CD   /*YEA_거주지국코드*/
            ,cur.YEA_RATE_YN   /*YEA_단일세율여부*/
            ,cur.YEA_HOUSEHOLD_YN   /*YEA_세대주여부*/
            ,cur.YEA_OFFICE_TEL_NO   /*YEA_회사전화번호*/
            ,cur.YEA_HOME_TEL_NO   /*YEA_집전화번호*/
            ,cur.YEA_CELL_NO   /*YEA_휴대전화번호*/

    );

    END LOOP;
    RETURN v_tab;

END SF_YEA_MASTXD;