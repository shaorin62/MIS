package core.erp.trm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TRMD0020Dao - 구매카드미결제명세서
 * </pre>
 *
 * @author	권미영
 * @since	2016.12.29
 * @version	1.0
 * @see		{@link }
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
@Repository("TRMD0020Dao")
public class TRMD0020Dao extends CmmBaseDAO  {


	/**
	 * <pre>
	 * 구매카드미결제명세서
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("TRMD0020.SEARCH00", searchVo);

	}

}
