DECLARE
	X NUMBER;
BEGIN
	DBMS_JOB.SUBMIT
		(
		 JOB => X,
		 WHAT => 'BEGIN

	/* 인터페이스 배치 처리 - CARD.회계-법인카드사용내역 가져오기 */
	PKG_IFBATCHPROC.SP_BATCH_PROC(''JOB_BATCH'', ''CARD'', NULL, NULL, NULL);
	
	/* 인터페이스 배치 처리 - CAR2.회계-법인카드청구내역 가져오기 */
	PKG_IFBATCHPROC.SP_BATCH_PROC(''JOB_BATCH'', ''CAR2'', NULL, NULL, NULL);
	
END;',
		 NEXT_DATE => TRUNC(SYSDATE + 1 / 24, 'HH24'),
		 INTERVAL => 'TRUNC(SYSDATE + 1 / 24, ''HH24'')',
		 NO_PARSE => FALSE
		);
END;