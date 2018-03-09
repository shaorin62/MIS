package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

/******************************************************************************
 * <pre>
 *   
 *   프로그램명  : SpSlipMasterCheck
 *   클래스명    : SpSlipMasterCheckDao.java
 *   작성일자    : 2014. 08. 04.
 *   작 성 자    : 박인환
 *   비   고     : 전표 등록 체크
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Repository("spSlipMasterCheckDao")
public class SpSlipMasterCheckDao extends EgovAbstractDAO  {

	protected final Log logger = LogFactory.getLog(getClass());

	/*********************
	 * 전표 등록 체크     *
	 *********************/
	@SuppressWarnings("rawtypes")
	public Map getSlipMasterCheck(Map paraMap) throws Exception {
		
		getSqlMapClientTemplate().queryForObject("SP_SLIP_MASTER_CHECK", paraMap);
		
		return paraMap;
	
	}


}
