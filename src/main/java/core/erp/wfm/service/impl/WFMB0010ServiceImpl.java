/**
 * core.erp.wfm.service.impl.WFMB0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import core.erp.wfm.service.WFMB0010Service; 
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	WFMB0010ServiceImpl - 메시지 관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.05
 * @version	1.0
 * @see		{@link WFMB0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("WFMB0010Service")
public class WFMB0010ServiceImpl extends EgovAbstractServiceImpl implements WFMB0010Service {

	/**
	 * 메시지 관리 DAO class inject.
	 */
	@Resource(name = "WFMB0010Dao")
	private WFMB0010Dao dao;

	/**
	 * 학자금기준 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 학자금기준 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsWF_SCEXXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	

	/**
	 * WFMB0010 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 int State = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 String sCode = "";
		 String sResult = "";

		List dsWF_SCEXXM     = (List) saveData.get("dsWF_SCEXXM");  
		List dsWF_SCEXXM_DEL = (List) saveData.get("dsWF_SCEXXM_DELETE");
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete

        for (int idx = 0; idx < dsWF_SCEXXM_DEL.size(); idx++) {
        	
        	rowVo = (Map) dsWF_SCEXXM_DEL.get(idx);
        	//학자금코드 사용여부 확인
        	sResult = (String) dao.processSEARCHSCEXCODE(rowVo);
        	
        	if (Integer.parseInt(sResult) > 0 ) {
        		State =  -1;
        	}else {
        		deleteCount += dao.processDELETE00(rowVo);
        	}
		}
		

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int idx = 0; idx < dsWF_SCEXXM.size(); idx++) {

			rowVo = (Map) dsWF_SCEXXM.get(idx);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			//학자금코드 사용여부 확인
        	sResult = (String) dao.processSEARCHSCEXCODE2(rowVo);

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
