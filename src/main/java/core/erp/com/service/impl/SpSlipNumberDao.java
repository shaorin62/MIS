package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

/******************************************************************************
 * <pre>
 *   
 *   프로그램명  : SpSlipNumber
 *   클래스명    : SpSlipNumberDao.java
 *   작성일자    : 2014. 08. 04.
 *   작 성 자    : 박인환
 *   비   고     : 전표번호 생성
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("spSlipNumberDao")
public class SpSlipNumberDao extends EgovAbstractDAO  {

	protected final Log logger = LogFactory.getLog(getClass());

	/*********************
	 * 전표번호 생성     *
	 *********************/
	@SuppressWarnings("rawtypes")
	public String getSlipNumber(Map searchVo) throws Exception {
		
		Map resultMap = (Map) selectByPk("SP_SLIP_NUMBER", searchVo);
		
		String result = (String) resultMap.get("SLIP_NUMB");
		
		return result;
	
	}


}
