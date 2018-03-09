package core.erp.yea.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.yea.service.YEAA0080_2015Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	YEAA0080_2015ServiceImpl - 연말정산내역 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link YEAA0080_2015Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.28.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("YEAA0080_2015Service")
public class YEAA0080_2015ServiceImpl extends EgovAbstractServiceImpl implements YEAA0080_2015Service {

	/**
	 * 연말정산내역 DAO class inject.
	 */
	@Resource(name = "YEAA0080_2015Dao")
	private YEAA0080_2015Dao dao;

	/**
	 * 연말정산내역 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 직급호봉표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsYEA_PAYDTL", dao.processSEARCH00(searchVo));
		returnMap.put("dsYEA_YEPROC", dao.processSEARCH01(searchVo));
		return returnMap;

    }	
}
