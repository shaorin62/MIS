/**
 * core.erp.tmm.service.impl.FAMD0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMC0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMC0020Service - 일(월)계표 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영
 * @since	2016.09.01.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.15.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */

@Service("FAMC0020Service")
public class FAMC0020ServiceImpl extends EgovAbstractServiceImpl implements FAMC0020Service {

	@Resource(name = "FAMC0020Dao")
	private FAMC0020Dao dao;

	/**
	 * 일(월)계표 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
