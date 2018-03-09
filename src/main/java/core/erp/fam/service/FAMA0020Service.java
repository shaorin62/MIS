/**
 * core.erp.tmm.service.FAMA0020Service.java - <Created by Code Template generator>
 */
package core.erp.fam.service;

import java.util.Map;

 
/**
 * <pre>
 *	FAMA0020Service - 코스트센터그룹관리 Service
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 12.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 12.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public interface FAMA0020Service {

	
	/**
	 * <pre>
	 * 코스트센터그룹관리 조회
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
	 * 코스트센터그룹관리 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processSAVE00(Map saveData) throws Exception;
	 
}