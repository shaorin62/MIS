package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRME0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TRME0060ServiceImpl - 법인카드승인자료조회 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 10. 17.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TRME0060Service")
public class TRME0060ServiceImpl extends EgovAbstractServiceImpl implements TRME0060Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0060ServiceImpl.class);

	@Resource(name = "TRME0060Dao")
	private TRME0060Dao tRME0060Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CARDAK", tRME0060Dao.processSEARCH00(searchVo));
		return returnMap;
	}

}
