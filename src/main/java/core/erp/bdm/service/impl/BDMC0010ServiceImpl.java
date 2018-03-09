/**
 * core.erp.tmm.service.impl.BDMC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.bdm.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.bdm.service.BDMC0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	BDMC0010ServiceImpl - 부서별예산현황 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link BDMC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("BDMC0010Service")
public class BDMC0010ServiceImpl extends EgovAbstractServiceImpl implements BDMC0010Service {

	/**
	 * 부서별예산현황 관리 DAO class inject.
	 */
	@Resource(name = "BDMC0010Dao")
	private BDMC0010Dao dao;

	/**
	 * 부서별예산현황 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 부서별예산현황  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTB_CPLDPT", dao.processSEARCH00(searchVo));
		return returnMap;

    }
}
