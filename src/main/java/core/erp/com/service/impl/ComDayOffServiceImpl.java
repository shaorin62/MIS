package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComDayOffService;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComDayOffServiceImpl -  DAY OFF 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김기환
 * @since	2016. 12. 29.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 12. 29.	김기환			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComDayOffService")
public class ComDayOffServiceImpl extends EgovAbstractServiceImpl implements ComDayOffService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComDayOffServiceImpl.class);

    @Resource(name = "ComDayOffDao")
    private ComDayOffDao ComDayOffDao = null;
    
    /**
     * <pre>
     * DAY OFF 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsDAYOFF", ComDayOffDao.processSEARCH00(dataMap));
		return returnMap;
	}
	
}
