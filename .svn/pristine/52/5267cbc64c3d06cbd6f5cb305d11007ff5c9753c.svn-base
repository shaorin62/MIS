CREATE OR REPLACE PACKAGE BODY UWZ.PKG_PAYB0170 AS

    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016.09.20
        내      용 : 급여대상자 처리
    **********************************************************/
    PROCEDURE SP_PAYB0170_PROC00 ( 
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDCAL.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDCAL.WAGE_CODE%TYPE   --급여코드
    ) AS

        v_ROWCNT INT;
        v_WAGE_YMTH PY_PMDIRY.WAGE_YMTH%TYPE; /*급여대상년월*************/
            v_CLSD_CNTT PY_PMDIRY.CLSD_CNTT%TYPE; /*직원구분내용*************/
            v_WADE_YSNO PY_PMDIRY.WADE_YSNO%TYPE; /*급여마감여부*************/
              v_PAAC_CODE PY_PAYCOD.PAAC_CODE%TYPE; /*급여계좌구분*************/
        v_STDS_DATE NVARCHAR2(8); /*기준일*************/
        v_WAGP_CODE PY_PAYCOD.WAGP_CODE%TYPE; /*급여그룹코드*************/

    BEGIN

        /*급여마감여부체크*************/
        /*급여일지정보*************/      
        SELECT A.WADE_YSNO           
             , A.WAGE_YMTH
             , B.PAAC_CODE    
             , A.CLSD_CNTT
             , B.WAGP_CODE 
          INTO v_WADE_YSNO, v_WAGE_YMTH, v_PAAC_CODE, v_CLSD_CNTT, v_WAGP_CODE
          FROM PY_PMDIRY A
     LEFT JOIN PY_PAYCOD B
            ON A.WAGE_CODE = B.WAGE_CODE
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE;
              
        v_STDS_DATE := TO_CHAR(LAST_DAY(v_WAGE_YMTH || '01'), 'YYYYMMDD');
                  
        /*마감되었다면 수정불가*************/
        IF v_WADE_YSNO = '1' THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047')); 
        END IF;
        
        --대상삭제
        DELETE FROM PY_PMDCAL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
        ;
        
        --급여삭제
        DELETE FROM PY_PMDETL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
        ;
        
        DELETE FROM PY_PMMAST
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
        ;
        

            --1일자 상태값
        --IF iWAGE_CODE = '1000' THEN
             INSERT INTO PY_PMDCAL (
                         PAYX_DATE    /*지급일*************/
                       , WAGE_CODE    /*급여코드*************/
                       , EMPL_NUMB    /*사원번호*************/
                       , STDS_DATE    /*기준일*************/
                       , WRKS_CODE    /*근무상태코드*************/
                       , WRDV_CODE    /*근무구분코드*************/
                       , CLSD_CODE    /*직원구분코드*************/
                       , DEPT_CODE    /*부서코드*************/
                       --, JBGP_CODE    /*직군코드*/
                       , CPOS_CODE    /*직급코드*************/
                       , PSTP_CODE    /*호봉코드*************/
                       , OPOS_CODE    /*직위코드*************/
                       , DUTY_CODE    /*직무코드*************/
                       , DURS_CODE    /*직책코드*************/
                       , REWK_DCNT    /*실제근무일수*************/
                       , FWRK_DCNT    /*전체근무일수*************/
                       , USIT_YSNO    /*사용자입력여부*************/
                       , INST_USID    /*입력작업자*************/
                       , INST_DATE    /*입력일시*************/
                       , UPDT_USID    /*수정작업자*************/
                       , UPDT_DATE    /*수정일시*************/
                ) SELECT iPAYX_DATE    /*지급일*************/
                       , iWAGE_CODE    /*급여코드*************/
                       , A.EMPL_NUMB    /*사원번호*************/
                       , v_WAGE_YMTH || '01'    /*기준일*************/
                       , CASE WHEN A.WRKS_CODE = '08' AND A.RETR_DATE = v_WAGE_YMTH || '01' THEN UNISTR('01') ELSE A.WRKS_CODE END    /*근무상태코드*************/
                       , A.WRDV_CODE    /*근무구분코드*************/
                       , A.CLSD_CODE    /*직원구분코드*************/
                       , A.DEPT_CODE    /*부서코드*************/
                       --, A.JBGP_CODE    /*직군코드*/
                       , A.CPOS_CODE    /*직급코드*************/
                       , A.PSTP_CODE    /*호봉코드*************/
                       , A.OPOS_CODE    /*직위코드*************/
                       , A.DUTY_CODE    /*직무코드*************/
                       , A.DURS_CODE    /*직책코드*************/
                       , 0    /*실제근무일수*************/
                       , 0    /*전체근무일수*************/
                       , CASE WHEN A.WRKS_CODE IN ('03','04','05','06','07') THEN '1' ELSE '0' END    /*사용자입력여부*************/
                       , iUPDT_USID    /*입력작업자*************/
                       , SYSDATE    /*입력일시*************/
                       , iUPDT_USID    /*수정작업자*************/
                       , SYSDATE    /*수정일시*************/
                    FROM PY_MASTPM B
              INNER JOIN TABLE(SF_HR_MASTXM(B.EMPL_NUMB, v_WAGE_YMTH || '01')) A
                      ON B.EMPL_NUMB = A.EMPL_NUMB
                     AND A.CLSD_CODE IN (SELECT COLUMN_VALUE FROM TABLE(SPLIT(v_CLSD_CNTT, ',')))
               LEFT JOIN PY_PAYRET C
                      ON C.PAYX_DATE = iPAYX_DATE
                     AND C.WAGE_CODE = iWAGE_CODE
                     AND B.EMPL_NUMB = C.EMPL_NUMB
                   WHERE (A.WODN_CODE = '1' OR C.EMPL_NUMB IS NOT NULL)
                     AND A.ENCO_DATE <= v_WAGE_YMTH || '01'                     
                         ;
            --발령정보
            FOR RS IN (  
                SELECT B.EMPL_NUMB
                     , CASE WHEN B.WRKS_CODE = '08' THEN UNISTR(TO_CHAR(TO_DATE(B.APNT_DATE,'YYYYMMDD') + 1,'YYYYMMDD')) ELSE B.APNT_DATE END AS APNT_DATE
                     , B.APDN_CODE    /*발령구분코드*************/
                     , B.WRKS_CODE  /*근무상태코드*************/
                     , B.WRDV_CODE  /*근무구분코드*************/
                     , A.CLSD_CODE  /*직원구분코드*************/
                     , B.DEPT_CODE    /*발령_부서*************/
                     --, B.JBGP_CODE
                     , B.CPOS_CODE  /*직급코드*************/
                     , B.PSTP_CODE    /*호봉코드*************/
                     , B.OPOS_CODE    /*발령_직위*************/
                     , B.DUTY_CODE    /*직무코드*************/
                     , B.DURS_CODE  /*직책코드*************/
                     , B.APNT_ENDD    /*휴직파견정직직위해제_발령종료일*************/ 
                  FROM HR_APPOXM Z
            INNER JOIN HR_APPOXD B
                    ON Z.APNT_HOCT = B.APNT_HOCT
             LEFT JOIN HR_MASTXM A
                    ON B.EMPL_NUMB = A.EMPL_NUMB                             
             LEFT JOIN TM_CODEXD D
                    ON D.COMM_CODE = 'APDN_CODE'
                   AND B.APDN_CODE = D.COMD_CODE 
                 WHERE Z.APAL_YSNO = '1'
                   AND B.APNT_DATE LIKE v_WAGE_YMTH || '%'
                   AND D.REF6_FILD = '1'
                   AND A.CLSD_CODE IN (SELECT COLUMN_VALUE FROM TABLE(SPLIT(v_CLSD_CNTT, ',')))
              ORDER BY B.EMPL_NUMB, B.APNT_DATE, B.APNT_SEQN  --DESC               
            ) LOOP
            
                SELECT COUNT(*) INTO v_ROWCNT
                  FROM PY_PMDCAL
                 WHERE PAYX_DATE = iPAYX_DATE
                   AND WAGE_CODE = iWAGE_CODE
                   AND EMPL_NUMB = RS.EMPL_NUMB
                   AND STDS_DATE = RS.APNT_DATE;    
                
                IF v_ROWCNT > 0 THEN
                    IF RS.WRKS_CODE = '08' THEN 
                        UPDATE PY_PMDCAL 
                           SET WRKS_CODE = RS.WRKS_CODE
                             , USIT_YSNO = '1'
                         WHERE PAYX_DATE = iPAYX_DATE
                           AND WAGE_CODE = iWAGE_CODE
                           AND EMPL_NUMB = RS.EMPL_NUMB
                           AND STDS_DATE = RS.APNT_DATE; 
                    END IF;
                ELSIF RS.APNT_DATE LIKE v_WAGE_YMTH || '%' THEN
                     INSERT INTO PY_PMDCAL (
                                 PAYX_DATE    /*지급일*************/
                               , WAGE_CODE    /*급여코드*************/
                               , EMPL_NUMB    /*사원번호*************/
                               , STDS_DATE    /*기준일*************/
                               , WRKS_CODE    /*근무상태코드*************/
                               , WRDV_CODE    /*근무구분코드*************/
                               , CLSD_CODE    /*직원구분코드*************/
                               , DEPT_CODE    /*부서코드*************/
                               --, JBGP_CODE    /*직군코드*/
                               , CPOS_CODE    /*직급코드*************/
                               , PSTP_CODE    /*호봉코드*************/
                               , OPOS_CODE    /*직위코드*************/
                               , DUTY_CODE    /*직무코드*************/
                               , DURS_CODE    /*직책코드*************/
                               , REWK_DCNT    /*실제근무일수*************/
                               , FWRK_DCNT    /*전체근무일수*************/
                               , USIT_YSNO    /*사용자입력여부*************/
                               , INST_USID    /*입력작업자*************/
                               , INST_DATE    /*입력일시*************/
                               , UPDT_USID    /*수정작업자*************/
                               , UPDT_DATE    /*수정일시*************/
                        ) VALUES (
                                 iPAYX_DATE    /*지급일*************/
                               , iWAGE_CODE    /*급여코드*************/
                               , RS.EMPL_NUMB    /*사원번호*************/
                               , RS.APNT_DATE    /*기준일*************/
                               , RS.WRKS_CODE    /*근무상태코드*************/
                               , RS.WRDV_CODE    /*근무구분코드*************/
                               , RS.CLSD_CODE    /*직원구분코드*************/
                               , RS.DEPT_CODE    /*부서코드*************/
                               --, RS.JBGP_CODE    /*직군코드*/
                               , RS.CPOS_CODE    /*직급코드*************/
                               , RS.PSTP_CODE    /*호봉코드*************/
                               , RS.OPOS_CODE    /*직위코드*************/
                               , RS.DUTY_CODE    /*직무코드*************/
                               , RS.DURS_CODE    /*직책코드*************/
                               , 0    /*실제근무일수*************/
                               , 0    /*전체근무일수*************/
                               , '1'    /*사용자입력여부*************/
                               , iUPDT_USID  /*입력작업자*************/
                               , SYSDATE      /*입력일시*************/
                               , iUPDT_USID  /*수정작업자*************/
                               , SYSDATE      /*수정일시*************/
                        );      
                END IF;
                
            END LOOP;
            
            /*출산휴가 처리*************/
        
        --실제근무일수, 전체근무일수 업데이트
            UPDATE PY_PMDCAL A
           SET REWK_DCNT = (SELECT REWK_DCNT
                            FROM  (SELECT NVL(TO_DATE(LEAD(STDS_DATE) OVER (PARTITION BY EMPL_NUMB ORDER BY STDS_DATE),'YYYYMMDD'), ADD_MONTHS(v_WAGE_YMTH || '01',1)) 
                                        - TO_DATE(STDS_DATE,'YYYYMMDD') AS REWK_DCNT
                                        , EMPL_NUMB
                                        , STDS_DATE
                                    FROM PY_PMDCAL
                                   WHERE PAYX_DATE = iPAYX_DATE
                                     AND WAGE_CODE = iWAGE_CODE
                                ) B
                            WHERE A.EMPL_NUMB = B.EMPL_NUMB
                              AND A.STDS_DATE = B.STDS_DATE
                            )
