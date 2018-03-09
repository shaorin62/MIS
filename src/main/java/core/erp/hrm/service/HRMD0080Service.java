/**
 * core.erp.hrm.service.HRMD0080Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;

/**
 * <pre>
 *	HRMD0080Service - 승진기간(직급별) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	박철영
 * @since	2016.08.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	박철영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HRMD0080Service {

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
	public Object processSEARCH00(Map searchVo) throws Exception ;

}