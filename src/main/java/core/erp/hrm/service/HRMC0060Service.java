/**
 * core.erp.hrm.service.HRMC0060Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMC0060Service - 가족현황 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.05	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HRMC0060Service {

	/**
	 * <pre>
	 * 가족사항 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 가족사항 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}