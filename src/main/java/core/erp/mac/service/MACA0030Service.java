/**
 * core.erp.mdm.service.MACA0030Service.java - <Created by Code Template generator>
 */
package core.erp.mac.service;

import java.util.Map;

/**
 * <pre>
 *	MACA0030Service - 매체 세금계산서 서비스 인터페이스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MACA0030Service {

	/**
	 * <pre>
	 * 위수탁미발행세금계산서 목록을 조회한다.
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
	 * 세금계산서 목록을 조회한다.
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
	 * 위수탁세금계산서 디테일 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체 세금계산서 디테일 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 위수탁 세금계산서 프로그램 저장한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map searchVo,Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 위수탁 세금계산서 프로그램을 일괄 저장한다.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE01(Map searchVo,Map saveData) throws Exception;

	/**
	 * <pre>
	 * 위수탁 세금계산서 프로그램을 삭제한다.
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
	 * 세금계산서 디테일 MEMO_FILD,부가세 내용수정.
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processUPDATE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 영수구분 수정
	 * </pre>
	 *
	 * @param param  및 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processUPDATE01(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 매체 위수탁 세금계산서 출력을 위한 조회 
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체 세금계산서 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPRINT00(Map searchVo) throws Exception ;

}

	