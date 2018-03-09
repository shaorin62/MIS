package core.erp.trm.service;

import java.util.Map;


/**
 * <pre>
 *	TRMD0020Service - 구매카드미결제명세서
 * </pre>
 *
 * @author	권미영
 * @since	2016.12.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

public interface TRMD0020Service {

	/**
	 * <pre>
	 * 구매카드미결제명세서
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

}
