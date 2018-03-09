/**
 * core.erp.tmm.web.FSMB0010Controller.java - <Created by Code Template generator>
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




import core.erp.fsm.service.FSMB0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FSMB0010Controller - 자산 등록 관리 컨트롤러 클래스
 * </pre>
 *
 * @author	오혜성
 * @since	2016.06.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.29	오혜성		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class FSMB0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FSMB0010Controller.class);

	/**
	 * 자산 등록 관리 메뉴 서비스 클래스
	 */
	@Resource(name="FSMB0010Service")
	private FSMB0010Service service;

    /**
	 * 자산 등록 관리 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0010_SEARCH00.do")
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
		 *  자산등록 변동이력 탭 조회
		 *  자산등록 이동이력 탭 조회
		 *  자산등록 수리이력 탭 조회
		 *  자산등록 상각이력 탭 조회
		 *  자산등록 분할내역 탭 조회
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/FSMB0010/SEARCH00"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/fsm/FSMB0010_SEARCH01.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH01(searchVo));
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(searchVo));
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03(searchVo));
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH04(searchVo));
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH05(searchVo));
				coreResultData.setResultMessageSuccessSelect();

			} catch(Exception e) {
				logger.error("processSEARCH00 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 
	
	  /**
		 * 화면의 상각률을 조회한다.
		 * @param param - 조회할 정보가 담긴 Map 객체
		 * @return "/FSMB0010/SEARCH02"
		 * @exception Exception - 조회시 발생한 예외
		 */
		@RequestMapping(value = "/core/erp/fsm/FSMB0010_SEARCH02.do")
		@SuppressWarnings("rawtypes")
		public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

			ModelAndView mav = new ModelAndView("coreReturnView");
			CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

			try {

				Map searchVo = coreRequest.getMapVariableList();
				logger.info("searchVo : " + searchVo.toString());
				
				coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH10(searchVo));
				coreResultData.setResultMessageSuccessSelect();

			} catch(Exception e) {
				logger.error("processSEARCH02 : " + e.getMessage());
				coreResultData.setResultMessageFailSelect(e);
			}

			mav.addObject("FORM_DATA", coreResultData);
			return mav;

		} 

	/**
	 * <pre>
	 * 자산 등록 관리 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0010_SAVE00.do")
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
	 *  자산등록 전표 헤더처리
	 *  자산등록 전표 차변 처리
	 *  자산등록 전표 대변 처리
	 *  자산등록 전표 차변 처리(부가가치세 매입 세액)
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FSMB0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0010_PROC00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processPROC00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll()); /*한개의 서비스에서 다 처리하도록 쿼리 수정 */
			//service.processPROC01(coreRequest.getSaveDataSetAll());
			//service.processPROC02(coreRequest.getSaveDataSetAll());
			//service.processPROC03(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processPROC00 : " + e.getMessage());
			//coreResultData.setResultMessageFailSelect(e);
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 
	

	/**
	 * <pre>
	 * 자산일괄등록 저장(FSMB0010P03)
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMB0010_SAVE03.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE03(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processSAVE03(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	
	

}
