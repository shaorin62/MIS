/**
 * core.erp.pcm.service.PDMC0020Service.java - <Created by Code Template generator>
 */
package core.erp.pdm.service;

import java.util.Map;

/**
 * <pre>
 *	PDMC0020Controller - 제작 견적겨 제작용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.23	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PDMC0020Service {

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
	 *  제작견적서 -제작용 하단 상세 견적을 조회한다.
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
	 *  제작종류 콤보 데이터 가져오기
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
	 *  제작 견적서 -제작용 상단 저장
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
	 *  제작 견적서 -제작용 하단 상세견적 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData, Map saveVO) throws Exception;
	
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 견적서 제작용 확정버튼 클릭
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE02(Map saveData) throws Exception;
	
	
	/**
	 * <pre>
	 *  제작견적서 -견적서 출력
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
	 *  제작견적서 -견적서 출력 상세
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;
	
}