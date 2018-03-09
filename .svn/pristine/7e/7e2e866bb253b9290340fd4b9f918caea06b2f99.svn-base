/**
 * core.erp.hrm.service.impl.HATB0050ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.impl.FAMA0100ServiceImpl;
import core.erp.hat.service.HATB0050Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATB0050ServiceImpl - 월근태등록 및 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김희정
 * @since	2016.09.13
 * @version	1.0
 * @see		{@link HATB0050Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.13	김희정		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATB0050Service")
public class HATB0050ServiceImpl extends EgovAbstractServiceImpl implements HATB0050Service {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(HATB0050ServiceImpl.class);
	
	/**
	 * 월근태등록 내역조회 DAO class inject.
	 */
	@Resource(name = "HATB0050Dao")
	private HATB0050Dao dao;

	/**
	 * 월근태등록 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 월근태등록 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ATTEM1", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 월근태등록 내역을  저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
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

		List dsAT_ATTEM1 = (List) saveData.get("dsAT_ATTEM1");
		List dsAT_ATTEM1_Del = (List) saveData.get("dsAT_ATTEM1_DELETE");

		// DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsAT_ATTEM1_Del.size(); i++) {

			rowVo = (Map) dsAT_ATTEM1_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

		// DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsAT_ATTEM1.size(); i++) {

			rowVo = (Map) dsAT_ATTEM1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;
	}
	
	/**
	 * 월근태를 생성한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		dao.processDELETE01(searchVo);
		dao.processSAVE01(searchVo);
		returnMap.put("dsAT_ATTEM1", dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	/**
	 * 근태마감여부를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 근태마감내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ENDDXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
}
