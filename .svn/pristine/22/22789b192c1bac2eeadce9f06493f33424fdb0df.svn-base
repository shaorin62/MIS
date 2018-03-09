/**
 * core.erp.pay.service.impl.PAYC0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYC0010Dao - 급여지급현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.29	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYC0010Dao")
public class PAYC0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  급여 수당 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("PAYC0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  급여상세(개인) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYC0010.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  급여상세(부서) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("PAYC0010.SEARCH02", searchVo);

	}

}
