CREATE OR REPLACE PACKAGE BODY UWZ."PKG_FAME0020" AS

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 이월 처리
    ***************************************************************************/
    PROCEDURE SP_PROC00 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YEAR    IN  VARCHAR2            /* 이월연도 */
    )
    IS
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF TRIM(IN_ACCT_YEAR) IS NULL OR LENGTH(IN_ACCT_YEAR) <> 4 THEN
          RAISE_APPLICATION_ERROR(-20000,'이월연도를 확인하십시요.[' || IN_ACCT_YEAR || ']');
        END IF;

        /*======================================================================
            STEP 2. 이월 집계 취소 처리
        ======================================================================*/    
        SP_PROC02 (
             IN_UPDT_USID    /* 수정자*/
            ,IN_ACCT_YEAR + 1 || '0000'    /* 집계연월*/
        );
        
        /*======================================================================
            STEP 3-1. 전기이월 <일집계_기본> 자료 생성
        ======================================================================*/ 
        /* 전기이월금액 생성 */
        INSERT INTO TA_MAMNTM (
                 ACCT_UNIT          /* 회계단위 */
                ,ACCT_GUBN          /* 회계구분_사업장 */
                ,ACCT_DATE          /* 회계일자 */
                ,ACCT_INTL          /* 계정과목코드 */
                ,CURR_GUBN          /* 통화구분 */
                ,SLIP_CHAX          /* 전표차변 */
                ,SLIP_DAEX          /* 전표대변 */
                ,FORI_CHAX          /* 외화차변 */
                ,FORI_DAEX          /* 외화대변 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT A.ACCT_UNIT        /* 회계단위 */
             , A.ACCT_GUBN        /* 회계구분_사업장 */
             , IN_ACCT_YEAR + 1 || '0000' AS  ACCT_DATE  /* 회계일자 */
             , A.ACCT_INTL        /* 계정과목코드 */
             , A.CURR_GUBN        /* 통화구분 */
             , CASE WHEN B.DRCR_GUBN = 'D' THEN SUM(NVL(A.SLIP_CHAX,0)) - SUM(NVL(A.SLIP_DAEX,0)) ELSE 0 END SLIP_CHAX   --원화차변
             , CASE WHEN B.DRCR_GUBN = 'C' THEN SUM(NVL(A.SLIP_DAEX,0)) - SUM(NVL(A.SLIP_CHAX,0)) ELSE 0 END SLIP_DAEX   --원화대변
             , CASE WHEN B.DRCR_GUBN = 'D' THEN SUM(NVL(A.FORI_CHAX,0)) - SUM(NVL(A.FORI_DAEX,0)) ELSE 0 END FORI_CHAX   --외화차변
             , CASE WHEN B.DRCR_GUBN = 'C' THEN SUM(NVL(A.FORI_DAEX,0)) - SUM(NVL(A.FORI_CHAX,0)) ELSE 0 END FORI_DAEX   --외화대변
             , IN_UPDT_USID         AS INST_USID    /* 입력작업자 */
             , SYSDATE              AS INST_DATE    /* 입력일시 */
             , IN_UPDT_USID         AS UPDT_USID    /* 수정작업자 */
             , SYSDATE              AS UPDT_DATE    /* 수정일시 */    
          FROM TA_MAMNTM A              /* [일집계_기본] */
               INNER JOIN TA_ACCTXM B   /* [계정코드] */
                       ON A.ACCT_INTL = B.ACCT_INTL
                      AND B.SLIP_YSNO = '1'             /* 전표등록여부 */
         WHERE A.ACCT_DATE LIKE IN_ACCT_YEAR || '%'
           AND A.ACCT_INTL < '5000000'              /* ★★NSCOM 이월 대상 계정 한정용★★ 고객사별 변경 필요 */
         GROUP BY A.ACCT_UNIT
                , A.ACCT_GUBN
                , A.ACCT_INTL
                , A.CURR_GUBN
                , B.DRCR_GUBN
        ;

        /*======================================================================
            STEP 3-2. 전기이월이익잉여금 + 당기순이익 가산
        ======================================================================*/ 
        --2016.11.07 ★★NSCOM★★용 적용 BY302
        MERGE INTO TA_MAMNTM A 
             USING (
                    SELECT A.ACCT_UNIT      /* 회계단위 */
                         , A.ACCT_GUBN      /* 회계구분_사업장 */
                         , A.ACCT_DATE      /* 회계일자 */
                         , '4301210'                        AS ACCT_INTL    /* 계정과목코드: ★★NSCOM 4301210.전기이월이익잉여금★★ 고객사별 변경 필요 */
                         , A.CURR_GUBN      /* 통화구분 */
                         , 0                                AS SLIP_CHAX    /* 전표차변 */
                         , SUM(A.SLIP_CHAX - A.SLIP_DAEX)   AS SLIP_DAEX    /* 전표대변 */
                         , 0                                AS FORI_CHAX    /* 외화차변 */
                         , SUM(A.SLIP_CHAX - A.SLIP_DAEX)   AS FORI_DAEX    /* 외화대변 */
                      FROM TA_MAMNTM A      /* [일집계_기본] */
                     WHERE A.ACCT_DATE = IN_ACCT_YEAR + 1 || '0000' /* 회계일자 */
                       AND A.CURR_GUBN = 'KRW'                      /* 통화구분 */
                     GROUP BY A.ACCT_UNIT
                            , A.ACCT_GUBN
                            , A.ACCT_DATE 
                            , A.CURR_GUBN
                   ) B
                ON (    A.ACCT_UNIT = B.ACCT_UNIT 
                    AND A.ACCT_GUBN = B.ACCT_GUBN 
                    AND A.ACCT_DATE = B.ACCT_DATE 
                    AND A.ACCT_INTL = B.ACCT_INTL 
                    AND A.CURR_GUBN = B.CURR_GUBN)
        WHEN NOT MATCHED THEN 
                INSERT (     --[일집계_기본]
                            ACCT_UNIT       --회계단위
                          , ACCT_GUBN       --회계구분_사업장
                          , ACCT_DATE       --회계일자
                          , ACCT_INTL       --계정과목코드
                          , CURR_GUBN       --통화구분
                          , SLIP_CHAX       --전표차변
                          , SLIP_DAEX       --전표대변
                          , FORI_CHAX       --외화차변
                          , FORI_DAEX       --외화대변
                          , INST_USID       --입력작업자
                          , INST_DATE       --입력일시
                          , UPDT_USID       --수정작업자
                          , UPDT_DATE       --수정일시
                ) VALUES (
                            B.ACCT_UNIT      --회계단위
                          , B.ACCT_GUBN      --회계구분_사업장
                          , B.ACCT_DATE      --회계일자
                          , B.ACCT_INTL      --계정과목코드
                          , B.CURR_GUBN      --통화구분
                          , B.SLIP_CHAX      --전표차변
                          , B.SLIP_DAEX      --전표대변
                          , B.FORI_CHAX      --외화차변
                          , B.FORI_DAEX      --외화대변
                          , IN_UPDT_USID     --입력작업자
                          , SYSDATE          --입력일시
                          , IN_UPDT_USID     --수정작업자
                          , SYSDATE          --수정일시
                )
        WHEN MATCHED THEN
                UPDATE SET 
                       A.SLIP_CHAX = A.SLIP_CHAX + B.SLIP_CHAX
                     , A.SLIP_DAEX = A.SLIP_DAEX + B.SLIP_DAEX
                     , A.FORI_CHAX = A.FORI_CHAX + B.FORI_CHAX
                     , A.FORI_DAEX = A.FORI_DAEX + B.FORI_DAEX
                     , A.UPDT_USID = IN_UPDT_USID
                     , A.UPDT_DATE = SYSDATE
        ;


        /*======================================================================
            STEP 4. 전기이월 <일집계_관리항목> 자료 생성
        ======================================================================*/ 
        INSERT INTO TA_MAMNTD (
                 ACCT_UNIT          /* 회계단위 */
                ,ACCT_GUBN          /* 회계구분_사업장 */
                ,ACCT_DATE          /* 회계일자 */
                ,ACCT_INTL          /* 계정과목코드 */
                ,CURR_GUBN          /* 통화구분 */
                ,COND_CODE          /* 관리항목코드 */
                ,COND_VACD          /* 관리항목값 */
                ,COND_VANM          /* 관리항목값명 */
                ,SLIP_CHAX          /* 전표차변 */
                ,SLIP_DAEX          /* 전표대변 */
                ,FORI_CHAX          /* 외화차변 */
                ,FORI_DAEX          /* 외화대변 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT   A.ACCT_UNIT        /* 회계단위 */
                ,A.ACCT_GUBN        /* 회계구분_사업장 */
                ,IN_ACCT_YEAR + 1 || '0000' AS  ACCT_DATE  /* 회계일자 */
                ,A.ACCT_INTL        /* 계정코드 */
                ,A.CURR_GUBN        /* 통화구분 */
                ,A.COND_CODE        /* 관리항목 */
                ,A.COND_VACD        /* 관리항목값 */
                ,MAX(A.COND_VANM)   /* 관리항목값명 */
                ,CASE WHEN B.DRCR_GUBN = 'D' THEN SUM(NVL(A.SLIP_CHAX,0)) - SUM(NVL(A.SLIP_DAEX,0)) ELSE 0 END SLIP_CHAX   --원화차변
                ,CASE WHEN B.DRCR_GUBN = 'C' THEN SUM(NVL(A.SLIP_DAEX,0)) - SUM(NVL(A.SLIP_CHAX,0)) ELSE 0 END SLIP_DAEX   --원화대변
                ,CASE WHEN B.DRCR_GUBN = 'D' THEN SUM(NVL(A.FORI_CHAX,0)) - SUM(NVL(A.SLIP_DAEX,0)) ELSE 0 END FORI_CHAX   --외화차변
                ,CASE WHEN B.DRCR_GUBN = 'C' THEN SUM(NVL(A.SLIP_DAEX,0)) - SUM(NVL(A.FORI_CHAX,0)) ELSE 0 END FORI_DAEX   --외화대변
                ,IN_UPDT_USID        /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID        /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    TA_MAMNTD A             /* [일집계_관리항목] */
                INNER JOIN TA_ACCTXM B  /* [계정코드] */
                        ON A.ACCT_INTL = B.ACCT_INTL
                INNER JOIN TA_ACCTXD C  /* [계정관리항목코드] */
                        ON B.ACCT_INTL = C.ACCT_INTL 
                       AND A.COND_CODE = C.COND_CODE
                       AND C.OVER_YSNO = 1              /* 이월여부 */
        WHERE   A.ACCT_DATE LIKE IN_ACCT_YEAR || '%'
          AND A.ACCT_INTL < '5000000'              /* ★★NSCOM 이월 대상 계정 한정용★★ 고객사별 변경 필요 */
        GROUP   BY  
                 A.ACCT_UNIT
                ,A.ACCT_GUBN
                ,A.ACCT_INTL
                ,A.CURR_GUBN
                ,A.COND_CODE
                ,A.COND_VACD
                ,B.DRCR_GUBN
        ;
        
        --일집계_관리항목 0원 라인 삭제
        DELETE FROM TA_MAMNTD               /* [일집계_관리항목] */
         WHERE ACCT_DATE = IN_ACCT_YEAR + 1 || '0000'   /* 회계일자 */
           AND SLIP_CHAX = 0                            /* 원화차변 */
           AND SLIP_DAEX = 0                            /* 원화대변 */
           AND FORI_CHAX = 0                            /* 외화차변 */
           AND FORI_DAEX = 0                            /* 외화대변 */
        ;
        
    END;

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 집계 처리
    ***************************************************************************/
    PROCEDURE SP_PROC01 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YYMM    IN  VARCHAR2            /* 집계연월 */
    )
    IS
    BEGIN

        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF TRIM(IN_ACCT_YYMM) IS NULL OR LENGTH(IN_ACCT_YYMM) <> 6 THEN
        
            RAISE_APPLICATION_ERROR(-20000,'집계연월을 확인하십시요.[' || IN_ACCT_YYMM || ']');
            
        END IF;

        /*======================================================================
            STEP 2. 집계 취소 처리
        ======================================================================*/    
        SP_PROC02 (
            IN_UPDT_USID    /* 수정자 */
          , IN_ACCT_YYMM    /* 집계연월 */
        );
    
        /*======================================================================
            STEP 3-1. 일집계_기본 집계 처리
        ======================================================================*/   
        INSERT INTO TA_MAMNTM (
                 ACCT_UNIT          /* 회계단위 */
                ,ACCT_GUBN          /* 회계구분_사업장 */
                ,ACCT_DATE          /* 회계일자 */
                ,ACCT_INTL          /* 계정과목코드 */
                ,CURR_GUBN          /* 통화구분 */
                ,SLIP_CHAX          /* 전표차변 */
                ,SLIP_DAEX          /* 전표대변 */
                ,FORI_CHAX          /* 외화차변 */
                ,FORI_DAEX          /* 외화대변 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT  A.ACCT_UNIT        /* 회계단위 */
                ,A.ACCT_GUBN        /* 회계구분_사업장 */
                ,A.ACCT_DATE        /* 회계일자 */
                ,A.ACCT_INTL        /* 계정과목코드 */
                ,A.CURR_GUBN        /* 통화구분 */
                ,SUM(CASE WHEN A.DRCR_GUBN = 'D' THEN A.SLIP_AMNT ELSE 0 END)  AS SLIP_CHAX        /* 전표차변 */
                ,SUM(CASE WHEN A.DRCR_GUBN = 'C' THEN A.SLIP_AMNT ELSE 0 END)  AS SLIP_DAEX        /* 전표대변 */
                ,SUM(CASE WHEN A.DRCR_GUBN = 'D' THEN A.FORI_AMNT ELSE 0 END)  AS FORI_CHAX        /* 외화차변 */
                ,SUM(CASE WHEN A.DRCR_GUBN = 'C' THEN A.FORI_AMNT ELSE 0 END)  AS FORI_DAEX       /* 외화대변 */
                ,IN_UPDT_USID        AS UPDT_USID        /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID        AS UPDT_USID        /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    TA_SLIPNT A
        WHERE    A.ACCT_DATE LIKE IN_ACCT_YYMM || '%'
        GROUP    BY
                 A.ACCT_UNIT        /* 회계단위 */
                ,A.ACCT_GUBN        /* 회계구분_사업장 */
                ,A.ACCT_DATE        /* 회계일자 */
                ,A.ACCT_INTL        /* 계정과목코드 */
                ,A.CURR_GUBN        /* 통화구분 */
        ;

        /*======================================================================
            STEP 3-2. 일집계_관리항목 집계 처리
        ======================================================================*/
        INSERT INTO TA_MAMNTD (
                 ACCT_UNIT          /* 회계단위 */
                ,ACCT_GUBN          /* 회계구분_사업장 */
                ,ACCT_DATE          /* 회계일자 */
                ,ACCT_INTL          /* 계정과목코드 */
                ,CURR_GUBN          /* 통화구분 */
                ,COND_CODE          /* 관리항목코드 */
                ,COND_VACD          /* 관리항목값 */
                ,COND_VANM          /* 관리항목값명 */
                ,SLIP_CHAX          /* 전표차변 */
                ,SLIP_DAEX          /* 전표대변 */
                ,FORI_CHAX          /* 외화차변 */
                ,FORI_DAEX          /* 외화대변 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT ST.ACCT_UNIT        /* 회계단위 */
             , ST.ACCT_GUBN        /* 회계구분_사업장 */
             , ST.ACCT_DATE        /* 회계일자 */
             , ST.ACCT_INTL        /* 계정과목코드 */
             , ST.CURR_GUBN        /* 통화구분 */
             , AD.COND_CODE        /* 관리항목코드 */
             , CASE WHEN TRIM(SF.COND_VACD) IS NULL THEN TO_NCHAR('*') ELSE SF.COND_VACD END AS COND_VACD /* 관리항목값 */
             , MAX(SF.COND_VANM)        AS COND_VANM   /* 관리항목값명 */
             , SUM(CASE WHEN ST.DRCR_GUBN = 'D' THEN ST.SLIP_AMNT ELSE 0 END)  AS SLIP_CHAX        /* 전표차변 */
             , SUM(CASE WHEN ST.DRCR_GUBN = 'C' THEN ST.SLIP_AMNT ELSE 0 END)  AS SLIP_DAEX        /* 전표대변 */
             , SUM(CASE WHEN ST.DRCR_GUBN = 'D' THEN ST.FORI_AMNT ELSE 0 END)  AS FORI_CHAX        /* 외화차변 */
             , SUM(CASE WHEN ST.DRCR_GUBN = 'C' THEN ST.FORI_AMNT ELSE 0 END)  AS FORI_DAEX       /* 외화대변 */
             , IN_UPDT_USID        AS UPDT_USID         /* 입력작업자 */
             , SYSDATE                                  /* 입력일시 */
             , IN_UPDT_USID        AS UPDT_USID         /* 수정작업자 */
             , SYSDATE                                  /* 수정일시 */
          FROM TA_SLIPNT ST             /* [전표분개내역] */
               LEFT JOIN TA_ACCTXD AD   /* [계정관리항목코드] */
                      ON AD.ACCT_INTL = ST.ACCT_INTL
               LEFT JOIN TA_SLIPRF SF   /* [전표관리항목] */
                      ON SF.SLIP_NUMB = ST.SLIP_NUMB
                     AND SF.SLIP_LINE = ST.SLIP_LINE
                     AND SF.COND_CODE = AD.COND_CODE
         WHERE ST.ACCT_DATE LIKE IN_ACCT_YYMM || '%' 
           AND (AD.UNUS_YSNO = '1' OR AD.OVER_YSNO = '1')
         GROUP BY ST.ACCT_UNIT        /* 회계단위 */
                , ST.ACCT_GUBN        /* 회계구분_사업장 */
                , ST.ACCT_DATE        /* 회계일자 */
                , ST.ACCT_INTL        /* 계정과목코드 */
                , ST.CURR_GUBN        /* 통화구분 */
                , AD.COND_CODE        /* 관리항목코드 */
                , CASE WHEN TRIM(SF.COND_VACD) IS NULL THEN TO_NCHAR('*') ELSE SF.COND_VACD END /* 관리항목값 */
        ;             
        
    END;

    /***************************************************************************
        작  성  자 : 하창연
        작  성  일 : 2016.07.20
        내      용 : 집계 취소
    ***************************************************************************/
    PROCEDURE SP_PROC02 (
        IN_UPDT_USID    IN  VARCHAR2            /* 수정자 */                   
      , IN_ACCT_YYMM    IN  VARCHAR2            /* 집계연월 */
    )
    IS
    BEGIN
    
        /* 관리항목집계 삭제 */
        DELETE TA_MAMNTD A  /* [일집계_관리항목] */
         WHERE A.ACCT_DATE LIKE IN_ACCT_YYMM || '%'
        ;

        /* 계정집계 삭제 */
        DELETE TA_MAMNTM A  /* [일집계_기본] */
         WHERE A.ACCT_DATE LIKE IN_ACCT_YYMM || '%'
        ;
        
    END;

END PKG_FAME0020;
/