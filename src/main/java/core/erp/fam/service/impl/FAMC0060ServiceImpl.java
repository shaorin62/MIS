/**
 * core.erp.tmm.service.impl.FAMC0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMC0060Service; 
import core.erp.fam.service.impl.FAMC0060Dao;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMC0060ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.06.22
 * @version	1.0
 * @see		{@link FAMC0060Service}
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

@Service("FAMC0060Service")
public class FAMC0060ServiceImpl extends EgovAbstractServiceImpl implements FAMC0060Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "FAMC0060Dao")
	private FAMC0060Dao dao;

	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();

		//관리항목으로 조회하지 않을때	
		if (searchVo.containsKey("COND_VACD") == false || searchVo.get("COND_VACD") == null 
				|| searchVo.get("COND_VACD").toString().isEmpty())
		{
			returnMap.put("dsTA_SLIPNT", dao.processSEARCH01(searchVo));
			return returnMap;
		}
		
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH00(searchVo));
		return returnMap;

    }
		
}
