/**
 * core.erp.tmm.service.impl.PRPA0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.prp.service.PRPA0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PRPA0070Controller - 제작 결산관리 실적집계표(계열 비계열)
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.28
 * @version	1.0
 * @see		{@link PRPA0070}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.28	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PRPA0070Service")
public class PRPA0070ServiceImpl extends EgovAbstractServiceImpl implements PRPA0070Service {

	/**
	 * 제작실적집계표 DAO class inject.
	 */
	@Resource(name = "PRPA0070Dao")
	private PRPA0070Dao dao;
	
	/**
	 * 제작실적집계표 제작종류별분류
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_REPORT", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작명세서화면 상단 헤더를 조회한다. - 유비리포트
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_REPORT", dao.processPRINT00(searchVo));
		return returnMap;

    }
	
	/**
	 * 제작명세서화면 상단 헤더를 조회한다. - 유비리포트 년월
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_YEARMN", dao.processPRINT01(searchVo));
		return returnMap;

    }
	
}
