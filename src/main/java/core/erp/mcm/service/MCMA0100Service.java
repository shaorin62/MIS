/**
 * core.erp.mcm.service.MCMA0100Service.java - <Created by Code Template generator>
 */
package core.erp.mcm.service;

import java.util.Map;

/**
 * <pre>
 *	MCMA0100Service - 매체거래명세표파일관리(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	조민희
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	조민희		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface MCMA0100Service {
	
	/**
	 * <pre>
	 * 매체거래명세표파일관리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 매체거래명세표파일관리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 매체거래명세표파일관리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
}