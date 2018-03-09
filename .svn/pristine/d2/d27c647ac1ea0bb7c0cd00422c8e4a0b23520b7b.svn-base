/**
 * core.erp.hrm.service.impl.HRMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMA0030Dao - 조직개편관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.21	고민주		Initial Created.
 * 2016.12.08	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMA0030Dao")
public class HRMA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부서변경 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 부서변경 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("HRMA0030.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  인사변경 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사변경 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("HRMA0030.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  부서변경 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("HRMA0030.UPDATE00", dataVo);

	}

	/**
	 * <pre>
	 *  인사변경 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {

		return update("HRMA0030.UPDATE01", dataVo);

	}

}
