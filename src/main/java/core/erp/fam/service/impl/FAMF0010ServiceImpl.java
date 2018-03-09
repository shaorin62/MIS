package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;        
import core.erp.fam.service.FAMF0010Service;

/**
 * <pre>
 *	FAMF0010ServiceImpl - 합계잔액시산표 조회
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
@Service("FAMF0010Service")
public class FAMF0010ServiceImpl extends AbstractServiceImpl implements FAMF0010Service {

	@Resource(name = "FAMF0010Dao")
	private FAMF0010Dao dao;
	
	/**
	 * 합계잔액시산표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 합계잔액시산표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//====================================================
		// 1. 합계잔액시산표 자료 생성
		//====================================================
		dao.processSAVE00(searchVo);

		//====================================================
		// 2. 합계잔액시산표 조회
		//====================================================
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODTMP", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
}