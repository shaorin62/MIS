/**
 * core.erp.hrm.service.impl.HRML0010Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRML0010Dao - 근로(연봉)계약대상자 등록 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	kd
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	kd		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRML0010Dao")
public class HRML0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  근로(연봉)계약대상자 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근로(연봉)계약대상자 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRML0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  근로연봉계약 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HRML0010.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  기본급 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		
		return insert("HRML0010.SAVE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  근로연봉계약 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HRML0010.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  근로연봉계약 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HRML0010.DELETE00", dataVo);
		
	}
}
