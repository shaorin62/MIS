/**
 * core.erp.hrm.web.WFMG0040Controller.java - <Created by Code Template generator>
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

import core.erp.wfm.service.WFMG0040Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMG0040Controller - 연수지원관리 컨트롤러 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.10.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.04	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMG0040Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(WFMG0040Controller.class);

	/**
	 * 연수지원신청서  서비스 클래스
	 */
	@Resource(name="WFMG0040Service")
	private WFMG0040Service service;

	 /**
		 * 연수지원신청서를 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/WFMG0040/SEARCH00"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/wfm/WFMG0040_SEARCH00.do")
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
			 * @return "/WFMG0040/SEARCH01"
			 * @exception Exception - 조회시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/wfm/WFMG0040_SEARCH01.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
				String sWOTM_YCNT = null;
				try {

					Map searchVo = coreRequest.getMapVariableList();
					logger.info("searchVo : " + searchVo.toString());
					
					sWOTM_YCNT =  (String) service.processSEARCH01(searchVo);
					coreResultData.setResultMessageSuccessSelect();
					
					coreResultData.addVariableList("sWOTM_YCNT", sWOTM_YCNT);

				} catch(Exception e) {
					logger.error("processSEARCH01 : " + e.getMessage());
					coreResultData.setResultMessageFailSelect(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;

			} 
			
		/**
		 * <pre>
		 * 연수지원 등록/수정/삭제
		 * </pre>
		 *
		 * @param param - 처리할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/wfm/WFMG0040_SAVE00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
			String sKey="";
			try {

				sKey = service.processSAVE00(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();
				coreResultData.addVariableList("GBL_KEYROWPOSITION1", sKey);
			} catch(Exception e) {
				logger.error("processSAVE00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
}
