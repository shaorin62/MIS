/**
 * core.erp.mdm.service.MACA0060Service.java - <Created by Code Template generator>
 */
package core.erp.mac.service;

import java.util.Map;

/**
 * <pre>
 *	MACA0060Service - 매체 세금계산서 발송 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.05	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MACA0060Service {

	/**
	 * <pre>
	 * 위수탁세금계산서 목록을 조회한다.
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
	 * 수수료세금계산서 목록을 조회한다.
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
	public Object processSEARCH02(Map searchVo) throws Exception ;


	/**
	 * <pre>
	 * 위수탁 세금계산서 전송을 취소한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 수수료 세금계산서 전송을 취소한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE01(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 이메일을 재발송한다.
	 * </pre>
	 *
	 * @param param  및 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processUPDATE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 이메일을 재발송한다.
	 * </pre>
	 *
	 * @param param  및 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processUPDATE01(Map saveData) throws Exception;

}

	