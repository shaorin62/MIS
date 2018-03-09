/**
 * core.erp.tmm.service.FAMB0040Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMB0040Service - 전표 승인 처리 서비스 인터페이스
 * </pre>
 * 
 * @author	오혜성	
 * @since	2016.07.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FAMB0040Service {

	/**
	 * <pre>
	 * 전표 승인 처리 목록 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 전표 승인 처리 목록을 상세 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표 상세 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;	

	/**
	 * <pre>
	 *	전표 변화 내용 저장
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return UPDATE 된 전표의 수
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception ;
	
	/**
	 * <pre>
	 * 전표 승인 취소
	 * </pre>
	 *
	 * @param param - 승인 취소 건수
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processAPPRPROC00(Map saveData) throws Exception;	
	/**
	 * <pre>
	 * 전표 승인 취소
	 * </pre>
	 *
	 * @param param - 전표 취소할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processAPPRPROC01(Map saveData) throws Exception;
	 
}