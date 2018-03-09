/**
 * core.erp.mdm.service.impl.MDMC0010P02ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.mdm.service.MDMC0010P02Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	MDMC0010P02ServiceImpl - 신문사이즈조회팝업(신규) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.13
 * @version	1.0
 * @see		{@link MDMC0010P02Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MDMC0010P02Service")
public class MDMC0010P02ServiceImpl extends EgovAbstractServiceImpl implements MDMC0010P02Service {

	/**
	 * 신문사이즈조회팝업(신규) DAO class inject.
	 */
	@Resource(name = "MDMC0010P02Dao")
	private MDMC0010P02Dao dao;

	/**
	 * 신문사이즈 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 신문사이즈 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_NPAPXM", dao.processSEARCH00(searchVo));
		
		return returnMap;

    }
}
