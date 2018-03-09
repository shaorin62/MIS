/**
 * core.erp.tmm.service.impl.FSMB0030P01Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0030P01Dao - 자산 일괄 변동 관리 프로그램 데이터처리 DAO 클래스
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

@Repository("FSMB0030P01Dao")
public class FSMB0030P01Dao extends CmmBaseDAO {

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
	
		return list("FSMB0030P01.SEARCH00", searchVo);

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
	public String processSEARCH01(Map searchVo) throws Exception {

		return (String) selectByPk("FSMB0030P01.SEARCH01", searchVo);

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
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FSMB0030P01.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  자산일괄등록 전표 헤더처리(처분 손익)
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 전표 헤더처리(처분 손익)) 처리목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("FSMB0030P01.SAVE01", dataVo);

	}	
	
	/**
	 * <pre>
	 *  자산일괄등록 승인처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산일괄등록 승인처리
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPERMIT00(Map dataVo) throws Exception {
	
		return update("FSMB0030P01.PERMIT00", dataVo);

	}	

}
