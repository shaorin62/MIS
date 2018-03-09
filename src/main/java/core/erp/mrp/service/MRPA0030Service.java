/**
 * core.erp.mrp.service.MRPA0030Service.java - <Created by Code Template generator>
 */
package core.erp.mrp.service;

import java.util.Map;

/**
 * <pre>
 *	MRPA0030Service -  매체 결산 종합 보고서 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MRPA0030Service {

	/**
	 * <pre>
	 * 프로그램 리스트를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 프로그램 리스트 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 매체별 프로그램 리스트를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 프로그램 리스트 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 일자별 프로그램 리스트를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 일자별 프로그램 리스트 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 프로그램 목록을 삭제한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 프로그램목록을 저장한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}

	