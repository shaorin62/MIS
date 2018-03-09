package core.erp.com.web;

import java.util.Map;                                              

import javax.annotation.Resource;                                  

import org.slf4j.Logger;                         
import org.slf4j.LoggerFactory;                  
import org.springframework.stereotype.Controller;					
import org.springframework.ui.ModelMap;                            
import org.springframework.web.bind.annotation.RequestMapping;     
import org.springframework.web.servlet.ModelAndView;               
               			

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;     					
import core.erp.com.service.ComPostPopupService;

/**
 * <pre>
 *	ComPostPopupController - 우편번호팝업
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
@Controller
public class ComPostPopupController {

	private static final Logger logger = LoggerFactory.getLogger(ComPostPopupController.class);

	@Resource(name="ComPostPopupService")
	private ComPostPopupService comPostPopupService;

	/**
	 * <pre>
	 *  우편번호팝업 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComPostPopup_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = comPostPopupService.processSEARCH00(searchVo);
			//coreResultData.addDataSet("dsTM_NWPOST", ds);
			//2016 06 10 김준수 수정
			coreResultData.setReturnDataMap((Map<String, Object>) comPostPopupService.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	

}
