/**
 * core.erp.tmm.service.impl.TMMB0130ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMB0130Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMB0130ServiceImpl - 권한변경이력조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.08.18
 * @version	1.0
 * @see		{@link TMMB0130Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.18	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMB0130Service")
public class TMMB0130ServiceImpl extends EgovAbstractServiceImpl implements TMMB0130Service {

	/**
	 * 권한변경이력조회 DAO class inject.
	 */
	@Resource(name = "TMMB0130Dao")
	private TMMB0130Dao dao;

	/**
	 * 그룹별사용자권한이력 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 그룹별사용자권한이력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_GROUPH", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
