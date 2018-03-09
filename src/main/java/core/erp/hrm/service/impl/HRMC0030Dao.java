/**
 * core.erp.hrm.service.impl.HRMC0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

@Repository("HRMC0030Dao")
/**
 * <pre>
 *	HRMC0030Dao - 포상현황 프로그램 데이터처리 DAO 클래스 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 18.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 18.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class HRMC0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  포상사항 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 포상사항 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMC0030.SEARCH00", searchVo);

	}

}
