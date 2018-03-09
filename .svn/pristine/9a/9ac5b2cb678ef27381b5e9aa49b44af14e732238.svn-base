package core.erp.trm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.erp.trm.service.TRMD0010Service;

/**
 * <pre>
 *	TRMD0010Controller - 구매론미지급관리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	김준수
 * @since	2016.06.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.27	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Controller
public class TRMD0010Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMD0010Controller.class);

	@Resource(name="TRMD0010Service")
	private TRMD0010Service tRMD0010Service;

	/**
	 * <pre>
	 * 구매론미지급관리 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMD0010_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRMD0010Service.processSEARCH00(searchVo));
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
	 * 구매론미지급관리 BICNET 전송 처리
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMD0010_PROC00.do")
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			tRMD0010Service.processPROC00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processPROC00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
