/**
 * core.erp.pay.service.impl.PAYC0280Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYC0280Dao - 항목별조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.08.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.01	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYC0280Dao")
public class PAYC0280Dao extends CmmBaseDAO {

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
	
		return list("PAYC0280.SEARCH00", searchVo);

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
	
		return list("PAYC0280.SEARCH01", searchVo);

	}

}
