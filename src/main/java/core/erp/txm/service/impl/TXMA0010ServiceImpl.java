package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMA0010ServiceImpl - 조회[부가세]  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link TXMA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * 2016.08.02	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMA0010Service")
public class TXMA0010ServiceImpl extends EgovAbstractServiceImpl implements TXMA0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMA0010ServiceImpl.class);

	@Resource(name = "TXMA0010Dao")
	private TXMA0010Dao dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATXXM", dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATXXD", dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		String sVatxSeon = "";

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */
		
		List ds1 		= (List) saveData.get("dsTA_VATXXM"); 			//List 객체 생성 - 공통 HEAD
		List ds2 		= (List) saveData.get("dsTA_VATXXD"); 			//List 객체 생성 - 공통 DETAILS
		List ds1_DELETE = (List) saveData.get("dsTA_VATXXM_DELETE"); 	//List 객체 생성 - 공통 HEAD
		List ds2_DELETE = (List) saveData.get("dsTA_VATXXD_DELETE"); 	//List 객체 생성 - 공통 DETAILS
		
		//Detail 삭제
        for (int i = 0; i < ds2_DELETE.size(); i++) {
			rowVo = (Map) ds2_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += dao.processDELETE01(rowVo);
			
		}
                
        //Head 삭제	
		for (int i = 0; i < ds1_DELETE.size(); i++) {
			rowVo = (Map) ds1_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += dao.processDELETE00(rowVo);
			
		}

		//Head 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				if ( "".equals(rowVo.get("VATX_SEQN")) ||  rowVo.get("VATX_SEQN") == null ) {
					sVatxSeon = dao.search_VATX_SEQN(rowVo);
					rowVo.put("VATX_SEQN", sVatxSeon);
				}
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += dao.processUPDATE00(rowVo);

			}
			
			sVatxSeon = (String) rowVo.get("VATX_SEQN");
			
		}

		//Detail 저장
		for (int i = 0; i < ds2.size(); i++) {
			rowVo = (Map) ds2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				if ( "".equals(rowVo.get("VATX_SEQN")) ||  rowVo.get("VATX_SEQN") == null ) {
					rowVo.put("VATX_SEQN", sVatxSeon);
				}
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += dao.processUPDATE01(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
}
