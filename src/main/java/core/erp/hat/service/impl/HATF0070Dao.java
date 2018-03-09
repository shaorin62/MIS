/**
 * core.erp.hrm.service.impl.HATF0070Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATF0070Dao - 출장여비정산등록 DAO 클래스
 * </pre>
 * 
 * @author	김남호
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김남호		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("HATF0070Dao")
public class HATF0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  출장여비정산등록 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 결재상테조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATF0070.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장여비정산 등록 header select
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장여비정산 등록 header select
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATF0070.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장여비정산 등록 person select
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장여비정산 등록 person select
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HATF0070.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장승인 등록 header select
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장승인 등록 header select
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("HATF0070.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장승인 등록 person select
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장승인 등록 person select
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("HATF0070.SEARCH04", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장여비정산 결재 key 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEQ00(Map searchVo) throws Exception {
	
		return list("HATF0070.SEQ00", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장여비정산 M key 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEQ01(Map searchVo) throws Exception {
	
		return list("HATF0070.SEQ01", searchVo);
	}
	
	/**
	 * <pre>
	 *  출장여비정산 D key 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEQ02(Map searchVo) throws Exception {
	
		return list("HATF0070.SEQ02", searchVo);
	}
		
	/**
	 * <pre>
	 *  출장여비정산등록  결재헤더 저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATF0070.SAVE00", dataVo);
		
	}
		
	/**
	 * <pre>
	 *  출장여비정산등록  헤더 저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("HATF0070.SAVE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록  상세  저장
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("HATF0070.SAVE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록  결재 헤더 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATF0070.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록  헤더 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("HATF0070.UPDATE01", dataVo);
		
	}	
	
	/**
	 * <pre>
	 *  출장여비정산등록  상세 수정
	 * </pre>
	 * @param paramMap - 
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("HATF0070.UPDATE02", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록  결재헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATF0070.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록  헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("HATF0070.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  출장여비정산등록 출장자 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("HATF0070.DELETE02", dataVo);
		
	}

}
