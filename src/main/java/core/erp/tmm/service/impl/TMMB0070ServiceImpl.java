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
import core.erp.tmm.service.TMMB0070Service;

/**
 * <pre>
 *	TMMB0070ServiceImpl - 프로그램별실행현황
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
@Service("TMMB0070Service")
public class TMMB0070ServiceImpl extends EgovAbstractServiceImpl implements TMMB0070Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0070ServiceImpl.class);

	@Resource(name="TMMB0070Dao")
	private TMMB0070Dao tMMB0070Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return tMMB0070Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_OPERXM", tMMB0070Dao.processSEARCH00(searchVo));
		return returnMap;
    }
	
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		/*********************
		 *  로그 삭제 처리  *
		 *********************/
		return tMMB0070Dao.processDELETE00(saveData);
	}
}
