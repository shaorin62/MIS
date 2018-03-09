/**
 * core.erp.hrm.service.impl.HRML0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRML0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRML0030ServiceImpl - 근로(연봉)계약서확인 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이준영
 * @since	2016.09.06
 * @version	1.0
 * @see		{@link HRML0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	이준영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRML0030Service")
public class HRML0030ServiceImpl extends EgovAbstractServiceImpl implements HRML0030Service {

	/**
	 * 근로(연봉)계약서확인 DAO class inject.
	 */
	@Resource(name = "HRML0030Dao")
	private HRML0030Dao dao;

	/**
	 * 근로(연봉)계약서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 근로(연봉)계약서확인 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CNTRXA", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
