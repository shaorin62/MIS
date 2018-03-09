/**
 * core.erp.pay.web.PAYC0020Controller.java - <Created by Code Template generator>
 */
package core.erp.pay.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pay.service.PAYC0020Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;



/**
 * <pre>
 *	PAYC0020Controller - 급여명세서 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.08.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.01	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Controller
public class PAYC0020Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYC0020Controller.class);

	/**
	 * 급여명세서 메뉴 서비스 클래스
	 */
	@Resource(name="PAYC0020Service")
	private PAYC0020Service service;

    /**
	 * 급여 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYC0020/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYC0020_SEARCH00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
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
	 * 급여 상세 지급 목록을 조회한다.
	 *
	 * @param commandMap
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/core/erp/pay/PAYC0020_SEARCH02.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
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
	 * 급여 수당 지급 목록을 조회한다.
	 *
	 * @param commandMap
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/core/erp/pay/PAYC0020_SEARCH03.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH03(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH03 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * 급여 공제 지급 목록을 조회한다.
	 *
	 * @param commandMap
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/core/erp/pay/PAYC0020_SEARCH04.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH04(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH04(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH04 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * 급여 공제 기타보상,기타공제,연차 목록을 조회한다.
	 *
	 * @param commandMap
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/core/erp/pay/PAYC0020_SEARCH05.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH05(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH05(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH05 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}


}
