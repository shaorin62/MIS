CREATE or replace-- added during DDL generation.
PACKAGE BODY     "PKG_HRME0020" AS

    /******************************************************************************
    *   NAME:       PKG_HRME0020
    *   PURPOSE:    인사발령확정
    *
    *   REVISIONS:
    *   Ver        Date        Author           Description
    *   ---------  ----------  ---------------  ------------------------------------
    *   1.0        2016-09-23             1. Created this package.
    ******************************************************************************/


    /*******************************************************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-23
        내      용 : 인사발령확정
    ********************************************************************************/
    PROCEDURE SP_HRME0020_PROC00 (
         iUPDT_USID IN HR_APPOXM.UPDT_USID%TYPE   --수정자
        ,iAPNT_HOCT IN HR_APPOXM.APNT_HOCT%TYPE   --발령호수
        ,iAPAL_YSNO IN HR_APPOXM.APAL_YSNO%TYPE   --발령승인여부
    ) AS
        v_ROWCNT INT;
    BEGIN
        --발령상세가 있는지 확인
        SELECT COUNT(*)
          INTO v_ROWCNT
          FROM HR_APPOXD
         WHERE APNT_HOCT = iAPNT_HOCT;
         
        IF v_ROWCNT = 0 THEN
            RAISE_APPLICATION_ERROR(-20000, '등록된 발령내역이 없습니다!');
        END IF;
        
        --마스터정보 업데이트
        UPDATE HR_APPOXM
           SET APAL_YSNO = iAPAL_YSNO   --발령승인여부
              ,UPDT_DATE = SYSDATE   --수정일
              ,UPDT_USID = iUPDT_USID   --수정자
         WHERE APNT_HOCT = iAPNT_HOCT
        ;

      --0.발령구분별 처리
      --1.기타 자료를 인사마스터의 데이터로 채운다.
      --2.인사마스터에 업데이트 할 자료를 업데이트 한다.
        IF iAPAL_YSNO = '1' THEN
            SP_HRME0020_PROC03();
        ELSIF iAPAL_YSNO = '0' THEN
            UPDATE HR_APPOXD
               SET APAL_YSNO = iAPAL_YSNO   --발령승인여부
             WHERE APNT_HOCT = iAPNT_HOCT
            ;

            FOR RS IN (
                SELECT EMPL_NUMB   --사번
                     , SRAL_NUMB   --일련번호
                     , APNT_DATE   --발령일
                     , APNT_SEQN   --발령순번
                     , APDN_CODE   --발령구분코드
                     , ADJN_DTCD   --겸직부서코드
                     , ADDT_CODE   --겸직직책코드
                  FROM HR_APPOXD
                 WHERE APNT_HOCT = iAPNT_HOCT
              ORDER BY EMPL_NUMB, APNT_DATE, APNT_SEQN
            ) LOOP

                --기타정보 인사정보로 업데이트
                SP_HRME0020_PROC01(RS.EMPL_NUMB, RS.APNT_DATE, RS.APNT_SEQN);

                /*기간이 있는 발령 중 TO 발령 확정해제시 FROM 발령의 발령종료일을 TEMP 발령종료일로 업데이트 할 것.*/
                IF SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3') IS NOT NULL THEN 
                    --이전 파견발령 업데이트
                    UPDATE HR_APPOXD
                       SET APNT_ENDD = ''
                     WHERE EMPL_NUMB = RS.EMPL_NUMB
                       AND APDN_CODE = SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3')
                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
                          WHERE EMPL_NUMB = RS.EMPL_NUMB
                            AND APNT_DATE < RS.APNT_DATE
                            AND APDN_CODE = SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3')
                            AND APAL_YSNO = '1'
                            );
