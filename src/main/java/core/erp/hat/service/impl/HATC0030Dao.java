/**
 * core.erp.hrm.service.impl.HATC0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATC0030Dao - 휴가신청등록 DAO 클래스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATC0030Dao")
public class HATC0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  휴가신청등록 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 휴가신청등록 헤더 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  휴가신청등록 헤더내역  조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 휴가신청등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  휴가신청등록 상세내역  조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 휴가신청 과거내역  목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  휴가신청 과거내역  조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 휴가신청 과거내역  목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 *  연차휴가/의무연차 현황조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연차휴가/의무연차  목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH04", searchVo);
	}
		
	/**
	 * <pre>
	 *  휴가신청등록  결재헤더 저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATC0030.SAVE00", dataVo);
		
	}
		
	/**
	 * <pre>
	 *  휴가신청등록  헤더 저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("HATC0030.SAVE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  상세  저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("HATC0030.SAVE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  결재 헤더 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATC0030.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  헤더 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("HATC0030.UPDATE01", dataVo);
		
	}	
	
	/**
	 * <pre>
	 *  휴가신청등록  상세 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("HATC0030.UPDATE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  결재헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATC0030.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("HATC0030.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  휴가신청등록  상세내역 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("HATC0030.DELETE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  월근태 마감여부 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 월근태 마감여부 조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
	
		return list("HATC0030.SEARCH05", searchVo);

	}	

}
