/**
 * core.erp.com.web.ComMainPortalController.java
 */
package core.erp.com.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComMainPortalService;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.ifw.utl.CoreProperties;


/**
 * <pre>
 *	ComMainPortalController - 메인 화면 포틀릿 구성등을 위한 기본 컨트롤러
 * <p><b>NOTE : </b>포털 화면의 개별 구성요소에 관련된 기능을 본 클래스에 구현하지 마세요.</p>
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 9. 5.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 9. 5.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComMainPortalController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ComMainPortalController.class);
    
    
    @Resource(name = "ComMainPortalService")
    private ComMainPortalService mainService = null;
    
    /**
     * <pre>
     * 즐겨찾기를 추가하거나 삭제한다.
     * </pre>
     *
     * @param coreRequest - Nexa 요청 객체
     * @return 처리 결과
     * @throws Exception 예외 발생 시
     */
    @RequestMapping(value = "/core/erp/com/ComMain_Favorite.do")
    public ModelAndView processFavoriteManage(CoreRequest coreRequest) throws Exception {
        
        ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            Map<String, Object> returnMap = new HashMap<String, Object>();
            
            // 즐겨찾기 저장, 삭제 처리
            int processCnt = mainService.processFavoriteManage(coreRequest.getSaveDataSetAll());

            if (processCnt > 0) {
                Map<String, Object> requestData = coreRequest.getMapVariableList();
                requestData.put("USER_IDXX", requestData.get("GBL_USERID"));
                returnMap = mainService.processFavoriteMenuSearch(requestData);
            }
            
            // 클라이언트로 데이터 전달
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processFavoriteManage : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
    
    
    @RequestMapping(value = "/core/erp/com/ComMain_Menusearch.do")
    public ModelAndView processMenuSearch(CoreRequest coreRequest, HttpServletRequest request) throws Exception {
        ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
        	Map paramMap = coreRequest.getMapVariableList();
        	
        	String systemCode = (String) paramMap.get("SYST_CODE");
            
            if (systemCode.endsWith("||ALL")) {
            	paramMap.put("MENU_LIST", "ALL");
            }
            
            systemCode = systemCode.replace("||ALL", "");
            
            Map<String, Object> returnMap = (Map<String, Object>) mainService.processMenuSearch(paramMap);
            
            
            
            // 세션 및 클라이언트의 전역변수를 수정
            request.getSession().setAttribute("GBL_SYSTCD", systemCode);
            returnMap.put("GBL_SYSTCD", systemCode);
            
            // 클라이언트로 데이터 전달
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processMenuSearch : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
    
    
    /**
     * <pre>
     * 대시보드 프로필에 표시할 이미지 정보를 조회한다.
     * </pre>
     *
     * @param coreRequest
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/core/erp/com/ComMain_ProfileImage.do")
    public ModelAndView processProfileImage(CoreRequest coreRequest, HttpServletRequest request) throws Exception {
    	ModelAndView mav = new ModelAndView("coreReturnView");
    	CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
    	
    	try {
			
    		Map<String, Object> paramMap = coreRequest.getMapVariableList();
    		
    		// 프로필 이미지, 인사기본 개인 사진 정보 조회
    		
    		
    		
		} catch (Exception e) {
            LOGGER.error("ComMainPortalController - processProfileImage : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
		}
    	
    	
    	mav.addObject("FORM_DATA", coreResultData);
    	return mav;
    }
    
    
    
    /**
     * <pre>
     * 대시보드 프로필 이미지를 변경/삭제 처리한다.
     * </pre>
     *
     * @param coreRequest
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/core/erp/com/ComMain_SaveProfileImage.do")
    public ModelAndView processSaveProfileImage(CoreRequest coreRequest, HttpServletRequest request) throws Exception {
    	ModelAndView mav = new ModelAndView("coreReturnView");
    	CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());
    	
    	try {
			
    		Map<String, Object> paramMap = coreRequest.getMapVariableList();
    		
    		// 이미지 정보 저장
    		mainService.processSaveProfileImage(paramMap, coreRequest.getSaveDataSetAll());

    		coreResultData.setResultMessageSuccessSave();
    		
		} catch (Exception e) {
			e.printStackTrace();
            LOGGER.error("ComMainPortalController - processProfileImage : " + e.getMessage());
            coreResultData.setResultMessageFailSave(e);
		}
    	
    	
    	mav.addObject("FORM_DATA", coreResultData);
    	return mav;
    }
       
    /**
     * <pre>
     * 메인화면 대시보드 바로가기 목록을 조회한다.
     * </pre>
     *
     * @param coreRequest - Nexa 요청 객체
     * @return 처리 결과
     * @throws Exception 예외 발생 시
     */
    @RequestMapping(value = "/core/erp/com/ComMain_GetBoardItems.do")
    public ModelAndView processGetBoardItems(CoreRequest coreRequest) throws Exception {
        
        ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            Map<String, Object> returnMap = (Map<String, Object>) mainService.processGetBoardItems(coreRequest.getMapVariableList());
            // 클라이언트로 데이터 전달
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processGetBoardItems : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
    
    
    @RequestMapping(value = "/core/erp/com/ComMain_SaveBoardItems.do")
    public ModelAndView processSaveBoardItems(CoreRequest coreRequest) throws Exception {
    	
    	 ModelAndView mav = new ModelAndView("coreReturnView");
         CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

         try {
             
             mainService.processSaveBoardItems(coreRequest.getSaveDataSetAll());
             coreResultData.setResultMessageSuccessSave();
             
         } catch(Exception e) {
             LOGGER.error("ComMainPortalController - processSaveBoardItems : " + e.getMessage());
             coreResultData.setResultMessageFailSave(e);
         }

         mav.addObject("FORM_DATA", coreResultData);
         return mav;
         
     }
    
    /**
     * <pre>
     * 메뉴ID를 이용하여 사용자 메뉴 및 권한 정보를 조회한다.
     * </pre>
     *
     * @param coreRequest - Nexa 요청 객체
     * @return 처리 결과
     * @throws Exception 예외 발생 시
     */
    @RequestMapping(value = "/core/erp/com/ComMain_SearchOpenMenu.do")
    public ModelAndView processSearchOpenMenu(CoreRequest coreRequest) throws Exception {
        
        ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            Map<String, Object> returnMap = (Map<String, Object>) mainService.processSearchOpenMenu(coreRequest.getMapVariableList());
            // 클라이언트로 데이터 전달
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processSearchOpenMenu : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
    
    
	/**
	 * <pre>
	 * 사용자 프로필 이미지 정보를 표시한다.
	 * </pre>
	 *
	 * @param request http 요청객체
	 * @param userId 사용자 ID
	 * @throws Exception
	 */
    @RequestMapping(value = "/core/erp/com/ComMain_LoadProfileImage.do")
	public void processSearchProfileImage(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		try {
			
			String userId = request.getParameter("user");
			
			// 정보 조회
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("USER_IDXX", userId);
			
			Map<String, Object> userInfoMap = (Map<String, Object>) mainService.processSearchProfileImage(paramMap);
			
			LOGGER.info("----- User Profile Info : " + userInfoMap);
			
			String baseDirPath = CoreProperties.getProperty("CoreERP.file.upload.path");
			String profileImgPath = (String) userInfoMap.get("MYPI_FLPT");
			String userImgPath = (String) userInfoMap.get("FILE_PATH");
			
			
			File baseDir = new File(baseDirPath);
			File targetImageFile = null;
			
			if ((profileImgPath != null) && (StringUtils.hasLength(profileImgPath))) {
				
				File profileImgFile = new File(baseDir, profileImgPath);
				
				// 프로필 이미지가 존재할 때..
				if (profileImgFile.exists()) {
					LOGGER.info("------ Profile Image : " + profileImgFile.getAbsolutePath());
					targetImageFile = profileImgFile;
				}
				
			} else if ((userImgPath != null) && (StringUtils.hasLength(userImgPath))) { 
				
				File userImgFile = new File(baseDir, userImgPath);
				
				// 인사정보 기본 이미지가 존재할 때
				if (userImgFile.exists()) {
					LOGGER.info("------ User Image : " + userImgFile.getAbsolutePath());
					targetImageFile = userImgFile;
				}
				
			}
			
			if (targetImageFile == null) {
				targetImageFile =  new File(baseDir, "profile_default.png");
			}
			
			if (targetImageFile.exists()) {
				
				OutputStream out = response.getOutputStream();
				FileInputStream fis = new FileInputStream(targetImageFile);
				FileCopyUtils.copy(fis, out);
				
				if (out != null) {
					out.flush();
					out.close();
				}
				
				if (fis != null) {
					fis.close();
				}
				
			}
			
		} catch (Exception e) {
			LOGGER.error("ComMainPortalController - processLoadProfileImage ::: Error!!");
		}
		
	}
    
    
    /**
     * <pre>
     * 사용자 프로필 이미지 정보를 표시한다.
     * </pre>
     *
     * @param request http 요청객체
     * @param userId 사용자 ID
     * @throws Exception
     */
    @RequestMapping(value = "/core/erp/com/ComMain_LoadFrameImage.do")
    public void processLoadFrameImage(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	
    	try {
    		
    		String userId = request.getParameter("user");
    		
    		// 정보 조회
    		Map<String, Object> paramMap = new HashMap<String, Object>();
    		paramMap.put("USER_IDXX", userId);
    		
    		Map<String, Object> userInfoMap = (Map<String, Object>) mainService.processSearchProfileImage(paramMap);
    		
    		LOGGER.info("----- User Profile Info : " + userInfoMap);
    		
    		String baseDirPath = CoreProperties.getProperty("CoreERP.file.upload.path");
    		String profileImgPath = (String) userInfoMap.get("FRPI_FLPT");
    		String userImgPath = (String) userInfoMap.get("FILE_PATH");
    		
    		
    		File baseDir = new File(baseDirPath);
    		File targetImageFile = null;
    		
    		if ((profileImgPath != null) && (StringUtils.hasLength(profileImgPath))) {
    			
    			File profileImgFile = new File(baseDir, profileImgPath);
    			
    			// 프로필 이미지가 존재할 때..
    			if (profileImgFile.exists()) {
    				LOGGER.info("------ Profile Image : " + profileImgFile.getAbsolutePath());
    				targetImageFile = profileImgFile;
    			}
    			
    		} else if ((userImgPath != null) && (StringUtils.hasLength(userImgPath))) { 
    			
    			File userImgFile = new File(baseDir, userImgPath);
    			
    			// 인사정보 기본 이미지가 존재할 때
    			if (userImgFile.exists()) {
    				LOGGER.info("------ User Image : " + userImgFile.getAbsolutePath());
    				targetImageFile = userImgFile;
    			}
    			
    		}
    		
    		if (targetImageFile == null) {
    			targetImageFile =  new File(baseDir, "frame_default.jpg");
    		}
    		
    		if (targetImageFile.exists()) {
    			
    			OutputStream out = response.getOutputStream();
    			FileInputStream fis = new FileInputStream(targetImageFile);
    			FileCopyUtils.copy(fis, out);
    			
    			if (out != null) {
    				out.flush();
    				out.close();
    			}
    			
    			if (fis != null) {
    				fis.close();
    			}
    			
    		}
    		
    	} catch (Exception e) {
    		LOGGER.error("ComMainPortalController - processLoadProfileImage ::: Error!!");
    	}
    	
    }
    
    
    
    /**
     * <pre>
     * 메인 대시보드의 사용자 연차/정기휴가 일수를 조회한다.
     * </pre>
     *
     * @param coreRequest http 요청 객체
     * @return 사용자의 연차/정기휴가 사용일수, 전체일수
     * @throws Exception
     */
    @RequestMapping(value = "/core/erp/com/ComMain_GetHolidayInfo.do")
    public ModelAndView processGetHolidayInfo(CoreRequest coreRequest) throws Exception {
    	
        ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            Map<String, Object> returnMap = (Map<String, Object>) mainService.processGetHolidayInfo(coreRequest.getMapVariableList());
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processGetHolidayInfo : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
        
    }
    
    
    @RequestMapping(value = "/core/erp/com/ComMain_GetItemCount.do")
    public ModelAndView processGetItemCount(CoreRequest coreRequest) throws Exception {
    	
    	ModelAndView mav = new ModelAndView("coreReturnView");
        CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

        try {
            
            Map<String, Object> returnMap = (Map<String, Object>) mainService.processGetItemCount(coreRequest.getSaveDataSetAll());
            coreResultData.setReturnDataMap(returnMap);
            coreResultData.setResultMessageSuccessSelect();
            
        } catch(Exception e) {
            LOGGER.error("ComMainPortalController - processGetItemCount : " + e.getMessage());
            coreResultData.setResultMessageFailSelect(e);
        }

        mav.addObject("FORM_DATA", coreResultData);
        return mav;
    	
    }
    
    

}
