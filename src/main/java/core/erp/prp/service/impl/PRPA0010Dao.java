/**
 * core.erp.tmm.service.impl.PRPA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.prp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PRPA0010Controller - 제작명세서 - 제작명세서
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.24
 * @version	1.0
 * @see		{@link PRPA0010}
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

@Repository("PRPA0010Dao")
public class PRPA0010Dao extends CmmBaseDAO {

	/**
	 * 제작 결산관리 실적집계표
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH00", searchVo);

	}
	
	
	/**
	 * 제작 결산관리 누계1
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH01", searchVo);

	}
	
	
	/**
	 * 제작 결산관리 누계2
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH02", searchVo);

	}
	
	
	/**
	 * 제작 결산관리 누계3
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH03", searchVo);

	}
	
	/**
	 * 제작 실적집계 상세 내역
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH10", searchVo);

	}
	
	
	/**
	 * 제작 실적집계 상세 내역2
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH20(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH20", searchVo);

	}
	
	
	/**
	 * 제작 실적집계 상세 내역3
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH30(Map searchVo) throws Exception {
	
		return list("PRPA0010.SEARCH30", searchVo);

	}


}
