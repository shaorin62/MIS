/**
 * core.erp.tmm.service.impl.FSMB0010Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0010Dao - 자산등록 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	오혜성
 * @since	2016.06.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.29	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMB0010Dao")
public class FSMB0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자산등록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  자산등록 변동이력 탭 조회
	 *  자산등록 이동이력 탭 조회
	 *  자산등록 수리이력 탭 조회
	 *  자산등록 상각이력 탭 조회
	 *  자산등록 분할내역 탭 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 탭 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH01", searchVo);

	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH02", searchVo);

	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH03", searchVo);

	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH04", searchVo);

	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH05", searchVo);

	}
	/**
	 * <pre>
	 * 	화면의 상각률 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 상각률 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
	
		return list("FSMB0010.SEARCH10", searchVo);

	}
	
	

	/**
	 * <pre>
	 *  자산등록 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMB0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  자산등록 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FSMB0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  자산등록 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("FSMB0010.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  자산등록 전표 헤더처리
	 *  자산등록 전표 차변 처리
	 *  자산등록 전표 대변 처리
	 *  자산등록 전표 차변 처리(부가가치세 매입 세액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map dataVo) throws Exception {
	
		return update("FSMB0010.PROC00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map dataVo) throws Exception {
	
		return update("FSMB0010.PROC01", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map dataVo) throws Exception {
	
		return update("FSMB0010.PROC02", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processPROC03(Map dataVo) throws Exception {
	
		return update("FSMB0010.PROC03", dataVo);

	}
	

	/**
	 * <pre>
	 *  자산일괄등록 저장(FSMB0010P03)
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
	
		return insert("FSMB0010P03.SAVE00", dataVo);

	}
}
