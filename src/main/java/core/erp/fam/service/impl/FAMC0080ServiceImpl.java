/**
 * core.erp.tmm.service.impl.FAMC0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMC0080Service; 
import core.erp.fam.service.impl.FAMC0080Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMC0080Service - 잔액세부현황 조회 서비스 
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

@Service("FAMC0080Service")
public class FAMC0080ServiceImpl extends EgovAbstractServiceImpl implements FAMC0080Service {

	/**
	 * 잔액세부현황 조회 DAO class inject.
	 */
	@Resource(name = "FAMC0080Dao")
	private FAMC0080Dao dao;

	/**
	 * 이월잔액 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MANMTM", dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;
    }
	
	/**
	 * 관리구분콤보 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH09(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCOND_CODE", dao.processSEARCH09(searchVo));
		return returnMap;
    }	
}
