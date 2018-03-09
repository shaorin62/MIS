package core.erp.fsm.service;

import java.util.Map;											

                                                                                             
/**
 * <pre>
 *	FSMB0010Service - 자산등록 관리 조회
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	오혜성 <ohs@inbus.co.kr>
 * @since	2016. 06. 29.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 29.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public interface FSMB0010Service {

	/**
	 * <pre>
	 * 자산등록 관리 조회
	 * </pre>
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 변동 이력 탭조회
	 * 이동 이력 탭조회
	 * 수리 이력 탭조회
	 * 상각 이력 탭조회
	 * 분할 내역 탭조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH01(Map searchVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH02(Map searchVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH03(Map searchVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH04(Map searchVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH05(Map searchVo) throws Exception ;
	
	
	/**
	 * <pre>
	 * 상각률 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH10(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 자산등록 관리 목록 저장
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
	 * 자산등록 전표 해더 처리
	 * 자산등록 전표 차변 처리
	 * 자산등록 전표 대변처리
	 * 자산등록 전표 차변처리(부가가치세 매입 세액)
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC00(Map searchVo,Map DataVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC01(Map DataVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC02(Map DataVo) throws Exception ;
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC03(Map DataVo) throws Exception ;
	

	/**
	 * <pre>
	 * 자산일괄등록 저장(FSMB0010P03)
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE03(Map saveData) throws Exception;
	
}
