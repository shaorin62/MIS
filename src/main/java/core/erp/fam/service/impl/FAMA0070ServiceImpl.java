package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0070ServiceImpl - 관리코드등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.23
 * @version	1.0
 * @see		{@link FAMA0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.23	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0070Service")
public class FAMA0070ServiceImpl extends EgovAbstractServiceImpl implements FAMA0070Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0070ServiceImpl.class);

	@Resource(name = "FAMA0070Dao")
	private FAMA0070Dao fAMA0070Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXH", fAMA0070Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXD", fAMA0070Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

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

		List ds1         = (List) saveData.get("dsTM_CODEXH");            //List 객체 생성 - 공통 HEAD
		List ds2         = (List) saveData.get("dsTM_CODEXD");            //List 객체 생성 - 공통 DETAILS
		List ds1_DELETE         = (List) saveData.get("dsTM_CODEXH_DELETE");            //List 객체 생성 - 공통 HEAD
		List ds2_DELETE         = (List) saveData.get("dsTM_CODEXD_DELETE");            //List 객체 생성 - 공통 DETAILS		
		
	  //Detail 삭제
       for (int i = 0; i < ds2_DELETE.size(); i++) {
			rowVo = (Map) ds2_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
       	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += fAMA0070Dao.processDELETE01(rowVo);
			
		}
               
       //Head 삭제	
		for (int i = 0; i < ds1_DELETE.size(); i++) {
			rowVo = (Map) ds1_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
       	
			LOGGER.info("Delete : "+ rowVo);
			deleteCount += fAMA0070Dao.processDELETE00(rowVo);
		}

       //Head 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				fAMA0070Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += fAMA0070Dao.processUPDATE00(rowVo);

			}			
		}
		
		//Detail 저장
		for (int i = 0; i < ds2.size(); i++) {
			rowVo = (Map) ds2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);
			
			if (rowType == 1) {
				fAMA0070Dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += fAMA0070Dao.processUPDATE01(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
