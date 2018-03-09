package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.txm.service.TXMD0070Service;

/**
 * <pre>
 *	TXMD0070Service - 재산분 주민세
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 23
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMD0070Service")
public class TXMD0070ServiceImpl extends EgovAbstractServiceImpl implements TXMD0070Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0070ServiceImpl.class);

	@Resource(name="TXMD0070Dao")
	private TXMD0070Dao tXMD0070Dao;

	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 :재산분 주민세 정보를 조회한다.
	 * @param param - 조회조건 
	 * @return dsTA_JUMIPR
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_INCMXM", tXMD0070Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
}
