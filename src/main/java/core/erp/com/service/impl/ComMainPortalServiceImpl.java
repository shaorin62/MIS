/**
 * core.erp.com.service.impl.ComMainPortalServiceImpl.java
 */
package core.erp.com.service.impl;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import core.erp.com.service.ComMainPortalService;
import core.ifw.utl.FileManagerUtil;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	ComMainPortalService - 메인화면 포틀릿 구성을 위한 기본 서비스 구현 클래스
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
@Service("ComMainPortalService")
public class ComMainPortalServiceImpl extends EgovAbstractServiceImpl implements ComMainPortalService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ComMainPortalServiceImpl.class);

    
    @Resource(name = "ComMainPortalDao")
    private ComMainPortalDao mainDao = null;
    
    @Resource(name="ComLoginDao")
    private ComLoginDao comLoginDao;
    
    
    /* (non-Javadoc)
     * @see core.erp.com.service.ComMainPortalService#processFavoriteManage(java.util.Map)
     */
    @SuppressWarnings("unchecked")
    @Override
    public int processFavoriteManage(Map<String, Object> requestData) throws Exception {
        
        List<Map<String, Object>> dsMyMenu = (List<Map<String, Object>>) requestData.get("dsMyMenuList");
        List<Map<String, Object>> dsMyMenu_DEL = (List<Map<String, Object>>) requestData.get("dsMyMenuList_DELETE");
        
        Map<String, Object> rowMap = null;
        
        int iTotCnt = 0;
        int dataSize = 0;
        int rowType = 0;
        
        
        //---------- 세션 사용자 정보
        String GBL_USERID = (String) RequestContextHolder.getRequestAttributes().getAttribute("GBL_USERID", RequestAttributes.SCOPE_SESSION);
        
        LOGGER.info("------ Session ::: GBL_USERID : " + GBL_USERID);
        
        
        dataSize = dsMyMenu_DEL.size();

        // 즐겨찾기 삭제
        for (int row = 0; row < dataSize; row++) {
            
            rowMap = dsMyMenu_DEL.get(row);
            
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("------ Favorite Menu Delete : " + rowMap);
            }
            rowMap.put("USER_IDXX", GBL_USERID);
            
            mainDao.processFavoriteMenuDelete(rowMap);
            iTotCnt++;
            
        }
        
        
        dataSize = dsMyMenu.size();
        
        // 즐겨찾기 추가
        for (int row = 0; row < dataSize; row++) {
            
            rowMap = dsMyMenu.get(row);
            rowType = (Integer) rowMap.get("ROW_TYPE");

            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("------ Favorite Menu Save : " + rowMap);
            }
            rowMap.put("USER_IDXX", GBL_USERID);
            
            if (rowType == 1) {
            	mainDao.processFavoriteMenuSave(rowMap);
            } else if (rowType == 2) {
            	mainDao.processFavoriteMenuUpdate(rowMap);
            }
            iTotCnt++;
            
        }
        
        // 즐겨찾기 메뉴 순서 재조정
        if ((rowMap != null) && (iTotCnt > 0)) {
            mainDao.processFavoriteMenuOrder(rowMap);
        }
        
        
        return iTotCnt;
        
    }
    
    
    /* (non-Javadoc)
     * @see core.erp.com.service.ComMainPortalService#processFavoriteMenuSearch(java.util.Map)
     */
    public Map<String, Object> processFavoriteMenuSearch(Map<String, Object> requestData) throws Exception {
        Map<String, Object> returnDataMap = new HashMap<String, Object>();
        returnDataMap.put("dsMyMenuList", mainDao.processFavoriteMenuSearch(requestData));
        return returnDataMap;
        
    }


    /* (non-Javadoc)
     * @see core.erp.com.service.ComMainPortalService#processMenuSearch(java.util.Map)
     */
    @Override
    public Map<String, Object> processMenuSearch(Map<String, Object> requestData) throws Exception {
        Map<String, Object> returnDataMap = new HashMap<String, Object>();
        returnDataMap.put("dsMenuList", comLoginDao.processMENUDOWN(requestData));
        returnDataMap.put("dsMyMenuList", comLoginDao.processMYMENUDOWN(requestData));
        return returnDataMap;
    }


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processSaveProfileImage(java.util.Map, java.util.Map)
	 */
	@Override
	public int processSaveProfileImage(Map<String, Object> paramMap, Map<String, Object> requestData) throws Exception {
		
		int saveCount = 0;
		
		String mode = (String) paramMap.get("SAVE_MODE");
		String type = (String) paramMap.get("SAVE_TYPE");	// 이미지 저장 타입(PROFILE 프로필 이미지, MYPHOTO 나의사진
		
		String saveDirPrefix = "PROFILE_PIC/";
		
		if ("SAVE".equals(mode)) {
			
			List<Map<String, Object>> dsUploadFiles = (List<Map<String, Object>>) requestData.get("dsUPLOAD_FILE");
			
			// 이미지는 하나뿐..
			Map<String, Object> fileMap = dsUploadFiles.get(0);
			
			LOGGER.info("----- File Map : " + fileMap);
			
			if ("PROFILE".equals(type)) {
				saveDirPrefix = "PROFILE_PIC/";
			} else {
				saveDirPrefix = "FRAME_PIC/";
			}
			
			String saveDir = saveDirPrefix.concat((String) paramMap.get("USER_IDXX")).concat(".").concat((String) fileMap.get("EXTN_NAME"));
			
			String tempFileDir = (String) fileMap.get("FILE_PATH");
			tempFileDir = tempFileDir.concat(File.separator).concat((String) fileMap.get("PFIL_NAME"));
			
			// DB에 정보 저장
			if ("PROFILE".equals(type)) {
				paramMap.put("MYPI_FLPT", saveDir);
			} else if ("MYPHOTO".equals(type)) {
				paramMap.put("FRPI_FLPT", saveDir);
			}
			
			mainDao.processSaveProfileImage(paramMap);
			
			// 원본에서 대상테이블로 파일만 복사.
			FileManagerUtil.copyUploadFile(tempFileDir, saveDir);
			
			
		} else if ("DEL".equals(mode)) {
			
			Map<String, String> userInfoMap = (Map<String, String>) mainDao.processSearchProfileImage(paramMap);
			LOGGER.info("----- Retrieved Info : " + userInfoMap);
			
			// 프로필 이미지 파일 삭제(!!! 파일만 삭제합니다.);
			if ((userInfoMap != null) && !userInfoMap.isEmpty()) {
				String srcFilePath = "";
				
				if ("PROFILE".equals(type)) {
					srcFilePath = (String) userInfoMap.get("MYPI_FLPT");
				} else if ("MYPHOTO".equals(type)) {
					srcFilePath = (String) userInfoMap.get("FRPI_FLPT");
				}
				if (srcFilePath.length() > 0) {
					FileManagerUtil.deleteUploadFile(srcFilePath);
				}
			}
			
		}
		
		return saveCount;
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processGetBoardItems(java.util.Map)
	 */
	@Override
	public Object processGetBoardItems(Map<String, Object> paramMap)
			throws Exception {
		 Map<String, Object> returnDataMap = new HashMap<String, Object>();
		 returnDataMap.put("dsBoardItem", mainDao.processGetBoardItems(paramMap));
		 return returnDataMap;
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processSaveBoardItems(java.util.Map)
	 */
	@Override
	public int processSaveBoardItems(Map<String, Object> requestData) throws Exception {

		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 
		 List dsBOARD_ITEM = (List) requestData.get("dsBoardItem");
		 
		 //DataSet의 Row Count만큼 돌면서 Insert Or Update
		 for (int idx = 0; idx < dsBOARD_ITEM.size(); idx++) {
			 rowVo = (Map) dsBOARD_ITEM.get(idx);
			 
			 mainDao.processSaveBoardItems(rowVo);
			 updateCount++;
		 }
		 
		 return updateCount;
		 
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processSearchOpenMenu(java.util.Map)
	 */
	@Override
	public Object processSearchOpenMenu(Map<String, Object> requestData) throws Exception {
		Map<String, Object> returnDataMap = new HashMap<String, Object>();
        returnDataMap.put("dsOpenMenu", mainDao.processSearchOpenMenu(requestData));
        return returnDataMap;
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processSearchProfileImage(java.util.Map)
	 */
	@Override
	public Object processSearchProfileImage(Map<String, Object> paramMap) throws Exception {
		return mainDao.processSearchProfileImage(paramMap);
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processGetHolidayInfo(java.util.Map)
	 */
	@Override
	public Object processGetHolidayInfo(Map<String, Object> requestData)
			throws Exception {
		Map<String, Object> returnDataMap = new HashMap<String, Object>();
		returnDataMap.put("dsHolidayInfo", mainDao.processGetHolidayInfo(requestData));
		return returnDataMap;
	}


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComMainPortalService#processGetItemCount(java.util.Map)
	 */
	@Override
	public Object processGetItemCount(Map<String, Object> requestData)
			throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		List dsBoardItem = (List) requestData.get("dsBoardCountItem");
		Map<String, Object> rowMap = null;
		Map<String, Object> dataMap = null;
		int nRows = dsBoardItem.size();
		
		String selectQueryStr = "";
		Map<String, Object> countMap = null;
		
		for (int idx = 0; idx < nRows; idx++) {
			
			rowMap = (Map) dsBoardItem.get(idx);
			
			// 아이템 항목의 쿼리문장 조회
			dataMap = (Map<String, Object>) mainDao.processGetItemInfo(rowMap);
			
			if (!dataMap.isEmpty()) {
				dataMap.putAll(rowMap);
				selectQueryStr = (String) dataMap.get("DBCN_QURY");
				selectQueryStr = StrUtil.replaceQueryStr(selectQueryStr, dataMap, "#");
				dataMap.put("DBCN_QURY", selectQueryStr);
				countMap = (Map<String, Object>) mainDao.processGetItemCount(dataMap);
				rowMap.put("ITEM_CNTX", (countMap.get("CNT") == null ? 0 : countMap.get("CNT")));
			}
			
		}
		
		returnMap.put("dsBoardCountItem", dsBoardItem);
		return returnMap;
		
	}
	
}
