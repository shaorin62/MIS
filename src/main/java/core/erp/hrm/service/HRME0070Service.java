/**
 * core.erp.hrm.service.HRME0070Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRME0070Service - 승진대상자선정 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.17
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface HRME0070Service {

	/**
	 * <pre>
	 * 승진대상자선정 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 승진대상자선정 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 사원 및 평가등급 정보를 조회한다..
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 조회한 사원 및 평가등급 정보
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 대상자생성 처리한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 없음
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 대상자취소 처리한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 없음
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC01(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 승진자 확정처리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processPROC02(Map saveData, Map searchVo) throws Exception;

	/**
	 * <pre>
	 * 대상자취소 처리한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 없음
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public void processPROC03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 대상자생성 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;


}