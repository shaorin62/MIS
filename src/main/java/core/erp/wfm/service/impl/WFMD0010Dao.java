/**
 * core.erp.hrm.service.impl.WFMD0010Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMD0010Dao - 차량관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김용만
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김용만		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMD0010Dao")
public class WFMD0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  차량관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMD0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  차량관리 전월데이터 유무 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 차량관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("WFMD0010.SEARCH01", searchVo);

	}	
	
	
	/**
	 * <pre>
	 *  차량관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("WFMD0010.SAVE00", dataVo);
	}
	

	/**
	 * <pre>
	 *  차량관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMD0010.UPDATE00", dataVo);
	}
	
	/**
	 * <pre>
	 *  차량관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMD0010.DELETE00", dataVo);
	}

}
