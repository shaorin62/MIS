/**
 * core.erp.tmm.service.impl.FSMC0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import core.erp.fsm.service.FSMC0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMC0010ServiceImpl - 자산대장 조회 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 * @see		{@link FSMC0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMC0010Service")
public class FSMC0010ServiceImpl extends EgovAbstractServiceImpl implements FSMC0010Service {
	
	private static final Logger logger = LoggerFactory.getLogger(FSMC0010ServiceImpl.class);
	
	/**
	 * 자산대장 조회 DAO class inject.
	 */
	@Resource(name = "FSMC0010Dao")
	private FSMC0010Dao fSMC0010Dao;

	/**
	 * 자산대장을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 자산대장 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		String CHNG_MONT = "";	// 기준일자의 해당 월
		String STDS_YMTH = "";	// 조회대상이 되는 기준월
		String HAVE_YSNO = "";	// 보유여부
		String ODER_GUBN = "";	// 정렬구분(부서별 / 품목별)
		
		
		// 기준일자의 해당 월
		CHNG_MONT = (String) searchVo.get("CHNG_DATE");
		CHNG_MONT = CHNG_MONT.substring(0, 6);
		searchVo.put("CHNG_MONT", CHNG_MONT);
		
		// 조회대상이 되는 기준월 select
		STDS_YMTH = fSMC0010Dao.processSEARCH_STDS_YMTH(searchVo);
		searchVo.put("STDS_YMTH", STDS_YMTH);
		
		// 보유여부
		HAVE_YSNO = (String) searchVo.get("HAVE_YSNO");
		if (HAVE_YSNO.equals("1")) {
			HAVE_YSNO = "Y";
		} else if (HAVE_YSNO.equals("0")) {
			HAVE_YSNO = "N";
		} else {
			HAVE_YSNO = "";
		}
		searchVo.put("HAVE_YSNO", HAVE_YSNO);
		
		// 정렬기준 : 부서별 조회 / 품목별 조회
		ODER_GUBN = (String) searchVo.get("ODER_GUBN");
		if (ODER_GUBN.equals("DEPTGUBN")) {
			returnMap.put("dsFS_ASCHXM1", fSMC0010Dao.processSEARCH00(searchVo));
		} else {
			returnMap.put("dsFS_ASCHXM1", fSMC0010Dao.processSEARCH01(searchVo));
		}
		
		return returnMap;

    }

}
