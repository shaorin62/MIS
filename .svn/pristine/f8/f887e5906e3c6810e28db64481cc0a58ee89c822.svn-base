/**
 * core.erp.mdm.service.MACA0050Service.java - <Created by Code Template generator>
 */
package core.erp.mac.service;

import java.util.Map;

/**
 * <pre>
 *	MACA0050Service - 매체 세금계산서 발송 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.04	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MACA0050Service {

	/**
	 * <pre>
	 * 미발송세금계산서 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체 세금계산서 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 발송세금계산서 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체 세금계산서 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
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
	public Object processSEARCH04(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 광고주코드로 담당자 메일 가져오기
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 공통코드마스터 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH05(Map saveData) throws Exception ;
	
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
	public Object processSEARCH06(Map saveData) throws Exception ;

	/**
	 * <pre>
	 * 위수탁 세금계산서를 발송한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 수수료 세금계산서를 발송한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 세금계산서를 미발송상태로 만든다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE02(Map saveData) throws Exception;

}

	