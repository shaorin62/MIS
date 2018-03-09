/**
 * core.erp.fam.service.impl.FAMB0030P04Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMB0030P04Dao - 예산잔액조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMB0030P04Dao")
public class FAMB0030P04Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  예산잔액 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 예산잔액 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMB0030P04.SEARCH00", searchVo);

	}
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FAMB0030P04.SEARCH01", searchVo);

	}
	
}
