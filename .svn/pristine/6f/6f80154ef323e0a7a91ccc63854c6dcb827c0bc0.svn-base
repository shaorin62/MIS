package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.txm.service.TXMC0140Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0140ServiceImpl - 대손세액공제(변제)신고서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0140Service}
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

@Service("TXMC0140Service")
public class TXMC0140ServiceImpl extends EgovAbstractServiceImpl implements TXMC0140Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0140ServiceImpl.class);

	@Resource(name = "TXMC0140Dao")
	private TXMC0140Dao TXMC0140Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0140Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT112_D", TXMC0140Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0140Dao.processSEARCH00(searchVo));
		searchVo.put("BDR_TYPECD","1");
		searchVo.put("PAGE_GB","1");
		returnMap.put("dsTA_VAT112_D1", TXMC0140Dao.processSEARCH02(searchVo));
		searchVo.put("BDR_TYPECD","2");
		returnMap.put("dsTA_VAT112_D2", TXMC0140Dao.processSEARCH02(searchVo));
		searchVo.put("BDR_TYPECD","1");
		searchVo.put("PAGE_GB","2");
		returnMap.put("dsTA_VAT112_D3", TXMC0140Dao.processSEARCH02(searchVo));
		searchVo.put("BDR_TYPECD","2");
		returnMap.put("dsTA_VAT112_D4", TXMC0140Dao.processSEARCH02(searchVo));
		System.out.println(((DataSet)returnMap.get("dsTA_VAT112_D3")).saveXml());
		System.out.println(((DataSet)returnMap.get("dsTA_VAT112_D4")).saveXml());
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0140Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT112_D", TXMC0140Dao.processPROC00(searchVo));
		
		return returnMap;
	}
	
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;
		int updateCount = 0;
		
		List ds = (List) saveData.get("dsTA_VAT112_D");		


		for (int i = 0; i < ds.size(); i++) {
			rowVo = (Map) ds.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			TXMC0140Dao.processDELETE00(rowVo);
			TXMC0140Dao.processSAVE00(rowVo);
			
			updateCount++;
			
		}
		
		return updateCount;

	}	
	
}
