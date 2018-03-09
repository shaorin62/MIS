/**
 * core.erp.tmm.web.PDMC0010Controller.java - <Created by Code Template generator>
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

import core.erp.pdm.service.PDMC0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMC0010Controller - 제작견적서 견적용
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMC0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMC0010Controller.class);

	/**
	 * 제작견적서 견적용  메뉴 서비스 클래스
	 */
	@Resource(name="PDMC0010Service")
	private PDMC0010Service service;

    /**
     * *********************************************************************************
	 * 제작 견적서 -견적용 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0010_SEARCH00.do")
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
	  * *********************************************************************************
		 * 제작 견적서 -견적용 하단 상세 견적 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMC0010/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SEARCH01.do")
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
		  * *********************************************************************************
		 * 제작 견적서 -견적용 하단 상세 견적 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMC0010/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SEARCH02.do")
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
		 **********************************************************************************
		 * <pre>
		 * 제작 견적서 상단 견적 헤더 저장
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SAVE00.do")
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
		 **********************************************************************************
		 * <pre>
		 * 제작 견적서 상단 견적 하단 상세 견적 저장
		 * 추가 요구사항 10/18 상단의 헤더 데이터가 없어도 저장이 가능하며 헤더는 기본 값으로 생성
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SAVE01.do")
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
		
		
		
		/**
		 * *******************************************************************************
		 * 견적 템플릿 가져오기 위한 팝업 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMC0010/SEARCH10"
		 * @exception Exception - 조회시 발생한 예외
		 * *******************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SEARCH10.do")
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
		 * *******************************************************************************
		 * 제작건명 가져오기
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMC0010/SEARCH20"
		 * @exception Exception - 조회시 발생한 예외
		 * *******************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SEARCH20.do")
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
		 **********************************************************************************
		 * <pre>
		 * 제작 견적 -견적용 을 제작용으로 업데이트
		 * </pre>
		 *
		 * @param param - 저장, 수정 또는 삭제할 자료
		 * @return 처리 건수
		 * @exception Exception - 처리 시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_SAVE10.do")
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
	     * *********************************************************************************
		 * 제작 예상견적서 -제작용 예상견적서 출력
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/PDMC0010/PRINT00"
		 * @exception Exception - 조회시 발생한 예외
		 * *********************************************************************************
		 */
		@RequestMapping(value = "/core/erp/pdm/PDMC0010_PRINT00.do")
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
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
	
}
