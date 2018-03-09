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
import core.erp.tmm.service.TMMA0080Service;

/**
 * <pre>
 *	TMMA0080ServiceImpl - 우편번호관리
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
@Service("TMMA0080Service")
public class TMMA0080ServiceImpl extends EgovAbstractServiceImpl implements TMMA0080Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0080ServiceImpl.class);

	@Resource(name="TMMA0080Dao")
	private TMMA0080Dao TMMA0080Dao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//return TMMA0080Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_NWPOST", TMMA0080Dao.processSEARCH00(searchVo));
		return returnMap;
	}

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

		List ds = (List) saveData.get("dsTM_NWPOST");	 
		List ds_DELETE = (List) saveData.get("dsTM_NWPOST_DELETE");

		/* 우편번호 코드 삭제 */
        for (int i = 0; i < ds_DELETE.size(); i++) {
			rowVo = (Map) ds_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			logger.info("Delete : "+ rowVo);
			deleteCount += TMMA0080Dao.processDELETE00(rowVo);

		}

        /* 우편번호 코드 추가/수정 */
		for (int i = 0; i < ds.size(); i++) {
			rowVo = (Map) ds.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);			
			
			if (rowType == 1) {
				TMMA0080Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += TMMA0080Dao.processUPDATE00(rowVo);

			}
			
		}
		
		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}	
	
}

