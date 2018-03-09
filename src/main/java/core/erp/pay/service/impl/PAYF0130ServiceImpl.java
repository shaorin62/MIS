package core.erp.pay.service.impl;


import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import core.erp.pay.service.PAYF0130Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	PAYF0130ServiceImpl - 퇴직연금납입현황 메뉴 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수
 * @since	2016. 9. 12.
 * @version	1.0
 * @see		{@link PAYF0130Service}
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
@Service("PAYF0130Service")
public class PAYF0130ServiceImpl extends EgovAbstractServiceImpl implements PAYF0130Service {

	/**
	 * 퇴직연금사업자 DAO class inject.
	 */
	@Resource(name = "PAYF0130Dao")
	private PAYF0130Dao dao;

	/**
	 * 퇴직연금납입금 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 Map 객체
	 * @return 조회한 메시지 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPY_RTPSDC", dao.processSEARCH00(searchVo));
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
		returnMap.put("dsPY_RTPSDC", dao.processSEARCH01(searchVo));
		return returnMap;

    }

}
