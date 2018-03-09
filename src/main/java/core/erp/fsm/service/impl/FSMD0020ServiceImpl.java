/**
 * core.erp.tmm.service.impl.FSMD0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMD0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMD0020ServiceImpl - 감가상각집계표(2015) 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMD0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMD0020Service")
public class FSMD0020ServiceImpl extends EgovAbstractServiceImpl implements FSMD0020Service {

	/**
	 * 감가상각집계표(2015) 조회 DAO class inject.
	 */
	@Resource(name = "FSMD0020Dao")
	private FSMD0020Dao dao;

	/**
	 * 감가상각집계표(2015)을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 감가상각집계표(2015) 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_DPCTXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
}
