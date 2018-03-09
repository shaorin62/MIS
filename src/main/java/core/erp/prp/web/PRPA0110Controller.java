/**
 * core.erp.tmm.web.PRPA0110Controller.java - <Created by Code Template generator>
 */
package core.erp.prp.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.prp.service.PRPA0110Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PRPA0110Controller - 제작 결산관리  실적집계표 (모델료집계)
 * </pre>
 *
 * @author	오세훈
 * @since	2016.11.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PRPA0110Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PRPA0110Controller.class);

	/**
	 * 제작실적집계표 서비스 클래스
	 */
	@Resource(name="PRPA0110Service")
	private PRPA0110Service service;

    /**
     * *********************************************************************************
	 * 제작 결산관리 실적집계표 (제작건별 실적 집계)
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PRPA0110/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/prp/PRPA0110_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
		
	/**
     * *********************************************************************************
	 * 제작 결산관리 실적집계표 (제작건별 실적 집계) 유비리포트
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PRPA0090/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/prp/PRPA0110_PRINT00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {
		
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(searchVo));
			//년월 입력
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT01(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPRINT00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
		

	} 
}
