/**
 * core.erp.pay.service.impl.PAYC0280ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0280Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0280ServiceImpl - 항목별조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.01
 * @version	1.0
 * @see		{@link PAYC0280Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.01	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYC0280Service")
public class PAYC0280ServiceImpl extends EgovAbstractServiceImpl implements PAYC0280Service {

	/**
	 * 항목별조회 DAO class inject.
	 */
	@Resource(name = "PAYC0280Dao")
	private PAYC0280Dao dao;

	/**
	 * 급여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH00(Map searchVo) throws Exception {

		Object search00 = dao.processSEARCH00(searchVo);

		List<Map<String, Object>> colList = new ArrayList<Map<String,Object>>();

		for(int i = 0 ; i < DataSetUtil.getRowCount(search00) ; i ++){
			Map<String, Object> data = new HashMap();
			data.put("EXPD_CODE",DataSetUtil.getColumn(search00, i, "EXPD_CODE").toString());
			data.put("EXPD_NAME",DataSetUtil.getColumn(search00, i, "EXPD_NAME").toString());
			//data.put("SORT_ORDR",DataSetUtil.getColumn(search00, i, "SORT_ORDR").toString());
			colList.add(data);

		}

		searchVo.put("PY_ALLDED", colList);

		Map<String, Object> returnMap01 = new HashMap<String, Object>();
		returnMap01.put("dsPY_ALLDED", search00);
		returnMap01.put("dsPY_PMMAST", dao.processSEARCH01(searchVo));
		return returnMap01;



	}

}
