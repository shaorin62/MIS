/**
 * core.erp.tmm.service.impl.FAMA0025Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;



/**
 * <pre>
 *	FAMA0025Dao - 코스트센터관리 Dao 
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
@Repository("FAMA0025Dao")
public class FAMA0025Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 코스트센터관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMA0025.SEARCH00", searchVo);

	}

	
	/**
	 * <pre>
	 * 코스트센터관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("FAMA0025.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 * 코스트센터관리 수정
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FAMA0025.UPDATE00", dataVo);
		
	}
	/**
	 * <pre>
	 * 코스트센터관리 삭제
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("FAMA0025.DELETE00", dataVo);
		
	}
	
	

}
