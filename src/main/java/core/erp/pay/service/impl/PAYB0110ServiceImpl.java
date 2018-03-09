/**
 * core.erp.pay.service.impl.PAYB0110ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0110Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0110ServiceImpl - 연차수당관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link PAYB0110Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.24	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0110Service")
public class PAYB0110ServiceImpl extends EgovAbstractServiceImpl implements PAYB0110Service {

	/**
	 * 연차수당관리 DAO class inject.
	 */
	@Resource(name = "PAYB0110Dao")
	private PAYB0110Dao dao;

	/**
	 * 연차수당관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 연차수당관리 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 연차불러오기(퇴직연차) 목록을 조회한다. 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 연차불러오기(퇴직연차) 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_ANNUXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 연차수당관리 저장,수정 또는 삭제한다.
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

		List dsAT_ANNUXM     = (List) saveData.get("dsAT_ANNUXM");
		List dsAT_ANNUXM_Del = (List) saveData.get("dsAT_ANNUXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsAT_ANNUXM_Del.size(); i++) {

        	rowVo = (Map) dsAT_ANNUXM_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsAT_ANNUXM.size(); i++) {

			rowVo = (Map) dsAT_ANNUXM.get(i);
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
	 * 퇴직자의 급여기본정보 연차수당금액 갱신한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;

		List dsAT_ANNUXM     = (List) saveData.get("dsAT_ANNUXM");
		
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsAT_ANNUXM.size(); i++) {
			rowVo = (Map) dsAT_ANNUXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			dao.processSAVE01(rowVo);
			iTotCnt++;

		}

		return iTotCnt;
	}
	
	/**
	 * 연차불러오기시 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		return dao.processDELETE01(saveData);
	}
}
