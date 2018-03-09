/**
 * core.erp.tmm.service.impl.FSMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMA0010Dao - 자산 분류 관리 프로그램 데이터처리 DAO 클래스
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

@Repository("FSMA0010Dao")
public class FSMA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자산 분류 관리 테이블 조회 및 상각률 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록 및 상각률 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMA0010.SEARCH00", searchVo);

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMA0010.SEARCH01", searchVo);

	}
	
	

	/**
	 * <pre>
	 *  자산 분류 관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMA0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  자산 분류 관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FSMA0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  자산 분류 관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {

		return delete("FSMA0010.DELETE00", dataVo);
		
	}

}
