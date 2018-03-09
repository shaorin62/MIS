package core.erp.tmm.service.impl;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;											
import java.util.Iterator;										
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.tmm.service.TMMD0310Service;

/**
 * <pre>
 *	TMMD0310ServiceImpl - 소스코드생성관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMD0310Service")
public class TMMD0310ServiceImpl extends EgovAbstractServiceImpl implements TMMD0310Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0310ServiceImpl.class);

	@Resource(name="TMMD0310Dao")
	private TMMD0310Dao TMMD0310Dao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMD0310Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_TABLE", TMMD0310Dao.processSEARCH00(searchVo));
		return returnMap;

    } 
 
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		//dsTM_QUERY
		Map<String, Object> searchUserList = new HashMap<String, Object>();
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		
		String sQUERY_TYPE = searchVo.get("QUERY_TYPE").toString(); 
		Object data = null;
		if (sQUERY_TYPE.equals("P")) {
			data = TMMD0310Dao.processSEARCH01(searchVo);
		} else if (sQUERY_TYPE.equals("S")) {
			data = TMMD0310Dao.processSEARCH02(searchVo);
		} else if (sQUERY_TYPE.equals("I")) {
			data = TMMD0310Dao.processSEARCH03(searchVo);
		} else if (sQUERY_TYPE.equals("U")) {
			data = TMMD0310Dao.processSEARCH04(searchVo);
		} else if (sQUERY_TYPE.equals("D")) {
			data = TMMD0310Dao.processSEARCH05(searchVo);
		} else if (sQUERY_TYPE.equals("DC")) {
			data = TMMD0310Dao.processSEARCH06(searchVo);
		} else if (sQUERY_TYPE.equals("SC")) {
			data = TMMD0310Dao.processSEARCH07(searchVo);
		} else if (sQUERY_TYPE.equals("C")) {
			data = TMMD0310Dao.processSEARCH08(searchVo);
		} else if (sQUERY_TYPE.equals("R")) {
			String sQuery = searchVo.get("QUERY_STRG").toString();
			searchUserList.put("CQUERY", sQuery);
			data = TMMD0310Dao.processSEARCH09(searchUserList);
		}
		returnMap.put("dsTM_QUERY", data);
		return returnMap;
    } 	
	
}
