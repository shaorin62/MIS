/**
 * core.erp.pay.service.impl.PAYB0050Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0050Dao - 성과상여등록 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
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

@Repository("PAYB0050Dao")
public class PAYB0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  상여율 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 상여율 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYB0050.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  개인별성과상여금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 직급별상여율 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PAYB0050.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  공통코드의 성과상여 기준값 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 평가등급별상여율 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PAYB0050.SEARCH02", searchVo);

	}
	/**
	 * <pre>
	 *  상여처리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 지급공제관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {
	
		return insert("PAYB0050.PROC00", dataVo);
	}
	/**
	 * <pre>
	 *  개인별성과상여금 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYB0050.SAVE00", dataVo);

	}
	/**
	 * <pre>
	 *  개인별성과상여금 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 결과
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE00(Map dataVo) throws Exception {
	
		return update("PAYB0050.UPDATE00", dataVo);

	}
	/**
	 * <pre>
	 *  개인별성과상여금 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYB0050.DELETE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  성과상여율 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PAYB0050.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  공통코드의 성과상여 기준값 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("PAYB0050.SAVE02", dataVo);

	}

}
