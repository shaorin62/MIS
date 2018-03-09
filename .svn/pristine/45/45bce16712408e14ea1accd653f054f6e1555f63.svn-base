package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;  
import core.erp.fam.service.FAMF0040Service;

/**
 * <pre>
 *	FAMF0040ServiceImpl - 월별손익계산서 조회
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	권미영
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
@Service("FAMF0040Service")
public class FAMF0040ServiceImpl extends EgovAbstractServiceImpl implements FAMF0040Service {

	@Resource(name = "FAMF0040Dao")
	private FAMF0040Dao dao;

	/**
	 * 월별손익계산서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 월별손익계산서  목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//====================================================
		// 1. 월별 손익계산서 자료 생성
		//====================================================
		int iCnt = Integer.valueOf(searchVo.get("YYMM_TERM").toString()).intValue();
		String sBASE_YYMM;

		for (int i = 0; i < iCnt; i++) {

			sBASE_YYMM = searchVo.get("BASE_YYM1").toString();
			sBASE_YYMM = String.valueOf(Integer.valueOf(sBASE_YYMM).intValue() + i).toString();
			
			searchVo.put("BASE_YYMM", sBASE_YYMM);
			searchVo.put("BASE_YYMM", sBASE_YYMM);

			dao.processSAVE00(searchVo);
			
		}
		
		//====================================================
		// 2. 월별 손익계산서 조회
		//====================================================
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODTMP", dao.processSEARCH00(searchVo));
		return returnMap;

	}

}