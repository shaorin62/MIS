package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMB0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMB0020ServiceImpl - 세금계산서 국세청 전송내역  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TXMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * 2018.08.03	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMB0020Service")
public class TXMB0020ServiceImpl extends EgovAbstractServiceImpl implements TXMB0020Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMB0020ServiceImpl.class);

	@Resource(name = "TXMB0020Dao")
	private TXMB0020Dao tXMB0020Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_TOTALX", tXMB0020Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ETAXUP", tXMB0020Dao.processSEARCH01(searchVo)); 
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", tXMB0020Dao.processSEARCH02(searchVo)); 
		return returnMap;
	}
	
}
