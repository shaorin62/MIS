/**
 * core.erp.fam.service.FAMB0030P05Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMB0030P05Service - 증빙선택조회 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.08.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMB0030P05Service {

	/**
	 * <pre>
	 * 증빙 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 증빙 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	 
}