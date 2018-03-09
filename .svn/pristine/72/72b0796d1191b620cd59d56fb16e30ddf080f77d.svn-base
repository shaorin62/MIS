package core.erp.txm.web;

import java.util.Map;                                              

import javax.annotation.Resource;                                  

import org.slf4j.Logger;                         
import org.slf4j.LoggerFactory;                  
import org.springframework.stereotype.Controller;					
import org.springframework.ui.ModelMap;                            
import org.springframework.web.bind.annotation.RequestMapping;     
import org.springframework.web.servlet.ModelAndView;               

import core.erp.txm.service.TXMD0080Service;
import core.ifw.cmm.request.CoreRequest;                 			
import core.ifw.cmm.result.CoreResultData;     					
/**
 * <pre>
 *	TXMD0080Service - 사업소득전산매체
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수 <kimjs@inbus.co.kr>
 * @since	2016 06. 23
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 23.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class TXMD0080Controller {

	private static final Logger LOGGER = LoggerFactory.getLogger(TXMD0080Controller.class);

	@Resource(name="TXMD0080Service")
	private TXMD0080Service tXMD0080Service;

	/**
	 * <pre>
	 * 사업소득전산매체
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/txm/TXMD0080_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			// 제출자 레코드 조회  및 추가
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0080Service.processSEARCH00(searchVo));
			//원천징수의무자별 집계레코드 조회  및 추가
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0080Service.processSEARCH01(searchVo));
			//주근무처 레코드 조회  및 추가
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0080Service.processSEARCH02(searchVo));
			//전산매체자료 조회  및 추가
			coreResultData.setReturnDataMap((Map<String, Object>) tXMD0080Service.processSEARCH04(searchVo));
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
	 * 전산매체파일 생성 
	 * </pre>
	 *
	 * @param coreRequest : 정산년도, 지점코드, 제출일, 담당자 
	 * @param model
	 * @return : 연말정산 전산매체 파일
	 * @throws Exception : -1값 반환시 UI공통 fn_CallBack에서 해당 메시지 처리
	 */
	@RequestMapping(value="/core/erp/txm/TXMD0080_SAVE00.do")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			LOGGER.debug("searchVo"+searchVo.toString());
			
			String returnStr = tXMD0080Service.processSAVE00(searchVo, coreRequest.getSaveDataSetAll());
			
			String[] result = returnStr.split(","); 
			 
			String sFILE_NAME = (result[0] == null ? "" : result[0]);
			String sFILE_PATH = (result[1] == null ? "" : result[1]);
			coreResultData.addVariableList("sFILE_NAME", sFILE_NAME);
			coreResultData.addVariableList("sFILE_PATH", sFILE_PATH);
			
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			LOGGER.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	

}
