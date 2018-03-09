package core.erp.bdm.service;

import java.util.Map;

/**
 * <pre>
 *	BDMD0030Service - 품의예산실적현황 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	양현덕 <yhd@inbus.co.kr>
 * @since	2016. 06. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface BDMD0030Service {

	/**
	 * <pre>
	 * 품의예산실적현황 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 품의예산실적현황 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 품의예산실적현황 상세목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 품의예산실적현황 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;

}