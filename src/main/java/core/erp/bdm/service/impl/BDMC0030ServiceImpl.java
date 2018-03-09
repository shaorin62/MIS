/**
 * core.erp.tmm.service.impl.BDMC0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMC0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	BDMC0030ServiceImpl - 예산실적상세현황 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link BDMC0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("BDMC0030Service")
public class BDMC0030ServiceImpl extends EgovAbstractServiceImpl implements BDMC0030Service {

	/**
	 * 예산실적상세현황 관리 DAO class inject.
	 */
	@Resource(name = "BDMC0030Dao")
	private BDMC0030Dao dao;

	/**
	 * 예산실적상세현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 예산실적상세현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLDPT", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 예산실적상세현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 예산실적상세현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;

    }
}