/*             , FWRK_DCNT = TO_NUMBER(TO_CHAR(LAST_DAY(v_WAGE_YMTH || '01'), 'DD')) */
               , FWRK_DCNT = '30' /* 2017-01-11 AYJ 장혜진과장 요청 */
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE;
                             
        --사용자입력여부 업데이트
        UPDATE PY_PMDCAL A
           SET USIT_YSNO = (SELECT 1 FROM ( SELECT PAYX_DATE 
                                                 , WAGE_CODE
                                                 , EMPL_NUMB
                                                 , COUNT(EMPL_NUMB) AS CNT
                                              FROM PY_PMDCAL
                                             WHERE PAYX_DATE = iPAYX_DATE
                                               AND WAGE_CODE = iWAGE_CODE
                                          GROUP BY PAYX_DATE, WAGE_CODE, EMPL_NUMB
                                            HAVING COUNT(EMPL_NUMB) > 1) B
                             WHERE A.PAYX_DATE = B.PAYX_DATE
                               AND A.WAGE_CODE = B.WAGE_CODE
                               AND A.EMPL_NUMB = B.EMPL_NUMB
                            )
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE
           AND A.USIT_YSNO = '0';
           
        --END IF;

        /*급여마스터 저장*************/
         INSERT INTO PY_PMMAST (
                     PAYX_DATE    /*지급일*************/
                   , WAGE_CODE    /*급여코드*************/
                   , EMPL_NUMB    /*사원번호*************/
                   , WAGP_CODE    /*급여그룹코드*************/
                   , ENFC_CODE    /*사업장코드*************/
                   , DEPT_CODE    /*부서코드*************/
                   , CLSD_CODE    /*직원구분코드*************/
                   , WRDV_CODE    /*근무구분코드*************/
                   --, JBGP_CODE    /*직군코드*/
                   , CPOS_CODE    /*직급코드*************/
                   , OPOS_CODE    /*직위코드*************/
                   , DUTY_CODE    /*직무코드*************/
                   , DURS_CODE    /*직책코드*************/
                   , PSTP_CODE    /*호봉코드*************/
                   , WRKS_CODE    /*근무상태코드*************/
                   , REEP_DIVC    /*퇴직수당구분코드*************/
                   , REAY_JOCD    /*퇴직연금가입기관코드*************/
                   , WABK_CODE    /*급여은행코드*************/
                   , WAGE_ACNO    /*급여계좌번호*************/
                   , WAGE_DPST    /*급여예금주*************/
                   , FADT_NOPS    /*부양가족인원수*************/
                   , MACN_NOPS    /*다자녀인원수*************/
                   , INCM_SETN    /*소득구간*************/
                   , AITD_RATE    /*소득세공제비율*************/
                   , LBJO_YSNO    /*노조가입여부*************/
                   , OVTI_PAHR    /*초과근무지급시간*************/
                   , NIWK_PAHR    /*야간근무지급시간*************/
                   , HOWK_PAHR    /*휴일근무지급시간*************/
                   , ANPY_DCNT    /*연차지급일수*************/
                   , BSLY_AMOT    /*기본급금액*************/
                   , ODNY_WAGE    /*통상임금*************/
                   , PRON_WAGE    /*소급통상임금*************/
                   , PAYX_AMOT    /*지급금액*************/
                   , DDUC_AMOT    /*공제금액*************/
                   , REMK_1000    /*비고1000*************/
                   , APLY_ANDC      /*적용연차개수*************/
                   , USEX_ANDC      /*사용연차개수*************/
                   , USEB_ANDC      /*사용가능연차개수*************/
                   , HOWK_DAYS    /*2016-11-15 LYG 휴일근무일수 추가 *************/
                   , REYS_VADC    /*2016-11-15 LYG 퇴직정산휴가갯수*************/
                   , INST_USID    /*입력작업자*************/
                   , INST_DATE    /*입력일시*************/
                   , UPDT_USID    /*수정작업자*************/
                   , UPDT_DATE    /*수정일시*************/
            ) SELECT iPAYX_DATE
                   , iWAGE_CODE
                   , A.EMPL_NUMB
                   , v_WAGP_CODE 
                   , C.ENFC_CODE
                   , A.DEPT_CODE
                   , A.CLSD_CODE
                   , A.WRDV_CODE
                   --, A.JBGP_CODE
                   , A.CPOS_CODE   /*직급코드*************/
                   , A.OPOS_CODE   /*직위코드*************/
                   , A.DUTY_CODE   /*직무코드*************/
                   , A.DURS_CODE   /*직책코드*************/
                   , A.PSTP_CODE   /*호봉코드*************/
                   , A.WRKS_CODE   /*근무상태코드*************/
                   , B.REEP_DIVC   /*퇴직수당구분코드*************/
                   , B.REAY_JOCD   /*퇴직연금가입기관코드*************/
                   , CASE WHEN v_PAAC_CODE = '1' THEN B.WABK_CODE WHEN v_PAAC_CODE = '2' THEN NVL(B.IRSB_CODE,B.WABK_CODE) ELSE B.WABK_CODE END AS WABK_CODE
                   , CASE WHEN v_PAAC_CODE = '1' THEN B.WAGE_ACNO WHEN v_PAAC_CODE = '2' THEN NVL(B.IRSA_ACNO,B.WAGE_ACNO) ELSE B.WAGE_ACNO END AS WAGE_ACNO
                   , CASE WHEN v_PAAC_CODE = '1' THEN B.WAGE_DPST WHEN v_PAAC_CODE = '2' THEN NVL(B.IRSA_DPST,B.WAGE_DPST) ELSE B.WAGE_DPST END AS WAGE_DPST 
                   , NVL(D.FADT_NOPS,1) AS FADT_NOPS   /*부양가족인원수*************/
                   , NVL(D.MACN_NOPS,0) AS MACN_NOPS  /*다자녀인원수*************/
                   , NULL
                   , TO_NUMBER(CASE WHEN B.PAYX_TAXR IS NULL THEN '1.0'
                                    ELSE NVL(SF_GET_COMMNAMEREF('PAYX_TAXR', B.PAYX_TAXR, '1'), '1.0')
                                    END)
                   , NVL(A.LBJO_YSNO,'0') AS LBJO_YSNO  /*노조가입여부*************/
                   , NVL(E.OVTI_PAHR,0)    /*초과근무지급시간*************/
                   , NVL(E.NIWK_PAHR,0)    /*야간근무지급시간*************/
                   , NVL(E.HOWK_PAHR,0)    /*휴일근무지급시간*************/
                   
                   , 0    /*연차지급일수*************/
                   , 0    /*기본급금액*************/
                   , 0    /*통상임금*************/
                   , 0    /*소급통상임금*************/
                   , 0    /*지급금액*************/
                   , 0    /*공제금액*************/
                   , ''    /*비고1000*************/
                   , NVL(F.APLY_ANDC,0)      /*적용연차개수*************/
                   , NVL(F.USEX_ANDC,0)      /*사용연차개수*************/
                   , NVL(F.REMA_ANDC,0)      /*사용가능연차개수*************/
                   , NVL(E.HOWK_DAYS,0)   /*2016-11-15 LYG 휴일근무일수 추가 *************/
                   , NVL(F.REYS_VADC,0)   /*2016-11-15 LYG 퇴직정산휴가개수 *************/
                   , iUPDT_USID  /*입력작업자*************/
                   , SYSDATE      /*입력일시*************/
                   , iUPDT_USID  /*수정작업자*************/
                   , SYSDATE      /*수정일시*************/
                FROM PY_MASTPM B
                        INNER JOIN TABLE(SF_HR_MASTXM(B.EMPL_NUMB, v_STDS_DATE)) A
                                ON B.EMPL_NUMB = A.EMPL_NUMB
                         LEFT JOIN TABLE(SF_TM_DEPTXM(v_STDS_DATE)) C
                                ON A.DEPT_CODE = C.DEPT_CODE
                         LEFT JOIN (SELECT EMPL_NUMB
                                         , COUNT(SRAL_NUMB) + 1 AS FADT_NOPS /*가족사항에 본인 있을경우 +1 제외*************/
                                         , COUNT(CASE WHEN SF_GET_REFXFILD('FREL_CODE', FREL_CODE, '1') = '4' AND 
                                                    FMLY_BIRT >= TO_CHAR(ADD_MONTHS(TO_DATE(v_WAGE_YMTH || '01','YYYYMMDD'),-240),'YYYYMMDD') THEN SRAL_NUMB END) AS MACN_NOPS
                                     FROM HR_FAMILY
                                    WHERE SUPT_YSNO = '1'
                                 GROUP BY EMPL_NUMB
                              ) D
                                ON B.EMPL_NUMB = D.EMPL_NUMB
                         LEFT JOIN (SELECT EMPL_NUMB
              --                           , NVL(SUM(CASE WHEN DGNL_CODE = '34' THEN DGNL_NBOH + ROUND(DGNL_NBOM/60,1) ELSE 0 END),0) AS OVTI_PAHR
                                           , NVL(ETSN_TIME, 0 ) AS OVTI_PAHR
              --                           , NVL(SUM(CASE WHEN DGNL_CODE = '32' THEN DGNL_NBOH + ROUND(DGNL_NBOM/60,1) ELSE 0 END),0) AS NIWK_PAHR
                                           , NVL(NIGH_TIME, 0 ) AS NIWK_PAHR
              --                           , NVL(SUM(CASE WHEN DGNL_CODE = '35' THEN DGNL_NBOH + ROUND(DGNL_NBOM/60,1) ELSE 0 END),0) AS HOWK_PAHR
                                           , NVL(HOLI_WORT,0) + NVL(HOLE_ETSN,0) + NVL(HOLE_NIGH,0) AS HOWK_PAHR
                                           , NVL(HOWK_DAYS,0)   AS  HOWK_DAYS /*2016-11-15 LYG 휴일근무일수*************/
                                      FROM AT_ATTEM1
                                     WHERE ATTE_YMTH = v_WAGE_YMTH
                                  --GROUP BY EMPL_NUMB  --2016-10-12 LYG 주석처리
                              ) E
                                ON B.EMPL_NUMB = E.EMPL_NUMB
                      /*LEFT JOIN AT_ANNUXM F *************/
                      LEFT JOIN PY_ANNUVA F
                             ON F.EMPL_NUMB = A.EMPL_NUMB
                            AND F.STDS_YEAR = SUBSTR(v_WAGE_YMTH,1,4)
               WHERE B.EMPL_NUMB IN (SELECT EMPL_NUMB FROM PY_PMDCAL 
                                      WHERE PAYX_DATE = iPAYX_DATE
                                        AND WAGE_CODE = iWAGE_CODE
                                    )
                 AND (( B.PAWE_YSNO = '1') OR (A.WODN_CODE = '2' AND B.PAWE_YSNO = '0'));
        
        /*가족사항백업*************/
        IF iWAGE_CODE = '1000' THEN    --일반급여 처리시
            DELETE FROM PY_FMPAYH
             WHERE PAYX_DATE = iPAYX_DATE
               AND WAGE_CODE = iWAGE_CODE;
             
             INSERT INTO PY_FMPAYH (
                    PAYX_DATE   /*지급일*************/
                   ,WAGE_CODE   /*급여코드*************/
                   ,EMPL_NUMB   /*사원번호*************/
                   ,FMLY_NAME   /*가족성명*************/
                   ,FREL_CODE   /*가족관계코드*************/
                   ,FALP_YSNO   /*가족수당지급여부*************/
                   ,SUPT_YSNO   /*부양여부*************/
                   ,HALT_CODE   /*장애코드*************/
                   ,FMLY_BIRT   /*가족생년월일*************/
                   ,GNDR_CODE   /*성별코드*************/
                   ,BGIN_YMTH   /*시작년월*************/
                   ,ENDX_YMTH   /*종료년월*************/
                   ,REMK_100X   /*비고100*************/
                   ,INST_USID   /*입력작업자*************/
                   ,INST_DATE   /*입력일시*************/
                   ,UPDT_USID   /*수정작업자*************/
                   ,UPDT_DATE   /*수정일시*************/
           ) SELECT A.PAYX_DATE   /*지급일*************/
                   ,A.WAGE_CODE   /*급여코드*************/
                   ,A.EMPL_NUMB   /*사원번호*************/
                   ,B.FMLY_NAME   /*가족성명*************/
                   ,B.FREL_CODE   /*가족관계코드*************/
                   ,B.FALP_YSNO   /*가족수당지급여부*************/
                   ,B.SUPT_YSNO   /*부양여부*************/
                   ,B.HALT_CODE   /*장애코드*************/
                   ,B.FMLY_BIRT   /*가족생년월일*************/
                   ,B.GNDR_CODE   /*성별코드*************/
                   ,B.BGIN_YMTH   /*시작년월*************/
                   ,B.ENDX_YMTH   /*종료년월*************/
                   ,B.REMK_100X   /*비고100*************/
                   ,iUPDT_USID
                   ,SYSDATE
                   ,iUPDT_USID
                   ,SYSDATE    
              FROM PY_PMMAST A
        INNER JOIN HR_FAMILY B
                ON A.EMPL_NUMB = B.EMPL_NUMB 
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE; 
    
        END    IF;        
           
        
    END;
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리
    **********************************************************/
    PROCEDURE SP_PAYB0170_PROC01 (
         iUPDT_USID   IN PY_PMMAST.UPDT_USID%TYPE   --수정자
        ,iSAVE_TYPE   IN NVARCHAR2                  --급여처리/삭제
        ,iPAYX_DATE   IN PY_PMMAST.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMMAST.WAGE_CODE%TYPE   --급여코드
        ,iWAGP_CODE   IN PY_PMMAST.WAGP_CODE%TYPE   --급여그룹코드
        ,iEMPL_NUMB   IN PY_PMMAST.EMPL_NUMB%TYPE   --사원번호
        ,iWAGE_YMTH   IN PY_PMDETL.WAGE_YMTH%TYPE   --급여년월
    ) AS
        v_WADE_YSNO PY_PMDIRY.WADE_YSNO%TYPE; /*급여마감여부*************/
    BEGIN
        
        /*급여마감여부체크*************/
        /*급여일지정보*************/      
        SELECT A.WADE_YSNO           
          INTO v_WADE_YSNO
          FROM PY_PMDIRY A
                 LEFT JOIN PY_PAYCOD B
                        ON A.WAGE_CODE = B.WAGE_CODE
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE;
              
        /*마감되었다면 수정불가*************/
        IF v_WADE_YSNO = '1' THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047')); 
        END IF;
        
        
        DELETE FROM PY_PMDLOG
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END
        ;
        
        /*1. 급여, 급여상세 데이터 삭제*************/
        DELETE FROM PY_PMDETL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END
        ;
        
        /*급여압류 삭제*************/
