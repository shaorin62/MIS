package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMA0020ServiceImpl - 자금운용계획현황  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMA0020Service}
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

@Service("TRMA0020Service")
public class TRMA0020ServiceImpl extends EgovAbstractServiceImpl implements TRMA0020Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0020ServiceImpl.class);

	@Resource(name = "TRMA0020Dao")
	private TRMA0020Dao tRMA0020Dao;
	
	@Resource(name = "TRMA0030Dao")
	private TRMA0030Dao tRMA0030Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//tRMA0020Dao.processPROC00_DELETE(searchVo);
		tRMA0020Dao.processPROC00(searchVo);
		returnMap.put("dsTA_MONEPL", tRMA0020Dao.processSEARCH00(searchVo));

		searchVo.put("ACCT_DATE", searchVo.get("PROV_DATE1"));
		tRMA0030Dao.processSEARCH_SAVE00(searchVo);
		returnMap.put("dsBEFORE_DATA", tRMA0030Dao.processSEARCH00(searchVo));
		
		returnMap.put("dsHEAD_DATA", tRMA0020Dao.processSEARCH03(searchVo));
		returnMap.put("dsTA_MONEPL1", tRMA0020Dao.processSEARCH04(searchVo));
		returnMap.put("dsHEAD_DATA1", tRMA0020Dao.processSEARCH05(searchVo));
		
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsGROUP_DATA", tRMA0020Dao.processSEARCH01(searchVo));
		returnMap.put("dsGROUP_DATA1", tRMA0020Dao.processSEARCH06(searchVo));
		return returnMap;
	}
	
}
