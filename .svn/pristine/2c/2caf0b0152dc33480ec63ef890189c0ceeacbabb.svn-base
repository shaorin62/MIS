/**
 * core.erp.tmm.service.impl.FAMA0025ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0025Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("FAMA0025Service")
/**
 * <pre>
 *	FAMA0025ServiceImpl - 코스트센터관리 Service
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 12.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 12.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class FAMA0025ServiceImpl extends EgovAbstractServiceImpl implements FAMA0025Service {

	/**
	 * 코스트센터관리 DAO class inject.
	 */
	@Resource(name = "FAMA0025Dao")
	private FAMA0025Dao fAMA0025Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CSTCXM", fAMA0025Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_CSTCXM     = (List) saveData.get("dsTA_CSTCXM");  
		List dsTA_CSTCXM_Del = (List) saveData.get("dsTA_CSTCXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_CSTCXM_Del.size(); i++) {

        	rowVo = (Map) dsTA_CSTCXM_Del.get(i);
			deleteCount += fAMA0025Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CSTCXM.size(); i++) {

			rowVo = (Map) dsTA_CSTCXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				fAMA0025Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0025Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
