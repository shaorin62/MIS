/**
 * core.erp.tmm.service.impl.FSMC0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMC0040Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMC0040ServiceImpl - 불용자산현황 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link FSMC0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMC0040Service")
public class FSMC0040ServiceImpl extends EgovAbstractServiceImpl implements FSMC0040Service {

	/**
	 * 불용자산현황 조회 DAO class inject.
	 */
	@Resource(name = "FSMC0040Dao")
	private FSMC0040Dao dao;

	/**
	 * 불용자산현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 불용자산현황 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
}
