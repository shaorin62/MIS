package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAME0040Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAME0040ServiceImpl - 최초이월잔액(계정)  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link FAME0040Service}
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

@Service("FAME0040Service")
public class FAME0040ServiceImpl extends EgovAbstractServiceImpl implements FAME0040Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAME0040ServiceImpl.class);

	@Resource(name = "FAME0040Dao")
	private FAME0040Dao fAME0040Dao;
	
	/**
	 * 최초이월잔액(계정)목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MAMNTM", fAME0040Dao.processSEARCH00(searchVo));
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
		returnMap.put("dsTA_ACCTXM", fAME0040Dao.processSEARCH10(searchVo));
		return returnMap;
	}	
	
	/**
	 * 최초이월잔액(계정)목록을 저장,수정,삭제한다.
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

		List dsTA_MAMNTM = (List) saveData.get("dsTA_MAMNTM");
		List dsTA_MAMNTM_Del = (List) saveData.get("dsTA_MAMNTM_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_MAMNTM_Del.size(); i++) {

			rowVo = (Map) dsTA_MAMNTM_Del.get(i);
			deleteCount += fAME0040Dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_MAMNTM.size(); i++) {

			rowVo = (Map) dsTA_MAMNTM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				fAME0040Dao.processSAVE00(rowVo);	

			} else if (rowType == 2) {

				updateCount += fAME0040Dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
	
}
