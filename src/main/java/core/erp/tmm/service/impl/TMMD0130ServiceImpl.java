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
import core.erp.tmm.service.TMMD0130Service;

/**
 * <pre>
 *	TMMD0130ServiceImpl - META 오류 검증 조회
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
@Service("TMMD0130Service")
public class TMMD0130ServiceImpl extends EgovAbstractServiceImpl implements TMMD0130Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0130ServiceImpl.class);

	@Resource(name="TMMD0130Dao")
	private TMMD0130Dao TMMD0130Dao;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta Meta 오류자료 조회
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMD0130Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsErrorMeta", TMMD0130Dao.processSEARCH00(searchVo));
		return returnMap;
    }
}
