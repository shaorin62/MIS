package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;											
import java.util.Iterator;										
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.tmm.service.TMMB0110Service;

/**
 * <pre>
 *	TMMB0110ServiceImpl - 프로그램별실행현황
 * <p><b>NOTE : 프로그램별실행현황</b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 17.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMB0110Service")
public class TMMB0110ServiceImpl extends EgovAbstractServiceImpl implements TMMB0110Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0110ServiceImpl.class);

	@Resource(name="TMMB0110Dao")
	private TMMB0110Dao TMMB0110Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMB0110Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_LOGINX", TMMB0110Dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
}
