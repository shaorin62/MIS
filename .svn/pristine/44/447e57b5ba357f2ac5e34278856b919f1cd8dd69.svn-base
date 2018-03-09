package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMB0080Dao - 인사기록변경승인 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	박철영
 * @since	2016.07.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.08	박철영		Initial Created.
 * 2016.08.24	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMB0080Dao")
public class HRMB0080Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인사기록변경요청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기록변경요청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("HRMB0080.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  인사기록변경요청 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("HRMB0080.UPDATE00", dataVo);

	}

	/**
	 * <pre>
	 *  work 알림 저장
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processWORKSAVE00(Map dataVo) throws Exception {
		return update("HRMB0080.WORKSAVE00", dataVo);

	}

}
