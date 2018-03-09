/**
 * core.erp.hat.service.impl.HATF0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.hat.service.HATF0090Service; 
import core.erp.hat.web.HATF0090Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0090ServiceImpl - 출장신청/정산/외근현황 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박정윤
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link HATF0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	박정윤		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright NDS.(C) All right reserved.
 */

@Service("HATF0090Service")
public class HATF0090ServiceImpl extends EgovAbstractServiceImpl implements HATF0090Service {

	/**
	 * 출장기준등록  DAO class inject.
	 */
	@Resource(name = "HATF0090Dao")
	private HATF0090Dao hATF0090Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BUTRXM", hATF0090Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BTCLXM", hATF0090Dao.processSEARCH01(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BTWOXM", hATF0090Dao.processSEARCH02(searchVo));
		return returnMap;

    }

}
