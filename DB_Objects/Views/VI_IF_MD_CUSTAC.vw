CREATE OR REPLACE VIEW UWZ.VI_IF_MD_CUSTAC
(CUST_CODE, CUST_ANID, BANK_CODE, ACNT_NUMB, ACNT_MANM, 
 MJAN_YSNO, ACNT_REMK)
AS 
SELECT /************************************************************************
            VI_IF_MD_CUSTAC.VIEW 제작/매체 인터페이스용 거래처 계좌 정보
            * 최초 작성: 2016.09.05 김삼영
            * 최종 수정:
       ************************************************************************/ 
       A.CUST_CODE      /* 거래처코드 */
     , A.CUST_ANID      /* 거래처계좌ID */
     , A.BANK_CODE      /* 은행코드 */
     , A.ACNT_NUMB      /* 계좌번호 */
     , A.ACNT_MANM      /* 예금주 */
     , A.MJAN_YSNO      /* 주거래계좌여부 */
     , A.ACNT_REMK      /* 계좌비고 */
  FROM TA_CUSTAC A      /* [거래처계좌정보] */
;

COMMENT ON TABLE UWZ.VI_IF_MD_CUSTAC IS 'VIEW 제작/매체 인터페이스용 거래처 계좌 정보';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.CUST_CODE IS '거래처코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.CUST_ANID IS '거래처계좌ID';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.BANK_CODE IS '은행코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.ACNT_NUMB IS '계좌번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.ACNT_MANM IS '예금주';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.MJAN_YSNO IS '주거래계좌여부';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTAC.ACNT_REMK IS '계좌비고';

