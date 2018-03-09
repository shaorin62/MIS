package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMA0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMA0070ServiceImpl - 제예금명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2017.01.05
 * @version	1.0
 * @see		{@link TRMA0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.01.05	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMA0070Service")
public class TRMA0070ServiceImpl extends EgovAbstractServiceImpl implements TRMA0070Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0070ServiceImpl.class);

	@Resource(name = "TRMA0070Dao")
	private TRMA0070Dao tRMA0070Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", tRMA0070Dao.processSEARCH00(searchVo));
		return returnMap;
	}

}
