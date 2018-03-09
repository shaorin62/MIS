package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMB0020Dao - 개인신상변경요청 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.12	고민주		Initial Created.
 * 2016.08.23	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMB0020Dao")
public class HRMB0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인사기본정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("HRMB0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  변경요청내역 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 변경요청내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("HRMB0020.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  변경요청건수 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 변경요청건수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("HRMB0020.SEARCH03", searchVo);

	}

	/**
	 * <pre>
	 *  파일 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 변경요청건수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("HRMB0020.SEARCH04", searchVo);

	}

	/**
	 * <pre>
	 *  인사기본정보 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("HRMB0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  인사기록변경요청 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("HRMB0020.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  HRMB0010 work 알림 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processWORKSAVE00(Map dataVo) throws Exception {
		return insert("HRMB0020.WORKSAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  HRMB0010 work 알림 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processWORKDEL00(Map dataVo) throws Exception {
		return insert("HRMB0020.WORKDEL00", dataVo);

	}

	/**
	 * <pre>
	 *  인사기본정보 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("HRMB0020.UPDATE00", dataVo);

	}

	/**
	 * <pre>
	 *  인사기본정보 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("HRMB0020.DELETE00", dataVo);

	}

}
