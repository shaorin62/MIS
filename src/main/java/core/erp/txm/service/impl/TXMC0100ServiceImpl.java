package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0100Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
 
/**
 * <pre>
 *	TXMC0100ServiceImpl - 건물등감가상각자산취득명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0100Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.09	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMC0100Service")
public class TXMC0100ServiceImpl extends EgovAbstractServiceImpl implements TXMC0100Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0100ServiceImpl.class);

	@Resource(name = "TXMC0100Dao")
	private TXMC0100Dao TXMC0100Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0100Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT164_D", TXMC0100Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		TXMC0100Dao.processPROC00(searchVo);
	}

	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception {
		
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VAT164_D     = (List) saveData.get("dsTA_VAT164_D");  
		List dsTA_VAT164_D_Del = (List) saveData.get("dsTA_VAT164_D_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT164_D_Del.size(); i++) {
			rowVo = (Map) dsTA_VAT164_D_Del.get(i);
			deleteCount += TXMC0100Dao.processDELETE00(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT164_D.size(); i++) {
			rowVo = (Map) dsTA_VAT164_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 1 || rowType == 2) {	
				TXMC0100Dao.processSAVE00(rowVo);
				
			}
			
		}
		
		return deleteCount + updateCount;

	}	
	
}
