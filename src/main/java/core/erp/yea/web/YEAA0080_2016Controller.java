package core.erp.yea.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.yea.service.YEAA0080_2016Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	YEAA0080_2016Controller - 연말정산내역 프로그램 컨트롤러 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.28.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class YEAA0080_2016Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(YEAA0080_2016Controller.class);

	/**
	 * 연말정산내역 메뉴 서비스 클래스
	 */
	@Resource(name="YEAA0080_2016Service")
	private YEAA0080_2016Service service;

    /**
	 * 연말정산내역 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/YEAA0080_2016/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/yea/YEAA0080_2016_SEARCH00.do")
	@SuppressWarnings({ "unchecked", "rawtypes" })
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
	 
}
