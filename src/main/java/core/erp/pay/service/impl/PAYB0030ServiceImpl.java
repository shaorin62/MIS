/**
 * core.erp.pay.service.impl.PAYB0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYB0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYB0030ServiceImpl - 급여등록 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 * @see		{@link PAYB0030Service}
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

@Service("PAYB0030Service")
public class PAYB0030ServiceImpl extends EgovAbstractServiceImpl implements PAYB0030Service {

	/**
	 * 급여등록 DAO class inject.
	 */
	@Resource(name = "PAYB0030Dao")
	private PAYB0030Dao dao;

	/**
	 * 지급공제관리 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 지급공제관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALDEYN", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 지급공제관리 대상 사원 정보 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 지급공제관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 지급공제관리 대상 수당 정보 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 지급공제관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_ALLDED", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	/**
	 * 지급공제등록 사원번호를 조회.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsHR_MASTXM", dao.processSEARCH99(searchVo));
		return returnMap;
	}

	/**
	 * PAYB0030 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		int iTotCnt = 0; 
		
		Map rowVo = null;
		int rowType = 0;

		List dsPY_ALDEYN     = (List) saveData.get("dsPY_ALDEYN");  
		List dsPY_ALDEYN_Del = (List) saveData.get("dsPY_ALDEYN_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPY_ALDEYN_Del.size(); i++) {

        	rowVo = (Map) dsPY_ALDEYN_Del.get(i);
			dao.processDELETE00(rowVo);
			iTotCnt++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPY_ALDEYN.size(); i++) {

			rowVo = (Map) dsPY_ALDEYN.get(i);
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
	
}
