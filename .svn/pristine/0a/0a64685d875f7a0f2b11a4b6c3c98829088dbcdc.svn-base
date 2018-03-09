package core.erp.evm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	EVMB0020Dao - 목표설정서 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.05	김석영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("EVMB0020Dao")
public class EVMB0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  목표설정서 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("EVMB0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  평가대상자관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("EVMB0020.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  인사평가대상자 테이블 목표설정제출취
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {		
		update("EVMB0020.PROC00", searchVo);	
	}
	
	/**
	 * <pre>
	 *  인사평가대상자 테이블 목표설정제출취소 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC01(Map searchVo) throws Exception {		
		update("EVMB0020.PROC01", searchVo);	
	}
	
}