--          PY_SIZRXD  DELETE FROM PY_SIZRXD
--             WHERE RPAY_DATE = iPAYX_DATE
--               AND WAGE_CODE = iWAGE_CODE
--               AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END
--               AND REDE_CODE = '1';
            
        /*학자금압류 삭제*************/
--            DELETE FROM PY_SISCXD 
--             WHERE RPAY_DATE = iPAYX_DATE
--               AND WAGE_CODE = iWAGE_CODE
--               AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END
--               AND REDE_CODE = '1';              
        
        /*학자금지급 업데이트*************/
--        UPDATE WF_MSCAXD 
--           SET PAYX_DATE = NULL
--             , WAGE_CODE = NULL
--             , PAYX_AMOT = 0
--         WHERE PAYX_DATE = iPAYX_DATE
--           AND WAGE_CODE = iWAGE_CODE
--           AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END;
        
        --압류 해제
--        UPDATE PY_SIZRXM A
--           SET CMPL_YSNO = (SELECT CASE WHEN A.DMND_AMOT - NVL(D.RPAY_AMOT,0) > 0 THEN '0' ELSE '1' END 
--                              FROM (SELECT EMPL_NUMB
--                                         , SRAL_NUMB
--                                         , NVL(SUM(RPAY_AMOT),0) AS RPAY_AMOT
--                                     FROM PY_SIZRXD
--                                 GROUP BY EMPL_NUMB, SRAL_NUMB
--                                ) D
--                             WHERE A.EMPL_NUMB = D.EMPL_NUMB
--                               AND A.SRAL_NUMB = D.SRAL_NUMB)
--         WHERE A.CNAP_DATE IS NULL
--           AND A.MWCN_DATE IS NULL
--           AND A.EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN A.EMPL_NUMB ELSE iEMPL_NUMB END;
            