--                ELSIF RS.APDN_CODE = '13' THEN --직무대리해제발령
--                    --이전 직무대리발령 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '08'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '08'
--                            AND APAL_YSNO = '1'
--                            );
--                ELSIF RS.APDN_CODE = '12' THEN --겸직해제발령
--                    --이전 겸직발령 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '07'
--                       AND ADJN_DTCD = RS.ADJN_DTCD
--                       AND NVL(ADJP_CODE, ' ') = NVL(RS.ADJP_CODE, ' ')
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '07'
--                            AND ADJN_DTCD = RS.ADJN_DTCD
--                            AND NVL(ADJP_CODE, ' ') = NVL(RS.ADJP_CODE, ' ')
--                            AND APAL_YSNO = '1');
--
--                    --업무분장 종료 되돌림.
--                    /*UPDATE HR_EMTADW A
--                       SET ENDX_DATE = ''
--                     WHERE DEPT_CODE = RS.ADJN_DTCD
--                       AND EMPL_NUMB = RS.EMPL_NUMB
--                       AND ENDX_DATE = RS.APNT_DATE
--                     ;
--                ELSIF RS.APDN_CODE = '15' THEN --근무지시해제
--                    --이전 근무지시 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '11'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '11'
--                            AND APAL_YSNO = '1'
--                            );
--                ELSIF RS.APDN_CODE = '27' THEN --재택근무종료
--                    --이전 재택근무 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '26'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '26'
--                            AND APAL_YSNO = '1'
--                            );
--
--                ELSIF RS.APDN_CODE = '29' THEN --지원근무명령해재
--                    --이전 지원근무명령 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '28'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '28'
--                            AND APAL_YSNO = '1'
--                            );
--                            */
--                ELSIF RS.ASFT_CODE = '1701' THEN --복직발령(휴직사유만료)
--                    --이전 휴직발령 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '16'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '16'
--                            AND APAL_YSNO = '1'
--                            );
--                ELSIF RS.ASFT_CODE = '1702' THEN --징계취소
--                    --이전 징계발령 업데이트
--                    UPDATE HR_APPOXD
--                       SET APNT_ENDD = ''
--                     WHERE EMPL_NUMB = RS.EMPL_NUMB
--                       AND APDN_CODE = '19'
--                       AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
--                          WHERE EMPL_NUMB = RS.EMPL_NUMB
--                            AND APNT_DATE < RS.APNT_DATE
--                            AND APDN_CODE = '19'
--                            AND APAL_YSNO = '1'
--                            );
                END IF;



            END LOOP;

        END IF;

    END;



    /*******************************************************************************
    * 작  성  자 : 김춘호
    * 작  성  일 : 2016-09-23
    * 내      용 : 인사정보를 발령정보에 업데이트
    *********************************************************************************/
    PROCEDURE SP_HRME0020_PROC01 (
         iEMPL_NUMB IN HR_APPOXD.EMPL_NUMB%TYPE    --사번
        ,iAPNT_DATE IN HR_APPOXD.APNT_DATE%TYPE    --발령일
        ,iAPNT_SEQN IN HR_APPOXD.APNT_SEQN%TYPE    --발령순번
    ) AS
        --인사정보
        r_HR_MASTXM HR_MASTXM%ROWTYPE;

        --발령데이터
        r_HR_APPOXD HR_APPOXD%ROWTYPE;
        
        v_NEPR_DATE HR_APPOXD.PRON_DATE%TYPE; --승진일
        v_NETP_DATE HR_APPOXD.PARE_DATE%TYPE; --승급일
        v_ROWCNT INT;

    BEGIN
        --이후 발령사항 취소
        UPDATE HR_APPOXD
           SET APAL_YSNO = '2' --임시로 저장...
        WHERE EMPL_NUMB = iEMPL_NUMB
          AND (APNT_DATE > iAPNT_DATE OR (APNT_DATE = iAPNT_DATE AND APNT_SEQN >= iAPNT_SEQN))
          AND APAL_YSNO = '1';

        SP_HRME0020_PROC02(iEMPL_NUMB);

        --순차적으로 발령적용..
        FOR RS IN (
           SELECT A.EMPL_NUMB                   /* 사원번호 */
                , A.SRAL_NUMB                   /* 일련번호 */
                , A.APNT_DATE                   /* 발령일 */
                , A.APNT_SEQN                   /* 발령일련번호 */
                , A.APNT_HOCT                   /* 발령호수 */
                , A.APDN_CODE                   /* 발령구분코드 */
                , A.DEPT_CODE                   /* 부서코드 */
                , A.CPOS_CODE                   /* 직급코드 */
                , A.PSTP_CODE                   /* 호봉코드 */
                , A.DURS_CODE                   /* 직책코드 */
                , A.DUTY_CODE                   /* 직무코드 */
                , A.OPOS_CODE                   /* 직위코드 */
                , A.WRKS_CODE                   /* 근무상태코드 */
                , A.PYTY_CODE                   /* 급여형태코드 */
                , A.DTMN_YSNO                   /* 부서장여부 */
                , A.DTMN_DTCD                   /* 부서장부서코드 */
                , A.DSPT_YSNO                   /* 파견여부 */
                , A.DSPT_DTCD                   /* 파견부서코드 */
                , A.EXTR_PLDH                   /* 외부파견지 */
                , A.LEAV_YSNO                   /* 휴직여부 */
                , A.PBNR_YSNO                   /* 수습여부 */
                , A.ADJN_DTCD                   /* 겸직부서코드 */
                , A.ADDT_CODE                   /* 겸직직책코드 */
                , A.RTTY_CODE                   /* 퇴직구분코드 */
                , A.CIBP_ANNU                   /* 경력직위연차 */
                , A.APNT_INNM                   /* 발령기관명 */
                , A.APNT_ENDD                   /* 발령종료일 */
                , A.SEAS_DATE                   /* 소속발령일 */
                , A.DEAT_DATE                   /* 부서발령일 */
                , A.PRON_DATE                   /* 승진일 */
                , A.PARE_DATE                   /* 승급일 */
                , A.NETP_DATE                   /* 차기승급일 */
                , A.NEPR_DATE                   /* 차기승진일 */
                , A.DURS_DATE                   /* 직책일 */
                , A.DUTY_DATE                   /* 직무일 */
                , A.APAL_YSNO                   /* 발령승인여부 */
                , A.DTCH_YSNO                   /* 부서변경여부 */
                , A.CLPC_YSNO                   /* 직급변경여부 */
                , A.NMCG_YSNO                   /* 호봉변경여부 */
                , A.DURC_YSNO                   /* 직책변경여부 */
                , A.JOCH_YSNO                   /* 직무변경여부 */
                , A.OFPC_YSNO                   /* 직위변경여부 */
                , A.PYTC_YSNO                   /* 급여형태변경여부 */
                , A.WRKC_YSNO                   /* 근무상태변경여부 */
                , A.HDTC_YSNO                   /* 부서장변경여부 */
                , A.PBDC_YSNO                   /* 수습변경여부 */
                , A.CSPT_YSNO                   /* 증명서출력여부 */
                , A.REMK_200X                   /* 비고200 */
                , A.APNT_PROW                   /* 발령사유 */
                , A.WRDV_CODE                   /* 근무구분코드 */
                , A.WRDV_DATE                   /* 근무구분일 */
                , A.OPOS_DATE                   /* 직위일 */
                , A.TEMT_DATE					/* 2016-12-21 LYG 정규직전환일 */
             FROM HR_APPOXD A                   /* [발령상세] */
             WHERE EMPL_NUMB = iEMPL_NUMB
               AND (APNT_DATE > iAPNT_DATE OR (APNT_DATE = iAPNT_DATE AND APNT_SEQN >= iAPNT_SEQN))
               AND APAL_YSNO = '2'
             ORDER BY APNT_DATE, APNT_SEQN
        ) LOOP

            --발령확정
            UPDATE HR_APPOXD
               SET APAL_YSNO = '1'
             WHERE EMPL_NUMB = RS.EMPL_NUMB
               AND SRAL_NUMB = RS.SRAL_NUMB;

            --인사정보
            SELECT * INTO r_HR_MASTXM
              FROM HR_MASTXM
             WHERE EMPL_NUMB = RS.EMPL_NUMB;

            UPDATE HR_APPOXD
               SET DEPT_CODE = DECODE(RS.DTCH_YSNO, '1', DEPT_CODE, r_HR_MASTXM.DEPT_CODE) /* 부서변경여부      */
                 , CPOS_CODE = DECODE(RS.CLPC_YSNO, '1', CPOS_CODE, r_HR_MASTXM.CPOS_CODE) /* 직급변경여부      */
                 , PSTP_CODE = DECODE(RS.NMCG_YSNO, '1', PSTP_CODE, r_HR_MASTXM.PSTP_CODE) /* 호봉변경여부      */
                 , DURS_CODE = DECODE(RS.DURC_YSNO, '1', DURS_CODE, r_HR_MASTXM.DURS_CODE) /* 직책변경여부      */
                 , DUTY_CODE = DECODE(RS.JOCH_YSNO, '1', DUTY_CODE, r_HR_MASTXM.DUTY_CODE) /* 직무변경여부      */
                 , OPOS_CODE = DECODE(RS.OFPC_YSNO, '1', OPOS_CODE, r_HR_MASTXM.OPOS_CODE) /* 직위변경여부      */
                 , PYTY_CODE = DECODE(RS.PYTC_YSNO, '1', PYTY_CODE, r_HR_MASTXM.PYTY_CODE) /* 급여형태변경여부  */
                 , WRKS_CODE = DECODE(RS.WRKC_YSNO, '1', WRKS_CODE, r_HR_MASTXM.WRKS_CODE) /* 근무상태변경여부  */
                 , DTMN_YSNO = DECODE(RS.HDTC_YSNO, '1', DTMN_YSNO, r_HR_MASTXM.DTMN_YSNO) /* 부서장변경여부    */
                 , DSPT_DTCD = DECODE(RS.DSPT_YSNO, '1', DSPT_DTCD, r_HR_MASTXM.DSPT_DTCD) /* 파견여부          */
                 , EXTR_PLDH = DECODE(RS.DSPT_YSNO, '1', EXTR_PLDH, r_HR_MASTXM.EXTR_PLDH) /* 외부파견지        */
             WHERE EMPL_NUMB = RS.EMPL_NUMB
               AND SRAL_NUMB = RS.SRAL_NUMB;
            
            /*기간이 있는 발령 중 TO 발령 확정시 FROM 발령의 발령종료일을 업데이트 할 것.*/
            IF RS.APDN_CODE IN ('101') THEN  --겸직해제
                --이전 발령 업데이트
                UPDATE HR_APPOXD
                   SET APNT_ENDD = TO_CHAR(TO_DATE(RS.APNT_DATE, 'YYYYMMDD') -1, 'YYYYMMDD')
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND APDN_CODE IN ('100')
                   AND ADJN_DTCD = RS.ADJN_DTCD
                   AND ADDT_CODE = RS.ADDT_CODE
                   AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
                      WHERE EMPL_NUMB = RS.EMPL_NUMB
                        AND APNT_DATE < RS.APNT_DATE
                        AND APDN_CODE IN ('100')
                        AND ADJN_DTCD = RS.ADJN_DTCD
                        AND ADDT_CODE = RS.ADDT_CODE
                        AND APAL_YSNO = '1'
                        );
            ELSIF SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3') IS NOT NULL THEN
                --이전 발령 업데이트
                UPDATE HR_APPOXD
                   SET APNT_ENDD = TO_CHAR(TO_DATE(RS.APNT_DATE, 'YYYYMMDD') -1, 'YYYYMMDD')
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND APDN_CODE = SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3')
                   AND APNT_DATE = (SELECT MAX(APNT_DATE) FROM HR_APPOXD
                      WHERE EMPL_NUMB = RS.EMPL_NUMB
                        AND APNT_DATE < RS.APNT_DATE
                        AND APDN_CODE = SF_GET_REFXFILD('APDN_CODE', RS.APDN_CODE, '3')
                        AND APAL_YSNO = '1'
                        );
            END IF;

            --발령정보
            SELECT * INTO r_HR_APPOXD
              FROM HR_APPOXD
             WHERE EMPL_NUMB = RS.EMPL_NUMB
               AND SRAL_NUMB = RS.SRAL_NUMB;
            
            --직원구분변경
            IF NVL(r_HR_APPOXD.WRDV_CODE,' ') != NVL(r_HR_MASTXM.WRDV_CODE,' ') THEN
                UPDATE HR_APPOXD
                   SET WRDV_DATE = RS.APNT_DATE --직군일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET WRDV_DATE = r_HR_MASTXM.WRDV_DATE --직군일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --직무변경일
            IF NVL(r_HR_APPOXD.DUTY_CODE,' ') != NVL(r_HR_MASTXM.DUTY_CODE,' ') THEN
                UPDATE HR_APPOXD
                   SET DUTY_DATE = RS.APNT_DATE --직무일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET DUTY_DATE = r_HR_MASTXM.DUTY_DATE --직무일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --직책변경일
            IF NVL(r_HR_APPOXD.DURS_CODE,' ') != NVL(r_HR_MASTXM.DURS_CODE,' ') THEN
                UPDATE HR_APPOXD
                   SET DURS_DATE = RS.APNT_DATE --직무일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET DURS_DATE = r_HR_MASTXM.DURS_DATE --직무일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --직위일
            IF NVL(r_HR_APPOXD.OPOS_CODE,' ') != NVL(r_HR_MASTXM.OPOS_CODE,' ') THEN
                UPDATE HR_APPOXD
                   SET OPOS_DATE = RS.APNT_DATE --직위일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET OPOS_DATE = r_HR_MASTXM.OPOS_DATE --직위일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --소속 변경시
            UPDATE HR_APPOXD
                   SET SEAS_DATE = r_HR_MASTXM.SEAS_DATE --소속발령일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
                   -- TODO 아래 function 확인 필요
