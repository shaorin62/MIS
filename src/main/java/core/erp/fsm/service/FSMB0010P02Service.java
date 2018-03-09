/**
 * core.erp.fsm.service.FSMB0010P02Service.java - <Created by Code Template generator>
 */
package core.erp.fsm.service;

import java.util.Map;

/**
 * <pre>
 *	FSMB0010P02Service - 품목정보조회 팝업
 * </pre>
 * 
 * @author	권미영
 * @since	2016.07.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface FSMB0010P02Service {

	/**
	 * <pre>
	 * 품목정보조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표번호 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 자산등록 품목정보 콤보 정보 조회
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 전표번호 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	 
}