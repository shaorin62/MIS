/**
 * core.erp.hrm.service.impl.HRMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.hrm.service.HRMA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HRMA0010ServiceImpl - 발령코드설정 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.11
 * @version	1.0
 * @see		{@link HRMA0010Service}
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

@Service("HRMA0010Service")
public class HRMA0010ServiceImpl extends EgovAbstractServiceImpl implements HRMA0010Service {

	/**
	 * 발령코드설정 DAO class inject.
	 */
	@Resource(name = "HRMA0010Dao")
	private HRMA0010Dao dao;

	/**
	 * 발령기초 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 발령기초 목록
	 * @exception Exception
	 */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_APPOBS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 발령기초 목록을 저장,수정 또는 삭제한다.
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

		List dsHR_APPOBS     = (List) saveData.get("dsHR_APPOBS");
		List dsHR_APPOBS_Del = (List) saveData.get("dsHR_APPOBS_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsHR_APPOBS.size(); i++) {

			rowVo = (Map) dsHR_APPOBS.get(i);

			dao.processSAVE00(rowVo);

 		}

		return iTotCnt;

	}
}
