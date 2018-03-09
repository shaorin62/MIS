/**
 * core.erp.mrp.web.MRPA0030Controller.java - <Created by Code Template generator>
 */
package core.erp.mrp.web;

import java.util.Map; 

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;





import core.erp.mrp.service.MRPA0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MRPA0030Controller - 통합큐시트 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MRPA0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MRPA0030Controller.class);

	/**
	 * 통합큐시트 메뉴 서비스 클래스
	 */
	@Resource(name="MRPA0030Service")
	private MRPA0030Service service;

    /**
	 * 프로그램리스트 목록 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MRPA0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mrp/MRPA0030_SEARCH00.do")
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
		 * 매체별 프로그램리스트 목록 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/MRPA0030/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mrp/MRPA0030_SEARCH01.do")
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
		 * 일자별 프로그램리스트 목록 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/MRPA0030/SEARCH02"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mrp/MRPA0030_SEARCH02.do")
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
		 * 프로그램 목록을 삭제 한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mrp/MRPA0030_DELETE00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processDELETE00(CoreRequest coreRequest, ModelMap model) throws Exception {
			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
			try {
				service.processDELETE00(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processDELETE00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;
		}
		
		/**
		 * <pre>
		 * 통합큐시트를 저장한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mrp/MRPA0030_SAVE00.do")
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

}
