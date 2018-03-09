package core.erp.fsm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FSMF0005Service - CIP프로젝트관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	최인철 
 * @since	2016. 09. 07.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 09. 07.	최인철		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FSMF0005Service {

	/**
	 * <pre>
	 * CIP프로젝트 조회
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
	 * CIP프로젝트 조회
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
	 * CIP프로젝트 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map searchVo) throws Exception;
	
}
