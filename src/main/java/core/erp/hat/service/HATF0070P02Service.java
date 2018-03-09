/**
 * core.erp.hrm.service.HATF0070P02Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATF0070P02Service - 출장신청등록 등록 서비스 인터페이스
 * </pre>
 * 
 * @author	김남호
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김남호		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATF0070P02Service {

	/**
	 * <pre>
	 * 출장여비정산 상세 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 출장여비정산 상세 조회
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	
	 
}