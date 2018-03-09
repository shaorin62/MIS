/**
 * core.erp.hrm.service.HRMB0900Service.java - <Created by Code Template generator>
 */
package core.erp.hrm.service;

import java.util.Map;


 
/**
 * <pre>
 *	HRMB0900Service - 퇴직자이직관리 Service
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 10.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 10.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface HRMB0900Service {

	/**
	 * <pre>
	 * 퇴직자이직관리 조회.
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
	 * 퇴직자이직관리 저장.
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}