/**
 * core.erp.hrm.web.HRMA0030Controller.java - <Created by Code Template generator>
 */
package core.erp.hrm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.hrm.service.HRMA0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	HRMA0030Controller - 조직개편관리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.21	고민주		Initial Created.
 * 2016.12.08	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Controller
public class HRMA0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(HRMA0030Controller.class);

	/**
	 * 조직개편관리 메뉴 서비스 클래스
	 */
	@Resource(name="HRMA0030Service")
	private HRMA0030Service service;

    /**
	 * 부서변경 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/HRMA0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/hrm/HRMA0030_SEARCH00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
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
	 * 인사변경 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/HRMA0030/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/hrm/HRMA0030_SEARCH01.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
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
	 * <pre>
	 * 조직개편관리 을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/hrm/HRMA0030_SAVE00.do")
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
