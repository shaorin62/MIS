/**
 * core.erp.pay.service.impl.PAYC0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0060Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0060ServiceImpl - 보험료/세액납부현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.13
 * @version	1.0
 * @see		{@link PAYC0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYC0060Service")
public class PAYC0060ServiceImpl extends EgovAbstractServiceImpl implements PAYC0060Service {

	/**
	 * 보험료/세액납부현황 DAO class inject.
	 */
	@Resource(name = "PAYC0060Dao")
	private PAYC0060Dao dao;

	/**
	 * 급여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
