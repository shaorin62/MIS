/**
 * core.erp.mdm.service.MACA0010Service.java - <Created by Code Template generator>
 */
package core.erp.mac.service;

import java.util.Map;

/**
 * <pre>
 *	MACA0010Service - 회계 입금표 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MACA0010Service {

	/**
	 * <pre>
	 * 회계 입금표 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 회계 입금표 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 매체사 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체사 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 매체사코드로 담당자 메일 가져오기
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map saveData) throws Exception ;
	
	/**
	 * <pre>
	 * 출력을 위한 입금표 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체사 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT00(Map searchVo,Map saveVo) throws Exception ;
	
	/**
	 * <pre>
	 * 입금표 이메일 발송
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEND00(Map saveVo,Map searchVo) throws Exception ;
	

}