/**
 * core.erp.wfm.service.impl.WFMA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMA0020Dao - 경조금 신청 등록 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	정한균
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	정한균			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMA0020Dao")
public class WFMA0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  경조금 신청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMA0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  경조금 신청 결재 SEQ 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMA0020.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  경조금 결재 헤더 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("WFMA0020.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  경조금 신청 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map dataVo) throws Exception {
	
		return delete("WFMA0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  경조금 신청 결재헤더 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map dataVo) throws Exception {
	
		return delete("WFMA0020.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  경조금 신청 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMA0020.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  경조금 신청 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMA0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  경조금 신청 결재헤더  삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("WFMA0020.DELETE01", dataVo);
		
	}

}
