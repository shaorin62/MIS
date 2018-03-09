/**
 * core.erp.fam.service.impl.TXMA0010P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.txm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0010P01Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TXMA0010P01ServiceImpl - 전표번호선택조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link TXMA0010P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMA0010P01Service")
public class TXMA0010P01ServiceImpl extends EgovAbstractServiceImpl implements TXMA0010P01Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMA0010P01ServiceImpl.class);
	
	/**
	 * 전표번호선택조회 DAO class inject.
	 */
	@Resource(name = "TXMA0010P01Dao")
	private TXMA0010P01Dao TXMA0010P01Dao;

	/**
	 * 전표번호 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 전표번호 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", TXMA0010P01Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
