package core.erp.txm.web;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.txm.service.TXMC0120Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;

/**
 * <pre>
 *	TXMC0120Controller - 사업자단위과세별부가세과세표준및납부세액  프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	황치웅
 * @since	2016.08.03
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.03	황치웅		Initial Created.
 * 2016.08.10	안윤준		수정
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */
@Controller
public class TXMC0120Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMC0120Controller.class);

	@Resource(name="TXMC0120Service")
	private TXMC0120Service TXMC0120Service;
	
	/**
	 * <pre>
	 * 사업자단위과세별부가세과세표준및납부세액(인적사항), 사업자단위과세별부가세과세표준및납부세액(헤더)
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/txm/TXMC0120_SEARCH00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) TXMC0120Service.processSEARCH00(searchVo));
			
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) { 
			LOGGER.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
	
	/**
	 * <pre>
	 * 사업자단위과세별부가세과세표준및납부세액(인적사항) 조회, 사업자단위과세별부가세과세표준및납부세액(헤더) 처리, 사업자단위과세별부가세과세표준및납부세액(세부내용) 처리
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/txm/TXMC0120_PROC00.do")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public ModelAndView processPROC00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			coreResultData.setReturnDataMap((Map<String, Object>) TXMC0120Service.processPROC00(searchVo));
			
			coreResultData.setResultMessageSuccessSelect();
		} catch(Exception e) { 
			LOGGER.error("processPROC00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	
	
	/**
	 * <pre>
	 * 사용자 정보 자료 저장
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/core/erp/txm/TXMC0120_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			TXMC0120Service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			LOGGER.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}
		
	
}
