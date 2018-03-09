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
import core.erp.tmm.service.TMMA0230Service;
/**																										
 * <pre>                                                                                                
 *	TMMA0230ServiceImpl - 템플릿 구현                                                   
 * <p><b>NOTE : </b>템플릿에 사용한 서비스 인터페이스의 구현클래스이며, 해당 템플릿은 공통메시지 기능을 이용하였음.</p>   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	developer <email@inbus.co.kr>                                                               
 * @since	2014. 9. 23.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2014. 9. 23.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     


/**
 * <pre>
 *	TMMA0230ServiceImpl - 일정 테이블 조회
 * <p><b>NOTE : 일정 테이블 조회</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TMMA0230Service")
public class TMMA0230ServiceImpl extends EgovAbstractServiceImpl implements TMMA0230Service {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0230ServiceImpl.class);

	@Resource(name="TMMA0230Dao")
	private TMMA0230Dao TMMA0230Dao;

    /**
    *
    * @param searchVO - 조회할 정보가 담긴 VO
    * @return Meta Meta 일정 테이블 조회
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		//return TMMA0230Dao.processSEARCH00(searchVo);
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("dsTM_SCHDXM", TMMA0230Dao.processSEARCH00(searchVo));
		return returnMap;
	}
	

    /**
    *
    * @param voList - 등록할 정보가 담긴 SampleVO
    * @exception Exception
    */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 /**
		 * Row Type
		 * 1 : Insert
		 * 2 : Update
		 * 3 : Delete
		 */

		List dsTM_SCHDXM = (List) saveData.get("dsTM_SCHDXM");
		List dsTM_SCHDXM_DELETE = (List) saveData.get("dsTM_SCHDXM_DELETE");

        for (int i = 0; i < dsTM_SCHDXM_DELETE.size(); i++) {
			rowVo = (Map) dsTM_SCHDXM_DELETE.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType != 3) continue;
        	
			logger.info("Delete : "+ rowVo);
			deleteCount += TMMA0230Dao.processDELETE00(rowVo);
			
		}

		for (int i = 0; i < dsTM_SCHDXM.size(); i++) {
			rowVo = (Map) dsTM_SCHDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 3) continue;

			logger.info("SAVE/UPDATE : " + rowVo);			
			
			if (rowType == 1) {
				TMMA0230Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {
				updateCount += TMMA0230Dao.processUPDATE00(rowVo);

			}		
			
		}
		 
		logger.info("delete count : " + deleteCount);
		logger.info("update count : " + updateCount);

		return deleteCount + updateCount;
		
	}
	
}
