package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0090Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0090ServiceImpl - 금융계좌등록  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 * @see		{@link FAMA0090Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0090Service")
public class FAMA0090ServiceImpl extends EgovAbstractServiceImpl implements FAMA0090Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0090ServiceImpl.class);

	@Resource(name = "FAMA0090Dao")
	private FAMA0090Dao fAMA0090Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFA_ACNTXM", fAMA0090Dao.processSEARCH00(searchVo));
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

		List dsFA_ACNTXM = (List) saveData.get("dsFA_ACNTXM");
		List dsFA_ACNTXM_Del = (List) saveData.get("dsFA_ACNTXM_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsFA_ACNTXM_Del.size(); i++) {

			rowVo = (Map) dsFA_ACNTXM_Del.get(i);
			deleteCount += fAMA0090Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFA_ACNTXM.size(); i++) {

			rowVo = (Map) dsFA_ACNTXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAMA0090Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += fAMA0090Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
