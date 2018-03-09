/**
 * core.erp.pcm.service.PDMB0010Service.java - <Created by Code Template generator>
 */
package core.erp.pdm.service;

import java.util.Map;

/**
 * <pre>
 *	PDMB0010Controller - 제작 의뢰 등록
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PDMB0010Service {

	/**
	 * <pre>
	 *  제작의뢰서 등록 화면을 조회한다.
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
	 *  콤보 데이터셋을 담기 위한 조회
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
	 *  외주업체 실행예산을 모두 가져온다.
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
	 *  제작의뢰서 실적분배율 등록
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
	 *  제작의뢰서 외주업체 실행예산등록
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
	 *  제작의뢰 내역을 저장한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData, Map saveVo) throws Exception;
	
	
	
	/**
	 * <pre>
	 *  제작의뢰 실적분배율을 저장한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE10(Map saveData) throws Exception;
	
	
	/**
	 * <pre>
	 *  제작의뢰 외주업체 실행예산 등록 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE20(Map saveData) throws Exception;
	
	
	
	/**
	 * <pre>
	 *  제작의뢰서 인쇄 
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
	 *  제작의뢰서 인쇄 
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;
	

	
}