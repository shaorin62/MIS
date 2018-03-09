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
import core.erp.trm.service.TRME0100Service;

/**
 * <pre>
 *	TRME0100Controller - 법인카드 승인내역 및 전표처리 조회 프로그램 컨트롤러 클래스
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
public class TRME0100Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TRME0100Controller.class);

	@Resource(name="TRME0100Service")
	private TRME0100Service tRME0100Service;

	/**
	 * <pre>
	 * 법인카드 승인내역 및 전표처리 조회 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/trm/TRME0100_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) tRME0100Service.processSEARCH00(searchVo));
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) {
			LOGGER.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
}
