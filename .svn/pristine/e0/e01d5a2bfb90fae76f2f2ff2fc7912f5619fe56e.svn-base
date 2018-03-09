/**
 * core.erp.hrm.web.HATC0020Controller.java - <Created by Code Template generator>
 */
package core.erp.wfm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.wfm.service.WFMG0020Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMG0020Controller - 연수신청 및 내역 컨트롤러 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMG0020Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(WFMG0020Controller.class);

	/**
	 * 연수지원신청서  서비스 클래스
	 */
	@Resource(name="WFMG0020Service")
	private WFMG0020Service service;

	 /**
		 * 연수지원신청서를 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/WFMG0020/SEARCH00"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/wfm/WFMG0020_SEARCH00.do")
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
			 * 근속년수를 조회한다.
			 * @param param - 조회할 정보가 담긴 Map 객체
			 * @return "/WFMG0020/SEARCH02"
			 * @exception Exception - 조회시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/wfm/WFMG0020_SEARCH02.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
				String sWOTM_YCNT = null;
				try {

					Map searchVo = coreRequest.getMapVariableList();
					logger.info("searchVo : " + searchVo.toString());
					
					sWOTM_YCNT =  (String) service.processSEARCH02(searchVo);
					coreResultData.setResultMessageSuccessSelect();
					
					coreResultData.addVariableList("sWOTM_YCNT", sWOTM_YCNT);

				} catch(Exception e) {
					logger.error("processSEARCH02 : " + e.getMessage());
					coreResultData.setResultMessageFailSelect(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;

			} 
			
		/**
		 * <pre>
		 * 연수지원신청금액 곹오코드 가져오기
		 * </pre>
		 *
		 * @param param 
		 * @return 공통코드
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/wfm/WFMG0020_SAVE00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
			
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
		   * 근속년수를 조회한다.
		   * @param param - 조회할 정보가 담긴 Map 객체
		   * @return "/WFMG0020/SEARCH03"
		   * @exception Exception - 조회시 발생한 예외
	       */
			@RequestMapping(value = "/core/erp/wfm/WFMG0020_SEARCH03.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSEARCH03(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
				String sWOTM_YCNT = null;
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
}
