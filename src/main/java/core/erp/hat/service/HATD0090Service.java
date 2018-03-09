/**
 * core.erp.hrm.service.HATD0090Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATD0090Service - 월별연차현황 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	김칠석
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	김칠석		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATD0090Service {

	/**
	 * <pre>
	 * 월별연차현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 자격사항 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}