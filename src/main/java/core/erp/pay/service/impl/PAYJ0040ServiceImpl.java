/**
 * core.erp.pay.service.impl.PAYJ0040ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.pay.service.PAYJ0040Service; 
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYJ0040ServiceImpl - 사원별인건비실적 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.02
 * @version	1.0
 * @see		{@link PAYJ0040Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYJ0040Service")
public class PAYJ0040ServiceImpl extends EgovAbstractServiceImpl implements PAYJ0040Service {

	/**
	 * 사원별인건비실적 DAO class inject.
	 */
	@Resource(name = "PAYJ0040Dao")
	private PAYJ0040Dao dao;

	/**
	 * 급여 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALLDED", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 수당공제코드 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 수당공제코드 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		

		Object search00 = (DataSet) dao.processSEARCH00(searchVo);	  
		
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
		returnMap01.put("dsPY_PMMAST", dao.processSEARCH01(searchVo));
		return returnMap01;		
		 

    }

}
