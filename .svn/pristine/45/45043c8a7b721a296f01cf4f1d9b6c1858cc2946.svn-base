/**
 * core.erp.pay.service.impl.PAYB0180ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0180Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0180ServiceImpl - 급여처리LOG관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2017.01.09
 * @version	1.0
 * @see		{@link PAYB0180Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017.01.09	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0180Service")
public class PAYB0180ServiceImpl extends EgovAbstractServiceImpl implements PAYB0180Service {

	/**
	 * 급여처리LOG관리 DAO class inject.
	 */
	@Resource(name = "PAYB0180Dao")
	private PAYB0180Dao pAYB0180Dao;
	
	/**
	 * 급여처리LOG 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여처리LOG 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDLOG", pAYB0180Dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
