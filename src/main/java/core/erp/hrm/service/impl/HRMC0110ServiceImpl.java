/**
 * core.erp.hrm.service.impl.HRMC0110ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0110Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	HRMC0110ServiceImpl - 여권현황 ServiceImpl
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 16.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRMC0110Service")
public class HRMC0110ServiceImpl extends EgovAbstractServiceImpl implements HRMC0110Service {

	/**
	 * 여권현황 DAO class inject.
	 */
	@Resource(name = "HRMC0110Dao")
	private HRMC0110Dao hRMC0110Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_PASSRR", hRMC0110Dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
}
