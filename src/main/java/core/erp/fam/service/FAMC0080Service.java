package core.erp.fam.service;

import java.util.Map;

/**
 * <pre>
 *	FAMC0080Service - 잔액세부현황 조회 서비스 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	오혜성
 * @since	2016. 07. 13.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FAMC0080Service {

	/**
	 * <pre>
	 * 잔액세부현황 조회
	 * 관리구분콤보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;
	public Object processSEARCH09(Map searchVo) throws Exception ;	

}