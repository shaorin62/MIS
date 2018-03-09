/**
 * core.erp.tmm.service.TMMA0120Service.java - <Created by Code Template generator>
 */
package core.erp.tmm.service;

import java.util.Map;

/**
 * <pre>
 *	TMMA0120Service - 자료조회처리 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.08.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface TMMA0120Service {

	/**
	 * <pre>
	 * 자료조회양식 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 자료조회양식 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 자료조회조건 쿼리 생성 후 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 자료조회조건 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

}