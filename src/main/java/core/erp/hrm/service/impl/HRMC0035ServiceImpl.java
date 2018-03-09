/**
 * core.erp.hrm.service.impl.HRMC0035ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0035Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("HRMC0035Service")
/**
 * <pre>
 *	HRMC0035ServiceImpl - 징계현황 메뉴 서비스 인터페이스 구현 클래스 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 18.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 18.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class HRMC0035ServiceImpl extends EgovAbstractServiceImpl implements HRMC0035Service {

	/**
	 * 징계현황 DAO class inject.
	 */
	@Resource(name = "HRMC0035Dao")
	private HRMC0035Dao hRMC0035Dao;

	/**
	 * 징계사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 징계사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_DISCIP", hRMC0035Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
