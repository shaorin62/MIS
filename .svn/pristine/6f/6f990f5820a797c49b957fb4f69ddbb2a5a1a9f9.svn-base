/**
 * core.erp.hrm.service.impl.HRMB0150ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMB0150Service; 
import core.erp.hrm.web.HRMB0150Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	HRMB0150ServiceImpl - 보증보험등록
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 9.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 9.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRMB0150Service")
public class HRMB0150ServiceImpl extends EgovAbstractServiceImpl implements HRMB0150Service {

	/**
	 * 보증보험등록  DAO class inject.
	 */
	@Resource(name = "HRMB0150Dao")
	private HRMB0150Dao hRMB0150Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_GRTINS", hRMB0150Dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 보증보험등록 사원번호를 조회.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", hRMB0150Dao.processSEARCH99(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsHR_GRTINS     = (List) saveData.get("dsHR_GRTINS");  
		List dsHR_GRTINS_Del = (List) saveData.get("dsHR_GRTINS_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_GRTINS_Del.size(); i++) {

        	rowVo = (Map) dsHR_GRTINS_Del.get(i);
			deleteCount += hRMB0150Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_GRTINS.size(); i++) {

			rowVo = (Map) dsHR_GRTINS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				hRMB0150Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += hRMB0150Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
}
