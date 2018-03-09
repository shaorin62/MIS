CREATE OR REPLACE PACKAGE BODY UWZ.PKG_IFBATCHPROC AS

/*
--실행 샘플
BEGIN
    --PKG_IFBATCHPROC.SP_BATCH_PROC('SYKIM', 'ALL', NULL, NULL, NULL);
    PKG_IFBATCHPROC.SP_BATCH_PROC('SYKIM', 'ACTR', NULL, NULL, NULL);   --ACTR.회계-계좌거래내역 가져오기
END;

--실행 로그 조회
SELECT * FROM TM_IFLOGL ORDER BY ITFC_TMST DESC

*/

    /***************************************************************************
        공용변수
    ***************************************************************************/
    cITFC_TMST          TM_IFLOGL.ITFC_TMST%TYPE;    --인터페이스타임스템프
    cWORK_USID          TM_IFLOGL.UPDT_USID%TYPE;    --작업자ID
    cITFC_TYPE          TM_IFLOGL.ITFC_TYPE%TYPE;    --인터페이스유형[ITFC_TYPE]
    cREF1_FILD          TM_IFLOGL.REF1_FILD%TYPE;    --보조1필드
    cREF2_FILD          TM_IFLOGL.REF2_FILD%TYPE;    --보조2필드
    cREF3_FILD          TM_IFLOGL.REF3_FILD%TYPE;    --보조3필드
    cREMK_300X          TM_IFLOGL.REMK_300X%TYPE;    --비고300 
    nWORK_CUNT          NUMBER(15);                  --작업자료수
    sSql               VARCHAR2(32000);

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.19
        내      용 : I/F LOG 기록
    ***************************************************************************/
    PROCEDURE SP_WRITE_LOG (
        iITFC_TMST      TM_IFLOGL.ITFC_TMST%TYPE    --인터페이스타임스템프
      , iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드
      , iCMPL_YSNO      TM_IFLOGL.CMPL_YSNO%TYPE    --완료여부
      , iREMK_300X      TM_IFLOGL.REMK_300X%TYPE    --비고300      
    )
    AS
        PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    
        --[인터페이스로그]
        MERGE INTO TM_IFLOGL A
             USING (SELECT iITFC_TMST AS ITFC_TMST FROM DUAL) B
                ON (A.ITFC_TMST = B.ITFC_TMST)
        WHEN MATCHED THEN 
            UPDATE                   
               SET A.ITFC_TYPE = iITFC_TYPE     --인터페이스유형[ITFC_TYPE]
                 , A.REF1_FILD = iREF1_FILD     --보조1필드
                 , A.REF2_FILD = iREF2_FILD     --보조2필드
                 , A.REF3_FILD = iREF3_FILD     --보조3필드
                 , A.ITFC_EDTM = SYSDATE        --인터페이스종료일시
                 , A.CMPL_YSNO = iCMPL_YSNO     --완료여부
                 , A.REMK_300X = iREMK_300X     --비고300
                 , A.UPDT_USID = iWORK_USID     --수정작업자
                 , A.UPDT_DATE = SYSDATE        --수정일시
        WHEN NOT MATCHED THEN 
            INSERT (    
                        ITFC_TMST       --인터페이스타임스템프
                      , ITFC_TYPE       --인터페이스유형[ITFC_TYPE]
                      , REF1_FILD       --보조1필드
                      , REF2_FILD       --보조2필드
                      , REF3_FILD       --보조3필드
                      , ITFC_BEDT       --인터페이스시작일시
                      , ITFC_EDTM       --인터페이스종료일시
                      , CMPL_YSNO       --완료여부
                      , REMK_300X       --비고300
                      , INST_USID       --입력작업자
                      , INST_DATE       --입력일시
                      , UPDT_USID       --수정작업자
                      , UPDT_DATE       --수정일시
            ) VALUES (
                        iITFC_TMST      --인터페이스타임스템프
                      , iITFC_TYPE      --인터페이스유형[ITFC_TYPE]
                      , iREF1_FILD      --보조1필드
                      , iREF2_FILD      --보조2필드
                      , iREF3_FILD      --보조3필드
                      , SYSDATE         --인터페이스시작일시
                      , NULL            --인터페이스종료일시
                      , '0'             --완료여부
                      , iREMK_300X      --비고300
                      , iWORK_USID      --입력작업자
                      , SYSDATE         --입력일시
                      , iWORK_USID      --수정작업자
                      , SYSDATE         --수정일시
            )
        ;
        
        COMMIT;
    
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.09.19
        내      용 : 회계-법인카드사용내역 가져오기
    ***************************************************************************/
    PROCEDURE SP_GET_FAM_CARD (
        iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드(처리조건1)
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드(처리조건2)
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드(처리조건3)
    )
    AS
        PRAGMA AUTONOMOUS_TRANSACTION;
        TA_CARDAM_REC   TA_CARDAM%ROWTYPE; /* 매입내역 */
        nDUPL_CUNT      INT;               /* 이전카드번호로 전송된 매입내역 건수 */
        nPASS_CUNT      NUMBER(15);        /* 중복수신 방지 건수 */
        
    BEGIN
    
        IF USER <> 'UWZ' THEN
            DBMS_OUTPUT.PUT_LINE('USER NO RIGHT TO RUN . THIS USER NAME IS  ' || USER );
            RETURN;
        END IF;
   
        /*==============================================================
            STEP 1. I/F LOG 기록(시작 시)
        ==============================================================*/
        cITFC_TMST := SYSTIMESTAMP;     --인터페이스타임스템프
        cWORK_USID := iWORK_USID;       --작업자ID
        cITFC_TYPE := iITFC_TYPE;       --인터페이스유형[ITFC_TYPE]
        cREF1_FILD := NULL;             --보조1필드
        cREF2_FILD := NULL;             --보조2필드
        cREF3_FILD := NULL;             --보조3필드
        cREMK_300X := NULL;             --비고300
         
        SP_WRITE_LOG(cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', cREMK_300X);

       --RAISE_APPLICATION_ERROR(-20000, '..' || iWORK_USID);
            
        nWORK_CUNT := 0;
        nPASS_CUNT := 0;
        
        /*==============================================================
            STEP 2. 법인카드 매입내역 처리
        ==============================================================*/

        /*==================================================================
                1) 법인카드 매입내역 자료 가져온다.
        ==================================================================*/
        FOR CARD_USE IN (
            SELECT  A.*
                    , C.CUST_CODE
            FROM    BICNET_TBLUSEINFO A                   /* [하나은행_법인카드매입내역] */
                    INNER JOIN TA_CARDXM B
                            ON A.STRCARDNUMB = B.PURE_CDNB
                    LEFT  JOIN 
                            (SELECT MAX(NVL(B.CUST_CODE, A.CUST_CODE)) AS CUST_CODE
                                    , A.BIZR_NUMB
                               FROM TA_CUSTXM A
                                    LEFT JOIN TA_CUSTXM B
                                          ON A.MAJR_CUST = B.CUST_CODE --대표거래처
                              GROUP BY A.BIZR_NUMB
                            ) C
                            ON A.STRSTOREREGINUMB = C.BIZR_NUMB
            WHERE   (A.ERP_YN = 'N' OR A.ERP_YN IS NULL)       /* ERP확인여부(미연계자료만조회) */
            AND     A.STRACKDATE >= '20170101'                /* NSCOM 시스템 오픈일 */
            ORDER   BY
                    A.INDATE            /* 데이타제공일 */
                    ,A.STRPURCHASEFLAG   /* 매입구분 1:승인,2:매입 3:취소,4:미매입 */
                    ,A.STRACKDATE       /* 승인일자 */
                    ,A.STRCARDNUMB      /* 카드번호 */
                    ,A.STRACKNO         /* 승인번호 */
                    ,A.STRFILLER_6      /* 순번기준일 */
                    ,A.STRNONESEQS      /* 일련번호 */
        )
        LOOP 
            
            
            --비고(오류 발생 시 원인 자료 식별을 위해 보관)
            cREMK_300X := ' [CARD_USEINFO] ' 
                            || '(KEY: STRCARDNUMB = '||TRIM(CARD_USE.STRCARDNUMB)
                            || ', STRACKNO = '||TRIM(CARD_USE.STRACKNO)
                            || ', STRFILLER_6 = '||TRIM(CARD_USE.STRFILLER_6)
                            || ', STRNONESEQS = '||TRIM(CARD_USE.STRNONESEQS)||')';


            TA_CARDAM_REC := NULL;

            TA_CARDAM_REC.APPR_DATE        := TRIM(CARD_USE.STRACKDATE);           /* 승인일자 */
            TA_CARDAM_REC.CARD_APPR        := TRIM(CARD_USE.STRACKNO);             /* 카드승인번호 */
            TA_CARDAM_REC.APPR_AMNT        := TRIM(CARD_USE.STRACKAMOUNT);     /* 승인금액 */

            /* 매입구분 1:승인,2:매입 3:취소,4:미매입 */
            IF TRIM(CARD_USE.STRPURCHASEFLAG) = '3' THEN 
                TA_CARDAM_REC.APPR_GUBN        := '20';                         /* 승인구분 */
            ELSE
                TA_CARDAM_REC.APPR_GUBN        := '10';                         /* 승인구분 */
            END IF;

            TA_CARDAM_REC.CARD_NUMB        :=     SUBSTR(REPLACE(TRIM(CARD_USE.STRCARDNUMB), '-', ''), 1, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_USE.STRCARDNUMB), '-', ''), 5, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_USE.STRCARDNUMB), '-', ''), 9, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_USE.STRCARDNUMB), '-', ''), 13, 4);
                                                               
            TA_CARDAM_REC.CHIN_NAME        := TRIM(CARD_USE.STRSTORENAME);               /* 가맹점명 */
            TA_CARDAM_REC.CHIN_NUMB        := TRIM(REPLACE(TRIM(CARD_USE.STRSTOREREGINUMB),'-',''));    /* 가맹점사업자번호 */
            TA_CARDAM_REC.BSNS_TYPE        := TRIM(CARD_USE.STRSTORETYPE);                   /* 업종 */
            TA_CARDAM_REC.CHIN_IDXX        := '';                              /* 가맹점번호 */
            TA_CARDAM_REC.APPR_TAXX        := CARD_USE.STRVAT;                        /* 부가세 */
            TA_CARDAM_REC.SUPP_AMNT        := CARD_USE.STRKOAMOUNT;                   /* 공급가액 */
            TA_CARDAM_REC.VATX_AMNT        := CARD_USE.STRVAT;                       /* 세액 */
            TA_CARDAM_REC.HALB_TERM        := CARD_USE.STRALLOTMENTMON;               /* 할부기간 */
            
            IF CARD_USE.STRTAXCLOSE = 'Y' THEN    /* 휴폐업정보 */
                TA_CARDAM_REC.CLOS_CODE        := NULL;
            ELSE
                TA_CARDAM_REC.CLOS_CODE        := '1';
            END IF;
                 
            TA_CARDAM_REC.ACCT_INTL        := NULL;                           /* 계정코드 */
            TA_CARDAM_REC.REMK_NOTE        := NULL;                           /* 적요 */
            TA_CARDAM_REC.EMPL_NUMB        := NULL;                           /* 사원번호 */
            TA_CARDAM_REC.CUST_CODE        := CARD_USE.CUST_CODE;               /* 거래처코드 */
            TA_CARDAM_REC.BUDG_GUBN        := NULL;                           /* 예산구분 */
            TA_CARDAM_REC.SLIP_NUMB        := NULL;                           /* 전표번호 */
            TA_CARDAM_REC.SLIP_LINE        := NULL;                           /* 전표순번 */
            TA_CARDAM_REC.DEPT_CODE        := NULL;                           /* 부서코드 */
            
            IF NVL(CARD_USE.STRVAT,0) <> 0 THEN
                TA_CARDAM_REC.VATX_YSNO    := '1';         /* 부가세대상여부 */
            ELSE
                TA_CARDAM_REC.VATX_YSNO    := '0';         /* 부가세대상여부 */
            END IF;
            
            TA_CARDAM_REC.BUYX_DATE        := CARD_USE.STRBUYDATE;             /* 매입일자 */            
            TA_CARDAM_REC.CSPS_CODE        := '0';                           /* 처리상태 */
            TA_CARDAM_REC.INST_USID        := cWORK_USID||'-'||cITFC_TYPE;      /* 입력작업자 */
            TA_CARDAM_REC.INST_DATE        := SYSDATE;                       /* 입력일시 */
            TA_CARDAM_REC.UPDT_USID        := cWORK_USID||'-'||cITFC_TYPE;      /* 수정작업자 */
            TA_CARDAM_REC.UPDT_DATE        := SYSDATE;                       /* 수정일시 */

            TA_CARDAM_REC.SUPP_AMNT        := NVL(TA_CARDAM_REC.APPR_AMNT,0) - NVL(TA_CARDAM_REC.VATX_AMNT,0);     /* 공급가액 = 승인금액 - 부가세*/

            
            /* 이전카드번호로 수신된 매입내역 존재하는 경우는 제외(중복수신방지) */
            SELECT COUNT(1)                 
              INTO nDUPL_CUNT
              FROM TA_CARDXM A
                   INNER JOIN TA_CARDAM B
                           ON A.BEFO_CARD = B.CARD_NUMB /* 이전카드번호 */  
             WHERE A.CARD_NUMB = TA_CARDAM_REC.CARD_NUMB /* 카드번호 */
               AND B.APPR_DATE = TA_CARDAM_REC.APPR_DATE /* 승인일자 */
               AND B.CARD_APPR = TA_CARDAM_REC.CARD_APPR /* 승인번호 */
               ;
            
            IF nDUPL_CUNT > 0 THEN
            
                    /*==================================================================
                            3) 이전카드번호로 수신된 매입내역 존재!! PASS Flag UPDATE
                    ==================================================================*/
                    UPDATE  BICNET_TBLUSEINFO       /* [하나은행_법인카드매입내역] */ 
                    SET     ERP_YN = 'P'            /* ERP확인여부 - 중복건으로 PASS */
                           ,ERP_DATE = SYSDATE      /* ERP확인일시 */
                    WHERE   (ERP_YN = 'N' OR ERP_YN IS NULL)     /* ERP확인여부(미연계자료만조회) */
                    AND     STRCARDNUMB = CARD_USE.STRCARDNUMB        /* 카드번호 */
                    AND     STRACKNO    = CARD_USE.STRACKNO          /* 승인번호 */
                    AND     STRFILLER_6 = CARD_USE.STRFILLER_6         /* 순번기준일 */            
                    AND     STRNONESEQS = CARD_USE.STRNONESEQS        /* 일자별순번 */
                    ;
                    
                    nPASS_CUNT := nPASS_CUNT + 1;
                    
            ELSE             
                       
                    /*==================================================================
                            3) 법인카드 매입내역 INSERT
                    ==================================================================*/
                    INSERT INTO TA_CARDAM (
                         APPR_DATE                    /* 승인일자 */
                        ,CARD_NUMB                    /* 카드번호 */
                        ,CARD_APPR                    /* 승인번호 */
                        ,APPR_GUBN                    /* 승인구분 */
                        ,CHIN_NAME                    /* 가맹점명 */
                        ,CHIN_NUMB                    /* 가맹점사업자번호 */
                        ,CHIN_IDXX                    /* 가맹점번호 */
                        ,APPR_AMNT                    /* 승인금액 */
                        ,APPR_TAXX                    /* 부가가치세 */
                        ,SUPP_AMNT                    /* 공급가액 */
                        ,VATX_AMNT                    /* 세액 */
                        ,HALB_TERM                    /* 할부기간 */
                        ,CLOS_CODE                    /* 휴폐업정보 */
                        ,ACCT_INTL                    /* 계정코드 */
                        ,REMK_NOTE                    /* 적요 */
                        ,EMPL_NUMB                    /* 사원번호 */
                        ,CUST_CODE                    /* 거래처코드 */
                        ,BUYX_DATE                    /* 매입일자 */
                        ,SLIP_NUMB                    /* 전표번호 */
                        ,SLIP_LINE                    /* 전표순번 */
                        ,DEPT_CODE                    /* 부서코드 */
                        ,VATX_YSNO                    /* 부가세대상여부 */
                        ,CSPS_CODE                    /* 처리상태 */
                        ,INST_USID                    /* 입력작업자 */
                        ,INST_DATE                    /* 입력일시 */
                        ,UPDT_USID                    /* 수정작업자 */
                        ,UPDT_DATE                    /* 수정일시 */
                        )
                    VALUES
                        (
                         TA_CARDAM_REC.APPR_DATE      /* 승인일자 */
                        ,TA_CARDAM_REC.CARD_NUMB      /* 카드번호 */
                        ,TA_CARDAM_REC.CARD_APPR      /* 승인번호 */
                        ,TA_CARDAM_REC.APPR_GUBN      /* 승인구분 */
                        ,TA_CARDAM_REC.CHIN_NAME      /* 가맹점명 */
                        ,TA_CARDAM_REC.CHIN_NUMB      /* 가맹점사업자번호 */
                        ,TA_CARDAM_REC.CHIN_IDXX      /* 가맹점번호 */
                        ,TA_CARDAM_REC.APPR_AMNT      /* 승인금액 */
                        ,TA_CARDAM_REC.APPR_TAXX      /* 부가가치세 */
                        ,TA_CARDAM_REC.SUPP_AMNT      /* 공급가액 */
                        ,TA_CARDAM_REC.VATX_AMNT      /* 세액 */
                        ,TA_CARDAM_REC.HALB_TERM      /* 할부기간 */
                        ,TA_CARDAM_REC.CLOS_CODE      /* 휴폐업정보 */
                        ,TA_CARDAM_REC.ACCT_INTL      /* 계정코드 */
                        ,TA_CARDAM_REC.REMK_NOTE      /* 적요 */
                        ,TA_CARDAM_REC.EMPL_NUMB      /* 사원번호 */
                        ,TA_CARDAM_REC.CUST_CODE      /* 거래처코드 */
                        ,TA_CARDAM_REC.BUYX_DATE      /* 매입일자 */
                        ,TA_CARDAM_REC.SLIP_NUMB      /* 전표번호 */
                        ,TA_CARDAM_REC.SLIP_LINE      /* 전표순번 */
                        ,TA_CARDAM_REC.DEPT_CODE      /* 부서코드 */
                        ,TA_CARDAM_REC.VATX_YSNO      /* 부가세대상여부 */
                        ,TA_CARDAM_REC.CSPS_CODE      /* 처리상태 */
                        ,TA_CARDAM_REC.INST_USID      /* 등록자 */
                        ,TA_CARDAM_REC.INST_DATE      /* 등록일시 */
                        ,TA_CARDAM_REC.UPDT_USID      /* 수정작업자 */
                        ,TA_CARDAM_REC.UPDT_DATE      /* 수정일시 */
                    );
            
                     
        --            --승인내역이 취소일때 이전승인건이 존재하면 취소완료로 처리한다.
        --            SP_CARD_APPR_CANCEL (TA_CARDAM_REC);
        --
        --            --휴페업정보를 요청한다
        --            SP_HANA_CLOSEINFO_REQUEST (
        --                    TA_CARDAM_REC.CHIN_NUMB     /* 가맹점사업자번호 */
        --                    ,TA_CARDAM_REC.CHIN_NAME      /* 가맹점명 */
        --                    )
        --                    ;
        --                    
        --            IF NVL(TA_CARDAM_REC.APPR_TAXX,0) <> 0 AND  TA_CARDAM_REC.CHIN_NUMB IS NOT NULL THEN   /* 부가가치세 */
        --                 
        --                --거래처코드를 생성한다..
        --                SP_CARD_CUST_CODE_INSERT (
        --                        'SYSTEM'
        --                        ,TA_CARDAM_REC.CHIN_NUMB     /* 가맹점사업자번호 */
        --                        ,TA_CARDAM_REC.CHIN_NAME      /* 가맹점명 */
        --                        )
        --                        ;
        --
        --                UPDATE    TA_CARDAM A
        --                SET       A.CUST_CODE = (SELECT K.CUST_CODE FROM TA_CUSTXM K WHERE K.REGS_NO = TA_CARDAM_REC.CHIN_NUMB AND ROWNUM <= 1)
        --                WHERE     A.CARD_NUMB = TA_CARDAM_REC.CARD_NUMB     /* 카드번호 */
        --                AND       A.APPR_DATE = TA_CARDAM_REC.APPR_DATE     /* 승인일자 */
        --                AND       A.CARD_APPR = TA_CARDAM_REC.CARD_APPR     /* 카드승인번호 */
        --                AND       A.APPR_GUBN = TA_CARDAM_REC.APPR_GUBN     /* 승인구분 */
        --                ;
        --
        --            END IF;

                    
                    /*==================================================================
                            4) 법인카드 매입내역 동기화 완료 Flag UPDATE
                    ==================================================================*/
                    UPDATE  BICNET_TBLUSEINFO       /* [하나은행_법인카드매입내역] */ 
                    SET     ERP_YN = 'Y'          /* ERP확인여부 */
                           ,ERP_DATE = SYSDATE    /* ERP확인일시 */
                    WHERE   (ERP_YN = 'N' OR ERP_YN IS NULL)     /* ERP확인여부(미연계자료만조회) */
                    AND     STRCARDNUMB = CARD_USE.STRCARDNUMB        /* 카드번호 */
                    AND     STRACKNO    = CARD_USE.STRACKNO          /* 승인번호 */
                    AND     STRFILLER_6 = CARD_USE.STRFILLER_6         /* 순번기준일 */            
                    AND     STRNONESEQS = CARD_USE.STRNONESEQS        /* 일자별순번 */
                    ;
                    
                    nWORK_CUNT := nWORK_CUNT + 1;
            
            END IF;
            

        END LOOP;

