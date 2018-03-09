package core.erp.bdm.service;

import java.util.Map;

/**
 * <pre>
 *	BDMB0020Service - 부서예산인원편성인원설정 
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
public interface BDMB0020Service {

	/**
	 * <pre>
	 * 부서예산인원편성인원설정 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 부서예산인원편성인원설정 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 부서예산인원편성인원설정 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData, Map searchVo) throws Exception;
	
	/**
	 * <pre>
	 * 전월인원을 복사한다.
	 * </pre>
	 *
	 * @param param - 복사 할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC00(Map searchVo, Map saveData) throws Exception;
	
	/**
	 * <pre>
	 * 인사자료 연동을 한다.
	 * </pre>
	 *
	 * @param param - 복사 할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processPROC01(Map searchVo, Map saveData) throws Exception;
}