--        UPDATE PY_SISCXM A
--           SET CMPL_YSNO = (SELECT CASE WHEN A.DMND_AMOT - NVL(D.RPAY_AMOT,0) > 0 THEN '0' ELSE '1' END
--                              FROM (SELECT EMPL_NUMB
--                                         , SRAL_NUMB
--                                         , NVL(SUM(RPAY_AMOT),0) AS RPAY_AMOT
--                                      FROM PY_SISCXD
--                                  GROUP BY EMPL_NUMB, SRAL_NUMB
--                                ) D
--                             WHERE A.EMPL_NUMB = D.EMPL_NUMB
--                               AND A.SRAL_NUMB = D.SRAL_NUMB)
--         WHERE A.MWCN_DATE IS NULL
--           AND A.EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN A.EMPL_NUMB ELSE iEMPL_NUMB END ;

       UPDATE PY_PMDCAL A
         SET PROC_YSNO = '0'   /*처리구분*************/                        
       WHERE PAYX_DATE = iPAYX_DATE   /*지급일*************/
         AND WAGE_CODE = iWAGE_CODE   /*급여코드*************/
         --AND EMPL_NUMB = CASE WHEN iSAVE_TYPE IN ('2','-2') THEN EMPL_NUMB ELSE iEMPL_NUMB END   /*사원번호*/
         AND ((iSAVE_TYPE IN ('2','-2')) 
              OR (iSAVE_TYPE NOT IN ('2','-2') AND EMPL_NUMB = iEMPL_NUMB))
       ;
       
    END;
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리
    **********************************************************/
    PROCEDURE SP_PAYB0170_PROC02 (
         iUPDT_USID   IN PY_PMMAST.UPDT_USID%TYPE   --수정자
        ,iSAVE_TYPE   IN NVARCHAR2                  --급여처리/삭제
        ,iPAYX_DATE   IN PY_PMMAST.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMMAST.WAGE_CODE%TYPE   --급여코드
        ,iWAGP_CODE   IN PY_PMMAST.WAGP_CODE%TYPE   --급여그룹코드
        ,iWAGE_YMTH   IN PY_PMDETL.WAGE_YMTH%TYPE   --급여년월
    ) AS
        v_INDEX1 INT;
            v_INDEX2 INT;
            v_RETURN NVARCHAR2(4000);

            v_TEMP_PAYAMT NUMBER;  /*수당공제액(일할계산)*************/
            v_PAYAMT NUMBER;  /*수당공제액*************/
            v_INIT_AMOT NUMBER;  /*수당공제액(초기금액)*************/
        
            v_STDS_DATE NVARCHAR2(8);
        
            rRESULT REC_TYPE;
            
            /*급여수식 커서대체*************/
            v_APLY_MODN PY_PAYEXP.APLY_MODN%TYPE;    /*적용수식*************/
        v_FLAG NVARCHAR2(1);   
        v_PAYX_RATE PY_PYRATE.PAYX_RATE%TYPE;
        
        --압류
        v_EXPD_AMOT PY_PMDETL.EXPD_AMOT%TYPE;    --공제금액
        v_RPAY_AMOT PY_PMDETL.EXPD_AMOT%TYPE;                    --이번회차 상환금액
        v_DMND_SUMA PY_PMDETL.EXPD_AMOT%TYPE;
        v_WADE_YSNO PY_PMDIRY.WADE_YSNO%TYPE; /*급여마감여부*************/
        BEGIN
        
        /*급여마감여부체크*************/
        /*급여일지정보*************/      
        SELECT A.WADE_YSNO           
          INTO v_WADE_YSNO
          FROM PY_PMDIRY A
                 LEFT JOIN PY_PAYCOD B
                        ON A.WAGE_CODE = B.WAGE_CODE
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE;
              
        /*마감되었다면 수정불가*************/
        IF v_WADE_YSNO = '1' THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047')); 
        END IF;

        v_FLAG := '1';
        v_STDS_DATE := TO_CHAR(LAST_DAY(iWAGE_YMTH || '01'), 'YYYYMMDD');
         
            /*2. @SaveType 이 '2' 라면 여기서 끝나고 '1' 라면 아래 로직 실행하여 급여처리*************/    
            IF iSAVE_TYPE IN ('1','2') THEN        
                  
            v_INDEX1 := 0;
            v_INDEX2 := 0;
                
            /*급여일지정보*************/
            SELECT  A.ITCS_YMTH
                   ,A.ITCE_YMTH
              INTO PKG_PAY_FUNC.g_TAX_INMON1, PKG_PAY_FUNC.g_TAX_INMON2
              FROM PY_PMDIRY A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE;
            
            FOR CUR_CLSD IN (
                SELECT DISTINCT CLSD_CODE
                  FROM PY_PMDCAL 
                 WHERE PAYX_DATE = iPAYX_DATE
                   AND WAGE_CODE = iWAGE_CODE
                   AND PROC_YSNO = '0'
                 ORDER BY CLSD_CODE
            ) LOOP
                
                  --RAISE_APPLICATION_ERROR(-20000, '0:'||iWAGP_CODE||':'||iWAGE_YMTH||':'||iPAYX_DATE);
                    /*급여수식 RS*************/
                    FOR RS IN (
                      SELECT A.STDS_YMTH
                       , A.EXPD_CODE
                       , A.APLY_MODN
                       , B.DAYC_YSNO  /*일할계산여부*************/
                       , B.PADN_YSNO  /*지급공제여부*************/
                    FROM PY_PAYEXP A
              INNER JOIN PY_ALLDED B
                          ON A.EXPD_CODE = B.EXPD_CODE                
                       WHERE A.WAGP_CODE = iWAGP_CODE
                         AND A.STDS_YMTH = (
                                        SELECT MAX(STDS_YMTH) FROM PY_PAYEXP 
                                         WHERE WAGP_CODE = A.WAGP_CODE
                                           AND STDS_YMTH <= iWAGE_YMTH
                                           AND CLSD_CODE = A.CLSD_CODE
                                        )
                         AND A.CLSD_CODE = CUR_CLSD.CLSD_CODE
                ORDER BY SUBSTR(B.EXPD_CODE,1,1), B.CALC_ORDR
                    ) LOOP   
                  --RAISE_APPLICATION_ERROR(-20000, '1:'||iWAGP_CODE||':'||iWAGE_YMTH||':'||iPAYX_DATE);
                  
                   IF RS.EXPD_CODE LIKE 'D%' AND v_FLAG = '1' THEN 
                        UPDATE PY_PMDETL 
                           SET NTAX_INCM = 0 
                         WHERE PAYX_DATE = iPAYX_DATE
                           AND WAGE_CODE = iWAGE_CODE
                           AND EMPL_NUMB IN (SELECT EMPL_NUMB 
                                               FROM PY_PMDCAL 
                                              WHERE PAYX_DATE = iPAYX_DATE
                                                AND WAGE_CODE = iWAGE_CODE
                                                AND CLSD_CODE = CUR_CLSD.CLSD_CODE
                                                AND PROC_YSNO = '0'
                                            );
                                      
                        /*비과세처리 월한도*************/
                        UPDATE PY_PMDETL A
                           SET NTAX_INCM = (SELECT NVL(CASE WHEN A.EXPD_AMOT >= B.MONT_OVDW THEN B.MONT_OVDW ELSE A.EXPD_AMOT END,0)
                                              FROM PY_TAXEXE B 
                                             WHERE B.STDS_YEAR = SUBSTR(iWAGE_YMTH,1,4)
                                               AND A.EXPD_CODE = B.EXPD_CODE 
                                               AND NVL(B.NTAX_CODE,' ') <> 'O01') --생산직근로자
                         WHERE A.PAYX_DATE = iPAYX_DATE
                           AND A.WAGE_CODE = iWAGE_CODE
                           AND A.EMPL_NUMB IN (SELECT EMPL_NUMB 
                                                 FROM PY_PMDCAL 
                                                WHERE PAYX_DATE = iPAYX_DATE
                                                  AND WAGE_CODE = iWAGE_CODE
                                                  AND CLSD_CODE = CUR_CLSD.CLSD_CODE
                                                  AND PROC_YSNO = '0'
                                              );
                                              
                        /*비과세처리 연한도(생산직 야간근로수당 비과세).우체국 해당사항 없음*************/
                        v_FLAG := 0;
                    END IF;
                    
                        FOR RCAL IN (
                        SELECT A.EMPL_NUMB   /*사원번호*************/
                             , A.STDS_DATE   /*기준일*************/
                             , A.WRKS_CODE   /*근무상태코드*************/
                             , A.WRDV_CODE   /*근무구분코드*************/
                             , A.CLSD_CODE   /*직원구분코드*************/
                             , A.DEPT_CODE   /*부서코드*************/
                             , A.JBGP_CODE   /*직군코드*************/
                             , A.CPOS_CODE   /*직급코드*************/
                             , A.PSTP_CODE   /*호봉코드*************/
                             , A.OPOS_CODE   /*직위코드*************/
                             , A.DUTY_CODE   /*직무코드*************/
                             , A.DURS_CODE   /*직책코드*************/
                             , A.REWK_DCNT   /*실제근무일수*************/
                             , A.FWRK_DCNT   /*전체근무일수*************/
                             , ROW_NUMBER() OVER (PARTITION BY A.EMPL_NUMB ORDER BY A.STDS_DATE) AS ROWN
                          FROM PY_PMDCAL A
                         WHERE PAYX_DATE = iPAYX_DATE
                           AND WAGE_CODE = iWAGE_CODE
                           AND PROC_YSNO = '0'
                           AND CLSD_CODE = CUR_CLSD.CLSD_CODE
                           AND REWK_DCNT > 0
                           /* 2016-11-01 LYG 급여마스터(PY_PMMAST)에 존재하는 사원만 대상으로 한다. *************/
                           AND EXISTS ( SELECT 'Y'
                                          FROM PY_PMMAST Z
                                         WHERE Z.PAYX_DATE = A.PAYX_DATE
                                           AND Z.WAGE_CODE = A.WAGE_CODE
                                           AND Z.EMPL_NUMB = A.EMPL_NUMB )
                        ) LOOP
                        v_PAYAMT := 0;
                        v_INIT_AMOT := 0;
                        v_TEMP_PAYAMT := 0;
            
                            /*발령에 따라 변경*************/
                        PKG_PAY_FUNC.g_WRKS_CODE := RCAL.WRKS_CODE;   /*근무상태코드*************/
                        PKG_PAY_FUNC.g_WRDV_CODE := RCAL.WRDV_CODE;  /*근무구분코드*************/
                        PKG_PAY_FUNC.g_CLSD_CODE := RCAL.CLSD_CODE;  /*직원구분코드*************/
                        PKG_PAY_FUNC.g_DEPT_CODE := RCAL.DEPT_CODE;  /*부서코드*************/
                        PKG_PAY_FUNC.g_JBGP_CODE := RCAL.JBGP_CODE;  /*직군코드*************/
                        PKG_PAY_FUNC.g_CPOS_CODE := RCAL.CPOS_CODE;  /*직급코드*************/
                        PKG_PAY_FUNC.g_PSTP_CODE := RCAL.PSTP_CODE;  /*호봉코드*************/
                        PKG_PAY_FUNC.g_OPOS_CODE := RCAL.OPOS_CODE;  /*직위코드*************/
                        PKG_PAY_FUNC.g_DUTY_CODE := RCAL.DUTY_CODE;  /*직무코드*************/
                        PKG_PAY_FUNC.g_DURS_CODE := RCAL.DURS_CODE;  /*직책코드*************/
                            PKG_PAY_FUNC.g_EXPD_CODE := RS.EXPD_CODE;
                            
                        v_APLY_MODN := RS.APLY_MODN;
                            
                            /*지급공제여부인 경우 여러건 리턴 가능*************/
                            IF RS.PADN_YSNO = '1' AND INSTR(v_APLY_MODN, '지급공제') > 0 THEN 
                                v_APLY_MODN := '';
                                FOR ALDEYN IN (
                                    SELECT BGIN_DATE
                                      FROM PY_ALDEYN
                                     WHERE EMPL_NUMB = RCAL.EMPL_NUMB
                                       AND EXPD_CODE = RS.EXPD_CODE
                                       AND BGIN_DATE <= v_STDS_DATE
                                       AND (ENDX_DATE IS NULL OR ENDX_DATE >= iWAGE_YMTH || '01')
                                     ORDER BY BGIN_DATE
                                ) LOOP
                                    
                                    v_APLY_MODN := v_APLY_MODN || ' + ' || '(' || RS.APLY_MODN || ')';
                                    
                                    v_APLY_MODN := REPLACE(v_APLY_MODN, '[지급공제금액]', '[지급공제금액(''' || ALDEYN.BGIN_DATE || ''', ''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || iWAGE_YMTH || ''')]');
                                    v_APLY_MODN := REPLACE(v_APLY_MODN, '[지급공제일수]', '[지급공제일수(''' || ALDEYN.BGIN_DATE || ''', ''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || iWAGE_YMTH || ''')]');
                                
                                END LOOP;
                            ELSIF NVL(RS.PADN_YSNO,'0') = '0' AND INSTR(v_APLY_MODN, '지급공제') > 0 THEN 
                            	RAISE_APPLICATION_ERROR(-20000, '급여항목관리의 공제항목에서 [지급여부관리]를 체크하세요.');  
                            END IF;
                            
                        --로그
                        IF v_APLY_MODN IS NOT NULL THEN   
                            SP_PAYB0170_LOG(iUPDT_USID, iPAYX_DATE, iWAGE_CODE, RCAL.EMPL_NUMB, RS.EXPD_CODE, v_APLY_MODN);
                        END IF;
                        
                        v_INDEX1 := INSTR(v_APLY_MODN, '{');
                            v_INDEX2 := INSTR(v_APLY_MODN, '}');        
                            WHILE v_INDEX1 > 0 LOOP
                                v_RETURN := SUBSTR(v_APLY_MODN, v_INDEX1 + 1, v_INDEX2 - v_INDEX1-1);
                                
                                BEGIN
                                SELECT EXPD_AMOT  INTO v_RETURN                  
                                  FROM PY_PMDETL
                                 WHERE PAYX_DATE = iPAYX_DATE
                                   AND WAGE_CODE = iWAGE_CODE
                                   AND EMPL_NUMB = RCAL.EMPL_NUMB
                                   AND EXPD_CODE = (SELECT EXPD_CODE FROM PY_ALLDED WHERE EXPD_NAME = v_RETURN);
                                  
                                EXCEPTION
                                WHEN NO_DATA_FOUND THEN v_RETURN:=0;
                                END;
                                
                                IF SUBSTR(v_RETURN,1,1) = '-' THEN
                                  v_RETURN := '(' || v_RETURN || ')';
                                END IF;
                                
                                v_APLY_MODN := REPLACE(v_APLY_MODN, SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1), v_RETURN);
                                
                                v_INDEX1 := INSTR(v_APLY_MODN, '{');
                                v_INDEX2 := INSTR(v_APLY_MODN, '}');
                            
                            SP_PAYB0170_LOG(iUPDT_USID, iPAYX_DATE, iWAGE_CODE, RCAL.EMPL_NUMB, RS.EXPD_CODE, v_APLY_MODN);
                            
                            END LOOP;/*수당함수*************/
                            
                            v_INDEX1 := INSTR(v_APLY_MODN, '[');
                            v_INDEX2 := INSTR(v_APLY_MODN, ']');
                        
                            WHILE v_INDEX1 > 0 LOOP
                    
                            v_RETURN := SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1);            
                            BEGIN  
                                v_RETURN := REPLACE(REPLACE(v_RETURN,'[',''),']','');
                                
                                IF v_RETURN LIKE '지급공제%' THEN
                                	--RAISE_APPLICATION_ERROR(-20000, 'RS.PADN_YSNO : ' || RS.PADN_YSNO || ', v_APLY_MODN : ' || v_APLY_MODN || ', v_RETURN : [[' || v_RETURN ||']]');  
                                    OPEN rRESULT FOR 
                                      TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN  || ' AS RTN_VALUE FROM DUAL');
                                    FETCH rRESULT INTO v_RETURN;                                  
                                ELSE
                                    BEGIN
                                        OPEN rRESULT FOR 
                                          TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || iWAGE_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL');          
                                        FETCH rRESULT INTO v_RETURN;      
                                    EXCEPTION
                                        WHEN OTHERS THEN
                                          RAISE_APPLICATION_ERROR(-20000, TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || iWAGE_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL'));
                                    END;
                                END IF;
                            EXCEPTION
                                WHEN NO_DATA_FOUND THEN v_RETURN:='0';
                            END;  
                              
                            
                            IF SUBSTR(v_RETURN,1,1) = '-' THEN
                              v_RETURN := '(' || v_RETURN || ')';
                            END IF;
                            
                            v_APLY_MODN := REPLACE(v_APLY_MODN, SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1), NVL(v_RETURN,'0'));
                           
                            v_INDEX1 := INSTR(v_APLY_MODN, '[');
                            v_INDEX2 := INSTR(v_APLY_MODN, ']');
                            
                            SP_PAYB0170_LOG(iUPDT_USID, iPAYX_DATE, iWAGE_CODE, RCAL.EMPL_NUMB, RS.EXPD_CODE, v_APLY_MODN);
                        END LOOP;/*정의함수*************/

                        OPEN rRESULT FOR
                          TO_CHAR('SELECT ' || NVL(v_APLY_MODN,'0')  || ' AS PAYAMT FROM DUAL');          
                        FETCH rRESULT INTO v_TEMP_PAYAMT;

                        /*NULL제거*************/
                        v_TEMP_PAYAMT := NVL(TRUNC(v_TEMP_PAYAMT,0),0);
                        
                        /*일할계산대상*************/
                        IF RS.DAYC_YSNO = '1' THEN

                            /*계산비율*************/
                            SELECT PAYX_RATE INTO v_PAYX_RATE
                              FROM PY_PYRATE A
                             WHERE A.STDS_YMTH = RS.STDS_YMTH
                               AND A.WAGP_CODE = iWAGP_CODE
                               AND A.CLSD_CODE = CUR_CLSD.CLSD_CODE
                               AND A.EXPD_CODE = RS.EXPD_CODE
                               AND A.WRKS_CODE = RCAL.WRKS_CODE;
            
                            
                            v_PAYAMT := (v_TEMP_PAYAMT * RCAL.REWK_DCNT / RCAL.FWRK_DCNT) * v_PAYX_RATE;
                            IF v_PAYAMT <> v_TEMP_PAYAMT THEN
                                SP_PAYB0170_LOG(iUPDT_USID, iPAYX_DATE, iWAGE_CODE, RCAL.EMPL_NUMB, RS.EXPD_CODE, '(' || v_TEMP_PAYAMT || ' * ' || RCAL.REWK_DCNT || ' / ' || RCAL.FWRK_DCNT || ') * ' || v_PAYX_RATE || ')');
                            END IF;
                            --채용은 앞부분까지 100% 로 만들어서 저장
                            IF RCAL.ROWN = 1 AND SUBSTR(RCAL.STDS_DATE,7,2) <> '01' THEN
                                v_INIT_AMOT := (v_TEMP_PAYAMT * (RCAL.REWK_DCNT + TO_NUMBER(SUBSTR(RCAL.STDS_DATE,7,2)) -1) / RCAL.FWRK_DCNT);
                            ELSE
                                v_INIT_AMOT := (v_TEMP_PAYAMT * RCAL.REWK_DCNT / RCAL.FWRK_DCNT);
                            END IF;
                        ELSE
                            v_PAYAMT := v_TEMP_PAYAMT;
                                v_INIT_AMOT := v_TEMP_PAYAMT;
                        END IF;
                        
                        IF v_INIT_AMOT <> 0 THEN
                            MERGE INTO PY_PMDETL A
                                 USING (SELECT iPAYX_DATE AS PAYX_DATE
                                             , iWAGE_CODE AS WAGE_CODE
                                             , RCAL.EMPL_NUMB AS EMPL_NUMB
                                             , RS.EXPD_CODE AS EXPD_CODE FROM DUAL) B
                                    ON (A.PAYX_DATE = B.PAYX_DATE
                                   AND A.WAGE_CODE = B.WAGE_CODE
                                   AND A.EMPL_NUMB = B.EMPL_NUMB 
                                   AND A.EXPD_CODE = B.EXPD_CODE)
                                WHEN NOT MATCHED THEN 
                        
                                    INSERT  (
                                           PAYX_DATE   /*지급일*************/
                                          ,WAGE_CODE   /*급여코드*************/
                                          ,EMPL_NUMB   /*사원번호*************/
                                          ,EXPD_CODE   /*수당공제코드*************/
                                          ,EXPD_AMOT   /*수당공제금액*************/
                                          ,NTAX_INCM   /*비과세소득*************/
                                          ,RTRC_AMOT   /*소급금액*************/
                                          ,INIT_AMOT   /*초기금액*************/
                                          ,WAGE_YMTH
                                          ,INST_USID   /*입력작업자*************/
                                          ,INST_DATE   /*입력일시*************/
                                          ,UPDT_USID   /*수정작업자*************/
                                          ,UPDT_DATE   /*수정일시*************/
                                    ) VALUES (
                                         B.PAYX_DATE
                                        ,B.WAGE_CODE
                                        ,B.EMPL_NUMB
                                        ,B.EXPD_CODE
                                        ,v_PAYAMT
                                        ,0
                                        ,0                  
                                        ,v_INIT_AMOT
                                        ,iWAGE_YMTH
                                        ,iUPDT_USID
                                        ,SYSDATE
                                        ,iUPDT_USID
                                        ,SYSDATE
                                    )
                                WHEN MATCHED  THEN
                                    UPDATE SET A.EXPD_AMOT = A.EXPD_AMOT + CASE WHEN RS.DAYC_YSNO = '1' THEN v_PAYAMT ELSE 0 END
                                              ,A.INIT_AMOT = A.INIT_AMOT + CASE WHEN RS.DAYC_YSNO = '1' THEN v_INIT_AMOT ELSE 0 END
                                      ;
                        END IF;
                        
                        /*금융원예외*************/
