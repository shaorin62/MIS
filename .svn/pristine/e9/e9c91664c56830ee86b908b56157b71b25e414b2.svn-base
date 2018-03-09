/**
 * core.erp.hrm.service.impl.HATC0040P01ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATC0040P01Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATC0040P01ServiceImpl -휴가팝업 인터페이스 구현 클래스
 * </pre>
 *
 * @author	이창운
 * @since	2016.09.28
 * @version	1.0
 * @see		{@link HATC0040P01Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	이창운		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATC0040P01Service")
public class HATC0040P01ServiceImpl extends EgovAbstractServiceImpl implements HATC0040P01Service {

	/**
	 * 휴가팝업  DAO class inject.
	 */
	@Resource(name = "HATC0040P01Dao")
	private HATC0040P01Dao dao;
	
	/**
	 * 휴가신청 내용을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_HDAPXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }	
}
