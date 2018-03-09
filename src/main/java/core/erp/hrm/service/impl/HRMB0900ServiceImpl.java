/**
 * core.erp.hrm.service.impl.HRMB0900ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMB0900Service;
import core.erp.hrm.web.HRMB0900Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	HRMB0900ServiceImpl - 퇴직자이직관리 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 10.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 10.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRMB0900Service")
public class HRMB0900ServiceImpl extends EgovAbstractServiceImpl implements HRMB0900Service {

	private static final Logger logger = LoggerFactory.getLogger(HRMB0900ServiceImpl.class);
	/**
	 * 퇴직자이직관리  DAO class inject.
	 */
	@Resource(name = "HRMB0900Dao")
	private HRMB0900Dao hRMB0900Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_RECOJB", hRMB0900Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsHR_RECOJB     = (List) saveData.get("dsHR_RECOJB");  
		List dsHR_RECOJB_Del = (List) saveData.get("dsHR_RECOJB_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_RECOJB_Del.size(); i++) {

        	rowVo = (Map) dsHR_RECOJB_Del.get(i);
			deleteCount += hRMB0900Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_RECOJB.size(); i++) {

			rowVo = (Map) dsHR_RECOJB.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				hRMB0900Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += hRMB0900Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
