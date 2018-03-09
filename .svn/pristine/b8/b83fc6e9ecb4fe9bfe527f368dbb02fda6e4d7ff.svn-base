/**
 * core.erp.pay.service.impl.PAYJ0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYJ0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYJ0010ServiceImpl - 월말인원실적 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link PAYJ0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYJ0010Service")
public class PAYJ0010ServiceImpl extends EgovAbstractServiceImpl implements PAYJ0010Service {

	/**
	 * 월말인원실적 DAO class inject.
	 */
	@Resource(name = "PAYJ0010Dao")
	private PAYJ0010Dao dao;

	/**
	 * 월말인원 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 월말인원 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPMTE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
