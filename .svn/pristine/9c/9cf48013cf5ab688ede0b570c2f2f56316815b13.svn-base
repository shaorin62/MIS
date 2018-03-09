/**
 * core.erp.wfm.web.WFMA0030Controller.java - <Created by Code Template generator>
 */
package core.erp.wfm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.wfm.service.WFMA0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMA0030Controller - 경조금 신청 등록 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	정한균
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	정한균			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMA0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(WFMA0030Controller.class);


	/**
	 * 경조금신청 등록 메뉴 서비스 클래스
	 */
	@Resource(name="WFMA0030Service")
	private WFMA0030Service service;
	
	
    /**
	 * 경조금 신청 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/WFMA0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMA0030_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
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
	 * 작성자 : 정한균
	 * 일시 : 2016.10.06
	 * 내용 : 경조금 사용 전표생성
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/wfm/WFMA0030_PROC00.do")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String SlipNumb = "";
		
		try {
		
			SlipNumb = service.processPROC00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave(); 

		} catch(Exception e) {
			LOGGER.error("processPROC00: " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		//전표번호를 리턴한다. 	
		coreResultData.addVariableList("sSLIP_NUMB", SlipNumb);
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * 경조금 전표삭제
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/wfm/WFMA0030_PROC01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPROC01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			service.processPROC01(coreRequest.getMapVariableList());
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			LOGGER.error("processPROC01 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	

}
