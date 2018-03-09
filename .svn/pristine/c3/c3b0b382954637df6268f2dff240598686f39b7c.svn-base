/**
 * core.erp.tmm.service.impl.FAMD0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMD0090Service; 
import core.erp.fam.service.impl.FAMD0090Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMD0090ServiceImpl - 거래처별미결잔액현황
 * </pre>
 *
 * @author	권미영
 * @since	2016. 12. 26.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.26.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */

@Service("FAMD0090Service")
public class FAMD0090ServiceImpl extends EgovAbstractServiceImpl implements FAMD0090Service {


	@Resource(name = "FAMD0090Dao")
	private FAMD0090Dao dao;

	/**
	 * 거래처별미결잔액현황
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
