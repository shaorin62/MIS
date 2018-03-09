package core.erp.com.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComWorkAlarmService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	ComWorkAlarmController - 메인화면 알람 컨트롤러
 * </pre>
 * 
 * @author	남상기
 * @since	2016. 11. 17.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date				Modifier		Comment
 * ====================================================
 * 2016. 11. 17.	남상기			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComWorkAlarmController {
	
	private static final Logger logger = LoggerFactory.getLogger(ComWorkAlarmController.class);
	
	@Resource(name = "ComWorkAlarmService")
    private ComWorkAlarmService comWorkAlarmService;
	
	/**
     * <pre>
     * 알람 조회
     * </pre>
     *
     * @param  조회 파라미터
     * @return 리스트 객체
     * @throws Exception 예외가 발생한 경우
     */
	@RequestMapping(value = "/core/erp/com/ComWorkAlarm_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			Map dataMap = coreRequest.getMapVariableList();
			logger.info("dataMap : " + dataMap.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) comWorkAlarmService.processSEARCH00(dataMap));
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
     * 알람 저장
     * </pre>
     *
     * @param  조회 파라미터
     * @return 
     * @throws Exception 예외가 발생한 경우
     */
	@RequestMapping(value = "/core/erp/com/ComWorkAlarm_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
				
		try {
			comWorkAlarmService.processSAVE00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
}
