package core.erp.txm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	TXMD0080Service - 지정관리(지방세기준)
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 24
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface TXMD0080Service {

	/**
	 * <pre>
	 * 제출자 레코드 조회 
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
	 * 원천징수의무자별 집계레코드 조회 
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
	 * 주근무처 레코드 조회 !
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 전산매체자료 조회 
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;



	/**
	 * <pre>
	 * 전산매체자료 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public String processSAVE00(Map searchVo, Map saveData) throws Exception;	


}
