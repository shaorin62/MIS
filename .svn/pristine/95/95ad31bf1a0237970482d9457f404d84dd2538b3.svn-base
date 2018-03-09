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
import core.erp.com.service.ComHelpPopupService;

/**
 * <pre>
 *	ComHelpPopupController - 공통팝업
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
public class ComHelpPopupController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComHelpPopupController.class);

	@Resource(name="ComHelpPopupService")
	private ComHelpPopupService comHelpPopupService;

	/**
	 * <pre>
	 *  공통팝업 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value="/core/erp/com/ComHelpPopup_HelpFormSearch.do")
	public ModelAndView processHelpFormSearch(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) comHelpPopupService.processHelpFormDesign(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 *  공통팝업 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value="/core/erp/com/ComHelpPopup_HelpDataSearch.do")
	public ModelAndView processHelpDataSearch(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();		
			LOGGER.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) comHelpPopupService.processHelpDataSearch(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processHelpDataSearch : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value="/core/erp/com/ComHelpPopup_HelpCodeNameSearch.do")
	public ModelAndView processHelpCodeNameSearch(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) comHelpPopupService.processHelpDataSearch(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	

}
