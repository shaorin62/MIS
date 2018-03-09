/**
 * core.erp.tmm.service.impl.PRPA0120Dao.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PRPA0120Controller - 제작 실적집계 업종별 업종상세 집계
 * </pre>
 *
 * @author	오세훈
 * @since	2016.11.25
 * @version	1.0
 * @see		{@link PRPA0120}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PRPA0120Dao")
public class PRPA0120Dao extends CmmBaseDAO {

	/**
	 * 제작 결산관리 실적집계표(모델료집계)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PRPA0120.SEARCH00", searchVo);

	}


	/**
	 * 제작 결산관리 실적집계표(모델료집계) - 유비리포트
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PRPA0120.PRINT00", searchVo);

	}
	
	/**
	 * 제작 결산관리 실적집계표(모델료집계) - 유비리포트 년월
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PRPA0120.PRINT01", searchVo);

	}
}
