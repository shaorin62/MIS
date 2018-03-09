/**
 * core.erp.tmm.service.impl.TMMA0120ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0120Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0120ServiceImpl - 자료조회처리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.08.08
 * @version	1.0
 * @see		{@link TMMA0120Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0120Service")
public class TMMA0120ServiceImpl extends EgovAbstractServiceImpl implements TMMA0120Service {

	/**
	 * 자료조회처리 DAO class inject.
	 */
	@Resource(name = "TMMA0120Dao")
	private TMMA0120Dao dao;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(TMMA0120ServiceImpl.class);

	/**
	 * 자료조회양식 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자료조회양식 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_VIMNXM", dao.processSEARCH00(searchVo));
		returnMap.put("dsTM_VICDXL", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 자료조회조건 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자료조회조건 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//데이타셋을 받은 다음에 쿼리를 꺼내서 실행한 다음 리턴값을 반환
		
		//dao.processSEARCH02(searchVo)
		
		LOGGER.debug("====== Parameters : " + searchVo);
		Map<String, Object> queryParamMap = new HashMap<String, Object>();
		Map<String, Object> formInfoMap = (Map<String, Object>) dao.processSEARCH02(searchVo);

		if((formInfoMap == null) || formInfoMap.isEmpty()) {
			
			throw new RuntimeException("조건검색 양식 [" + searchVo.get("VIEW_CODE") + "]의 정보가 존재하지 않거나 올바르지 않습니다.");
			
		}		
		
		LOGGER.debug("====== Form : " + formInfoMap);

		// 쿼리 정보
		String searchQuery = (String) formInfoMap.get("SRCH_CNTT");
		
		// 쿼리에서 파라미터 값을 처리한다!
		Set<String> keys = searchVo.keySet();
		
		for (Iterator it = keys.iterator(); it.hasNext();) {
			//첫번째 파라미터는 VIEW_CODE가 있고, 2번째 부터 사용자 입력 파라미터가 있다.
			String key = (String) it.next(); 
			String value = (String) (searchVo.get(key) == null ? "" : String.valueOf(searchVo.get(key)));
			searchQuery = searchQuery.replaceAll("@" + key, "'" + value + "'");
			//queryParamMap.put(key, value);
		}
		
		LOGGER.debug("Executed Query : \n" + searchQuery);
		
		queryParamMap.put("queryString", searchQuery);
		
		returnMap.put("dsGRID_DATA", dao.processSEARCH03(queryParamMap));
		
		return returnMap;

    }

}
