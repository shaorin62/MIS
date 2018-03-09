/**
 * core.erp.pay.service.PAYC0260Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYC0260Service - 개인별조회 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface PAYC0260Service {

	/**
	 * <pre>
	 * 급여데이터를 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 급여데이터(소급내역)를 조회한다.
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
	 * 급여데이터(소급항목)를 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;


}