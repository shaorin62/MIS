/**
 * core.erp.hrm.service.impl.HRML0030P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRML0030P01Service; 
import core.erp.hrm.web.HRML0030P01Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




/**
 * <pre>
 *	HRML0030P01ServiceImpl - 연봉계약서확인
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	문석기
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 9. 6.	문석기				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("HRML0030P01Service")
public class HRML0030P01ServiceImpl extends EgovAbstractServiceImpl implements HRML0030P01Service {

	/**
	 * 연봉계약서확인  DAO class inject.
	 */
	@Resource(name = "HRML0030P01Dao")
	private HRML0030P01Dao HRML0030P01Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_CNTRXA", HRML0030P01Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;

		List dsPY_REGSAL     = (List) saveData.get("dsPY_REGSAL");  

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_REGSAL.size(); i++) {

			rowVo = (Map) dsPY_REGSAL.get(i);

			HRML0030P01Dao.processSAVE00(rowVo);
			
			iTotCnt++;
			
		}
		
		return iTotCnt;
	}
}
