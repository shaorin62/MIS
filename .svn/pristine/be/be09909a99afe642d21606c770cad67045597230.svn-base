package core.erp.trm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.trm.service.TRMA0060Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
/**
 * <pre>
 *	TRMA0060Service - 채권채무상계관리
 * <p><b>NOTE : </b></p>
 * </pre>
 *
 * @author	권미영
 * @since	2016 06. 27
 * @version	1.0
 * @see		{@link }
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 11.	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TRMA0060Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMA0060Controller.class);

	@Resource(name="TRMA0060Service")
	private TRMA0060Service tRMA0060Service;

	/**
	 * <pre>
	 * 채권채무내역 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return0
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0060_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRMA0060Service.processSEARCH00(searchVo));
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
	 * 작성자 : 권미영
	 * 일시 : 2016.09.27
	 * 내용 : 채권채무 상계전표생성
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMA0060_PROC00.do")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		String SlipNumb = "";
		
		try {

			SlipNumb = tRMA0060Service.processPROC00(coreRequest.getMapVariableList(), coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave(); 

		} catch(Exception e) {
			LOGGER.error("processPROC00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		//전표번호를 리턴한다.
		coreResultData.addVariableList("sSLIP_NUMB", SlipNumb);
		
		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
