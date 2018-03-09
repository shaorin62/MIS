/**
 * core.erp.tmm.web.PDMD0020Controller.java - <Created by Code Template generator>
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

import core.erp.pdm.service.PDMD0020Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMD0020Controller - 제작 명세서 
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.05	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMD0020Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMD0020Controller.class);

	/**
	 * 제작명세서  메뉴 서비스 클래스
	 */
	@Resource(name="PDMD0020Service")
	private PDMD0020Service service;

    /**
     * *********************************************************************************
	 * 제작 명세서 - 제작 명세서
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMD0020/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMD0020_SEARCH00.do")
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
	 * 제작 명세서 - 제작명세서 하단 상세 견적 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMD0020/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMD0020_SEARCH01.do")
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
	 * 제작 명세서 - 제작명세서 - 제작 종류 콤보를 가져오기 위한 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMD0020/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMD0020_SEARCH02.do")
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
	 * 제작 제작명세서  하단 상세 데이터 수정및 입력 저장 삭제
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMD0020_SAVE01.do")
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
	 **********************************************************************************
	 * <pre>
	 * 제작 제작 명세서 출력을 위한 조회 
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMD0020_PRINT00.do")
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
