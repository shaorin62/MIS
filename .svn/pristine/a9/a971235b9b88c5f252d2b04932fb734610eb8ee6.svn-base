/**
 * core.erp.hrm.service.impl.HRMK0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMK0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMK0030ServiceImpl - 증명서발급현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.15
 * @version	1.0
 * @see		{@link HRMK0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.15	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMK0030Service")
public class HRMK0030ServiceImpl extends EgovAbstractServiceImpl implements HRMK0030Service {

	/**
	 * 증명서발급현황 DAO class inject.
	 */
	@Resource(name = "HRMK0030Dao")
	private HRMK0030Dao dao;

	/**
	 * 증명서발급 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 증명서발급 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CERSIS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
