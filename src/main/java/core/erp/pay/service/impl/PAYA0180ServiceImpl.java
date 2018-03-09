/**
 * core.erp.pay.service.impl.PAYA0180ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYA0180Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYA0180ServiceImpl - 조회용부서관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link PAYA0180Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYA0180Service")
public class PAYA0180ServiceImpl extends EgovAbstractServiceImpl implements PAYA0180Service {

	/**
	 * 조회용부서관리 DAO class inject.
	 */
	@Resource(name = "PAYA0180Dao")
	private PAYA0180Dao dao;

	/**
	 * 공통코드상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드상세 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_CODEXD", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 조회용부서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 조회용부서 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_DEPTQR", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * PAYA0180 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsTM_CODEXD     = (List) saveData.get("dsTM_CODEXD");
		List dsTM_CODEXD_Del = (List) saveData.get("dsTM_CODEXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_CODEXD_Del.size(); i++) {

        	rowVo = (Map) dsTM_CODEXD_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_CODEXD.size(); i++) {

			rowVo = (Map) dsTM_CODEXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}

			iTotCnt++;

		}

		List dsPY_DEPTQR     = (List) saveData.get("dsPY_DEPTQR");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_DEPTQR.size(); i++) {

			rowVo = (Map) dsPY_DEPTQR.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processSAVE01(rowVo);

			iTotCnt++;

		}

		return iTotCnt;

	}
}
