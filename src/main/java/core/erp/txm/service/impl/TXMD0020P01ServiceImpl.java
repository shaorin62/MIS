package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMD0020P01Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMD0020P01Service - 지급명세서/영수증출력 POPUP
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016 08. 01
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016 08. 01 	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMD0020P01Service")
public class TXMD0020P01ServiceImpl extends EgovAbstractServiceImpl implements TXMD0020P01Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0020P01ServiceImpl.class);

	@Resource(name="TXMD0020P01Dao")
	private TXMD0020P01Dao tXMD0020P01Dao;
	

	/**
	 * 작성자 : 황치웅
	 * 일시 : 2016. 08. 01
	 * 내용 : 소득자 조회, 소득내역등록 자료 조회
	 * @param param - 조회조건 
	 * @return dsTA_JUMIPR
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CUSTXM", tXMD0020P01Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_INCMXM", tXMD0020P01Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/* (non-Javadoc)
	 * @see core.erp.rmm.service.TXMD0020Service#processGetOffice(java.util.Map)
	 */
	
	/**
	 * 작성자 : 황치웅
	 * 일시 : 2016. 08. 01
	 * 내용 :이자배당 소득자 조회, 이자배당 소득내역등록 자료 조회
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return dsTA_JUMIEQ
	 * @exception Exception 예외
	 */
	public Object processSEARCH01(Map searchVo) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_GITAMAST01",tXMD0020P01Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_INTEXD",tXMD0020P01Dao.processSEARCH03(searchVo));
		return returnMap;
	}
}
