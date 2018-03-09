/**
 * core.erp.tmm.service.impl.FAMB0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMB0010Service; 
import core.erp.fam.service.impl.FAMB0010Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMB0010ServiceImpl - 전표조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.07.15
 * @version	1.0
 * @see		{@link FAMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.15	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMB0010Service")
public class FAMB0010ServiceImpl extends EgovAbstractServiceImpl implements FAMB0010Service {

	/**
	 * 전표조회 DAO class inject.
	 */
	@Resource(name = "FAMB0010Dao")
	private FAMB0010Dao dao;

	/**
	 * 전표조회를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 전표상세조회 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	

}
