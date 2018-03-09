package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMA0010ServiceImpl - 자금계획추가내역  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link TRMA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 *r
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMA0010Service")
public class TRMA0010ServiceImpl extends EgovAbstractServiceImpl implements TRMA0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0010ServiceImpl.class);

	@Resource(name = "TRMA0010Dao")
	private TRMA0010Dao tRMA0010Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MONEPL", tRMA0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map searchVo, Map saveData) throws Exception {
		
		LOGGER.info("searchVo =" + searchVo);
		LOGGER.info("saveDate =" + saveData);
		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_MONEPL = (List) saveData.get("dsTA_MONEPL");
		List dsTA_MONEPL_Del = (List) saveData.get("dsTA_MONEPL_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_MONEPL_Del.size(); i++) {
			rowVo = (Map) dsTA_MONEPL_Del.get(i);
			rowVo.put("ACCT_UNIT", searchVo.get("ACCT_UNIT"));
			rowVo.put("PROV_DATE", searchVo.get("PROV_DATE"));
			deleteCount += tRMA0010Dao.processDELETE00(rowVo);
		}
		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MONEPL.size(); i++) {

			rowVo = (Map) dsTA_MONEPL.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			rowVo.put("ACCT_UNIT", searchVo.get("ACCT_UNIT"));
			rowVo.put("PROV_DATE", searchVo.get("PROV_DATE"));
			
			if (rowType == 1) {
				tRMA0010Dao.processSAVE00(rowVo);
			} else if (rowType == 2) {
				updateCount += tRMA0010Dao.processUPDATE00(rowVo);
			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}

	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo, Map saveData) throws Exception {
		tRMA0010Dao.processPROC00(searchVo);
		return null;
	}

}
