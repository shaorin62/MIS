/**
 * core.erp.tmm.web.PACA0010Controller.java - <Created by Code Template generator>
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

import core.erp.pac.service.PACA0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PACA0010Controller - 제작 세금계산서 생성
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.10
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.10	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PACA0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PACA0010Controller.class);

	/**
	 * 제작공통코드관리(신규) 메뉴 서비스 클래스
	 */
	@Resource(name="PACA0010Service")
	private PACA0010Service service;

    /**
	 * 세금계산서 청구를 위해 미완료인  제작 명세서 내역을 조회한다 
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PACA0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SEARCH00.do")
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
	 * 세금계산서 완료 내역을 조회한다. 
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PACA0010/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SEARCH01.do")
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
	 * 세금계산서 미생성및 완료 모두 조회한다. 
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PACA0010/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SEARCH02.do")
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
	 * 세금계산서 완료자료 상세 내역 조회 
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PACA0010/SEARCH03"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SEARCH03.do")
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
	 * <pre>
	 * 제작 세금계산서 합산 생성건
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SAVE00.do")
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
	 * 제작 세금계산서 개별생성건
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_SAVE01.do")
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
	 * 제작 세금계산서 삭제
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pac/PACA0010_DELETE00.do")
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
			 * 세금계산서 인쇄
			 * @param param - 조회할 정보가 담긴 Map 객체
			 * @return "/PACA0010/PRINT00"
			 * @exception Exception - 조회시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/pac/PACA0010_PRINT00.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

				try {

					Map searchVo = coreRequest.getMapVariableList();
					logger.info("searchVo : " + searchVo.toString());
					
					coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(coreRequest.getSaveDataSetAll()));
					coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT01(coreRequest.getSaveDataSetAll()));
					coreResultData.setResultMessageSuccessSelect();	

				} catch(Exception e) {
					logger.error("processPRINT00 : " + e.getMessage());
					coreResultData.setResultMessageFailSave(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;

			} 	
			
			

			/**
				 * 수정세금계산서 생성을 위한 조회
				 * @param param - 조회할 정보가 담긴 Map 객체
				 * @return "/PACA0010P01/SEARCH10"
				 * @exception Exception - 조회시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0010P01_SEARCH10.do")
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
						coreResultData.setResultMessageFailSave(e);
					}

					mav.addObject("FORM_DATA", coreResultData);
					return mav;

				} 	
				
				
				/**
				 * <pre>
				 * 제작 수정 세금계산서 생성
				 * </pre>
				 *
				 * @param param - 저장, 수정 또는 삭제할 자료
				 * @return 처리 건수
				 * @exception Exception - 처리 시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0010P01_SAVE10.do")
				@SuppressWarnings("rawtypes")
				public ModelAndView processSAVE10(CoreRequest coreRequest, ModelMap model) throws Exception {

					ModelAndView mav = new ModelAndView("coreReturnView");
					CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

					try {

						service.processSAVE10(coreRequest.getSaveDataSetAll());
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
				 * 제작 수정 세금계산서 수정
				 * </pre>
				 *
				 * @param param - 저장, 수정 또는 삭제할 자료
				 * @return 처리 건수
				 * @exception Exception - 처리 시 발생한 예외
				 */
				@RequestMapping(value = "/core/erp/pac/PACA0010P01_SAVE20.do")
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
			 * <pre>
			 * 제작 세금계산서 하단 품목명 수정
			 * </pre>
			 *
			 * @param param - 저장, 수정 또는 삭제할 자료
			 * @return 처리 건수
			 * @exception Exception - 처리 시 발생한 예외
			 */
			@RequestMapping(value = "/core/erp/pac/PACA0010_SAVE02.do")
			@SuppressWarnings("rawtypes")
			public ModelAndView processSAVE02(CoreRequest coreRequest, ModelMap model) throws Exception {

				ModelAndView mav = new ModelAndView("coreReturnView");
				CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

				try {

					service.processSAVE02(coreRequest.getSaveDataSetAll());
					coreResultData.setResultMessageSuccessSave();

				} catch(Exception e) {
					logger.error("processSAVE02 : " + e.getMessage());
					coreResultData.setResultMessageFailSave(e);
				}

				mav.addObject("FORM_DATA", coreResultData);
				return mav;

			}
			
				
				
}
