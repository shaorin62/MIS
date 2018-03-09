/**
 * core.erp.mdm.service.impl.MDMB0010P02ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.HashMap; 
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mdm.service.MDMB0010P02Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMB0010P02ServiceImpl - 브랜드조회팝업(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.12
 * @version	1.0
 * @see		{@link MDMB0010P02Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.12	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMB0010P02Service")
public class MDMB0010P02ServiceImpl extends EgovAbstractServiceImpl implements MDMB0010P02Service {

	/**
	 * 브랜드조회팝업(신규) DAO class inject.
	 */
	@Resource(name = "MDMB0010P02Dao")
	private MDMB0010P02Dao dao;

	/**
	 * 브랜드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 브랜드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_BRNDXM", dao.processSEARCH00(searchVo));
		
		return returnMap;

    }
}
