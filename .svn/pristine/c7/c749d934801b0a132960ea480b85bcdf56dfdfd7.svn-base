package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.txm.service.TXMB0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TXMB0010ServiceImpl - 전자세금계산서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TXMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * 2016.08.03	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TXMB0010Service")
public class TXMB0010ServiceImpl extends EgovAbstractServiceImpl implements TXMB0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMB0010ServiceImpl.class);

	@Resource(name = "TXMB0010Dao")
	private TXMB0010Dao tXMB0010Dao;
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ETAXUP", tXMB0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_ETAXUP = (List) saveData.get("dsTA_ETAXUP");
		List dsTA_ETAXUP_Del = (List) saveData.get("dsTA_ETAXUP_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_ETAXUP_Del.size(); i++) {

			rowVo = (Map) dsTA_ETAXUP_Del.get(i);
			deleteCount += tXMB0010Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_ETAXUP.size(); i++) {

			rowVo = (Map) dsTA_ETAXUP.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				tXMB0010Dao.processSAVE00(rowVo);

			} 
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
