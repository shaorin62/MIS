package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0110Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0110ServiceImpl - 공제받지못할매입세액명세서 서비스 클래스
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
 * 2016. 8. 9.	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMC0110Service")
public class TXMC0110ServiceImpl extends EgovAbstractServiceImpl implements TXMC0110Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0110ServiceImpl.class);

	@Resource(name = "TXMC0110Dao")
	private TXMC0110Dao tXMC0110Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", tXMC0110Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT153_H", tXMC0110Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT153_D", tXMC0110Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_VAT153_D1", tXMC0110Dao.processSEARCH03(searchVo));
		returnMap.put("dsTA_VAT153_D2", tXMC0110Dao.processSEARCH04(searchVo));
		returnMap.put("dsTA_VAT153_D3", tXMC0110Dao.processSEARCH05(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", tXMC0110Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT153_D", tXMC0110Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_VAT153_D1", tXMC0110Dao.processSEARCH03(searchVo));
		returnMap.put("dsTA_VAT153_D2", tXMC0110Dao.processSEARCH04(searchVo));
		returnMap.put("dsTA_VAT153_D3", tXMC0110Dao.processSEARCH05(searchVo));
		return returnMap;
	}
	
	/**
	 * 영세율매출명세서(헤더)를 저장,수정,삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		tXMC0110Dao.processPROC00(searchVo);
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
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VAT153_H     = (List) saveData.get("dsTA_VAT153_H");  
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT153_H.size(); i++) {
			rowVo 	= (Map) dsTA_VAT153_H.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			tXMC0110Dao.processSAVE00(rowVo);
			
		}
		
		List dsTA_VAT153_D     = (List) saveData.get("dsTA_VAT153_D");
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT153_D.size(); i++) {
			rowVo 	= (Map) dsTA_VAT153_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) {	
				tXMC0110Dao.processSAVE01(rowVo);
				
			}
			
		}
		
		List dsTA_VAT153_D1     = (List) saveData.get("dsTA_VAT153_D1");  
		List dsTA_VAT153_D1_Del = (List) saveData.get("dsTA_VAT153_D1_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT153_D1_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT153_D1_Del.get(i);
			deleteCount += tXMC0110Dao.processDELETE02(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT153_D1.size(); i++) {
			rowVo 	= (Map) dsTA_VAT153_D1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) {	
				tXMC0110Dao.processSAVE02(rowVo);
				
			}
			
		}
		
		List dsTA_VAT153_D2     = (List) saveData.get("dsTA_VAT153_D2");  
		List dsTA_VAT153_D2_Del = (List) saveData.get("dsTA_VAT153_D2_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT153_D2_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT153_D2_Del.get(i);
			deleteCount += tXMC0110Dao.processDELETE03(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT153_D2.size(); i++) {
			rowVo 	= (Map) dsTA_VAT153_D2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) {	
				tXMC0110Dao.processSAVE03(rowVo);
				
			}
			
		}
		
		List dsTA_VAT153_D3     = (List) saveData.get("dsTA_VAT153_D3");  
		List dsTA_VAT153_D3_Del = (List) saveData.get("dsTA_VAT153_D3_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT153_D3_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT153_D3_Del.get(i);
			deleteCount += tXMC0110Dao.processDELETE04(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT153_D3.size(); i++) {
			rowVo 	= (Map) dsTA_VAT153_D3.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1) {	
				tXMC0110Dao.processSAVE04(rowVo);
				
			}
			
		}
		
		return deleteCount + updateCount;
		
	}
	
	
}
