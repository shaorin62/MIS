/**
 * core.erp.hrm.service.impl.HRMD0020Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMD0020Dao - 인원현황(직급별/직군별) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	박철영
 * @since	2016.08.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	박철영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMD0020Dao")
public class HRMD0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  공통코드상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMD0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  인사기본정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HRMD0020.SEARCH01", searchVo);

	}

}
