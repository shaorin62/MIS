package core.erp.fam.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FAME0040Service - 최초이월잔액(계정)  메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

public interface FAME0040Service {

	/**
	 * <pre>
	 * 최초이월잔액(계정) 조회
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
	 * 최초이월잔액(계정) 저장
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
	 * 계정과목
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 계정과목
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH10(Map searchVo) throws Exception ;	
	
}
