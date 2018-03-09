package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0080ServiceImpl - 퇴직추계액 테이블 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 13.
 * @version	1.0
 * @see		{@link PAYF0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 13.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0080Service")
public class PAYF0080ServiceImpl extends EgovAbstractServiceImpl implements PAYF0080Service {

	/**
	 * 퇴직추계액 테이블 DAO class inject.
	 */
	@Resource(name = "PAYF0080Dao")
	private PAYF0080Dao dao;

	/**
	 * 퇴직추계액 테이블 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		dao.processPROC00(searchVo);
		returnMap.put("dsPY_RTCESE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}