/**
 * core.erp.hrm.service.impl.WFMB0050Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMB0050Dao - 학자금신청서 DAO 클래스
 * </pre>
 * 
 * @author	전종원
 * @since	2016.09.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.12	전종원		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMB0050Dao")
public class WFMB0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  학자금신청 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMB0050.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  학자금신청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMB0050.SEARCH01", searchVo);
	}
		
	/**
	 * <pre>
	 *  학자금신청 헤더 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		
		return insert("WFMB0050.SAVE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  학자금신청 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("WFMB0050.SAVE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  학자금신청 헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMB0050.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  학자금신청 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("WFMB0050.DELETE01", dataVo);
		
	}

}
