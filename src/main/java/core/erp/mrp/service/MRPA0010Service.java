/**
 * core.erp.mrp.service.MRPA0010Service.java - <Created by Code Template generator>
 */
package core.erp.mrp.service;

import java.util.Map;

/**
 * <pre>
 *	MRPA0010Service -  매체 결산 종합 보고서 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MRPA0010Service {

	/**
	 * <pre>
	 * 세금계산서가 발행된 개별청약서 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 세금계산서가 발행된 개별청약서 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 광고주목록조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 광고주목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

}

	