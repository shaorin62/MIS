/**
 * core.erp.hrm.service.impl.HRME0070Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRME0070Dao - 승진대상자선정 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.17
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRME0070Dao")
public class HRME0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  승진대상자선정 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 승진대상자선정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("HRME0070.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  사원 및 평가등급 정보를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 조회한 사원 및 평가등급 정보
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("HRME0070.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  대상자생성 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 대상자생성 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		return insert("HRME0070.PROC00", searchVo);

	}

	/**
	 * <pre>
	 *  대상자취소 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 대상자취소 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map searchVo) throws Exception {
		return insert("HRME0070.PROC01", searchVo);

	}

	/**
	 * <pre>
	 *  승진자 확정 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 처리결과
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map searchVo) throws Exception {
		
		logger.debug("=========>");
		logger.debug(searchVo.toString());				
		return insert("HRME0070.PROC02", searchVo);

	}

	/**
	 * <pre>
	 *  승진자 확정취소 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 초리결과
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC03(Map searchVo) throws Exception {
		return insert("HRME0070.PROC03", searchVo);

	}

	/**
	 * <pre>
	 *  승진대상자 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("HRME0070.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  승진대상자 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("HRME0070.UPDATE00", dataVo);

	}

	/**
	 * 승진대상자 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("HRME0070.DELETE00", dataVo);

	}


}
