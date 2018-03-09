CREATE OR REPLACE VIEW UWZ.VI_IF_MD_CUST
(CUST_CODE, CUST_NAME, CUTY_CODE, RETY_CODE, CITY_CODE, 
 BIZR_NUMB, RERN_NUMB, CORP_NUMB, OWNR_NAME, BSNS_STAT, 
 BSNS_TYPE, POST_NUMB, ADDR_DESC, DTL1_ADDR, DTL2_ADDR, 
 TELE_NUMB, FAXX_NUMB, ELTR_MLAD, OPEN_DATE, CLOS_DATE, 
 STBZ_DATE, REMK_NOTE, TXAP_CUNM, MPBZ_NUMB, USEX_YSNO, 
 PUCD_NUMB, EMPL_NUMB, RELT_STDT, RELT_EDDT, CUCL_ADYN, 
 CUCL_MDYN, CUCL_PDYN)
AS 
SELECT /************************************************************************
                VI_IF_MD_CUST.VIEW 제작/매체 인터페이스용 거래처정보
                * 최초 작성: 2016.09.05 김삼영
                * 최종 수정:
       ************************************************************************/ 
       A.CUST_CODE      /* 거래처코드 */
     , A.CUST_NAME      /* 거래처명 */
     , A.CUTY_CODE      /* 거래처구분코드 */
     , A.RETY_CODE      /* 관계사구분코드 */
     , A.CITY_CODE      /* 법인개인구분코드 */
     , A.BIZR_NUMB      /* 사업자번호 */
     , A.RERN_NUMB      /* 주민등록번호 */
     , A.CORP_NUMB      /* 법인번호 */
     , A.OWNR_NAME      /* 대표자명 */
     , A.BSNS_STAT      /* 업태 */
     , A.BSNS_TYPE      /* 업종 */
     , A.POST_NUMB      /* 우편번호 */
     , A.ADDR_DESC      /* 주소 */
     , A.DTL1_ADDR      /* 상세1주소 */
     , A.DTL2_ADDR      /* 상세2주소 */
     , A.TELE_NUMB      /* 전화번호 */
     , A.FAXX_NUMB      /* 팩스번호 */
     , A.ELTR_MLAD      /* 전자메일주소 */
     , A.OPEN_DATE      /* 거래시작일자 */
     , A.CLOS_DATE      /* 거래종료일자 */
     , A.STBZ_DATE      /* 거래중지일자 */
     , A.REMK_NOTE      /* 비고메모 */
     , A.TXAP_CUNM      /* 세무신고용거래처명 */
     , A.MPBZ_NUMB      /* 종사업장번호 */
     , A.USEX_YSNO      /* 사용여부 */
     , A.PUCD_NUMB      /* 구매카드가맹점번호 */
     , A.EMPL_NUMB      /* 사원번호 */
     , A.RELT_STDT      /* 관계사시작일 */
     , A.RELT_EDDT      /* 관계사종료일 */ 
     , CASE WHEN B.CUST_CODE IS NOT NULL THEN '1' ELSE '0' END  AS CUCL_ADYN    /* 거래처유형-광고주유무 */
     , CASE WHEN C.CUST_CODE IS NOT NULL THEN '1' ELSE '0' END  AS CUCL_MDYN    /* 거래처유형-매체사유무 */
     , CASE WHEN D.CUST_CODE IS NOT NULL THEN '1' ELSE '0' END  AS CUCL_PDYN    /* 거래처유형-제작사유무 */
  FROM TA_CUSTXM A      /* [거래처정보] */
       LEFT JOIN TA_CUSTXD B /* [거래처유형정보 - 광고주] */
              ON A.CUST_CODE = B.CUST_CODE
             AND B.CUCL_CODE = 'FA260110'   /* 거래처유형코드: A260110.광고주 */
       LEFT JOIN TA_CUSTXD C /* [거래처유형정보 - 광고주] */
              ON A.CUST_CODE = C.CUST_CODE
             AND C.CUCL_CODE = 'FA260120'   /* 거래처유형코드: A260120.매체사 */
       LEFT JOIN TA_CUSTXD D /* [거래처유형정보 - 광고주] */
              ON A.CUST_CODE = D.CUST_CODE
             AND D.CUCL_CODE = 'FA260130'   /* 거래처유형코드: A260130.제작사 */
;

COMMENT ON TABLE UWZ.VI_IF_MD_CUST IS 'VIEW 제작/매체 인터페이스용 거래처정보';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUST_CODE IS '거래처코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUST_NAME IS '거래처명';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUTY_CODE IS '거래처구분코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.RETY_CODE IS '관계사구분코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CITY_CODE IS '법인개인구분코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.BIZR_NUMB IS '사업자번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.RERN_NUMB IS '주민등록번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CORP_NUMB IS '법인번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.OWNR_NAME IS '대표자명';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.BSNS_STAT IS '업태';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.BSNS_TYPE IS '업종';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.POST_NUMB IS '우편번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.ADDR_DESC IS '주소';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.DTL1_ADDR IS '상세1주소';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.DTL2_ADDR IS '상세2주소';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.TELE_NUMB IS '전화번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.FAXX_NUMB IS '팩스번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.ELTR_MLAD IS '전자메일주소';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.OPEN_DATE IS '거래시작일자';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CLOS_DATE IS '거래종료일자';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.STBZ_DATE IS '거래중지일자';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.REMK_NOTE IS '비고메모';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.TXAP_CUNM IS '세무신고용거래처명';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.MPBZ_NUMB IS '종사업장번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.USEX_YSNO IS '사용여부';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.PUCD_NUMB IS '구매카드가맹점번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.EMPL_NUMB IS '사원번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.RELT_STDT IS '관계사시작일';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.RELT_EDDT IS '관계사종료일';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUCL_ADYN IS '거래처유형-광고주유무';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUCL_MDYN IS '거래처유형-매체사유무';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUST.CUCL_PDYN IS '거래처유형-제작사유무';

