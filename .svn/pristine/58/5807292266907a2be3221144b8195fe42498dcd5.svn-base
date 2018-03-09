package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMC0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMC0080ServiceImpl - 영세율첨부서류제출명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	신민규
 * @since	2016.08.03
 * @version	1.0
 * @see		{@link TXMC0080Service}
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

@Service("TXMC0080Service")
public class TXMC0080ServiceImpl extends EgovAbstractServiceImpl implements TXMC0080Service {

	@SuppressWarnings("unused")
	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0080ServiceImpl.class);

	@Resource(name = "TXMC0080Dao")
	private TXMC0080Dao TXMC0080Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVA_VATBRANCH", TXMC0080Dao.processSEARCH00(searchVo));
		returnMap.put("dsTA_VAT106_D", TXMC0080Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;
		
		List dsTA_VAT106_D 			= (List) saveData.get("dsTA_VAT106_D");  
		List dsTA_VAT106_D_DELETE 	= (List) saveData.get("dsTA_VAT106_D_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_VAT106_D_DELETE.size(); i++) {
			rowVo = (Map) dsTA_VAT106_D_DELETE.get(i);
			deleteCount += TXMC0080Dao.processDELETE00(rowVo);
			
		}
		
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_VAT106_D.size(); i++) {
			rowVo = (Map) dsTA_VAT106_D.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			TXMC0080Dao.processSAVE00(rowVo);
			
		}
		
		return deleteCount + updateCount;

	}	
	
}
