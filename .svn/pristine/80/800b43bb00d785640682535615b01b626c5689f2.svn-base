/**
 * core.erp.hrm.web.HRMC0110Controller.java - <Created by Code Template generator>
 */
package core.erp.hrm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.hrm.service.HRMC0110Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;



/**
 * <pre>
 *	HRMC0110Controller - 여권현황 Controller 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016. 8. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 16.	황치웅				Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class HRMC0110Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(HRMC0110Controller.class);

	/**
	 * 여권현황 메뉴 서비스 클래스
	 */
	@Resource(name="HRMC0110Service")
	private HRMC0110Service hRMC0110Service;

    
	/**
	 * <pre>
	 * 여권현황 조회.
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/core/erp/hrm/HRMC0110_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) hRMC0110Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 

}
