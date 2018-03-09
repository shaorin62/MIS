/**
 * core.erp.tmm.web.PDMB0010Controller.java - <Created by Code Template generator>
 */
package core.erp.pdm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pdm.service.PDMB0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMB0010Controller - 제작 제작사관리 화면
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMB0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMB0010Controller.class);

	/**
	 * 제작업종분류관리 메뉴 서비스 클래스
	 */
	@Resource(name="PDMB0010Service")
	private PDMB0010Service service;

    /**
	 * 제작 견적 타입항목을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMB0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMB0010_SEARCH00.do")
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
		 * 제작 제작종류를 가져오기 위한 콤보를 가져온다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMB0010/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_SEARCH01.do")
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
		 * 제작 외주 업체 실행예산을 가져와야 함.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMB0010/SEARCH02"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_SEARCH02.do")
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
		 * 제작의뢰 내역을 저장한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_SAVE00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				
				Map searchVo = coreRequest.getMapVariableList();
				service.processSAVE00(coreRequest.getSaveDataSetAll(), searchVo);
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSAVE00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
	
	
	
		  /**
		 * 제작 실적 분배율 등록 
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMB0010/SEARCH10"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_SEARCH10.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH10(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH10(searchVo));
				coreResultData.setResultMessageSuccessSelect();

			} catch(Exception e) {
				logger.error("processSEARCH10 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
		
		
		/**
		 * <pre>
		 * 제작의뢰 실적분배율을 저장한다.
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_SAVE10.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSAVE10(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				service.processSAVE10(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();

			} catch(Exception e) {
				logger.error("processSAVE10 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		}
		
		
		
		  /**
			 * 제작 외주업체 실행예산서 등록 
			 * @param param - 조회할 정보가 담긴 Map 객체
			 * @return "/PDMB0010/SEARCH20"
			 * @exception Exception - 조회시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/pdm/PDMB0010_SEARCH20.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSEARCH20(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

				try {
					Map searchVo = coreRequest.getMapVariableList();
					logger.info("searchVo : " + searchVo.toString());
					
					coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH20(searchVo));
					coreResultData.setResultMessageSuccessSelect();

				} catch(Exception e) {
					logger.error("processSEARCH20 : " + e.getMessage());
					coreResultData.setResultMessageFailSelect(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;
			} 
			
			
			/**
			 * <pre>
			 * 제작의뢰 외주계획 내역 저장
			 * </pre>
			 *
			 * @param param - 저장, 수정 또는 삭제할 자료
			 * @return 처리 건수
			 * @exception Exception - 처리 시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/pdm/PDMB0010_SAVE20.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSAVE20(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

				try {

					service.processSAVE20(coreRequest.getSaveDataSetAll());
					coreResultData.setResultMessageSuccessSave();

				} catch(Exception e) {
					logger.error("processSAVE20 : " + e.getMessage());
					coreResultData.setResultMessageFailSave(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;

			}
			
		
		  /**
		 * 제작의뢰서 인쇄
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMB0010/PRINT00"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMB0010_PRINT00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(searchVo));
				coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT01(searchVo));
				coreResultData.setResultMessageSuccessSelect();	

			} catch(Exception e) {
				logger.error("processPRINT00 : " + e.getMessage());
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 	
		
		 
}

		

