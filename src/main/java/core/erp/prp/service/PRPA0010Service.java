/**
 * core.erp.pcm.service.PRPA0010Service.java - <Created by Code Template generator>
 */
package core.erp.prp.service;

import java.util.Map;

/**
 * <pre>
 *	PRPA0010Service - 제작 결산관리 실적집계표
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.24
 * @version	1.0
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
 
public interface PRPA0010Service {

	/**
	 * <pre>
	 *  제작 실접집계표 매체별분류)
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
	 *  제작 실접집계표 실적 누계
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 *  제작 실접집계표 실적 누계2
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 *  제작 실접집계표 실적 누계3
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 *  제작 실접집계표 실적 상세 팝업
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH10(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 *  제작 실접집계표 실적 상세 팝업2
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH20(Map searchVo) throws Exception ;	
	
	/**
	 * <pre>
	 *  제작 실접집계표 실적 상세 팝업3
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH30(Map searchVo) throws Exception ;	
	
}