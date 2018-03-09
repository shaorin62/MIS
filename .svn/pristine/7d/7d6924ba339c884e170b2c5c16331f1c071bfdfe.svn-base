/**
 * core.erp.mcm.service.impl.MCMA0070P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mcm.service.MCMA0070P01Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MCMA0070P01ServiceImpl - 카테고리조회팝업(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.27
 * @version	1.0
 * @see		{@link MCMA0070P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MCMA0070P01Service")
public class MCMA0070P01ServiceImpl extends EgovAbstractServiceImpl implements MCMA0070P01Service {

	/**
	 * 카테고리조회팝업(신규) DAO class inject.
	 */
	@Resource(name = "MCMA0070P01Dao")
	private MCMA0070P01Dao dao;

	/**
	 * 카테고리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 카테고리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_CATEXM", dao.processSEARCH00(searchVo));
		
		return returnMap;

    }
}
