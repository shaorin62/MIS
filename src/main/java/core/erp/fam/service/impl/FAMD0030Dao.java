/**
 * core.erp.tmm.service.impl.FAMD0030Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMD0030Dao - 메시지 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMD0030Dao")
public class FAMD0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  공통메시지 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMD0030.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  공통메시지 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FAMD0030.SEARCH01", searchVo);

	}	

}