--            IF NVL(SF_GET_SECTCODE(r_HR_APPOXD.DEPT_CODE),' ') != NVL(SF_GET_SECTCODE(r_HR_MASTXM.DEPT_CODE), ' ')  THEN
--                UPDATE HR_APPOXD
--                   SET SEAS_DATE = RS.APNT_DATE --소속발령일
--                 WHERE EMPL_NUMB = RS.EMPL_NUMB
--                   AND SRAL_NUMB = RS.SRAL_NUMB;
--            ELSE
--                UPDATE HR_APPOXD
--                   SET SEAS_DATE = r_HR_MASTXM.SEAS_DATE --소속발령일
--                 WHERE EMPL_NUMB = RS.EMPL_NUMB
--                   AND SRAL_NUMB = RS.SRAL_NUMB;
--            END IF;

            --부서변경시
            IF NVL(r_HR_APPOXD.DEPT_CODE,' ') != NVL(r_HR_MASTXM.DEPT_CODE,' ') THEN
                UPDATE HR_APPOXD
                   SET DEAT_DATE = RS.APNT_DATE  --부서발령일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET DEAT_DATE = r_HR_MASTXM.DEAT_DATE  --부서발령일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --2016-11-15 LYG 경력직위연차
            IF (r_HR_APPOXD.DEPT_CODE IS NULL) THEN
                UPDATE HR_APPOXD
                   SET CIBP_ANNU = r_HR_MASTXM.CIBP_ANNU  --경력직위연차
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;            
            END IF;
            
            --2016-12-21 LYG 정규직전환일
            IF (r_HR_APPOXD.APDN_CODE = '145') THEN
                UPDATE HR_APPOXD
                   SET TEMT_DATE = RS.APNT_DATE  --정규직전환일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;            
            ELSE
                UPDATE HR_APPOXD
                   SET TEMT_DATE = r_HR_MASTXM.TEMT_DATE  --정규직전환일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;            	
            END IF;
            
            /*
            --승진일
            IF NVL(r_HR_APPOXD.CPOS_CODE,' ') != NVL(r_HR_MASTXM.CPOS_CODE,' ') AND (SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '02' OR SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '01') THEN --승진 또는 채용발령
                UPDATE HR_APPOXD
                   SET PRON_DATE = RS.APNT_DATE --승진일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET PRON_DATE = r_HR_MASTXM.PRON_DATE --승진일
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --승급일
            IF NVL(r_HR_APPOXD.PSTP_CODE,' ') != NVL(r_HR_MASTXM.PSTP_CODE,' ') AND SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '03' THEN --승급발령
                UPDATE HR_APPOXD
                   SET PARE_DATE = RS.APNT_DATE
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET PARE_DATE = r_HR_MASTXM.PARE_DATE
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;

            --차기승급일
            IF (NVL(r_HR_APPOXD.PSTP_CODE,' ') != NVL(r_HR_MASTXM.PSTP_CODE,' ') OR SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '03')  THEN --승급
                UPDATE HR_APPOXD
                   SET NETP_DATE = NVL(RS.NETP_DATE, RS.APNT_DATE)
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET NETP_DATE = NVL(r_HR_MASTXM.NETP_DATE, r_HR_MASTXM.PARE_DATE)
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            
            --차기승진일
            IF SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '01' OR SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '02' THEN --채용,승인
                UPDATE HR_APPOXD
                   SET NEPR_DATE = RS.APNT_DATE
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            ELSE
                UPDATE HR_APPOXD
                   SET NEPR_DATE = r_HR_MASTXM.NEPR_DATE
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;
            END IF;
            */
            
            --승진, 채용
            IF ( SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE, '4') IN ('01', '02') ) THEN
                --RAISE_APPLICATION_ERROR(-20000, '직위코드 r_HR_APPOXD.OPOS_CODE=' || r_HR_APPOXD.OPOS_CODE ||' r_HR_MASTXM.OPOS_CODE=' || r_HR_MASTXM.OPOS_CODE ||' r_HR_APPOXD.CPOS_CODE=' || r_HR_APPOXD.CPOS_CODE ||' r_HR_MASTXM.CPOS_CODE=' || r_HR_MASTXM.CPOS_CODE);
                IF (NVL(r_HR_APPOXD.OPOS_CODE,' ') != NVL(r_HR_MASTXM.OPOS_CODE,' ')) THEN --승진의 경우
                    v_NEPR_DATE :=  TO_CHAR(ADD_MONTHS(TO_DATE(RS.APNT_DATE, 'YYYYMMDD'), TO_NUMBER(NVL(SF_GET_REFXFILD('CPOS_CODE', RS.CPOS_CODE,'6'),'0')) * 12),'YYYYMMDD'); --차기승진일
                    v_NETP_DATE :=  TO_CHAR(ADD_MONTHS(TO_DATE(RS.APNT_DATE, 'YYYYMMDD'), TO_NUMBER(NVL(SF_GET_REFXFILD('CPOS_CODE', RS.CPOS_CODE,'4'),'0')) * 12),'YYYYMMDD'); --차기승급일
                    --RAISE_APPLICATION_ERROR(-20000, '1) v_NEPR_DATE=' || v_NEPR_DATE ||' v_NETP_DATE=' || v_NETP_DATE);
                    UPDATE HR_APPOXD
                       SET PRON_DATE = RS.APNT_DATE --승진일
                         , PARE_DATE = RS.APNT_DATE --승급일
                         , NEPR_DATE = v_NEPR_DATE
                         , NETP_DATE = v_NETP_DATE
                     WHERE EMPL_NUMB = RS.EMPL_NUMB
                       AND SRAL_NUMB = RS.SRAL_NUMB;
                    
                ELSIF (NVL(r_HR_APPOXD.OPOS_CODE,' ') = NVL(r_HR_MASTXM.OPOS_CODE,' ') AND NVL(r_HR_APPOXD.CPOS_CODE,' ') != NVL(r_HR_MASTXM.CPOS_CODE,' ')) THEN  --승급의 경우
                
                    v_NETP_DATE :=  TO_CHAR(ADD_MONTHS(TO_DATE(RS.APNT_DATE, 'YYYYMMDD'), TO_NUMBER(NVL(SF_GET_REFXFILD('CPOS_CODE', RS.CPOS_CODE,'4'),'0')) * 12),'YYYYMMDD'); --차기승급일
                    RAISE_APPLICATION_ERROR(-20000, '2) r_HR_MASTXM.PRON_DATE=' || r_HR_MASTXM.PRON_DATE ||' v_NETP_DATE=' || v_NETP_DATE);
                    --RAISE_APPLICATION_ERROR(-20000, '2) v_NEPR_DATE=' || v_NEPR_DATE ||' v_NETP_DATE=' || v_NETP_DATE);
                    UPDATE HR_APPOXD
                       SET PRON_DATE = r_HR_MASTXM.PRON_DATE --승진일
                         , PARE_DATE = RS.APNT_DATE --승급일
                         , NEPR_DATE = r_HR_MASTXM.NEPR_DATE
                         , NETP_DATE = v_NETP_DATE
                     WHERE EMPL_NUMB = RS.EMPL_NUMB
                       AND SRAL_NUMB = RS.SRAL_NUMB;                    
                ELSE
    
                    UPDATE HR_APPOXD
                       SET PRON_DATE = r_HR_MASTXM.PRON_DATE --승진일
                         , PARE_DATE = r_HR_MASTXM.PARE_DATE --승급일
                         , NEPR_DATE = r_HR_MASTXM.NEPR_DATE
                         , NETP_DATE = r_HR_MASTXM.NETP_DATE
                     WHERE EMPL_NUMB = RS.EMPL_NUMB
                       AND SRAL_NUMB = RS.SRAL_NUMB;                
                
                END IF;
            
            END IF;
            
            --2016-12-21 LYG 정규직전환일 경우 승진일, 승급일, 차기승급일, 차기승진일 UPDATE
            if (r_HR_APPOXD.APDN_CODE = '145') then
                v_NEPR_DATE :=  TO_CHAR(ADD_MONTHS(TO_DATE(RS.APNT_DATE, 'YYYYMMDD'), TO_NUMBER(NVL(SF_GET_REFXFILD('CPOS_CODE', RS.CPOS_CODE,'6'),'0')) * 12),'YYYYMMDD'); --차기승진일
                v_NETP_DATE :=  TO_CHAR(ADD_MONTHS(TO_DATE(RS.APNT_DATE, 'YYYYMMDD'), TO_NUMBER(NVL(SF_GET_REFXFILD('CPOS_CODE', RS.CPOS_CODE,'4'),'0')) * 12),'YYYYMMDD'); --차기승급일
                --RAISE_APPLICATION_ERROR(-20000, '1) v_NEPR_DATE=' || v_NEPR_DATE ||' v_NETP_DATE=' || v_NETP_DATE);
                UPDATE HR_APPOXD
                   SET PRON_DATE = RS.APNT_DATE --승진일
                     , PARE_DATE = RS.APNT_DATE --승급일
                     , NEPR_DATE = v_NEPR_DATE
                     , NETP_DATE = v_NETP_DATE
                 WHERE EMPL_NUMB = RS.EMPL_NUMB
                   AND SRAL_NUMB = RS.SRAL_NUMB;            
            END IF;
            
            
            --인사업데이트
            SP_HRME0020_PROC02(iEMPL_NUMB);


        END LOOP;



    END;

    /*******************************************************************************
    * 작  성  자 : 김춘호
    * 작  성  일 : 2016-09-23
    * 내      용 : 발령사항 인사정보에 업데이트
    *********************************************************************************/
    PROCEDURE SP_HRME0020_PROC02 (
        iEMPL_NUMB IN HR_MASTXM.EMPL_NUMB%TYPE   --사번
    ) AS
        --발령정보
        r_HR_APPOXD HR_APPOXD%ROWTYPE;

        --발령ROW
        v_ROWCNT INT;

        v_DTMN_YSNO HR_APPOXD.DTMN_YSNO%TYPE;
    BEGIN
        SELECT COUNT(*) INTO v_ROWCNT
          FROM HR_APPOXD
         WHERE EMPL_NUMB = iEMPL_NUMB
           AND APAL_YSNO = '1';

        IF v_ROWCNT > 0 THEN

            --최근 확정된 발령정보
           SELECT A.EMPL_NUMB                   /* 사원번호 */
                , A.SRAL_NUMB                   /* 일련번호 */
                , A.APNT_DATE                   /* 발령일 */
                , A.APNT_SEQN                   /* 발령일련번호 */
                , A.APNT_HOCT                   /* 발령호수 */
                , A.APDN_CODE                   /* 발령구분코드 */
                , A.DEPT_CODE                   /* 부서코드 */
                , A.CPOS_CODE                   /* 직급코드 */
                , A.PSTP_CODE                   /* 호봉코드 */
                , A.DURS_CODE                   /* 직책코드 */
                , A.DUTY_CODE                   /* 직무코드 */
                , A.OPOS_CODE                   /* 직위코드 */
                , A.WRKS_CODE                   /* 근무상태코드 */
                , A.PYTY_CODE                   /* 급여형태코드 */
                , A.DTMN_YSNO                   /* 부서장여부 */
                , A.DTMN_DTCD                   /* 부서장부서코드 */
                , A.DSPT_YSNO                   /* 파견여부 */
                , A.DSPT_DTCD                   /* 파견부서코드 */
                , A.EXTR_PLDH                   /* 외부파견지 */
                , A.LEAV_YSNO                   /* 휴직여부 */
                , A.PBNR_YSNO                   /* 수습여부 */
                , A.ADJN_DTCD                   /* 겸직부서코드 */
                , A.ADDT_CODE                   /* 겸직직책코드 */
                , A.RTTY_CODE                   /* 퇴직구분코드 */
                , A.CIBP_ANNU                   /* 경력직위연차 */
                , A.APNT_INNM                   /* 발령기관명 */
                , A.APNT_ENDD                   /* 발령종료일 */
                , A.SEAS_DATE                   /* 소속발령일 */
                , A.DEAT_DATE                   /* 부서발령일 */
                , A.PRON_DATE                   /* 승진일 */
                , A.PARE_DATE                   /* 승급일 */
                , A.NETP_DATE                   /* 차기승급일 */
                , A.NEPR_DATE                   /* 차기승진일 */
                , A.DURS_DATE                   /* 직책일 */
                , A.DUTY_DATE                   /* 직무일 */
                , A.OPOS_DATE                   /* 직위일 */
                , A.APAL_YSNO                   /* 발령승인여부 */
                , A.DTCH_YSNO                   /* 부서변경여부 */
                , A.CLPC_YSNO                   /* 직급변경여부 */
                , A.NMCG_YSNO                   /* 호봉변경여부 */
                , A.DURC_YSNO                   /* 직책변경여부 */
                , A.JOCH_YSNO                   /* 직무변경여부 */
                , A.OFPC_YSNO                   /* 직위변경여부 */
                , A.PYTC_YSNO                   /* 급여형태변경여부 */
                , A.WRKC_YSNO                   /* 근무상태변경여부 */
                , A.HDTC_YSNO                   /* 부서장변경여부 */
                , A.PBDC_YSNO                   /* 수습변경여부 */
                , A.CSPT_YSNO                   /* 증명서출력여부 */
                , A.REMK_200X                   /* 비고200 */
                , A.APNT_PROW                   /* 발령사유 */
                , A.WRDV_CODE                   /* 근무구분코드 */
                , A.WRDV_DATE                   /* 근무구분일 */
                , A.INST_USID          			/* 입력작업자 */
                , A.INST_DATE          			/* 입력일시 */
                , A.UPDT_USID          			/* 수정작업자 */
                , A.UPDT_DATE          			/* 수정일시 */
                , A.MIGR_YSNO 					/* 마이그여부 */
                , A.SMUL_SEQN					/* 시뮬레이션회차 */
                , A.PROP_YSNO 					/* 승진대상처리여부 */
                , A.TEMT_DATE					/*2016-12-21 LYG 정규직전환일*/
                , A.PRIT_YSNO 					/* 출력여부 */                
              INTO r_HR_APPOXD
              FROM (
                  SELECT  ROW_NUMBER() OVER (PARTITION BY EMPL_NUMB ORDER BY APNT_DATE DESC, APNT_SEQN DESC) AS R_NUM
                         ,B.*
                    FROM HR_APPOXD B
                   WHERE B.APAL_YSNO = '1'
                     AND B.EMPL_NUMB = iEMPL_NUMB
                  ) A
             WHERE R_NUM = 1;
				
            UPDATE HR_MASTXM
               SET ENCO_DATE = CASE WHEN SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '01' THEN r_HR_APPOXD.APNT_DATE ELSE ENCO_DATE END --발령구분이 채용 경우 입사일을  발령일로 업데이트
                  ,RETR_DATE = CASE WHEN SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '05' THEN r_HR_APPOXD.APNT_DATE ELSE NULL END --발령구분이 면직,퇴직 일 경우  퇴사일 발령일로 업데이트
                  ,WODN_CODE = CASE WHEN SF_GET_REFXFILD('APDN_CODE', r_HR_APPOXD.APDN_CODE,'4') = '05' THEN '2' ELSE '1' END  --재직구분
                  ,DEPT_CODE = r_HR_APPOXD.DEPT_CODE   --발령_부서
                  ,CPOS_CODE = r_HR_APPOXD.CPOS_CODE   --발령_직급
                  ,OPOS_CODE = r_HR_APPOXD.OPOS_CODE   --발령_직위
                  ,DURS_CODE = r_HR_APPOXD.DURS_CODE   --발령_직책
                  ,DUTY_CODE = r_HR_APPOXD.DUTY_CODE   --발령_직무
                  ,PSTP_CODE = r_HR_APPOXD.PSTP_CODE   --발령_호봉
                  ,PYTY_CODE = r_HR_APPOXD.PYTY_CODE  -- 급여형태코드
                  ,WRKS_CODE = r_HR_APPOXD.WRKS_CODE   --발령_근무상태
                  ,DSPT_DTCD = r_HR_APPOXD.DSPT_DTCD   --발령_파견부서
                  ,EXTR_PLDH = r_HR_APPOXD.EXTR_PLDH   --발령_외부파견지
                  ,DTMN_YSNO = r_HR_APPOXD.DTMN_YSNO   --발령_부서장여부
                  ,WRDV_DATE = r_HR_APPOXD.WRDV_DATE   --발령_근무구분변경일
                  ,DUTY_DATE = r_HR_APPOXD.DUTY_DATE   --발령_직무일
                  ,DURS_DATE = r_HR_APPOXD.DURS_DATE   --발령_직책일
                  ,SEAS_DATE = r_HR_APPOXD.SEAS_DATE   --발령_소속발령일
                  ,DEAT_DATE = r_HR_APPOXD.DEAT_DATE   --발령_팀발령일
                  ,PRON_DATE = r_HR_APPOXD.PRON_DATE   --발령_승진일
                  ,PARE_DATE = r_HR_APPOXD.PARE_DATE   --발령_승급일
                  ,NETP_DATE = r_HR_APPOXD.NETP_DATE   --발령_차기승급일
                  ,NEPR_DATE = r_HR_APPOXD.NEPR_DATE   --발령_차기승진일
                  ,OPOS_DATE = r_HR_APPOXD.OPOS_DATE   --직위일
                  ,CIBP_ANNU = r_HR_APPOXD.CIBP_ANNU   --2016-11-15 LYG 경력직위연차
                  ,PBNR_YSNO = CASE WHEN r_HR_APPOXD.APDN_CODE = '107' THEN r_HR_APPOXD.PBNR_YSNO ELSE TO_NCHAR(0) END   --2016-12-09 수습여부 추가(장혜진과장요청)
                  ,PBNR_ENDD = CASE WHEN r_HR_APPOXD.APDN_CODE = '107' THEN r_HR_APPOXD.APNT_ENDD ELSE PBNR_ENDD END   --2016-12-09 수습여부 추가(장혜진과장요청)
                  ,TEMT_DATE = r_HR_APPOXD.TEMT_DATE   --2016-12-21 LYG 정규직전환일
                  ,WRDV_CODE = CASE WHEN r_HR_APPOXD.APDN_CODE = '145' THEN TO_NCHAR('02') 
                                    ELSE CASE WHEN r_HR_APPOXD.OPOS_CODE = 'H97' THEN TO_NCHAR('05') ELSE  WRDV_CODE END	
                                    END --2016-12-21 LYG 직원구분을 '02' 일반직으로 변경
             WHERE EMPL_NUMB = iEMPL_NUMB
            ;
        ELSE
            UPDATE HR_MASTXM
               SET ENCO_DATE = '' --발령구분이 채용 경우 입사일을  발령일로 업데이트
                  ,RETR_DATE = '' --발령구분이 면직,퇴직 일 경우  퇴사일 발령일로 업데이트
                  ,DEPT_CODE = ''   --발령_부서
                  ,JBGP_CODE = ''   --발령_직군
                  ,CPOS_CODE = ''   --발령_직급
                  ,OPOS_CODE = ''   --발령_직위
                  ,DURS_CODE = ''   --발령_직책
                  ,DUTY_CODE = ''   --발령_직무
                  ,PSTP_CODE = ''   --발령_호봉
                  ,PYTY_CODE = ''  -- 급여형태코드
                  ,WRKS_CODE = ''   --발령_근무상태
                  ,DSPT_DTCD = ''   --발령_파견부서
                  ,EXTR_PLDH = ''   --발령_외부파견지
                  ,DTMN_YSNO = ''   --발령_부서장여부
                  ,WRDV_DATE = ''   --발령_근무구분변경일
                  ,JBGP_DATE = ''   --발령_직군일
                  ,DUTY_DATE = ''   --발령_직무일
                  ,DURS_DATE = ''   --발령_직책일
                  ,SEAS_DATE = ''   --발령_소속발령일
                  ,DEAT_DATE = ''   --발령_팀발령일
                  ,PRON_DATE = ''   --발령_승진일
                  ,PARE_DATE = ''   --발령_승급일
                  ,NETP_DATE = ''   --발령_차기승급일
                  ,NEPR_DATE = ''   --발령_차기승진일
                  ,OPOS_DATE = ''   --직위일
                  ,CIBP_ANNU = ''   --2016-11-15 LYG 경력직위연차
                  ,PBNR_YSNO = ''   --2016-12-09 수습여부 추가(장혜진과장요청)
                  ,PBNR_ENDD = ''   --2016-12-09 수습여부 추가(장혜진과장요청)
                  ,TEMT_DATE = ''   --2016-12-21 LYG 정규직전환일
             WHERE EMPL_NUMB = iEMPL_NUMB
            ;
        END IF;

    END;

    /*******************************************************************************
        작  성  자 : 김춘호
        작  성  일 : 2016-09-23
        내      용 : 인사발령확정
    ********************************************************************************/
    PROCEDURE SP_HRME0020_PROC03
    AS
    BEGIN

      --0.발령구분별 처리
      --1.기타 자료를 인사마스터의 데이터로 채운다.
      --2.인사마스터에 업데이트 할 자료를 업데이트 한다.

        FOR RS IN (
            SELECT  B.EMPL_NUMB    --사원번호
                   ,B.SRAL_NUMB    --일련번호
                   ,B.APNT_DATE    --발령일
                   ,B.APNT_SEQN    --발령순번
                   ,B.APDN_CODE    --발령구분코드
              FROM HR_APPOXM A
               INNER JOIN HR_APPOXD B
                  ON A.APNT_HOCT = B.APNT_HOCT
             WHERE A.APAL_YSNO = '1'
               AND B.APAL_YSNO = '0'
               AND CASE WHEN SF_GET_REFXFILD('APDN_CODE', B.APDN_CODE,'4') = '05' THEN TO_NCHAR(TO_CHAR(TO_DATE(B.APNT_DATE,'YYYYMMDD') + 1,'YYYYMMDD')) ELSE B.APNT_DATE END <= TO_CHAR(SYSDATE,'YYYYMMDD')    --면직인 경우 다음날 발령 적용
             ORDER BY EMPL_NUMB, APNT_DATE, APNT_SEQN

        ) LOOP
            UPDATE HR_APPOXD
               SET APAL_YSNO = '1'   --발령승인여부
             WHERE EMPL_NUMB = RS.EMPL_NUMB
               AND SRAL_NUMB = RS.SRAL_NUMB
            ;

--            IF RS.APDN_CODE = '05' THEN
--                --전보발령인 경우 권한은 일반사용자로 초기화
--                DELETE FROM TM_GROUPX
--                 WHERE USER_IDXX IN (SELECT USER_IDXX FROM TM_USERXM WHERE EMPL_NUMB = RS.EMPL_NUMB)
--                   AND GRUP_IDXX <> 'A9999'; --일반사용자
--            END IF;
            
            SP_HRME0020_PROC01(RS.EMPL_NUMB, RS.APNT_DATE, RS.APNT_SEQN);

        END LOOP;

        COMMIT;
    END;

END PKG_HRME0020;