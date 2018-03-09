package core.erp.pay.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pay.service.PAYF0040Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	PAYF0040Controller - 퇴직금지급현황 프로그램 컨트롤러 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class PAYF0040Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYF0040Controller.class);

	/**
	 * 퇴직금지급현황 메뉴 서비스 클래스
	 */
	@Resource(name="PAYF0040Service")
	private PAYF0040Service service;

    /**
	 * 개인별기본급 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0040/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0040_SEARCH00.do")
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
	 * <pre>
	 * 퇴직금지급현황 을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0040_SAVE00.do")
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
	
//	/**
//	 * 인쇄용 퇴직금지급내역 내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0040/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/PAYF0040/REPORT00.do")
//	public String getREPORT00(HttpServletRequest request, ModelMap model) {
//		
//		try {
//			
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//			
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//			
//			while (params.hasMoreElements()) {
//				
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//				
//				Searchparam.put(paramName, paramValue);
//			}
//			
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//			
//			List retList = service.getREPORT00(param);
//			
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//			
//			request.setAttribute("REPORT_DATA", retDocument);
//			
//		} catch (Exception e) {
//			
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//		
//		return "cmm/lib/ComXMLResultView";
//		
//	}
//	
//	
//	/**
//	 * 인쇄용 퇴직금지급내역 내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0040/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/PAYF0040/REPORT01.do")
//	public String getREPORT01(HttpServletRequest request, ModelMap model) {
//		
//		try {
//			
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//			
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//			
//			while (params.hasMoreElements()) {
//				
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//				
//				Searchparam.put(paramName, paramValue);
//			}
//			
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//			
//			List retList = service.getREPORT01(param);
//			
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//			
//			request.setAttribute("REPORT_DATA", retDocument);
//			
//		} catch (Exception e) {
//			
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//		
//		return "cmm/lib/ComXMLResultView";
//		
//	}

}
