package core.erp.evm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.evm.service.EVMD0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	EVMD0010Controller - 종합평가현황 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	김석영
 * @since	2016.10.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.26	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class EVMD0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(EVMD0010Controller.class);

	/**
	 * 종합평가현황 메뉴 서비스 클래스
	 */
	@Resource(name="EVMD0010Service")
	private EVMD0010Service service;

	/**
	 * 종합평가현황을 조회한다.
	 * @param argDoc - 조회할 정보가 담긴 Document 객체
	 * @return "/EVMD0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/evm/EVMD0010_SEARCH00.do")
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
	 * <pre>
	 * 종합평가처리
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/evm/EVMD0010_PROC00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			
			service.processPROC00(searchVo);
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) { 
			logger.error("processPROC00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
}
