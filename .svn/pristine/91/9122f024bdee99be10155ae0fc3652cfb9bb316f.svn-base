package core.erp.evm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	EVMC0050Dao - 조직평가현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.25	김석영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("EVMC0050Dao")
public class EVMC0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  조직평가현황 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("EVMC0050.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  종합평가 결과표 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("EVMC0050.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 *  종합평가 결과표(인원수 대비 배분율) 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("EVMC0050.SEARCH03", searchVo);

	}

	/**
	 * <pre>
	 *  평가점수등급환산표 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("EVMC0050.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  조직평가현황 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("EVMC0050.UPDATE00", dataVo);
		
	}
	
}
