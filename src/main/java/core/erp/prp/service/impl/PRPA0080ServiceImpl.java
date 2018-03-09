/**
 * core.erp.tmm.service.impl.PRPA0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.prp.service.PRPA0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PRPA0080Controller - 제작 결산관리 실적집계표(외주처별)
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.28
 * @version	1.0
 * @see		{@link PRPA0080}
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

@Service("PRPA0080Service")
public class PRPA0080ServiceImpl extends EgovAbstractServiceImpl implements PRPA0080Service {

	/**
	 * 제작실적집계표 DAO class inject.
	 */
	@Resource(name = "PRPA0080Dao")
	private PRPA0080Dao dao;
	
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
	 * 제작실적집계표 제작종류별분류 - 유비리포트
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
	 * 제작실적집계표 제작종류별분류 - 유비리포트 년월
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
