/**
 * core.erp.hrm.service.HRMB0150Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;


 
/**
 * <pre>
 *	HRMB0150Service - 보증보험등록 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 9.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 9.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface HRMB0150Service {

	/**
	 * <pre>
	 * 보증보험등록 조회.
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
	 * 보증보험등록 사원번호를 조회.
	 * </pre>
	 *
	 * @param param - 조회조건 Map
	 * @return 건강보험납부 목록
	 * @throws Exception - 조회 시 발생한 예외
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSEARCH99(Map searchVo) throws Exception ;
	
	/**
	 * <pre>
	 * 보증보험등록 저장.
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	
}