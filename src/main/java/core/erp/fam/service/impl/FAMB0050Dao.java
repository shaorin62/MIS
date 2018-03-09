package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMB0050Dao - 메세지관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석두 <ksd@inbus.co.kr>
 * @since	2014. 10. 23.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 23.	김석두		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("FAMB0050Dao")
public class FAMB0050Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 메세지관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMB0050.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 메세지관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMB0050.SEARCH01", searchVo);

	}	
	
	
}