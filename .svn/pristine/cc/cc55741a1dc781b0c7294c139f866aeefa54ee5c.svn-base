/**
 * core.erp.tmm.service.impl.FAMD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMD0010Service; 
import core.erp.fam.service.impl.FAMD0010Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMD0010Service - 계정별잔액연령현황 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	오혜성
 * @since	2016. 07. 13.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */

@Service("FAMD0010Service")
public class FAMD0010ServiceImpl extends EgovAbstractServiceImpl implements FAMD0010Service {

	/**
	 * 계정별잔액연령현황 DAO class inject.
	 */
	@Resource(name = "FAMD0010Dao")
	private FAMD0010Dao dao;

	/**
	 * 계정별잔액연령현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 매출 채권 연령 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
