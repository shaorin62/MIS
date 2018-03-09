package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0060Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0060ServiceImpl - 계정과목등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.13
 * @version	1.0
 * @see		{@link FAMA0060Service}
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

@Service("FAMA0060Service")
public class FAMA0060ServiceImpl extends EgovAbstractServiceImpl implements FAMA0060Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0060ServiceImpl.class);

	@Resource(name = "FAMA0060Dao")
	private FAMA0060Dao fAME0060Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXM", fAME0060Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_ACCTXD", fAME0060Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		/**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */

		List ds1         = (List) saveData.get("dsTA_ACCTXM");            //List 객체 생성 - 계정과목  HEAD
		List ds2         = (List) saveData.get("dsTA_ACCTXD");            //List 객체 생성 - 계정과목  DETAILS
		List ds1_DELETE  = (List) saveData.get("dsTA_ACCTXM_DELETE");     //List 객체 생성 - 계정과목  HEAD
		List ds2_DELETE  = (List) saveData.get("dsTA_ACCTXD_DELETE");     //List 객체 생성 - 계정과목  DETAILS		

		//Detail 삭제
		for (int i = 0; i < ds2_DELETE.size(); i++) {
			rowVo = (Map) ds2_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			LOGGER.info("Delete : "+ rowVo);
			deleteCount += fAME0060Dao.processDELETE01(rowVo);		
		}

		//Head 삭제	
		for (int i = 0; i < ds1_DELETE.size(); i++) {
			rowVo = (Map) ds1_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;

			LOGGER.info("Delete : "+ rowVo);
			deleteCount += fAME0060Dao.processDELETE00(rowVo);
		}

		//Head 저장
		for (int i = 0; i < ds1.size(); i++) {
			rowVo = (Map) ds1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);

			if ( !(rowVo.get("SLIP_YSNO").equals("1")) ) {
				rowVo.put("BUDG_YSNO", "0");	//예산사용
				rowVo.put("GUNB_YSNO", "0");	//건별반제관리항목
				rowVo.put("CHUN_YSNO", "0");	//충당금계정
				rowVo.put("ZERO_YSNO", "0");	//금액0허용
				rowVo.put("FNCR_YSNO", "0");	//외화필수여부
				rowVo.put("EVID_YSNO", "0");	//증빙사용여부
				rowVo.put("ACCT_TYPE", "");		//계정종류
				rowVo.put("CHUL_YSNO", "0");	//출납전표사용여부
				rowVo.put("CSUS_YSNO", "0");	//코스트센터사용
				rowVo.put("FUND_YSNO", "");		//자금사용여부
				rowVo.put("OVER_GUBN", "");		//간접비배부구분
				rowVo.put("COST_GUBN", "");		//원가구분
			}


			if (rowType == 1) {
				fAME0060Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += fAME0060Dao.processUPDATE00(rowVo);

			}			
		}

		//Detail 저장
		for (int i = 0; i < ds2.size(); i++) {
			rowVo = (Map) ds2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			LOGGER.info("SAVE/UPDATE : " + rowVo);

			if (rowType == 1) {
				fAME0060Dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				updateCount += fAME0060Dao.processUPDATE01(rowVo);

			}
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("update count : " + updateCount);

		return deleteCount + updateCount;

	}
}
