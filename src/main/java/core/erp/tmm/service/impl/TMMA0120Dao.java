/**
 * core.erp.tmm.service.impl.TMMA0120Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMA0120Dao - 자료조회처리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.08.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMA0120Dao")
public class TMMA0120Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자료조회양식 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회양식 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0120.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  자료조회조건 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회조건 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("TMMA0120.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  자료조회조건 쿼리 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회조건 쿼리 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return selectByPk("TMMA0120.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 *  자료조회조건 쿼리 실행
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자료조회조건 쿼리 실행 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("TMMA0120.SEARCH03", searchVo);

	}

}
