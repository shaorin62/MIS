package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0990Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMA0990ServiceImpl - 수출실적명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMA0990Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.03	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMA0990Service")
public class TXMA0990ServiceImpl extends EgovAbstractServiceImpl implements TXMA0990Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMA0990ServiceImpl.class);

	@Resource(name = "TXMA0990Dao")
	private TXMA0990Dao tXMA0990Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATCDH", tXMA0990Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATCDD", tXMA0990Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List ds1 		= (List) saveData.get("dsTA_VATCDH"); 			//List 객체 생성 - 공통 HEAD
		List ds2 		= (List) saveData.get("dsTA_VATCDD"); 			//List 객체 생성 - 공통 DETAILS
		List ds1_DELETE = (List) saveData.get("dsTA_VATCDH_DELETE"); 	//List 객체 생성 - 공통 HEAD
		List ds2_DELETE = (List) saveData.get("dsTA_VATCDD_DELETE"); 	//List 객체 생성 - 공통 DETAILS

		//Detail 삭제
        for (int i = 0; i < ds2_DELETE.size(); i++) {
			rowVo = (Map) ds2_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += tXMA0990Dao.processDELETE01(rowVo);
			
		}
                
        //Head 삭제	
		for (int i = 0; i < ds1_DELETE.size(); i++) {
			rowVo = (Map) ds1_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += tXMA0990Dao.processDELETE00(rowVo);
			
		}

		//Head 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				tXMA0990Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += tXMA0990Dao.processUPDATE00(rowVo);

			}			
			
		}

		//Detail 저장
		for (int i = 0; i < ds2.size(); i++) {
			rowVo = (Map) ds2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				tXMA0990Dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += tXMA0990Dao.processUPDATE01(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}	
	
}
