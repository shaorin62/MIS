CREATE OR REPLACE -- added during DDL generation.
PACKAGE BODY "PKG_PAYC0255" AS

    /**********************************************
        작  성  자 : 이용관
        작  성  일 : 2016-09-20
        내      용 : 소급계산
    ************************************************/
    PROCEDURE SP_PAYC0255_PROC00 (
         iUPDT_USID   IN PY_PMDCAL.UPDT_USID%TYPE   --수정자
        ,iPAYX_DATE   IN PY_PMDCAL.PAYX_DATE%TYPE   --지급일
        ,iWAGE_CODE   IN PY_PMDCAL.WAGE_CODE%TYPE   --급여코드
        ,iRTBG_YMTH   IN PY_REPAYX.RTBG_YMTH%TYPE   --소급시작년월
        ,iRTED_YMTH   IN PY_REPAYX.RTED_YMTH%TYPE   --소급종료년월
    ) AS

        v_ROWCNT INT;
        v_WADE_YSNO PY_PMDIRY.WADE_YSNO%TYPE; /*급여마감여부***/
        v_STDS_DATE NVARCHAR2(8); /*기준일***/

        v_RTBG_YMTH PY_REPAYX.RTBG_YMTH%TYPE; /*소급시작년월***/
        v_RTED_YMTH PY_REPAYX.RTED_YMTH%TYPE; /*소급종료년월***/

        v_TEMP_PAYAMT NUMBER;  /*수당공제액(일할계산)***/
        v_PAYAMT      NUMBER;  /*수당공제액***/
        v_INIT_AMOT   NUMBER;  /*수당공제액(초기금액)***/

        rRESULT REC_TYPE;

        /*급여수식 커서대체***/
        v_APLY_MODN PY_PAYEXP.APLY_MODN%TYPE;   /*적용수식***/
        v_FLAG NVARCHAR2(1);
        v_PAYX_RATE PY_PYRATE.PAYX_RATE%TYPE;

        --압류
        v_EXPD_AMOT PY_PMDETL.EXPD_AMOT%TYPE; --공제금액
        v_RPAY_AMOT PY_PMDETL.EXPD_AMOT%TYPE; --이번회차 상환금액
        v_DMND_SUMA PY_PMDETL.EXPD_AMOT%TYPE;

        v_INDEX1 INT;
        v_INDEX2 INT;
        v_RETURN NVARCHAR2(4000);

    BEGIN

        -- ---------------------------------------------------------------------
        -- 급여마감여부체크
        -- ---------------------------------------------------------------------
        /*급여일지정보***/
        BEGIN
            SELECT A.WADE_YSNO
              INTO v_WADE_YSNO
              FROM PY_PMDIRY A
             WHERE A.PAYX_DATE = iPAYX_DATE
               AND A.WAGE_CODE = iWAGE_CODE;
        EXCEPTION
            WHEN OTHERS THEN
              RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047') ||iPAYX_DATE || ' ' ||iWAGE_CODE);
        END;

        /*마감되었다면 수정불가***/
        IF v_WADE_YSNO = '1' THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY047'));
        END IF;

        -- ---------------------------------------------------------------------
        -- 대상자삭제
        -- ---------------------------------------------------------------------
        DELETE FROM PY_REPAYD
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE;

        DELETE FROM PY_REPAYX
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE;
        -- ---------------------------------------------------------------------
        -- 대상자 생성
        -- ---------------------------------------------------------------------
        INSERT INTO PY_REPAYX
             ( PAYX_DATE    --지급일
             , WAGE_CODE    --급여코드
             , RTBG_YMTH    --소급시작년월
             , RTED_YMTH    --소급종료년월
             , INST_USID    --입력작업자
             , INST_DATE    --입력일시
             , UPDT_USID    --수정작업자
             , UPDT_DATE    --수정일시
             ) VALUES (
               iPAYX_DATE
             , iWAGE_CODE
             , iRTBG_YMTH
             , iRTED_YMTH
             , iUPDT_USID
             , SYSDATE
             , iUPDT_USID
             , SYSDATE
             );

        v_RTBG_YMTH :=     iRTBG_YMTH;
        v_RTED_YMTH :=     iRTED_YMTH;

        IF (LENGTH(v_RTBG_YMTH) != 6 OR LENGTH(v_RTED_YMTH) != 6) THEN
            RAISE_APPLICATION_ERROR(-20000, SF_GET_MESSAGE('PAY067')); --먼저 소급기간을 입력하신 후 소급처리를 하세요.
        END IF;

        --소급대상자 생성
        INSERT INTO PY_REPAYD
             ( PAYX_DATE    --지급일
             , WAGE_CODE    --급여코드
             , EMPL_NUMB    --사원번호
             , RTBS_YMTH    --소급년월
             , RTB1_AMOT    --소급전1금액(기본급)
             , RTB2_AMOT    --소급전2금액(연장수당)
             , RTB3_AMOT    --소급전3금액(인원상여)
             , RTB4_AMOT    --소급전4금액(휴일근무수당)
             , RTB5_AMOT    --소급전5금액
             , RTA1_AMOT    --소급후1금액(기본급)
             , RTA2_AMOT    --소급후2금액(연장수당)
             , RTA3_AMOT    --소급후3금액(인원상여)
             , RTA4_AMOT    --소급후4금액(휴일근무수당)
             , RTA5_AMOT    --소급후5금액
             , RTR1_AMOT    --소급1금액(기본급)
             , RTR2_AMOT    --소급2금액(연장수당)
             , RTR3_AMOT    --소급3금액(인원상여)
             , RTR4_AMOT    --소급4금액(휴일근무수당)
             , RTR5_AMOT    --소급5금액
             , HOWK_DAYS    --휴일근무일수
             , INST_USID    --입력작업자
             , INST_DATE    --입력일시
             , UPDT_USID    --수정작업자
             , UPDT_DATE    --수정일시
             )
        SELECT iPAYX_DATE     --지급일
             , iWAGE_CODE     --급여코드
             , A.EMPL_NUMB  --사원번호
             , B.WAGE_YMTH  --소급년월
             , SUM(CASE WHEN A.EXPD_CODE = 'A0051' THEN A.EXPD_AMOT ELSE 0 END) --소급전1금액(기본급)
             , SUM(CASE WHEN A.EXPD_CODE = 'A0066' THEN A.EXPD_AMOT ELSE 0 END) --소급전2금액(연장수당)
             , SUM(CASE WHEN A.EXPD_CODE = 'A0052' THEN A.EXPD_AMOT ELSE 0 END) --소급전3금액(인원상여)
             , SUM(CASE WHEN A.EXPD_CODE = 'A9008' THEN A.EXPD_AMOT ELSE 0 END) --소급전4금액(휴일근무수당)
             , 0    --소급전5급액
             , 0    --소급후1금액(기본급)
             , 0    --소급후2금액(연장수당)
             , 0    --소급후3금액(인원상여)
             , 0    --소급후4금액(휴일근무수당)
             , 0    --소급후5금액
             , 0    --소급1금액(기본급)
             , 0    --소급2금액(연장수당)
             , 0    --소급3금액(인원상여)
             , 0    --소급4금액(휴일근무수당)
             , 0    --소급5금액
             , NVL(D.HOWK_DAYS, 0)  --휴일근무일수
             , iUPDT_USID
             , SYSDATE
             , iUPDT_USID
             , SYSDATE
          FROM PY_PMDIRY B
         INNER JOIN PY_PMDETL A
                 ON A.PAYX_DATE = B.PAYX_DATE
                AND A.WAGE_CODE = B.WAGE_CODE
         INNER JOIN HR_MASTXM C
                 ON A.EMPL_NUMB = C.EMPL_NUMB
         INNER JOIN PY_PMMAST D
                 ON D.PAYX_DATE = A.PAYX_DATE
                AND D.WAGE_CODE = A.WAGE_CODE                 
                AND D.EMPL_NUMB = A.EMPL_NUMB
         WHERE B.WAGE_YMTH BETWEEN v_RTBG_YMTH AND v_RTED_YMTH
           AND B.WAGE_CODE = '1000'
           AND A.EXPD_CODE IN ('A0051', 'A0066', 'A0052', 'A9008')  --A0051:기본급(급여), A0066:연장수당, A0052:상여금, A9008:주휴근무수당
           AND A.EXPD_AMOT != 0
           AND C.WODN_CODE = '1'                  --재직자만 소급 대상임
        GROUP BY A.EMPL_NUMB, B.WAGE_YMTH, D.HOWK_DAYS
        ;

        -- ---------------------------------------------------------------------
        -- 인상금액 계산
        -- ---------------------------------------------------------------------
        FOR SUB IN (
          SELECT EMPL_NUMB
               , RTBS_YMTH
               , RTB1_AMOT
               , RTB2_AMOT
               , RTBS_YMTH||TO_CHAR(LAST_DAY(RTBS_YMTH || '01'), 'DD')    PAYX_DATE
               , '4000' AS  WAGE_CODE
            FROM PY_REPAYD
           WHERE PAYX_DATE = iPAYX_DATE
             AND WAGE_CODE = iWAGE_CODE
          ORDER BY EMPL_NUMB, RTBS_YMTH

        ) LOOP

          v_STDS_DATE := TO_CHAR(LAST_DAY(SUB.RTBS_YMTH || '01'), 'YYYYMMDD');

          -- 급여일할계산 대상 삭제
          DELETE FROM PY_PMDCAL
           WHERE PAYX_DATE = SUB.PAYX_DATE
             AND WAGE_CODE = SUB.WAGE_CODE
             AND EMPL_NUMB = SUB.EMPL_NUMB
          ;

          -- 급여일할계산 상태값 저장
          INSERT INTO PY_PMDCAL (
                       PAYX_DATE    /*지급일***/
                     , WAGE_CODE    /*급여코드***/
                     , EMPL_NUMB    /*사원번호***/
                     , STDS_DATE    /*기준일***/
                     , WRKS_CODE    /*근무상태코드***/
                     , WRDV_CODE    /*근무구분코드***/
                     , CLSD_CODE    /*직원구분코드***/
                     , DEPT_CODE    /*부서코드***/
                     --, JBGP_CODE    /*직군코드*/
                     , CPOS_CODE    /*직급코드***/
                     , PSTP_CODE    /*호봉코드***/
                     , OPOS_CODE    /*직위코드***/
                     , DUTY_CODE    /*직무코드***/
                     , DURS_CODE    /*직책코드***/
                     , REWK_DCNT    /*실제근무일수***/
                     , FWRK_DCNT    /*전체근무일수***/
                     , USIT_YSNO    /*사용자입력여부***/
                     , INST_USID    /*입력작업자***/
                     , INST_DATE    /*입력일시***/
                     , UPDT_USID    /*수정작업자***/
                     , UPDT_DATE    /*수정일시***/
              ) SELECT SUB.PAYX_DATE    /*지급일***/
                     , SUB.WAGE_CODE    /*급여코드***/
                     , A.EMPL_NUMB    /*사원번호***/
                     , SUB.RTBS_YMTH || '01'    /*기준일***/
                     , CASE WHEN A.WRKS_CODE = '08' AND A.RETR_DATE = SUB.RTBS_YMTH || '01' THEN UNISTR('01') ELSE A.WRKS_CODE END    /*근무상태코드***/
                     , A.WRDV_CODE    /*근무구분코드***/
                     , A.CLSD_CODE    /*직원구분코드***/
                     , A.DEPT_CODE    /*부서코드***/
                     --, A.JBGP_CODE    /*직군코드*/
                     , A.CPOS_CODE    /*직급코드***/
                     , A.PSTP_CODE    /*호봉코드***/
                     , A.OPOS_CODE    /*직위코드***/
                     , A.DUTY_CODE    /*직무코드***/
                     , A.DURS_CODE    /*직책코드***/
                     , 0              /*실제근무일수***/
                     , 0              /*전체근무일수***/
                     , CASE WHEN A.WRKS_CODE IN ('03','04','05','06','07') THEN '1' ELSE '0' END    /*사용자입력여부***/
                     , iUPDT_USID     /*입력작업자***/
                     , SYSDATE        /*입력일시***/
                     , iUPDT_USID     /*수정작업자***/
                     , SYSDATE        /*수정일시***/
                  FROM PY_MASTPM B
                 INNER JOIN TABLE(SF_HR_MASTXM(B.EMPL_NUMB, SUB.RTBS_YMTH || '01')) A
                         ON B.EMPL_NUMB = A.EMPL_NUMB
                        --AND A.CLSD_CODE IN (SELECT COLUMN_VALUE FROM TABLE(SPLIT(v_CLSD_CNTT, ',')))
                  LEFT JOIN PY_PAYRET C
                         ON C.PAYX_DATE LIKE SUB.RTBS_YMTH||'%'
                        AND C.WAGE_CODE = '1000'
                        AND C.EMPL_NUMB = SUB.EMPL_NUMB
                 WHERE (A.WODN_CODE = '1' OR C.EMPL_NUMB IS NOT NULL)
                   AND A.ENCO_DATE <= SUB.RTBS_YMTH || '01'
                   AND A.EMPL_NUMB = SUB.EMPL_NUMB
                ;

          --발령정보
          FOR RS IN (
                SELECT B.EMPL_NUMB
                     , CASE WHEN B.WRKS_CODE = '08' THEN UNISTR(TO_CHAR(TO_DATE(B.APNT_DATE,'YYYYMMDD') + 1,'YYYYMMDD')) ELSE B.APNT_DATE END AS APNT_DATE
                     , B.APDN_CODE  /*발령구분코드***/
                     , B.WRKS_CODE  /*근무상태코드***/
                     , B.WRDV_CODE  /*근무구분코드***/
                     , A.CLSD_CODE  /*직원구분코드***/
                     , B.DEPT_CODE  /*발령_부서***/
                     --, B.JBGP_CODE
                     , B.CPOS_CODE  /*직급코드***/
                     , B.PSTP_CODE  /*호봉코드***/
                     , B.OPOS_CODE  /*발령_직위***/
                     , B.DUTY_CODE  /*직무코드***/
                     , B.DURS_CODE  /*직책코드***/
                     , B.APNT_ENDD  /*휴직파견정직직위해제_발령종료일***/
                  FROM HR_APPOXM Z
                 INNER JOIN HR_APPOXD B
                         ON Z.APNT_HOCT = B.APNT_HOCT
                  LEFT JOIN HR_MASTXM A
                         ON B.EMPL_NUMB = A.EMPL_NUMB
                  LEFT JOIN TM_CODEXD D
                         ON D.COMM_CODE = 'APDN_CODE'
                        AND B.APDN_CODE = D.COMD_CODE
                 WHERE Z.APAL_YSNO = '1'
                   AND B.APNT_DATE LIKE SUB.RTBS_YMTH || '%'
                   AND D.REF4_FILD = '1'
                   AND B.EMPL_NUMB = SUB.EMPL_NUMB
                   --AND A.CLSD_CODE IN (SELECT COLUMN_VALUE FROM TABLE(SPLIT(v_CLSD_CNTT, ',')))
              ORDER BY B.EMPL_NUMB, B.APNT_DATE, B.APNT_SEQN  --DESC
            ) LOOP

                SELECT COUNT(*) INTO v_ROWCNT
                  FROM PY_PMDCAL
                 WHERE PAYX_DATE = SUB.PAYX_DATE
                   AND WAGE_CODE = SUB.WAGE_CODE
                   AND EMPL_NUMB = RS.EMPL_NUMB
                   AND STDS_DATE = RS.APNT_DATE;

                IF v_ROWCNT > 0 THEN
                    IF RS.WRKS_CODE = '08' THEN
                        UPDATE PY_PMDCAL
                           SET WRKS_CODE = RS.WRKS_CODE
                             , USIT_YSNO = '1'
                         WHERE PAYX_DATE = SUB.PAYX_DATE
                           AND WAGE_CODE = SUB.WAGE_CODE
                           AND EMPL_NUMB = RS.EMPL_NUMB
                           AND STDS_DATE = RS.APNT_DATE;
                    END IF;
                ELSIF RS.APNT_DATE LIKE SUB.RTBS_YMTH || '%' THEN
                     INSERT INTO PY_PMDCAL (
                                 PAYX_DATE    /*지급일***/
                               , WAGE_CODE    /*급여코드***/
                               , EMPL_NUMB    /*사원번호***/
                               , STDS_DATE    /*기준일***/
                               , WRKS_CODE    /*근무상태코드***/
                               , WRDV_CODE    /*근무구분코드***/
                               , CLSD_CODE    /*직원구분코드***/
                               , DEPT_CODE    /*부서코드***/
                               --, JBGP_CODE    /*직군코드*/
                               , CPOS_CODE    /*직급코드***/
                               , PSTP_CODE    /*호봉코드***/
                               , OPOS_CODE    /*직위코드***/
                               , DUTY_CODE    /*직무코드***/
                               , DURS_CODE    /*직책코드***/
                               , REWK_DCNT    /*실제근무일수***/
                               , FWRK_DCNT    /*전체근무일수***/
                               , USIT_YSNO    /*사용자입력여부***/
                               , PROC_YSNO    /*처리여부***/
                               , INST_USID    /*입력작업자***/
                               , INST_DATE    /*입력일시***/
                               , UPDT_USID    /*수정작업자***/
                               , UPDT_DATE    /*수정일시***/
                        ) VALUES (
                                 SUB.PAYX_DATE    /*지급일***/
                               , SUB.WAGE_CODE    /*급여코드***/
                               , RS.EMPL_NUMB    /*사원번호***/
                               , RS.APNT_DATE    /*기준일***/
                               , RS.WRKS_CODE    /*근무상태코드***/
                               , RS.WRDV_CODE    /*근무구분코드***/
                               , RS.CLSD_CODE    /*직원구분코드***/
                               , RS.DEPT_CODE    /*부서코드***/
                               --, RS.JBGP_CODE    /*직군코드*/
                               , RS.CPOS_CODE    /*직급코드***/
                               , RS.PSTP_CODE    /*호봉코드***/
                               , RS.OPOS_CODE    /*직위코드***/
                               , RS.DUTY_CODE    /*직무코드***/
                               , RS.DURS_CODE    /*직책코드***/
                               , 0              /*실제근무일수***/
                               , 0              /*전체근무일수***/
                               , '1'            /*사용자입력여부***/
                               , '0'            /*처리여부***/
                               , iUPDT_USID     /*입력작업자***/
                               , SYSDATE        /*입력일시***/
                               , iUPDT_USID     /*수정작업자***/
                               , SYSDATE        /*수정일시***/
                        );
                END IF;

            END LOOP;

          /*출산휴가 처리***/

          --실제근무일수, 전체근무일수 업데이트
          UPDATE PY_PMDCAL A
             SET REWK_DCNT = (SELECT NVL(TO_DATE(LEAD(STDS_DATE) OVER (PARTITION BY EMPL_NUMB ORDER BY STDS_DATE),'YYYYMMDD'), ADD_MONTHS(SUB.RTBS_YMTH || '01',1)) - TO_DATE(STDS_DATE,'YYYYMMDD')
                                FROM PY_PMDCAL B
                               WHERE A.PAYX_DATE = B.PAYX_DATE
                                 AND A.WAGE_CODE = B.WAGE_CODE
                                 AND A.EMPL_NUMB = B.EMPL_NUMB
                                 AND A.STDS_DATE = B.STDS_DATE)
               , FWRK_DCNT = TO_NUMBER(TO_CHAR(LAST_DAY(SUB.RTBS_YMTH || '01'), 'DD'))
           WHERE A.PAYX_DATE = SUB.PAYX_DATE
             AND A.WAGE_CODE = SUB.WAGE_CODE;

          --사용자입력여부 업데이트
          UPDATE PY_PMDCAL A
             SET USIT_YSNO = (SELECT 1 FROM ( SELECT PAYX_DATE
                                                   , WAGE_CODE
                                                   , EMPL_NUMB
                                                   , COUNT(EMPL_NUMB) AS CNT
                                                FROM PY_PMDCAL
                                               WHERE PAYX_DATE = SUB.PAYX_DATE
                                                 AND WAGE_CODE = SUB.WAGE_CODE
                                            GROUP BY PAYX_DATE, WAGE_CODE, EMPL_NUMB
                                              HAVING COUNT(EMPL_NUMB) > 1) B
                               WHERE A.PAYX_DATE = B.PAYX_DATE
                                 AND A.WAGE_CODE = B.WAGE_CODE
                                 AND A.EMPL_NUMB = B.EMPL_NUMB
                              )
           WHERE A.PAYX_DATE = SUB.PAYX_DATE
             AND A.WAGE_CODE = SUB.WAGE_CODE
             AND A.USIT_YSNO = '0';

          /*급여일지정보***/
          PKG_PAY_FUNC.g_TAX_INMON1  :=  SUB.RTBS_YMTH;
          PKG_PAY_FUNC.g_TAX_INMON2  :=  SUB.RTBS_YMTH;

          --RAISE_APPLICATION_ERROR(-20000, '데이터 값 SUB.PAYX_DATE='||SUB.PAYX_DATE||' SUB.WAGE_CODE='||SUB.WAGE_CODE||' SUB.EMPL_NUMB='||SUB.EMPL_NUMB );
          FOR CUR_CLSD IN (

              SELECT DISTINCT CLSD_CODE
                FROM PY_PMDCAL
               WHERE PAYX_DATE = SUB.PAYX_DATE
                 AND WAGE_CODE = SUB.WAGE_CODE
                 --AND PROC_YSNO = '0'
                 AND EMPL_NUMB = SUB.EMPL_NUMB
               ORDER BY CLSD_CODE

          ) LOOP
                --RAISE_APPLICATION_ERROR(-20000, '데이터 값 CUR_CLSD.CLSD_CODE='||CUR_CLSD.CLSD_CODE||' SUB.WAGE_CODE='||SUB.WAGE_CODE );
                    /*급여수식 RS***/
                    FOR RS IN (
                      SELECT A.STDS_YMTH
                       , A.EXPD_CODE
                       , A.APLY_MODN
                       , B.DAYC_YSNO  /*일할계산여부***/
                       , B.PADN_YSNO  /*지급공제여부***/
                       , B.WOND_CODE  /*원단위구분코드***/
                    FROM PY_PAYEXP A
                   INNER JOIN PY_ALLDED B
                           ON A.EXPD_CODE = B.EXPD_CODE
                   WHERE A.WAGP_CODE = '1000'
                     AND A.STDS_YMTH = (SELECT MAX(STDS_YMTH) FROM PY_PAYEXP
                                         WHERE WAGP_CODE = A.WAGP_CODE
                                           AND STDS_YMTH <= SUB.RTBS_YMTH
                                           AND CLSD_CODE = A.CLSD_CODE
                                       )
                     AND A.CLSD_CODE = CUR_CLSD.CLSD_CODE
                     AND A.EXPD_CODE IN ('A0051', 'A0066', 'A0052', 'A9008')  --A0051:기본급(급여), A0066:연장수당, A0052:상여금, A9008:주휴근무수당
                   ORDER BY SUBSTR(B.EXPD_CODE,1,1), B.CALC_ORDR
                    ) LOOP
                    --RAISE_APPLICATION_ERROR(-20000, '데이터 값 CUR_CLSD.CLSD_CODE='||CUR_CLSD.CLSD_CODE||' SUB.RTBS_YMTH='||SUB.RTBS_YMTH );

                   FOR RCAL IN (
                        SELECT A.EMPL_NUMB   /*사원번호***/
                             , A.STDS_DATE   /*기준일***/
                             , A.WRKS_CODE   /*근무상태코드***/
                             , A.WRDV_CODE   /*근무구분코드***/
                             , A.CLSD_CODE   /*직원구분코드***/
                             , A.DEPT_CODE   /*부서코드***/
                             , A.JBGP_CODE   /*직군코드***/
                             , A.CPOS_CODE   /*직급코드***/
                             , A.PSTP_CODE   /*호봉코드***/
                             , A.OPOS_CODE   /*직위코드***/
                             , A.DUTY_CODE   /*직무코드***/
                             , A.DURS_CODE   /*직책코드***/
                             , A.REWK_DCNT   /*실제근무일수***/
                             , A.FWRK_DCNT   /*전체근무일수***/
                             , ROW_NUMBER() OVER (PARTITION BY A.EMPL_NUMB ORDER BY A.STDS_DATE) AS ROWN
                          FROM PY_PMDCAL A
                         WHERE PAYX_DATE = SUB.PAYX_DATE
                           AND WAGE_CODE = SUB.WAGE_CODE
                           --AND PROC_YSNO = '0'
                           AND CLSD_CODE = CUR_CLSD.CLSD_CODE
                           AND REWK_DCNT > 0
                           AND EMPL_NUMB = SUB.EMPL_NUMB
                   ) LOOP
                        --RAISE_APPLICATION_ERROR(-20000, '데이터 값 SUB.PAYX_DATE='||SUB.PAYX_DATE||' SUB.WAGE_CODE='||SUB.WAGE_CODE||' CUR_CLSD.CLSD_CODE='||CUR_CLSD.CLSD_CODE||' SUB.EMPL_NUMB='||SUB.EMPL_NUMB );
                        v_PAYAMT      := 0;
                        v_INIT_AMOT   := 0;
                        v_TEMP_PAYAMT := 0;

                        /*발령에 따라 변경***/
                        PKG_PAY_FUNC.g_WRKS_CODE := RCAL.WRKS_CODE;   /*근무상태코드***/
                        PKG_PAY_FUNC.g_WRDV_CODE := RCAL.WRDV_CODE;  /*근무구분코드***/
                        PKG_PAY_FUNC.g_CLSD_CODE := RCAL.CLSD_CODE;  /*직원구분코드***/
                        PKG_PAY_FUNC.g_DEPT_CODE := RCAL.DEPT_CODE;  /*부서코드***/
                        PKG_PAY_FUNC.g_JBGP_CODE := RCAL.JBGP_CODE;  /*직군코드***/
                        PKG_PAY_FUNC.g_CPOS_CODE := RCAL.CPOS_CODE;  /*직급코드***/
                        PKG_PAY_FUNC.g_PSTP_CODE := RCAL.PSTP_CODE;  /*호봉코드***/
                        PKG_PAY_FUNC.g_OPOS_CODE := RCAL.OPOS_CODE;  /*직위코드***/
                        PKG_PAY_FUNC.g_DUTY_CODE := RCAL.DUTY_CODE;  /*직무코드***/
                        PKG_PAY_FUNC.g_DURS_CODE := RCAL.DURS_CODE;  /*직책코드***/
                        PKG_PAY_FUNC.g_EXPD_CODE := RS.EXPD_CODE;

                        v_APLY_MODN := RS.APLY_MODN;

                            /*지급공제여부인 경우 여러건 리턴 가능***/
                            IF RS.PADN_YSNO = '1' AND INSTR(v_APLY_MODN, '지급공제') > 0 THEN
                                v_APLY_MODN := '';
                                FOR ALDEYN IN (
                                    SELECT BGIN_DATE
                                      FROM PY_ALDEYN
                                     WHERE EMPL_NUMB = RCAL.EMPL_NUMB
                                       AND EXPD_CODE = RS.EXPD_CODE
                                       AND BGIN_DATE <= v_STDS_DATE
                                       AND (ENDX_DATE IS NULL OR ENDX_DATE >= SUB.RTBS_YMTH || '01')
                                     ORDER BY BGIN_DATE
                                ) LOOP
                                    v_APLY_MODN := v_APLY_MODN || ' + ' || '(' || RS.APLY_MODN || ')';
                                    v_APLY_MODN := REPLACE(v_APLY_MODN, '[지급공제금액]', '[지급공제금액(''' || ALDEYN.BGIN_DATE || ''', ''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || SUB.RTBS_YMTH || ''')]');
                                    v_APLY_MODN := REPLACE(v_APLY_MODN, '[지급공제일수]', '[지급공제일수(''' || ALDEYN.BGIN_DATE || ''', ''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || SUB.RTBS_YMTH || ''')]');

                                END LOOP;
                            END IF;

                        v_INDEX1 := INSTR(v_APLY_MODN, '{');
                        v_INDEX2 := INSTR(v_APLY_MODN, '}');

                            --RAISE_APPLICATION_ERROR(-20000, '사원번호:' || SUB.EMPL_NUMB||' v_APLY_MODN='||v_APLY_MODN||' RS.APLY_MODN='||RS.APLY_MODN||' v_INDEX1='||v_INDEX1||' v_INDEX2='||v_INDEX2);
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

                            END LOOP;/*수당함수***/

                            v_INDEX1 := INSTR(v_APLY_MODN, '[');
                            v_INDEX2 := INSTR(v_APLY_MODN, ']');
                        --RAISE_APPLICATION_ERROR(-20000, '사원번호:' || SUB.EMPL_NUMB||' v_APLY_MODN='||v_APLY_MODN||' RS.APLY_MODN='||RS.APLY_MODN||' v_INDEX1='||v_INDEX1||' v_INDEX2='||v_INDEX2);
                            WHILE v_INDEX1 > 0 LOOP

                            v_RETURN := SUBSTR(v_APLY_MODN, v_INDEX1, v_INDEX2 - v_INDEX1 + 1);
                            BEGIN
                                v_RETURN := REPLACE(REPLACE(v_RETURN,'[',''),']','');
                                --RAISE_APPLICATION_ERROR(-20000, '사원번호:' || SUB.EMPL_NUMB||' v_RETURN='||v_RETURN);
                                IF v_RETURN LIKE '지급공제%' THEN
                                    OPEN rRESULT FOR
                                      TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN  || ' AS RTN_VALUE FROM DUAL');
                                    FETCH rRESULT INTO v_RETURN;

                                ELSE
                                    --RAISE_APPLICATION_ERROR(-20000, TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || SUB.RTBS_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL'));
                                    OPEN rRESULT FOR
                                      TO_CHAR('SELECT PKG_PAY_FUNC.SF_' || v_RETURN || '(''' || iPAYX_DATE || ''', ''' || iWAGE_CODE || ''', ''' || RCAL.EMPL_NUMB || ''', ''' || SUB.RTBS_YMTH || ''')'  || ' AS RTN_VALUE FROM DUAL');
                                    FETCH rRESULT INTO v_RETURN;
                                    --RAISE_APPLICATION_ERROR(-20000, v_RETURN);
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

                        END LOOP;/*정의함수***/

                        OPEN rRESULT FOR
                          TO_CHAR('SELECT ' || NVL(v_APLY_MODN,'0')  || ' AS PAYAMT FROM DUAL');
                        FETCH rRESULT INTO v_TEMP_PAYAMT;

                        /*NULL제거***/
                        v_TEMP_PAYAMT := NVL(TRUNC(v_TEMP_PAYAMT,0),0);

                        /*일할계산대상***/
                        IF RS.DAYC_YSNO = '1' THEN

                            /*계산비율***/
                            /* 2016-10-18 LYG 기준일자 이전의 최종 자료를 조회하기 위해 주석 처리 ***/
                            /*
                            SELECT PAYX_RATE INTO v_PAYX_RATE
                              FROM PY_PYRATE A
                             WHERE A.STDS_YMTH = RS.STDS_YMTH
                               AND A.WAGP_CODE NOT IN ('2900', '4000', '8000')  --2900:소급분, 4000:소급급여, 8000:급여시뮬레이션
                               AND A.CLSD_CODE = CUR_CLSD.CLSD_CODE
                               AND A.EXPD_CODE = RS.EXPD_CODE
                               AND A.WRKS_CODE = RCAL.WRKS_CODE;
                            ***/
                            BEGIN
                                SELECT PAYX_RATE INTO v_PAYX_RATE
                                  FROM PY_PYRATE A
                                 WHERE A.STDS_YMTH = (SELECT MAX(STDS_YMTH)
                                                        FROM PY_PYRATE
                                                       WHERE WAGP_CODE = A.WAGP_CODE
                                                         AND STDS_YMTH <= SUB.RTBS_YMTH
                                                         AND CLSD_CODE = A.CLSD_CODE
                                                         AND EXPD_CODE = A.EXPD_CODE
                                                         AND WRKS_CODE = A.WRKS_CODE
                                                     )
                                   AND A.WAGP_CODE = '1000'  --2900:소급분, 4000:소급급여, 8000:급여시뮬레이션
                                   AND A.CLSD_CODE = CUR_CLSD.CLSD_CODE
                                   AND A.EXPD_CODE = RS.EXPD_CODE
                                   AND A.WRKS_CODE = NVL(RCAL.WRKS_CODE,'01');
                            EXCEPTION
                                WHEN OTHERS THEN
                                    RAISE_APPLICATION_ERROR(-20000, 'PY_PYRATE 데이터 값 CUR_CLSD.CLSD_CODE='||CUR_CLSD.CLSD_CODE||' SUB.RTBS_YMTH='||SUB.RTBS_YMTH||' RS.EXPD_CODE='||RS.EXPD_CODE||' RCAL.WRKS_CODE='||RCAL.WRKS_CODE );
                            END;
                            --RAISE_APPLICATION_ERROR(-20000, 'PY_REPAYD 데이터 값 SUB.EMPL_NUMB='||SUB.EMPL_NUMB||' SUB.RTBS_YMTH='||SUB.RTBS_YMTH ||' RS.EXPD_CODE='||RS.EXPD_CODE||' v_TEMP_PAYAMT='||v_TEMP_PAYAMT||' RCAL.REWK_DCNT='||RCAL.REWK_DCNT||' RCAL.FWRK_DCNT='||RCAL.FWRK_DCNT||' v_PAYX_RATE='||v_PAYX_RATE );
                            v_PAYAMT := (v_TEMP_PAYAMT * RCAL.REWK_DCNT / RCAL.FWRK_DCNT) * v_PAYX_RATE;
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

                        --RAISE_APPLICATION_ERROR(-20000, 'PY_REPAYD 데이터 값 SUB.EMPL_NUMB='||SUB.EMPL_NUMB||' SUB.RTBS_YMTH='||SUB.RTBS_YMTH||' RS.EXPD_CODE='||RS.EXPD_CODE||' v_PAYAMT='||v_PAYAMT );
                        IF v_INIT_AMOT <> 0 THEN
                            UPDATE PY_REPAYD
                               SET RTA1_AMOT = CASE WHEN RS.EXPD_CODE = 'A0051' AND RTB1_AMOT > 0 THEN v_PAYAMT ELSE RTA1_AMOT END  --기본급(급여) 인상분
                                 , RTA2_AMOT = CASE WHEN RS.EXPD_CODE = 'A0066' AND RTB2_AMOT > 0 THEN v_PAYAMT ELSE RTA2_AMOT END  --연장수당 인상분
                                 , RTA3_AMOT = CASE WHEN RS.EXPD_CODE = 'A0052' AND RTB3_AMOT > 0 THEN v_PAYAMT ELSE RTA3_AMOT END  --임원상여 인상분
                                 , RTA4_AMOT = CASE WHEN RS.EXPD_CODE = 'A9008' AND RTB4_AMOT > 0 THEN v_PAYAMT ELSE RTA4_AMOT END  --휴일근무수당 인상분
                             WHERE PAYX_DATE = iPAYX_DATE
                               AND WAGE_CODE = iWAGE_CODE
                               AND EMPL_NUMB = SUB.EMPL_NUMB
                               AND RTBS_YMTH = SUB.RTBS_YMTH
                              ;
                        END IF;

                    END LOOP; /*일할계산***/

                    /*원단위 절사***/
                    UPDATE PY_REPAYD A
                       SET RTA1_AMOT = CASE WHEN RS.WOND_CODE = '1' THEN TRUNC(A.RTA1_AMOT,-1)
                                            WHEN RS.WOND_CODE = '2' THEN ROUND(A.RTA1_AMOT,-1)
                                            WHEN RS.WOND_CODE = '3' THEN TRUNC(A.RTA1_AMOT,0)
                                            WHEN RS.WOND_CODE = '4' THEN CEIL(A.RTA1_AMOT/10)*10
                                            ELSE A.RTA1_AMOT END
                         , RTA2_AMOT = CASE WHEN RS.WOND_CODE = '1' THEN TRUNC(A.RTA2_AMOT,-1)
                                            WHEN RS.WOND_CODE = '2' THEN ROUND(A.RTA2_AMOT,-1)
                                            WHEN RS.WOND_CODE = '3' THEN TRUNC(A.RTA2_AMOT,0)
                                            WHEN RS.WOND_CODE = '4' THEN CEIL(A.RTA2_AMOT/10)*10
                                            ELSE A.RTA2_AMOT END
                         , RTA3_AMOT = CASE WHEN RS.WOND_CODE = '1' THEN TRUNC(A.RTA3_AMOT,-1)
                                            WHEN RS.WOND_CODE = '2' THEN ROUND(A.RTA3_AMOT,-1)
                                            WHEN RS.WOND_CODE = '3' THEN TRUNC(A.RTA3_AMOT,0)
                                            WHEN RS.WOND_CODE = '4' THEN CEIL(A.RTA3_AMOT/10)*10
                                            ELSE A.RTA3_AMOT END
                         , RTA4_AMOT = CASE WHEN RS.WOND_CODE = '1' THEN TRUNC(A.RTA4_AMOT,-1)
                                            WHEN RS.WOND_CODE = '2' THEN ROUND(A.RTA4_AMOT,-1)
                                            WHEN RS.WOND_CODE = '3' THEN TRUNC(A.RTA4_AMOT,0)
                                            WHEN RS.WOND_CODE = '4' THEN CEIL(A.RTA4_AMOT/10)*10
                                            ELSE A.RTA4_AMOT END
                     WHERE A.PAYX_DATE = iPAYX_DATE
                       AND A.WAGE_CODE = iWAGE_CODE
                       AND A.EMPL_NUMB = SUB.EMPL_NUMB
                       AND A.RTBS_YMTH = SUB.RTBS_YMTH;

                END LOOP;  /*RS***/
            END LOOP; /*CUR_CLSD***/
        END LOOP; /*SUB***/

        /* 소급금액 계산 ***/
        UPDATE PY_REPAYD
           SET RTR1_AMOT = RTA1_AMOT - RTB1_AMOT
             , RTR2_AMOT = RTA2_AMOT - RTB2_AMOT
             , RTR3_AMOT = RTA3_AMOT - RTB3_AMOT
             , RTR4_AMOT = RTA4_AMOT - RTB4_AMOT
         WHERE PAYX_DATE = iPAYX_DATE
           AND WAGE_CODE = iWAGE_CODE;
    END;
END;