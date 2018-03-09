/**
 * core.erp.hat.service.impl.HATF0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.hat.service.HATF0010Service; 
import core.erp.hat.web.HATF0010Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0010ServiceImpl - 출장기준등록 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박정윤
 * @since	2016.07.11
 * @version	1.0
 * @see		{@link HATF0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	박정윤		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright NDS.(C) All right reserved.
 */

@Service("HATF0010Service")
public class HATF0010ServiceImpl extends EgovAbstractServiceImpl implements HATF0010Service {

	/**
	 * 출장기준등록  DAO class inject.
	 */
	@Resource(name = "HATF0010Dao")
	private HATF0010Dao hATF0010Dao;

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_DAYEXM", hATF0010Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_DAYEXM     = (List) saveData.get("dsTA_DAYEXM");  
		List dsTA_DAYEXM_Del = (List) saveData.get("dsTA_DAYEXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_DAYEXM_Del.size(); i++) {

        	rowVo = (Map) dsTA_DAYEXM_Del.get(i);
			deleteCount += hATF0010Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_DAYEXM.size(); i++) {

			rowVo = (Map) dsTA_DAYEXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				hATF0010Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += hATF0010Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ROOMXM", hATF0010Dao.processSEARCH02(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_ROOMXM     = (List) saveData.get("dsTA_ROOMXM");  
		List dsTA_ROOMXM_Del = (List) saveData.get("dsTA_ROOMXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_ROOMXM_Del.size(); i++) {

        	rowVo = (Map) dsTA_ROOMXM_Del.get(i);
			deleteCount += hATF0010Dao.processDELETE02(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_ROOMXM.size(); i++) {

			rowVo = (Map) dsTA_ROOMXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				hATF0010Dao.processSAVE02(rowVo);

			} else if (rowType == 2) {

				updateCount += hATF0010Dao.processUPDATE02(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_GASBXM", hATF0010Dao.processSEARCH03(searchVo));
		return returnMap;

    }

	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTA_GASBXM     = (List) saveData.get("dsTA_GASBXM");  
		List dsTA_GASBXM_Del = (List) saveData.get("dsTA_GASBXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_GASBXM_Del.size(); i++) {

        	rowVo = (Map) dsTA_GASBXM_Del.get(i);
			deleteCount += hATF0010Dao.processDELETE03(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_GASBXM.size(); i++) {

			rowVo = (Map) dsTA_GASBXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				hATF0010Dao.processSAVE03(rowVo);

			} else if (rowType == 2) {

				updateCount += hATF0010Dao.processUPDATE03(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

}
