package core.erp.trm.service.impl;

import java.util.HashMap;
import java.util.List;											
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;                 

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.trm.service.TRME0010Service;

/**
 * <pre>
 *	TRME0010Service - 법인카드 정보
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 23
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Service("TRME0010Service")
public class TRME0010ServiceImpl extends EgovAbstractServiceImpl implements TRME0010Service {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0010ServiceImpl.class);

	@Resource(name="TRME0010Dao")
	private TRME0010Dao tRME0010Dao;

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 법인카드 정보를 조회한다.
	 * @param param - 조회조건
	 * @return dsTA_OFFLOC
	 * @exception Exception 예외
	 */

	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTA_CARDXM", tRME0010Dao.processSEARCH00(searchVo));
		return returnMap;
	}

	/**
	 * 
	 * 작성자 : 김준수
	 * 일시 : 2016 06 23
	 * 내용 : 법인카드 정보를   저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo, Map saveData) throws Exception{

		int updateCount = 0;
		int deleteCount = 0;
		Map rowVo = null;
		int rowType = 0;

		List dsTA_CARDXM     = (List) saveData.get("dsTA_CARDXM");  
		List dsTA_CARDXM_Del = (List) saveData.get("dsTA_CARDXM_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
		for (int i = 0; i < dsTA_CARDXM_Del.size(); i++) {

			rowVo = (Map) dsTA_CARDXM_Del.get(i);
			deleteCount += tRME0010Dao.processDELETE00(rowVo);

		}

		//DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTA_CARDXM.size(); i++) {
			rowVo = (Map) dsTA_CARDXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			rowVo.put("CARD_NUMB", rowVo.get("CARD_NUMB"));	//"-" 하이펀 있는 카드번호
			
			if (rowType == 1) {	
				tRME0010Dao.processSAVE00(rowVo);
			} else if (rowType == 2) {
				updateCount += tRME0010Dao.processUPDATE00(rowVo);
			}
		}

		return deleteCount + updateCount;

	}

}
