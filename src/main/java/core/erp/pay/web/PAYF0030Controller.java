package core.erp.pay.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pay.service.PAYF0030Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	PAYF0030Controller - 퇴직금계산처리 프로그램 컨트롤러 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	안윤준
 * @since	2016. 9. 7.
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 7.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class PAYF0030Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PAYF0030Controller.class);

	/**
	 * 퇴직금계산처리 메뉴 서비스 클래스
	 */
	@Resource(name="PAYF0030Service")
	private PAYF0030Service service;

    /**
	 * 퇴직정산처리 사원 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH00.do")
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
	 * 퇴직정산처리 사원(세부) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH01"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH01.do")
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
	 * 퇴직정산처리_급여 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH02.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH02(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH02(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH02 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리_급여(POP) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_POPSEARCH00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPOPSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPOPSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPOPSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리_상여 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH03"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH03.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH03(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH03(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH03 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리 사원(세부) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH04"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH04.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH04(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH04(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH04 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리 사원(세부) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH05"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH05.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH05(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH05(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH05 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리 사원(세부) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH06"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH06.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH06(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH06(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH06 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 퇴직정산처리 사원(세부) 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/SEARCH07"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SEARCH07.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH07(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH07(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH07 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 원천징수 영수증 리포트를 출력한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PRINT00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPRINT00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT00(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPRINT00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * 여러명의 원천징수 영수증 리포트를 출력한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PRINT10.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPRINT10(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT10(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPRINT10 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * 지급결의서 리포트를 출력한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PRINT01.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPRINT01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT01(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPRINT01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * 여러명의 지급결의서 리포트를 출력한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PAYF0030/PRINT02"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PRINT03.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPRINT03(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			coreResultData.setReturnDataMap((Map<String, Object>) service.processPRINT03(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processPRINT03 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);

		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 퇴직금계산처리 을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();

			service.processSAVE00(coreRequest.getSaveDataSetAll(), searchVo);
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 퇴직금계산처리 을 저장,수정 또는 삭제한다. (POP)
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_POPSAVE00.do")
	public ModelAndView processPOPSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processPOPSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processPOPSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직급여계산 자료
	 * @return 퇴직급여계산 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PROC00.do")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processPROC00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직급여계산 자료
	 * @return 퇴직급여계산 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PROC01.do")
	public ModelAndView processPROC01(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();

			service.processPROC01(coreRequest.getSaveDataSetAll(), searchVo);
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
	 * 퇴직급여계산 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직급여계산 자료
	 * @return 퇴직급여계산 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PROC02.do")
	public ModelAndView processPROC02(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processPROC02(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processPROC02 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * 급여평균 ~ 퇴직연금예치금 갱신
	 * </pre>
	 *
	 * @param argDoc - 저장, 수정 또는 삭제할 퇴직급여계산 자료
	 * @return 퇴직급여계산 처리 건수
	 * @throws Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_PROC03.do")
	public ModelAndView processPROC03(CoreRequest coreRequest, ModelMap model) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			service.processPROC03(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processPROC03 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * 전자결재 연동자료 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pay/PAYF0030_SAVE99.do")
	public ModelAndView processSAVE99(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String ApprSeqn = "";

		try {

			ApprSeqn = service.processSAVE99(coreRequest.getSaveDataSetAll(), coreRequest.getMapVariableList());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE99 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		//전자결재 문서번호를 리턴한다.
		coreResultData.addVariableList("sAPPR_SEQN", ApprSeqn);

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	// 아래는 웹스퀘어 그대로 소스임.
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT00.do")
//	public String getREPORT00(HttpServletRequest request, ModelMap model){
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT00(param);
//
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}
//
//
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT01.do")
//	public String getREPORT01(HttpServletRequest request, ModelMap model) {
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT01(param);
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}
//
//
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT02.do")
//	public String getREPORT02(HttpServletRequest request, ModelMap model) {
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT02(param);
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}
//
//
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT03.do")
//	public String getREPORT03(HttpServletRequest request, ModelMap model) {
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT03(param);
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}
//
//
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT04.do")
//	public String getREPORT04(HttpServletRequest request, ModelMap model) {
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT04(param);
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}
//
//	/**
//	 * 인쇄용 퇴직원천징수내용을 조회한다.
//	 * @param argDoc - 조회할 정보가 담긴 Document 객체
//	 * @return "/PAYF0030/REPORT00"
//	 * @exception Exception
//	 */
//	@RequestMapping(value = "/core/erp/pay/PAYF0030_REPORT05.do")
//	public String getREPORT05(HttpServletRequest request, ModelMap model) {
//
//		try {
//
//			request.setCharacterEncoding("UTF-8");
//			Enumeration params = request.getParameterNames();
//
//			Map<String,Object> Searchparam = new HashMap<String,Object>();
//
//			while (params.hasMoreElements()) {
//
//				String paramName  = (String) params.nextElement();
//				String paramValue = request.getParameter(paramName);
//
//				Searchparam.put(paramName, paramValue);
//			}
//
//			Map<String,Object> param = new HashMap<String,Object>();
//			param.put("param", Searchparam);
//
//			List retList = service.getREPORT05(param);
//
//			Document retDocument = ConverterUtil.listToXmlData(retList);
//
//			request.setAttribute("REPORT_DATA", retDocument);
//
//		} catch (Exception e) {
//
//			try {
//				throw e;
//			} catch (Exception e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//		}
//
//		return "cmm/lib/ComXMLResultView";
//
//	}

}
