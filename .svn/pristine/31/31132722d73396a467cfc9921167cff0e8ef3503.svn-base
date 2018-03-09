CREATE OR REPLACE PACKAGE BODY UWZ."PKG_TMMIFWKNT" AS

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 저장
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_SAVE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iWKNT_TYCD      IN  TM_WKNTXM.WKNT_TYCD%TYPE    /* ●작업알림유형코드[WKNT_TYCD] */
      , iSOUS_LNKY      IN  TM_WKNTXM.SOUS_LNKY%TYPE    /* ●출처연결키 */
      , iWKNT_CNTT      IN  TM_WKNTXM.WKNT_CNTT%TYPE    /* ●작업알림내용 */
    )
    AS
        nSRAL_NUMB          TM_WKNTXM.SRAL_NUMB%TYPE;   /* 일련번호 */
        sINUS_EMNR          TM_WKNTXM.INUS_EMNR%TYPE;   /* 등록자사원번호 */
        dWKNT_DATE          TM_WKNTXM.WKCF_DATE%TYPE;   /* 임시일자 */    
    BEGIN

        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF iSYST_LNCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_001] 시스템언어코드(SYST_LNCD)는 필수 입력 항목 입니다.'); END IF;
        IF iWORK_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_002] 작업자(WORK_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_EMNR IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_003] 작업알림사원번호(WKNT_EMNR)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_DATE IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_004] 작업알림일자(WKNT_DATE)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_TIME IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_005] 작업알림시간(WKNT_TIME)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_TYCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_006] 작업알림유형코드(WKNT_TYCD)는 필수 입력 항목 입니다.'); END IF;
        IF iSOUS_LNKY IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_007] 출처연결키(SOUS_LNKY)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_CNTT IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_008] 작업알림내용(WKNT_CNTT)는 필수 입력 항목 입니다.'); END IF;
        
        --알림일자/시간 유효성 검증
        BEGIN
            dWKNT_DATE := TO_DATE(iWKNT_DATE||iWKNT_TIME,  'YYYYMMDDHH24MI');           
        EXCEPTION
            WHEN OTHERS THEN
                RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_011] 작업알림일자 및 시간의 형식이 유효하지 않습니다.');
        END;
        
        --알림일자/시간 과거 여부 체크
        IF dWKNT_DATE <= SYSDATE - 1/24/60 THEN 
            RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_WS_012] 작업알림일시가 알림 등록 시점보다 과거 ('||TO_CHAR(dWKNT_DATE,'YYYY-MM-DD HH24:MI')||') 입니다. 현재 및 미래 시점으로 등록하세요!');
        END IF;
    
        /*======================================================================
            STEP 2. 작업 알림 내역 저장
        ======================================================================*/
        --등록자 사원번호 가져오기
        SELECT NVL(MAX(A.EMPL_NUMB), iWORK_USID)    /* 사원번호 */
          INTO sINUS_EMNR
          FROM TM_USERXM A                  /* [사용자] */
         WHERE A.USER_IDXX = iWORK_USID     /* 사용자ID */
        ;
        
        --일련번호 채번
        SELECT NVL(MAX(A.SRAL_NUMB), 0) + 1 /* 일련번호 */
          INTO nSRAL_NUMB
          FROM TM_WKNTXM A                  /* [작업알림] */
         WHERE A.WKNT_EMNR = iWKNT_EMNR     /* 작업알림사원번호 */
           AND A.WKNT_DATE = iWKNT_DATE     /* 작업알림일자 */
           AND A.WKNT_TIME = iWKNT_TIME     /* 작업알림시간 */
        ;
        
        --작업알림 INSERT
        INSERT INTO TM_WKNTXM (     /* [작업알림] */
                    WKNT_EMNR       /* 작업알림사원번호 */
                  , WKNT_DATE       /* 작업알림일자 */
                  , WKNT_TIME       /* 작업알림시간 */
                  , SRAL_NUMB       /* 일련번호 */
                  , WKNT_TYCD       /* 작업알림유형코드 */
                  , SOUS_LNKY       /* 출처연결키 */
                  , INUS_EMNR       /* 등록자사원번호 */
                  , WKNT_CNTT       /* 작업알림내용 */
                  , WKCF_YSNO       /* 작업알림확인여부 */
                  , WKCF_DATE       /* 작업알림확인일시 */
                  , INST_USID       /* 입력작업자 */
                  , INST_DATE       /* 입력일시 */
                  , UPDT_USID       /* 수정작업자 */
                  , UPDT_DATE       /* 수정일시 */
        ) VALUES (
                    iWKNT_EMNR      /* 작업알림사원번호 */
                  , iWKNT_DATE      /* 작업알림일자 */
                  , iWKNT_TIME      /* 작업알림시간 */
                  , nSRAL_NUMB      /* 일련번호 */
                  , iWKNT_TYCD      /* 작업알림유형코드 */
                  , iSOUS_LNKY      /* 출처연결키 */
                  , sINUS_EMNR      /* 등록자사원번호 */
                  , iWKNT_CNTT      /* 작업알림내용 */
                  , '0'             /* 작업알림확인여부 */
                  , NULL            /* 작업알림확인일시 */
                  , iWORK_USID      /* 입력작업자 */
                  , SYSDATE         /* 입력일시 */
                  , iWORK_USID      /* 수정작업자 */
                  , SYSDATE         /* 수정일시 */
        );
    
    END;
    
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 저장(현재시점)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_SAVENOW (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_TYCD      IN  TM_WKNTXM.WKNT_TYCD%TYPE    /* ●작업알림유형코드[WKNT_TYCD] */
      , iSOUS_LNKY      IN  TM_WKNTXM.SOUS_LNKY%TYPE    /* ●출처연결키 */
      , iWKNT_CNTT      IN  TM_WKNTXM.WKNT_CNTT%TYPE    /* ●작업알림내용 */
    )
    AS
    BEGIN
    
        --작업알림 저장
        SP_WORKNOTICE_SAVE (
            iSYST_LNCD                      /* ●시스템언어코드 */
          , iWORK_USID                      /* ●작업자 */
          , iWKNT_EMNR                      /* ●작업알림사원번호 */
          , TO_CHAR(SYSDATE, 'YYYYMMDD')    /* ●작업알림일자(YYYYMMDD) */
          , TO_CHAR(SYSDATE, 'HH24MI')      /* ●작업알림시간(HHMI) */
          , iWKNT_TYCD                      /* ●작업알림유형코드[WKNT_TYCD] */
          , iSOUS_LNKY                      /* ●출처연결키 */
          , iWKNT_CNTT                      /* ●작업알림내용 */
        );
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 전체 확인(현재 시간 기준 과거 알림 일괄 확인 처리)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_READALL (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드 */
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
    )
    AS
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF iSYST_LNCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RA_001] 시스템언어코드(SYST_LNCD)는 필수 입력 항목 입니다.'); END IF;
        IF iWORK_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RA_002] 작업자(WORK_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_EMNR IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RA_003] 작업알림사원번호(WKNT_EMNR)는 필수 입력 항목 입니다.'); END IF;
    
        /*======================================================================
            STEP 2. 작업 알림 내역 일괄 확인 처리
        ======================================================================*/
        UPDATE TM_WKNTXM                    /* [작업알림] */
           SET WKCF_YSNO = '1'              /* 작업알림확인여부 */
             , WKCF_DATE = SYSDATE          /* 작업알림확인일시 */
             , UPDT_USID = iWORK_USID       /* 수정작업자 */
             , UPDT_DATE = SYSDATE          /* 수정일시 */
         WHERE WKNT_EMNR = iWKNT_EMNR       /* 작업알림사원번호 */
           AND WKNT_DATE||WKNT_TIME <= TO_CHAR(SYSDATE, 'YYYYMMDDHH24MI') /* 작업알림일자 */
        ;
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 개별 확인
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_READ (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iSRAL_NUMB      IN  TM_WKNTXM.SRAL_NUMB%TYPE    /* ●일련번호 */
    )
    AS
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF iSYST_LNCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_001] 시스템언어코드(SYST_LNCD)는 필수 입력 항목 입니다.'); END IF;
        IF iWORK_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_002] 작업자(WORK_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_EMNR IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_003] 작업알림사원번호(WKNT_EMNR)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_DATE IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_004] 작업알림일자(WKNT_DATE)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_TIME IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_005] 작업알림시간(WKNT_TIME)는 필수 입력 항목 입니다.'); END IF;
        IF iSRAL_NUMB IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_RD_006] 일련번호(iSRAL_NUMB)는 필수 입력 항목 입니다.'); END IF;
    
        /*======================================================================
            STEP 2. 작업 알림 내역 일괄 확인 처리
        ======================================================================*/
        UPDATE TM_WKNTXM                    /* [작업알림] */
           SET WKCF_YSNO = '1'              /* 작업알림확인여부 */
             , WKCF_DATE = SYSDATE          /* 작업알림확인일시 */
             , UPDT_USID = iWORK_USID       /* 수정작업자 */
             , UPDT_DATE = SYSDATE          /* 수정일시 */
         WHERE WKNT_EMNR = iWKNT_EMNR       /* 작업알림사원번호 */
           AND WKNT_DATE = iWKNT_DATE       /* 작업알림일자 */
           AND WKNT_TIME = iWKNT_TIME       /* 작업알림시간 */
           AND SRAL_NUMB = iSRAL_NUMB       /* 일련번호 */
        ;
    
    END;

    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 일괄 삭제(지정 된 작업알림 과거 자료 삭제)
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_DELETEALL (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
    )
    AS
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF iSYST_LNCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DA_001] 시스템언어코드(SYST_LNCD)는 필수 입력 항목 입니다.'); END IF;
        IF iWORK_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DA_002] 작업자(WORK_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_EMNR IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DA_003] 작업알림사원번호(WKNT_EMNR)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_DATE IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DA_004] 작업알림일자(WKNT_DATE)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_TIME IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DA_005] 작업알림시간(WKNT_TIME)는 필수 입력 항목 입니다.'); END IF;
    
        /*======================================================================
            STEP 2. 작업 알림 내역 일괄 삭제 처리
        ======================================================================*/
        DELETE FROM TM_WKNTXM               /* [작업알림] */
         WHERE WKNT_EMNR = iWKNT_EMNR                           /* 작업알림사원번호 */
           AND WKNT_DATE||WKNT_TIME <= iWKNT_DATE||iWKNT_TIME   /* 작업알림일자 */
        ;
    
    END;
    /***************************************************************************
        작  성  자 : 김삼영
        작  성  일 : 2016.11.02
        내      용 : 작업알림 삭제
    ***************************************************************************/
    PROCEDURE SP_WORKNOTICE_DELETE (
        iSYST_LNCD      IN  VARCHAR2                    /* ●시스템언어코드*/
      , iWORK_USID      IN  TM_WKNTXM.INST_USID%TYPE    /* ●작업자 */
      , iWKNT_EMNR      IN  TM_WKNTXM.WKNT_EMNR%TYPE    /* ●작업알림사원번호 */
      , iWKNT_DATE      IN  TM_WKNTXM.WKNT_DATE%TYPE    /* ●작업알림일자(YYYYMMDD) */
      , iWKNT_TIME      IN  TM_WKNTXM.WKNT_TIME%TYPE    /* ●작업알림시간(HHMI) */
      , iSRAL_NUMB      IN  TM_WKNTXM.SRAL_NUMB%TYPE    /* ●일련번호 */
    )
    AS
    BEGIN
    
        /*======================================================================
            STEP 1. PARAMETER VALIDATION
        ======================================================================*/
        IF iSYST_LNCD IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_001] 시스템언어코드(SYST_LNCD)는 필수 입력 항목 입니다.'); END IF;
        IF iWORK_USID IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_002] 작업자(WORK_USID)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_EMNR IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_003] 작업알림사원번호(WKNT_EMNR)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_DATE IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_004] 작업알림일자(WKNT_DATE)는 필수 입력 항목 입니다.'); END IF;
        IF iWKNT_TIME IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_005] 작업알림시간(WKNT_TIME)는 필수 입력 항목 입니다.'); END IF;
        IF iSRAL_NUMB IS NULL THEN RAISE_APPLICATION_ERROR(-20000, '[INVALID_SP_DL_006] 일련번호(iSRAL_NUMB)는 필수 입력 항목 입니다.'); END IF;
    
        /*======================================================================
            STEP 2. 작업 알림 내역 개별 삭제 처리
        ======================================================================*/
        DELETE FROM TM_WKNTXM               /* [작업알림] */
         WHERE WKNT_EMNR = iWKNT_EMNR       /* 작업알림사원번호 */
           AND WKNT_DATE = iWKNT_DATE       /* 작업알림일자 */
           AND WKNT_TIME = iWKNT_TIME       /* 작업알림시간 */
           AND SRAL_NUMB = iSRAL_NUMB       /* 일련번호 */
        ;
    
    END;

END PKG_TMMIFWKNT;
/