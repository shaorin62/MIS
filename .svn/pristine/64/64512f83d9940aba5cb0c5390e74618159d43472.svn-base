/**
 * core.erp.wfm.service.WFMB0040Service.java - <Created by Code Template generator>
 */
package core.erp.wfm.service;

import java.util.Map;

/**
 * <pre>
 *	WFMB0040Service - 학자금지급내역 조회 서비스 인터페이스
 * </pre>
 * 
 * @author	전종원
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	전종원		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
 
public interface WFMB0040Service { 

	/**
	 * <pre>
	 * 학자금지급내역 현황을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 학자금지급내역
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;	 
	
	

	/**
	 * <pre>
	 * 학자금 전표생성
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
	 * 학자금 전표삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC01(Map saveData) throws Exception;
	
	
	/**
	 * <pre>
	 * 학자금 급여전환
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC02(Map searchVo, Map saveData) throws Exception;


}