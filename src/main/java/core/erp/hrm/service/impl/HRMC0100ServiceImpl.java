/**
 * core.erp.hrm.service.impl.HRMC0100ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0100Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMC0100ServiceImpl - 어학성적현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.06
 * @version	1.0
 * @see		{@link HRMC0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.06	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMC0100Service")
public class HRMC0100ServiceImpl extends EgovAbstractServiceImpl implements HRMC0100Service {

	/**
	 * 어학성적현황 DAO class inject.
	 */
	@Resource(name = "HRMC0100Dao")
	private HRMC0100Dao dao;

	/**
	 * 외국어 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 외국어 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_FRLANG", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
