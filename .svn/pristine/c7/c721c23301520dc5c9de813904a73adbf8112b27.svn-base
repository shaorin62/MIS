package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0010ServiceImpl - 매출처별세금계산서합계표조회 서비스 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 3.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 3.	황치웅		Initial Created.
 * 2016. 8. 5	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMC0010Service")
public class TXMC0010ServiceImpl extends EgovAbstractServiceImpl implements TXMC0010Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0010ServiceImpl.class);

	@Resource(name = "TXMC0010Dao")
	private TXMC0010Dao tXMC0010Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		searchVo.put("BILL_TYPECD","1");
		returnMap.put("dsTA_VAT104_D", tXMC0010Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT104_H1", tXMC0010Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT104_H2", tXMC0010Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		searchVo.put("BILL_TYPECD","1");
		returnMap.put("dsTA_VAT104_H1", tXMC0010Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT104_H2", tXMC0010Dao.processSEARCH02(searchVo));
		searchVo.put("BILL_TYPECD","2");
		returnMap.put("dsTA_VAT104_H3", tXMC0010Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT104_D", tXMC0010Dao.processSEARCH00(searchVo));
		returnMap.put("dsVA_VATBRANCH", tXMC0010Dao.processSEARCH03(searchVo));
		return returnMap;
	}
}
