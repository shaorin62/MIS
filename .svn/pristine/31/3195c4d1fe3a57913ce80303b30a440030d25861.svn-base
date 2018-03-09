package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMB0030Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMB0030ServiceImpl - 증빙 및 적요 수정  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TXMB0030Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * 2016.08.04	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMB0030Service")
public class TXMB0030ServiceImpl extends EgovAbstractServiceImpl implements TXMB0030Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMB0030ServiceImpl.class);

	@Resource(name = "TXMB0030Dao")
	private TXMB0030Dao tXMB0030Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", tXMB0030Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_VATMAT1", tXMB0030Dao.processSEARCH01(searchVo));
		returnMap.put("dsTA_VATMAT2", tXMB0030Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo 		= null;
		int rowType 	= 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_SLIPNT = (List) saveData.get("dsTA_SLIPNT");
		
		for (int i = 0; i < dsTA_SLIPNT.size(); i++) {
			rowVo = (Map) dsTA_SLIPNT.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowType == 2) {
				tXMB0030Dao.processSAVE00(rowVo);
				
			}
		}
		
		return deleteCount + updateCount;
	}
	
}
