CREATE OR REPLACE VIEW UWZ.VI_IF_MD_CUSTMN
(CUST_CODE, SEQN_NUMB, CHSN_NAME, TELE_NUMB, HNPN_TENR, 
 ELTR_MLAD, MJCH_YSNO)
AS 
SELECT /************************************************************************
            VI_IF_MD_EMPL.VIEW 제작/매체 인터페이스용 거래처 담당자 정보
            * 최초 작성: 2016.09.05 김삼영
            * 최종 수정:
       ************************************************************************/ 
       A.CUST_CODE      /* 거래처코드 */
     , A.SEQN_NUMB      /* 순번 */
     , A.CHSN_NAME      /* 담당자성명 */
     , A.TELE_NUMB      /* 전화번호 */
     , A.HNPN_TENR      /* 휴대전화번호 */
     , A.ELTR_MLAD      /* 전자메일주소 */
     , A.MJCH_YSNO      /* 대표담당자여부 */
  FROM TA_CUSTMN A      /* [거래처담당자정보] */
;

COMMENT ON TABLE UWZ.VI_IF_MD_CUSTMN IS 'VIEW 제작/매체 인터페이스용 거래처 담당자 정보';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.CUST_CODE IS '거래처코드';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.SEQN_NUMB IS '순번';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.CHSN_NAME IS '담당자성명';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.TELE_NUMB IS '전화번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.HNPN_TENR IS '휴대전화번호';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.ELTR_MLAD IS '전자메일주소';

COMMENT ON COLUMN UWZ.VI_IF_MD_CUSTMN.MJCH_YSNO IS '대표담당자여부';