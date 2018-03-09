package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import core.erp.pay.service.PAYF0120Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0120ServiceImpl - 퇴직연금납입금관리 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수
 * @since	2016. 9. 12.
 * @version	1.0
 * @see		{@link PAYF0110Service}
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("PAYF0120Service")
public class PAYF0120ServiceImpl extends EgovAbstractServiceImpl implements PAYF0120Service {

	/**
	 * 퇴직연금사업자 DAO class inject.
	 */
	@Resource(name = "PAYF0120Dao")
	private PAYF0120Dao dao;

	/**
	 * 퇴직연금납입금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSDC1", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 퇴직연금납입금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSDC2", dao.processSEARCH01(searchVo));
		return returnMap;

    }

}
