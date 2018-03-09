package core.erp.evm.service;

import java.util.Map;

/**
 * <pre>
 *	EVMD0010Service - 종합평가현황 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.26	김석영	Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface EVMD0010Service {

	/**
	 * <pre>
	 * 종합평가현황을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 인사기록변경요청 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 종합평가처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC00(Map searchVo) throws Exception ;
		
}