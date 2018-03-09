package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0070ServiceImpl - 매입처별계산서합계표조회 서비스 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 4.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 4.	황치웅		Initial Created.
 * 2016. 8. 8.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMC0070Service")
public class TXMC0070ServiceImpl extends EgovAbstractServiceImpl implements TXMC0070Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0070ServiceImpl.class);

	@Resource(name = "TXMC0070Dao")
	private TXMC0070Dao tXMC0070Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", tXMC0070Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT177_H", tXMC0070Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VAT177_H", tXMC0070Dao.processPROC00(searchVo));
		return returnMap;
	}
	
	/**
	 * 영세율매출명세서(헤더)를 저장,수정,삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo 		= null;
		int rowType 	= 0;
		
		List dsTA_VAT177_H     = (List) saveData.get("dsTA_VAT177_H");  
		List dsTA_VAT177_H_Del = (List) saveData.get("dsTA_VAT177_H_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT177_H_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT177_H_Del.get(i);
			deleteCount += tXMC0070Dao.processDELETE00(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT177_H.size(); i++) {
			rowVo 	= (Map) dsTA_VAT177_H.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) {
				tXMC0070Dao.processSAVE00(rowVo);
				
			} 
			
		}
		
		return deleteCount + updateCount;

	}
}
