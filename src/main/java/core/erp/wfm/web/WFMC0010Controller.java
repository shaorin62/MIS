/**
 * core.erp.wfm.web.WFMC0010Controller.java - <Created by Code Template generator>
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

import core.erp.wfm.service.WFMC0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMC0010Controller - 써클기준 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	박성진
 * @since	2016.09.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	박성진		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMC0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(WFMC0010Controller.class);

	/**
	 * 써클기준 메뉴 서비스 클래스
	 */
	@Resource(name="WFMC0010Service")
	private WFMC0010Service service;

    /**
	 * 써클기준 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/WFMC0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMC0010_SEARCH00.do")
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
	 * 써클기준을 저장, 수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMC0010_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

}
