/**
 * core.erp.mdm.service.MDMD0020Service.java - <Created by Code Template generator>
 */
package core.erp.mdm.service;

import java.util.Map;

/**
 * <pre>
 *	MDMD0020Service - 옥외 거래명세서 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.20	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MDME0020Service {

	/**
	 * <pre>
	 * 옥외 개별청약 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 옥외 개별청약 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 옥외 거래명세서(헤더) 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 옥외 거래명세서(헤더) 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 옥외 거래명세서(상세) 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 옥외 거래명세서(상세) 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 광고주목록을 조회한다.(자동완성)
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 광고주목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 개별 거래명세서를 생성한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map searchVo,Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 광고주별 거래명세서를 생성한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map searchVo,Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 옥외 개별청약을 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE02(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 옥외 거래명세서를 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE03(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 부가세 수정
	 * </pre>
	 *
	 * @param param - 저장, 수정 및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processUPDATE10(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 *  매체거래명세서 - 명세서 출력을 위한 헤더 조회
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
	 *  매체거래명세서 - 명세서 출력을 위한 상세 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT01(Map searchVo) throws Exception ;
}