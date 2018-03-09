package core.erp.com.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComWorkAlarmService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComWorkAlarmServiceImpl -  알림 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	남상기
 * @since	2016. 11. 17.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 17.	남상기			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComWorkAlarmService")
public class ComWorkAlarmServiceImpl extends EgovAbstractServiceImpl implements ComWorkAlarmService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComWorkAlarmServiceImpl.class);

    @Resource(name = "ComWorkAlarmDao")
    private ComWorkAlarmDao comWorkAlarmDao = null;
    
    /**
     * <pre>
     * 알림 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processSEARCH00(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_WKNTXM", comWorkAlarmDao.processSEARCH00(dataMap));
		
		return returnMap;
	}
	
	/**
     * <pre>
     * 알람 저장(조회항목 업데이트, 전체삭제)
     * </pre>
     *
     * @param  조회 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	@SuppressWarnings("unchecked")
	public void processSAVE00(Map<String, Object> searchVo, Map<String, Object> saveData) throws Exception {
		Map rowVo = null;
		int rowType = 0;
		
		LOGGER.info("processSAVE00 start!!");
		
		String	tranGubn =	(String)searchVo.get("tranGubn");
		
		if("U".equals(tranGubn))
		{
			// 조회된 알람내역 업데이트
			comWorkAlarmDao.processUPDATE00(searchVo);
			
		}
		else if("D".equals(tranGubn))
		{
			// 전체삭제
			comWorkAlarmDao.processDELETE00(searchVo);
		}
		
	}
	
}
