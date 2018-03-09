package core.erp.fam.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.fam.service.FAMG0050Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	FAMG0050Controller - 연결시산표 관리 Controller 클래스 
 * </pre>
 *
 * @author	김기환
 * @since	2016.09.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.23	김기환		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class FAMG0050Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FAMG0050Controller.class);

	/**
	 * 연결시산표 관리 서비스 클래스
	 */
	@Resource(name="FAMG0050Service")
	private FAMG0050Service FAMG0050Service;

    /**
	 * 연결재무제표 IF 마스터 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMG0050_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) FAMG0050Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * 연결재무제표 IF 상세 목록 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMG0050_SEARCH01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) FAMG0050Service.processSEARCH01(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * 연결재무제표 IF 자료생성 내역을 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fam/FAMG0050_SEARCH02.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) FAMG0050Service.processSEARCH02(searchVo));
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			logger.error("processSEARCH02 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * 연결재무제표 IF 자료생성
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/CREATE_DATA"
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/fam/FAMG0050_CREATE_DATA.do")
	public ModelAndView processCREATE_DATA(CoreRequest coreRequest, ModelMap model) {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) FAMG0050Service.processCREATE_DATA(searchVo));
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			logger.error("processCREATE_DATA : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * 연결재무제표 IF 자료저장
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/CREATE_DATA"
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/fam/FAMG0050_SAVE_DATA.do")
	public ModelAndView processSAVE_DATA(CoreRequest coreRequest, ModelMap model) {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			String sRetValue = (String) FAMG0050Service.processSAVE_DATA(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
	
			coreResultData.addVariableList("sRetValue", sRetValue); //저장되었다면 순번, 아니면 ''
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			logger.error("processCREATE_DATA : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}
		
		mav.addObject("FORM_DATA", coreResultData);
		
		return mav;
	}
	
	/**
	 * 연결재무제표 IF 자료전송
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMG0050/TRAN_DATA"
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/fam/FAMG0050_TRAN_DATA.do")
	public ModelAndView processTRAN_DATA(CoreRequest coreRequest, ModelMap model) {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			FAMG0050Service.processTRAN_DATA(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			logger.error("processTRAN_DATA : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		
		return mav;
	}

}