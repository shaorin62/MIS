/**
 * core.erp.tmm.web.FSMB0030Controller.java - <Created by Code Template generator>
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



import core.erp.fsm.service.FSMB0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FSMB0030Controller - 자산 일괄변동 관리 컨트롤러 클래스
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
public class FSMB0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FSMB0030Controller.class);

	/**
	 * 자산 일괄변동 관리 메뉴 서비스 클래스
	 */
	@Resource(name="FSMB0030Service")
	private FSMB0030Service service;

    /**
	 * 자산 일괄변동 헤더 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0030_SEARCH00.do")
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
	 * 자산 일괄변동 디테일 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
		@RequestMapping(value = "/core/erp/fsm/FSMB0030_SEARCH01.do")
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
	 * <pre>
	 * 자산 일괄변동 관리 목록을 삭제한다.
	 * </pre>
	 *
	 * @param param - 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0030_DELETE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processDELETE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processDELETE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	/**
	 *  자산일괄등록 전표 헤더 조회 처리
	 *	손실 매각
	 *  이익 매각
	 *  자산일괄등록 전표 처리(미상각 잔액)
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 *  자산일괄등록 전표 처리(취득가 기말잔액)
	 *  자산일괄등록 전표 처리(처분 손익)
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0030/PROC00"
	 * @exception Exception - 조회시 발생한 예외
	 */
		@RequestMapping(value = "/core/erp/fsm/FSMB0030_PROC00.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {
				Map searchVo = coreRequest.getMapVariableList(); 
				logger.info("searchVo : " + searchVo.toString());
				service.processPROC00(searchVo);   /* 매각  등록 */
				service.processPROC01(searchVo);   /* 폐기  등록 */
				//service.processPROC00(coreRequest.getSaveDataSetAll()); 
				//service.processPROC01(coreRequest.getSaveDataSetAll());
				//service.processPROC02(coreRequest.getSaveDataSetAll());
				//service.processPROC04(coreRequest.getSaveDataSetAll());
				//service.processPROC05(coreRequest.getSaveDataSetAll());
				//service.processPROC06(coreRequest.getSaveDataSetAll());
				coreResultData.setResultMessageSuccessSave();				

			} catch(Exception e) {
				logger.error("processPROC00 : " + e.getMessage());
				//coreResultData.setResultMessageFailSelect(e);
				coreResultData.setResultMessageFailSave(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 

}
