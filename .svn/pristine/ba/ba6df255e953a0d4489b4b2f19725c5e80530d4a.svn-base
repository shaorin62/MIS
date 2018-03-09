package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;											
import java.util.Iterator;										
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.tmm.service.TMMA0050Service;
import core.ifw.cmm.request.CoreRequest;

/**
 * <pre>
 *	TMMA0050ServiceImpl -팝업관리 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMA0050Service")
public class TMMA0050ServiceImpl extends EgovAbstractServiceImpl implements TMMA0050Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0050ServiceImpl.class);

	@Resource(name="TMMA0050Dao")
	private TMMA0050Dao TMMA0050Dao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//before
		//return TMMA0050Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_POPUPH", TMMA0050Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	//public int processSAVE00(Map saveData) throws Exception{
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		 /**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */

		List ds          = (List) saveData.get("dsTM_POPUPH");            //List 객체 생성
		List ds_DELETE          = (List) saveData.get("dsTM_POPUPH_DELETE");            //List 객체 생성
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < ds_DELETE.size(); i++) {
			rowVo = (Map) ds_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			logger.info("Delete : "+ rowVo);
			deleteCount += TMMA0050Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < ds.size(); i++) {
			rowVo = (Map) ds.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				TMMA0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += TMMA0050Dao.processUPDATE00(rowVo);

			}

			
		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}	
}
