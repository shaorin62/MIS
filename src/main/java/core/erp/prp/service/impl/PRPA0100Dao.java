/**
 * core.erp.tmm.service.impl.PRPA0100Dao.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PRPA0100Controller - 제작 실적집계 제작건별 상세 분류
 * </pre>
 *
 * @author	오세훈
 * @since	2016.11.21
 * @version	1.0
 * @see		{@link PRPA0100}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.21	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PRPA0100Dao")
public class PRPA0100Dao extends CmmBaseDAO {

	/**
	 * 제작 결산관리 실적집계표(제작건별 상세 분류)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PRPA0100.SEARCH00", searchVo);

	}

	/**
	 * 제작 결산관리 실적집계표(제작건별 상세 분류) - 유비리포트
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PRPA0100.PRINT00", searchVo);

	}
	
	/**
	 * 제작 결산관리 실적집계표(제작건별 상세 분류) - 유비리포트 년월
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PRPA0100.PRINT01", searchVo);

	}
}
