package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import core.erp.fam.service.FAMF0030Service;

/**
 * <pre>
 *	FAMF0030ServiceImpl - 손익계산서 조회
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영 <yhd@inbus.co.kr>
 * @since	2016.10.13
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("FAMF0030Service")
public class FAMF0030ServiceImpl extends EgovAbstractServiceImpl implements FAMF0030Service {

	@Resource(name = "FAMF0030Dao")
	private FAMF0030Dao dao;
	
	/**
	 * 손익계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 손익계산서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//====================================================
		// 1. 손익계산서 자료 생성
		//====================================================
		dao.processSAVE00(searchVo);

		//====================================================
		// 2. 손익계산서 조회
		//====================================================
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODTMP", dao.processSEARCH00(searchVo));
		return returnMap;

    }
}