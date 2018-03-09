/**
 * core.erp.hrm.service.impl.WFMG0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.wfm.service.WFMG0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMG0030ServiceImpl - 연수지원신청 현황 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.21
 * @version	1.0
 * @see		{@link WFMG0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMG0030Service")
public class WFMG0030ServiceImpl extends EgovAbstractServiceImpl implements WFMG0030Service {

	/**
	 * 연수지원신청현황 내역조회 DAO class inject.
	 */
	@Resource(name = "WFMG0030Dao")
	private WFMG0030Dao wFMG0030Dao;
	
	

	/**
	 * 연수지원신청현황 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태신청 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_TRSPXM", wFMG0030Dao.processSEARCH00(searchVo));
		return returnMap;

    }
}
