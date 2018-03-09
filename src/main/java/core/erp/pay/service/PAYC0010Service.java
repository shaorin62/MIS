/**
 * core.erp.pay.service.PAYC0010Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYC0010Service - 급여지급현황 메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.29	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface PAYC0010Service {

	/**
	 * <pre>
	 * 급여상세 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 급여상세 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}