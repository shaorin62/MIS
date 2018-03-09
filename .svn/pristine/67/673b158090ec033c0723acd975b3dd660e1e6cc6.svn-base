CREATE OR REPLACE PACKAGE BODY UWZ."PKG_FAMF0010" AS



    /******************************************************************************
       NAME:       PKG_FAMF0010
       PURPOSE:    재무제표
       REVISIONS:
       Ver        Date        Author           Description
       ---------  ----------  ---------------  ------------------------------------
       1.0        2016-02-05    하창연         1. Created this package.
    ******************************************************************************/

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 재무제표 생성
    ********************************************************************************/
    PROCEDURE SP_SAVE00 (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BASE_YYM1    IN VARCHAR2                   /* 당기시작월 */
        ,IN_BASE_YYM2    IN VARCHAR2                   /* 당기종료월 */
        ,IN_PREV_YYM1    IN VARCHAR2                   /* 전기시작월 */
        ,IN_PREV_YYM2    IN VARCHAR2                   /* 전기종료월 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
        ,IN_VIEW_ITLV    IN VARCHAR2                   /* 양식항목레벨 */
        ,IN_MONT_FLAG    IN VARCHAR2 DEFAULT ''         /* 월별자료여부 : Y / NULL */
    )
    AS
        LV_FSFM_KIND    VARCHAR2(10);

        LV_BASE_DAT1    VARCHAR2(10);    /* 당기시작일*/
        LV_BASE_DAT2    VARCHAR2(10);    /* 당기종료일*/
        LV_PREV_DAT1    VARCHAR2(10);    /* 전기시작일*/
        LV_PREV_DAT2    VARCHAR2(10);    /* 전기종료일*/

    BEGIN
        
        LV_FSFM_KIND := SF_GET_REFXFILD('FSFM_CODE', IN_FSFM_CODE, '1'); --SUBSTR(IN_FSFM_CODE, 1, LENGTH(IN_FSFM_CODE)-1)
       
        IF IN_MONT_FLAG IS NULL OR IN_MONT_FLAG <> 'Y' THEN 

            /* 합계잔액시간표 합계 당기*/
            IF LV_FSFM_KIND = 'TB' THEN
                LV_BASE_DAT1 := SUBSTR(IN_BASE_YYM2,1,4) || '0000';
                LV_BASE_DAT2 := IN_BASE_YYM2 || '31';

                SP_SAVE_TB (
                     IN_UPDT_USID    /* 작업자 */
                    ,LV_BASE_DAT1    /* 회계일자 */
                    ,LV_BASE_DAT2    /* 회계일자 */
                    ,IN_FSFM_CODE    /* 양식 */
                    ,IN_ACCT_UNIT    /* 회계단위 */
                    ,IN_ACCT_GUBN    /* 사업장 */
                    );

            /* 재무상태표*/
            ELSIF LV_FSFM_KIND = 'BS' THEN
                SP_SAVE_BS (
                     IN_UPDT_USID    /* 작업자 */
                    ,IN_BASE_YYM1    /* 당기시작월 */
                    ,IN_BASE_YYM2    /* 당기종료월 */
                    ,IN_PREV_YYM1    /* 전기시작월 */
                    ,IN_PREV_YYM2    /* 전기종료월 */
                    ,IN_FSFM_CODE    /* 양식 */
                    ,IN_ACCT_UNIT    /* 회계단위 */
                    ,IN_ACCT_GUBN    /* 사업장 */
                );

            /* 손익계산서 */
            ELSIF LV_FSFM_KIND = 'PL' THEN
                SP_SAVE_PL (
                     IN_UPDT_USID    /* 작업자 */
                    ,IN_BASE_YYM1    /* 당기시작월 */
                    ,IN_BASE_YYM2    /* 당기종료월 */
                    ,IN_PREV_YYM1    /* 전기시작월 */
                    ,IN_PREV_YYM2    /* 전기종료월 */
                    ,IN_FSFM_CODE    /* 양식 */
                    ,IN_ACCT_UNIT    /* 회계단위 */
                    ,IN_ACCT_GUBN    /* 사업장 */
                );
            END IF;
       
        ELSE
        
            /* 월별 손익계산서 - 2016.10.13 by kmy */
            IF LV_FSFM_KIND = 'PL' THEN
                SP_SAVE_PL_MONTH (
                     IN_UPDT_USID    /* 작업자 */
                    ,IN_BASE_YYM1    /* 당기시작월 */
                    ,IN_BASE_YYM2    /* 당기종료월 */
                    ,IN_FSFM_CODE    /* 양식 */
                    ,IN_ACCT_UNIT    /* 회계단위 */
                    ,IN_ACCT_GUBN    /* 사업장 */
                );
                
            END IF;
            
        END IF;

        /* 레벨을 정리한다.*/
        SP_SAVE_LEVL (
             IN_VIEW_ITLV    /* 양식항목레벨 */
        );

    END;

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 계정별합계
    ********************************************************************************/
    PROCEDURE SP_ACCT_SUM (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_ACCT_DAT1    IN VARCHAR2                   /* 회계일자 */
        ,IN_ACCT_DAT2    IN VARCHAR2                   /* 회계일자 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
        ,IN_YEAR_GUBN    IN VARCHAR2                   /* 당기전기구분 */
    )
    AS
        LV_ACCT_DAT1    VARCHAR2(08);    /* 회계일자*/
        LV_ACCT_DAT2    VARCHAR2(08);    /* 회계일자*/
        LV_PROF_AMOT    NUMBER(19);      /* 당기순이익*/

    BEGIN

        LV_ACCT_DAT1 := IN_ACCT_DAT1;
        LV_ACCT_DAT2 := IN_ACCT_DAT2;

        /* 말단계정 먼저 정리한다.*/
        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         D1.FSFM_CODE        AS FSFM_CODE  /* 재무제표양식코드 */
                        ,D1.VIEW_ITCD        AS VIEW_ITCD  /* 양식항목코드 */
                        ,SUM(NM.SLIP_CHAX)    AS SLIP_CHAX  /* 차변 */
                        ,SUM(NM.SLIP_DAEX)    AS SLIP_DAEX  /* 대변 */
                        ,SUM(CASE WHEN D1.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END
                            * SF_ACCT_BALA(AC.DRCR_GUBN, NM.SLIP_CHAX, NM.SLIP_DAEX)) AS ACCT_BALA /* 잔액 */
                        ,SUM(CASE WHEN SUBSTR(NM.ACCT_DATE, 1, 6) = SUBSTR(LV_ACCT_DAT2, 1, 6) THEN 
                                 CASE WHEN D1.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END ELSE 0 END
                                 * SF_ACCT_BALA(AC.DRCR_GUBN, NM.SLIP_CHAX, NM.SLIP_DAEX)) AS MONT_BALA /* 당월잔액 */
                FROM    TA_MODLAC D1
                        LEFT JOIN TA_ACCTXM AC
                        ON     AC.ACCT_INTL = D1.ACCT_INTL
                        LEFT JOIN TA_MAMNTM NM
                        ON     NM.ACCT_DATE >= LV_ACCT_DAT1
                        AND    NM.ACCT_DATE <= LV_ACCT_DAT2
                        AND    NM.ACCT_UNIT = NVL(IN_ACCT_UNIT, NM.ACCT_UNIT)
                        AND    NM.ACCT_GUBN = NVL(IN_ACCT_GUBN, NM.ACCT_GUBN)
                        AND    NM.ACCT_INTL = D1.ACCT_INTL
                WHERE   1 = 1
                AND     D1.FSFM_CODE = IN_FSFM_CODE /* 재무제표양식코드 */
                GROUP   BY
                        D1.FSFM_CODE               /* 재무제표양식코드 */
                       ,D1.VIEW_ITCD               /* 양식항목코드 */
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.CDEB_TAMT = CASE WHEN IN_YEAR_GUBN = 'C' THEN NVL(A.SLIP_CHAX,0) ELSE NVL(T.CDEB_TAMT,0) END    /* 당기차변금액 */
                ,T.CCRS_TAMT = CASE WHEN IN_YEAR_GUBN = 'C' THEN NVL(A.SLIP_DAEX,0) ELSE NVL(T.CCRS_TAMT,0) END    /* 당기대변금액 */
                ,T.CACC_BALA = CASE WHEN IN_YEAR_GUBN = 'C' THEN NVL(A.ACCT_BALA,0) ELSE NVL(T.CACC_BALA,0) END    /* 당기잔액 */
                ,T.CTCM_BALA = CASE WHEN IN_YEAR_GUBN = 'C' THEN NVL(A.MONT_BALA,0) ELSE NVL(T.CTCM_BALA,0) END    /* 당기당월잔액 */
                ,T.BDEB_TAMT = CASE WHEN IN_YEAR_GUBN = 'B' THEN NVL(A.SLIP_CHAX,0) ELSE NVL(T.BDEB_TAMT,0) END    /* 전기차변금액 */
                ,T.BCRS_TAMT = CASE WHEN IN_YEAR_GUBN = 'B' THEN NVL(A.SLIP_DAEX,0) ELSE NVL(T.BCRS_TAMT,0) END    /* 전기대변금액 */
                ,T.BACC_BALA = CASE WHEN IN_YEAR_GUBN = 'B' THEN NVL(A.ACCT_BALA,0) ELSE NVL(T.BACC_BALA,0) END    /* 전기잔액 */
                ,T.BTCM_BALA = CASE WHEN IN_YEAR_GUBN = 'B' THEN NVL(A.MONT_BALA,0) ELSE NVL(T.BTCM_BALA,0) END    /* 전기당월잔액 */
                ,T.SLIP_YSNO = '1'
                ,T.CALC_YSNO = '1'
        ;

    END;

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 기본양식 생성
    ********************************************************************************/
    PROCEDURE SP_TEMP_INSERT (
         IN_ACCT_DATE    IN VARCHAR2                   /* 회계일자 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
    )
    IS

    BEGIN


        /* 재무제표집계(조회용Temp) */
        INSERT INTO TA_MODTMP (
                 FSFM_CODE          /* 재무제표양식코드 */
                ,VIEW_ITCD          /* 양식항목코드 */
                ,VIEW_ITNM          /* 양식항목명 */
                ,VIEW_ITLV          /* 양식항목레벨 */
                ,SORT_ORDR          /* 정렬순서 */
                ,PRTZ_YSNO          /* 괄호묶기여부 */
                ,BOLD_YSNO          /* 굵은글꼴여부 */
                ,ZPRT_YSNO          /* 제로출력여부 */
                ,DRCR_GUBN          /* 차대구분 */
                ,LOCI_CODE          /* 표시위치코드 */
                )
        SELECT
                 DM.FSFM_CODE       /* 재무제표양식코드 */
                ,DM.VIEW_ITCD       /* 양식항목코드 */
                ,DM.VIEW_ITNM       /* 양식항목명 */
                ,DM.VIEW_ITLV       /* 양식항목레벨 */
                ,DM.SORT_ORDR       /* 정렬순서 */
                ,DM.PRTZ_YSNO       /* 괄호묶기여부 */
                ,DM.BOLD_YSNO       /* 굵은글꼴여부 */
                ,DM.ZPRT_YSNO       /* 제로출력여부 */
                ,DM.DRCR_GUBN       /* 차대구분 */
                ,DM.LOCI_CODE       /* 표시위치코드 */
        FROM    TA_MODLXM DM
        WHERE   DM.FSFM_CODE = IN_FSFM_CODE
        AND     NOT EXISTS (
                    SELECT    *
                    FROM    TA_MODTMP TP
                    WHERE   TP.FSFM_CODE = DM.FSFM_CODE
                    AND     TP.VIEW_ITCD = DM.VIEW_ITCD
               )
        ;


    END;


    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 계정별합계(합계잔액시산표)
    ********************************************************************************/
    PROCEDURE SP_SAVE_TB (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_ACCT_DAT1    IN VARCHAR2                   /* 회계일자 */
        ,IN_ACCT_DAT2    IN VARCHAR2                   /* 회계일자 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
    )
    AS
        LV_ACCT_DAT1    VARCHAR2(08);    /* 회계일자*/
        LV_ACCT_DAT2    VARCHAR2(08);    /* 회계일자*/
        LV_PROF_AMOT    NUMBER(19);        /* 당기순이익*/

    BEGIN

        /* 재무제표 양식을 생성한다.*/
        SP_TEMP_INSERT(IN_ACCT_DAT2, IN_FSFM_CODE);

        LV_ACCT_DAT1 := IN_ACCT_DAT1;
        LV_ACCT_DAT2 := IN_ACCT_DAT2;

        /* 말단계정 먼저 정리한다.*/
        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         D1.FSFM_CODE       AS FSFM_CODE      /* 재무제표양식코드 */
                        ,D1.VIEW_ITCD       AS VIEW_ITCD      /* 양식항목코드 */
                        ,MAX(DM.VIEW_ITNM)    AS VIEW_ITNM    /* 항목명*/
                        ,SUM(CASE WHEN DM.DRCR_GUBN = 'D' THEN NVL(NM.VIEW_AM02,0) - NVL(NM.VIEW_AM05,0) END)    AS VIEW_AM01 /* 차변잔액*/
                        ,SUM(NM.VIEW_AM02)    AS VIEW_AM02    /* 차변합계*/
                        ,SUM(NM.VIEW_AM03)     AS VIEW_AM03    /* 차변당기*/
                        ,SUM(NM.VIEW_AM04)  AS VIEW_AM04     /* 대변당기*/
                        ,SUM(NM.VIEW_AM05)    AS VIEW_AM05    /* 대변합계*/
                        ,SUM(CASE WHEN DM.DRCR_GUBN = 'C' THEN NVL(NM.VIEW_AM05,0) - NVL(NM.VIEW_AM02,0) END)    AS VIEW_AM06 /* 대변잔액*/
                FROM    TA_MODLAC D1
                        LEFT JOIN TA_ACCTXM AC
                        ON    AC.ACCT_INTL = D1.ACCT_INTL
                        LEFT JOIN (
                            SELECT
                                     SUM(NM.SLIP_CHAX)  AS VIEW_AM02    /* 차변합계*/
                                    ,SUM(CASE WHEN NM.ACCT_DATE >= SUBSTR(LV_ACCT_DAT2,1,6) || '01' THEN NM.SLIP_CHAX END) AS VIEW_AM03 /* 차변당기*/
                                    ,SUM(CASE WHEN NM.ACCT_DATE >= SUBSTR(LV_ACCT_DAT2,1,6) || '01' THEN NM.SLIP_DAEX END) AS VIEW_AM04 /* 대변당기*/
                                    ,SUM(NM.SLIP_DAEX)    AS VIEW_AM05    /* 대변합계*/
                                    ,NM.ACCT_INTL       /* 계정과목코드 */
                            FROM    TA_MAMNTM NM
                            WHERE   NM.ACCT_DATE >= LV_ACCT_DAT1
                            AND     NM.ACCT_DATE <= LV_ACCT_DAT2
                            AND     NM.ACCT_UNIT = NVL(IN_ACCT_UNIT,NM.ACCT_UNIT)
                            AND     NM.ACCT_GUBN = NVL(IN_ACCT_GUBN,NM.ACCT_GUBN)
                            AND     (NVL(NM.SLIP_CHAX,0) <> 0 OR NVL(NM.SLIP_DAEX,0) <> 0)
                            GROUP   BY
                                    NM.ACCT_INTL       /* 계정과목코드 */
                            ) NM
                        ON    NM.ACCT_INTL = D1.ACCT_INTL
                        LEFT JOIN TA_MODLXM DM
                        ON    DM.FSFM_CODE = D1.FSFM_CODE
                        AND   DM.VIEW_ITCD = D1.VIEW_ITCD
                WHERE   1 = 1
                AND     D1.FSFM_CODE = IN_FSFM_CODE /* 재무제표양식코드 */
                GROUP   BY
                        D1.FSFM_CODE       /* 재무제표양식코드 */
                       ,D1.VIEW_ITCD       /* 양식항목코드 */
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.VIEW_AM01 = NVL(A.VIEW_AM01,0)    /* 차변잔액 */
                ,T.VIEW_AM02 = NVL(A.VIEW_AM02,0)    /* 차변합계 */
                ,T.VIEW_AM03 = NVL(A.VIEW_AM03,0)    /* 차변당기 */
                ,T.VIEW_AM04 = NVL(A.VIEW_AM04,0)    /* 대변당기 */
                ,T.VIEW_AM05 = NVL(A.VIEW_AM05,0)    /* 대변합계 */
                ,T.VIEW_AM06 = NVL(A.VIEW_AM06,0)    /* 대변잔액 */
                ,T.SLIP_YSNO = '1'
                ,T.CALC_YSNO = '1'
        ;

        FOR RS IN (
            SELECT    *
            FROM    TA_MODTMP TP
            WHERE   NVL(TP.CALC_YSNO,'0') <> '1'
            AND     EXISTS (
                        SELECT    *
                        FROM    TA_MODLIM D2
                        WHERE    D2.FSFM_CODE = TP.FSFM_CODE
                        AND        D2.VIEW_ITCD = TP.VIEW_ITCD
                    )
            ORDER   BY
                   TP.VIEW_ITLV DESC, TP.SORT_ORDR DESC
        )
        LOOP

            SP_TB_ITCD_SUM (
                 RS.FSFM_CODE   /* 양식 */
                ,RS.VIEW_ITCD   /* 양식항목 */
                ,RS.DRCR_GUBN   /* 차대구분 */
                );

        END LOOP;

    END;

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 항목별합계(합계잔액시산표)
    ********************************************************************************/
    PROCEDURE SP_TB_ITCD_SUM (
         IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_VIEW_ITCD    IN VARCHAR2                   /* 양식항목 */
        ,IN_DRCR_GUBN    IN VARCHAR2                   /* 차대구분 */
    )
    IS
    BEGIN

        /* 항목 정리한다.*/
        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         D2.FSFM_CODE       /* 재무제표양식코드 */
                        ,D2.VIEW_ITCD       /* 양식항목코드 */
                        ,CASE WHEN IN_DRCR_GUBN = 'D' THEN NVL(SUM(TP.VIEW_AM01),0) - NVL(SUM(TP.VIEW_AM06),0) END AS VIEW_AM01       /* 차변잔액 */
                        ,SUM(TP.VIEW_AM02)    AS VIEW_AM02       /* 차변합계 */
                        ,SUM(TP.VIEW_AM03)    AS VIEW_AM03       /* 차변당기 */
                        ,SUM(TP.VIEW_AM04)    AS VIEW_AM04       /* 대변당기 */
                        ,SUM(TP.VIEW_AM05)    AS VIEW_AM05       /* 대변합계 */
                        ,CASE WHEN IN_DRCR_GUBN = 'C' THEN NVL(SUM(TP.VIEW_AM06),0) - NVL(SUM(TP.VIEW_AM01),0) END AS VIEW_AM06       /* 대변변잔액 */
                FROM    TA_MODLIM D2
                        LEFT JOIN TA_MODTMP TP
                        ON     TP.FSFM_CODE = D2.FSFM_CODE
                        AND    TP.VIEW_ITCD = D2.OPFM_ITCD
                WHERE   D2.FSFM_CODE = IN_FSFM_CODE    /* 재무제표양식코드 */
                AND     D2.VIEW_ITCD = IN_VIEW_ITCD    /* 양식항목코드 */
                GROUP   BY
                        D2.FSFM_CODE       /* 재무제표양식코드 */
                       ,D2.VIEW_ITCD       /* 양식항목코드 */
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND      A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.VIEW_AM01 = NVL(A.VIEW_AM01,0)    /* 차변잔액 */
                ,T.VIEW_AM02 = NVL(A.VIEW_AM02,0)    /* 차변합계 */
                ,T.VIEW_AM03 = NVL(A.VIEW_AM03,0)    /* 차변당기 */
                ,T.VIEW_AM04 = NVL(A.VIEW_AM04,0)    /* 대변당기 */
                ,T.VIEW_AM05 = NVL(A.VIEW_AM05,0)    /* 대변합계 */
                ,T.VIEW_AM06 = NVL(A.VIEW_AM06,0)    /* 대변잔액 */
                ,T.CALC_YSNO = '1'
        ;

    END;



    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 항목 집계
    ********************************************************************************/
    PROCEDURE SP_ITCD_START (
         IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
    )
    AS
    BEGIN

        /* 1번 항목을 기준으로 항목의 합을 구한다.*/
        FOR RS IN (
            SELECT
                     DM.VIEW_ITCD                 /* 양식항목코드 */
                    ,DM.VIEW_ITNM                 /* 양식항목명 */
            FROM    TA_MODLXM DM
            WHERE   DM.FSFM_CODE = IN_FSFM_CODE   /* 재무제표양식코드 */
            AND     DM.VIEW_ITLV = '1'
            AND     DM.VIEW_ITCY <> 'TEXT'
            ORDER   BY
                    DM.SORT_ORDR
        )
        LOOP

            SP_ITCD_SUM (
                 IN_FSFM_CODE    /* 양식 */
                ,RS.VIEW_ITCD    /* 양식항목코드 */
            );

        END LOOP;

    END;


    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 항목 집계
    ********************************************************************************/
    PROCEDURE SP_ITCD_SUM (
         IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_VIEW_ITCD    IN VARCHAR2                   /* 양식항목코드 */
    )
    AS

        TP_ROW            TA_MODTMP%ROWTYPE;

    BEGIN


        BEGIN
            SELECT  *
            INTO    TP_ROW
            FROM    TA_MODTMP TP
            WHERE   TP.FSFM_CODE = IN_FSFM_CODE
            AND     TP.VIEW_ITCD = IN_VIEW_ITCD
            ;

            /* 계산완료는 처리하지 않는다.*/
            IF NVL(TP_ROW.CALC_YSNO,'0') = '1' THEN
                RETURN;
            END IF;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RETURN;
        END;

        FOR RS IN (
            SELECT
                     D2.FSFM_CODE                 /* 재무제표양식코드 */
                    ,D2.VIEW_ITCD                 /* 양식항목코드 */
                    ,D2.OPFM_ITCD                 /* 계산양식항목코드 */
                    ,D2.OPST_CODE                 /* 계산구분코드 */
                    ,TP.VIEW_ITNM                 /* 양식항목명 */
                    ,TP.VIEW_ITLV                 /* 양식항목레벨 */
                    ,TP.SORT_ORDR                 /* 정렬순서 */
                    ,TP.SLIP_YSNO                 /* 전표발행여부 */
                    ,TP.CALC_YSNO                 /* 계산완료여부 */
            FROM    TA_MODLIM D2
                    LEFT JOIN TA_MODTMP TP
                    ON     TP.FSFM_CODE = D2.FSFM_CODE
                    AND    TP.VIEW_ITCD = D2.OPFM_ITCD
            WHERE    D2.FSFM_CODE = IN_FSFM_CODE
            AND      D2.VIEW_ITCD = IN_VIEW_ITCD
            ORDER    BY
                    TP.SORT_ORDR
        )
        LOOP

            IF NVL(RS.CALC_YSNO,'0') <> '1' THEN
                SP_ITCD_SUM (
                     IN_FSFM_CODE    /* 양식 */
                    ,RS.OPFM_ITCD    /* 양식항목코드 */
                );
            END IF;

        END LOOP;

        MERGE INTO TA_MODTMP T
        USING    (
                SELECT    D2.FSFM_CODE                 /* 재무제표양식코드 */
                        ,D2.VIEW_ITCD                 /* 양식항목코드 */
                        ,SUM(NVL(TP.CDEB_TAMT,0)) AS CDEB_TAMT  /* 당기차변금액 */
                        ,SUM(NVL(TP.CCRS_TAMT,0)) AS CCRS_TAMT  /* 당기대변금액 */
                        ,SUM(CASE WHEN D2.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END * NVL(TP.CACC_BALA,0)) AS CACC_BALA /* 당기잔액 */
                        ,SUM(CASE WHEN D2.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END * NVL(TP.CTCM_BALA,0)) AS CTCM_BALA /* 당기당월잔액 */
                        ,SUM(NVL(TP.BDEB_TAMT,0)) AS BDEB_TAMT  /* 전기차변금액 */
                        ,SUM(NVL(TP.BCRS_TAMT,0)) AS BCRS_TAMT  /* 전기대변금액 */
                        ,SUM(CASE WHEN D2.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END * NVL(TP.BACC_BALA,0)) AS BACC_BALA /* 전기잔액 */
                        ,SUM(CASE WHEN D2.OPST_CODE = 'PLUS' THEN 1 ELSE -1 END * NVL(TP.BTCM_BALA,0)) AS BTCM_BALA /* 전기당월잔액 */
                FROM    TA_MODLIM D2
                        LEFT JOIN TA_MODTMP TP
                        ON     TP.FSFM_CODE = D2.FSFM_CODE
                        AND    TP.VIEW_ITCD = D2.OPFM_ITCD
                WHERE    D2.FSFM_CODE = IN_FSFM_CODE
                AND      D2.VIEW_ITCD = IN_VIEW_ITCD
--                AND       TP.CALC_YSNO = '1'
                GROUP    BY
                         D2.FSFM_CODE                 /* 재무제표양식코드 */
                        ,D2.VIEW_ITCD                 /* 양식항목코드 */
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                     T.CDEB_TAMT   = NVL(T.CDEB_TAMT,0) + NVL(A.CDEB_TAMT,0) /* 당기차변금액 */
                    ,T.CCRS_TAMT   = NVL(T.CCRS_TAMT,0) + NVL(A.CCRS_TAMT,0) /* 당기대변금액 */
                    ,T.CACC_BALA   = NVL(T.CACC_BALA,0) + NVL(A.CACC_BALA,0) /* 당기잔액 */
                    ,T.CTCM_BALA   = NVL(T.CTCM_BALA,0) + NVL(A.CTCM_BALA,0) /* 당기당월잔액 */
                    
                    ,T.BDEB_TAMT   = NVL(T.BDEB_TAMT,0) + NVL(A.BDEB_TAMT,0) /* 전기차변금액 */
                    ,T.BCRS_TAMT   = NVL(T.BCRS_TAMT,0) + NVL(A.BCRS_TAMT,0) /* 전기대변금액 */
                    ,T.BACC_BALA   = NVL(T.BACC_BALA,0) + NVL(A.BACC_BALA,0) /* 전기잔액 */
                    ,T.BTCM_BALA   = NVL(T.BTCM_BALA,0) + NVL(A.BTCM_BALA,0) /* 전기당월잔액 */
                    
                    ,T.CALC_YSNO   = '1'    /* 계산완료여부*/
        ;

    END;

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 재무상태표 생성
    ********************************************************************************/
    PROCEDURE SP_SAVE_BS (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BASE_YYM1    IN VARCHAR2                   /* 당기시작월 */
        ,IN_BASE_YYM2    IN VARCHAR2                   /* 당기종료월 */
        ,IN_PREV_YYM1    IN VARCHAR2                   /* 전기시작월 */
        ,IN_PREV_YYM2    IN VARCHAR2                   /* 전기종료월 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
    )
    AS
        LV_ACCT_DAT1    VARCHAR2(08);    /* 회계일자*/
        LV_ACCT_DAT2    VARCHAR2(08);    /* 회계일자*/

    BEGIN

        /* 당기부터 처리한다.*/
        LV_ACCT_DAT1 := SUBSTR(IN_BASE_YYM2,1,4) || '0000';
        LV_ACCT_DAT2 := IN_BASE_YYM2 || '31';
        
        /* 재무제표 양식을 생성한다.*/
        SP_TEMP_INSERT(LV_ACCT_DAT2, IN_FSFM_CODE);
                

        /* 전표계정 합계 당기*/
        SP_ACCT_SUM (
             IN_UPDT_USID    /* 작업자 */
            ,LV_ACCT_DAT1    /* 회계일자 */
            ,LV_ACCT_DAT2    /* 회계일자 */
            ,IN_FSFM_CODE    /* 양식 */
            ,IN_ACCT_UNIT    /* 회계단위 */
            ,IN_ACCT_GUBN    /* 사업장 */
            ,'C'             /* 당기전기구분 */
            );

        /* 전기 처리한다.*/
        LV_ACCT_DAT1 := SUBSTR(IN_PREV_YYM2,1,4) || '0000';
        LV_ACCT_DAT2 := IN_PREV_YYM2 || '31';

        /* 전표계정 합계 당기*/
        SP_ACCT_SUM (
             IN_UPDT_USID    /* 작업자 */
            ,LV_ACCT_DAT1    /* 회계일자 */
            ,LV_ACCT_DAT2    /* 회계일자 */
            ,IN_FSFM_CODE    /* 양식 */
            ,IN_ACCT_UNIT    /* 회계단위 */
            ,IN_ACCT_GUBN    /* 사업장 */
            ,'B'             /* 당기전기구분 */
            );

        /* 항목별 합계를 구한다.*/
        SP_ITCD_START (
             IN_FSFM_CODE    /* 양식 */
        );

        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         TP.FSFM_CODE                 /* 재무제표양식코드 */
                        ,TP.VIEW_ITCD                 /* 양식항목코드 */
                        ,TP.VIEW_ITNM                 /* 양식항목명 */
                        ,TP.VIEW_ITLV                 /* 양식항목레벨 */
                        ,CASE WHEN TP.LOCI_CODE = 'LT' THEN NVL(TP.CACC_BALA,0)
                             WHEN XM.VIEW_ITCD IS NOT NULL THEN NVL(TP.CACC_BALA,0) + XM.CALC_AM01
                             ELSE 0 END AS VIEW_AM01
                        ,CASE WHEN TP.LOCI_CODE = 'RT' THEN NVL(TP.CACC_BALA,0)
                             WHEN XM.VIEW_ITCD IS NOT NULL THEN NVL(TP.CACC_BALA,0) + XM.CALC_AM02
                             ELSE 0 END AS VIEW_AM02
                        ,CASE WHEN TP.LOCI_CODE = 'LT' THEN NVL(TP.BACC_BALA,0) 
                             WHEN XM.VIEW_ITCD IS NOT NULL THEN NVL(TP.BACC_BALA,0) + XM.CALC_AM03
                             ELSE 0 END AS VIEW_AM03
                        ,CASE WHEN TP.LOCI_CODE = 'RT' THEN NVL(TP.BACC_BALA,0) 
                             WHEN XM.VIEW_ITCD IS NOT NULL THEN NVL(TP.BACC_BALA,0) + XM.CALC_AM04
                             ELSE 0 END AS VIEW_AM04
                FROM    TA_MODTMP TP
                        LEFT JOIN (
                                 SELECT A.FSFM_CODE
                                       ,B.VIEW_ITCD
                                       ,CASE WHEN A.LOCI_CODE = 'RT' THEN DECODE(B.OPST_CODE, 'PLUS', 1, -1) * NVL(A.CACC_BALA,0) ELSE 0 END AS CALC_AM01
                                       ,CASE WHEN A.LOCI_CODE = 'LT' THEN DECODE(B.OPST_CODE, 'PLUS', 1, -1) * NVL(A.CACC_BALA,0) ELSE 0 END AS CALC_AM02
                                       ,CASE WHEN A.LOCI_CODE = 'RT' THEN DECODE(B.OPST_CODE, 'PLUS', 1, -1) * NVL(A.BACC_BALA,0) ELSE 0 END AS CALC_AM03
                                       ,CASE WHEN A.LOCI_CODE = 'LT' THEN DECODE(B.OPST_CODE, 'PLUS', 1, -1) * NVL(A.BACC_BALA,0) ELSE 0 END AS CALC_AM04
                                  FROM TA_MODTMP A
                                       JOIN TA_MODLXM B
                                         ON A.FSFM_CODE = B.FSFM_CODE 
                                        AND A.VIEW_ITCD = B.OPFM_ITCD   /* 계산구분코드 */
                             ) XM 
                               ON TP.FSFM_CODE = XM.FSFM_CODE
                              AND TP.VIEW_ITCD = XM.VIEW_ITCD
                WHERE   TP.FSFM_CODE = IN_FSFM_CODE
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.VIEW_AM01 = A.VIEW_AM01
                ,T.VIEW_AM02 = A.VIEW_AM02
                ,T.VIEW_AM03 = A.VIEW_AM03
                ,T.VIEW_AM04 = A.VIEW_AM04
        ;

    END;

    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 손익계산서 생성
    ********************************************************************************/
    PROCEDURE SP_SAVE_PL (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BASE_YYM1    IN VARCHAR2                   /* 당기시작월 */
        ,IN_BASE_YYM2    IN VARCHAR2                   /* 당기종료월 */
        ,IN_PREV_YYM1    IN VARCHAR2                   /* 전기시작월 */
        ,IN_PREV_YYM2    IN VARCHAR2                   /* 전기종료월 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
    )
    AS
        LV_ACCT_DAT1    VARCHAR2(08);    /* 회계일자*/
        LV_ACCT_DAT2    VARCHAR2(08);    /* 회계일자*/

    BEGIN

        /* 당기부터 처리한다.*/
        LV_ACCT_DAT1 := IN_BASE_YYM1 || '01';
        LV_ACCT_DAT2 := IN_BASE_YYM2 || '31';

        /* 재무제표 양식을 생성한다.*/
        SP_TEMP_INSERT(LV_ACCT_DAT2, IN_FSFM_CODE);

        /* 전표계정 합계 당기*/
        SP_ACCT_SUM (
             IN_UPDT_USID    /* 작업자 */
            ,LV_ACCT_DAT1    /* 회계일자 */
            ,LV_ACCT_DAT2    /* 회계일자 */
            ,IN_FSFM_CODE    /* 양식 */
            ,IN_ACCT_UNIT    /* 회계단위 */
            ,IN_ACCT_GUBN    /* 사업장 */
            ,'C'             /* 당기전기구분 */
            );

        /* 전기 처리한다.*/
        LV_ACCT_DAT1 := IN_PREV_YYM1 || '01';
        LV_ACCT_DAT2 := IN_PREV_YYM2 || '31';

        /* 전표계정 합계 당기*/
        SP_ACCT_SUM (
             IN_UPDT_USID    /* 작업자 */
            ,LV_ACCT_DAT1    /* 회계일자 */
            ,LV_ACCT_DAT2    /* 회계일자 */
            ,IN_FSFM_CODE    /* 양식 */
            ,IN_ACCT_UNIT    /* 회계단위 */
            ,IN_ACCT_GUBN    /* 사업장 */
            ,'B'             /* 당기전기구분 */
            );

        /* 항목별 합계를 구한다.*/
        SP_ITCD_START (
             IN_FSFM_CODE    /* 양식 */
        );
        
        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         TP.FSFM_CODE                 /* 재무제표양식코드 */
                        ,TP.VIEW_ITCD                 /* 양식항목코드 */
                        ,TP.VIEW_ITNM                 /* 양식항목명 */
                        ,TP.VIEW_ITLV                 /* 양식항목레벨 */
                        ,NVL(TP.CTCM_BALA,0) AS VIEW_AM01 /* 양식금액1 - 당기당월잔액 */
                        ,NVL(TP.CACC_BALA,0) AS VIEW_AM02 /* 양식금액2 - 당기잔액(누계) */
                        ,NVL(TP.BTCM_BALA,0) AS VIEW_AM03 /* 양식금액3 - 전기당월잔액 */
                        ,NVL(TP.BACC_BALA,0) AS VIEW_AM04 /* 양식금액4 - 전기잔액(누계) */
                FROM    TA_MODTMP TP
                WHERE   TP.FSFM_CODE = IN_FSFM_CODE
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.VIEW_AM01 = A.VIEW_AM01
                ,T.VIEW_AM02 = A.VIEW_AM02
                ,T.VIEW_AM03 = A.VIEW_AM03
                ,T.VIEW_AM04 = A.VIEW_AM04
        ;

    END;

    /*******************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.10.13
        내     용 : 월별 손익계산서 생성
    ********************************************************************************/
    PROCEDURE SP_SAVE_PL_MONTH (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BASE_YYM1    IN VARCHAR2                   /* 당기시작월 */
        ,IN_BASE_YYM2    IN VARCHAR2                   /* 당기종료월 */
        ,IN_FSFM_CODE    IN VARCHAR2                   /* 양식 */
        ,IN_ACCT_UNIT    IN VARCHAR2                   /* 회계단위 */
        ,IN_ACCT_GUBN    IN VARCHAR2                   /* 사업장 */
    )
    AS
        LV_ACCT_DAT1    VARCHAR2(08);    /* 회계일자 */
        LV_ACCT_DAT2    VARCHAR2(08);    /* 회계일자 */

    BEGIN

        LV_ACCT_DAT1 := IN_BASE_YYM1 || '01';
        LV_ACCT_DAT2 := IN_BASE_YYM2 || '31';
        
        /* 계산완료여부 초기화 */
        UPDATE  TA_MODTMP
        SET     CALC_YSNO = '0'
               ,CDEB_TAMT = 0
               ,CCRS_TAMT = 0
               ,CACC_BALA = 0
        ;
        
        /* 재무제표 양식을 생성한다.*/
        SP_TEMP_INSERT(LV_ACCT_DAT2, IN_FSFM_CODE);
        
        
        /* 전표계정 합계 당기*/
        SP_ACCT_SUM (
             IN_UPDT_USID    /* 작업자 */
            ,LV_ACCT_DAT1    /* 회계일자 */
            ,LV_ACCT_DAT2    /* 회계일자 */
            ,IN_FSFM_CODE    /* 양식 */
            ,IN_ACCT_UNIT    /* 회계단위 */
            ,IN_ACCT_GUBN    /* 사업장 */
            ,'C'             /* 당기전기구분 */
            );


        /* 항목별 합계를 구한다.*/
        SP_ITCD_START (
             IN_FSFM_CODE    /* 양식 */
        );

        MERGE INTO TA_MODTMP T
        USING    (
                SELECT
                         TP.FSFM_CODE   /* 재무제표양식코드 */
                        ,TP.VIEW_ITCD   /* 양식항목코드 */
                        ,TP.VIEW_ITNM   /* 양식항목명 */
                        ,TP.VIEW_ITLV   /* 양식항목레벨 */
                        ,TP.CACC_BALA   /* 당기잔액 */
                FROM    TA_MODTMP TP
                WHERE   TP.FSFM_CODE = IN_FSFM_CODE
                ) A
                ON        (
                        A.FSFM_CODE    = T.FSFM_CODE    /* 재무제표양식코드 */
                AND     A.VIEW_ITCD    = T.VIEW_ITCD    /* 계정코드 */
                )
        WHEN    MATCHED THEN UPDATE SET
                 T.VIEW_AM01 = CASE WHEN LV_ACCT_DAT1 LIKE '____01__' THEN A.CACC_BALA ELSE T.VIEW_AM01 END
                ,T.VIEW_AM02 = CASE WHEN LV_ACCT_DAT1 LIKE '____02__' THEN A.CACC_BALA ELSE T.VIEW_AM02 END
                ,T.VIEW_AM03 = CASE WHEN LV_ACCT_DAT1 LIKE '____03__' THEN A.CACC_BALA ELSE T.VIEW_AM03 END
                ,T.VIEW_AM04 = CASE WHEN LV_ACCT_DAT1 LIKE '____04__' THEN A.CACC_BALA ELSE T.VIEW_AM04 END
                ,T.VIEW_AM05 = CASE WHEN LV_ACCT_DAT1 LIKE '____05__' THEN A.CACC_BALA ELSE T.VIEW_AM05 END
                ,T.VIEW_AM06 = CASE WHEN LV_ACCT_DAT1 LIKE '____06__' THEN A.CACC_BALA ELSE T.VIEW_AM06 END
                ,T.VIEW_AM07 = CASE WHEN LV_ACCT_DAT1 LIKE '____07__' THEN A.CACC_BALA ELSE T.VIEW_AM07 END
                ,T.VIEW_AM08 = CASE WHEN LV_ACCT_DAT1 LIKE '____08__' THEN A.CACC_BALA ELSE T.VIEW_AM08 END
                ,T.VIEW_AM09 = CASE WHEN LV_ACCT_DAT1 LIKE '____09__' THEN A.CACC_BALA ELSE T.VIEW_AM09 END
                ,T.VIEW_AM10 = CASE WHEN LV_ACCT_DAT1 LIKE '____10__' THEN A.CACC_BALA ELSE T.VIEW_AM10 END
                ,T.VIEW_AM11 = CASE WHEN LV_ACCT_DAT1 LIKE '____11__' THEN A.CACC_BALA ELSE T.VIEW_AM11 END
                ,T.VIEW_AM12 = CASE WHEN LV_ACCT_DAT1 LIKE '____12__' THEN A.CACC_BALA ELSE T.VIEW_AM12 END
        ;

    END;
    
    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 재무제표 레벨정리
    ********************************************************************************/
    PROCEDURE SP_SAVE_LEVL (
         IN_VIEW_ITLV    IN VARCHAR2                   /* 양식항목레벨 */
    )
    IS
    BEGIN

        /* 조회레벨 이후 건은 삭제한다.*/
        DELETE    TA_MODTMP
        WHERE    VIEW_ITLV > IN_VIEW_ITLV
        ;

--        /* 발생금액이 없으면 삭제한다. */
--        DELETE TA_MODTMP
--        WHERE  (NVL(VIEW_AM01,0) = 0 AND
--                NVL(VIEW_AM02,0) = 0 AND
--                NVL(VIEW_AM03,0) = 0 AND
--                NVL(VIEW_AM04,0) = 0 AND
--                NVL(VIEW_AM05,0) = 0 AND
--                NVL(VIEW_AM06,0) = 0 AND
--                NVL(VIEW_AM07,0) = 0 AND
--                NVL(VIEW_AM08,0) = 0 AND
--                NVL(VIEW_AM09,0) = 0 AND
--                NVL(VIEW_AM10,0) = 0 AND
--                NVL(VIEW_AM11,0) = 0 AND
--                NVL(VIEW_AM12,0) = 0 AND
--                NVL(ZPRT_YSNO,'0') <> '1'
--                )
--        ;
--

    END;


    /*******************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.02.05
        내     용 : 계정잔액
    ********************************************************************************/
    FUNCTION SF_ACCT_BALA (
         IN_DRCR_GUBN    IN VARCHAR2    /* 차대구분 */
        ,IN_CHAX_AMNT     IN NUMBER        /* 차변금액*/
        ,IN_DAEX_AMNT     IN NUMBER        /* 대변금액*/
    )
    RETURN NUMBER
    IS

    BEGIN

        RETURN    CASE WHEN IN_DRCR_GUBN = 'D' THEN NVL(IN_CHAX_AMNT,0) - NVL(IN_DAEX_AMNT,0)
                     WHEN IN_DRCR_GUBN = 'C' THEN NVL(IN_DAEX_AMNT,0) - NVL(IN_CHAX_AMNT,0)
                     ELSE 0
                END
        ;

    END;

END PKG_FAMF0010;
/