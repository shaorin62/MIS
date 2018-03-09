package core.erp.com.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComLoginService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	ComLoginController - 기본 로그인 처리 컨트롤러 클래스
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 6. 13.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 6. 13.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComLoginController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComLoginController.class);

	@Resource(name="ComLoginService")
	private ComLoginService comLoginService;

	/**
	 * <pre>
	 * 시스템 로그인 처리
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 전달 정보
	 * @param model
	 * @return 로그인 결과
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_Login.do")
	public ModelAndView processLogin(CoreRequest coreRequest, ModelMap model, HttpServletRequest request, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			Map<String, Object> returnMap = (Map<String, Object>) comLoginService.processLogin(searchVo, request);
			
			// 클라이언트로 데이터 전달
			coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			LOGGER.error("ComLogin_Login : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * <pre>
	 * 시스템 로그인 처리 - SSO시스템 연계하여 로그인 처리 진행
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 전달 정보
	 * @param model
	 * @return 로그인 결과
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_SSOLogin.do")
	public ModelAndView processSSOLogin(CoreRequest coreRequest, ModelMap model, HttpServletRequest request, HttpSession session) throws Exception {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
		
		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			Map<String, Object> returnMap = (Map<String, Object>) comLoginService.processSSOLogin(searchVo, request);
			
			// 클라이언트로 데이터 전달
			coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			LOGGER.error("ComLogin_Login : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}
	
	
	/**
	 * <pre>
	 * 시스템 로그인 처리
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 전달 정보
	 * @param model
	 * @return 로그인 결과
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_PasswordChange.do")
	public ModelAndView processLoginPasswordChange(CoreRequest coreRequest, ModelMap model, HttpServletRequest request, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			comLoginService.processPasswordChange(searchVo);
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			LOGGER.error("ComLogin_PasswordChange : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

	/**
	 * <pre>
	 * 비밀번호 초기화 처리
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 전달 정보
	 * @param model
	 * @return 로그인 결과
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_PasswordInit.do")
	public ModelAndView processLoginPasswordInit(CoreRequest coreRequest, ModelMap model, HttpServletRequest request, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			comLoginService.processPasswordInit(searchVo);
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("ComLogin_PasswordChange : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * <pre>
	 * 메인화면의 정보 처리. 사용자 정보, 메뉴목록, 공통 메시지 목록을 조회.
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 요청 정보
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_Mainframe.do")
	public ModelAndView processMainframe(CoreRequest coreRequest, ModelMap model, HttpServletRequest request) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map<String, Object> searchVo = coreRequest.getMapVariableList();
			searchVo.put("GBL_LOGINIP", request.getRemoteAddr());
			
			Map<String, Object> returnMap = (Map<String, Object>) comLoginService.processUserInfo(searchVo);
			
			coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("ComLogin_processMainframe : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	/**
	 * <pre>
	 * 마이메뉴 수정 삭제
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 요청 정보
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_ADDMYMENU.do")
	public ModelAndView processADDMYMENU(CoreRequest coreRequest, ModelMap model, HttpServletRequest request) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			comLoginService.processADDMYMENU(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processADDMYMENU : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}	
	
	/**
	 * <pre>
	 * 시스템 로그아웃
	 * </pre>
	 *
	 * @param coreRequest 클라이언트 전달 정보
	 * @param model
	 * @return 로그인 결과
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/ComLogin_Logout.do")
	public ModelAndView processLogout(CoreRequest coreRequest, ModelMap model, HttpServletRequest request, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			comLoginService.processLogout(searchVo);
			
			// 클라이언트로 데이터 전달
			//coreResultData.setReturnDataMap(returnMap);
			coreResultData.setResultMessageSuccessSelect();
			
		} catch(Exception e) {
			LOGGER.error("ComLogin_Login : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	
	
	@RequestMapping(value = "/core/erp/com/ComLogin_SettingSave.do")
	public ModelAndView processSettingSave(CoreRequest coreRequest) throws Exception {
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			comLoginService.processSettingSave(searchVo);
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			LOGGER.error("ComLogin_SettingSave : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	
}
