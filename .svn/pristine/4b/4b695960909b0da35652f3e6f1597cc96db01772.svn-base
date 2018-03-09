package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMB0110Dao - 프로그램별실행현황
 * <p><b>NOTE : 프로그램별실행현황</b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMB0110Dao")
public class TMMB0110Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 *  프로그램별실행현황 조회 처리
	 * </pre>
	 *
	 * @param searchVo 조회조건을 포함한 Map 객체
	 * @return 공통메시지 목록
	 * @throws Exception 데이터 조회 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TMMB0110.SEARCH00", searchVo);
	}
}
