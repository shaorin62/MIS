package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

/******************************************************************************
 * <pre>
 *   
 *   프로그램명  : SpVatNumber
 *   클래스명    : SpVatNumberDao.java
 *   작성일자    : 2016. 06. 29
 *   작 성 자    : 황치웅
 *   비   고     : 부가세번호 생성
 *   Copyright (c) 2014 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("spVatNumberDao")
public class SpVatNumberDao extends EgovAbstractDAO  {

	protected final Log logger = LogFactory.getLog(getClass());

	/*********************
	 * 부가세번호 생성     *
	 *********************/
	@SuppressWarnings("rawtypes")
	public String getVatNumber(Map rowVo) throws Exception {
		
		//HashMap resultMap = (HashMap) selectByPk("SP_VAT_NUMBER", rowVo);
		Map resultMap = (Map) selectByPk("SP_VAT_NUMBER", rowVo);
		
		String result = (String) resultMap.get("VATX_SEQN");
		
		return result;
	
	}


}
