package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAME0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAME0030ServiceImpl - 최초미결전표등록  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FAME0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAME0030Service")
public class FAME0030ServiceImpl extends EgovAbstractServiceImpl implements FAME0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAME0030ServiceImpl.class);

	@Resource(name = "FAME0030Dao")
	private FAME0030Dao fAME0030Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT_BASE", fAME0030Dao.processSEARCH00(searchVo));
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

		List dsTA_SLIPNT_BASE = (List) saveData.get("dsTA_SLIPNT_BASE");
		List dsTA_SLIPNT_BASE_Del = (List) saveData.get("dsTA_SLIPNT_BASE_DELETE");
		
		
		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_SLIPNT_BASE_Del.size(); i++) {

			rowVo = (Map) dsTA_SLIPNT_BASE_Del.get(i);
			deleteCount += fAME0030Dao.processDELETE00(rowVo);

		}
	
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_SLIPNT_BASE.size(); i++) {

			rowVo = (Map) dsTA_SLIPNT_BASE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAME0030Dao.processSAVE00(rowVo);

			} 
			
			else if (rowType == 2) {

				updateCount += fAME0030Dao.processUPDATE00(rowVo);

			}
			
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);


		return deleteCount + updateCount;
	}
	
}
