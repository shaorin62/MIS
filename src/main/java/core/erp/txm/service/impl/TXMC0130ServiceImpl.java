package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0130Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0130ServiceImpl - 대손세액공제(변제)신고서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0130Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.10	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMC0130Service")
public class TXMC0130ServiceImpl extends EgovAbstractServiceImpl implements TXMC0130Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0130ServiceImpl.class);

	@Resource(name = "TXMC0130Dao")
	private TXMC0130Dao TXMC0130Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT120_H", TXMC0130Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT120_D", TXMC0130Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT120_H", TXMC0130Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	
	
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;
		int updateCount = 0;
		int deleteCount = 0;
		
		List dsTA_VAT120_H     = (List) saveData.get("dsTA_VAT120_H");  
		List dsTA_VAT120_H_Del = (List) saveData.get("dsTA_VAT120_H_DELETE");	
		List dsTA_VAT120_D     = (List) saveData.get("dsTA_VAT120_D");  
		List dsTA_VAT120_D_Del = (List) saveData.get("dsTA_VAT120_D_DELETE");					

		//1. 부동산임대공급가액명세서(세부) 삭제		
		for (int i = 0; i < dsTA_VAT120_D_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT120_D_Del.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

	    	TXMC0130Dao.processDELETE01(rowVo);
	    	
	    	deleteCount++;
			
		}
		
		//2. 부동산임대공급가액명세서(헤더) 삭제		
		for (int i = 0; i < dsTA_VAT120_H_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT120_H_Del.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

	    	TXMC0130Dao.processDELETE02(rowVo);
	    	TXMC0130Dao.processDELETE00(rowVo);
	    	
	    	deleteCount++;
			
		}
		
		//3. 부동산임대공급가액명세서(헤더) 데이터 저장, 수정		
		for (int i = 0; i < dsTA_VAT120_H.size(); i++) {
			rowVo = (Map) dsTA_VAT120_H.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if ( rowType == 1){
				TXMC0130Dao.processSAVE00(rowVo);
			} else if ( rowType == 2){
				TXMC0130Dao.processUPDATE00(rowVo);
			}
	    	updateCount++;
			
		}
		
		//4. 부동산임대공급가액명세서(세부) 데이터 저장, 수정		
		for (int i = 0; i < dsTA_VAT120_D.size(); i++) {
			rowVo = (Map) dsTA_VAT120_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if ( rowType == 1){
				TXMC0130Dao.processSAVE01(rowVo);
			} else if ( rowType == 2){
				TXMC0130Dao.processUPDATE01(rowVo);
			}
	    	
	    	updateCount++;
			
		}		
		
		return updateCount + deleteCount;

	}	
	
}
