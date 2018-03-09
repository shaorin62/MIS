/**
 * core.erp.hrm.service.impl.HRME0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRME0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRME0040ServiceImpl - 인사발령현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link HRME0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRME0040Service")
public class HRME0040ServiceImpl extends EgovAbstractServiceImpl implements HRME0040Service {

	/**
	 * 인사발령현황 DAO class inject.
	 */
	@Resource(name = "HRME0040Dao")
	private HRME0040Dao dao;

	/**
	 * 발령상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
