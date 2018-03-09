package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMC0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMC0020ServiceImpl - 차입금거래현황  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.28
 * @version	1.0
 * @see		{@link TRMC0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMC0020Service")
public class TRMC0020ServiceImpl extends EgovAbstractServiceImpl implements TRMC0020Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMC0020ServiceImpl.class);

	@Resource(name = "TRMC0020Dao")
	private TRMC0020Dao tRMC0020Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_DBPYXD", tRMC0020Dao.processSEARCH00(searchVo));
		return returnMap;
	}

}
