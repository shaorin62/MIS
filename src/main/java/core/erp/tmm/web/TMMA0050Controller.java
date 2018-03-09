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

import core.erp.tmm.service.TMMA0050Service;

/**
 * <pre>
 *	TMMA0050Controller - 팝업관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈 <isb@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	임선빈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TMMA0050Controller {

	private static final Logger logger = LoggerFactory.getLogger(TMMA0050Controller.class);

	@Resource(name="TMMA0050Service")
	private TMMA0050Service TMMA0050Service;

	/**
	 * <pre>
	 * 팝업관리 조회
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/tmm/TMMA0050_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			//2016 06 09 김준수 수정
			//Object ds = TMMA0050Service.processSEARCH00(searchVo);
			//Map<String, Object> returnMap = (Map<String, Object>) TMMA0050Service.processSEARCH00(searchVo);
			
			// 서비스콜 및 Map<String, Object>를 반환받아 coreResultData에 세팅 [addDataSet, addVariableList] 두가지경우 자동판단후 처리
			coreResultData.setReturnDataMap((Map<String, Object>) TMMA0050Service.processSEARCH00(searchVo));
			//coreResultData.addDataSet("dsTM_POPUPH", ds);
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
	 * 팝업관리 저장
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/tmm/TMMA0050_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			//2016 06 09 김준수 수정
			//Map dataSetMap = coreRequest.getSaveDataSetAll();	// 저장에는 getSaveDataSetAll() 사용
			TMMA0050Service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

}
