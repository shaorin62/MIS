/**
 * core.erp.tmm.service.impl.TMMA0320ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0320Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0320ServiceImpl - 경영계획및실적현황 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최인철
 * @since	2016.11.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.23	최인철		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0320Service")
public class TMMA0320ServiceImpl extends EgovAbstractServiceImpl implements TMMA0320Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0320ServiceImpl.class);
	/**
	 * 경영계획및실적관리 DAO class inject.
	 */
	@Resource(name = "TMMA0320Dao")
	private TMMA0320Dao dao;

	/**
	 * 경영계획및실적현황 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공지사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_MONEPL", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
