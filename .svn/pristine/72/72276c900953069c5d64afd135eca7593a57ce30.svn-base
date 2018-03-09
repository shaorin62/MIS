/**
 * core.erp.hrm.service.impl.HRMC0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMC0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("HRMC0030Service")
/**
 * <pre>
 *	HRMC0030ServiceImpl - 포상현황 메뉴 서비스 인터페이스 구현 클래스 
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
public class HRMC0030ServiceImpl extends EgovAbstractServiceImpl implements HRMC0030Service {

	/**
	 * 포상현황 DAO class inject.
	 */
	@Resource(name = "HRMC0030Dao")
	private HRMC0030Dao hRMC0030Dao;

	/**
	 * 포상사항 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 포상사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_REWARD", hRMC0030Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
