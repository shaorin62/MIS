package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMA0030ServiceImpl - 일자금현황 제예금현황  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMA0030Service}
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

@Service("TRMA0030Service")
public class TRMA0030ServiceImpl extends EgovAbstractServiceImpl implements TRMA0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0030ServiceImpl.class);

	@Resource(name = "TRMA0030Dao")
	private TRMA0030Dao tRMA0030Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		tRMA0030Dao.processSEARCH_SAVE00(searchVo);
		returnMap.put("dsTA_RESULT1", tRMA0030Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_RESULT2", tRMA0030Dao.processSEARCH01(searchVo));
		return returnMap;
	}

}
