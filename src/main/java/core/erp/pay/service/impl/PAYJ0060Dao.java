/**
 * core.erp.pay.service.impl.PAYJ0060Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYJ0060Dao - 인건비효율성 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.08.02
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.02	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYJ0060Dao")
public class PAYJ0060Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인건비효율성 부서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인건비효율성 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYJ0060.SEARCH00", searchVo);
	}

	/**
	 * <pre>
	 *  인건비효율성 직급 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인건비효율성 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PAYJ0060.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  인건비효율성 직무 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인건비효율성 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PAYJ0060.SEARCH02", searchVo);
	}	
}
