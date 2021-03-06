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
import core.erp.tmm.service.TMMB0110Service;

/**
 * <pre>
 *	TMMB0110Controller - 프로그램별실행현황
 * <p><b>NOTE :프로그램별실행현황</b></p>
 * </pre>
 * 
 * @author	임선빈 <ISB@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TMMB0110Controller {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0110Controller.class);

	@Resource(name="TMMB0110Service")
	private TMMB0110Service TMMB0110Service;

	/**
	 * <pre>
	 * Meta 오류자료 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */	
	@RequestMapping(value="/core/erp/tmm/TMMB0110_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = TMMB0110Service.processSEARCH00(searchVo);
			//coreResultData.addDataSet("dsTM_OPERXM", ds);
			// 서비스콜 및 Map<String, Object>를 반환받아 coreResultData에 세팅 [addDataSet, addVariableList] 두가지경우 자동판단후 처리
			coreResultData.setReturnDataMap((Map<String, Object>) TMMB0110Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
