package core.erp.txm.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.txm.service.TXMD0010Service;

/**
 * <pre>
 *	TXMD0010Service - 소득내역
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TXMD0010Service")
public class TXMD0010ServiceImpl extends EgovAbstractServiceImpl implements TXMD0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0010ServiceImpl.class);

	@Resource(name="TXMD0010Dao")
	private TXMD0010Dao tXMD0010Dao;

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 소득내역을 조회한다.
	 * @param param - 조회조건
	 * @return dsTA_OFFLOC
	 * @exception Exception 예외
	 */
	
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_GITAMAST", tXMD0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 소득내역  저장,수정 또는 삭제한다.
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

		List dsTA_GITAMAST     = (List) saveData.get("dsTA_GITAMAST");  
		List dsTA_GITAMAST_Del = (List) saveData.get("dsTA_GITAMAST_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTA_GITAMAST_Del.size(); i++) {
        	
        	rowVo = (Map) dsTA_GITAMAST_Del.get(i);
			deleteCount += tXMD0010Dao.processDELETE00(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_GITAMAST.size(); i++) {

			rowVo = (Map) dsTA_GITAMAST.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				tXMD0010Dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				updateCount += tXMD0010Dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;

	}
	
}
