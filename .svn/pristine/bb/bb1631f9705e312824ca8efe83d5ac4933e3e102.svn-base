/**
 * core.erp.hrm.service.impl.HATF0060ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.xapi.data.DataSet;

import core.erp.hat.service.HATF0060Service; 
import core.erp.hat.web.HATF0060Controller;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	HATF0060ServiceImpl - 출장여비정산 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	김남호
 * @since	2016.09.19
 * @version	1.0
 * @see		{@link HATF0060Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김남호		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("HATF0060Service")
public class HATF0060ServiceImpl extends EgovAbstractServiceImpl implements HATF0060Service {

	/**
	 * 출장여비정산 내역조회 DAO class inject.
	 */
	@Resource(name = "HATF0060Dao")
	private HATF0060Dao dao;

	@Resource(name = "HATF0070Dao")
	private HATF0070Dao hATF0070Dao;

	@Resource(name = "HATF0080Dao")
	private HATF0080Dao hATF0080Dao;

	/**
	 * 출장여비정산 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 출장여비정산 내역
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAT_BUTRXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }	
	
}
