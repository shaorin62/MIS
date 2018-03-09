/**
 * core.erp.tmm.service.WFMA0020Service.java - <Created by Code Template generator>
 */
package core.erp.wfm.service;

import java.util.Map;

/**
 * <pre>
 *	WFMA0020Service - 경조금 신청 등록 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	정한균
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	정한균			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface WFMA0020Service {

	/**
	 * <pre>
	 * 경조금 신청 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 경조금 신청 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 경조금 신청 관리 프로그램 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}