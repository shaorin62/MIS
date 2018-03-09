/**
 * core.erp.pay.service.impl.PAYB0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0010Dao - 급여기본내역관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.22
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.22	박철영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYB0010Dao")
public class PAYB0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  급여기본정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("PAYB0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  지급공제관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 지급공제관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("PAYB0010.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  수당공제코드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 수당공제코드 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("PAYB0010.SEARCH02", searchVo);

	}

	/**
	 * <pre>
	 *  개인별기본급 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 개인별기본급 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return list("PAYB0010.SEARCH03", searchVo);

	}

	/**
	 * <pre>
	 *  급여조정 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여조정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("PAYB0010.SEARCH04", searchVo);

	}

	/**
	 * <pre>
	 *  기타소득 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여조정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		return list("PAYB0010.SEARCH05", searchVo);

	}

	/**
	 * <pre>
	 *  급여기본정보 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("PAYB0010.UPDATE00", dataVo);

	}
}
