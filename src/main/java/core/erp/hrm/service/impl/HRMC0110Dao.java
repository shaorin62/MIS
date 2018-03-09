/**
 * core.erp.hrm.service.impl.HRMC0110Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;



/**
 * <pre>
 *	HRMC0110Dao - 여권현황 Dao
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 16.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("HRMC0110Dao")
public class HRMC0110Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  여권현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 가족사항 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMC0110.SEARCH00", searchVo);

	}

}
