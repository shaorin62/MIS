package core.erp.yea.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.yea.service.YEAA0100_2015Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	YEAA0100_2015Controller - 연말정산전산매체 프로그램 컨트롤러 클래스
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
public class YEAA0100_2015Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(YEAA0100_2015Controller.class);

	/**
	 * 연말정산전산매체 메뉴 서비스 클래스
	 */
	@Resource(name="YEAA0100_2015Service")
	private YEAA0100_2015Service service;

    /**
	 * 연말정산전산매체 자료를 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/YEAA0100_2015/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/yea/YEAA0100_2015_SEARCH00.do")
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

	/**
	 * <pre>
	 * 전산매체파일 생성 
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/core/erp/yea/YEAA0100_2015_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			String returnStr = service.processSAVE00(searchVo);
			String[] result = returnStr.split(","); 
			 
			String sFILE_NAME = (result[0] == null ? "" : result[0]);
			String sFILE_PATH = (result[1] == null ? "" : result[1]);
			coreResultData.addVariableList("sFILE_NAME", sFILE_NAME);
			coreResultData.addVariableList("sFILE_PATH", sFILE_PATH);
			
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}
	 
}
