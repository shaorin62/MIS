package core.erp.fam.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FAMA0100Service - 조회[환율관리]  메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	황치웅		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

public interface FAMA0100Service {

	/**
	 * <pre>
	 * 조회[환율관리] 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 조회[환율관리] 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 환율정보연동
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processGET_EXCHANGE_RATE(Map saveData) throws Exception;
	
}
