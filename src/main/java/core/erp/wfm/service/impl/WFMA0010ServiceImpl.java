/**
 * core.erp.wfm.service.impl.WFMA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.wfm.service.WFMA0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMA0010ServiceImpl - 경조금 기준 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	정한균
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link WFMA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	정한균		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMA0010Service")
public class WFMA0010ServiceImpl extends EgovAbstractServiceImpl implements WFMA0010Service {

	/**
	 * 경조금 기준 관리 DAO class inject.
	 */
	@Resource(name = "WFMA0010Dao")
	private WFMA0010Dao dao;

	/**
	 * 경조금 기준 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 경조금 기준 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsCW_COCOBS", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * WFMA0010 저장,수정 또는 삭제한다.
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
		 int State = 0;
		 String sResult = "";

		List dsCW_COCOBS     = (List) saveData.get("dsCW_COCOBS");  
		List dsCW_COCOBS_DEL = (List) saveData.get("dsCW_COCOBS_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int idx = 0; idx < dsCW_COCOBS_DEL.size(); idx++) {

        	rowVo = (Map) dsCW_COCOBS_DEL.get(idx);
        	
        	sResult = (String) dao.processSEARCH01(rowVo);
        	
        	if (Integer.parseInt(sResult) > 0 ) {
        		State =  -1;
        	}else {
        		deleteCount += dao.processDELETE00(rowVo);
        	}

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int idx = 0; idx < dsCW_COCOBS.size(); idx++) {

			rowVo = (Map) dsCW_COCOBS.get(idx);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			sResult = (String) dao.processSEARCH02(rowVo);
			
			if (rowType == 1) {
				if (Integer.parseInt(sResult) > 0 ) {
            		State =  -2;
            	}else {
					dao.processSAVE00(rowVo);
					updateCount++;
            	}

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		if (State != 0) {
			return State;
		}else {
			return deleteCount + updateCount;
		}
	}
}
