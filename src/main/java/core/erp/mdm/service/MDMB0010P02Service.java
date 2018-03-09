/**
 * core.erp.mdm.service.MDMB0010P02Service.java - <Created by Code Template generator>
 */
package core.erp.mdm.service;

import java.util.Map;

/**
 * <pre>
 *	MDMB0010P02Service - 브랜드조회팝업(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.12	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MDMB0010P02Service {

	/**
	 * <pre>
	 * 브랜드조회팝업 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 브랜드 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}