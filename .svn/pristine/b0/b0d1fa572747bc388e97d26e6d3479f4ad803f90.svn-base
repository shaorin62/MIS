/**
 * core.erp.hrm.service.impl.HATE0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hat.service.HATE0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATE0050ServiceImpl - 연장근로현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김칠석
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link HATE0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	김칠석		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATE0050Service")
public class HATE0050ServiceImpl extends EgovAbstractServiceImpl implements HATE0050Service {

	/**
	 * 연장근로현황 DAO class inject.
	 */
	@Resource(name = "HATE0050Dao")
	private HATE0050Dao dao;

	/**
	 * 연장근로현황의 요일정보를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CALDXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 연장근로현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ATTEDY", dao.processSEARCH01(searchVo));
		return returnMap;

    }

}
