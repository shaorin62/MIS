/**
 * core.erp.tmm.service.impl.FAMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("FAMA0020Service")
/**
 * <pre>
 *	FAMA0020ServiceImpl - 코스트센터그룹관리 Service
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
public class FAMA0020ServiceImpl extends EgovAbstractServiceImpl implements FAMA0020Service {

	/**
	 * 코스트센터그룹관리 DAO class inject.
	 */
	@Resource(name = "FAMA0020Dao")
	private FAMA0020Dao fAMA0020Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CSTGXM", fAMA0020Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_CSTGXM     = (List) saveData.get("dsTA_CSTGXM");  
		List dsTA_CSTGXM_Del = (List) saveData.get("dsTA_CSTGXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_CSTGXM_Del.size(); i++) {

        	rowVo = (Map) dsTA_CSTGXM_Del.get(i);
			deleteCount += fAMA0020Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CSTGXM.size(); i++) {

			rowVo = (Map) dsTA_CSTGXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				fAMA0020Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0020Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
}
