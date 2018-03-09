/**
 * core.erp.hrm.service.impl.HRMD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMD0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMD0010ServiceImpl - 정원대비현원현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link HRMD0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMD0010Service")
public class HRMD0010ServiceImpl extends EgovAbstractServiceImpl implements HRMD0010Service {

	/**
	 * 정원대비현원현황 DAO class inject.
	 */
	@Resource(name = "HRMD0010Dao")
	private HRMD0010Dao dao;

	/**
	 * 공통코드상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 부서정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서정보 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_DEPTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

}
