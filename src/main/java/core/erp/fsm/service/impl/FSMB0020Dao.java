/**
 * core.erp.tmm.service.impl.FSMB0020Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0020Dao - 자산 변동 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	오혜성
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMB0020Dao")
public class FSMB0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자산 변동 관리 테이블 조회
	 * @param paramMap - 조회 파라미터
	 * @return 자산 변동 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMB0020.SEARCH00", searchVo);

	}
	

	/**
	 * <pre>
	 *  자산 변동 관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMB0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  자산 변동 관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FSMB0020.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  자산 변동 관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("FSMB0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  자산 변동 승인
	 * @param paramMap - 조회 파라미터
	 * @return 자산 변동 승인 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPERMIT00(Map dataVo) throws Exception {
	
		return insert("FSMB0020.PERMIT00", dataVo);

	}
	/**
	 * <pre>
	 *  자산 변동 승인 취소
	 * @param paramMap - 조회 파라미터
	 * @return 자산 변동 취소 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processCANCEL00(Map searchVo) throws Exception {
	
		return insert("FSMB0020.CANCEL00", searchVo);

	}
	/**
	 * <pre>
	 *  자산등록 전표 처리(이익)
	 * @param paramMap - 조회 파라미터
	 * @return 이익 전표 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
	
		return insert("FSMB0020.PROC00", searchVo);

	}
	/**
	 * <pre>
	 *  자산등록 전표 처리(손실)
	 * @param paramMap - 조회 파라미터
	 * @return 손실 전표 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map searchVo) throws Exception {
	
		return insert("FSMB0020.PROC01", searchVo);

	}
	/**
	 * <pre>
	 *  자산등록 전표 처리-자본적지출 자동전표처리
	 * @param paramMap - 조회 파라미터
	 * @return 자본적 지출 전표 처리 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC10(Map searchVo) throws Exception {
	
		return insert("FSMB0020.PROC10", searchVo);

	}
	
}
