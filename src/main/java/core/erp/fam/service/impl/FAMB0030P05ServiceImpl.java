/**
 * core.erp.fam.service.impl.FAMB0030P05ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMB0030P05Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMB0030P05ServiceImpl - 증빙선택조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.08.08
 * @version	1.0
 * @see		{@link FAMB0030P05Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMB0030P05Service")
public class FAMB0030P05ServiceImpl extends EgovAbstractServiceImpl implements FAMB0030P05Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMB0030P05ServiceImpl.class);
	
	/**
	 * 증빙선택조회 DAO class inject.
	 */
	@Resource(name = "FAMB0030P05Dao")
	private FAMB0030P05Dao FAMB0030P05Dao;

	/**
	 * 증빙 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 ㄴ 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATCDH", FAMB0030P05Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
