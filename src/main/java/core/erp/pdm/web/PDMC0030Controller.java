/**
 * core.erp.tmm.web.PDMC0030Controller.java - <Created by Code Template generator>
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

import core.erp.pdm.service.PDMC0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMC0030Controller - 제작 관리 화면
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMC0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMC0030Controller.class);

	/**
	 * 제작견적서 견적용  메뉴 서비스 클래스
	 */
	@Resource(name="PDMC0030Service")
	private PDMC0030Service service;

    /**
     * *********************************************************************************
	 * 제작 견적서 -제작관리
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH00.do")
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
	 * 제작 견적서 -제작관리 - 견적조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH01.do")
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
	 * 제작 견적서 -제작관리 - 견적 상세 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH02.do")
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
     * *********************************************************************************
	 * 제작 견적서 -제작관리 - 외주정산 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH03_1"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH03_1.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH03_1(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03_1(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH03_1 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	/**
     * *********************************************************************************
	 * 제작 견적서 -제작관리 - 외주정산 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH03_2"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH03_2.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH03_2(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03_2(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH03_2 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	
	/**
     * *********************************************************************************
	 * 제작 견적서 -제작관리 - 제작의뢰탭 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH04"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH04.do")
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
     * *********************************************************************************
	 * 제작 견적서 -제작관리 - 제작물 파일 탭 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH05"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH05.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH05(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH05(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH05 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	
	/**
     * *********************************************************************************
	 * 제작 견적서 -제작관리 - 제작종류 콤보 데이터 가져오기
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMC0030/SEARCH07"
	 * @exception Exception - 조회시 발생한 예외
	 * *********************************************************************************
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMC0030_SEARCH07.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH07(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH07(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH07 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
	
	/**
	 * <pre>
	 * 제작물 관리 파일 저장 
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "core/erp/pdm/PDMC0030_SAVE00.do")
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


