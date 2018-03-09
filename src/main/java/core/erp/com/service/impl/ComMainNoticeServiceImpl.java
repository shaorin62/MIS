package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComMainNoticeService;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComMainNoticeServiceImpl -  그룹웨어 공지사항 기본 서비스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	박정훈
 * @since	2016. 11. 21.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 21.	박정훈			Initial Created.
 * 2016.12.04		jsh				일반 공지사항 조회 추가
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComMainNoticeService")
public class ComMainNoticeServiceImpl extends EgovAbstractServiceImpl implements ComMainNoticeService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ComMainNoticeServiceImpl.class);

    @Resource(name = "ComMainNoticeDao")
    private ComMainNoticeDao ComMainNoticeDao = null;
    
    /**
     * <pre>
     * 그룹웨어 공지사항 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	public Object processGetGWNotice(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsGWNotice", ComMainNoticeDao.processGetGWNotice(dataMap));
		
		return returnMap;
	}

	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainNoticeService#processNoticeList(java.util.Map)
	 */
	@Override
	public Map<String, Object> processNoticeList(Map<String, Object> dataMap) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsNoticeList", ComMainNoticeDao.processNoticeList(dataMap));
		return returnMap;
	}
}
