package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0100Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0100ServiceImpl - 조회[환율관리]  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FAMA0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0100Service")
public class FAMA0100ServiceImpl extends EgovAbstractServiceImpl implements FAMA0100Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0100ServiceImpl.class);

	@Resource(name = "FAMA0100Dao")
	private FAMA0100Dao fAMA0100Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_EXRTXM", fAMA0100Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_EXRTXM = (List) saveData.get("dsTA_EXRTXM");
		List dsTA_EXRTXM_Del = (List) saveData.get("dsTA_EXRTXM_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_EXRTXM_Del.size(); i++) {

			rowVo = (Map) dsTA_EXRTXM_Del.get(i);
			deleteCount += fAMA0100Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_EXRTXM.size(); i++) {

			rowVo = (Map) dsTA_EXRTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAMA0100Dao.processSAVE00(rowVo);
				
				//fAMA0100Dao.processGET_EXCHANGE_RATE(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0100Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
	@SuppressWarnings("rawtypes")
	public int processGET_EXCHANGE_RATE(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_EXRTXM = (List) saveData.get("dsTA_EXRTXM");
		
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_EXRTXM.size(); i++) {

			rowVo = (Map) dsTA_EXRTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAMA0100Dao.processGET_EXCHANGE_RATE(rowVo);
				
			} 
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
