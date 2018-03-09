/**
 * core.erp.com.service.impl.ComMultiLangServiceImpl.java
 */
package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import core.erp.com.service.ComMultiLangService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComMultiLangServiceImpl - 다국어 적용 자료 변환 등의 처리를 위한 서비스 클래스
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016.12.14.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.14.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("comMultiLangService")
public class ComMultiLangServiceImpl extends EgovAbstractServiceImpl implements ComMultiLangService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComMultiLangServiceImpl.class);
	
	
	@Resource(name = "comMultiLangDao")
	private ComMultiLangDao langDao;
	
	
	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMultiLangService#processTranslateLanguage(java.util.Map)
	 */
	@Override
	public Map<String, Object> processTranslateLanguage(Map<String, Object> paramMap) throws Exception {
		
		Map<String, Object> returnDataMap = new HashMap<String, Object>();
		
		List<Map<String, Object>> dsData = (List<Map<String, Object>>) paramMap.get("dsLangSet");
		Map<String, Object> itemMap = null;
		Map<String, Object> rowMap = null;
		
		int rowCount = dsData.size();
				
		LOGGER.info("---------- Translated Item Count : " + rowCount);
		
		for (int row = 0; row < rowCount; row++) {
			
			rowMap = dsData.get(row);
			
			LOGGER.info("---------- Row : " + row + ", Data : " + rowMap);
			
			itemMap = (Map<String, Object>) langDao.processTranslateLanguage(rowMap);
			
			if (itemMap.containsKey("LNSP_NAME") && (StringUtils.hasLength((String) itemMap.get("LNSP_NAME")))) {
				rowMap.put("APLY_TEXT", (String) itemMap.get("LNSP_NAME"));
			} else {
				rowMap.put("APLY_TEXT", "");
			}
			
			dsData.set(row, rowMap);
			
		}
		
		returnDataMap.put("dsLangSet", dsData);
		
		return returnDataMap;
		
	}

}
