/**
 * core.erp.tmm.service.impl.FSMB0030Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0030Dao - 자산 일괄 변동 관리 프로그램 데이터처리 DAO 클래스
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

@Repository("FSMB0030Dao")
public class FSMB0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  건설중 자산일괄등록 헤더 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 일괄 변동 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMB0030.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  건설중 자산일괄등록 디테일 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건설중 자산일괄등록 디테일 조회 처리 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMB0030.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  자산 일괄 변동 관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("FSMB0030.DELETE00", dataVo);
		
	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 헤더 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 헤더 조회 처리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC00", dataVo);

	}
	/**
	 * <pre>
	 *  이익 매각
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 이익 매각 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC01", dataVo);

	}
	/**
	 * <pre>
	 *  손실 매각
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 이익 매각 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC02", dataVo);

	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(미상각 잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(미상각 잔액) 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC03(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC03", dataVo);

	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(취득가 기말잔액)목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC04(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC04", dataVo);

	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(취득가 기말잔액) 처리목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC05(Map dataVo) throws Exception {
	
		return list("FSMB0030.PROC05", dataVo);

	}
	/**
	 * <pre>
	 *  자산일괄등록 전표 처리(처분 손익)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 처리(처분 손익)) 처리목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC06(Map dataVo) throws Exception {
	
		return insert("FSMB0030.PROC06", dataVo);

	}
	

}
