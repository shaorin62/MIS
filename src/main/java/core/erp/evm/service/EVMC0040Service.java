package core.erp.evm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMB0040Service - 조직평가 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.25	김석영	Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface EVMC0040Service {

	/**
	 * <pre>
	 * 조직평가 피평가자 현황/피평가자 목록 조회
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
	 * 조직평가 목록 조회
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 인사기록변경요청 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 조직평가 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 조직평가 테이블 목표설정제출
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 조직평가 테이블 목표설정제출취소 
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC01(Map searchVo) throws Exception ;
	
}