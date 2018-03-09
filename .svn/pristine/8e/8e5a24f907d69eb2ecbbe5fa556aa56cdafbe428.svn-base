package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmAbstractDAO;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMD0020Dao - 품의예산현황
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	양현덕 <yhd@inbus.co.kr>
 * @since	2016. 06. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMD0020Dao")
public class BDMD0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  품의예산현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 품의예산현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("BDMD0020.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  품의예산상세현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 품의예산상세현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("BDMD0020.SEARCH01", searchVo);

	}
}