--        cREMK_300X := 'INSERT ROW : ' || SQL%ROWCOUNT;  --비고300
        cREMK_300X := 'INSERT ROW : [USEINFO] - ' || nWORK_CUNT || ', PASS ROW : ' || nPASS_CUNT;      


        /*==============================================================
            STEP 3. I/F LOG 기록(정상 종료 시)
        ==============================================================*/
        SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '1', cREMK_300X);
                
        COMMIT;
        
    EXCEPTION
        WHEN OTHERS THEN

            /*==============================================================
                STEP ERROR. I/F LOG 기록(실패 시)
            ==============================================================*/
            ROLLBACK;
            SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', '['||SQLCODE||'] ' || SQLERRM || cREMK_300X);
            NULL;
    
    END;

    /***************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.11.17
        내      용 : 회계-법인카드청구내역 가져오기
    ***************************************************************************/
    PROCEDURE SP_GET_FAM_CAR2 (
        iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드(처리조건1)
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드(처리조건2)
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드(처리조건3)
    )
    AS
        PRAGMA AUTONOMOUS_TRANSACTION;
        TA_CARDBM_REC   TA_CARDBM%ROWTYPE;        /* 카드청구내역 */
        
    BEGIN
    
        
        IF USER <> 'UWZ' THEN
            DBMS_OUTPUT.PUT_LINE('USER NO RIGHT TO RUN . THIS USER NAME IS  ' || USER );
            RETURN;
        END IF;
   
        /*==============================================================
            STEP 1. I/F LOG 기록(시작 시)
        ==============================================================*/
        cITFC_TMST := SYSTIMESTAMP;     --인터페이스타임스템프
        cWORK_USID := iWORK_USID;       --작업자ID
        cITFC_TYPE := iITFC_TYPE;       --인터페이스유형[ITFC_TYPE]
        cREF1_FILD := NULL;             --보조1필드
        cREF2_FILD := NULL;             --보조2필드
        cREF3_FILD := NULL;             --보조3필드
        cREMK_300X := NULL;             --비고300
        
        SP_WRITE_LOG(cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', cREMK_300X);
        
        nWORK_CUNT := 0;
        
        /*==============================================================
            STEP 2. 법인카드 청구내역 처리
        ==============================================================*/
            
        /*==================================================================
                1) 법인카드 청구내역 자료 가져온다.
        ==================================================================*/
        FOR CARD_BILL IN (
            SELECT  A.*
            FROM    BICNET_TBLBILLINFO A                   /* [하나은행_법인카드청구내역] */
                    INNER JOIN TA_CARDXM B
                           ON A.STRCARDNUMB = B.PURE_CDNB
            WHERE   (A.ERP_YN = 'N' OR A.ERP_YN IS NULL)   /* ERP확인여부(미연계자료만조회) */
            ORDER   BY
                    A.INDATE            /* 데이타제공일 */
                    ,A.STRUSEDATE       /* 사용일 */
                    ,A.STRCARDNUMB      /* 카드번호 */
                    ,A.STRBILLMON       /* 청구월 */                    
                    ,A.STRTOTAL         /* 청구금액 */
                    ,A.STRNONESEQS      /* 일련번호 */
        )
        LOOP 

            --비고(오류 발생 시 원인 자료 식별을 위해 보관)
            cREMK_300X := ' [CARD_BILLINFO] ' 
                            || '(KEY: STRCARDNUMB = '||TRIM(CARD_BILL.STRCARDNUMB)
                            || ', STRBILLMON = '||TRIM(CARD_BILL.STRBILLMON)
                            || ', STRUSEDATE = '||TRIM(CARD_BILL.STRUSEDATE)
                            || ', STRTOTAL = '||TRIM(CARD_BILL.STRTOTAL)
                            || ', STRNONESEQS = '||TRIM(CARD_BILL.STRNONESEQS)||')';


            TA_CARDBM_REC := NULL;
            
            TA_CARDBM_REC.BILL_DATE        := TRIM(CARD_BILL.STRBILLMON) || '00';       /* 청구일자 */
            TA_CARDBM_REC.CARD_NUMB        :=     SUBSTR(REPLACE(TRIM(CARD_BILL.STRCARDNUMB), '-', ''), 1, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_BILL.STRCARDNUMB), '-', ''), 5, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_BILL.STRCARDNUMB), '-', ''), 9, 4) || '-'
                                            || SUBSTR(REPLACE(TRIM(CARD_BILL.STRCARDNUMB), '-', ''), 13, 4);
            TA_CARDBM_REC.CARD_APPR        := TRIM(CARD_BILL.STRACKNO);               /* 승인번호 */
            TA_CARDBM_REC.APPR_DATE        := TRIM(CARD_BILL.STRUSEDATE);             /* 승인일자(사용일) */
            
            IF CARD_BILL.STRTOTAL >= 0 THEN
                TA_CARDBM_REC.APPR_GUBN    := '10';                 /* 승인구분 */
            ELSE
                TA_CARDBM_REC.APPR_GUBN    := '20';                 /* 승인구분 */
            END IF;

            
            TA_CARDBM_REC.CHIN_NAME        := TRIM(CARD_BILL.STRSTORENAME);               /* 가맹점명 */
            TA_CARDBM_REC.CHIN_NUMB        := TRIM(REPLACE(TRIM(CARD_BILL.STRREGINUMB),'-',''));            /* 가맹점사업자번호 */
            TA_CARDBM_REC.CHIN_IDXX        := '';                  /* ??? 가맹점번호 */
            TA_CARDBM_REC.DMND_AMOT        := CARD_BILL.STRTOTAL;                /* 청구금액 */

            TA_CARDBM_REC.USEX_FEEX        := CARD_BILL.STRCHARGE;                 /* 이용수수료 */
            TA_CARDBM_REC.HALB_AMON        := CARD_BILL.STRALLOTMENTMON;        /* 할부개월수 */
            TA_CARDBM_REC.HALB_RMON        := ''; /* ??? 잔여할부 */
            TA_CARDBM_REC.DIFF_AMNT        := 0;                             /* 차액 */
            TA_CARDBM_REC.ACCT_INTL        := NULL;                         /* 계정코드 */
            TA_CARDBM_REC.SLIP_NUMB        := NULL;                         /* 전표번호 */
            TA_CARDBM_REC.SLIP_LINE        := NULL;                         /* 전표순번 */
            TA_CARDBM_REC.REMK_NOTE        := NULL;                         /* 적요 */
            TA_CARDBM_REC.CSPS_CODE        := '0';                          /* 처리상태 */
            TA_CARDBM_REC.INST_USID        := cWORK_USID||'-'||cITFC_TYPE;     /* 입력작업자 */
            TA_CARDBM_REC.INST_DATE        := SYSDATE;                      /* 입력일시 */
            TA_CARDBM_REC.UPDT_USID        := cWORK_USID||'-'||cITFC_TYPE;     /* 수정작업자 */
            TA_CARDBM_REC.UPDT_DATE        := SYSDATE;                      /* 수정일시 */
            
            
            
            /*==================================================================
                    3) 법인카드 매입내역 INSERT
            ==================================================================*/
            INSERT INTO TA_CARDBM (
                 BILL_DATE                    /* 청구일자 */
                ,CARD_NUMB                    /* 카드번호 */
                ,APPR_DATE                    /* 승인일자 */
                ,CARD_APPR                    /* 승인번호 */
                ,APPR_GUBN                    /* 승인구분 */
                
                ,CHIN_NAME                    /* 가맹점명 */
                ,CHIN_NUMB                    /* 가맹점사업자번호 */
                ,CHIN_IDXX                    /* 가맹점번호 */
                ,DMND_AMOT                    /* 청구금액 */
                ,USEX_FEEX                    /* 이용수수료 */
                ,HALB_AMON                    /* 할부개월수 */
                ,HALB_RMON                    /* 잔여할부 */
                ,DIFF_AMNT                    /* 차액 */
                ,ACCT_INTL                    /* 계정코드 */
                ,SLIP_NUMB                    /* 전표번호 */
                ,SLIP_LINE                    /* 전표순번 */
                ,REMK_NOTE                    /* 적요 */
                ,CSPS_CODE                     /* 처리상태 */
                ,INST_USID                    /* 입력작업자 */
                ,INST_DATE                    /* 입력일시 */
                ,UPDT_USID                    /* 수정작업자 */
                ,UPDT_DATE                    /* 수정일시 */
                )
            VALUES
                (
                 TA_CARDBM_REC.BILL_DATE      /* 청구일자 */
                ,TA_CARDBM_REC.CARD_NUMB      /* 카드번호 */
                ,TA_CARDBM_REC.APPR_DATE      /* 승인일자 */
                ,TA_CARDBM_REC.CARD_APPR      /* 승인번호 */
                ,TA_CARDBM_REC.APPR_GUBN      /* 승인구분 */
                
                ,TA_CARDBM_REC.CHIN_NAME      /* 가맹점명 */
                ,TA_CARDBM_REC.CHIN_NUMB      /* 가맹점사업자번호 */
                ,TA_CARDBM_REC.CHIN_IDXX      /* 가맹점번호 */
                ,TA_CARDBM_REC.DMND_AMOT      /* 청구금액 */
                ,TA_CARDBM_REC.USEX_FEEX      /* 이용수수료 */
                ,TA_CARDBM_REC.HALB_AMON      /* 할부개월수 */
                ,TA_CARDBM_REC.HALB_RMON      /* 잔여할부 */
                ,TA_CARDBM_REC.DIFF_AMNT      /* 차액 */
                ,TA_CARDBM_REC.ACCT_INTL      /* 계정코드 */
                ,TA_CARDBM_REC.SLIP_NUMB      /* 전표번호 */
                ,TA_CARDBM_REC.SLIP_LINE      /* 전표순번 */
                ,TA_CARDBM_REC.REMK_NOTE      /* 적요 */
                ,TA_CARDBM_REC.CSPS_CODE      /* 처리상태 */
                ,TA_CARDBM_REC.INST_USID      /* 입력작업자 */
                ,TA_CARDBM_REC.INST_DATE      /* 입력일시 */
                ,TA_CARDBM_REC.UPDT_USID      /* 수정작업자 */
                ,TA_CARDBM_REC.UPDT_DATE      /* 수정일시 */
            );
    
             
