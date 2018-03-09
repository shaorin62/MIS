/**
 * core.erp.hrm.service.impl.HRMK0020Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMK0020Dao - 증명서신청승인 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	jar
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	jar		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMK0020Dao")
public class HRMK0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  증명서발급 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서발급 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMK0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  증명서발급 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HRMK0020.UPDATE00", dataVo);
		
	}

	
	/**
	 * <pre>
	 *  work 알림 저장 
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		
		return update("HRMK0020.SAVE01", dataVo);
	}
}
