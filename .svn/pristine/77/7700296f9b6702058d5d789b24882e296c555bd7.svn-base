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
import core.erp.trm.service.TRMD0020Service;

/**
 * <pre>
 *	TRMD0020Controller - 구매카드미결제명세서
 * </pre>
 *
 * @author	권미영
 * @since	2016.12.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Controller
public class TRMD0020Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRMD0020Controller.class);

	@Resource(name="TRMD0020Service")
	private TRMD0020Service service;

	/**
	 * <pre>
	 * - 구매카드미결제명세서
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRMD0020_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
}
