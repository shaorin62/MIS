/**
 * core.erp.hrm.service.impl.WFMG0020Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMG0020Dao - 연수지원신청서 DAO 클래스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김혜림		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMG0020Dao")
public class WFMG0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연수지원신청 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMG0020.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  연수지원신청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연수지원신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMG0020.SEARCH01", searchVo);
	}
		
	
	
	/**
	 * <pre>
	 * 근속년수 조회
	 * </pre>
	 * @param paramMap - 근속발생일자, 연수일자
	 * @return 근속년수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH02(Map searchVo) throws Exception {
		return (String)selectByPk("WFMG0020.SEARCH02", searchVo);
		
	}

	/**
	 * <pre>
	 *  연수지원신청 헤더 저장
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map dataVo) throws Exception {
	
		return delete("WFMG0020.SAVE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  연수지원신청 테이블 저장
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map dataVo) throws Exception {
	
		return delete("WFMG0020.SAVE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  연수지원신청 결재헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMG0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  연수지원신청 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("WFMG0020.DELETE01", dataVo);
		
	}

	
	
	/**
	 * <pre>
	 * 연수지원 신청금액 공통코드 조회
	 * </pre>
	 * @param paramMap
	 * @return 연수지원 신청금액 공통코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("WFMG0020.SEARCH03", searchVo);
		
	}

}
