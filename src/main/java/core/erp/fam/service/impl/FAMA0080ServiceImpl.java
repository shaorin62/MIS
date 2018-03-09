package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0080Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0080ServiceImpl - 금융기관(지점) 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.13
 * @version	1.0
 * @see		{@link FAMA0080Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0080Service")
public class FAMA0080ServiceImpl extends EgovAbstractServiceImpl implements FAMA0080Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0080ServiceImpl.class);

	@Resource(name = "FAMA0080Dao")
	private FAMA0080Dao fAMA0080Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_BANKBR", fAMA0080Dao.processSEARCH00(searchVo));
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

		List dsTA_BANKBR = (List) saveData.get("dsTA_BANKBR");
		List dsTA_BANKBR_Del = (List) saveData.get("dsTA_BANKBR_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_BANKBR_Del.size(); i++) {

			rowVo = (Map) dsTA_BANKBR_Del.get(i);
			deleteCount += fAMA0080Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_BANKBR.size(); i++) {

			rowVo = (Map) dsTA_BANKBR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAMA0080Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0080Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
