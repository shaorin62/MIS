package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0120Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0120ServiceImpl - 재무제표출력설정  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FAMA0120Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * 2016.07.19	권미영
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0120Service")
public class FAMA0120ServiceImpl extends EgovAbstractServiceImpl implements FAMA0120Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0120ServiceImpl.class);

	@Resource(name = "FAMA0120Dao")
	private FAMA0120Dao fAMA0120Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODLXM", fAMA0120Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODLAC", fAMA0120Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_MODLIM", fAMA0120Dao.processSEARCH02(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXM", fAMA0120Dao.processSEARCH11(searchVo));
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

		List dsTA_MODLXM        = (List) saveData.get("dsTA_MODLXM");       
		List dsTA_MODLAC        = (List) saveData.get("dsTA_MODLAC");       
		List dsTA_MODLIM       	= (List) saveData.get("dsTA_MODLIM");       
		List dsTA_MODLXM_DELETE	= (List) saveData.get("dsTA_MODLXM_DELETE");
		List dsTA_MODLAC_DELETE = (List) saveData.get("dsTA_MODLAC_DELETE");
		List dsTA_MODLIM_DELETE = (List) saveData.get("dsTA_MODLIM_DELETE");	

		//Detail 삭제
		LOGGER.info("kmy==================================");
		LOGGER.info("dsTA_MODLIM_DELETE size : "+ dsTA_MODLIM_DELETE.size());
		LOGGER.info("dsTA_MODLIM_DELETE : "+ dsTA_MODLIM_DELETE);
		for (int i = 0; i < dsTA_MODLIM_DELETE.size(); i++) {
			rowVo = (Map) dsTA_MODLIM_DELETE.get(i);
			
			LOGGER.info("dsTA_MODLIM_DELETE Delete : "+ rowVo);
			
			deleteCount += fAMA0120Dao.processDELETE02(rowVo);

		}
		
		//Detail 삭제
		for (int i = 0; i < dsTA_MODLAC_DELETE.size(); i++) {
			rowVo = (Map) dsTA_MODLAC_DELETE.get(i);
			
			LOGGER.info("dsTA_MODLAC_DELETE Delete : "+ rowVo);
			
			deleteCount += fAMA0120Dao.processDELETE01(rowVo);

		}
		
		//Head 삭제	
		for (int i = 0; i < dsTA_MODLXM_DELETE.size(); i++) {
			rowVo = (Map) dsTA_MODLXM_DELETE.get(i);
			
			LOGGER.info("dsTA_MODLXM_DELETE Delete : "+ rowVo);
			
			deleteCount += fAMA0120Dao.processDELETE00(rowVo);
		}

		//Head 저장
		for (int i = 0; i < dsTA_MODLXM.size(); i++) {
			rowVo = (Map) dsTA_MODLXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			LOGGER.info("dsTA_MODLXM SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				
				fAMA0120Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				updateCount += fAMA0120Dao.processUPDATE00(rowVo);

			}			
		}

		//Detail 저장
		for (int i = 0; i < dsTA_MODLAC.size(); i++) {
			rowVo = (Map) dsTA_MODLAC.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			LOGGER.info("dsTA_MODLAC SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				
				fAMA0120Dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				
				updateCount += fAMA0120Dao.processUPDATE01(rowVo);

			}
		}

		//Detail 저장
		for (int i = 0; i < dsTA_MODLIM.size(); i++) {
			rowVo = (Map) dsTA_MODLIM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			LOGGER.info("dsTA_MODLIM SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				
				fAMA0120Dao.processSAVE02(rowVo);

			} else if (rowType == 2) {
				
				updateCount += fAMA0120Dao.processUPDATE02(rowVo);

			}
		}
		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}

	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		
		fAMA0120Dao.processPROC00(searchVo);

	}
	
}
