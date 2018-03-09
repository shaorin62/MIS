package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMD0130Dao - META 오류 검증 조회
 * <p><b>NOTE : META 오류 검증 조회</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMD0130Dao")
public class TMMD0130Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * Meta 용어 조회 처리
	 * </pre>
	 *
	 * @param searchVo 조회조건을 포함한 Map 객체
	 * @return 공통메시지 목록
	 * @throws Exception 데이터 조회 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TMMD0130.SEARCH00", searchVo);
	}

}
