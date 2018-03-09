/**
 * core.erp.fam.web.FSMF0010P01Controller.java - <Created by Code Template generator>
 */
package core.erp.fsm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.fsm.service.FSMF0010P01Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	FSMF0010P01Controller - 건설중자산대체등록 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class FSMF0010P01Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(FSMF0010P01Controller.class);

	/**
	 * 건설중자산대체등록 메뉴 서비스 클래스
	 */
	@Resource(name="FSMF0010P01Service")
	private FSMF0010P01Service fSMF0010P01Service;

    /**
	 * 건설중자산대체 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/core/erp/fam/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMF0010P01_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) fSMF0010P01Service.processSEARCH00(searchVo));
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
	 * 건설중자산대체 목록을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/fsm/FSMF0010P01_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			fSMF0010P01Service.processSAVE00(coreRequest.getSaveDataSetAll(), searchVo);
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

}
