/**
 * core.erp.tmm.service.impl.PRPA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PRPA0030Controller - 제작명세서 - 제작명세서
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link PRPA0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.24	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PRPA0030Dao")
public class PRPA0030Dao extends CmmBaseDAO {

	/**
	 * 제작 결산관리 실적집계표(매체별 분류)
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PRPA0030.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 결산관리 실적집계표(매체별 분류) - 유비리포트
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PRPA0030.PRINT00", searchVo);

	}
	
	/**
	 * 제작 결산관리 실적집계표(매체별 분류) - 유비리포트 년월
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PRPA0030.PRINT01", searchVo);

	}

}