--                        IF RS.EXPD_CODE = 'A1340' AND v_PAYAMT <> 0 THEN 
--                            UPDATE WF_MSCAXD A
--                               SET (PAYX_AMOT, PAYX_DATE, WAGE_CODE) = (SELECT PAYX_AMOT, iPAYX_DATE, iWAGE_CODE 
--                                                                          FROM WF_MSCAXM B
--                                                                         WHERE A.EMPL_NUMB = B.EMPL_NUMB
--                                                                           AND A.SRAL_NUMB = B.SRAL_NUMB)
--                             WHERE A.EMPL_NUMB = RCAL.EMPL_NUMB
--                               AND A.SRAL_NUMB IN (SELECT SRAL_NUMB FROM WF_MSCAXM WHERE EMPL_NUMB = RCAL.EMPL_NUMB AND STDS_YEAR = SUBSTR(iWAGE_YMTH,1,4) AND PRDN_CODE = '1')
--                               AND A.PAQD_CODE = CASE WHEN SUBSTR(iWAGE_YMTH,5,2) IN ('01','02','03') THEN '1'
--                                                      WHEN SUBSTR(iWAGE_YMTH,5,2) IN ('04','05','06') THEN '2'
--                                                      WHEN SUBSTR(iWAGE_YMTH,5,2) IN ('07','08','09') THEN '3'
--                                                      WHEN SUBSTR(iWAGE_YMTH,5,2) IN ('10','11','12') THEN '4' END;
--                                                      
--                        END IF;
                    END LOOP;/*일할계산*************/
                    
                    --급여조정
                    MERGE INTO PY_PMDETL A
                         USING (SELECT PAYX_DATE
                                     , WAGE_CODE
                                     , EMPL_NUMB
                                     , EXPD_CODE
                                     , ADJT_RAPY
                                     , AJDI_CODE
                                  FROM PY_PAYSET
                                 WHERE PAYX_DATE = iPAYX_DATE
                                   AND WAGE_CODE = iWAGE_CODE
                                   AND EMPL_NUMB IN (SELECT EMPL_NUMB 
                                                       FROM PY_PMDCAL 
                                                      WHERE PAYX_DATE = iPAYX_DATE
                                                        AND WAGE_CODE = iWAGE_CODE
                                                        AND CLSD_CODE = CUR_CLSD.CLSD_CODE
                                                        AND PROC_YSNO = '0'
                                        )                        
                                   AND EXPD_CODE = RS.EXPD_CODE) B
                            ON (A.PAYX_DATE = B.PAYX_DATE
                           AND A.WAGE_CODE = B.WAGE_CODE 
                           AND A.EMPL_NUMB = B.EMPL_NUMB
                           AND A.EXPD_CODE = B.EXPD_CODE)
                           
                        WHEN NOT MATCHED THEN 
                    
                            INSERT  (
                                 PAYX_DATE   /*지급일*************/
                                ,WAGE_CODE   /*급여코드*************/
                                ,EMPL_NUMB   /*사원번호*************/
                                ,EXPD_CODE   /*수당공제코드*************/
                                ,EXPD_AMOT   /*수당공제금액*************/
                                ,NTAX_INCM   /*비과세소득*************/
                                ,RTRC_AMOT   /*소급금액*************/
                                ,INIT_AMOT   /*초기금액*************/
                                ,WAGE_YMTH
                                ,INST_USID   /*입력작업자*************/
                                ,INST_DATE   /*입력일시*************/
                                ,UPDT_USID   /*수정작업자*************/
                                ,UPDT_DATE   /*수정일시*************/
                            ) VALUES (
                                 B.PAYX_DATE
                                ,B.WAGE_CODE
                                ,B.EMPL_NUMB
                                ,B.EXPD_CODE
                                ,CASE WHEN B.AJDI_CODE = '1' THEN B.ADJT_RAPY 
                                      WHEN B.AJDI_CODE = '2' THEN 0
                                      WHEN B.AJDI_CODE = '3' THEN B.ADJT_RAPY 
                                      WHEN B.AJDI_CODE = '4' THEN 0
                                      ELSE 0 END
                                ,0
                                ,0                  
                                ,CASE WHEN B.AJDI_CODE = '1' THEN B.ADJT_RAPY 
                                      WHEN B.AJDI_CODE = '2' THEN 0
                                      WHEN B.AJDI_CODE = '3' THEN B.ADJT_RAPY 
                                      WHEN B.AJDI_CODE = '4' THEN 0
                                      ELSE 0 END
                                ,iWAGE_YMTH
                                ,iUPDT_USID
                                ,SYSDATE
                                ,iUPDT_USID
                                ,SYSDATE
                            )
                        WHEN MATCHED THEN
                    
                            UPDATE SET A.EXPD_AMOT = CASE WHEN B.AJDI_CODE = '1' THEN A.EXPD_AMOT + B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '2' THEN A.EXPD_AMOT * B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '3' THEN B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '4' THEN A.EXPD_AMOT * B.ADJT_RAPY / TO_NUMBER(SUBSTR(v_STDS_DATE,7,2))
                                                          ELSE A.EXPD_AMOT END
                                      ,A.INIT_AMOT = CASE WHEN B.AJDI_CODE = '1' THEN A.EXPD_AMOT + B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '2' THEN A.EXPD_AMOT * B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '3' THEN B.ADJT_RAPY 
                                                          WHEN B.AJDI_CODE = '4' THEN A.EXPD_AMOT * B.ADJT_RAPY / TO_NUMBER(SUBSTR(v_STDS_DATE,7,2))
                                                          ELSE A.EXPD_AMOT END
                             ;
                    
                    /*원단위 절사*************/
                    UPDATE PY_PMDETL A
                       SET (EXPD_AMOT, INIT_AMOT)  = 
                               (SELECT CASE WHEN B.WOND_CODE = '1' THEN TRUNC(A.EXPD_AMOT,-1) 
                                            WHEN B.WOND_CODE = '2' THEN ROUND(A.EXPD_AMOT,-1)
                                            WHEN B.WOND_CODE = '3' THEN TRUNC(A.EXPD_AMOT,0)
                                            WHEN B.WOND_CODE = '4' THEN CEIL(A.EXPD_AMOT/10)*10
                                            ELSE A.EXPD_AMOT END
                                     , CASE WHEN B.WOND_CODE = '1' THEN TRUNC(A.INIT_AMOT,-1)
                                            WHEN B.WOND_CODE = '2' THEN ROUND(A.INIT_AMOT,-1)
                                            WHEN B.WOND_CODE = '3' THEN TRUNC(A.INIT_AMOT,0)
                                            WHEN B.WOND_CODE = '4' THEN CEIL(A.INIT_AMOT/10)*10
                                            ELSE A.INIT_AMOT END
                                  FROM PY_ALLDED B
                                 WHERE A.EXPD_CODE = B.EXPD_CODE)
                     WHERE A.PAYX_DATE = iPAYX_DATE
                       AND A.WAGE_CODE = iWAGE_CODE
                       AND A.EMPL_NUMB IN (SELECT EMPL_NUMB 
                                             FROM PY_PMDCAL 
                                            WHERE PAYX_DATE = iPAYX_DATE
                                              AND WAGE_CODE = iWAGE_CODE
                                              AND PROC_YSNO = '0'
                                            )
                       AND A.EXPD_CODE = RS.EXPD_CODE;
                       
                       
                    --월별 소급금액을 해당 급여상세의 소급금액에 저장한다.
                    FOR REPAY IN (                      
                        SELECT EMPL_NUMB
                             , RTBS_YMTH
                             , NVL(RTR1_AMOT,0) RTR1_AMOT
                             , NVL(RTR2_AMOT,0) RTR2_AMOT
                          FROM PY_REPAYD
                         WHERE PAYX_DATE = iPAYX_DATE
                           AND WAGE_CODE = iWAGE_CODE
                        ORDER BY EMPL_NUMB, RTBS_YMTH                        
                    ) LOOP
                        
                        IF (REPAY.RTR1_AMOT != 0) THEN
                            UPDATE PY_PMDETL A
                               SET RTRC_AMOT = CASE WHEN EXPD_CODE = 'A0051' THEN REPAY.RTR1_AMOT
                                                    WHEN EXPD_CODE = 'A0066' THEN REPAY.RTR2_AMOT
                                                    ELSE 0
                                                    END                                                  
                             WHERE A.EMPL_NUMB = REPAY.EMPL_NUMB
                               AND A.EXPD_CODE IN ('A0051', 'A0066')                               
                               AND EXISTS ( SELECT 'Y'
                                              FROM PY_PMDIRY Z
                                             WHERE Z.WAGE_CODE = '1000'   --일반급여        
                                               AND Z.WAGE_YMTH = REPAY.RTBS_YMTH  
                                               AND Z.PAYX_DATE = A.PAYX_DATE
                                               AND Z.WAGE_CODE = A.WAGE_CODE )
                            ;
                        END IF;
                       
                    END LOOP; /*REPAY*************/
                      
                    END LOOP; /*RS*************/
                END LOOP; /*CUR_CLSD*************/    
                   
                --압류상환처리
