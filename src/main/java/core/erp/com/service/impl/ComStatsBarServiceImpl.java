package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComStatsBarService;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComStatsBarServiceImpl -  경영실적조회 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	최인철
 * @since	2016. 11. 23.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 23.	최인철			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComStatsBarService")
public class ComStatsBarServiceImpl extends EgovAbstractServiceImpl implements ComStatsBarService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComStatsBarServiceImpl.class);

    @Resource(name = "ComStatsBarDao")
    private ComStatsBarDao comStatsBarDao = null;
    
    /**
     * <pre>
     * 경영실적 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTR_MONEPL", comStatsBarDao.processSEARCH00(dataMap));
		return returnMap;
	}
	
	
}
