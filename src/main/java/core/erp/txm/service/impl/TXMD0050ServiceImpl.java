package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import com.nexacro.xapi.data.DataSet;

import core.erp.txm.service.TXMD0050Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        

/**
 * <pre>
 *	TXMD0050Service - 기타소득지급명세
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMD0050Service")
public class TXMD0050ServiceImpl extends EgovAbstractServiceImpl implements TXMD0050Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0050ServiceImpl.class);

	@Resource(name="TXMD0050Dao")
	private TXMD0050Dao tXMD0050Dao;
	/**
	 * 작성자 : 김준수
	 * 일시 : 2016 06 27
	 * 내용 :기타소득지급명세 정보를 조회한다.
	 * @param param - 조회조건 
	 * @return dsTA_JUMIPR
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_INCMXM", tXMD0050Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
}
