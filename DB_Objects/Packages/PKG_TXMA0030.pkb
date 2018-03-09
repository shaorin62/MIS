CREATE OR REPLACE PACKAGE BODY UWZ."PKG_TXMA0030" AS









  /******************************************************************************
     NAME:       PKG_TXMA0030
     PURPOSE:    부가세집계처리
     REVISIONS:
     Ver        Date        Author           Description
     ---------  ----------  ---------------  ------------------------------------
     1.0        2016-07-20             1. Created this package.
  ******************************************************************************/

      /**********************************************
        부가세 마감을 확인한다.
       **********************************************/
    PROCEDURE SP_VAT_CLOSE_CHK (
         IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
        TA_VATCLS_ROW        TA_VATCLS%ROWTYPE;    /* 부가세마감처리*/

    BEGIN

        BEGIN

            SELECT    *
            INTO    TA_VATCLS_ROW
            FROM    TA_VATCLS VL
            WHERE   VL.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
            AND     VL.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
            AND     VL.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
            ;

            IF NVL(TA_VATCLS_ROW.CLSE_YSNO,'0') = '1' THEN
                RAISE_APPLICATION_ERROR(-20000, IN_VAT_YYYY || '년 '
                        || SF_GET_COMMNAME('VATX_QUTR', IN_VAT_QUARTER)
                        || ' 마감 되었습니다.'
                        );
            END IF;

        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RETURN;
        END;

    END;


      /**********************************************
        증빙자료를 부가세 기조자료로 이관한다.
       **********************************************/
    PROCEDURE SP_VATRAW_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 마감확인*/
        SP_VAT_CLOSE_CHK (
             IN_BRANCH_CD    /* VAT_지점코드 */
            ,IN_VAT_YYYY     /* VAT_VAT년도 */
            ,IN_VAT_QUARTER  /* VAT_VAT분기 */
        );

        /* 부가세RAW */
        DELETE  TA_VATRAW
        WHERE   1 = 1
        AND     BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 부가세RAW */
        INSERT INTO TA_VATRAW (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,VAT_SEQ            /* VAT_VAT일련번호 */
                ,EVID_DOCU          /* VAT_증빙종류 */
                ,SALE_TYPECD        /* VAT_매입매출구분 */
                ,VAT1_TYPECD        /* VAT_부가세종류1 */
                ,VAT2_TYPECD        /* VAT_부가세종류2 */
                ,EBILL_TYPECD       /* VAT_전자신고종류 */
                ,VATH_TYPECD        /* VAT_과세유형코드 */
                ,VATD_TYPECD        /* VAT_세부유형코드 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,CARD_NO            /* VAT_카드번호 */
                ,ITEM_NM            /* VAT_품목명 */
                ,VAT_YMD            /* VAT_발행및결재일자 */
                ,VAT_PCNT           /* VAT_매수 */
                ,VAT_SAMT           /* VAT_공급가 */
                ,VAT_VAMT           /* VAT_부가세 */
                ,VAT_TAMT           /* VAT_합계 */
                ,REF_KEY1           /* VAT_입력데이터 참조키1(회계구분) */
                ,REF_KEY2           /* VAT_입력데이터 참조키2(모듈구분) */
                ,REF_KEY3           /* VAT_입력데이터 참조키3(전표번호) */
                ,REF_KEY4           /* VAT_입력데이터 참조키4(전표순번) */
                ,REF_KEY5           /* VAT_입력데이터 참조키5(종사업자일련번호) */
                ,HOMETAX_YMD        /* VAT_국세청승인일자 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 IN_BRANCH_CD        AS BRANCH_CD   /* VAT_지점코드 */
                ,IN_VAT_YYYY        AS VAT_YYYY    /* VAT_VAT년도 */
                ,IN_VAT_QUARTER        AS VAT_QUARTER /* VAT_VAT분기 */
                ,ROWNUM                AS VAT_SEQ     /* VAT_VAT일련번호 */
                ,VT.EVID_DOCU        AS EVID_DOCU   /* VAT_증빙종류 */
                ,VT.VATX_GUBN        AS SALE_TYPECD /* VAT_매입매출구분 */
                ,VT.VATX_TYPE        AS VAT1_TYPECD /* VAT_부가세종류1 */
                ,VT.PURC_GUBN        AS VAT2_TYPECD /* VAT_부가세종류2 부가세유형*/
                ,VT.EBIL_GUBN        AS EBILL_TYPECD/* VAT_전자신고종류 */
                ,VH.VATH_TYPECD        AS VATH_TYPECD /* VAT_과세유형코드 */
                ,VT.EVID_DOCU || '/' || VT.VATX_TYPE  || '/' || VT.PURC_GUBN  || '/' || VT.BULG_GUBN AS VATD_TYPECD /* VAT_세부유형코드 */
                ,VT.CUST_CODE        AS CUST_CD     /* VAT_거래처코드 */
                ,REPLACE(VT.CARD_NUMB,'-','')        AS CARD_NO     /* VAT_카드번호 */
                ,VT.ITEM_NAME        AS ITEM_NM     /* VAT_품목명 */
                ,VT.TRNS_DATE        AS VAT_YMD     /* VAT_발행및결재일자 */
                ,1                    AS VAT_PCNT    /* VAT_매수 */
                ,NVL(VT.SUPP_AMNT,0)        AS VAT_SAMT    /* VAT_공급가 */
                ,NVL(VT.VATX_AMNT,0)        AS VAT_VAMT    /* VAT_부가세 */
                ,NVL(VT.SUMX_AMNT,0)        AS VAT_TAMT    /* VAT_합계 */
                ,''                    AS REF_KEY1    /* VAT_입력데이터 참조키1(회계구분) */
                ,''                    AS REF_KEY2    /* VAT_입력데이터 참조키2(모듈구분) */
                ,VT.SLIP_NUMB        AS REF_KEY3    /* VAT_입력데이터 참조키3(전표번호) */
                ,VT.SLIP_LINE        AS REF_KEY4    /* VAT_입력데이터 참조키4(전표순번) */
                ,VT.VATX_SEQN        AS REF_KEY5    /* VAT_입력데이터 참조키5(종사업자일련번호) */
                ,VT.TRNS_DATE        AS HOMETAX_YMD /* VAT_국세청승인일자 */
                ,IN_UPDT_USID        /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID        /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    TA_VATXXM VT
                LEFT OUTER JOIN TM_CODEXD CD
                ON    CD.COMM_CODE = 'PURC_GUBN'    /* VAT_부가세종류2 부가세유형*/
                AND    CD.COMD_CODE = VT.PURC_GUBN
                LEFT OUTER JOIN (
                    SELECT   MIN(VH.VATH_TYPECD)    AS VATH_TYPECD /* VAT_과세유형코드 */
                            ,VH.SALE_TYPECD /* VAT_매입매출구분 */
                    FROM    TA_VATCDH VH
                    WHERE   1 = 1
                    AND        VH.IS_USED = '1' /* VAT_코드사용여부 */
                    GROUP    BY
                            VH.SALE_TYPECD /* VAT_매입매출구분 */
                ) VH
                ON    VH.SALE_TYPECD = VT.VATX_GUBN

        WHERE   1 = 1
        AND        NVL(VT.DEET_YSNO,'0') <> '1'    /* 신고제외여부*/
        AND        VT.ACCT_GUBN = IN_BRANCH_CD        /* 회계구분_사업장*/

        AND        'Y' = CASE WHEN IN_VAT_QUARTER = '1' THEN /* 1기예정*/
                                CASE WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '0101' AND IN_VAT_YYYY || '0331' THEN
                                        CASE WHEN NVL(CD.REF3_FILD,'0') <> '1' THEN 'Y' END   /* 예정신고누락여부*/
                                END

                             WHEN IN_VAT_QUARTER = '2' THEN /* 1기확정*/
                                CASE WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '0101' AND IN_VAT_YYYY || '0331' THEN
                                        CASE WHEN NVL(CD.REF3_FILD,'0') = '1' THEN 'Y' END   /* 예정신고누락여부*/
                                     WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '0401' AND IN_VAT_YYYY || '0630' THEN
                                        'Y'
                                END

                             WHEN IN_VAT_QUARTER = '3' THEN /* 2기예정*/
                                CASE WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '0701' AND IN_VAT_YYYY || '0930' THEN
                                        CASE WHEN NVL(CD.REF3_FILD,'0') <> '1' THEN 'Y' END   /* 예정신고누락여부*/
                                END

                             WHEN IN_VAT_QUARTER = '4' THEN /* 2기확정*/
                                CASE WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '0701' AND IN_VAT_YYYY || '0930' THEN
                                        CASE WHEN NVL(CD.REF3_FILD,'0') = '1' THEN 'Y' END   /* 예정신고누락여부*/
                                     WHEN VT.TRNS_DATE BETWEEN IN_VAT_YYYY || '1001' AND IN_VAT_YYYY || '1231' THEN
                                        'Y'
                                END
                      END

        ORDER    BY
                VT.TRNS_DATE, VT.SLIP_NUMB, VT.SLIP_LINE
        ;

    END;

      /**********************************************
        부가세 양식별 합계
       **********************************************/
    PROCEDURE SP_VAT_SUM (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
        ,IN_VAT_APPL     IN VARCHAR2                   /* 양식구분 */
       )
    IS
        LV_CNT            NUMBER(10);
            
    BEGIN

        /* 마감확인*/
        SP_VAT_CLOSE_CHK (
             IN_BRANCH_CD    /* VAT_지점코드 */
            ,IN_VAT_YYYY     /* VAT_VAT년도 */
            ,IN_VAT_QUARTER  /* VAT_VAT분기 */
        );

        /* 부가가치세_헤더_1쪽 */
        SELECT  COUNT(*)
        INTO    LV_CNT
        FROM    TA_VAT101_H1 A
        WHERE   1 = 1
        AND     A.BRANCH_CD  = IN_BRANCH_CD    /* VAT_지점코드 */
        AND     A.VAT_YYYY   = IN_VAT_YYYY     /* VAT_VAT년도 */
        AND     A.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
        ;

        IF NVL(LV_CNT,0) = 0 THEN         
            /* 부가가치세_헤더_1쪽 */
            INSERT INTO TA_VAT101_H1 ( 
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ) 
            VALUES 
                ( 
                 IN_BRANCH_CD       /* VAT_지점코드 */
                ,IN_VAT_YYYY        /* VAT_VAT년도 */
                ,IN_VAT_QUARTER     /* VAT_VAT분기 */
                ); 
        END IF;
        
        /* 매출처별 세금계산서 합계표*/
        IF IN_VAT_APPL = 'V104' THEN
            SP_V104_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 매입처별 세금계산서 합계표*/
        ELSIF IN_VAT_APPL = 'V105' THEN
            SP_V105_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 매입처별 계산서 합계표*/
        ELSIF IN_VAT_APPL = 'V109' THEN
            SP_V109_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 매출처별 계산서 합계표*/
        ELSIF IN_VAT_APPL = 'V110' THEN
            SP_V110_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 신용카드매출전표발행등급액집계표*/
        ELSIF IN_VAT_APPL = 'V117' THEN
            SP_V117_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 건물등감가상각자산취득명세서_헤더 */
        ELSIF IN_VAT_APPL = 'V149' THEN
            SP_V149_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 공제받지못할매입세액명세서 */
        ELSIF IN_VAT_APPL = 'V153' THEN
            SP_V153_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        /* 신용카드매출전표수취명세서 */
        ELSIF IN_VAT_APPL = 'V164' THEN
            SP_V164_INSERT (
                 IN_UPDT_USID    /* 작업자 */
                ,IN_BRANCH_CD    /* VAT_지점코드 */
                ,IN_VAT_YYYY     /* VAT_VAT년도 */
                ,IN_VAT_QUARTER  /* VAT_VAT분기 */
            );

        END IF;
        
        
        MERGE INTO TA_VATPRC T   /* [부가세집계처리] */
        USING (
            --SELECT  *
            --FROM    TA_VATPRC
            --WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
            --AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
            --AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
            --AND     VAT_APPL     = IN_VAT_APPL      /* VAT_부가세기타서식종류 */
            SELECT IN_BRANCH_CD   AS BRANCH_CD
                  ,IN_VAT_YYYY    AS VAT_YYYY
                  ,IN_VAT_QUARTER AS VAT_QUARTER
                  ,IN_VAT_APPL    AS VAT_APPL
              FROM DUAL
        ) A
                ON    (
                        A.BRANCH_CD     = T.BRANCH_CD       /* VAT_지점코드 */
                AND     A.VAT_YYYY      = T.VAT_YYYY        /* VAT_VAT년도 */
                AND     A.VAT_QUARTER   = T.VAT_QUARTER     /* VAT_VAT분기 */
                AND     A.VAT_APPL      = T.VAT_APPL        /* VAT_부가세기타서식종류 */
                )
        WHEN MATCHED THEN UPDATE SET
                 T.VAT_PROCYN    = 'Y'           /* VAT_부가세처리여부 */
                ,T.UPDT_USID     = IN_UPDT_USID  /* 수정작업자 */
                ,T.UPDT_DATE     = SYSDATE       /* 수정일시 */
        WHEN NOT MATCHED THEN INSERT
                ( 
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,VAT_APPL           /* VAT_부가세기타서식종류 */
                ,VAT_PROCYN         /* VAT_부가세처리여부 */
                ,INST_DATE          /* 입력일시 */
                ,INST_USID          /* 입력작업자 */
                ,UPDT_DATE          /* 수정일시 */
                ,UPDT_USID          /* 수정작업자 */
                )
        VALUES
                (
                 IN_BRANCH_CD       /* VAT_지점코드 */
                ,IN_VAT_YYYY        /* VAT_VAT년도 */
                ,IN_VAT_QUARTER     /* VAT_VAT분기 */
                ,IN_VAT_APPL        /* VAT_부가세기타서식종류 */
                ,'Y'                  /* VAT_부가세처리여부 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID       /* 입력작업자 */
                ,SYSDATE            /* 수정일시 */
                ,IN_UPDT_USID       /* 수정작업자 */
                );

--        /* 부가세집계처리 */
--        DELETE  TA_VATPRC
--        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
--        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
--        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
--        AND     VAT_APPL     = IN_VAT_APPL      /* VAT_부가세기타서식종류 */
--        ;
--
--        /* 부가세집계처리 */
--        INSERT INTO TA_VATPRC (
--             BRANCH_CD          /* VAT_지점코드 */
--            ,VAT_YYYY           /* VAT_VAT년도 */
--            ,VAT_QUARTER        /* VAT_VAT분기 */
--            ,VAT_APPL           /* VAT_부가세기타서식종류 */
--            ,VAT_PROCYN         /* VAT_부가세처리여부 */
--            ,INST_DATE          /* 입력일시 */
--            ,INST_USID          /* 입력작업자 */
--            ,UPDT_DATE          /* 수정일시 */
--            ,UPDT_USID          /* 수정작업자 */
--            )
--        VALUES
--            (
--             IN_BRANCH_CD       /* VAT_지점코드 */
--            ,IN_VAT_YYYY        /* VAT_VAT년도 */
--            ,IN_VAT_QUARTER     /* VAT_VAT분기 */
--            ,IN_VAT_APPL        /* VAT_부가세기타서식종류 */
--            ,'Y'                  /* VAT_부가세처리여부 */
--            ,SYSDATE            /* 입력일시 */
--            ,IN_UPDT_USID       /* 입력작업자 */
--            ,SYSDATE            /* 수정일시 */
--            ,IN_UPDT_USID       /* 수정작업자 */
--            );

    END;

      /**********************************************
        매출처별 세금계산서 합계표
       **********************************************/
    PROCEDURE SP_V104_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 매출세금계산서합계표_세부 */
        DELETE  TA_VAT104_D
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매출세금계산서합계표_헤더 */
        DELETE  TA_VAT104_H
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매출세금계산서합계표_헤더 */
        INSERT INTO TA_VAT104_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,ALL_CCNT           /* VAT_거래처수(합계분) */
                ,ALL_PCNT           /* VAT_매수(합계분) */
                ,ALL_SAMT           /* VAT_공급가액(합계분) */
                ,ALL_VAMT           /* VAT_세액(합계분) */
                ,BIZNO_CCNT         /* VAT_거래처수(사업자번호발행분) */
                ,BIZNO_PCNT         /* VAT_매수(사업자번호발행분) */
                ,BIZNO_SAMT         /* VAT_공급가액(사업자번호발행분) */
                ,BIZNO_VAMT         /* VAT_세액(사업자번호발행분) */
                ,SSN_CCNT           /* VAT_거래처수(주민번호발행분) */
                ,SSN_PCNT           /* VAT_매수(주민번호발행분) */
                ,SSN_SAMT           /* VAT_공급가액(주민번호발행분) */
                ,SSN_VAMT           /* VAT_세액(주민번호발행분) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
                ,SUM(VR.ALL_CCNT  ) AS ALL_CCNT    /* VAT_거래처수(합계분) */
                ,SUM(VR.ALL_PCNT  ) AS ALL_PCNT    /* VAT_매수(합계분) */
                ,SUM(VR.ALL_SAMT  ) AS ALL_SAMT    /* VAT_공급가액(합계분) */
                ,SUM(VR.ALL_VAMT  ) AS ALL_VAMT    /* VAT_세액(합계분) */
                ,SUM(VR.BIZNO_CCNT) AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                ,SUM(VR.BIZNO_PCNT) AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                ,SUM(VR.BIZNO_SAMT) AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                ,SUM(VR.BIZNO_VAMT) AS BIZNO_VAMT  /* VAT_세액(사업자번호발행분) */
                ,SUM(VR.SSN_CCNT  ) AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                ,SUM(VR.SSN_PCNT  ) AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                ,SUM(VR.SSN_SAMT  ) AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                ,SUM(VR.SSN_VAMT  ) AS SSN_VAMT    /* VAT_세액(주민번호발행분) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    (
                SELECT
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                        ,MAX(1)                AS ALL_CCNT    /* VAT_거래처수(합계분) */
                        ,SUM(1)                AS ALL_PCNT    /* VAT_매수(합계분) */
                        ,SUM(VR.VAT_SAMT)    AS ALL_SAMT    /* VAT_공급가액(합계분) */
                        ,SUM(VR.VAT_VAMT)    AS ALL_VAMT    /* VAT_세액(합계분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_SAMT END)    AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_VAMT END)    AS BIZNO_VAMT  /* VAT_세액(사업자번호발행분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_SAMT END)    AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_VAMT END)    AS SSN_VAMT    /* VAT_세액(주민번호발행분) */
                FROM    TA_VATRAW VR
                        LEFT OUTER JOIN TA_VATCDD VD
                        ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                        AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        LEFT OUTER JOIN VA_VATCUST VC
                        ON    VC.CUST_CD    = VR.CUST_CD
                WHERE   1 = 1
                AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
                AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
                AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                AND        VD.APPL_V104 = '1'    /* 매출세금계산서합계표*/
                GROUP    BY
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                        ,NVL(VC.CUST_BIZNO,VC.CUST_SSN)
                        /*,VR.CUST_CD 중복된 사업자번호 제거 위해  NVL(VC.CUST_BIZNO,VC.CUST_SSN)로 GROUP BY 대체  */
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
                ) VR
        WHERE    1 = 1
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
        ;

        /* 매출세금계산서합계표_세부 */
        INSERT INTO TA_VAT104_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,VAT_SERIAL         /* VAT_일련번호 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,OFF_TAXB_CCNT      /* VAT_세금계산서매수 */
                ,OFF_SAMT           /* VAT_공급가액 */
                ,OFF_VAMT           /* VAT_세액 */
                ,LIQUOR_WCD         /* VAT_신고자주류코드(도매) */
                ,LIQUOR_SCD         /* VAT_주류코드(소매) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                ,MAX(ROWNUM)        AS VAT_SERIAL  /* VAT_일련번호 */
                ,VR.CUST_CD         AS CUST_CD            /* VAT_거래처코드 */
                ,SUM(1)                AS OFF_TAXB_CCNT    /* VAT_세금계산서매수 */
                ,SUM(VR.VAT_SAMT)    AS OFF_SAMT            /* VAT_공급가액 */
                ,SUM(VR.VAT_VAMT)    AS OFF_VAMT            /* VAT_세액 */
                ,''                    AS LIQUOR_WCD          /* VAT_신고자주류코드(도매) */
                ,''                    AS LIQUOR_SCD          /* VAT_주류코드(소매) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    TA_VATRAW VR
                LEFT OUTER JOIN TA_VATCDD VD
                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                LEFT OUTER JOIN VA_VATCUST VC
                ON    VC.CUST_CD    = VR.CUST_CD
        WHERE   1 = 1
        AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
        AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
        AND        VD.APPL_V104 = '1'    /* 매출세금계산서합계표*/
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                ,VR.CUST_CD        /* 거래처코드*/
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
        ;

    END;

      /**********************************************
        매입처별 세금계산서 합계표
       **********************************************/
    PROCEDURE SP_V105_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 매입세금계산서합계표_세부 */
        DELETE  TA_VAT105_D
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매입세금계산서합계표_헤더 */
        DELETE  TA_VAT105_H
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매입세금계산서합계표_헤더 */
        INSERT INTO TA_VAT105_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,ALL_CCNT           /* VAT_거래처수(합계분) */
                ,ALL_PCNT           /* VAT_매수(합계분) */
                ,ALL_SAMT           /* VAT_공급가액(합계분) */
                ,ALL_VAMT           /* VAT_세액(합계분) */
                ,BIZNO_CCNT         /* VAT_거래처수(사업자번호발행분) */
                ,BIZNO_PCNT         /* VAT_매수(사업자번호발행분) */
                ,BIZNO_SAMT         /* VAT_공급가액(사업자번호발행분) */
                ,BIZNO_VAMT         /* VAT_세액(사업자번호발행분) */
                ,SSN_CCNT           /* VAT_거래처수(주민번호발행분) */
                ,SSN_PCNT           /* VAT_매수(주민번호발행분) */
                ,SSN_SAMT           /* VAT_공급가액(주민번호발행분) */
                ,SSN_VAMT           /* VAT_세액(주민번호발행분) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
                ,SUM(VR.ALL_CCNT  ) AS ALL_CCNT    /* VAT_거래처수(합계분) */
                ,SUM(VR.ALL_PCNT  ) AS ALL_PCNT    /* VAT_매수(합계분) */
                ,SUM(VR.ALL_SAMT  ) AS ALL_SAMT    /* VAT_공급가액(합계분) */
                ,SUM(VR.ALL_VAMT  ) AS ALL_VAMT    /* VAT_세액(합계분) */
                ,SUM(VR.BIZNO_CCNT) AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                ,SUM(VR.BIZNO_PCNT) AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                ,SUM(VR.BIZNO_SAMT) AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                ,SUM(VR.BIZNO_VAMT) AS BIZNO_VAMT  /* VAT_세액(사업자번호발행분) */
                ,SUM(VR.SSN_CCNT  ) AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                ,SUM(VR.SSN_PCNT  ) AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                ,SUM(VR.SSN_SAMT  ) AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                ,SUM(VR.SSN_VAMT  ) AS SSN_VAMT    /* VAT_세액(주민번호발행분) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    (
                SELECT
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                        ,MAX(1)                AS ALL_CCNT    /* VAT_거래처수(합계분) */
                        ,SUM(1)                AS ALL_PCNT    /* VAT_매수(합계분) */
                        ,SUM(VR.VAT_SAMT)    AS ALL_SAMT    /* VAT_공급가액(합계분) */
                        ,SUM(VR.VAT_VAMT)    AS ALL_VAMT    /* VAT_세액(합계분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_SAMT END)    AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_VAMT END)    AS BIZNO_VAMT  /* VAT_세액(사업자번호발행분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_SAMT END)    AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_VAMT END)    AS SSN_VAMT    /* VAT_세액(주민번호발행분) */
                FROM    TA_VATRAW VR
                        LEFT OUTER JOIN TA_VATCDD VD
                        ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                        AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        LEFT OUTER JOIN VA_VATCUST VC
                        ON    VC.CUST_CD    = VR.CUST_CD
                WHERE   1 = 1
                AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
                AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
                AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                AND        VD.APPL_V105 = '1'    /* 매입세금계산서합계표*/
                GROUP    BY
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                        ,NVL(VC.CUST_BIZNO,VC.CUST_SSN)
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
                ) VR
        WHERE    1 = 1
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
        ;

        /* 매입세금계산서합계표_세부 */
        INSERT INTO TA_VAT105_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,VAT_SERIAL         /* VAT_일련번호 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,OFF_TAXB_CCNT      /* VAT_세금계산서매수 */
                ,OFF_SAMT           /* VAT_공급가액 */
                ,OFF_VAMT           /* VAT_세액 */
                ,LIQUOR_WCD         /* VAT_신고자주류코드(도매) */
                ,LIQUOR_SCD         /* VAT_주류코드(소매) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                ,MAX(ROWNUM)        AS VAT_SERIAL  /* VAT_일련번호 */
                ,VR.CUST_CD         AS CUST_CD            /* VAT_거래처코드 */
                ,SUM(1)                AS OFF_TAXB_CCNT    /* VAT_세금계산서매수 */
                ,SUM(VR.VAT_SAMT)    AS OFF_SAMT            /* VAT_공급가액 */
                ,SUM(VR.VAT_VAMT)    AS OFF_VAMT            /* VAT_세액 */
                ,''                    AS LIQUOR_WCD          /* VAT_신고자주류코드(도매) */
                ,''                    AS LIQUOR_SCD          /* VAT_주류코드(소매) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    TA_VATRAW VR
                LEFT OUTER JOIN TA_VATCDD VD
                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                LEFT OUTER JOIN VA_VATCUST VC
                ON    VC.CUST_CD    = VR.CUST_CD
        WHERE   1 = 1
        AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
        AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
        AND        VD.APPL_V105 = '1'    /* 매입세금계산서합계표*/
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                ,VR.CUST_CD        /* 거래처코드*/
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
        ;

    END;

      /**********************************************
        매입처별 계산서 합계표
       **********************************************/
    PROCEDURE SP_V109_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 매입계산서합계표_세부 */
        DELETE  TA_VAT109_D
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매입계산서합계표_헤더 */
        DELETE  TA_VAT109_H
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매입계산서합계표_헤더 */
        INSERT INTO TA_VAT109_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,ALL_CCNT           /* VAT_거래처수(합계분) */
                ,ALL_PCNT           /* VAT_매수(합계분) */
                ,ALL_SAMT           /* VAT_공급가액(합계분) */
