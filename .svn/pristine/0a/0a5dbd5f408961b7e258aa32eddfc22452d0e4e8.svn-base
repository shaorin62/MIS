/**
 * core.erp.pay.service.impl.PAYC0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYC0020Service;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYC0020ServiceImpl - 급여명세서 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.01
 * @version	1.0
 * @see		{@link PAYC0020Service}
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

@Service("PAYC0020Service")
public class PAYC0020ServiceImpl extends EgovAbstractServiceImpl implements PAYC0020Service {

	/**
	 * 급여명세서 DAO class inject.
	 */
	@Resource(name = "PAYC0020Dao")
	private PAYC0020Dao dao;

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

	/**
	 * <pre>
	 * 급여 상세 지급 목록을 조회한다.
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
		returnMap.put("dsPY_PMMAST", dao.processSEARCH02(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 급여 수당 지급 목록을 조회한다.
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
		returnMap.put("dsPY_PMDETL_A", dao.processSEARCH03(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 급여 공제 지급 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PMDETL_D", dao.processSEARCH04(searchVo));
		return returnMap;
	}

	/**
	 * <pre>
	 * 급여 공제 기타보상,기타공제,연차 목록을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 공제 기타보상,기타공제,연차 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_INCOME", dao.processSEARCH05(searchVo)); // 기타보상
		returnMap.put("dsPY_ALLDED", dao.processSEARCH06(searchVo)); // 기타공제
		return returnMap;
	}

}
