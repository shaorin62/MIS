package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	TRMA0070Service - 제예금명세서  메뉴 서비스 인터페이스
 * </pre>
 *
 * @author	황치웅
 * @since	2017.01.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.01.05	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMA0070Service {

	/**
	 * <pre>
	 * 제예금명세서  조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}
