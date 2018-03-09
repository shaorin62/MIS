/**
 * core.erp.tmm.service.PACA0030Service.java - <Created by Code Template generator>
 */
package core.erp.pac.service;

import java.util.Map;

/**
 * <pre>
 *	PACA0030Service - 제작 전표처리
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 
public interface PACA0030Service {

	/**
	 * <pre>
	 * 제작 전표처리 
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
	 * 제작 전표처리 완료 조회 
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
	 * 제작 매입전표 미완료 데이터 조회 
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
	 * 제작 매입전표 완료 데이터 조회 
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;
	
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 매출전표 생성 진행
	 * </pre>
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC00(Map searchVo,Map DataVo) throws Exception ;
	
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 매입전표 생성 진행
	 * </pre>
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC01(Map searchVo,Map DataVo) throws Exception ;
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 매출전표 삭제 - 제작 매출전표 생성 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE00(Map saveData, Map searchVo) throws Exception;
	
	/**
	 * **********************************************************
	 * <pre>
	 *  제작 매입전표 삭제 - 제작 매출전표 생성 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 * **********************************************************
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE01(Map saveData, Map searchVo) throws Exception;
	
}


 