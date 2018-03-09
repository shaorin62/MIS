package core.erp.fsm.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMD0010P01Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FSMD0010P01ServiceImpl - 감가상각 명세서  메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.06.27
 * @version	1.0
 * @see		{@link FSMD0010P01Service}
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

@Service("FSMD0010P01Service")
public class FSMD0010P01ServiceImpl extends EgovAbstractServiceImpl implements FSMD0010P01Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FSMD0010P01ServiceImpl.class);

	@Resource(name = "FSMD0010P01Dao")
	private FSMD0010P01Dao fSMD0010P01Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_SLIPXM", fSMD0010P01Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	public void processSLIPCREATE01(Map searchVo) throws Exception {

		/***************
		 * 감가상각처리! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010P01Dao.processSLIPCREATE01(searchVo);

	}
	
	@SuppressWarnings("rawtypes")

	public void processSLIPDELETE01(Map searchVo) throws Exception {
		
		/***************
		 * 감가상각취소! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010P01Dao.processSLIPDELETE01(searchVo);
		
	}
	
	@SuppressWarnings("rawtypes")
	public void processSLIPCREATE02(Map searchVo) throws Exception {

		/***************
		 * 상각전표생성! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010P01Dao.processSLIPCREATE02(searchVo);

	}
	
	@SuppressWarnings("rawtypes")

	public void processSLIPDELETE02(Map searchVo) throws Exception {
		
		/***************
		 * 상각전표삭제! *
		 ***************/
		String STDS_YMTH = (String) searchVo.get("STDS_YMTH");
		LOGGER.debug("------- STDS_YMTH  ------" + STDS_YMTH);

		fSMD0010P01Dao.processSLIPDELETE02(searchVo);
		
	}

}