--            FOR CUR_SIZR IN (
--                SELECT A.EMPL_NUMB   /*사원번호*/
--                      ,A.SRAL_NUMB   /*일련번호*/
--                      ,A.DMND_AMOT
--                      ,A.DEDN_CODE    
--                      ,B.PAYX_DATE
--                      ,B.WAGE_CODE
--                      ,B.EXPD_AMOT --금회 공제금액
--                      ,NVL(D.RPAY_AMOT,0) AS RPAY_AMOT --상환금액
--                      ,NVL(C.SIZR_CONT,0) AS SIZR_CONT --압류건수
--                      ,NVL(C.DMND_SUMT,0) AS DMND_SUMT 
--                      ,NVL(E.DMND_SUMA,0) AS DMND_SUMA 
--                      ,ROW_NUMBER() OVER (PARTITION BY A.EMPL_NUMB ORDER BY A.ACCP_DATE) AS ROWN
--                  FROM PY_SIZRXM A
--             LEFT JOIN ( SELECT EMPL_NUMB
--                              , SRAL_NUMB
--                              , NVL(SUM(RPAY_AMOT),0) AS RPAY_AMOT
--                           FROM PY_SIZRXD
--                       GROUP BY EMPL_NUMB, SRAL_NUMB
--                  ) D
--                    ON A.EMPL_NUMB = D.EMPL_NUMB
--                   AND A.SRAL_NUMB = D.SRAL_NUMB
--             LEFT JOIN ( SELECT Z.EMPL_NUMB
--                              , COUNT(Z.EMPL_NUMB) AS SIZR_CONT    
--                              , SUM(DMND_AMOT) AS DMND_SUMT  --전체총액                                     
--                          FROM PY_SIZRXM Z
--                         WHERE Z.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                                 FROM PY_PMDCAL 
--                                                WHERE PAYX_DATE = iPAYX_DATE
--                                                  AND WAGE_CODE = iWAGE_CODE
--                                                  AND PROC_YSNO = '0'
--                                              )    
--                           AND Z.CMPL_YSNO = '0'
--                           AND Z.BGIN_YMTH <= iWAGE_YMTH
--                      GROUP BY EMPL_NUMB
--                  ) C
--                    ON A.EMPL_NUMB = C.EMPL_NUMB
--             LEFT JOIN ( SELECT Z.EMPL_NUMB
--                              , SUM(DMND_AMOT) AS DMND_SUMA --전부추심까지 총액
--                           FROM PY_SIZRXM Z
--                          WHERE Z.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                                  FROM PY_PMDCAL 
--                                                 WHERE PAYX_DATE = iPAYX_DATE
--                                                   AND WAGE_CODE = iWAGE_CODE
--                                                   AND PROC_YSNO = '0'
--                                                 )    
--                           AND Z.CMPL_YSNO = '0'
--                           AND Z.BGIN_YMTH <= iWAGE_YMTH
--                           AND Z.ACCP_DATE <= (SELECT NVL(MIN(X.ACCP_DATE),'29991231')
--                                                 FROM PY_SIZRXM X
--                                                WHERE X.EMPL_NUMB = Z.EMPL_NUMB
--                                                  AND X.CMPL_YSNO = '0' 
--                                                  AND X.BGIN_YMTH <= iWAGE_YMTH 
--                                                  AND X.DEDN_CODE = '2'
--                                                )
--                      GROUP BY EMPL_NUMB
--                  ) E
--                    ON A.EMPL_NUMB = E.EMPL_NUMB                   
--            INNER JOIN PY_PMDETL B
--                    ON B.PAYX_DATE = iPAYX_DATE
--                   AND B.WAGE_CODE = iWAGE_CODE
--                   AND B.EMPL_NUMB = A.EMPL_NUMB
--                   AND B.EXPD_CODE = 'D2120'    --급여압류
--                 WHERE A.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                         FROM PY_PMDCAL 
--                                        WHERE PAYX_DATE = iPAYX_DATE
--                                          AND WAGE_CODE = iWAGE_CODE
--                                          AND PROC_YSNO = '0'
--                                       )    
--                   AND A.CMPL_YSNO = '0'
--                   AND A.BGIN_YMTH <= iWAGE_YMTH        
--              ORDER BY A.EMPL_NUMB, A.ACCP_DATE --접수일순
--            ) LOOP
--                --상환금액
--                IF CUR_SIZR.ROWN = 1 THEN
--                    v_EXPD_AMOT := CUR_SIZR.EXPD_AMOT;    --공제금액
--                    v_RPAY_AMOT := 0;                    --이번회차 상환금액
--                    v_DMND_SUMA := CUR_SIZR.DMND_SUMA;
--                ELSE
--                    v_EXPD_AMOT := v_EXPD_AMOT - v_RPAY_AMOT;
--                    IF v_DMND_SUMA = 0 THEN --전부추심 이후
--                        v_DMND_SUMA := CUR_SIZR.DMND_SUMT - CUR_SIZR.DMND_SUMA;
--                    END IF;
--                END IF;    
--
--                v_RPAY_AMOT := CASE WHEN CUR_SIZR.DMND_AMOT - CUR_SIZR.RPAY_AMOT < v_EXPD_AMOT * CASE WHEN CUR_SIZR.DEDN_CODE = '2' THEN 1 ELSE (CUR_SIZR.DMND_AMOT/v_DMND_SUMA) END
--                                       THEN CUR_SIZR.DMND_AMOT - CUR_SIZR.RPAY_AMOT 
--                                       ELSE v_EXPD_AMOT * CASE WHEN CUR_SIZR.DEDN_CODE = '2' THEN 1 ELSE (CUR_SIZR.DMND_AMOT/v_DMND_SUMA) END  
--                                       END;
--
--                v_DMND_SUMA := v_DMND_SUMA - CUR_SIZR.DMND_AMOT;

