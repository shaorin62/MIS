/**
 * core.erp.hrm.service.impl.HRMD0080ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMD0080Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMD0080ServiceImpl - 승진기간(직급별) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link HRMD0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMD0080Service")
public class HRMD0080ServiceImpl extends EgovAbstractServiceImpl implements HRMD0080Service {

	/**
	 * 승진기간(직급별) DAO class inject.
	 */
	@Resource(name = "HRMD0080Dao")
	private HRMD0080Dao dao;

	/**
	 * 발령상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
