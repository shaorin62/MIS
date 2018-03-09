package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRME0100Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRME0100ServiceImpl - 법인카드 승인내역 및 전표처리 조회   메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRME0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRME0100Service")
public class TRME0100ServiceImpl extends EgovAbstractServiceImpl implements TRME0100Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0100ServiceImpl.class);

	@Resource(name = "TRME0100Dao")
	private TRME0100Dao tRME0100Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CARDAM", tRME0100Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	// 사용되지 않음.
	@SuppressWarnings("rawtypes")
	public Object processBATCH00(Map searchVo) throws Exception {
		//Map<String, Object> returnMap = new HashMap<String, Object>();
		//returnMap.put("dsTA_CARDAM", tRME0100Dao.processBATCH00(searchVo));
		//return returnMap;
		return null;
	}

}