--                ,BIZNO_CCNT         /* VAT_거래처수(사업자번호발행분) */
--                ,BIZNO_PCNT         /* VAT_매수(사업자번호발행분) */
--                ,BIZNO_SAMT         /* VAT_공급가액(사업자번호발행분) */
--                ,SSN_CCNT           /* VAT_거래처수(주민번호발행분) */
--                ,SSN_PCNT           /* VAT_매수(주민번호발행분) */
--                ,SSN_SAMT           /* VAT_공급가액(주민번호발행분) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
                ,SUM(VR.ALL_CCNT  ) AS ALL_CCNT    /* VAT_거래처수(합계분) */
                ,SUM(VR.ALL_PCNT  ) AS ALL_PCNT    /* VAT_매수(합계분) */
                ,SUM(VR.ALL_SAMT  ) AS ALL_SAMT    /* VAT_공급가액(합계분) */
--                ,SUM(VR.BIZNO_CCNT) AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
--                ,SUM(VR.BIZNO_PCNT) AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
--                ,SUM(VR.BIZNO_SAMT) AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
--                ,SUM(VR.SSN_CCNT  ) AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
--                ,SUM(VR.SSN_PCNT  ) AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
--                ,SUM(VR.SSN_SAMT  ) AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    (
                SELECT
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                        ,MAX(1)                AS ALL_CCNT    /* VAT_거래처수(합계분) */
                        ,SUM(1)                AS ALL_PCNT    /* VAT_매수(합계분) */
                        ,SUM(VR.VAT_SAMT)    AS ALL_SAMT    /* VAT_공급가액(합계분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_SAMT END)    AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_SAMT END)    AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                FROM    TA_VATRAW VR
                        LEFT OUTER JOIN TA_VATCDD VD
                        ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                        AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        LEFT OUTER JOIN VA_VATCUST VC
                        ON    VC.CUST_CD    = VR.CUST_CD
                WHERE   1 = 1
                AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
                AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
                AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                AND        VD.APPL_V109 = '1'    /* 매입계산서합계표*/
                GROUP    BY
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                        ,VR.CUST_CD
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
                ) VR
        WHERE    1 = 1
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
        ;

        /* 매입계산서합계표_세부 */
        INSERT INTO TA_VAT109_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,VAT_SERIAL         /* VAT_일련번호 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,OFF_BILL_CCNT      /* VAT_세금계산서매수 */
                ,OFF_SAMT           /* VAT_공급가액 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                ,MAX(ROWNUM)        AS VAT_SERIAL  /* VAT_일련번호 */
                ,VR.CUST_CD         AS CUST_CD            /* VAT_거래처코드 */
                ,SUM(1)                AS OFF_BILL_CCNT    /* VAT_세금계산서매수 */
                ,SUM(VR.VAT_SAMT)    AS OFF_SAMT            /* VAT_공급가액 */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    TA_VATRAW VR
                LEFT OUTER JOIN TA_VATCDD VD
                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                LEFT OUTER JOIN VA_VATCUST VC
                ON    VC.CUST_CD    = VR.CUST_CD
        WHERE   1 = 1
        AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
        AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
        AND        VD.APPL_V109 = '1'    /* 매입계산서합계표*/
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                ,VR.CUST_CD        /* 거래처코드*/
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
        ;

    END;



      /**********************************************
        매출처별 계산서 합계표
       **********************************************/
    PROCEDURE SP_V110_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 매출계산서합계표_세부 */
        DELETE  TA_VAT110_D
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매출계산서합계표_헤더 */
        DELETE  TA_VAT110_H
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 매출계산서합계표_헤더 */
        INSERT INTO TA_VAT110_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,ALL_CCNT           /* VAT_거래처수(합계분) */
                ,ALL_PCNT           /* VAT_매수(합계분) */
                ,ALL_SAMT           /* VAT_공급가액(합계분) */
                ,BIZNO_CCNT         /* VAT_거래처수(사업자번호발행분) */
                ,BIZNO_PCNT         /* VAT_매수(사업자번호발행분) */
                ,BIZNO_SAMT         /* VAT_공급가액(사업자번호발행분) */
                ,SSN_CCNT           /* VAT_거래처수(주민번호발행분) */
                ,SSN_PCNT           /* VAT_매수(주민번호발행분) */
                ,SSN_SAMT           /* VAT_공급가액(주민번호발행분) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
                ,SUM(VR.ALL_CCNT  ) AS ALL_CCNT    /* VAT_거래처수(합계분) */
                ,SUM(VR.ALL_PCNT  ) AS ALL_PCNT    /* VAT_매수(합계분) */
                ,SUM(VR.ALL_SAMT  ) AS ALL_SAMT    /* VAT_공급가액(합계분) */
                ,SUM(VR.BIZNO_CCNT) AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                ,SUM(VR.BIZNO_PCNT) AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                ,SUM(VR.BIZNO_SAMT) AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                ,SUM(VR.SSN_CCNT  ) AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                ,SUM(VR.SSN_PCNT  ) AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                ,SUM(VR.SSN_SAMT  ) AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    (
                SELECT
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                        ,MAX(1)                AS ALL_CCNT    /* VAT_거래처수(합계분) */
                        ,SUM(1)                AS ALL_PCNT    /* VAT_매수(합계분) */
                        ,SUM(VR.VAT_SAMT)    AS ALL_SAMT    /* VAT_공급가액(합계분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_CCNT  /* VAT_거래처수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN 1 END)            AS BIZNO_PCNT  /* VAT_매수(사업자번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '1' THEN VR.VAT_SAMT END)    AS BIZNO_SAMT  /* VAT_공급가액(사업자번호발행분) */
                        ,MAX(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_CCNT    /* VAT_거래처수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN 1 END)            AS SSN_PCNT    /* VAT_매수(주민번호발행분) */
                        ,SUM(CASE WHEN VC.CUST_DIV = '2' THEN VR.VAT_SAMT END)    AS SSN_SAMT    /* VAT_공급가액(주민번호발행분) */
                FROM    TA_VATRAW VR
                        LEFT OUTER JOIN TA_VATCDD VD
                        ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                        AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        LEFT OUTER JOIN VA_VATCUST VC
                        ON    VC.CUST_CD    = VR.CUST_CD
                WHERE   1 = 1
                AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
                AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
                AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                AND        VD.APPL_V110 = '1'    /* 매출계산서합계표*/
                GROUP    BY
                         VR.BRANCH_CD   /* VAT_지점코드 */
                        ,VR.VAT_YYYY    /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER /* VAT_VAT분기 */
                        ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                        ,VR.CUST_CD
                        ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
                ) VR
        WHERE    1 = 1
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.BILL_TYPECD /* VAT_계산서종류 */
                ,VR.DELAYYN     /* VAT_지연여부 */
        ;

        /* 매출계산서합계표_세부 */
        INSERT INTO TA_VAT110_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,BILL_TYPECD        /* VAT_계산서종류 */
                ,DELAYYN            /* VAT_지연여부 */
                ,VAT_SERIAL         /* VAT_일련번호 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,OFF_BILL_CCNT      /* VAT_세금계산서매수 */
                ,OFF_SAMT           /* VAT_공급가액 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    AS BILL_TYPECD /* VAT_계산서종류 */
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END AS DELAYYN     /* VAT_지연여부 */
                ,MAX(ROWNUM)        AS VAT_SERIAL  /* VAT_일련번호 */
                ,VR.CUST_CD         AS CUST_CD            /* VAT_거래처코드 */
                ,SUM(1)                AS OFF_BILL_CCNT    /* VAT_세금계산서매수 */
                ,SUM(VR.VAT_SAMT)    AS OFF_SAMT            /* VAT_공급가액 */
                ,IN_UPDT_USID            /* 입력작업자 */
                ,SYSDATE                /* 입력일시 */
                ,IN_UPDT_USID            /* 수정작업자 */
                ,SYSDATE                /* 수정일시 */
        FROM    TA_VATRAW VR
                LEFT OUTER JOIN TA_VATCDD VD
                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                LEFT OUTER JOIN VA_VATCUST VC
                ON    VC.CUST_CD    = VR.CUST_CD
        WHERE   1 = 1
        AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
        AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
        AND        VD.APPL_V110 = '1'    /* 매출계산서합계표*/
        GROUP    BY
                 VR.BRANCH_CD   /* VAT_지점코드 */
                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                ,VR.EBILL_TYPECD    /* VAT_계산서종류 */
                ,VR.CUST_CD        /* 거래처코드*/
                ,CASE WHEN VR.HOMETAX_YMD <= PKG_TXMA0030.SF_QUARTER_REPORT_DATE(VR.VAT_YYYY, VR.VAT_QUARTER) THEN 'N' ELSE 'Y' END /* VAT_지연여부 */
        ;

    END;

      /**********************************************
        신용카드매출전표발행등급액집계표
       **********************************************/
    PROCEDURE SP_V117_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 신용카드매출전표발행등급액집계표 */
        DELETE  TA_VAT117_H
        WHERE   1 = 1
        AND     BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 신용카드매출전표발행등급액집계표 */
        INSERT INTO TA_VAT117_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,ALL_TAMT           /* VAT_전체발행금액_합계 */
                ,ALL_CREDIT_TAMT    /* VAT_신용카드등발행금액_합계 */
                ,ALL_CASH_TAMT      /* VAT_현금영수증발행금액_합계 */
                ,TAX_TAMT           /* VAT_발행금액합계_과세매출분 */
                ,TAX_CREDIT_TAMT    /* VAT_신용카드등발행금액_과세매출분 */
                ,TAX_CASH_TAMT      /* VAT_현금영수증발행금액_과세매출분 */
                ,EXC_TAMT           /* VAT_발행금액합계_면세매출분 */
                ,EXC_CREDIT_TAMT    /* VAT_신용카드등발행금액_면세매출분 */
                ,EXC_CASH_TAMT      /* VAT_현금영수증발행금액_면세매출분 */
                ,TIP_TAMT           /* VAT_발행금액합계_봉사료 */
                ,TIP_CREDIT_TAMT    /* VAT_신용카드등발행금액_봉사료 */
                ,TIP_CASH_TAMT      /* VAT_현금영수증발행금액_봉사료 */
                ,SBILL_TAMT         /* VAT_세금계산서교부금액(집계표) */
                ,KBILL_TAMT         /* VAT_계산서교부금액(집계표) */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD       /* VAT_지점코드 */
                ,VR.VAT_YYYY        /* VAT_VAT년도 */
                ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                ,SUM(VR.VAT_SAMT + VR.VAT_VAMT) AS ALL_TAMT                       /*VAT_전체발행금액_합계*/
                ,SUM(CASE WHEN VD.APPL_V117 = 1 OR VD.APPL_V117 = 5 OR VD.APPL_V117 = 9 OR VD.APPL_V117 = 13 OR VD.APPL_V117 = 15 THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS ALL_CREDIT_TAMT  /*신용카드등발행금액_합계*/
                ,SUM(CASE WHEN VD.APPL_V117 = 3 OR VD.APPL_V117 = 7 OR VD.APPL_V117 = 11                                          THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS ALL_CASH_TAMT    /*현금영수증발행금액_합계*/
                ,SUM(CASE WHEN VD.APPL_V117 = 1 OR VD.APPL_V117 = 3 OR VD.APPL_V117 = 13                                          THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TAX_TAMT         /*발행금액합계_과세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 1 OR VD.APPL_V117 = 13                                                              THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TAX_CREDIT_TAMT  /*신용카드등발행금액_과세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 3                                                                                   THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TAX_CASH_TAMT    /*현금영수증발행금액_과세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 5 OR VD.APPL_V117 = 7 OR VD.APPL_V117 = 15                                          THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS EXC_TAMT         /*발행금액합계_면세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 5 OR VD.APPL_V117 = 15                                                              THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS EXC_CREDIT_TAMT  /*신용카드등발행금액_면세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 7                                                                                   THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS EXC_CASH_TAMT    /*현금영수증발행금액_면세매출분*/
                ,SUM(CASE WHEN VD.APPL_V117 = 9 OR VD.APPL_V117 = 11                                                              THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TIP_TAMT         /*발행금액합계_봉사료*/
                ,SUM(CASE WHEN VD.APPL_V117 = 9                                                                                   THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TIP_CREDIT_TAMT  /*신용카드등발행금액_봉사료*/
                ,SUM(CASE WHEN VD.APPL_V117 = 11                                                                                  THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS TIP_CASH_TAMT    /*현금영수증발행금액_봉사료*/
                ,SUM(CASE WHEN VD.APPL_V117 = 13                                                                                  THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS SBILL_TAMT       /*세금계산서교부금액(집계표)*/
                ,SUM(CASE WHEN VD.APPL_V117 = 15                                                                                  THEN VR.VAT_SAMT + VR.VAT_VAMT ELSE 0 END) AS KBILL_TAMT       /*계산서교부금액(집계표)*/
                ,IN_UPDT_USID       /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID       /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    TA_VATRAW VR
                LEFT OUTER JOIN TA_VATCDD VD
                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                AND VD.VATD_TYPECD = VR.VATD_TYPECD
        WHERE   VR.BRANCH_CD = IN_BRANCH_CD        /* VAT_지점코드 */
        AND     VR.VAT_YYYY  = IN_VAT_YYYY         /* VAT_VAT년도 */
        AND     VR.VAT_QUARTER = IN_VAT_QUARTER      /* VAT_VAT분기 */
        AND        NVL(VD.APPL_V117,'0') <> '0'        /* 신용카드매출전표발행금액집계표*/
        GROUP    BY
                 VR.BRANCH_CD       /* VAT_지점코드 */
                ,VR.VAT_YYYY        /* VAT_VAT년도 */
                ,VR.VAT_QUARTER     /* VAT_VAT분기 */
        ;

    END;


      /**********************************************
        건물등감가상각취득명세서
       **********************************************/
    PROCEDURE SP_V149_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 건물등감가상각자산취득명세서_헤더 */
        DELETE  TA_VAT149_H
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 건물등감가상각자산취득명세서_헤더 */
        INSERT INTO TA_VAT149_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,ASSETS_TYPECD      /* VAT_감가상각구분 */
                ,ASSETS_CCNT        /* VAT_건수_합계_고정자산 */
                ,ASSETS_SAMT        /* VAT_공급가액_합계_고정자산 */
                ,ASSETS_VAMT        /* VAT_세액_합계_고정자산 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 CD.BRANCH_CD       /* VAT_지점코드 */
                ,CD.VAT_YYYY        /* VAT_VAT년도 */
                ,CD.VAT_QUARTER     /* VAT_VAT분기 */
                ,CD.ASSETS_TYPECD   /* VAT_감가상각구분 */
                ,VR.ASSETS_CCNT     /* VAT_건수_합계_고정자산 */
                ,VR.ASSETS_SAMT     /* VAT_공급가액_합계_고정자산 */
                ,VR.ASSETS_VAMT     /* VAT_세액_합계_고정자산 */
                ,IN_UPDT_USID       /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID       /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    (
                SELECT
                         IN_BRANCH_CD        AS BRANCH_CD       /* VAT_지점코드 */
                        ,IN_VAT_YYYY            AS VAT_YYYY        /* VAT_VAT년도 */
                        ,IN_VAT_QUARTER        AS VAT_QUARTER     /* VAT_VAT분기 */
                        ,CD.COMD_CODE        AS ASSETS_TYPECD   /* VAT_감가상각구분 */
                        ,'(' || CD.COMD_CODE || ')' || CD.COMD_CDNM     AS ASSETS_TYPENM
                FROM    TM_CODEXD CD
                WHERE    CD.COMM_CODE = 'APPL_V149'
                AND        CD.REF1_FILD = '1'    /* 항목사용여부*/
                ) CD
                LEFT OUTER JOIN (
                        SELECT
                                 VR.BRANCH_CD   /* VAT_지점코드 */
                                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                                ,VD.APPL_V149        AS ASSETS_TYPECD   /* VAT_감가상각구분 */
                                ,SUM(1)                AS ASSETS_CCNT     /* VAT_건수_합계_고정자산 */
                                ,SUM(VR.VAT_SAMT)    AS ASSETS_SAMT     /* VAT_공급가액_합계_고정자산 */
                                ,SUM(VR.VAT_VAMT)    AS ASSETS_VAMT     /* VAT_세액_합계_고정자산 */
                        FROM    TA_VATRAW VR
                                LEFT OUTER JOIN TA_VATCDD VD
                                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        WHERE   1 = 1
                        AND     VR.BRANCH_CD = IN_BRANCH_CD        /* VAT_지점코드 */
                        AND     VR.VAT_YYYY  = IN_VAT_YYYY         /* VAT_VAT년도 */
                        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                        AND        NVL(VD.APPL_V149,'0') <> '0'    /* 고정사산*/
                        GROUP    BY
                                 VR.BRANCH_CD   /* VAT_지점코드 */
                                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                                ,VD.APPL_V149    /* VAT_감가상각구분 */
                ) VR
                ON    VR.BRANCH_CD = CD.BRANCH_CD    /* VAT_지점코드 */
                AND VR.VAT_YYYY  = CD.VAT_YYYY     /* VAT_VAT년도 */
                AND VR.VAT_QUARTER = CD.VAT_QUARTER  /* VAT_VAT분기 */
                AND VR.ASSETS_TYPECD = CD.ASSETS_TYPECD /* VAT_감가상각구분 */
        WHERE    1 = 1
        ;

        /* 합계를 구한다.*/
        /* 건물등감가상각자산취득명세서_헤더 */
        INSERT INTO TA_VAT149_H (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,ASSETS_TYPECD      /* VAT_감가상각구분 */
                ,ASSETS_CCNT        /* VAT_건수_합계_고정자산 */
                ,ASSETS_SAMT        /* VAT_공급가액_합계_고정자산 */
                ,ASSETS_VAMT        /* VAT_세액_합계_고정자산 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 CD.BRANCH_CD       /* VAT_지점코드 */
                ,CD.VAT_YYYY        /* VAT_VAT년도 */
                ,CD.VAT_QUARTER     /* VAT_VAT분기 */
                ,CD.ASSETS_TYPECD   /* VAT_감가상각구분 */
                ,VR.ASSETS_CCNT     /* VAT_건수_합계_고정자산 */
                ,VR.ASSETS_SAMT     /* VAT_공급가액_합계_고정자산 */
                ,VR.ASSETS_VAMT     /* VAT_세액_합계_고정자산 */
                ,IN_UPDT_USID       /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID       /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    (
                SELECT
                         IN_BRANCH_CD        AS BRANCH_CD       /* VAT_지점코드 */
                        ,IN_VAT_YYYY        AS VAT_YYYY        /* VAT_VAT년도 */
                        ,IN_VAT_QUARTER    AS VAT_QUARTER     /* VAT_VAT분기 */
                        ,CD.COMD_CODE        AS ASSETS_TYPECD   /* VAT_감가상각구분 */
                FROM    TM_CODEXD CD
                WHERE    CD.COMM_CODE = 'APPL_V149'
                AND        NVL(CD.REF1_FILD,'0') = '0'    /* 사용여부*/
                AND        CD.REF2_FILD = '1'    /* 합계여부*/
                ) CD
                LEFT OUTER JOIN (
                    SELECT
                             VR.BRANCH_CD       /* VAT_지점코드 */
                            ,VR.VAT_YYYY        /* VAT_VAT년도 */
                            ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                            ,SUM(VR.ASSETS_CCNT)    AS ASSETS_CCNT     /* VAT_건수_합계_고정자산 */
                            ,SUM(VR.ASSETS_SAMT)    AS ASSETS_SAMT     /* VAT_공급가액_합계_고정자산 */
                            ,SUM(VR.ASSETS_VAMT)    AS ASSETS_VAMT     /* VAT_세액_합계_고정자산 */
                    FROM    TA_VAT149_H VR
                    WHERE   1 = 1
                    AND     VR.BRANCH_CD = IN_BRANCH_CD    /* VAT_지점코드 */
                    AND     VR.VAT_YYYY  = IN_VAT_YYYY     /* VAT_VAT년도 */
                    AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                    GROUP    BY
                             VR.BRANCH_CD       /* VAT_지점코드 */
                            ,VR.VAT_YYYY        /* VAT_VAT년도 */
                            ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                ) VR
                ON    VR.BRANCH_CD = CD.BRANCH_CD    /* VAT_지점코드 */
                AND VR.VAT_YYYY  = CD.VAT_YYYY     /* VAT_VAT년도 */
                AND VR.VAT_QUARTER = CD.VAT_QUARTER  /* VAT_VAT분기 */
        WHERE    1 = 1
        ;

    END;

      /**********************************************
        공제받지못할매입세액명세서
       **********************************************/
    PROCEDURE SP_V153_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 공제받지못할매입세액명세서_납부재계산 */
        DELETE  TA_VAT153_D3
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;


        /* 공제받지못할매입세액명세서_정산내역 */
        DELETE  TA_VAT153_D2
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 공제받지못할매입세액명세서_안분계산 */
        DELETE  TA_VAT153_D1
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 공제받지못할매입세액명세서_세부 */
        DELETE  TA_VAT153_D
        WHERE   BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 공제받지못할매입세액명세서_헤더 */
        DELETE  TA_VAT153_H
        WHERE   1 = 1
        AND     BRANCH_CD    = IN_BRANCH_CD     /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY      /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER   /* VAT_VAT분기 */
        ;

        /* 공제받지못할매입세액명세서_헤더 */
        INSERT INTO TA_VAT153_H (
             BRANCH_CD          /* VAT_지점코드 */
            ,VAT_YYYY           /* VAT_VAT년도 */
            ,VAT_QUARTER        /* VAT_VAT분기 */
            ,INST_USID          /* 입력작업자 */
            ,INST_DATE          /* 입력일시 */
            ,UPDT_USID          /* 수정작업자 */
            ,UPDT_DATE          /* 수정일시 */
            )
        VALUES
            (
             IN_BRANCH_CD       /* VAT_지점코드 */
            ,IN_VAT_YYYY        /* VAT_VAT년도 */
            ,IN_VAT_QUARTER     /* VAT_VAT분기 */
            ,IN_UPDT_USID       /* 입력작업자 */
            ,SYSDATE            /* 입력일시 */
            ,IN_UPDT_USID       /* 수정작업자 */
            ,SYSDATE            /* 수정일시 */
            );

        /* 공제받지못할매입세액명세서_세부 */
        INSERT INTO TA_VAT153_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,UNABLE_SEQ         /* VAT_불공제세부일련번호 */
                ,UNABLE_TYPECD      /* VAT_불공제사유구분 */
                ,UNABLE_PCNT        /* VAT_불공제세금계산서매수 */
                ,UNABLE_SAMT        /* VAT_불공제공급가액 */
                ,UNABLE_VAMT        /* VAT_불공제매입세액 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 CD.BRANCH_CD       /* VAT_지점코드 */
                ,CD.VAT_YYYY        /* VAT_VAT년도 */
                ,CD.VAT_QUARTER     /* VAT_VAT분기 */
                ,CD.UNABLE_SEQ      /* VAT_불공제세부일련번호 */
                ,CD.UNABLE_TYPECD   /* VAT_불공제사유구분 */
                ,VR.UNABLE_PCNT     /* VAT_불공제세금계산서매수 */
                ,VR.UNABLE_SAMT     /* VAT_불공제공급가액 */
                ,VR.UNABLE_VAMT     /* VAT_불공제매입세액 */
                ,IN_UPDT_USID       /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID       /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    (
                SELECT
                         IN_BRANCH_CD        AS BRANCH_CD       /* VAT_지점코드 */
                        ,IN_VAT_YYYY            AS VAT_YYYY        /* VAT_VAT년도 */
                        ,IN_VAT_QUARTER        AS VAT_QUARTER     /* VAT_VAT분기 */
                        ,ROW_NUMBER() OVER(ORDER BY CD.REF1_FILD) AS UNABLE_SEQ      /* VAT_불공제세부일련번호 */
                        ,CD.REF1_FILD        AS UNABLE_TYPECD   /* VAT_불공제사유구분 */
                        ,CD.REF1_FILD || '.' || CD.COMD_CDNM     AS UNABLE_TYPENM
                        ,CD.COMD_CODE        AS BULG_GUBN
                FROM    TM_CODEXD CD
                WHERE    CD.COMM_CODE = 'BULG_GUBN'
                AND        CD.REF1_FILD IS NOT NULL /* 공제받지못할매입세액*/
                ) CD
                LEFT OUTER JOIN (
                        SELECT
                                 VR.BRANCH_CD   /* VAT_지점코드 */
                                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                                ,VD.APPL_V153        AS BULG_GUBN   /* 불공제세부 */
                                ,SUM(1)                AS UNABLE_PCNT /* VAT_불공제세금계산서매수 */
                                ,SUM(VR.VAT_SAMT)    AS UNABLE_SAMT /* VAT_불공제공급가액 */
                                ,SUM(VR.VAT_VAMT)    AS UNABLE_VAMT /* VAT_불공제매입세액 */
                        FROM    TA_VATRAW VR
                                LEFT OUTER JOIN TA_VATCDD VD
                                ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                                AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        WHERE   VR.BRANCH_CD = IN_BRANCH_CD        /* VAT_지점코드 */
                        AND     VR.VAT_YYYY  = IN_VAT_YYYY         /* VAT_VAT년도 */
                        AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                        AND        NVL(VD.APPL_V153,'0') <> '0'    /* 공제받지못할매입세액*/
                        GROUP    BY
                                 VR.BRANCH_CD   /* VAT_지점코드 */
                                ,VR.VAT_YYYY    /* VAT_VAT년도 */
                                ,VR.VAT_QUARTER /* VAT_VAT분기 */
                                ,VD.APPL_V153
                ) VR
                ON    VR.BRANCH_CD = CD.BRANCH_CD
                AND    VR.VAT_YYYY  = CD.VAT_YYYY
                AND    VR.VAT_QUARTER = CD.VAT_QUARTER
                AND    VR.BULG_GUBN = CD.BULG_GUBN
        ORDER    BY
                CD.UNABLE_SEQ
        ;

    END;


      /**********************************************
        신용카드매출전표수취명세서
       **********************************************/
    PROCEDURE SP_V164_INSERT (
         IN_UPDT_USID    IN VARCHAR2                   /* 작업자 */
        ,IN_BRANCH_CD    IN TA_VATRAW.BRANCH_CD%TYPE   /* VAT_지점코드 */
        ,IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
       )
    IS
    BEGIN

        /* 신용카드매출전표등수취명세서_세부 */
        DELETE  TA_VAT164_D
        WHERE   1 = 1
        AND     BRANCH_CD    = IN_BRANCH_CD       /* VAT_지점코드 */
        AND     VAT_YYYY     = IN_VAT_YYYY        /* VAT_VAT년도 */
        AND     VAT_QUARTER  = IN_VAT_QUARTER     /* VAT_VAT분기 */
        ;

        /* 신용카드매출전표등수취명세서_세부 */
        INSERT INTO TA_VAT164_D (
                 BRANCH_CD          /* VAT_지점코드 */
                ,VAT_YYYY           /* VAT_VAT년도 */
                ,VAT_QUARTER        /* VAT_VAT분기 */
                ,CREDIT_SEQ         /* VAT_신용카드매출일련번호 */
                ,CARD_TYPECD        /* VAT_카드구분 */
                ,CARD_MEM_NO        /* VAT_카드회원번호 */
                ,CUST_CD            /* VAT_거래처코드 */
                ,CREDIT_CCNT        /* VAT_거래건수 */
                ,OFF_SAMT           /* VAT_공급가액 */
                ,OFF_VAMT           /* VAT_세액 */
                ,INST_USID          /* 입력작업자 */
                ,INST_DATE          /* 입력일시 */
                ,UPDT_USID          /* 수정작업자 */
                ,UPDT_DATE          /* 수정일시 */
                )
        SELECT
                 VR.BRANCH_CD       /* VAT_지점코드 */
                ,VR.VAT_YYYY        /* VAT_VAT년도 */
                ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                ,ROW_NUMBER() OVER(ORDER    BY
                             VR.BRANCH_CD       /* VAT_지점코드 */
                            ,VR.VAT_YYYY        /* VAT_VAT년도 */
                            ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                            ,VR.CARD_TYPECD     /* VAT_카드구분 */
                            ,VR.CARD_MEM_NO     /* VAT_카드회원번호 */
                            ,VR.CUST_CD         /* VAT_거래처코드 */
                )    AS CREDIT_SEQ      /* VAT_신용카드매출일련번호 */
                ,VR.CARD_TYPECD     /* VAT_카드구분 */
                ,VR.CARD_MEM_NO     /* VAT_카드회원번호 */
                ,VR.CUST_CD         /* VAT_거래처코드 */
                ,VR.CREDIT_CCNT     /* VAT_거래건수 */
                ,VR.OFF_SAMT        /* VAT_공급가액 */
                ,VR.OFF_VAMT        /* VAT_세액 */
                ,IN_UPDT_USID         /* 입력작업자 */
                ,SYSDATE            /* 입력일시 */
                ,IN_UPDT_USID         /* 수정작업자 */
                ,SYSDATE            /* 수정일시 */
        FROM    (
                SELECT
                         VR.BRANCH_CD       /* VAT_지점코드 */
                        ,VR.VAT_YYYY        /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                        ,VD.APPL_V164        AS CARD_TYPECD  /* VAT_카드구분 */
                        ,VR.CARD_NO            AS CARD_MEM_NO  /* VAT_카드회원번호 */
                        ,VR.CUST_CD         AS CUST_CD        /* VAT_거래처코드 */
                        ,SUM(1)                AS CREDIT_CCNT  /* VAT_거래건수 */
                        ,SUM(VR.VAT_SAMT)    AS OFF_SAMT        /* VAT_공급가액 */
                        ,SUM(VR.VAT_VAMT)    AS OFF_VAMT        /* VAT_세액 */
                FROM    TA_VATRAW VR
                        LEFT OUTER JOIN TA_VATCDD VD
                        ON     VD.VATH_TYPECD = VR.VATH_TYPECD
                        AND VD.VATD_TYPECD = VR.VATD_TYPECD
                        LEFT OUTER JOIN VA_VATCUST VC
                        ON    VC.CUST_CD    = VR.CUST_CD
                WHERE   VR.BRANCH_CD = IN_BRANCH_CD        /* VAT_지점코드 */
                AND     VR.VAT_YYYY  = IN_VAT_YYYY         /* VAT_VAT년도 */
                AND     VR.VAT_QUARTER = IN_VAT_QUARTER  /* VAT_VAT분기 */
                AND        NVL(VD.APPL_V164,'0') <> '0'    /* 신용카드매출전표등수취명세서*/
                GROUP    BY
                         VR.BRANCH_CD       /* VAT_지점코드 */
                        ,VR.VAT_YYYY        /* VAT_VAT년도 */
                        ,VR.VAT_QUARTER     /* VAT_VAT분기 */
                        ,VD.APPL_V164        /* VAT_카드구분 */
                        ,VR.CARD_NO            /* VAT_카드회원번호 */
                        ,VR.CUST_CD         /* VAT_거래처코드 */
                ) VR
        WHERE    1 = 1
        ;

    END;


      /**********************************************
        부가세 대상기간 시작월일
       **********************************************/
    FUNCTION SF_QUARTER_FROM_YYMM (
         IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
    )
    RETURN VARCHAR2
    IS
    BEGIN

        RETURN CASE WHEN IN_VAT_QUARTER = '1' THEN '0101'    /* 1기예정*/
                     WHEN IN_VAT_QUARTER = '2' THEN '0401'    /* 1기확정*/
                    WHEN IN_VAT_QUARTER = '3' THEN '0701'    /* 2기예정*/
                    WHEN IN_VAT_QUARTER = '4' THEN '1001'    /* 2기확정*/
               END;

    END;

      /**********************************************
        부가세 대상기간 종료월일
       **********************************************/
    FUNCTION SF_QUARTER_TOXX_YYMM (
         IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
    )
    RETURN VARCHAR2
    IS
    BEGIN

        RETURN CASE WHEN IN_VAT_QUARTER = '1' THEN '0331'    /* 1기예정*/
                     WHEN IN_VAT_QUARTER = '2' THEN '0630'    /* 1기확정*/
                    WHEN IN_VAT_QUARTER = '3' THEN '0930'    /* 2기예정*/
                    WHEN IN_VAT_QUARTER = '4' THEN '1231'    /* 2기확정*/
               END;

    END;

      /**********************************************
        부가세 대상기간 종료월일 다음달 11일
       **********************************************/
    FUNCTION SF_QUARTER_REPORT_DATE (
         IN_VAT_YYYY     IN TA_VATRAW.VAT_YYYY%TYPE    /* VAT_VAT년도 */
        ,IN_VAT_QUARTER  IN TA_VATRAW.VAT_QUARTER%TYPE /* VAT_VAT분기 */
    )
    RETURN VARCHAR2
    IS
    BEGIN

        RETURN TO_CHAR(ADD_MONTHS(
                    TO_DATE(IN_VAT_YYYY || SUBSTR(PKG_TXMA0030.SF_QUARTER_TOXX_YYMM(IN_VAT_QUARTER),1,2) || '11','YYYYMMDD')
                    ,1), 'YYYYMMDD');

    END;


END PKG_TXMA0030;
/