CREATE OR REPLACE FORCE VIEW UWZ.VI_YEA_FAMYXM (YEA_EMP_NO, YEA_FAMI_SEQ, YEA_FAMI_NM, YEA_FAMI_SSN, YEA_FAMI_CD, YEA_FAMI_NTS_CD, YEA_FAMI_NTS_YN, YEA_DISABLED_YN)
AS
SELECT
       /***********************************************************************************
           연말정산 가족사항 VIEW
       ***********************************************************************************/
        A.EMPL_NUMB AS YEA_EMP_NO
      , A.SRAL_NUMB AS YEA_FAMI_SEQ
      , A.FMLY_NAME AS YEA_FAMI_NM
      , SF_YEA_DECRYPT_SSN(A.FMLY_SSEC) AS YEA_FAMI_SSN
      , A.FREL_CODE AS YEA_FAMI_CD
      , TRIM(NVL(SF_GET_REFXFILD('FREL_CODE', A.FREL_CODE, '1'), A.FREL_CODE)) AS YEA_FAMI_NTS_CD
      , A.SUPT_YSNO AS YEA_FAMI_NTS_YN
      , A.HALT_CODE AS YEA_DISABLED_YN
  FROM HR_FAMILY A;