package core.erp.fsm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMD0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FSMD0010ServiceImpl - 감가상각 명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMD0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMD0010Service")
public class FSMD0010ServiceImpl extends EgovAbstractServiceImpl implements FSMD0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FSMD0010ServiceImpl.class);

	@Resource(name = "FSMD0010Dao")
	private FSMD0010Dao fSMD0010Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_DPCTXM", fSMD0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	//감가상각비조정명세서
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		//감가상각비조정명세서
		returnMap.put("dsFS_DPCTXM_PRT", fSMD0010Dao.processSEARCH01(searchVo));
		//감가상각비조정명세서_합계
		returnMap.put("dsFS_DPCTXM_SUM", fSMD0010Dao.processSEARCH02(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {

		/***************
		 * 감가상각처리! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010Dao.processPROC00(searchVo);

		//감가상각 시부인 처리
		fSMD0010Dao.processPROC00_POST(searchVo);
		
	}
	
	@SuppressWarnings("rawtypes")

	public void processCANC00(Map searchVo) throws Exception {
		
		/***************
		 * 감가상각취소! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010Dao.processCANC00(searchVo);
		
	}

}
