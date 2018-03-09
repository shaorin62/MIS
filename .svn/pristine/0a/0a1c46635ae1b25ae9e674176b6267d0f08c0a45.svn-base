package core.erp.com.web;

import java.util.List; 
import java.util.Iterator;
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
import core.erp.com.service.ComMakeComboService;

/**																										
 * <pre>                                                                                                
 *	CommMakeComboController - 템플릿 구현                                                   
 * <p><b>NOTE : </b>템플릿에 사용한 컨트롤러이며, 해당 템플릿은 공통메시지 기능을 이용하였음.</p>   
 * </pre>                                                                                               
 *                                                                                                      
 * @author	developer <email@inbus.co.kr>                                                               
 * @since	2014. 9. 23.                                                                                
 * @version	1.0                                                                                         
 *                                                                                                      
 * <pre>                                                                                                
 * == Modification Information ==                                                                       
 * Date		Modifier		Comment                                                                     
 * ====================================================                                                 
 * 2014. 9. 23.	developer		Initial Created.                                                        
 * ====================================================                                                 
 * </pre>                                                                                               
 *                                                                                                      
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.                                            
 */                                                                                                     



/******************************************************************************
 * <pre>
 *   
 *   프로그램명 : ComMakeCombo Package
 *   클래스명 : CommMakeComboController.java
 *   작성일자 : 2014. 09. 27.
 *   작 성 자 : 임선빈
 *   비   고 :
 *   Copyright (c) 2011 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/

@Controller
public class ComMakeComboController {

	private static final Logger logger = LoggerFactory.getLogger(ComMakeComboController.class);

	@Resource(name="ComMakeComboService")
	private ComMakeComboService comMakeComboService;

	//공통코드콤보
	@RequestMapping(value="/core/erp/com/ComMakeCombo_GetCommCode.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetCommCode(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			
			Map searchVo = coreRequest.getMapVariableList();
			List<Map> dsCombo = coreRequest.getDataSet("dsCombo");
			
			// 시스템언어코드 세션 값 
			searchVo.put("GBL_LANGCD", coreRequest.getSessionValue("GBL_LANGCD"));
			
			coreResultData.setReturnDataMap((Map<String, Object>)comMakeComboService.processGetCommCode(searchVo, dsCombo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetCommCode : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}


    /**
     * 2014.12 : 연말정산용 공통코드!!
     * @throws Exception
     */
	@RequestMapping(value="/core/erp/com/ComMakeCombo_GetCommCode_YEA.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetCommCode_YEA(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			//List<Map> dataSet = coreRequest.getDataSet("dsCombo");

			logger.info("searchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			/*Map<String, Object> dsList = (Map<String, Object>) comMakeComboService.processGetCommCode_YEA(dataSet);
			
			Iterator<String> dsIt = dsList.keySet().iterator();
			String dsName = "";
			
			while(dsIt.hasNext()) {
				dsName = dsIt.next();
				coreResultData.addDataSet(dsName, dsList.get(dsName));
			}*/
			//2016 06 10 김준수 수정
			coreResultData.setReturnDataMap((Map<String, Object>)comMakeComboService.processGetCommCode_YEA((List<Map>)coreRequest.getDataSet("dsCombo")));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetCommCode : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}

	//사용자콤보			   /core/erp/com/CommMakeCombo_GetUserComboCode.do
	@RequestMapping(value="/core/erp/com/CommMakeCombo_GetUserComboCode.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetUserComboCode(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			List<Map> dataSet = coreRequest.getDataSet("dsUserCombo");

			logger.info("dsUserCombosearchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			Map<String, Object> dsList = (Map<String, Object>) comMakeComboService.processGetUserComboCode(dataSet);
			
			Iterator<String> dsIt = dsList.keySet().iterator();
			String dsName = "";
			
			while(dsIt.hasNext()) {
				dsName = dsIt.next();
				coreResultData.addDataSet(dsName, dsList.get(dsName));
			}
			
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetUserComboCode : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	

    /**
     * 2014.12 : 연말정산용 싱글 사용자콤보!!
     * @throws Exception
     */
	@RequestMapping(value="/core/erp/com/CommMakeCombo_GetUserComboCode_YEA.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetUserComboCode_YEA(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			//List<Map> dataSet = coreRequest.getDataSet("dsUserCombo");

			logger.info("dsUserCombosearchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			/*Map<String, Object> dsList = (Map<String, Object>) comMakeComboService.processGetUserComboCode_YEA(dataSet);
			
			Iterator<String> dsIt = dsList.keySet().iterator();
			String dsName = "";
			
			while(dsIt.hasNext()) {
				dsName = dsIt.next();
				coreResultData.addDataSet(dsName, dsList.get(dsName));
			}*/
			//2016 06 10 김준수 수정
			coreResultData.setReturnDataMap((Map<String, Object>)comMakeComboService.processGetUserComboCode_YEA((List<Map>)coreRequest.getDataSet("dsUserCombo")));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetUserComboCode : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	
	
	//사용자콤보 싱글
	@RequestMapping(value="/core/erp/com/CommMakeCombo_GetUserComboCodeSingle.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetUserComboCodeSingle(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			
			logger.info("dsUserComboSinglesearchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			/*Map<String, Object> dsList = (Map<String, Object>) comMakeComboService.processGetUserComboCodeSingle(searchVo);
			
			Iterator<String> dsIt = dsList.keySet().iterator();
			String dsName = "";
			
			while(dsIt.hasNext()) {
				dsName = dsIt.next();
				logger.info("dsName : " + dsName);
				coreResultData.addDataSet(dsName, dsList.get(dsName));
			}*/
			//2016 06 10 김준수 수정
			coreResultData.setReturnDataMap((Map<String,Object>)comMakeComboService.processGetUserComboCodeSingle(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetUserComboCodeSingle : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	
	

    /**
     * 2014.12 : 연말정산용 싱글 콤보!!
     * @throws Exception
     */
	@RequestMapping(value="/core/erp/com/CommMakeCombo_GetUserComboCodeSingle_YEA.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetUserComboCodeSingle_YEA(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			
			logger.info("dsUserComboSinglesearchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			/*Map<String, Object> dsList = (Map<String, Object>) comMakeComboService.processGetUserComboCodeSingle_YEA(searchVo);
			
			Iterator<String> dsIt = dsList.keySet().iterator();
			String dsName = "";
			
			while(dsIt.hasNext()) {
				dsName = dsIt.next();
				logger.info("dsName : " + dsName);
				coreResultData.addDataSet(dsName, dsList.get(dsName));
			}*/
			//2016 06 10 김준수 수정
			coreResultData.setReturnDataMap((Map<String, Object>) comMakeComboService.processGetUserComboCodeSingle_YEA(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetUserComboCodeSingle : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	
	
	
	/**
     * 2016.06.22 : 본점/지점 검색 추가  김준수
     * @throws Exception
     */
	@RequestMapping(value="/core/erp/com/CommMakeCombo_GetBranch.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processGetBranch(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {
			Map searchVo = coreRequest.getMapVariableList();
			
			logger.info("dsGetBranchsearchVo : " + searchVo.toString());

			/******************************
			 * Message Information Search *
			 ******************************/
			coreResultData.setReturnDataMap((Map<String, Object>) comMakeComboService.processGetBranch(searchVo));			
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("processGetBranch : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
	}	
	
}
