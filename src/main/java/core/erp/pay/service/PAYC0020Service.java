/**
 * core.erp.pay.service.PAYC0020Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYC0020Service - 급여명세서 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.01	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface PAYC0020Service {

	/**
	 * <pre>
	 * 급여 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여 상세 지급 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여 수당 지급 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여 공제 지급 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여 공제 기타보상,기타공제,연차 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH05(Map searchVo) throws Exception ;


}