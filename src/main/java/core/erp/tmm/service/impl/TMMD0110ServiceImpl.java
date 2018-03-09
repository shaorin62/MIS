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
import core.erp.tmm.service.TMMD0110Service;

/**
 * <pre>
 *	TMMD0110ServiceImpl - Meta 용어관리
 * <p><b>NOTE : Meta 용어관리</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMD0110Service")
public class TMMD0110ServiceImpl extends EgovAbstractServiceImpl implements TMMD0110Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0110ServiceImpl.class);

	@Resource(name="TMMD0110Dao")
	private TMMD0110Dao TMMD0110Dao;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMD0110Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_METAXM", TMMD0110Dao.processSEARCH00(searchVo));
		return returnMap;
    }

    /**
    *
    * @param voList - 등록할 정보가 담긴 SampleVO
    * @exception Exception
    */
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

		List dsTM_METAXM = (List) saveData.get("dsTM_METAXM");
		List dsTM_METAXM_DELETE = (List) saveData.get("dsTM_METAXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_METAXM_DELETE.size(); i++) {
			rowVo = (Map) dsTM_METAXM_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			logger.info("Delete : "+ rowVo);
			deleteCount += TMMD0110Dao.processDELETE00(rowVo);
			
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_METAXM.size(); i++) {
			rowVo = (Map) dsTM_METAXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);
        	
			if (rowType == 1) {
				TMMD0110Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += TMMD0110Dao.processUPDATE00(rowVo);

			}

		}

		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}	
}
