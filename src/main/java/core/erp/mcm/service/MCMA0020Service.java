/**
 * core.erp.mcm.service.MCMA0020Service.java - <Created by Code Template generator>
 */
package core.erp.mcm.service;

import java.util.Map;

/**
 * <pre>
 *	MCMA0020Service - 광고주관리(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.31	조민희		Initial Created.
 * 2016.10.05	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MCMA0020Service {

	/**
	 * <pre>
	 * 광고주 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 광고주 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 광고주 팀 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 광고주 팀 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 카테고리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 카테고리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 코바넷코드 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 코바넷코드 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * SBS코드 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return SBS코드 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 광고주 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 광고주 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH05(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 광고주 팀(신규) 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;
	 
	/**
	 * <pre>
	 * 카테고리(신규) 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE02(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 코바넷코드(신규) 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE03(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * SBS코드(신규) 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE04(Map saveData) throws Exception;
	

	
}