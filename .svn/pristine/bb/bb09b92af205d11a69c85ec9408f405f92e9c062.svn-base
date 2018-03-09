package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMD0420Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TMMD0420ServiceImpl - DB Meta 정보조회
 * <p><b>NOTE : DB Meta 정보조회</b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2017. 01. 04
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017. 01. 04	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMD0420Service")
public class TMMD0420ServiceImpl extends EgovAbstractServiceImpl implements TMMD0420Service {

	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(TMMD0420ServiceImpl.class);

	@Resource(name="TMMD0420Dao")
	private TMMD0420Dao tMMD0420Dao;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsObjectList", tMMD0420Dao.processSEARCH00(searchVo));
		return returnMap;
    }

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta 용어자료 Search
    * @exception Exception
    */
	@Override
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTableValueList", tMMD0420Dao.processSEARCH01(searchVo));
		returnMap.put("dsTableColumnList", tMMD0420Dao.processSEARCH02(searchVo));
		returnMap.put("dsTablePkList", tMMD0420Dao.processSEARCH03(searchVo));

		return returnMap;
    }

}
