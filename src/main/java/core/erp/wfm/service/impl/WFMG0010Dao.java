/**
 * core.erp.hrm.service.impl.WFMG0010Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMG0010Dao - 연수신청 및 내역 조회 데이터처리 DAO 클래스
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

@Repository("WFMG0010Dao")
public class WFMG0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연수신청 및 내역 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연수신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMG0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  결재 SEQ 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연수지원신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMG0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  연수신청 및 내역 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMG0010.DELETE00", dataVo);
		
	}

}
