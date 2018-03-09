/**
 * core.erp.hrm.service.impl.HATF0070P03ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATF0070P03Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0070P03ServiceImpl -출장신청등록 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김남호
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link HATF0070P03Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김남호		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATF0070P03Service")
public class HATF0070P03ServiceImpl extends EgovAbstractServiceImpl implements HATF0070P03Service {

	/**
	 * 출장여비정산 등록 DAO class inject.
	 */
	@Resource(name = "HATF0070P03Dao")
	private HATF0070P03Dao HATF0070P03DAO;
	
	//@Resource(name = "HATF0040Dao")
	//private HATF0040Dao hATF0040DAO;

	/**
	 * 출장여비정산 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 출장여비정산 결재 상테 조회
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_DAYECT", HATF0070P03DAO.processSEARCH00(searchVo));
		return returnMap;

    }
}
