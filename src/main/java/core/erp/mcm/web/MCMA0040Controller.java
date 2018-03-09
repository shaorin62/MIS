/**
 * core.erp.mcm.web.MCMA0040Controller.java - <Created by Code Template generator>
 */
package core.erp.mcm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.mcm.service.MCMA0040Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MCMA0040Controller - 코바넷광고주등록(신규) 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MCMA0040Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MCMA0040Controller.class);

	/**
	 * 코바넷 광고주 등록(신규) 메뉴 서비스 클래스
	 */
	@Resource(name="MCMA0040Service")
	private MCMA0040Service service;

  /**
	 * 코바넷 광고주 등록 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MCMA0040/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0040_SEARCH00.do")
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
	 * SBS 광고주 등록 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MCMA0040/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0040_SEARCH01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH01(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}
		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	/**
	 * 광고주 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MCMA0040/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0040_SEARCH02.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH02 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}
		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 

	/**
	 * <pre>
	 * 코바넷광고주코드(신규) 을 저장,수정 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0040_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * SBS광고주코드(신규) 을 저장,수정 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0040_SAVE01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE01(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE01 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
}
