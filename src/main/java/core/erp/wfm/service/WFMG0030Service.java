/**
 * core.erp.hrm.service.WFMG0010Service.java - <Created by Code Template generator>
 */
package core.erp.wfm.service;

import java.util.Map;

/**
 * <pre>
 *	WFMG0030Service - 연수신청현황 서비스 인터페이스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	김혜림		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface WFMG0030Service {

	/**
	 * <pre>
	 * 연수신청 현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 연수신청 현황
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	 
	
}