/**
 * core.erp.mcm.web.MCMA0070P01Controller.java - <Created by Code Template generator>
 */
package core.erp.mcm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;



import core.erp.mcm.service.MCMA0070P01Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MCMA0070P01Controller - 카테고리조회팝업(신규) 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MCMA0070P01Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MCMA0070P01Controller.class);

	/**
	 * 카테고리조회팝업(신규) 메뉴 서비스 클래스
	 */
	@Resource(name="MCMA0070P01Service")
	private MCMA0070P01Service service;

    /**
	 * 카테고리조회팝업 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/MCMA0070P01/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mcm/MCMA0070P01_SEARCH00.do")
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
