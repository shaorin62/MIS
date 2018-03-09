/**
 * core.erp.mdm.web.MDMA0030P01Controller.java - <Created by Code Template generator>
 */
package core.erp.mdm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.mdm.service.MDMA0030P01Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	MDMA0030P01Controller - 전파 개별청약 전체복사(신규) 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.11
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date				   Modifier	     	Comment
 * ====================================================
 * 2016.10.12			최제현			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class MDMA0030P01Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(MDMA0030P01Controller.class);

	/**
	 * 전파 개별청약 전체복사(신규) 메뉴 서비스 클래스
	 */
	@Resource(name="MDMA0030P01Service")
	private MDMA0030P01Service service;
	
	/**
	 * <pre>
	 * 전파 개별청약 전체복사(신규) 을 저장 한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/mdm/MDMA0030P01_SAVE00.do")
	@SuppressWarnings("rawtypes")
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

}
