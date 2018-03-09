/**
 * core.erp.tmm.service.impl.FSMF0005ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.fam.service.impl.FAMA0120ServiceImpl;
import core.erp.fsm.service.FSMF0005Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	FSMF0005ServiceImpl - 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	
 * @since	2016.09.07
 * @version	1.0
 * @see		{@link FSMF0005Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	최인철		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("FSMF0005Service")
public class FSMF0005ServiceImpl extends EgovAbstractServiceImpl implements FSMF0005Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(FAMA0120ServiceImpl.class);

	/**
	 * DAO class inject.
	 */
	@Resource(name = "FSMF0005Dao")
	private FSMF0005Dao dao;

	/**
	 * 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 화면의 년월
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_CIP", dao.processSEARCH00(searchVo));
		return returnMap;

    }
		
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFS_CIP", dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * FSMF0005 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsFS_AMRATE     = (List) saveData.get("dsFS_CIP");  
		List dsFS_AMRATE_Del = (List) saveData.get("dsFS_CIP_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsFS_AMRATE_Del.size(); i++) {

        	rowVo = (Map) dsFS_AMRATE_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsFS_AMRATE.size(); i++) {
			
			rowVo = (Map) dsFS_AMRATE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}

}
