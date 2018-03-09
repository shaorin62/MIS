/**
 * core.erp.pcm.service.PRPA0100Service.java - <Created by Code Template generator>
 */
package core.erp.prp.service;

import java.util.Map;

/**
 * <pre>
 *	PRPA0100Service - 제작 결산관리 실적집계표(제작건별 상세분류)
 * </pre>
 *
 * @author	오세훈
 * @since	2016.11.21
 * @version	1.0
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
 
public interface PRPA0100Service {

	/**
	 * <pre>
	 *  제작 실적집계표 (제작건별 상세분류)
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 *  제작 실적집계표 (제작건별 상세분류) - 유비리포트
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 *  제작 실적집계표 (제작건별 상세분류) - 유비리포트 년월
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;
	
}