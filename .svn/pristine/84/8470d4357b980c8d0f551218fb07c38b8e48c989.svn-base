/**
 * core.erp.hrm.service.impl.HRME0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRME0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRME0020ServiceImpl - 인사발령확정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.14
 * @version	1.0
 * @see		{@link HRME0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HRME0020Service")
public class HRME0020ServiceImpl extends EgovAbstractServiceImpl implements HRME0020Service {

	/**
	 * 인사발령확정 DAO class inject.
	 */
	@Resource(name = "HRME0020Dao")
	private HRME0020Dao dao;

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
	 * HRME0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{

		int iTotCnt = 0;

		Map rowVo = null;

		List dsHR_APPOXM     = (List) saveData.get("dsHR_APPOXM");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_APPOXM.size(); i++) {

			rowVo = (Map) dsHR_APPOXM.get(i);

			dao.processSAVE00(rowVo);

			iTotCnt++;

		}

		return iTotCnt;

	}


	/**
	 * HRME0020 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@Override
	public int processPROC00() throws Exception{

		int iTotCnt = 0;

		dao.processUPDATE00();

		iTotCnt++;


		return iTotCnt;

	}
}
