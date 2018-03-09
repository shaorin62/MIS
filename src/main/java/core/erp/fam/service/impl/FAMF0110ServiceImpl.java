/**
 * core.erp.tmm.service.impl.FAMF0110ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.fam.service.FAMF0110Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FAMF0110ServiceImpl - 원가명세서 조회 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	권미영
 * @since	2016.10.17
 * @version	1.0
 * @see		{@link FAMF0110Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FAMF0110Service")
public class FAMF0110ServiceImpl extends EgovAbstractServiceImpl implements FAMF0110Service {

	/**
	 * 원가명세서 조회 DAO class inject.
	 */
	@Resource(name = "FAMF0110Dao")
	private FAMF0110Dao dao;

	/**
	 * 원가명세서 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 원가명세서 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//====================================================
		// 1. 원가명세서 자료 생성
		//====================================================
		dao.processSAVE00(searchVo);

		//====================================================
		// 2. 원가명세서 조회
		//====================================================
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_MODTMP", dao.processSEARCH00(searchVo));
		return returnMap;

    }

}