--            --청구내역이 취소일때 이전승인건이 존재하면 취소완료로 처리한다.
--            SP_CARD_REQUEST_CANCEL (TA_CARDBM_REC);
--
--            --휴페업정보를 요청한다
--            SP_HANA_CLOSEINFO_REQUEST (
--                    TA_CARDBM_REC.CHIN_NUMB     /* 가맹점사업자번호 */
--                    ,TA_CARDBM_REC.CHIN_NAME      /* 가맹점명 */
--                    )
--                    ;

            /*==================================================================
                    4) 법인카드 청구내역 동기화 완료 Flag UPDATE
            ==================================================================*/
            UPDATE  BICNET_TBLBILLINFO       /* [하나은행_법인카드청구내역] */ 
            SET     ERP_YN = 'Y'          /* ERP확인여부 */
                   ,ERP_DATE = SYSDATE    /* ERP확인일시 */
            WHERE   (ERP_YN = 'N' OR ERP_YN IS NULL)     /* ERP확인여부(미연계자료만조회) */
            AND     STRCARDNUMB = CARD_BILL.STRCARDNUMB   /* 카드번호 */
            AND     STRBILLMON  = CARD_BILL.STRBILLMON    /* 청구월 */
            AND     STRUSEDATE  = CARD_BILL.STRUSEDATE    /* 사용일 */            
            AND     STRTOTAL    = CARD_BILL.STRTOTAL      /* 청구금액 */
            AND     STRNONESEQS = CARD_BILL.STRNONESEQS    /* 일련번호 */
            ;
            
            nWORK_CUNT := nWORK_CUNT + 1;

        END LOOP;

