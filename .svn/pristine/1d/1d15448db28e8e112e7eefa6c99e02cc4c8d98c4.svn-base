package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;											
import java.util.Iterator;										
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.tmm.service.TMMB0060Service;

/**
 * <pre>
 *	TMMB0060ServiceImpl - 그룹별 사용자 권한 관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 19.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 19.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMB0060Service")
public class TMMB0060ServiceImpl extends EgovAbstractServiceImpl implements TMMB0060Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0060ServiceImpl.class);

	@Resource(name="TMMB0060Dao")
	private TMMB0060Dao dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//return TMMB0060Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_ATGPXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_GROUPX", dao.processSEARCH01(searchVo));
		
		//2개를 같이 부르다가 전체 사용자목록 가져오는게 느려서 분리 시킴
		//returnMap.put("dsTM_USERXM", dao.processSEARCH02(searchVo));
		return returnMap;

	}
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_USERXM", dao.processSEARCH02(searchVo));
		return returnMap;

	}	

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		List dsTM_GROUPX     = (List) saveData.get("dsTM_GROUPX");  
		List dsTM_GROUPX_Del = (List) saveData.get("dsTM_GROUPX_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_GROUPX_Del.size(); i++) {

        	rowVo = (Map) dsTM_GROUPX_Del.get(i);
        	
        	//권한이력 종료일시 업데이트
        	updateCount += dao.processUPDATE00(rowVo);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_GROUPX.size(); i++) {

			rowVo = (Map) dsTM_GROUPX.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			dao.processSAVE00(rowVo);
			//권한이력 저장 
			dao.processSAVE01(rowVo);
		}
		
		return deleteCount + updateCount;

	}	
}
