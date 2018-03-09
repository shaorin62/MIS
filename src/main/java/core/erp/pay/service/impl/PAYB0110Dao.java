/**
 * core.erp.pay.service.impl.PAYB0110Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0110Dao - 연차수당관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.24	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYB0110Dao")
public class PAYB0110Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연차수당관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연차수당관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("PAYB0110.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  연차불러오기(퇴직연차) 목록을 조회한다. 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연차불러오기(퇴직연차) 목록을 조회한다. 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("PAYB0110.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  연차수당관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {

		return insert("PAYB0110.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  연차수당관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("PAYB0110.UPDATE00", dataVo);

	}

	/**
	 * <pre>
	 *  퇴직자의 급여기본정보 연차수당금액 갱신
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map dataVo) throws Exception {

		return update("PAYB0110.SAVE01", dataVo);

	}

	/**
	 * <pre>
	 *  연차수당관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("PAYB0110.DELETE00", dataVo);

	}

	/**
	 * <pre>
	 *  연차불러오기시 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		return delete("PAYB0110.DELETE01", dataVo);

	}

}
