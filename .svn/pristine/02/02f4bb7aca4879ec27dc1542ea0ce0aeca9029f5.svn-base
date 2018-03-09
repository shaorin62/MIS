/**
 * core.erp.tmm.web.EDMB0070Controller.java - <Created by Code Template generator>
 */
package core.erp.edm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.edm.service.EDMB0070Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	EDMB0070Controller - 사원별교육현황 클래스
 * </pre>
 *
 * @author	김혜림
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김혜림		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright NDS.(C) All right reserved.
 */
 
@Controller
public class EDMB0070Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(EDMB0070Controller.class);

	/**
	 * 사원별교육현황
	 */
	@Resource(name="EDMB0070Service")
	private EDMB0070Service service;

    /**
	 * 사원별교육현황을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/EDMB0070/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/edm/EDMB0070_SEARCH00.do")
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


}
