package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0060ServiceImpl - 수출실적명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	신민규		Initial Created.
 * 2016.08.08	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMC0060Service")
public class TXMC0060ServiceImpl extends EgovAbstractServiceImpl implements TXMC0060Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0060ServiceImpl.class);

	@Resource(name = "TXMC0060Dao")
	private TXMC0060Dao TXMC0060Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0060Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT141_H", TXMC0060Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VAT141_D", TXMC0060Dao.processSEARCH02(searchVo));
		returnMap.put("dsTA_VAT141_R", TXMC0060Dao.processSEARCH03(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0060Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT141_H", TXMC0060Dao.processPROC00(searchVo));
		returnMap.put("dsTA_VAT141_D", TXMC0060Dao.processPROC01(searchVo));
		
		return returnMap;
	}
	
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VAT141_H 			= (List) saveData.get("dsTA_VAT141_H");  
		List dsTA_VAT141_H_DELETE 	= (List) saveData.get("dsTA_VAT141_H_DELETE");
		
		List dsTA_VAT141_D 			= (List) saveData.get("dsTA_VAT141_D");  
		List dsTA_VAT141_D_DELETE 	= (List) saveData.get("dsTA_VAT141_D_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		// 수출실적명세서 헤더는 삭제를 안함 나중에 사용시 주석 해제 후 Dao Oracle 만들어서 사용.
		/*for (int i = 0; i < dsTA_VAT141_H_DELETE.size(); i++) {
			rowVo = (Map) dsTA_VAT141_H_DELETE.get(i);
			deleteCount += TXMC0060Dao.processDELETE00(rowVo);
			
		}*/
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT141_H.size(); i++) {
			rowVo = (Map) dsTA_VAT141_H.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			TXMC0060Dao.processSAVE00(rowVo);
			
		}
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT141_D_DELETE.size(); i++) {
			rowVo = (Map) dsTA_VAT141_D_DELETE.get(i);
			deleteCount += TXMC0060Dao.processDELETE01(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT141_D.size(); i++) {
			rowVo = (Map) dsTA_VAT141_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			TXMC0060Dao.processSAVE01(rowVo);
			
		}
		
		return deleteCount + updateCount;

	}	
	
}
