package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0110Dao - PY_RTPSDC 테이블 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	김준수
 * @since	2016. 9. 8.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 8.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("PAYF0110Dao")
public class PAYF0110Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0110.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYF0110.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		return list("PAYF0110.PRINT00", searchVo);

	}
	
	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
		return list("PAYF0110.PRINT01", searchVo);

	}


	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE00(Map dataVo) throws Exception {
		return update("PAYF0110.UPDATE00", dataVo);

	}

	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE01(Map dataVo) throws Exception {
		return update("PAYF0110.UPDATE01", dataVo);

	}

	/**
	 * <pre>
	 *  퇴직연금납입금 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
		return insert("PAYF0110.PROC00", searchVo);

	}

	/**
	 * <pre>
	 *  결재일련번호 채번 반환
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 결재 SEQ 조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {
		return list("PAYF0110.SEARCH99", searchVo);

	}

	/**
	 * <pre>
	 *  전자결재 연동자료 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE99(Map dataVo) throws Exception {
		return insert("PAYF0110.SAVE99", dataVo);

	}
}
