package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComWorkCalendarService;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComWorkCalendarServiceImpl -  일정관리 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김기환
 * @since	2016. 11. 16.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 16.	김기환			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComWorkCalendarService")
public class ComWorkCalendarServiceImpl extends EgovAbstractServiceImpl implements ComWorkCalendarService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComWorkCalendarServiceImpl.class);

    @Resource(name = "ComWorkCalendarDao")
    private ComWorkCalendarDao ComWorkCalendarDao = null;
    
    /**
     * <pre>
     * 메인달력 일정조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_SCHDXM", ComWorkCalendarDao.processSEARCH00(dataMap));
		return returnMap;
	}
}
