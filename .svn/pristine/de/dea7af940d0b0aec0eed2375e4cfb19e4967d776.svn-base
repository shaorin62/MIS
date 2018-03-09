package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;        
import core.erp.fam.service.FAMD0040Service;

/**
 * <pre>
 *	FAMD0040ServiceImpl - 메세지관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석두 <ksd@inbus.co.kr>
 * @since	2014. 10. 23.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 23.	김석두		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("FAMD0040Service")
public class FAMD0040ServiceImpl extends AbstractServiceImpl implements FAMD0040Service {

	@Resource(name = "FAMD0040Dao")
	private FAMD0040Dao dao;
	
	/**
	 * 공통메시지 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_SLIPNT", dao.processSEARCH00(searchVo));
		return returnMap;

    }	
	

}