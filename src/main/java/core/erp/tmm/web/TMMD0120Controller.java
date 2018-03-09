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
import core.erp.tmm.service.TMMD0120Service;

/**
 * <pre>
 *	TMMD0120Controller - DB Meta 정보조회
 * <p><b>NOTE : DB Meta 정보조회</b></p>
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
public class TMMD0120Controller {

	private static final Logger logger = LoggerFactory.getLogger(TMMD0120Controller.class);

	@Resource(name="TMMD0120Service")
	private TMMD0120Service TMMD0120Service;

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
	@RequestMapping(value="/core/erp/tmm/TMMD0120_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = TMMD0120Service.processSEARCH00(searchVo);
			//coreResultData.addDataSet("dsObjectList", ds);
			coreResultData.setReturnDataMap((Map<String, Object>) TMMD0120Service.processSEARCH00(searchVo));
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
	 * Meta 용어자료 Search
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping(value="/core/erp/tmm/TMMD0120_SEARCH01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

/*			Object ds = TMMD0120Service.processSEARCH01(searchVo);
			coreResultData.addDataSet("dsTableColumnList", ds);
			Object ds1 = TMMD0120Service.processSEARCH02(searchVo);
			coreResultData.addDataSet("dsTableIndexList", ds1);
			Object ds2 = TMMD0120Service.processSEARCH03(searchVo);
			coreResultData.addDataSet("dsSCRIPT", ds2);*/
			
			coreResultData.setReturnDataMap((Map<String, Object>) TMMD0120Service.processSEARCH01(searchVo));
			coreResultData.setReturnDataMap((Map<String, Object>) TMMD0120Service.processSEARCH02(searchVo));
			coreResultData.setReturnDataMap((Map<String, Object>) TMMD0120Service.processSEARCH03(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
