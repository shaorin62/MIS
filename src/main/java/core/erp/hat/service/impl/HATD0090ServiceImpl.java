/**
 * core.erp.hrm.service.impl.HATD0090ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hat.service.HATD0090Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATD0090ServiceImpl - 월별연차현황 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김칠석
 * @since	2016.09.09
 * @version	1.0
 * @see		{@link HATD0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	김칠석		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATD0090Service")
public class HATD0090ServiceImpl extends EgovAbstractServiceImpl implements HATD0090Service {

	/**
	 * 월별연차현황 DAO class inject.
	 */
	@Resource(name = "HATD0090Dao")
	private HATD0090Dao dao;

	/**
	 * 월별연차현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 자격사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
