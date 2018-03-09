/**
 * core.erp.mrp.service.impl.MRPA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mrp.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;



import core.erp.mrp.service.MRPA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MRPA0020ServiceImpl - 가상간접광고리포트  서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.25
 * @version	1.0
 * @see		{@link MRPA0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MRPA0020Service")
public class MRPA0020ServiceImpl extends EgovAbstractServiceImpl implements MRPA0020Service {

	/**
	 * 가상간접광고리포트 DAO class inject.
	 */
	@Resource(name = "MRPA0020Dao")
	private MRPA0020Dao dao;

	/**
	 * 세금계산서가 발행된 전파,CATV 간접광고 목록 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 세금계산서가 발행된 전파,CATV 간접광고 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_REPOXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 광고주목록 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 광고주목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH01(searchVo));
		return returnMap;

    }
}
