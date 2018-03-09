package core.erp.fam.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMA0065Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	FAMA0065ServiceImpl - 계정사용권한관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	권미영
 * @since	2016.12.06
 * @version	1.0
 * @see		{@link FAMA0065Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.06	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMA0065Service")
public class FAMA0065ServiceImpl extends EgovAbstractServiceImpl implements FAMA0065Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0065ServiceImpl.class);

	@Resource(name = "FAMA0065Dao")
	private FAMA0065Dao fAME0065Dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_AAGRXM", fAME0065Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_AAGRXD", fAME0065Dao.processSEARCH01(searchVo));
		return returnMap;
	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception {

		int insertCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsTA_AAGRXD = (List) saveData.get("dsTA_AAGRXD");

		for (int i = 0; i < dsTA_AAGRXD.size(); i++) {
			rowVo = (Map) dsTA_AAGRXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			if (rowVo.get("CHK").toString().equals("0")) {

				deleteCount += fAME0065Dao.processDELETE00(rowVo);

			} else if (rowVo.get("CHK").toString().equals("1")) {
				
				insertCount += 1;
				fAME0065Dao.processSAVE00(rowVo);
				
			}			
		}

		LOGGER.info("delete count : " + deleteCount);
		LOGGER.info("insert count : " + insertCount);

		return deleteCount + insertCount;

	}
}
