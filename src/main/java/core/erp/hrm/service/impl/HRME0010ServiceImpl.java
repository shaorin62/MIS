/**
 * core.erp.hrm.service.impl.HRME0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRME0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRME0010ServiceImpl - 인사발령관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.11
 * @version	1.0
 * @see		{@link HRME0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.11	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRME0010Service")
public class HRME0010ServiceImpl extends EgovAbstractServiceImpl implements HRME0010Service {

	/**
	 * 인사발령관리 DAO class inject.
	 */
	@Resource(name = "HRME0010Dao")
	private HRME0010Dao dao;

	/**
	 * 발령관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령관리 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 인사발령관리 상세헤더 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXM", dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * 인사발령관리 상세 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXD", dao.processSEARCH02(searchVo));
		return returnMap;
	}

	/**
	 * 부서 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsVI_DEPTXM", dao.processSEARCH03(searchVo));
		return returnMap;
	}

	/**
	 * HRME0010 저장,수정 또는 삭제한다.
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

		List dsHR_APPOXM     = (List) saveData.get("dsHR_APPOXM");
		List dsHR_APPOXM_Del = (List) saveData.get("dsHR_APPOXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_APPOXM_Del.size(); i++) {

        	rowVo = (Map) dsHR_APPOXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_APPOXM.size(); i++) {

			rowVo = (Map) dsHR_APPOXM.get(i);
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

	/**
	 * 발령관리상세 목록을 저장,수정 또는 삭제한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsHR_APPOXD     = (List) saveData.get("dsHR_APPOXD");
		List dsHR_APPOXD_Del = (List) saveData.get("dsHR_APPOXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsHR_APPOXD_Del.size(); i++) {

        	rowVo = (Map) dsHR_APPOXD_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_APPOXD.size(); i++) {

			rowVo = (Map) dsHR_APPOXD.get(i);
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
	/**
	 * 발령지 헤더 출력
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXM", dao.processREPORT00(searchVo));
		return returnMap;
	}

	/**
	 * 발령지 출력
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processREPORT01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOXM", dao.processREPORT01(searchVo));
		return returnMap;
	}
}
