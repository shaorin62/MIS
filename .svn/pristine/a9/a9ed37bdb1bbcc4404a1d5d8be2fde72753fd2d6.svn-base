package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;											
import java.util.Iterator;										
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.tmm.service.TMMD0120Service;

/**
 * <pre>
 *	TMMD0120ServiceImpl - DB Meta 정보조회
 * <p><b>NOTE : DB Meta 정보조회</b></p>
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
@Service("TMMD0120Service")
public class TMMD0120ServiceImpl extends EgovAbstractServiceImpl implements TMMD0120Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0120ServiceImpl.class);

	@Resource(name="TMMD0120Dao")
	private TMMD0120Dao TMMD0120Dao;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMD0120Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsObjectList", TMMD0120Dao.processSEARCH00(searchVo));
		return returnMap;
    }

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		//return TMMD0120Dao.processSEARCH01(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTableColumnList", TMMD0120Dao.processSEARCH01(searchVo));
		return returnMap;
    }

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		//return TMMD0120Dao.processSEARCH02(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTableIndexList", TMMD0120Dao.processSEARCH02(searchVo));
		return returnMap;
    }
	
    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		//return TMMD0120Dao.processSEARCH03(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsSCRIPT", TMMD0120Dao.processSEARCH03(searchVo));
		return returnMap;
    }	

}
