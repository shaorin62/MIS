/**
 * core.erp.tmm.service.impl.BDMB0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMB0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	BDMB0060ServiceImpl - 추가예산현황 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.07.27
 * @version	1.0
 * @see		{@link BDMB0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("BDMB0060Service")
public class BDMB0060ServiceImpl extends EgovAbstractServiceImpl implements BDMB0060Service {

	/**
	 * 추가예산현황 관리 DAO class inject.
	 */
	@Resource(name = "BDMB0060Dao")
	private BDMB0060Dao dao;

	/**
	 * 추가예산현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 추가예산현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLADD", dao.processSEARCH00(searchVo));
		return returnMap;

    }
}