--                INSERT INTO PY_SIZRXD (
--                       EMPL_NUMB   /*사원번호*/
--                     , SRAL_NUMB   /*일련번호*/
--                     , RPAY_DATE   /*상환일*/
--                     , REDE_CODE   /*상환구분코드*/
--                     , WAGE_CODE   /*급여코드*/
--                     , RPAY_AMOT   /*상환금액*/
--                     , REMK_100X   /*비고100*/
--                     , INST_USID   /*입력작업자*/
--                     , INST_DATE   /*입력일시*/
--                     , UPDT_USID   /*수정작업자*/
--                     , UPDT_DATE   /*수정일시*/
--                 ) VALUES (
--                       CUR_SIZR.EMPL_NUMB
--                     , CUR_SIZR.SRAL_NUMB
--                     , CUR_SIZR.PAYX_DATE
--                     , '1' --급여
--                     , CUR_SIZR.WAGE_CODE
--                     , v_RPAY_AMOT
--                     , '급여상환'
--                     , iUPDT_USID
--                     , SYSDATE
--                     , iUPDT_USID
--                     , SYSDATE
--                 );

--                IF CUR_SIZR.SIZR_CONT = CUR_SIZR.ROWN AND v_RPAY_AMOT < v_EXPD_AMOT THEN    --공제금액이 클경우
--                    --금회 상환금액
--                    SELECT NVL(SUM(RPAY_AMOT),0) INTO v_RPAY_AMOT
--                      FROM PY_SIZRXD
--                     WHERE EMPL_NUMB = CUR_SIZR.EMPL_NUMB
--                       AND RPAY_DATE = CUR_SIZR.PAYX_DATE
--                       AND WAGE_CODE = CUR_SIZR.WAGE_CODE;
--
--                    UPDATE PY_PMDETL 
--                       SET EXPD_AMOT = v_RPAY_AMOT
--                         , INIT_AMOT = v_RPAY_AMOT
--                     WHERE PAYX_DATE = CUR_SIZR.PAYX_DATE
--                       AND WAGE_CODE = CUR_SIZR.WAGE_CODE
--                       AND EMPL_NUMB = CUR_SIZR.EMPL_NUMB
--                       AND EXPD_CODE = 'D2120';
--          
--                END IF;
--            END LOOP;


