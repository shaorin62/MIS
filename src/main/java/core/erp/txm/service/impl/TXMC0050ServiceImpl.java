package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import core.erp.txm.service.TXMC0050Service;

/**
 * <pre>
 *	TXMC0050ServiceImpl - 수출실적명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.05	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMC0050Service")
public class TXMC0050ServiceImpl extends EgovAbstractServiceImpl implements TXMC0050Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0050ServiceImpl.class);

	@Resource(name = "TXMC0050Dao")
	private TXMC0050Dao TXMC0050Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0050Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT117_H", TXMC0050Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		TXMC0050Dao.processPROC00(searchVo);
	}
	
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;
		int updateCount = 0;
		
		List ds1 		= (List) saveData.get("dsTA_VAT117_H"); 			//List 객체 생성 - 공통 HEAD


		//Head 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			TXMC0050Dao.processSAVE00(rowVo);
			
		}	
		
		return updateCount;

	}		

}
