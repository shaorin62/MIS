/**
 * core.erp.pay.service.impl.PAYD0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYD0030Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYD0030ServiceImpl - 예측결과관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이용관
 * @since	2016.11.08
 * @version	1.0
 * @see		{@link PAYD0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.08	이용관		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYD0030Service")
public class PAYD0030ServiceImpl extends EgovAbstractServiceImpl implements PAYD0030Service {

	/**
	 * 예측결과관리 DAO class inject.
	 */
	@Resource(name = "PAYD0030Dao")
	private PAYD0030Dao dao;


	/**
	 * 예측결과 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH00(Map searchVo) throws Exception {
		/*
		Object search00 = dao.processSEARCH00(searchVo);

		List<Map<String, Object>> colList = new ArrayList<Map<String,Object>>();
		String sEXPD_CODE = "";
		for(int i = 0 ; i < DataSetUtil.getRowCount(search00) ; i ++){
			
			if (DataSetUtil.getColumn(search00, i, "EXPD_CODE").toString().equals(sEXPD_CODE)) continue;
			sEXPD_CODE = DataSetUtil.getColumn(search00, i, "EXPD_CODE").toString();
			Map<String, Object> data = new HashMap();
			data.put("EXPD_CODE",DataSetUtil.getColumn(search00, i, "EXPD_CODE").toString());
			data.put("EXPD_NAME",DataSetUtil.getColumn(search00, i, "EXPD_NAME").toString());
			data.put("SORT_ORDR",DataSetUtil.getColumn(search00, i, "SORT_ORDR").toString());
			colList.add(data);

		}

		searchVo.put("PY_ALLDED", colList);
		*/
		
		Map<String, Object> returnMap01 = new HashMap<String, Object>();
		//returnMap01.put("dsPY_ALLDED", search00);
		returnMap01.put("dsPY_SIMUXM", dao.processSEARCH01(searchVo));

		return returnMap01;

    }
}
