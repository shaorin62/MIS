/**
 * core.erp.tmm.service.impl.TMMA0100ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMA0100Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;



/**
 * <pre>
 *	TMMA0100ServiceImpl - 다국어명칭관리 서비스 인터페이스 구현 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 10. 17.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMA0100Service")
public class TMMA0100ServiceImpl extends EgovAbstractServiceImpl implements TMMA0100Service {

	/**
	 * 다국어명칭관리상세 DAO class inject.
	 */
	@Resource(name = "TMMA0100Dao")
	private TMMA0100Dao tMMA0100Dao;

	/**
	 * 다국어명칭관리마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_MILNXH", tMMA0100Dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * 다국어명칭관리상세 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_MTLNXM", tMMA0100Dao.processSEARCH01(searchVo));
		return returnMap;

    }

	/**
	 * 다국어명칭관리상세를 저장,수정 또는 삭제한다.
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

		List dsTM_MTLNXM     = (List) saveData.get("dsTM_MTLNXM");  
		List dsTM_MTLNXM_Del = (List) saveData.get("dsTM_MTLNXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_MTLNXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_MTLNXM_Del.get(i);
			deleteCount += tMMA0100Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_MTLNXM.size(); i++) {

			rowVo = (Map) dsTM_MTLNXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {
			
				tMMA0100Dao.processSAVE00(rowVo);

			} 
		}
		
		return deleteCount + updateCount;

	}
}
