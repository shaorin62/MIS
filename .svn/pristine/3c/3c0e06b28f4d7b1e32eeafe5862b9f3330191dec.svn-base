/**
 * core.erp.tmm.web.FSMB0020Controller.java - <Created by Code Template generator>
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



import core.erp.fsm.service.FSMB0020Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FSMB0020Controller - 자산 변동 관리 컨트롤러 클래스
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
public class FSMB0020Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FSMB0020Controller.class);

	/**
	 * 자산 변동 관리 메뉴 서비스 클래스
	 */
	@Resource(name="FSMB0020Service")
	private FSMB0020Service service;

    /**
	 * 자산 변동 관리 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0020/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0020_SEARCH00.do")
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
	 * 자산 변동 관리 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0020_SAVE00.do")
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
	/**
	 * 자산 변동 승인
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0020/PERMIT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0020_PERMIT00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPERMIT00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processPERMIT00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			logger.error("processPERMIT00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	/**
	 * 자산 변동 승인 취소
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0020/CANCEL00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0020_CANCEL00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processCANCEL00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processCANCEL00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processCANCEL00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	/**
	 * 자산등록 전표 처리(이익)
	 * 자산등록 전표 처리(손실)
	 * 자산등록 전표 처리-자본적지출 자동전표처리
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0020/PROC00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0020_PROC00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			//coreResultData.setReturnDataMap((Map<String, Object>) service.processPROC00(searchVo));
			
			service.processPROC00(searchVo);   /* 변동전표 */
			service.processPROC10(searchVo);   /* 자본적지출전표 */	 		
			//coreResultData.setReturnDataMap((Map<String, Object>) service.processPROC01(searchVo));
			//coreResultData.setReturnDataMap((Map<String, Object>) service.processPROC10(searchVo));
			//coreResultData.setResultMessageSuccessSelect();
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
