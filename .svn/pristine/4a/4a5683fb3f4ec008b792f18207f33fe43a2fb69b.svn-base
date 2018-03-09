/**
 * core.erp.mac.web.MACA0010Controller.java - <Created by Code Template generator>
 */
package core.erp.mac.web;

import java.util.Map; 

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;







import core.erp.mac.service.MACA0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MACA0010Controller - 입금표 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.21	최제현		Initial Created.
 * 2016.10.31	오세훈		Initial Update.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MACA0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MACA0010Controller.class);

	/**
	 * 입금표 메뉴 서비스 클래스
	 */
	@Resource(name="MACA0010Service")
	private MACA0010Service service;

    /**
	 * 입금표 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0010_SEARCH00.do")
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
	 * 자동완성을 위한 매체사 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0010/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0010_SEARCH01.do")
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
	 * 업체 코드로 담당자 메일 싹 가져오기  
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0020/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0010_SEARCH02.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(coreRequest.getSaveDataSetAll()));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH02 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	   /**
		 * 입금표 출력을 위한 조회 
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/MACA0010/PRINT00"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mac/MACA0010_PRINT00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {
			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(searchVo,coreRequest.getSaveDataSetAll()));
				coreResultData.setResultMessageSuccessSelect();
			} catch(Exception e) {
				logger.error("processPRINT00 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}
			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
		
		
		/**
		 * <pre>
		 * 입금표 이메일 발송
		 * </pre>
		 *
		 * @param param - 저장, 수정 할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mac/MACA0010_SEND00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEND00(CoreRequest coreRequest, ModelMap model) throws Exception {
			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				service.processSEND00(coreRequest.getSaveDataSetAll(),coreRequest.getMapVariableList());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSEND00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;
		}

		
}