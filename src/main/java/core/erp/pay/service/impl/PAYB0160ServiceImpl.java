/**
 * core.erp.pay.service.impl.PAYB0160ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0160Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0160ServiceImpl - 급여조정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 * @see		{@link PAYB0160Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYB0160Service")
public class PAYB0160ServiceImpl extends EgovAbstractServiceImpl implements PAYB0160Service {

	/**
	 * 급여조정 DAO class inject.
	 */
	@Resource(name = "PAYB0160Dao")
	private PAYB0160Dao dao;

	/**
	 * 급여조정 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 급여조정 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYSET", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 * 데이터존재여부을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYSET", dao.processSEARCH01(searchVo));
		return returnMap;
	}

	/**
	 * 대상사원정보 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYSET", dao.processSEARCH02(searchVo));
		return returnMap;
	}

	/**
	 * 대상수당정보 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYSET", dao.processSEARCH03(searchVo));
		return returnMap;
	}

	/**
	 * PAYB0160 저장,수정 또는 삭제한다.
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

		List dsPY_PAYSET     = (List) saveData.get("dsPY_PAYSET");
		List dsPY_PAYSET_Del = (List) saveData.get("dsPY_PAYSET_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_PAYSET_Del.size(); i++) {

        	rowVo = (Map) dsPY_PAYSET_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_PAYSET.size(); i++) {

			rowVo = (Map) dsPY_PAYSET.get(i);
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
	 * 급여조정 목록을 복사한다.
	 * @param argDoc - 저장할 정보가 담긴 Document 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		dao.processPROC00(searchVo);
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_PAYSET", dao.processSEARCH00(searchVo));
		return returnMap;
	}

}
