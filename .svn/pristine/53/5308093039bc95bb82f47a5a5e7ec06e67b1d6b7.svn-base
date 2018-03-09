/**
 * core.erp.hrm.service.impl.HRMD0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMD0090Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMD0090ServiceImpl - 승진율현황(직위별) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.19
 * @version	1.0
 * @see		{@link HRMD0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.19	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMD0090Service")
public class HRMD0090ServiceImpl extends EgovAbstractServiceImpl implements HRMD0090Service {

	/**
	 * 승진율현황(직위별) DAO class inject.
	 */
	@Resource(name = "HRMD0090Dao")
	private HRMD0090Dao dao;

	/**
	 * 승진율현황(직위별) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 승진율현황(직위별) 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_PROMTN", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
