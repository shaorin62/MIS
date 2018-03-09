/**
 * core.erp.hrm.service.impl.HRMC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMC0020ServiceImpl - 포상현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.05
 * @version	1.0
 * @see		{@link HRMC0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.05	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMC0020Service")
public class HRMC0020ServiceImpl extends EgovAbstractServiceImpl implements HRMC0020Service {

	/**
	 * 포상현황 DAO class inject.
	 */
	@Resource(name = "HRMC0020Dao")
	private HRMC0020Dao dao;

	/**
	 * 포상사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 포상사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_REWARD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
