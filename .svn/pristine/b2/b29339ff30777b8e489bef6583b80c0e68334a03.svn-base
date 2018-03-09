package core.erp.tmm.service.impl;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.tmm.service.TMMB0010Service;
import core.ifw.utl.CryptSHA;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	TMMB0010ServiceImpl - 사용자정보관리
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
@Service("TMMB0010Service")
public class TMMB0010ServiceImpl extends EgovAbstractServiceImpl implements TMMB0010Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0010ServiceImpl.class);

	@Resource(name="TMMB0010Dao")
	private TMMB0010Dao dao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		//return dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_USERXM", dao.processSEARCH00(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		//dsTM_USERXM
		//return dao.processSEARCH01(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_GROUPX", dao.processSEARCH01(searchVo));
		return returnMap;

	}

	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		List dsTM_USERXM     = (List) saveData.get("dsTM_USERXM");  
		List dsTM_USERXM_Del = (List) saveData.get("dsTM_USERXM_DELETE");

		List dsTM_GROUPX_Del = (List) saveData.get("dsTM_GROUPX_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_GROUPX_Del.size(); i++) {

        	rowVo = (Map) dsTM_GROUPX_Del.get(i);
        	deleteCount += dao.processUPDATE01(rowVo);
			deleteCount += dao.processDELETE01(rowVo);

		}
        
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_USERXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_USERXM_Del.get(i);
        	deleteCount += dao.processDELETE02(rowVo);
        	deleteCount += dao.processDELETE03(rowVo);
        	deleteCount += dao.processDELETE04(rowVo);
			deleteCount += dao.processDELETE00(rowVo);
		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_USERXM.size(); i++) {

			rowVo = (Map) dsTM_USERXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
				//최초비밀번호는 USER_IDXX와 동일하게 셋팅한다.
				rowVo.put("SCRT_NUMB", CryptSHA.encrypt256((String) rowVo.get("USER_IDXX")));
				
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}	
	
}
