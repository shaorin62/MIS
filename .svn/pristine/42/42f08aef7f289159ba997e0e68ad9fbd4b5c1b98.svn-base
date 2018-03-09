/**
 * core.erp.hrm.service.impl.WFMG0040Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMG0040Dao - 연수지원관리 DAO 클래스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.10.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.04	김혜림		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMG0040Dao")
public class WFMG0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연수지원내역 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연수지원내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMG0040.SEARCH00", searchVo);
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
	public String processSEARCH01(Map searchVo) throws Exception {
		return (String)selectByPk("WFMG0040.SEARCH01", searchVo);
		
	}

	/**
	 * <pre>
	 *  연수지원관리 저장
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 저장 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		String sTRSP_SEQN= (String)insert("WFMG0040.SAVE00", dataVo);
		return sTRSP_SEQN;
		
	}
	

	/**
	 * <pre>
	 *  연수지원관리 수정 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 수정 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("WFMG0040.UPDATE00", dataVo);
		
	}
	

	/**
	 * <pre>
	 *  연수지원관리 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMG0040.DELETE00", dataVo);
		
	}
	


}
