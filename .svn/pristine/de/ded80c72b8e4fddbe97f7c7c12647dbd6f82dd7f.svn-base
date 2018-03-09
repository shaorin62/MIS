/**
 * core.erp.hrm.service.impl.WFMF0010Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMF0010Dao - 전산자원관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김용만
 * @since	2016.09.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.08	김용만		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMF0010Dao")
public class WFMF0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전산자원관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전산자원관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMF0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  전산자원관리 전월데이터 유무 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전산자원관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMF0010.SEARCH01", searchVo);

	}	
	
	/**
	 * <pre>
	 *  전산자원관리 키값 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전산자원관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("WFMF0010.SEARCH02", searchVo);

	}	
		
	
	/**
	 * <pre>
	 *  전산자원관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		String sCOMR_SEQN = (String) insert("WFMF0010.SAVE00", dataVo);
		return sCOMR_SEQN;
	}
	
	/**
	 * <pre>
	 *  전산자원관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("WFMF0010.SAVE01", dataVo);
	}
	

	/**
	 * <pre>
	 *  전산자원관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMF0010.UPDATE00", dataVo);
	}
	
	/**
	 * <pre>
	 *  전산자원관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMF0010.DELETE00", dataVo);
	}
		
	
	/**
	 * <pre>
	 *  전산자원관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("WFMF0010.DELETE01", dataVo);
	}

}
