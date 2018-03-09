/**
 * core.erp.tmm.service.impl.TMMA0070ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;


import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;

import core.erp.com.service.ComAttachFileService;
import core.erp.tmm.service.TMMA0070Service;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.FileManagerUtil;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	TMMA0070ServiceImpl - 엑셀업로드서식관리 메뉴 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.06
 * @version	1.0
 * @see		{@link TMMA0070Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.06	최흥규		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("TMMA0070Service")
public class TMMA0070ServiceImpl extends EgovAbstractServiceImpl implements TMMA0070Service {

	/**
	 * 엑셀업로드서식관리 DAO class inject.
	 */
	@Resource(name = "TMMA0070Dao")
	private TMMA0070Dao dao;

	/**
	 * 공통 파일 업로드 서비스
	 */
	@Resource(name = "comAttachFileService")
	private ComAttachFileService attachFileService;
	
	
	private static final Logger logger = LoggerFactory.getLogger(TMMA0070ServiceImpl.class);

	/**
	 * 엑셀업로드양식 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 엑셀업로드양식 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsTM_EXCLXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }

	/**
	 * TMMA0070 저장,수정 또는 삭제한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsTM_EXCLXM     = (List) saveData.get("dsTM_EXCLXM");  
		List dsTM_EXCLXM_Del = (List) saveData.get("dsTM_EXCLXM_DELETE");

		List dsFL_ATTACH     = (List) saveData.get("dsFL_ATTACH");  
		List dsFL_ATTACH_Del = (List) saveData.get("dsFL_ATTACH_DELETE");		
		
		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsTM_EXCLXM_Del.size(); i++) {

        	rowVo = (Map) dsTM_EXCLXM_Del.get(i);
			dao.processDELETE00(rowVo);
			deleteCount++;

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsTM_EXCLXM.size(); i++) {

			rowVo = (Map) dsTM_EXCLXM.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");

			if (rowType == 1) {
			
				dao.processSAVE00(rowVo);

			} else if (rowType == 2) {

				dao.processUPDATE00(rowVo);

			}
			
			updateCount++;
			
		}
		
		attachFileService.deleteFile(dsFL_ATTACH_Del);
		
		
		// attachFileService.uploadFilesOutbound(dsFL_ATTACH, this.getClass().getSimpleName().substring(0, 8), "XLS_FILE");
		// public int uploadFilesOutbound(List<Map<String, Object>> files, String menu, String savePath) throws Exception {
		// 2016-11-04 엑셀양식 업로드 함수 생성
		 
		List<Map<String, Object>> files = dsFL_ATTACH;
		
		
		int fileCount = 0;

        String savePath = CoreProperties.getProperty("CoreERP.excel.path");
        Map<String, Object> eachFile = null;
        
        String program = this.getClass().getSimpleName().substring(0, 8);
        if ((program == null) || (program.length() == 0)) {
            program = "ETC";
        }
        
        File dstDir = null;
        File srcFile = null;
        File dstFile = null;
        
        String prefixDir = program.substring(0, 3).toLowerCase();
        String detailDir = (savePath == null ? "" : savePath);
        String srcFilePath = null;
        String dstFilePath = null;
        String targetPath = null;
        String fileName = null;
        String orgFileName = null;

        String baseUploadPath = CoreProperties.getProperty("CoreERP.file.upload.path");
        if (!baseUploadPath.endsWith("/")) {
            baseUploadPath = baseUploadPath.concat("/");
        }
        
        String inUploadPath = CoreProperties.getProperty("CoreERP.outbound.upload.path");
        if (!inUploadPath.endsWith("/")) {
        	inUploadPath = inUploadPath.concat("/");
        }
        
        
        for (int index = 0; index < files.size(); index++) {
            
            eachFile = files.get(index);
            
            if ((eachFile == null) || (eachFile.isEmpty()) || (StrUtil.toNotNullString(eachFile.get("FILE_IDXX")).length() == 0)) {
                continue;
            }
            
            srcFilePath = (String) eachFile.get("FILE_PATH");
            
            if (srcFilePath.contains(baseUploadPath)) {
                srcFilePath = srcFilePath.substring(baseUploadPath.length());
            }
            
            //dstFilePath = dstFilePath.concat(File.separator).concat(prefixDir);
            dstFilePath = detailDir;
            
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(dstFilePath));
            targetPath = dstFilePath;

            if (!srcFilePath.contains(baseUploadPath)) {
                srcFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(baseUploadPath.concat(srcFilePath)));
            }
            
            // 전체 디렉토리
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(inUploadPath.concat(dstFilePath)));
            dstDir = new File(dstFilePath);
            fileName = (String) eachFile.get("PFIL_NAME");
            orgFileName = (String) eachFile.get("LFIL_NAME");
            
            srcFilePath = srcFilePath.concat(File.separator).concat(fileName);
            dstFilePath = dstFilePath.concat(File.separator).concat(orgFileName);
            
            srcFile = new File(srcFilePath);
            dstFile = new File(dstFilePath);
            
            if (srcFile.exists()) {
                if (!dstDir.exists()) {
                    dstDir.mkdirs();
                }
                FileCopyUtils.copy(srcFile, dstFile);
                srcFile.delete();
            }
            
            eachFile.put("FILE_PATH", targetPath);
            eachFile.put("SYST_CODE", prefixDir.toUpperCase());
            eachFile.put("MENU_IDXX", program);
            eachFile.put("EXTN_NAME", StringUtils.getFilenameExtension((String) eachFile.get("LFIL_NAME")));
            eachFile.put("FPTY_CODE", "CTXR");
            
            fileCount++;
            
        } 
        
        return deleteCount + updateCount + fileCount;
	}
}
