/**
 * core.erp.tmm.service.impl.FSMB0030ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMB0030Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMB0030ServiceImpl - 자산 일괄 변동 목록 관리 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMB0030Service}
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

@Service("FSMB0030Service")
public class FSMB0030ServiceImpl extends EgovAbstractServiceImpl implements FSMB0030Service {

	/**
	 * 자산 일괄 변동 목록 관리 DAO class inject.
	 */
	@Resource(name = "FSMB0030Dao")
	private FSMB0030Dao dao;

	/**
	 * 자산 일괄 변동 목록 헤더를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산 일괄 변동 헤더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM_M", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	/**
	 * 건설중 자산일괄등록 디테일 조회 처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 건설중 자산일괄등록 디테일 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * FSMB0030 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_ASCHFM     = (List) saveData.get("dsFS_ASCHFM");  

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_ASCHFM.size(); i++) {

        	rowVo = (Map) dsFS_ASCHFM.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}
	
		return deleteCount + updateCount;

	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 헤더 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 헤더 조회 처리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC00(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  이익 매각
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 이익 매각 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC01(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  손실 매각
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 이익 매각 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC02(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(미상각 잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(미상각 잔액) 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC03(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC03(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(취득가 기말잔액)목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC04(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC04(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(취득가 기말잔액) 처리목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC05(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC05(dataVo));
		return returnMap;

    }
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(처분 손익)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(처분 손익)) 처리목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC06(Map dataVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASCHFM", dao.processPROC06(dataVo));
		return returnMap;

    }
	
	
}
