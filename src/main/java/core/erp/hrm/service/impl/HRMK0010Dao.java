/**
 * core.erp.hrm.service.impl.HRMK0010Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMK0010Dao - 증명서신청 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	jar
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	jar		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMK0010Dao")
public class HRMK0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  증명서발급 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서발급 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  발령상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 발령상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  선택한 발령상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 발령상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  증명서 출력 내용 조회 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서 출력 내용 조회 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH03", searchVo);

	}

	/**
	 * <pre>
	 *  증명서 출력 내용 조회 - 사업장정보
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서 출력 내용 조회 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH04", searchVo);

	}
	
	/**
	 * <pre>
	 *  증명서 출력 내용 조회 - 갑종근로소득
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서 출력 내용 조회 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
	
		return list("HRMK0010.SEARCH05", searchVo);

	}
	
	/**
	 * <pre>
	 *  증명서발급 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HRMK0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  증명서발급 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HRMK0010.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  발령 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("HRMK0010.UPDATE01", dataVo);
	}
	
	/**
	 * <pre>
	 *  증명서발급 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE02(Map dataVo) throws Exception {
	
		return insert("HRMK0010.UPDATE02", dataVo);
	} 


	/**
	 * <pre>
	 *  인쇄 출력유무 저장
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE03(Map dataVo) throws Exception {
	
		return insert("HRMK0010.UPDATE03", dataVo);
	} 
	
	/**
	 * <pre>
	 *  증명서발급 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HRMK0010.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  work 알림 저장 
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		
		return update("HRMK0010.SAVE02", dataVo);
	}

}
