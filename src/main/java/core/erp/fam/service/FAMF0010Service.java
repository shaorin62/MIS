/**
 * core.erp.tmm.service.FAMF0010Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMF0010Service - 합계잔액시산표 조회 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMF0010Service {

	/**
	 * <pre>
	 * 합계잔액시산표 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 합계잔액시산표  목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}