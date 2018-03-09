package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.trm.service.TRMC0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TRMC0010ServiceImpl - 차입금관리  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.28
 * @version	1.0
 * @see		{@link TRMC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TRMC0010Service")
public class TRMC0010ServiceImpl extends EgovAbstractServiceImpl implements TRMC0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMC0010ServiceImpl.class);

	@Resource(name = "TRMC0010Dao")
	private TRMC0010Dao tRMC0010Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_DBPYXM", tRMC0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_DBPYXD", tRMC0010Dao.processSEARCH01(searchVo));
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

		List dsTR_DBPYXM = (List) saveData.get("dsTR_DBPYXM");
		List dsTR_DBPYXM_Del = (List) saveData.get("dsTR_DBPYXM_DELETE");

		List dsTR_DBPYXD = (List) saveData.get("dsTR_DBPYXD");
		List dsTR_DBPYXD_Del = (List) saveData.get("dsTR_DBPYXD_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTR_DBPYXM_Del.size(); i++) {

			rowVo = (Map) dsTR_DBPYXM_Del.get(i);
			deleteCount += tRMC0010Dao.processDELETE00(rowVo);
			tRMC0010Dao.processUPDATE01(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTR_DBPYXM.size(); i++) {

			rowVo = (Map) dsTR_DBPYXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				tRMC0010Dao.processSAVE00(rowVo);

			}

			else if (rowType == 2) {

				updateCount += tRMC0010Dao.processUPDATE00(rowVo);

			}
			
			tRMC0010Dao.processUPDATE01(rowVo);

		}

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTR_DBPYXD_Del.size(); i++) {

			rowVo = (Map) dsTR_DBPYXD_Del.get(i);
			deleteCount += tRMC0010Dao.processDELETE01(rowVo);
			tRMC0010Dao.processUPDATE01(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTR_DBPYXD.size(); i++) {

			rowVo = (Map) dsTR_DBPYXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				tRMC0010Dao.processSAVE01(rowVo);

			}

			else if (rowType == 2) {

				tRMC0010Dao.processDELETE01(rowVo);
				tRMC0010Dao.processSAVE01(rowVo);

			}
			
			tRMC0010Dao.processUPDATE01(rowVo);

		}
		
		LOGGER.info("delete count : " + deleteCount);

		return deleteCount;
	}
	// 차입금관리 전표 생성
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map searchVo, Map saveData) throws Exception {
		return 0;
	}
	// 차입금관리 전표 삭제
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map searchVo, Map saveData) throws Exception {
		return 0;
	}



}
