/**
 * core.erp.tmm.service.impl.FSMB0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0020Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0020ServiceImpl - 자산 변동 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0020Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMB0020Service")
public class FSMB0020ServiceImpl extends EgovAbstractServiceImpl implements FSMB0020Service {

	/**
	 * 자산 변동 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0020Dao")
	private FSMB0020Dao dao;

	/**
	 * 자산 변동 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 변동 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	

	/**
	 * 자산 변동 테이블 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_ASCHXM     = (List) saveData.get("dsFS_ASCHXM");  
		List dsFS_ASCHXM_Del = (List) saveData.get("dsFS_ASCHXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_ASCHXM_Del.size(); i++) {

        	rowVo = (Map) dsFS_ASCHXM_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
	/**
	 * 자산 변동 승인
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 변동 승인 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processPERMIT00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM     = (List) saveData.get("dsFS_ASCHXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);

			dao.processPERMIT00(rowVo);
		}

	
    }
	/**
	 * 자산 변동 승인 취소
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 변동 승인 취소 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public void processCANCEL00(Map saveData) throws Exception {

		Map rowVo = null;
		int rowType = 0;

		List dsFS_ASCHXM     = (List) saveData.get("dsFS_ASCHXM");  

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_ASCHXM.size(); i++) {

			rowVo = (Map) dsFS_ASCHXM.get(i);

			dao.processCANCEL00(rowVo);


		}

    }
	/**
	 * 자산등록 전표 처리(이익)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 이익 전표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM_SLIP", dao.processPROC00(saveData));
		return returnMap;

    }
	/**
	 * 자산등록 전표 처리(손실)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 이익 전표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM_SLIP", dao.processPROC01(saveData));
		return returnMap;

    }
	/**
	 * 자산등록 전표 처리-자본적지출 자동전표처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 이익 전표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC10(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHXM_SLIP", dao.processPROC10(saveData));
		return returnMap;

    }
	
}
