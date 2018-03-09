/**
 * core.erp.hrm.service.impl.HRME0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.impl.ComSequenceDao;
import core.erp.hrm.service.HRME0070Service;
import core.erp.hrm.web.HRME0070Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRME0070ServiceImpl - 승진대상자선정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.17
 * @version	1.0
 * @see		{@link HRME0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRME0070Service")
public class HRME0070ServiceImpl extends EgovAbstractServiceImpl implements HRME0070Service {

	/**
	 * Logger init.
	 */
	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(HRME0070Controller.class);

	/**
	 * 승진대상자선정 DAO class inject.
	 */
	@Resource(name = "HRME0070Dao")
	private HRME0070Dao dao;

	@Resource(name="comSequenceDao")
	private ComSequenceDao dao_comSeq;

	/**
	 * 승진대상자선정 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 승진대상자선정 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_PROMTN", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 사원 및 평가등급 정보를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 사원 및 평가등급 정보
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 대상자생성 처리한다.
	 * @param param - 처리조건 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
	}

	/**
	 * 대상자취소 처리한다.
	 * @param param - 처리조건 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map searchVo) throws Exception {
		dao.processPROC01(searchVo);
	}

	/**
	 * 승진자 확정 처리한다.
	 * @param param - 처리조건 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processPROC02(Map saveData, Map searchVo) throws Exception {

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_PROMTN     = (List) saveData.get("dsHR_PROMTN");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_PROMTN.size(); i++) {
			rowVo = (Map) dsHR_PROMTN.get(i);
			rowVo.put("DRFR_DTCD", searchVo.get("DRFR_DTCD"));
			rowVo.put("DRFR_EMNR", searchVo.get("DRFR_EMNR"));
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}


			iTotCnt++;
		}


		dao.processPROC02(searchVo);	//발령생성
		return iTotCnt;

	}

	/**
	 * 승진자 확정취소 처리한다.
	 * @param param - 처리조건 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public void processPROC03(Map searchVo) throws Exception {
		dao.processPROC03(searchVo);
	}

	/**
	 * 대상자생성 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_PROMTN     = (List) saveData.get("dsHR_PROMTN");
		List dsHR_PROMTN_Del = (List) saveData.get("dsHR_PROMTN_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_PROMTN_Del.size(); i++) {
        	rowVo = (Map) dsHR_PROMTN_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_PROMTN.size(); i++) {
			rowVo = (Map) dsHR_PROMTN.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}


}