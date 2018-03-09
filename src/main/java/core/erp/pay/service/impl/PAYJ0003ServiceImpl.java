/**
 * core.erp.pay.service.impl.PAYJ0003ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.pay.service.PAYJ0003Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PAYJ0003ServiceImpl - 평균인원생성 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.27
 * @version	1.0
 * @see		{@link PAYJ0003Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.27	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("PAYJ0003Service")
public class PAYJ0003ServiceImpl extends EgovAbstractServiceImpl implements PAYJ0003Service {

	/**
	 * 평균인원생성 DAO class inject.
	 */
	@Resource(name = "PAYJ0003Dao")
	private PAYJ0003Dao dao;

	/**
	 * 평균인원 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 평균인원 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_EMPAVG", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * PAYJ0003 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception{
		 
		Map<String, Object> returnMap = new HashMap<String, Object>();
		dao.processSAVE00(searchVo);
		returnMap.put("dsPY_EMPAVG", dao.processSEARCH00(searchVo));
		return returnMap;
	}
}