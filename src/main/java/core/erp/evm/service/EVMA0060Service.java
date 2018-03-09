package core.erp.evm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMB0040Service - 평가비율관리 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.05	김석영	Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface EVMA0060Service {

	/**
	 * <pre>
	 * 평가비율관리 평가점수등급환산표/근무평가비율관리 목록을 조회한다.
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
	 * 평가비율관리 평가점수등급환산표 목록을 저장,수정 또는 삭제한다.
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
	 * 평가비율관리 이전자료를 복사한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC00(Map searchVo) throws Exception ;
	 
}