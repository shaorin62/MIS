/**
 * core.erp.hrm.service.impl.HRME0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRME0030Dao - 인사발령변경 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.25	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRME0030Dao")
public class HRME0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  발령상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 발령상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("HRME0030.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  발령상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 발령상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("HRME0030.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  발령상세 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("HRME0030.UPDATE00", dataVo);

	}
	/**
	 * <pre>
	 *  발령관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {

		return list("HRME0030.PROC00", searchVo);

	}
	/**
	 * <pre>
	 *  발령관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map searchVo) throws Exception {

		return list("HRME0030.PROC01", searchVo);

	}
}
