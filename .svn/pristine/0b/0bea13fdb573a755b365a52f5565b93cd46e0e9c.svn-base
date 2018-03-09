/**
 * core.erp.pay.service.impl.PAYJ0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYJ0060Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYJ0060ServiceImpl - 인건비효율성 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link PAYJ0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYJ0060Service")
public class PAYJ0060ServiceImpl extends EgovAbstractServiceImpl implements PAYJ0060Service {

	/**
	 * 인건비효율성 DAO class inject.
	 */
	@Resource(name = "PAYJ0060Dao")
	private PAYJ0060Dao dao;


	/**
	 * 인건비효율성 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPAVG1", dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * 인건비효율성 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPAVG2", dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	/**
	 * 인건비효율성 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPAVG3", dao.processSEARCH02(searchVo));
		return returnMap;
	}	
}
