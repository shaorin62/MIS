package core.erp.fsm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FSMB0030Service - 자산 일괄 변동 관리 조회
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	오혜성 <ohs@inbus.co.kr>
 * @since	2016. 06. 28.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 28.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FSMB0030Service {

	/**
	 * <pre>
	 * 건설중 자산일괄등록 헤더 조회 처리
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
	 * 건설중 자산일괄등록 디테일 조회 처리
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
	 * 자산일괄등록 전표 삭제 처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processDELETE00(Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 자산일괄등록 전표 헤더처리
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC00(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 이익 매각
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC01(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 손실 매각
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC02(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 자산일괄등록 전표 처리(미상각 잔액)
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC04(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 자산일괄등록 전표 처리(취득가 기말잔액)
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC05(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 자산일괄등록 전표 처리(처분 손익)
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPROC06(Map searchVo) throws Exception ;

}
