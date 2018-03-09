package core.erp.trm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.erp.com.service.ComHelpPopupService;
import core.erp.com.service.impl.ComHelpPopupDao;
import core.erp.trm.service.TRMA0040Service;

/**
 * <pre>
 *	TRMA0040Controller - 미불반제관리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * 2016.10.04	김기환		자동반제 수정.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Controller
public class TRMA0040Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0040Controller.class);

	@Resource(name="TRMA0040Service")
	private TRMA0040Service tRMA0040Service;


	
	/**
	 * <pre>
	 * 미불반제관리 발생내역 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0040_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRMA0040Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * 미불반제관리 정리내역 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0040_SEARCH01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRMA0040Service.processSEARCH01(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) {
			LOGGER.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 미불(반제) 필수 입력 관리항목 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0040_SEARCH02.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRMA0040Service.processSEARCH02(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) {
			LOGGER.error("processSEARCH02 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}


	/**
	 * <pre>
	 * 미불반제관리 전표처리
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0040_CREATE_SLIP.do")
	public ModelAndView processCREATE_SLIP(CoreRequest coreRequest, ModelMap model) throws Exception {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		String SlipNumb = "";
		
		try {
			
			SlipNumb = tRMA0040Service.processCREATESLIP(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processCREATE_SLIP : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}
		
		//전표번호를 리턴한다.
		coreResultData.addVariableList("sSLIP_NUMB", SlipNumb);
				
		mav.addObject("FORM_DATA", coreResultData);
		
		return mav;
	}
	
	/**
	 * <pre>
	 * 미불반제관리 전표삭제
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0040_DELETE_SLIP.do")
	public ModelAndView processDELETE_SLIP(CoreRequest coreRequest, ModelMap model) throws Exception {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			//전표삭제
			coreResultData.addVariableList("sRetValue", tRMA0040Service.processDELETESLIP(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll()));
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processDELETE : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		
		
		return mav;
	}

}
