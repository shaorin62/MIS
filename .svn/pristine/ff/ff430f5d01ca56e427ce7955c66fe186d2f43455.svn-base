/**
 * core.erp.pay.service.impl.PAYA0120ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0120Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYA0120ServiceImpl - 급여전기설정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.11.22
 * @version	1.0
 * @see		{@link PAYA0120Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.22	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0120Service")
public class PAYA0120ServiceImpl extends EgovAbstractServiceImpl implements PAYA0120Service {

	/**
	 * 급여전기설정 DAO class inject.
	 */
	@Resource(name = "PAYA0120Dao")
	private PAYA0120Dao dao;

	/**
	 * 급여전기설정 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 비과세수당등록 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SLIPBS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 급여전기설정(서브) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 비과세수당등록 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_SLIPED", dao.processSEARCH01(searchVo));
		return returnMap;

	}

	/**
	 * 지급항목(서브) 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 비과세수당등록 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALLDED", dao.processSEARCH02(searchVo));
		return returnMap;

	}

	/**
	 * PAYA0120 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsPY_SLIPBS     = (List) saveData.get("dsPY_SLIPBS");
		List dsPY_SLIPBS_Del = (List) saveData.get("dsPY_SLIPBS_DELETE");

		List dsPY_SLIPED     = (List) saveData.get("dsPY_SLIPED");
		List dsPY_SLIPED_Del = (List) saveData.get("dsPY_SLIPED_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_SLIPBS_Del.size(); i++) {
        	rowVo = (Map) dsPY_SLIPBS_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SLIPBS.size(); i++) {

			rowVo = (Map) dsPY_SLIPBS.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_SLIPED.size(); i++) {

			rowVo = (Map) dsPY_SLIPED.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {
				dao.processUPDATE01(rowVo);

			}

			iTotCnt++;

		}

		return iTotCnt;

	}
}
