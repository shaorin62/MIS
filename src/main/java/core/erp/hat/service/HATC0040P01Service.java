/**
 * core.erp.hrm.service.HATC0040P01Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATC0040P01Service - 휴가팝업 서비스 인트페이스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATC0040P01Service {

	/**
	 * <pre>
	 * 휴가팝업 - 휴가신청 내역을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 휴가신청 내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	
	
	
}