/**
 * core.erp.pcm.service.PDMC0030Service.java - <Created by Code Template generator>
 */
package core.erp.pdm.service;

import java.util.Map;

/**
 * <pre>
 *	PDMC0030Controller - 제작 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PDMC0030Service {

	/**
	 * <pre>
	 *  제작견적서 -제작용 상단을 조회한다.
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
	 *  제작견적서 -하단 견적 탭 조회
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
	 *  제작견적서 -하단 견적상세 조회
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
	 *  제작견적서 -하단 외주정산 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03_1(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 *  제작견적서 -하단 외주정산 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03_2(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 *  제작견적서 -하단 제작의뢰 탭 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 *  제작견적서 -하단 제작물 파일 탭 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH05(Map searchVo) throws Exception ;
	
	
	
	/**
	 * <pre>
	 *  제작견적서 -제작종류 콤보 데이터 가져오기
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH07(Map searchVo) throws Exception ;
	

	/**
	 * **********************************************************
	 * <pre>
	 *  제작 관리 -제작물 관리 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
}