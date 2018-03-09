/**
 * core.erp.fam.web.FAMB0030Controller.java - <Created by Code Template generator>
 */
package core.erp.fam.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.fam.service.FAMB0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FAMB0030Controller - 메시지 관리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	ㅋㅋㅋ
 * @since	2016.06.24
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	ㅋㅋㅋ		Initial Created.
 * 2016.08.29	권미영		
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class FAMB0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FAMB0030Controller.class);

	/**
	 *전표관리
	 */
	@Resource(name="FAMB0030Service")
	private FAMB0030Service service;

    /**
	 * 전표내역을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
	
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH01(searchVo));
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(searchVo));
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03(searchVo));
			//coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH99(searchVo));
			
			coreResultData.setResultMessageSuccessSelect();		

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	
    /**
	 * 계정과목을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH10"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH10.do")
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
	 * 계정과목 관리항목을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH11"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH11.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH11(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH11(searchVo));
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH11 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 		
	
    /**
	 * 계정과목 관리항목을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH13"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH13.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH13(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH13(searchVo));
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH13 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 		

    /**
	 * 기준환율을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH14"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH14.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH14(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH14(searchVo));
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH13 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 		

    /**
	 * 예산잔액을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH14"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH15.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH15(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH15(searchVo));
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH13 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 	

    /**
	 * 전표일자별 마감정보를 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH14"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH16.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH16(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			service.processSEARCH16(searchVo);
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH16 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 	

    /**
	 * 귀속부서별, 계정별 코스트센터를 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/SEARCH14"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SEARCH17.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH17(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String sCSTC_CDNE = "";
		
		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			sCSTC_CDNE = service.processSEARCH17(searchVo);
			coreResultData.setResultMessageSuccessSelect();	

		} catch(Exception e) {
			logger.error("processSEARCH17 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		//코스트센터를 리턴한다. 	
		coreResultData.addVariableList("sCSTC_CDNE", sCSTC_CDNE);
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	} 	
	
	 /**
	 * 전표 인쇄  조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_PRINT00.do")
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
	
	/**
	 * <pre>
	 * 전표내역 을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String SlipNumb = "";
		
		try {

			SlipNumb = service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		//전표번호를 리턴한다. 	
		coreResultData.addVariableList("sSLIP_NUMB", SlipNumb);
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 전자결재 연동자료 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMB0030_SAVE99.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE99(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String ApprDocn = "";
		
		try {

			ApprDocn = service.processSAVE99(coreRequest.getSaveDataSetAll(), coreRequest.getMapVariableList());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE99 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}
		
		//전자결재 문서번호를 리턴한다. 	
		coreResultData.addVariableList("sAPPR_DOCN", ApprDocn);
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
}
