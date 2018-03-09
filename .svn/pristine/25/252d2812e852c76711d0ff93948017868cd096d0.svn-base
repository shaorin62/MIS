/**
 * core.erp.hrm.service.impl.HRMB0900Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;



/**
 * <pre>
 *	HRMB0900Dao - 퇴직자이직관리 Dao 
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
@Repository("HRMB0900Dao")
public class HRMB0900Dao extends CmmBaseDAO {

	
	/**
	 * <pre>
	 * 퇴직자이직관리 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMB0900.SEARCH00", searchVo);

	}

	
	/**
	 * <pre>
	 * 퇴직자이직관리 저장
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HRMB0900.SAVE00", dataVo);

	}

	
	/**
	 * <pre>
	 * 퇴직자이직관리 수정.
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HRMB0900.UPDATE00", dataVo);
		
	}

	
	/**
	 * <pre>
	 *퇴직자이직관리 삭제 
	 * </pre>
	 *
	 * @param dataVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HRMB0900.DELETE00", dataVo);
		
	}

}
