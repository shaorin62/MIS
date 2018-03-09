/**
 * core.erp.pay.service.impl.PAYD0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYD0010Service;
import core.erp.pay.web.PAYD0010Controller;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYD0010ServiceImpl - 급여시뮬레이션 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이용관
 * @since	2016.11.02
 * @version	1.0
 * @see		{@link PAYD0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		  Modifier		Comment
 * ====================================================
 * 2016.11.02	이용관		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYD0010Service")
public class PAYD0010ServiceImpl extends EgovAbstractServiceImpl implements PAYD0010Service {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYD0010ServiceImpl.class);

	/**
	 * 급여시뮬레이션 DAO class inject.
	 */
	@Resource(name = "PAYD0010Dao")
	private PAYD0010Dao dao;


	/**
	 * 급여예측 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여예측 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIMUXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }


	/**
	 * 급여예측기초설정,급여예측개인설정 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여예측 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIMUBS", dao.processSEARCH01(searchVo));
		returnMap.put("dsPY_SIMUXA", dao.processSEARCH02(searchVo));
		return returnMap;

    }


	/**
	 * 급여예측개인설정 대상 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여예측기초설정 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SIMUXA", dao.processSEARCH04(searchVo));
		return returnMap;

    }


	/**
	 * 급여시뮬레이션 정보 저장, 수정, 삭제를 한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;
		String	sSMUL_SEQN = "";

		List dsPY_SIMUXM     = (List) saveData.get("dsPY_SIMUXM");
		List dsPY_SIMUXM_Del = (List) saveData.get("dsPY_SIMUXM_DELETE");

		List dsPY_SIMUBS     = (List) saveData.get("dsPY_SIMUBS");
		List dsPY_SIMUBS_Del = (List) saveData.get("dsPY_SIMUBS_DELETE");

		List dsPY_SIMUXA     = (List) saveData.get("dsPY_SIMUXA");
		List dsPY_SIMUXA_Del = (List) saveData.get("dsPY_SIMUXA_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SIMUXA_Del.size(); i++) {

        	rowVo = (Map) dsPY_SIMUXA_Del.get(i);
			dao.processDELETE02(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SIMUBS_Del.size(); i++) {

        	rowVo = (Map) dsPY_SIMUBS_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SIMUXM_Del.size(); i++) {

        	rowVo = (Map) dsPY_SIMUXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}
        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SIMUXM.size(); i++) {

			rowVo = (Map) dsPY_SIMUXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				sSMUL_SEQN = dao.processSEARCH03(rowVo);	//신규회차 조회
				rowVo.put("SMUL_SEQN", sSMUL_SEQN);
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE00(rowVo);

			}
			logger.info("1) ======>sSMUL_SEQN=" + sSMUL_SEQN);
			iTotCnt++;
		}
	        
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SIMUBS.size(); i++) {

			rowVo = (Map) dsPY_SIMUBS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				if (!sSMUL_SEQN.isEmpty()) {
					rowVo.put("SMUL_SEQN", sSMUL_SEQN);
				}
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE01(rowVo);

			}

			iTotCnt++;

		}
        
	    //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SIMUXA.size(); i++) {
	
			rowVo = (Map) dsPY_SIMUXA.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
	
			if (rowType == 1) {
				if (!sSMUL_SEQN.isEmpty()) {
					rowVo.put("SMUL_SEQN", sSMUL_SEQN);
				}
				dao.processSAVE02(rowVo);
	
			} else if (rowType == 2) {
	
				dao.processUPDATE02(rowVo);
	
			}
	
			iTotCnt++;
	
		}


		return iTotCnt;
	}

	/**
	 * 급여시뮬레이션 처리를 한다.
	 * @param param - 처리조건 정보가 담긴 Map 객체
	 * @return 
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
    }

	
	
}
