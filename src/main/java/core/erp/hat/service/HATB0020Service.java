/**
 * core.erp.hrm.service.HATB0020Service.java - <Created by Code Template generator>
 */
package core.erp.hat.service;

import java.util.Map;

/**
 * <pre>
 *	HATB0020Service - 일근태등록 내역 조회 서비스 인터페이스
 * </pre>
 * 
 * @author	김희정
 * @since	2016.09.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	김희정		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface HATB0020Service {

	/**
	 * <pre>
	 * 일근태등록 내역을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 일근태등록 내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 일근태등록 내역을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 근태마감여부를 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 근태마감여부 내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
}