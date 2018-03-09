package core.erp.txm.web;

import java.util.Map;                                              

import javax.annotation.Resource;                                  

import org.slf4j.Logger;                         
import org.slf4j.LoggerFactory;                  
import org.springframework.stereotype.Controller;					
import org.springframework.ui.ModelMap;                            
import org.springframework.web.bind.annotation.RequestMapping;     
import org.springframework.web.servlet.ModelAndView;               

import core.erp.txm.service.TXMD0020P01Service;
import core.ifw.cmm.request.CoreRequest;                 			
import core.ifw.cmm.result.CoreResultData;     					
/**
 * <pre>
 *	TXMD0020P01P01Service - 지급명세서/영수증출력 POPUP
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	황치웅
 * @since	2016 08. 01
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016 08. 01	황치웅		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TXMD0020P01Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0020P01Controller.class);

	@Resource(name="TXMD0020P01Service")
	private TXMD0020P01Service tXMD0020P01Service;

	/**
	 * <pre>
	 * 소득자 조회, 소득내역등록 자료 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/txm/TXMD0020P01_PRINT00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			
			LOGGER.error("coreRequest.getDataSetAll(); >>>  "+coreRequest.getDataSetAll());
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0020P01Service.processSEARCH00(searchVo));
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
	 * 이자배당 소득자 조회, 이자배당 소득내역등록 자료 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/txm/TXMD0020P01_PRINT01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			
			
			
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0020P01Service.processSEARCH01(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) { 
			LOGGER.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
