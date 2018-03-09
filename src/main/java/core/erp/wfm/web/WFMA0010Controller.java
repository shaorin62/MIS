/**
 * core.erp.wfm.web.WFMA0010Controller.java - <Created by Code Template generator>
 */
package core.erp.wfm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.wfm.service.WFMA0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	WFMA0010Controller - 경조금 기준 등록 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	정한균
 * @since	2016.09.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.05	정한균		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
 
@Controller
public class WFMA0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger LOGGER = LoggerFactory.getLogger(WFMA0010Controller.class);

	/**
	 * 경조금 기준 관리 메뉴 서비스 클래스
	 */
	@Resource(name="WFMA0010Service")
	private WFMA0010Service service;

    /**
	 * 경조기준 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/WFMA0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMA0010_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
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
	 * 경조금 기준을 저장, 수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/wfm/WFMA0010_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {
		int iResult = 0;
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			iResult = service.processSAVE00(coreRequest.getSaveDataSetAll());
			
			if (iResult > 0) {
				coreResultData.setResultMessageSuccessSave();
			}else{

				if (iResult == -1) {
					coreResultData.setResultMessage("-1", "이미  사용중인 경조금 코드는 삭제 할 수 없습니다.");
				} else {
					coreResultData.setResultMessage("-2", "해당 기간에 등록된  경조금 코드가 이미 존재합니다.");
				}
			}

		} catch(Exception e) {
			LOGGER.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;

	}

}
