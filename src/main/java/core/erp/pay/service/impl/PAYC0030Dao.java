/**
 * core.erp.pay.service.impl.PAYC0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYC0030Dao - 급여변동내역 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYC0030Dao")
public class PAYC0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  급여 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYC0030.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  급여상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYC0030.SEARCH01", searchVo);

	}
	/**
	 * <pre>
	 * 급여변동사항 공제항목을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("PAYC0030.SEARCH02", searchVo);
	}

	/**
	 * <pre>
	 * 급여변동사항 기타항목을 조회한다.
	 * </pre>
	 *
	 * @param paramMap - 조회조건 map 객체
	 * @return 급여 데이터 목록
	 * @throws Exception - 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("PAYC0030.SEARCH03", searchVo);
	}
}
