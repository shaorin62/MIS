/**
 * core.erp.tmm.service.impl.PRPA0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.prp.service.PRPA0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PRPA0030Controller - 제작 결산관리 실적집계표(매체별 분류)
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link PRPA0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.05	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PRPA0030Service")
public class PRPA0030ServiceImpl extends EgovAbstractServiceImpl implements PRPA0030Service {

	/**
	 * 제작견적서 -견적용 DAO class inject.
	 */
	@Resource(name = "PRPA0030Dao")
	private PRPA0030Dao dao;
	
	/**
	 * 제작명세서화면 상단 헤더를 조회한다.
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
