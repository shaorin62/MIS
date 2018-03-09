package core.erp.tmm.web;

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
import core.erp.tmm.service.TMMB0030Service;

/**
 * <pre>
 *	TMMB0030Controller - 메뉴구조관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 17.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 17.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TMMB0030Controller {

	private static final Logger logger = LoggerFactory.getLogger(TMMB0030Controller.class);

	@Resource(name="TMMB0030Service")
	private TMMB0030Service tMMB0030Service;

	/**
	 * <pre>
	 * 메뉴구조관리 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/tmm/TMMB0030_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = tMMB0030Service.processSEARCH00(searchVo);

			//coreResultData.addDataSet("dsVI_MENUXM", ds);
			// 서비스콜 및 Map<String, Object>를 반환받아 coreResultData에 세팅 [addDataSet, addVariableList] 두가지경우 자동판단후 처리
			coreResultData.setReturnDataMap((Map<String, Object>) tMMB0030Service.processSEARCH00(searchVo));
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
	 * 메뉴구조관리 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/tmm/TMMB0030_SEARCH01.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH01(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());

			//Object ds = tMMB0030Service.processSEARCH01(searchVo);

			//coreResultData.addDataSet("dsTREE_VIEW", ds);
			// 서비스콜 및 Map<String, Object>를 반환받아 coreResultData에 세팅 [addDataSet, addVariableList] 두가지경우 자동판단후 처리
			coreResultData.setReturnDataMap((Map<String, Object>) tMMB0030Service.processSEARCH01(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processSEARCH01 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	/**
	 * <pre>
	 * 메뉴구조관리 저장
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/tmm/TMMB0030_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			//Map searchVo = coreRequest.getMapVariableList();
			//Map dataSetMap = coreRequest.getSaveDataSetAll();	// 저장에는 getSaveDataSetAll() 사용
			//Object ds = tMMB0030Service.processSAVE00(dataSetMap, searchVo);
			//coreResultData.addDataSet("dsTREE_VIEW", ds);
			// 서비스콜 및 Map<String, Object>를 반환받아 coreResultData에 세팅 [addDataSet, addVariableList] 두가지경우 자동판단후 처리
			coreResultData.setReturnDataMap((Map<String, Object>) tMMB0030Service.processSAVE00(coreRequest.getSaveDataSetAll(), coreRequest.getMapVariableList()));
			coreResultData.setResultMessageSuccessSave();
			
		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
