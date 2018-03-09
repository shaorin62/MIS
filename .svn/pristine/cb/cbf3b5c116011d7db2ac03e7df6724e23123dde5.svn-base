package core.erp.bdm.service;

import java.util.Map;

/**
 * <pre>
 *	BDMB0040Service - 부서예산관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 27.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface BDMB0040Service {

	/**
	 * <pre>
	 * 부서예산관리 목록을 조회한다.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 부서예산관리 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public Object processSEARCH00(Map searchVo) throws Exception ;

	/**
	 * <pre>
	 * 부서예산관리 프로그램 저장,수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정할 자료
	 * @return 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;

	/**
	 * <pre>
	 * 부서예산 복사
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public void processPROC00(Map searchVo) throws Exception;
	
}