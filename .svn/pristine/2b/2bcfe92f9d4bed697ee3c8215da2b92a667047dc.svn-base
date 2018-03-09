package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import core.erp.fam.service.FAMA0050Service;

/**
 * <pre>
 *	FAMA0050ServiceImpl - 관리항목 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.13
 * @version	1.0
 * @see		{@link FAMA0050Service}
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

@Service("FAMA0050Service")
public class FAMA0050ServiceImpl extends EgovAbstractServiceImpl implements FAMA0050Service {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(FAMA0050ServiceImpl.class);

	@Resource(name = "FAMA0050Dao")
	private FAMA0050Dao fAMA0050Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXF", fAMA0050Dao.processSEARCH00(searchVo));
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

		List dsTA_ACCTXF = (List) saveData.get("dsTA_ACCTXF");
		List dsTA_ACCTXF_Del = (List) saveData.get("dsTA_ACCTXF_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_ACCTXF_Del.size(); i++) {

			rowVo = (Map) dsTA_ACCTXF_Del.get(i);
			deleteCount += fAMA0050Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_ACCTXF.size(); i++) {

			rowVo = (Map) dsTA_ACCTXF.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAMA0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0050Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}

}
