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
import core.erp.tmm.service.TMMB0050Service;

/**
 * <pre>
 *	TMMB0050ServiceImpl - 그룹별 사용자 권한 관리
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
@Service("TMMB0050Service")
public class TMMB0050ServiceImpl extends EgovAbstractServiceImpl implements TMMB0050Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0050ServiceImpl.class);

	@Resource(name = "TMMB0050Dao")
	private TMMB0050Dao dao;

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_ATGPXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_AUTHXM", dao.processSEARCH01(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData, Map searchVo) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map data = null;
		 int rowType = 0;
		 
		 /**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */
		List dsTM_AUTHXM     = (List) saveData.get("dsTM_AUTHXM");  
		//List dsTM_AUTHXM_Del = (List) saveData.get("dsTM_AUTHXM_DELETE");

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_AUTHXM.size(); i++) {

			data = (Map) dsTM_AUTHXM.get(i);

			//폼권한 값 체크
			if(data.get("FMAU_YSNO").toString().trim().equals("1") ||
				data.get("SEAU_YSNO").toString().trim().equals("1") || 
				data.get("INAU_YSNO").toString().trim().equals("1") || 
				data.get("DEAU_YSNO").toString().trim().equals("1") || 
				data.get("SVAU_YSNO").toString().trim().equals("1") || 
				data.get("SVAU_YSNO").toString().trim().equals("1") || 
				data.get("EXCE_YSNO").toString().trim().equals("1") || 
				data.get("PRAU_YSNO").toString().trim().equals("1") ||
				!data.get("ATHR_LEVL").toString().trim().equals("")) {	//권한을 체크하여 저장할 경우..
					
				logger.debug("Insert Data : " + data.toString());
				dao.processSAVE00(data);
				updateCount += 1;
				
			
			} else {
				
				dao.processDELETE00(data);
				deleteCount += 1;
			}

		}

		return deleteCount + updateCount;

	}	
}
