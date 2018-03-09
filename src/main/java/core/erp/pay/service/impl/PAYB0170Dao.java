/**
 * core.erp.pay.service.impl.PAYB0170Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import core.erp.pay.web.PAYB0170Controller;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0170Dao - 급여처리 프로그램 데이터처리 DAO 클래스
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

@Repository("PAYB0170Dao")
public class PAYB0170Dao extends CmmBaseDAO {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYB0170Dao.class);

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

		return list("PAYB0170.SEARCH00", searchVo);

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

		return list("PAYB0170.SEARCH01", searchVo);

	}
	/**
	 * <pre>
	 *  급여처리 공제정보 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여처리 공제정보 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {

		return list("PAYB0170.SEARCH02", searchVo);

	}
	/**
	 * <pre>
	 *  인사변동사항 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사변동사항 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {

		return list("PAYB0170.SEARCH03", searchVo);

	}
	/**
	 * <pre>
	 *  급여일지 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사변동여부
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {

		return list("PAYB0170.SEARCH04", searchVo);

	}
	/**
	 * <pre>
	 *  급여일지 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사변동여부
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {

		return list("PAYB0170.SEARCH05", searchVo);

	}
	/**
	 * <pre>
	 *  급여 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {

		return insert("PAYB0170.PROC00", dataVo);
	}
	/**
	 * <pre>
	 *  급여 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC01(Map dataVo) throws Exception {

		return insert("PAYB0170.PROC01", dataVo);
	}


	/**
	 * <pre>
	 *  급여 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC02(Map dataVo) throws Exception {

		return insert("PAYB0170.PROC02", dataVo);
	}
	/**
	 * <pre>
	 *  급여대상자 테이블 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC03(Map dataVo) throws Exception {

		logger.debug("======>PAYB0170.PROC03 실행");
		return insert("PAYB0170.PROC03", dataVo);
	}
	
}
