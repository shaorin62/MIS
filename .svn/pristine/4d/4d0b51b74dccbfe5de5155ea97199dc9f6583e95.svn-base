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
import core.erp.tmm.service.TMMB0040Service;

/**
 * <pre>
 *	TMMB0040ServiceImpl - 그룹 권한 관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 17.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMB0040Service")
public class TMMB0040ServiceImpl extends EgovAbstractServiceImpl implements TMMB0040Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TMMB0040ServiceImpl.class);

	@Resource(name = "TMMB0040Dao")
	private TMMB0040Dao dao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		//return tMMB0040Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_ATGPXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTM_ATGPXM     = (List) saveData.get("dsTM_ATGPXM");  
		List dsTM_ATGPXM_Del = (List) saveData.get("dsTM_ATGPXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
       for (int i = 0; i < dsTM_ATGPXM_Del.size(); i++) {

	       	rowVo = (Map) dsTM_ATGPXM_Del.get(i);
	       	
	       	// 자료조회 권한 삭제
	       	deleteCount += dao.processDELETE01(rowVo);
	       	
	       	// 그룹별 권한 삭제
	       	deleteCount += dao.processDELETE02(rowVo);
	       
	       	// 그룹별 사용자 권한 삭제
	       	deleteCount += dao.processDELETE03(rowVo);
	       	
	       	// 권한그룹사용자이력
	       	deleteCount += dao.processDELETE04(rowVo);
	       	
	       	// 권한그룹 삭제
			deleteCount += dao.processDELETE00(rowVo);

		}

       //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_ATGPXM.size(); i++) {

			rowVo = (Map) dsTM_ATGPXM.get(i);
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
