package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0090Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
 
/**
 * <pre>
 *	TXMC0090ServiceImpl - 건물등감가상각자산취득명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0090Service}
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

@Service("TXMC0090Service")
public class TXMC0090ServiceImpl extends EgovAbstractServiceImpl implements TXMC0090Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0090ServiceImpl.class);

	@Resource(name = "TXMC0090Dao")
	private TXMC0090Dao TXMC0090Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0090Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT149_H", TXMC0090Dao.processSEARCH01(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		TXMC0090Dao.processPROC00(searchVo);
	}
	
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;
		int updateCount = 0;
		
		List ds 		= (List) saveData.get("dsTA_VAT149_H"); 			//List 객체 생성 - 공통 HEAD


		//Head 저장
		for (int i = 0; i < ds.size(); i++) {
			rowVo = (Map) ds.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			TXMC0090Dao.processSAVE00(rowVo);
			
			updateCount++;
			
		}
		
		return updateCount;

	}	
	
}