--        cREMK_300X := 'INSERT ROW : ' || SQL%ROWCOUNT;  --비고300
        cREMK_300X := 'INSERT ROW : ' || nWORK_CUNT;        
        
        
        /*==============================================================
            STEP 3. I/F LOG 기록(정상 종료 시)
        ==============================================================*/
        SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '1', cREMK_300X);
                
        COMMIT;
        
    EXCEPTION
        WHEN OTHERS THEN

            /*==============================================================
                STEP ERROR. I/F LOG 기록(실패 시)
            ==============================================================*/
            ROLLBACK;
            SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', '['||SQLCODE||'] ' || SQLERRM || cREMK_300X);
            NULL;
    
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.04.13
        내      용 : 인사-발령 확정 처리
    ***************************************************************************/
    PROCEDURE SP_GET_HRM_APCF (
        iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드(처리조건1)
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드(처리조건2)
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드(처리조건3)
    )
    AS
        PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    
        /*==============================================================
            STEP 1. I/F LOG 기록(시작 시)
        ==============================================================*/
        cITFC_TMST := SYSTIMESTAMP;     --인터페이스타임스템프
        cWORK_USID := iWORK_USID;       --작업자ID
        cITFC_TYPE := iITFC_TYPE;       --인터페이스유형[ITFC_TYPE]
        cREF1_FILD := NULL;             --보조1필드
        cREF2_FILD := NULL;             --보조2필드
        cREF3_FILD := NULL;             --보조3필드
        cREMK_300X := NULL;             --비고300
        SP_WRITE_LOG(cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', cREMK_300X);

        /*==============================================================
            STEP 2. 인사 발령 확정 처리
        ==============================================================*/
        nWORK_CUNT := 0;
        
        --인사 발령 확정
        PKG_HRME0020.SP_HRME0020_PROC03;

        cREMK_300X := 'PKG_HRME0020.SP_HRME0020_PROC03 -- 참조';  --비고300
        
        /*==============================================================
            STEP 3. I/F LOG 기록(정상 종료 시)
        ==============================================================*/
        SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '1', cREMK_300X);
                
        COMMIT;
        
    EXCEPTION
        WHEN OTHERS THEN

            /*==============================================================
                STEP ERROR. I/F LOG 기록(실패 시)
            ==============================================================*/
            ROLLBACK;
            SP_WRITE_LOG (cITFC_TMST, cWORK_USID, cITFC_TYPE, cREF1_FILD, cREF2_FILD, cREF3_FILD, '0', '['||SQLCODE||'] ' || SQLERRM);
            NULL;
    
    END;
               
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.02.19
        내      용 : 인터페이스 배치 처리 실행하기
    ***************************************************************************/
    PROCEDURE SP_BATCH_PROC (
        iWORK_USID      TM_IFLOGL.UPDT_USID%TYPE    --작업자ID
      , iITFC_TYPE      TM_IFLOGL.ITFC_TYPE%TYPE    --인터페이스유형[ITFC_TYPE]
      , iREF1_FILD      TM_IFLOGL.REF1_FILD%TYPE    --보조1필드(처리조건1)
      , iREF2_FILD      TM_IFLOGL.REF2_FILD%TYPE    --보조2필드(처리조건2)
      , iREF3_FILD      TM_IFLOGL.REF3_FILD%TYPE    --보조3필드(처리조건3)
    )
    AS
    
    BEGIN
    
        /*======================================================================
            인터페이스유형별 배치 프로시저 수행하기
        ======================================================================*/
        
        --CARD.회계-법인카드사용내역 가져오기 
        IF iITFC_TYPE IN ('ALL', 'CARD')  THEN
           
            SP_GET_FAM_CARD(iWORK_USID, 'CARD', iREF1_FILD, iREF2_FILD, iREF3_FILD);            
        
        END IF;
               
        --CARD.회계-법인카드청구내역 가져오기 
        IF iITFC_TYPE IN ('ALL', 'CAR2')  THEN
           
            SP_GET_FAM_CAR2(iWORK_USID, 'CAR2', iREF1_FILD, iREF2_FILD, iREF3_FILD);            
        
        END IF;
        
        --APCF.인사-발령 확정 처리
        IF iITFC_TYPE IN ('ALL',  'APCF')  THEN
           
            SP_GET_HRM_APCF(iWORK_USID, 'APCF', iREF1_FILD, iREF2_FILD, iREF3_FILD);            
        
        END IF;
                                                                                               
    END;

END PKG_IFBATCHPROC;
/