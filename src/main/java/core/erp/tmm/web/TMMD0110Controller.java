package core.erp.tmm.web;

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
import core.erp.tmm.service.TMMD0110Service;

/**
 * <pre>
 *	TMMD0110Controller - Meta 용어관리
 * <p><b>NOTE : Meta 용어관리</b></p>
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
@Controller
public class TMMD0110Controller {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0110Controller.class);

	@Resource(name="TMMD0110Service")
	private TMMD0110Service TMMD0110Service;

	/**
	 * <pre>
	 * Meta 용어자료 Search
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping(value="/core/erp/tmm/TMMD0110_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = TMMD0110Service.processSEARCH00(searchVo);
			//coreResultData.addDataSet("dsTM_METAXM", ds);
			coreResultData.setReturnDataMap((Map<String, Object>) TMMD0110Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * Meta 용어자료 Save
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping(value="/core/erp/tmm/TMMD0110_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			//Map dataSetMap = coreRequest.getSaveDataSetAll();	
			TMMD0110Service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
