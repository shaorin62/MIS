/**
 * core.erp.wfm.service.impl.WFMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMA0010Dao - 메시지 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	정한균
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	정한균			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMA0010Dao")
public class WFMA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  경조금 기준 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 기준 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMA0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  경조기준 코드가 사용중인지 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 선택된 경조금 코드의 신청건수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH01(Map searchVo) throws Exception {
	
		return (String) selectByPk("WFMA0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  경조금 기준코드가 해당기간에 존재하는지 검색한다.
	 * </pre>
	 * @param paramMap - 조회 데이터
	 * @return 경조금 코드 수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH02(Map searchVo) throws Exception {
	
		return (String) selectByPk("WFMA0010.SEARCH02", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  경조금 기준 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("WFMA0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  경조금 기준 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMA0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  경조금 기준 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMA0010.DELETE00", dataVo);
		
	}

}
