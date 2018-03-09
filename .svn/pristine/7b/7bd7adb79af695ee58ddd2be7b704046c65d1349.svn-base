/**
 * core.erp.tmm.service.impl.FAMF0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMF0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMF0020ServiceImpl - 재무상태표 조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	권미영
 * @since	2016.10.13
 * @version	1.0
 * @see		{@link FAMF0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMF0020Service")
public class FAMF0020ServiceImpl extends EgovAbstractServiceImpl implements FAMF0020Service {

	/**
	 * 재무상태표 조회 DAO class inject.
	 */
	@Resource(name = "FAMF0020Dao")
	private FAMF0020Dao dao;

	/**
	 * 재무상태표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 재무상태표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//====================================================
		// 1. 재무상태표 자료 생성
		//====================================================
		dao.processSAVE00(searchVo);

		//====================================================
		// 2. 재무상태표 조회
		//====================================================
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODTMP", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
