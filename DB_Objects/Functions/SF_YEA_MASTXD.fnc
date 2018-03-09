CREATE OR REPLACE FUNCTION UWZ."SF_YEA_MASTXD" 
(
     iv_YEA_EMP_YMD IN VARCHAR2 DEFAULT TO_CHAR(SYSDATE, 'YYYYMMDD')
)
RETURN TTYPE_YEA_MASTXD AS

  v_tab TTYPE_YEA_MASTXD := TTYPE_YEA_MASTXD();
  /******************************************************************************
   NAME    :  SF_YEA_MASTXM
   PURPOSE :  ��������� �߷������� �������� �������� ���������� ���ϱ� ����.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2015-01-05               PKM              1. Created this function.

   NOTES:
   * �߷������� ������ ���� �λ縶���͸� ���������� �Ǿ� ����.
  ******************************************************************************/
BEGIN
    FOR CUR IN (
        SELECT A.EMPL_NUMB AS YEA_EMP_NO   /*YEA_�����ȣ*/
             , A.EMPL_NAME AS YEA_EMP_NM   /*YEA_�����*/
             , SF_GET_DECODE(A.RERN_NUMB) AS YEA_EMP_SSN   /*YEA_�ֹε�Ϲ�ȣ*/
             , A.ENCO_DATE AS YEA_HIRE_YMD   /*YEA_�Ի���*/
             , A.RETR_DATE AS YEA_QUIT_YMD   /*YEA_�����*/
             , A.PRON_DATE AS YEA_PROMOTE_YMD   /*YEA_������*/             
             , A.WRDV_CODE AS YEA_EMP_CD   /*YEA_���������ڵ�*/
             , E.DTL1_ADDR AS YEA_HOME_ADDRESS1  /*YEA_���ּ�1*/
             , E.DTL2_ADDR AS YEA_HOME_ADDRESS2  /*YEA_���ּ�2*/
             , CASE WHEN A.ENCO_DATE <= iv_YEA_EMP_YMD AND (A.RETR_DATE >= iv_YEA_EMP_YMD OR A.RETR_DATE IS NULL) THEN '1' ELSE '0' END AS YEA_INOFFICE_YN  /*YEA_��������*/
             , A.WODN_CODE AS YEA_INOFFICE_CD   /*YEA_���������ڵ�   <-comm �ڵ�� ��ȯ*/
             , NVL(B.DEPT_CODE, A.DEPT_CODE) AS YEA_DEPT_CD   /*YEA_�μ��ڵ�*/
             , NVL(B.CPOS_CODE, A.CPOS_CODE) AS YEA_RANK_CD   /*YEA_�����ڵ�*/
             , B.OPOS_CODE  AS YEA_POST_CD   /*YEA_�����ڵ�*/
             , A.DUTY_CODE AS YEA_DUTY_CD   /*YEA_�����ڵ�*/
             , E.HALT_CODE AS YEA_DISABLED_CD /*YEA_����ڵ�*/
             , /*D.STTD_YSNO*/'0' AS YEA_STANTAX_YN /*YEA_ǥ�ؼ��װ�������*/
             , NVL(F.YEA_COMD_CD,'1') AS YEA_LOFO_CD   /*YEA_���ܱ��α����ڵ�*/ 
             , G.YEA_COMD_CD AS YEA_NATION_CD   /*YEA_�����ڵ�*/
             , H.YEA_COMD_CD AS YEA_LIVE_CD   /*YEA_���ֱ����ڵ�*/             
             , D.DOMC_CODE AS YEA_LIVE_NATION_CD   /*YEA_���������ڵ�*/
             , D.TARA_YSNO AS YEA_RATE_YN   /*YEA_���ϼ�������*/
             , D.HSHL_YSNO AS YEA_HOUSEHOLD_YN   /*YEA_�����ֿ���*/
             , E.COMP_TENR AS YEA_OFFICE_TEL_NO   /*YEA_ȸ����ȭ��ȣ*/
             , E.OHOM_TENR AS YEA_HOME_TEL_NO   /*YEA_����ȭ��ȣ*/
             , E.HNPN_TENR AS YEA_CELL_NO   /*YEA_�޴���ȭ��ȣ*/
             , D.TARN_STDT AS YEA_EROS_BEG_YMD /*YEA_�߼ұ��������������*/
             , D.TARN_ENDT AS YEA_EROS_END_YMD /*YEA_�߼ұ���������������*/
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
    (        cur.YEA_EMP_NO   /*YEA_�����ȣ*/
            ,cur.YEA_EMP_NM   /*YEA_�����*/
            ,cur.YEA_EMP_SSN   /*YEA_�ֹε�Ϲ�ȣ*/
            ,cur.YEA_HIRE_YMD  /*YEA_�Ի���*/
            ,cur.YEA_QUIT_YMD  /*YEA_�����*/
            ,cur.YEA_PROMOTE_YMD  /*YEA_������*/
            ,cur.YEA_EMP_CD  /*YEA_���������ڵ�*/
            ,cur.YEA_HOME_ADDRESS1  /*YEA_���ּ�1*/
            ,cur.YEA_HOME_ADDRESS2  /*YEA_���ּ�2*/
            ,cur.YEA_INOFFICE_YN  /*YEA_��������*/
            ,cur.YEA_INOFFICE_CD  /*YEA_���������ڵ�*/
            ,cur.YEA_DEPT_CD   /*YEA_�μ��ڵ�*/
            ,cur.YEA_RANK_CD  /*YEA_�����ڵ�*/
            ,cur.YEA_POST_CD  /*YEA_�����ڵ�*/
            ,cur.YEA_DUTY_CD  /*YEA_�����ڵ�*/
            ,cur.YEA_DISABLED_CD /*YEA_����ڵ�*/
            ,cur.YEA_STANTAX_YN /*YEA_ǥ�ؼ��װ�������*/
            ,cur.YEA_LOFO_CD  /*YEA_���ܱ��α����ڵ�*/
            ,cur.YEA_NATION_CD  /*YEA_�����ڵ�*/
            ,cur.YEA_LIVE_CD   /*YEA_���ֱ����ڵ�*/
            ,cur.YEA_LIVE_NATION_CD   /*YEA_���������ڵ�*/
            ,cur.YEA_RATE_YN   /*YEA_���ϼ�������*/
            ,cur.YEA_HOUSEHOLD_YN   /*YEA_�����ֿ���*/
            ,cur.YEA_OFFICE_TEL_NO   /*YEA_ȸ����ȭ��ȣ*/
            ,cur.YEA_HOME_TEL_NO   /*YEA_����ȭ��ȣ*/
            ,cur.YEA_CELL_NO   /*YEA_�޴���ȭ��ȣ*/

    );

    END LOOP;
    RETURN v_tab;

END SF_YEA_MASTXD;