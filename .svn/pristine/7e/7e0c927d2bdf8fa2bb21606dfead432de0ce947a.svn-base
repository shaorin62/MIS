/**
 * core.erp.tmm.web.BDMB0050Controller.java - <Created by Code Template generator>
 */
package core.erp.bdm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.bdm.service.BDMB0050Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	BDMB0050Controller - 추가예산관리  프로그램 컨트롤러 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 27.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 27.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class BDMB0050Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(BDMB0050Controller.class);

	/**
	 * 추가예산관리  메뉴 서비스 클래스
	 */
	@Resource(name="BDMB0050Service")
	private BDMB0050Service service;

    /**
	 * 추가예산관리 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/BDMB0050/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/bdm/BDMB0050_SEARCH00.do")
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
	 * 전자결재상신용 조회
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/FAMB0030/PRINT00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/bdm/BDMB0050_PRINT00.do")
	@SuppressWarnings("rawtypes")
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
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	} 	
	
	/**
	 * <pre>
	 *추가예산관리  저장,수정, 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 삭제 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/bdm/BDMB0050_SAVE00.do")
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
	 * <pre>
	 * 전자결재 연동자료 저장
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/bdm/BDMB0050_SAVE99.do")
	@SuppressWarnings("rawtypes")
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
}
