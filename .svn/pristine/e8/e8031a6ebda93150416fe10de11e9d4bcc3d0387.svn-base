package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMA0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMA0060ServiceImpl - 수출실적명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMA0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.03	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMA0060Service")
public class TXMA0060ServiceImpl extends EgovAbstractServiceImpl implements TXMA0060Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMA0060ServiceImpl.class);

	@Resource(name = "TXMA0060Dao")
	private TXMA0060Dao TXMA0060Dao;
	

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATUPJ00", TXMA0060Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VATUPJ01", TXMA0060Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception {

		Map rowVo 		= null;
		int rowType 	= 0;
		int updateCount 	= 0;
		
		List ds1 		= (List) saveData.get("dsTA_VATUPJ00"); 			//List 객체 생성 - 공통 HEAD
		List ds2 		= (List) saveData.get("dsTA_VATUPJ01"); 			//List 객체 생성 - 공통 DETAIL

		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			if (rowType == 1) {
				TXMA0060Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				
				TXMA0060Dao.processUPDATE00(rowVo);
				
				updateCount++;
			}			
			
		}
		
		for (int i = 0; i < ds2.size(); i++) {
			rowVo = (Map) ds2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			if (rowType == 1) {
				TXMA0060Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				TXMA0060Dao.processUPDATE00(rowVo);
				
				updateCount++;
				
			}		
			
		}		
		
		return updateCount;

	}	
	
}
