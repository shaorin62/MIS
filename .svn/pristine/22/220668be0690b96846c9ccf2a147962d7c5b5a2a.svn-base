package core.erp.hrm.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0130Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	HRMC0130ServiceImpl - 직무현황 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 8. 17.
 * @version	1.0
 * @see		{@link HRMC0130Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 17.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRMC0130Service")
public class HRMC0130ServiceImpl extends EgovAbstractServiceImpl implements HRMC0130Service {

	@Resource(name = "HRMC0130Dao")
	private HRMC0130Dao dao;

	/**
	 * 직무현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직무현황 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_DUTYRR", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
