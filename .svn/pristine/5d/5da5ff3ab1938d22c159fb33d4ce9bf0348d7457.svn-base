package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMC0020Dao - 전사예산현황
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 07. 28.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 07. 28.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMC0020Dao")
public class BDMC0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전사예산현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전사예산현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("BDMC0020.SEARCH00", searchVo);

	}
}