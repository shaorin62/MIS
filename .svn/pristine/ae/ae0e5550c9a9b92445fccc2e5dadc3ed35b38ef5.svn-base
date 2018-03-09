package core.erp.com.service.impl;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComExcelSampleService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComExcelSampleServiceImpl - 공통팝업
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 10.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 10.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComExcelSampleService")
public class ComExcelSampleServiceImpl extends EgovAbstractServiceImpl implements ComExcelSampleService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComExcelSampleServiceImpl.class);

	@Resource(name="ComExcelSampleDao")
	private ComExcelSampleDao dao;


	@SuppressWarnings("rawtypes")
	public Object getExcelSample(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsEXCELSAMPLE", dao.getExcelSample(searchVo));
		return returnMap;
		
	}
	
}
