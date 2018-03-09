/**
 * core.erp.pay.service.impl.PAYC0260ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0260Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0260ServiceImpl - 개인별조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link PAYC0260Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYC0260Service")
public class PAYC0260ServiceImpl extends EgovAbstractServiceImpl implements PAYC0260Service {

	/**
	 * 개인별조회 DAO class inject.
	 */
	@Resource(name = "PAYC0260Dao")
	private PAYC0260Dao dao;

	/**
	 * <pre>
	 * 급여 목록(헤더)을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
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

	/**
	 * <pre>
	 * 급여 목록(소급내역)을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMMAST2", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	/**
	 * <pre>
	 * 급여 목록(소급항목)을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL", dao.processSEARCH03(searchVo));
		return returnMap;

    }
}
