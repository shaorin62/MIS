/**
 * core.erp.hrm.service.impl.HRMD0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMD0040Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMD0040ServiceImpl - 인원현황(직급별/부서별) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.04
 * @version	1.0
 * @see		{@link HRMD0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.04	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRMD0040Service")
public class HRMD0040ServiceImpl extends EgovAbstractServiceImpl implements HRMD0040Service {

	/**
	 * 인원현황(직급별/부서별) DAO class inject.
	 */
	@Resource(name = "HRMD0040Dao")
	private HRMD0040Dao dao;

	/**
	 * 인사기타정보 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 인사기타정보 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH00(Map searchVo) throws Exception {

		Object search00 = dao.processSEARCH00(searchVo);

		List<Map<String, Object>> colList = new ArrayList<Map<String,Object>>();

		for(int i = 0 ; i < DataSetUtil.getRowCount(search00) ; i ++){
			Map<String, Object> data = new HashMap();
			data.put("OPOS_CODE",DataSetUtil.getColumn(search00, i, "OPOS_CODE").toString());
			data.put("OPOS_NAME",DataSetUtil.getColumn(search00, i, "OPOS_NAME").toString());
			data.put("SORT_ORDR",DataSetUtil.getColumn(search00, i, "SORT_ORDR").toString());
			colList.add(data);

		}

		searchVo.put("TM_CODEXD", colList);

		Map<String, Object> returnMap01 = new HashMap<String, Object>();
		returnMap01.put("dsTM_CODEXD", search00);
		returnMap01.put("dsHR_MASTXD", dao.processSEARCH01(searchVo));
		return returnMap01;

    }

}
