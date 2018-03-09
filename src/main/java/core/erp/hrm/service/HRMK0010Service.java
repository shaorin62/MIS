/**
 * core.erp.hrm.service.HRMK0010Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMK0010Service - 증명서신청 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	jar
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	jar		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HRMK0010Service {

	/**
	 * <pre>
	 * 증명서발급 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 증명서발급 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 발령상세 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 발령상세 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 선택한 발령상세 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 발령상세 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 증명서 출력 내용을 조회한다. - 인사정보
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 증명서 출력
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;
	

	/**
	 * <pre>
	 * 증명서 출력 내용을 조회한다. - 사업장정보
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 증명서 출력
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 증명서 출력 내용을 조회한다. - 갑종근로소득
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 증명서 출력
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH05(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 증명서신청 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 인쇄 출력유무 저장 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSAVE01(Map saveData) throws Exception;

	
	/**
	 * <pre>
	 * 발급일,발급번호 처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * work 알림 저장한다. 
	 * </pre>
	 *
	 * @param param - work 알림 저장 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSAVE02(Map saveData) throws Exception;

	 
}