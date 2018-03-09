package core.erp.fam.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FAMA0060Service - 계정과목등록 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

public interface FAMA0060Service {

	/**
	 * <pre>
	 * 계정과목등록 조회
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
	 * 관리코드 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 계정과목등록 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

}
