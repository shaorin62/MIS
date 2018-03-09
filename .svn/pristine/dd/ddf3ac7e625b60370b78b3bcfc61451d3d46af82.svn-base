/**
 * core.erp.mac.web.MACA0090Controller.java - <Created by Code Template generator>
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










import core.erp.mac.service.MACA0090Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MACA0090Controller - 전표처리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.11.22
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.22	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MACA0090Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MACA0090Controller.class);

	/**
	 * 전표처리 메뉴 서비스 클래스
	 */
	@Resource(name="MACA0090Service")
	private MACA0090Service service;

    /**
	 * 위수탁 세금계산서 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0090/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SEARCH00.do")
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
		 * 등록된 전표 목록을 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/MACA0090/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mac/MACA0090_SEARCH01.do")
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
		 *  수수료 세금계산서 목록을 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/MACA0090/SEARCH02"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/mac/MACA0090_SEARCH02.do")
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
	 * 등록된 수수료 전표 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0090/SEARCH03"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SEARCH03.do")
	@SuppressWarnings("rawtypes")
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
	 * 광고주목록조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MACA0070/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SEARCH04.do")
	@SuppressWarnings("rawtypes")
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
	 * <pre>
	 * 위수탁 전표처리를 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE00(coreRequest.getMapVariableList(),coreRequest.getSaveDataSetAll());
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
	 * 위수탁 전표를 합산처리를 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SAVE10.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE10(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE10(coreRequest.getMapVariableList(),coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE10 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 수수료 전표처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SAVE01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE01(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE01(coreRequest.getMapVariableList(),coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE01 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 수수료 전표 합산처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_SAVE11.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE11(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processSAVE11(coreRequest.getMapVariableList(),coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE11 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 임시전표를 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mac/MACA0090_DELETE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processDELETE00(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processDELETE00(coreRequest.getMapVariableList(),coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processDELETE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	

}
