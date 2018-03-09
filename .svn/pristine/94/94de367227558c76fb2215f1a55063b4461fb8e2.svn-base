/**
 * core.erp.tmm.web.PACA0030Controller.java - <Created by Code Template generator>
 */
package core.erp.pac.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pac.service.PACA0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PACA0030Controller - 제작 전표처리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PACA0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PACA0030Controller.class);

	/**
	 * 제작 전자세금계산서 발송 
	 */
	@Resource(name="PACA0030Service")
	private PACA0030Service service;

    /**
	 * 제작 매출전표 미완료  
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PACA0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0030_SEARCH00.do")
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
		 * 제작 매출전표 완료 전표 생성  
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PACA0030/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/pac/PACA0030_SEARCH01.do")
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
			 * 제작 매입전표 미완료 매입 데이터   
			 * @param param - 조회할 정보가 담긴 Map 객체
			 * @return "/PACA0030/SEARCH02"
			 * @exception Exception - 조회시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/pac/PACA0030_SEARCH02.do")
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
				 * 제작 매입전표 완료 조회   
				 * @param param - 조회할 정보가 담긴 Map 객체
				 * @return "/PACA0030/SEARCH03"
				 * @exception Exception - 조회시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0030_SEARCH03.do")
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
				 *  제작매출 전표처리
				 *  제작매출 전표처리 전표 차변 처리
				 *  제작매출 전표처리 전표 대변 처리
				 *  제작매출 전표처리 전표 차변 처리(부가가치세 매입 세액)
				 * @param param - 조회할 정보가 담긴 Map 객체
				 * @return "/PACA0030_PROC00"
				 * @exception Exception - 조회시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0030_PROC00.do")
				@SuppressWarnings("rawtypes")
				public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

					ModelAndView mav = new ModelAndView("coreReturnView");
					CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

					try {

						service.processPROC00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
						

						coreResultData.setResultMessageSuccessSave();

					} catch(Exception e) {
						logger.error("processPROC00 : " + e.getMessage());
						coreResultData.setResultMessageFailSave(e);
					}

					mav.addObject("FORM_DATA", coreResultData);
					return mav;

				} 
				
				/**
				 *  제작매입 전표처리
				 * @param param - 조회할 정보가 담긴 Map 객체
				 * @return "/PACA0030_PROC01"
				 * @exception Exception - 조회시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0030_PROC01.do")
				@SuppressWarnings("rawtypes")
				public ModelAndView processPROC01(CoreRequest coreRequest, ModelMap model) throws Exception {

					ModelAndView mav = new ModelAndView("coreReturnView");
					CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

					try {

						service.processPROC01(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());

						coreResultData.setResultMessageSuccessSave();

					} catch(Exception e) {
						logger.error("processPROC01 : " + e.getMessage());
						coreResultData.setResultMessageFailSave(e);
					}

					mav.addObject("FORM_DATA", coreResultData);
					return mav;

				} 
				
				/**
				 * <pre>
				 * 제작 매출 전표 삭제
				 * </pre>
				 *
				 * @param param - 저장, 수정 또는 삭제할 자료
				 * @return 처리 건수
				 * @exception Exception - 처리 시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0030_DELETE00.do")
				@SuppressWarnings("rawtypes")
				public ModelAndView processDELETE00(CoreRequest coreRequest, ModelMap model) throws Exception {

					ModelAndView mav = new ModelAndView("coreReturnView");
					CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

					try {

						service.processDELETE00(coreRequest.getSaveDataSetAll(), coreRequest.getMapVariableList());
						
						
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
				 * 제작 매입 전표 삭제
				 * </pre>
				 *
				 * @param param - 저장, 수정 또는 삭제할 자료
				 * @return 처리 건수
				 * @exception Exception - 처리 시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0030_DELETE01.do")
				@SuppressWarnings("rawtypes")
				public ModelAndView processDELETE01(CoreRequest coreRequest, ModelMap model) throws Exception {

					ModelAndView mav = new ModelAndView("coreReturnView");
					CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

					try {

						service.processDELETE01(coreRequest.getSaveDataSetAll(), coreRequest.getMapVariableList());
						coreResultData.setResultMessageSuccessSave();

					} catch(Exception e) {
						logger.error("processDELETE01 : " + e.getMessage());
						coreResultData.setResultMessageFailSave(e);
					}

					mav.addObject("FORM_DATA", coreResultData);
					return mav;

				}
				
}
