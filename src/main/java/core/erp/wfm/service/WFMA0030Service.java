/**
 * core.erp.tmm.service.WFMA0030Service.java - <Created by Code Template generator>
 */
package core.erp.wfm.service;

import java.util.Map;

/**
 * <pre>
 *	WFMA0030Service - 경조금 신청 등록 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	정한균
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	정한균			Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface WFMA0030Service {

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
	 * 경조금 전표생성
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processPROC00(Map searchVo, Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 경조금 전표삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC01(Map saveData) throws Exception;
}