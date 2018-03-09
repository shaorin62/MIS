package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMD0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMD0020ServiceImpl - 구매카드미결제명세서
 * </pre>
 *
 * @author	권미영
 * @since	2016.12.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMD0020Service")
public class TRMD0020ServiceImpl extends EgovAbstractServiceImpl implements TRMD0020Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMD0020ServiceImpl.class);

	@Resource(name = "TRMD0020Dao")
	private TRMD0020Dao dao;

	/**
	 * 구매카드미결제명세서
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH00(searchVo));
		return returnMap;
	}


}
