/**
 * core.erp.fsm.service.impl.FSMB0010P02ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0010P02Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0010P02ServiceImpl - 품목정보조회 팝업
 * </pre>
 *
 * @author	권미영
 * @since	2016.07.29
 * @version	1.0
 * @see		{@link FSMB0010P02Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0010P02Service")
public class FSMB0010P02ServiceImpl extends EgovAbstractServiceImpl implements FSMB0010P02Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FSMB0010P02ServiceImpl.class);
	
	/**
	 * 품목정보조회 DAO class inject.
	 */
	@Resource(name = "FSMB0010P02Dao")
	private FSMB0010P02Dao fSMB0010P02Dao;

	/**
	 * 품목정보조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 품목정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASSTXM", fSMB0010P02Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 자산등록 품목정보 콤보 정보 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 품목정보 콤보 정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCombo2", fSMB0010P02Dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
}
