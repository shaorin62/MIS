/**
 * core.erp.tmm.web.PDMA0010Controller.java - <Created by Code Template generator>
 */
package core.erp.pdm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.pdm.service.PDMA0010Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;


/**
 * <pre>
 *	PDMA0010Controller - 계약서 파일관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */
 
@Controller
public class PDMA0010Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(PDMA0010Controller.class);

	/**
	 * 제작업종분류관리 메뉴 서비스 클래스
	 */
	@Resource(name="PDMA0010Service")
	private PDMA0010Service service;

    /**
	 * 제작 계약서 화면 상단 계약서를 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/PDMA0010/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/pdm/PDMA0010_SEARCH00.do")
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
	
	
	/**
	 * <pre>
	 * 제작 계약서파일관리 데이터를 저장및 수정한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "core/erp/pdm/PDMA0010_SAVE00.do")
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
