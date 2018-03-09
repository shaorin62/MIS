/**
 * core.erp.tmm.service.impl.FAMC0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMC0050Service; 
import core.erp.fam.service.impl.FAMC0050Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMC0050ServiceImpl - 관리항목/계정별잔액현황 서비스 인터페이스 구현 클래스
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
 * 2016. 07. 13.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */

@Service("FAMC0050Service")
public class FAMC0050ServiceImpl extends EgovAbstractServiceImpl implements FAMC0050Service {

	/**
	 * 관리항목/계정별잔액현황 관리 DAO class inject.
	 */
	@Resource(name = "FAMC0050Dao")
	private FAMC0050Dao dao;

	/**
	 * 관리항목/계정별잔액현황 목록을 조회한다.
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
