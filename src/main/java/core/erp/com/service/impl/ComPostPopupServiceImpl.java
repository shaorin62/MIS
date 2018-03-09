package core.erp.com.service.impl;
									
import java.util.Map;											

import javax.annotation.Resource;								

import org.slf4j.Logger;                       
import org.slf4j.LoggerFactory;                
import org.springframework.stereotype.Service;   

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;        
import core.erp.com.service.ComPostPopupService;

/**
 * <pre>
 *	ComPostPopupService - 우편번호팝업
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈  <isb@inbus.co.kr>
 * @since	2014. 10. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 6.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */

@Service("ComPostPopupService")
public class ComPostPopupServiceImpl extends EgovAbstractServiceImpl implements ComPostPopupService {

	private static final Logger logger = LoggerFactory.getLogger(ComPostPopupServiceImpl.class);

	@Resource(name="ComPostPopupDao")
	private ComPostPopupDao comPostPopupDao;


	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return comPostPopupDao.processSEARCH00(searchVo);
		
	}
		
	
}
