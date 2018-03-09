package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0075Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0075ServiceImpl - 퇴직추계액현황 테이블 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2016. 11. 15.
 * @version	1.0
 * @see		{@link PAYF0075Service}
 *
 * <pre>
 * == Modification Information ==
 * Date				Modifier	Comment
 * ====================================================
 * 2016. 11. 15.	안윤준 		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0075Service")
public class PAYF0075ServiceImpl extends EgovAbstractServiceImpl implements PAYF0075Service {

	/**
	 * 퇴직추계액현황 테이블 DAO class inject.
	 */
	@Resource(name = "PAYF0075Dao")
	private PAYF0075Dao dao;

	/**
	 * 퇴직추계액현황 테이블 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		if ( "01".equals(searchVo.get("QUERY_TYPE"))){
			returnMap.put("dsPY_RTRESE", dao.processSEARCH00(searchVo));
			
		} else {
			returnMap.put("dsPY_RTRESE", dao.processSEARCH01(searchVo));
			
		}
		
		return returnMap;

    }
	
	/**
	 * 퇴직추계액 목록 출력.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		if ( "01".equals(searchVo.get("QUERY_TYPE"))){
			returnMap.put("dsPY_RTRESE_PRINT", dao.processSEARCH00(searchVo));
		} else {
			returnMap.put("dsPY_RTRESE_PRINT", dao.processSEARCH01(searchVo));
			
		}
		
		return returnMap;

    }
}