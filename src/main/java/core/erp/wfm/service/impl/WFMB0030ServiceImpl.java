/**
 * core.erp.wfm.service.impl.WFMB0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMB0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMB0020ServiceImpl - 학자금신청 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.22
 * @version	1.0
 * @see		{@link WFMB0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.22	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMB0030Service")
public class WFMB0030ServiceImpl extends EgovAbstractServiceImpl implements WFMB0030Service {

	/**
	 * 학자금신청 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMB0030Dao")
	private WFMB0030Dao dao;

	/**
	 * 학자금신청 현황을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 학자금신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsWF_SCEXXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
