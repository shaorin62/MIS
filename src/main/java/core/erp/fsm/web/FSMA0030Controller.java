/**
 * core.erp.tmm.web.FSMA0030Controller.java - <Created by Code Template generator>
 */
package core.erp.fsm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;



import core.erp.fsm.service.FSMA0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FSMA0030Controller - 감가상각률 관리 컨트롤러 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.24	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class FSMA0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FSMA0030Controller.class);

	/**
	 * 감가상각률 관리 메뉴 서비스 클래스
	 */
	@Resource(name="FSMA0030Service")
	private FSMA0030Service service;

    /**
	 * 감가상각률을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMA0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMA0030_SEARCH00.do")
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
		 * 화면의 년월을 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/FSMA0030/SEARCH01"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/fsm/FSMA0030_SEARCH01.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

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
	 * 감가상각률을 저장,수정 또는 급여 코드를 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMA0030_SAVE00.do")
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
