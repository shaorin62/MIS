/**
 * core.erp.tmm.service.impl.FAMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.edm.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.edm.service.EDMB0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	EDMA0070ServiceImpl - 사원별교육현황 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.19
 * @version	1.0
 * @see		{@link EDMB0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("EDMB0070Service") 
public class EDMB0070ServiceImpl extends EgovAbstractServiceImpl implements EDMB0070Service {

	/**
	 * 교육이수결과관리 DAO class inject.
	 */
	@Resource(name = "EDMB0070Dao")
	private EDMB0070Dao eDMB0070Dao;

	/**
	 * 교육이수결과관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsED_EDRSLT", eDMB0070Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
