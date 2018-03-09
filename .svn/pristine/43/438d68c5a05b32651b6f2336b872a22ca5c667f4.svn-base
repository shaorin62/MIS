package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYF0070Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0070ServiceImpl - 퇴직추계액 테이블 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 13.
 * @version	1.0
 * @see		{@link PAYF0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 13.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0070Service")
public class PAYF0070ServiceImpl extends EgovAbstractServiceImpl implements PAYF0070Service {

	/**
	 * 퇴직추계액 테이블 DAO class inject.
	 */
	@Resource(name = "PAYF0070Dao")
	private PAYF0070Dao dao;

	/**
	 * 퇴직추계액 테이블 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTRESE", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직추계액 테이블 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTRPAY1", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직추계액 테이블 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTRPAY2", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * 퇴직추계액 테이블 저장,수정 또는 삭제한다.
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
		// 퇴직추계액
		List dsPY_RTRESE     = (List) saveData.get("dsPY_RTRESE");
		List dsPY_RTRESE_Del = (List) saveData.get("dsPY_RTRESE_DELETE");
		// 추계액 산출 급여
		List dsPY_RTRPAY1     = (List) saveData.get("dsPY_RTRPAY1");
		// 추계액 산출 상여
		List dsPY_RTRPAY2     = (List) saveData.get("dsPY_RTRPAY2");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_RTRESE_Del.size(); i++) {
        	rowVo = (Map) dsPY_RTRESE_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTRESE.size(); i++) {
			rowVo = (Map) dsPY_RTRESE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 1 ) {
				dao.processSAVE00(rowVo);
			} else if ( rowType == 2 ) {
				dao.processUPDATE00(rowVo);
			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTRPAY1.size(); i++) {
			rowVo = (Map) dsPY_RTRPAY1.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 2 ) {
				dao.processUPDATE01(rowVo);
			}

			iTotCnt++;

		}
		// 추계액 산출 상여
		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_RTRPAY2.size(); i++) {
			rowVo = (Map) dsPY_RTRPAY2.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if ( rowType == 2 ) {
				dao.processUPDATE01(rowVo);
			}

			iTotCnt++;

		}

		return iTotCnt;

	}

	/**
	 * 퇴직추계액 테이블을 삭제한다.
	 * @param param - 삭제조건 정보가 담긴 Map 객체
	 * @return 조회한 개인별기본급 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public void processDELETE00(Map saveData) throws Exception {
		dao.processDELETE00(saveData);
    }

	/**
	 * 퇴직추계액 목록을 처리한다.
	 * @param param - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception
	 */
	@SuppressWarnings({ "rawtypes" })
	@Override
	public void processPROC00(Map saveData) throws Exception {
		dao.processPROC00(saveData);
	}
}