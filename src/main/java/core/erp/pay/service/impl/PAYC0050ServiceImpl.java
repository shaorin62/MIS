/**
 * core.erp.pay.service.impl.PAYC0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0050ServiceImpl - 급여이체현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.09.28
 * @version	1.0
 * @see		{@link PAYC0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYC0050Service")
public class PAYC0050ServiceImpl extends EgovAbstractServiceImpl implements PAYC0050Service {

	/**
	 * 급여이체현황 DAO class inject.
	 */
	@Resource(name = "PAYC0050Dao")
	private PAYC0050Dao dao;
	
	/**
	 * 급여상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 리포트를 출력한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL", dao.processSEARCH02(searchVo));
		return returnMap;

    }

}
