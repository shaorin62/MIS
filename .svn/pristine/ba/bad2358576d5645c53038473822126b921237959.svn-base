/**
 * core.erp.fam.service.impl.FAMA0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMA0040ServiceImpl - 거래처정보조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.23
 * @version	1.0
 * @see		{@link FAMA0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.23	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0040Service")
public class FAMA0040ServiceImpl extends EgovAbstractServiceImpl implements FAMA0040Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0040ServiceImpl.class);
	
	/**
	 * 거래처정보조회 DAO class inject.
	 */
	@Resource(name = "FAMA0040Dao")
	private FAMA0040Dao fAMA0040Dao;

	/**
	 * 감가상각율 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 감가상각율 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXM", fAMA0040Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
