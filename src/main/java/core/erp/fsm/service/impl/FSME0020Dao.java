/**
 * core.erp.tmm.service.impl.FSME0020Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSME0020Dao - 부서별 자산실사 조회 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSME0020Dao")
public class FSME0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부서별 자산실사 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 이동 관리 데이터 목록 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSME0020.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  매장별 자산 콤보 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 이동 관리 데이터 목록 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSME0020.SEARCH01", searchVo);

	}
		

	/**
	 * <pre>
	 *  재물 조사 저장 처리
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return update("FSME0020.UPDATE00", dataVo);

	}

}
