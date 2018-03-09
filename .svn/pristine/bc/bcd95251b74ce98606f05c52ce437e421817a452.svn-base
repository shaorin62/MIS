/**
 * core.erp.tmm.service.impl.FSMF0010Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMF0010Dao - 건설중 자산실사 조회 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMF0010Dao")
public class FSMF0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  건설중 자산대체 헤더 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건설중 자산대체 데이터 목록 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMF0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  건설중 자산대체 디테일 조회 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 건설중 자산대체 디테일 데이터 목록 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMF0010.SEARCH01", searchVo);

	}
		

	/**
	 * <pre>
	 *  자산대체 전표 삭제 처리
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSLIPDELETE00(Map dataVo) throws Exception {
	
		return insert("FSMF0010.SLIPDELETE00", dataVo);

	}
	
	
	@SuppressWarnings("rawtypes")
	public Object processSLIP00(Map dataVo) throws Exception {

		return insert("FSMF0010.SLIP00", dataVo);

	}


	

}
