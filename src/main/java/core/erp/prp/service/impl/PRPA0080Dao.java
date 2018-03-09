/**
 * core.erp.tmm.service.impl.PRPA0080Dao.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PRPA0080Controller - 제작 실적집계 제작종류별
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.27
 * @version	1.0
 * @see		{@link PRPA0080}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.28	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PRPA0080Dao")
public class PRPA0080Dao extends CmmBaseDAO {

	/**
	 * 제작 결산관리 실적집계표(제작 종류별 분류)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PRPA0080.SEARCH00", searchVo);

	}

	/**
	 * 제작 결산관리 실적집계표(제작 종류별 분류) - 유비리포트
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PRPA0080.PRINT00", searchVo);

	}
	
	/**
	 * 제작 결산관리 실적집계표(제작 종류별 분류) - 유비리포트 년월
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PRPA0080.PRINT01", searchVo);

	}
}
