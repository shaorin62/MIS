/**
 * core.erp.mcm.service.MCMA0070P01Service.java - <Created by Code Template generator>
 */
package core.erp.mcm.service;

import java.util.Map;

/**
 * <pre>
 *	MCMA0070P01Service - 카테고리조회팝업(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MCMA0070P01Service {

	/**
	 * <pre>
	 * 카테고리조회팝업 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 카테고리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}