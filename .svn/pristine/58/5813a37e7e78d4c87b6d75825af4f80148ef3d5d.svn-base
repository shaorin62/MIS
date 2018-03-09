package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0030ServiceImpl - 수출실적명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.05	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMC0030Service")
public class TXMC0030ServiceImpl extends EgovAbstractServiceImpl implements TXMC0030Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0030ServiceImpl.class);

	@Resource(name = "TXMC0030Dao")
	private TXMC0030Dao TXMC0030Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		searchVo.put("BILL_TYPECD","1");
		returnMap.put("dsTA_VAT105_D", TXMC0030Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT105_H1", TXMC0030Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT105_H2", TXMC0030Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		searchVo.put("BILL_TYPECD","1");
		returnMap.put("dsTA_VAT105_H1", TXMC0030Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT105_H2", TXMC0030Dao.processSEARCH02(searchVo));
		searchVo.put("BILL_TYPECD","2");
		returnMap.put("dsTA_VAT105_H3", TXMC0030Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT105_D", TXMC0030Dao.processSEARCH00(searchVo));
		returnMap.put("dsVA_VATBRANCH", TXMC0030Dao.processSEARCH03(searchVo));
		return returnMap;
	}
	
}
