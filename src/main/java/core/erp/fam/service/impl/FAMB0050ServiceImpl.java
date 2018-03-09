/**
 * core.erp.tmm.service.impl.FAMB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMB0050Service; 
import core.erp.fam.service.impl.FAMB0050Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMB0050ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.06.22
 * @version	1.0
 * @see		{@link FAMB0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.22	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMB0050Service")
public class FAMB0050ServiceImpl extends EgovAbstractServiceImpl implements FAMB0050Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FAMB0050Dao")
	private FAMB0050Dao dao;

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXMLOG", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNTLOG", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	

}
