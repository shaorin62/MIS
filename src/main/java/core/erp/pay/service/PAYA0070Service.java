/**
 * core.erp.pay.service.PAYA0070Service.java - <Created by Code Template generator>
 */
package core.erp.pay.service;

import java.util.Map;

/**
 * <pre>
 *	PAYA0070Service - 급여항목관리 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.12
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.12	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface PAYA0070Service {

	/**
	 * <pre>
	 * 수당코드 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 수당코드 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 공제코드 목록을 조회한다.
	 * </pre>
	 *
	 * @param argDoc - 조회조건 Doc
	 * @return 공제코드 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	/**
	 * <pre>
	 * 급여항목관리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}