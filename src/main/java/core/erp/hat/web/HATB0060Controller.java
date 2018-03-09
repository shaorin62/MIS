/**
 * core.erp.hrm.web.HATB0060Controller.java - <Created by Code Template generator>
 */
package core.erp.hat.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.hat.service.HATB0060Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	HATB0060Controller - 근태마감 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	김희정
 * @since	2016.09.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김희정		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class HATB0060Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(HATB0060Controller.class);

	/**
	 * 근태마감 메뉴 서비스 클래스
	 */
	@Resource(name="HATB0060Service")
	private HATB0060Service service;

    /**
	 * 근태마감 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/HATB0060/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/hat/HATB0060_SEARCH00.do")
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
	 * 월근태등록 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/hat/HATB0060_SAVE00.do")
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