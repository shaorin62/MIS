package core.erp.fsm.service;

import java.util.Map;

/**
 * <pre>
 *	FSMB0040Service - 메세지관리 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석두 <ksd@inbus.co.kr>
 * @since	2014. 10. 23.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 23.	김석두		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FSMB0040Service {

	/**
	 * <pre>
	 * 메세지관리 조회
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
	 * 공통콤보관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processSAVE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 공통콤보관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processSAVE01(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 공통콤보관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processAPPL00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 공통콤보관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processCANC00(Map saveData) throws Exception;	
	
	/**
	 * <pre>
	 * 공통콤보관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processPROC00(Map saveData) throws Exception;	

}