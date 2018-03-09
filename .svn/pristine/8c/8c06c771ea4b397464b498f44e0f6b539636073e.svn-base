package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAME0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAME0050ServiceImpl - 최초이월잔액(관리항목)  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link FAME0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAME0050Service")
public class FAME0050ServiceImpl extends EgovAbstractServiceImpl implements FAME0050Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAME0050ServiceImpl.class);

	@Resource(name = "FAME0050Dao")
	private FAME0050Dao FAME0050Dao;
	
	/**
	 * 최초이월잔액(관리항목)목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MAMNTM", FAME0050Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * 최초이월잔액(관리항목)새부목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MAMNTD", FAME0050Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * 계정과목
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 계정과목
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXM", FAME0050Dao.processSEARCH10(searchVo));
		return returnMap;
	}	
	
	/**
	 * 최초이월잔액(관리항목)세부목록을 저장,수정,삭제한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type 1 : Insert 2 : Update 3 : Delete
		 */

		List dsTA_MAMNTD = (List) saveData.get("dsTA_MAMNTD");
		List dsTA_MAMNTD_Del = (List) saveData.get("dsTA_MAMNTD_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_MAMNTD_Del.size(); i++) {

			rowVo = (Map) dsTA_MAMNTD_Del.get(i);
			deleteCount += FAME0050Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MAMNTD.size(); i++) {

			rowVo = (Map) dsTA_MAMNTD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				FAME0050Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += FAME0050Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
