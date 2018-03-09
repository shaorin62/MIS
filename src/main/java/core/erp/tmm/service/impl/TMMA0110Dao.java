/**
 * core.erp.tmm.service.impl.TMMA0110Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMA0110Dao - 자료조회관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.08.02
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMA0110Dao")
public class TMMA0110Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자료조회양식 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회양식 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0110.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  자료조회조건 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회조건 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("TMMA0110.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  권한그룹 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 권한그룹 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("TMMA0110.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("TMMA0110.SEARCH03", searchVo);

	}

	/**
	 * <pre>
	 *  공통코드상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("TMMA0110.SEARCH04", searchVo);

	}

	/**
	 * <pre>
	 *  자료조회양식 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMA0110.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  자료조회조건 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("TMMA0110.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  권한그룹 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("TMMA0110.SAVE02", dataVo);

	}

	/**
	 * <pre>
	 *  자료조회양식 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMA0110.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  자료조회조건 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("TMMA0110.UPDATE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  자료조회양식 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMA0110.DELETE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  자료조회조건 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("TMMA0110.DELETE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  권한그룹 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("TMMA0110.DELETE02", dataVo);
		
	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {
	
		return delete("TMMA0110.DELETE03", dataVo);
		
	}

	/**
	 * <pre>
	 *  공통코드상세 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE04(Map dataVo) throws Exception {
	
		return delete("TMMA0110.DELETE04", dataVo);
		
	}

}
