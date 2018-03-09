/**
 * core.erp.tmm.service.impl.BDMD0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMD0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	BDMD0030ServiceImpl - 품의예산실적상세현황 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link BDMD0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("BDMD0030Service")
public class BDMD0030ServiceImpl extends EgovAbstractServiceImpl implements BDMD0030Service {

	/**
	 * 품의예산실적상세현황 관리 DAO class inject.
	 */
	@Resource(name = "BDMD0030Dao")
	private BDMD0030Dao dao;

	/**
	 * 품의예산실적현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 품의예산실적현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLREQ", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 품의예산실적상세현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 품의예산실적상세현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;

    }
}
