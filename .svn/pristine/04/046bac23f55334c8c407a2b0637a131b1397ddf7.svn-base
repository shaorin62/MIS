package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMC0080Service - 잔액세부현황 조회 서비스 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	오혜성
 * @since	2016. 07. 13.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13.	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("FAMC0080Dao")
public class FAMC0080Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 이월잔액 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("FAMC0080.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 * 계정별 잔액세부사항 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */	
	public Object processSEARCH01(Map searchVo) throws Exception {

		return list("FAMC0080.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 * 관리구분콤보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */	
	public Object processSEARCH09(Map searchVo) throws Exception {

		return list("FAMC0080.SEARCH09", searchVo);

	}		

}