--             INSERT INTO PY_SISCXD (
--                    EMPL_NUMB   /*사원번호*/
--                   ,SRAL_NUMB   /*일련번호*/
--                   ,RPAY_DATE   /*상환일*/
--                   ,REDE_CODE   /*상환구분코드*/
--                   ,WAGE_CODE   /*급여코드*/
--                   ,RPAY_AMOT   /*상환금액*/
--                   ,REMK_100X   /*비고100*/
--                   ,INST_USID   /*입력작업자*/
--                   ,INST_DATE   /*입력일시*/
--                   ,UPDT_USID   /*수정작업자*/
--                   ,UPDT_DATE   /*수정일시*/
--           ) SELECT A.EMPL_NUMB   /*사원번호*/
--                   ,A.SRAL_NUMB  /*일련번호*/
--                   ,iPAYX_DATE   /*상환일*/
--                   ,'1'   /*상환구분코드*/
--                   ,iWAGE_CODE   /*급여코드*/
--                   ,EXPD_AMOT   /*상환금액*/
--                   ,'급여상환'   /*비고100*/
--                   ,iUPDT_USID
--                   ,SYSDATE
--                   ,iUPDT_USID
--                   ,SYSDATE
--               FROM PY_SISCXM A
--              INNER JOIN PY_PMDETL B
--                 ON B.PAYX_DATE = iPAYX_DATE
--                AND B.WAGE_CODE = iWAGE_CODE 
--                AND B.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                      FROM PY_PMDCAL 
--                                     WHERE PAYX_DATE = iPAYX_DATE
--                                       AND WAGE_CODE = iWAGE_CODE
--                                       AND PROC_YSNO = '0'
--                                    )  
--                AND B.EXPD_CODE = 'D2360'
--                AND A.EMPL_NUMB = B.EMPL_NUMB ;


            --압류 해제
--            UPDATE PY_SIZRXM A
--               SET CMPL_YSNO = (SELECT CASE WHEN A.DMND_AMOT - NVL(D.RPAY_AMOT,0) > 0 THEN '0' ELSE '1' END
--                                  FROM (SELECT EMPL_NUMB
--                                             , SRAL_NUMB
--                                             , NVL(SUM(RPAY_AMOT),0) AS RPAY_AMOT
--                                          FROM PY_SIZRXD
--                                      GROUP BY EMPL_NUMB, SRAL_NUMB
--                                  ) D
--                                 WHERE A.EMPL_NUMB = D.EMPL_NUMB
--                                   AND A.SRAL_NUMB = D.SRAL_NUMB)
--             WHERE A.CNAP_DATE IS NULL
--               AND A.MWCN_DATE IS NULL
--               AND A.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                     FROM PY_PMDCAL 
--                                    WHERE PAYX_DATE = iPAYX_DATE
--                                      AND WAGE_CODE = iWAGE_CODE
--                                      AND PROC_YSNO = '0'
--                                 ) ; 
--
--            UPDATE PY_SISCXM A
--               SET CMPL_YSNO = (SELECT CASE WHEN A.DMND_AMOT - NVL(D.RPAY_AMOT,0) > 0 THEN '0' ELSE '1' END
--                                  FROM (SELECT EMPL_NUMB
--                                             , SRAL_NUMB
--                                             , NVL(SUM(RPAY_AMOT),0) AS RPAY_AMOT
--                                          FROM PY_SISCXD
--                                      GROUP BY EMPL_NUMB, SRAL_NUMB
--                                  ) D
--                                 WHERE A.EMPL_NUMB = D.EMPL_NUMB
--                                   AND A.SRAL_NUMB = D.SRAL_NUMB)
--             WHERE A.CNAP_DATE IS NULL
--               AND A.MWCN_DATE IS NULL
--               AND A.EMPL_NUMB IN (SELECT EMPL_NUMB 
--                                     FROM PY_PMDCAL 
--                                    WHERE PAYX_DATE = iPAYX_DATE
--                                      AND WAGE_CODE = IWAGE_CODE
--                                      AND PROC_YSNO = '0'
--                                 )  ;
        END IF;    /*SAVETYPE*************/      
        /*총지급액, 총공제액 UPDATE*************/
        UPDATE PY_PMMAST A
          SET (PAYX_AMOT, DDUC_AMOT, ODNY_WAGE) = (
            SELECT SUM(CASE WHEN B.EXPD_CODE LIKE 'A%' THEN B.EXPD_AMOT ELSE 0 END)
                  ,SUM(CASE WHEN B.EXPD_CODE LIKE 'D%' THEN B.EXPD_AMOT ELSE 0 END)
                  ,SUM(CASE WHEN C.ODPY_YSNO = '1' THEN B.INIT_AMOT ELSE 0 END)
               FROM PY_PMDETL B  
         INNER JOIN PY_ALLDED C
                 ON B.EXPD_CODE = C.EXPD_CODE
              WHERE A.PAYX_DATE = B.PAYX_DATE
                AND A.WAGE_CODE = B.WAGE_CODE
                AND A.EMPL_NUMB = B.EMPL_NUMB
            )
        WHERE A.PAYX_DATE = iPAYX_DATE
          AND A.WAGE_CODE = iWAGE_CODE
          /*
          AND A.EMPL_NUMB IN (SELECT EMPL_NUMB 
                                  FROM PY_PMDCAL 
                                 WHERE PAYX_DATE = iPAYX_DATE
                                   AND WAGE_CODE = iWAGE_CODE
                                   AND PROC_YSNO = '0'
                                )    
          **********/
          ;   
          
                              
        UPDATE PY_PMDCAL 
           SET PROC_YSNO = '1'
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND PROC_YSNO = '0' ;  
                
                
        END;
    
    /**********************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-20
        내      용 : 급여처리로그
    **********************************************************/
    PROCEDURE SP_PAYB0170_LOG (
         iUPDT_USID   IN PY_PMDLOG.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDLOG.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDLOG.WAGE_CODE%TYPE   --급여코드
        ,iEMPL_NUMB   IN PY_PMDLOG.EMPL_NUMB%TYPE   --사원번호
        ,iEXPD_CODE   IN PY_PMDLOG.EXPD_CODE%TYPE   --수당공제코드
        ,iAPLY_MODN   IN PY_PMDLOG.APLY_MODN%TYPE   --계산식
    ) AS
    BEGIN
    
        INSERT INTO PY_PMDLOG (
               PAYX_DATE    /*지급일*************/
             , WAGE_CODE    /*급여코드*************/
             , EMPL_NUMB    /*사원번호*************/
             , EXPD_CODE    /*수당공제코드*************/
             , SRAL_NUMB    /*일련번호*************/
             , APLY_MODN    /*적용수식*************/
             , INST_USID    /*입력작업자*************/
             , INST_DATE    /*입력일시*************/
             , UPDT_USID    /*수정작업자*************/
             , UPDT_DATE    /*수정일시*************/
      ) VALUES (
               iPAYX_DATE  /*지급일*************/
             , iWAGE_CODE  /*급여코드*************/
             , iEMPL_NUMB  /*사원번호*************/
             , iEXPD_CODE  /*수당공제코드*************/
             , (SELECT NVL(MAX(SRAL_NUMB),0) + 1 FROM PY_PMDLOG WHERE PAYX_DATE = iPAYX_DATE AND WAGE_CODE = iWAGE_CODE AND EMPL_NUMB = iEMPL_NUMB AND EXPD_CODE = iEXPD_CODE)  /*일련번호*************/
             , iAPLY_MODN  /*적용수식*************/
             , iUPDT_USID  /*입력작업자*************/
             , SYSDATE      /*입력일시*************/
             , iUPDT_USID  /*수정작업자*************/
             , SYSDATE      /*수정일시*************/
      );
    EXCEPTION
      WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20000, '지급일='||iPAYX_DATE||'사원번호='||iEMPL_NUMB||', 수당공제코드='||iEXPD_CODE);
    
    END;

    /**********************************************
        작  성  자 : 이용관
        작  성  일 : 2016-11-29
        내      용 : 급여대상자삭제
    **********************************************************/
    PROCEDURE SP_PAYB0170_PROC03 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDCAL.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDCAL.WAGE_CODE%TYPE   --급여코드
        ,iEMPL_NUMB   IN PY_PMDCAL.EMPL_NUMB%TYPE   --사원번호
    ) AS
        nCNT  INT;
            v_WADE_YSNO PY_PMDIRY.WADE_YSNO%TYPE; /*급여마감여부*************/
    BEGIN

        /*급여마감여부체크*************/
        /*급여일지정보*************/      
        SELECT A.WADE_YSNO           
          INTO v_WADE_YSNO
          FROM PY_PMDIRY A
                 LEFT JOIN PY_PAYCOD B
                        ON A.WAGE_CODE = B.WAGE_CODE
         WHERE A.PAYX_DATE = iPAYX_DATE
           AND A.WAGE_CODE = iWAGE_CODE;
              
        /*마감되었다면 수정불가*************/
        IF v_WADE_YSNO = '1' THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047')); 
        END IF;
    
    
        /* 급여상세에 데이터 건수 조회*************/
        SELECT COUNT(*)
          INTO nCNT
          FROM PY_PMDETL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = iEMPL_NUMB;
        
        IF (nCNT > 0) THEN
            RAISE_APPLICATION_ERROR(-20000, '사원번호[' || iEMPL_NUMB ||']의 급여내역을 삭제하신 후 대상자삭제를 처리하세요.'); 
        END IF;
        
        --대상삭제
        DELETE FROM PY_PMDCAL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = iEMPL_NUMB
        ;
        
        --급여삭제
        DELETE FROM PY_PMDETL
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = iEMPL_NUMB
        ;
        
        DELETE FROM PY_PMMAST
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE
           AND EMPL_NUMB = iEMPL_NUMB
        ;        
        
    END;
    
END PKG_PAYB0170;