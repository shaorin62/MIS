/**
 * core.erp.pcm.service.PDMD0010Service.java - <Created by Code Template generator>
 */
package core.erp.pdm.service;

import java.util.Map;

/**
 * <pre>
 *	PDMD0010Controller - 제작 정산
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.29	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PDMD0010Service {

	/**
	 * <pre>
	 *  제작정산 -제작정산 데이터 상단 조회
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
	 *  제작정산 -제작정산 하단 상세 정산을위한 데이터 조회
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
	 *  제작정산 -제작종류 콤보를 가져오기 위한 데이터 셋
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 정산 - 헤더부분 수정 (현재는 삭제만 가능)
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 정산 - 제작정산 하단 정산데이터 상세 내역 저장 및 수정삭제
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;
	
	
	
	/**
	 * <pre>
	 *  제작정산 - 제작 정산서 출력을 위한 조회
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
	 *  제작정산 - 제작 정산서 출력을 위한 조회2
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;
	
	
}