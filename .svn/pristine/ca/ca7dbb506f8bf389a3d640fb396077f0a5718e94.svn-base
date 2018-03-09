package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0120Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0120ServiceImpl - 건물등감가상각자산취득명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0120Service}
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

@Service("TXMC0120Service")
public class TXMC0120ServiceImpl extends EgovAbstractServiceImpl implements TXMC0120Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0120ServiceImpl.class);

	@Resource(name = "TXMC0120Dao")
	private TXMC0120Dao TXMC0120Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0120Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT166_H", TXMC0120Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT166_D", TXMC0120Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0120Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT166_H", TXMC0120Dao.processPROC00(searchVo));
		returnMap.put("dsTA_VAT166_D", TXMC0120Dao.processPROC01(searchVo));
		
		return returnMap;
	}
	
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;
		int updateCount = 0;
		
		List ds 		= (List) saveData.get("dsTA_VAT166_H"); 			//List 객체 생성 - 공통 HEAD
		List ds1 		= (List) saveData.get("dsTA_VAT166_D"); 			//List 객체 생성 - 공통 HEAD		


		//사업자단위과세별부가세과세표준및납부세액(헤더) 저장
		for (int i = 0; i < ds.size(); i++) {
			rowVo = (Map) ds.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			TXMC0120Dao.processSAVE00(rowVo);
			
			updateCount++;
			
		}
		
		//사업자단위과세별부가세과세표준및납부세액(세부사항) 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			TXMC0120Dao.processSAVE01(rowVo);
			
			updateCount++;
			
		}		
		
		return updateCount;

	}	
	
}
