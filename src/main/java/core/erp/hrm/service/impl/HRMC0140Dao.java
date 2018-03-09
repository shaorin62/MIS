/**
 * core.erp.hrm.service.impl.HRMC0140Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMC0140Dao - 부서별사원정보 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.07	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMC0140Dao")
public class HRMC0140Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부서정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 부서정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMC0140.SEARCH00", searchVo);

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
	
		return list("HRMC0140.SEARCH01", searchVo);

	}

}
