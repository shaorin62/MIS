/**
 * core.erp.tmm.service.impl.FSMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMA0030Dao - 감가상각률 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	오혜성
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMA0030Dao")
public class FSMA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  감가상각률 관리 테이블 조회 및 화면 년월 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 감가상각률 관리 데이터 목록, 화면 년월 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMA0030.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMA0030.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  감가상각률 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00_SAVE00(Map dataVo) throws Exception {
		
		return insert("FSMA0030.SEARCH00_SAVE00", dataVo);

	}
	

	/**
	 * <pre>
	 *  감가상각률 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		
		return insert("FSMA0030.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  감가상각률 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("FSMA0030.SAVE01", dataVo);

	}	

	/**
	 * <pre>
	 *  감가상각률 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FSMA0030.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  급여코드 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("FSMA0030.DELETE00", dataVo);
		
	}

}
