package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nexacro.xapi.data.DataSet;

import core.erp.com.service.ComMakeComboService;
import core.erp.com.service.ComSequenceService;
import core.ifw.utl.DataSetUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**																										
 * <pre>                                                                                                
 *	CommMakeComboServiceImpl - 템플릿 구현                                                   
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



/******************************************************************************
 * <pre>
 *   
 *   프로그램명 : ComMakeCombo Package
 *   클래스명 : CommMakeComboController.java
 *   작성일자 : 2014. 09. 27.
 *   작 성 자 : 임선빈
 *   비   고 :
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Service("comSequenceService")
public class ComSequenceServiceImpl extends EgovAbstractServiceImpl implements ComSequenceService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComMakeComboServiceImpl.class);

	@Resource(name="comSequenceDao")
	private ComSequenceDao dao;

	public Object getSequenceInfo(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		if (searchVo.get("SECH_COND").toString().isEmpty()) {
			// 1. 공통 시퀀스 업데이트를 먼저 실행한다!
			dao.updateSequenceInfo(searchVo);
		} else {
			dao.updateSequenceDtlInfo(searchVo);
		}
		
		// 2. 업데이트 정상 종료 후 조회를 한다.
		returnMap.put("dsGET_SEQUENCE", dao.selectSequenceInfo(searchVo));
		
		return returnMap;
	}
}
