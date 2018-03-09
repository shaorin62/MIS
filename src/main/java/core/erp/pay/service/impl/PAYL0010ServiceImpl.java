/**
 * core.erp.pay.service.impl.PAYL0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYL0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYL0010ServiceImpl - 소급기준 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link PAYL0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYL0010Service")
public class PAYL0010ServiceImpl extends EgovAbstractServiceImpl implements PAYL0010Service {

	/**
	 * 소급기준 DAO class inject.
	 */
	@Resource(name = "PAYL0010Dao")
	private PAYL0010Dao dao;

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
	 * 소급기준 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 소급기준 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_REPAYX", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 소급기준예외 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 소급기준예외 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_REPYEX", dao.processSEARCH02(searchVo));
		return returnMap;

    }

	/**
	 * PAYL0010 저장,수정 또는 삭제한다.
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


		List dsPY_REPAYX     = (List) saveData.get("dsPY_REPAYX");

		List dsPY_REPYEX     = (List) saveData.get("dsPY_REPYEX");
		List dsPY_REPYEX_Del = (List) saveData.get("dsPY_REPYEX_DELETE");



      //DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_REPYEX_Del.size(); i++) {

        	rowVo = (Map) dsPY_REPYEX_Del.get(i);
			dao.processDELETE01(rowVo);
			iTotCnt++;

		}


        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_REPYEX.size(); i++) {

			rowVo = (Map) dsPY_REPYEX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {

				dao.processSAVE01(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE01(rowVo);

			}

			iTotCnt++;

		}
        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_REPAYX.size(); i++) {

			rowVo = (Map) dsPY_REPAYX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 2) {

				dao.processSAVE00(rowVo);

			}

			iTotCnt++;

		}


		return iTotCnt;

	}
	/**
	 * 소급기준관리 저장,수정,삭제한다.
	 * @param argDoc - 저장, 수정, 삭제할 데이터가 담긴 Document 객체
	 * @return 처리 건수(해당 DBMS가 지원할 경우)
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings({ "rawtypes", "unused" })
	public int processSAVE01(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;
		int rowType = 0;



		return iTotCnt;
	}
}
