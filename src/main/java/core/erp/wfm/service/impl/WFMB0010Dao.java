/**
 * core.erp.wfm.service.impl.WFMB0010Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMB0010Dao - 학자금기준 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	전종원
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	전종원		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMB0010Dao")
public class WFMB0010Dao extends CmmBaseDAO {


	/**
	 * <pre>
	 *  학자금기준 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금기준 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMB0010.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  학자금코드 사용여부 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금기준 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCHSCEXCODE(Map searchVo) throws Exception {
		
		return (String) selectByPk("WFMB0010.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  학자금코드 사용여부 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 학자금기준 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCHSCEXCODE2(Map searchVo) throws Exception {
		
		return (String) selectByPk("WFMB0010.SEARCH02", searchVo);
	}

	/**
	 * <pre>
	 *  학자금기준 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("WFMB0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  학자금기준 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("WFMB0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  학자금기준 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("WFMB0010.DELETE00", dataVo);
		
	}

}
