/**
 * core.erp.tmm.service.impl.FSMF0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fsm.service.FSMF0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <pre>
 *	FSMF0010ServiceImpl - 건설중 자산실사 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.28
 * @version	1.0
 * @see		{@link FSMF0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.28	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMF0010Service")
public class FSMF0010ServiceImpl extends EgovAbstractServiceImpl implements FSMF0010Service {

	private static final Logger logger = LoggerFactory.getLogger(FSMF0010ServiceImpl.class);

	/**
	 * 건설중 자산대체 헤더 조회 처리 DAO class inject.
	 */
	@Resource(name = "FSMF0010Dao")
	private FSMF0010Dao fSMF0010Dao;

	/**
	 * 건설중 자산대체 헤더 조회 한다
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 건설중 자산대체 헤더 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASTFXM", fSMF0010Dao.processSEARCH00(searchVo));
		return returnMap;

	}

	/**
	 * 건설중 자산대체 디테일 조회 처리
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 건설중 자산대체 디테일 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_ASTFLA", fSMF0010Dao.processSEARCH01(searchVo));
		return returnMap;

	}

	/**
	 * 자산대체전표 삭제
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSLIPDELETE00(Map searchVo) throws Exception{

		int deleteCount = 0;

		logger.debug("------- ACCT_UNIT  ------" + searchVo.get("ACCT_UNIT"));
		logger.debug("------- ASTF_DATE  ------" + searchVo.get("ASTF_DATE"));
		logger.debug("------- ASTF_NUMB  ------" + searchVo.get("ASTF_NUMB"));
		logger.debug("------- SLIP_NUMB  ------" + searchVo.get("SLIP_NUMB"));

		fSMF0010Dao.processSLIPDELETE00(searchVo);

		return deleteCount;

	}
	
	/**
	 * 자산대체전표 저장
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processSLIP00(Map searchVo) throws Exception {
		
		
		fSMF0010Dao.processSLIP00(searchVo);

    }

}
