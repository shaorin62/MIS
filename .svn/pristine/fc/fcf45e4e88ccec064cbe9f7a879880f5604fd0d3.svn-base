/**
 * core.erp.wfm.web.WFMB0040Controller.java - <Created by Code Template generator>
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

import core.erp.wfm.service.WFMB0040Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMB0040Controller - 학자금지급내역 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	전종원
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	전종원		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMB0040Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(WFMB0040Controller.class);

	/**
	 * 학자금지급내역 현황 메뉴 서비스 클래스
	 */
	@Resource(name="WFMB0040Service")
	private WFMB0040Service service;

    /**
	 * 학자금지급내역 현황을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/WFMB0040/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMB0040_SEARCH00.do")
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
	 * <pre>
	 * 작성자 : 전종원
	 * 일시 : 2016.10.05
	 * 내용 : 학자금 전표생성
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/wfm/WFMB0040_PROC00.do")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String SlipNumb = "";
		
		try {

			SlipNumb = service.processPROC00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave(); 

		} catch(Exception e) {
			logger.error("processPROC00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	
	/**
	 * <pre>
	 * 학자금 전표삭제
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/wfm/WFMB0040_PROC01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPROC01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			service.processPROC01(coreRequest.getMapVariableList());
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
	 * 학자금 지급내역 급여전환
	 * </pre>
	 *
	 * @param param - 저장할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMB0040_PROC02.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPROC02(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processPROC02(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processPROC02 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

}
