/**
 * 
 */
package core.erp.com.service.impl;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;

import core.erp.com.service.ComAttachFileService;
import core.erp.com.web.ComFiledownloadController;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.FileManagerUtil;
import core.ifw.utl.FileUtil;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *  ComAttachFileServiceImpl - 공통 첨부파일(첨부파일 업/다운로드 조회) 서비스 인터페이스 구현클래스
 * <p><b>NOTE : </b>해당 프로그램에서 사용하는 첨부파일 테이블의 구조는 다음과 같습니다.</p>
 * ----- 테이블명 -----
 * TM_AFILED : 첨부파일
 * 
 * ----- 테이블 구조 -----
 * FILE_IDXX   NVARCHAR2(100 CHAR) PK  파일ID
 * PFIL_NAME   NVARCHAR2(100 CHAR) PK  물리파일명
 * LFIL_NAME   NVARCHAR2(100 CHAR)     논리파일명
 * FILE_SIZE   NUMBER(15,0)            파일크기
 * EXTN_NAME   NVARCHAR2(10 CHAR)      확장자명
 * REMK_200X   NVARCHAR2(200 CHAR)     비고200
 * SYST_CODE   NVARCHAR2(6 CHAR)       시스템코드
 * MENU_IDXX   NVARCHAR2(9 CHAR)       메뉴ID
 * FILE_PATH   NVARCHAR2(100 CHAR)     파일경로
 * FITY_CODE   NVARCHAR2(10 CHAR)      파일유형코드[FITY_CODE]
 * FPTY_CODE   NVARCHAR2(10 CHAR)      경로유형코드[FPTY_CODE] : UPLD : Upload Dir, CTXR : Context Root Dir
 * INST_USID   NVARCHAR2(10 CHAR)      입력작업자
 * INST_DATE   DATE                    입력일시
 * UPDT_USID   NVARCHAR2(10 CHAR)      수정작업자
 * UPDT_DATE   DATE                    수정일시
 * ----- 테이블 구조 끝 -----
 * 
 * 기존까지는 첨부파일을 2개 테이블을 이용하여 저장하였지만, 2016년 9월 2일 이후부터 1개의 테이블로 통합하여 관리합니다.
 * 해당 프로그램을 사용하는 경우 반드시 기존 테이블을 변경하여 위의 구조로 사용하시기 바랍니다.
 * </pre>
 * 
 * @author  genie <jsh@inbus.co.kr>
 * @since   2016. 6. 23.
 * @version 1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date     Modifier        Comment
 * ====================================================
 * 2016. 6. 23. genie           Initial Created.
 * 2016. 9.  7. genie           첨부파일 테이블 통합
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */

@Service("comAttachFileService")
public class ComAttachFileServiceImpl extends EgovAbstractServiceImpl implements ComAttachFileService {

	@Resource(name = "comAttachFileDao")
	private ComAttachFileDao dao;

	private static final Logger LOGGER = LoggerFactory.getLogger(ComAttachFileServiceImpl.class);

	/* (non-Javadoc)
	 * @see core.erp.com.service.ComAttachFileService#getFile(java.util.Map)
	 */
	@SuppressWarnings("rawtypes")
	public Object getFile(Map searchVo) throws Exception {		

		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsFL_ATTACH", dao.selectFile(searchVo));
		return returnMap;
		
	}

	
	/* (non-Javadoc)
	 * @see core.erp.com.service.ComAttachFileService#deleteTM_AFILED(java.util.Map)
	 */
	@SuppressWarnings("rawtypes")
	public int deleteTM_AFILED(Map param) throws Exception {
		return dao.deleteTM_AFILED(param);
	}	


	/* (non-Javadoc)
	 * @see core.erp.com.service.ComAttachFileService#uploadFile(java.util.List, java.lang.String, java.lang.String)
	 */
	@Deprecated
	public int uploadFile(List list, String menuId, String savePath) throws Exception {

	    String bizCode = null;
		String mid = menuId;
		int uploadCnt = 0;

		if(mid == null || mid.length() <= 0) {
			mid = "ETC";	//"TMM";
		}

		String physicalPath = "";
		String sourcePath = "";
		String baseDir = CoreProperties.getProperty("CoreERP.file.upload.path");
		if (!baseDir.endsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
		    baseDir = baseDir.concat(ComFiledownloadController.DEFAULT_SEPARATOR);
		}
		
		String tempUploadDir = CoreProperties.getProperty("CoreERP.temp.upload.path");
		if (!tempUploadDir.endsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
		    tempUploadDir = tempUploadDir.concat(ComFiledownloadController.DEFAULT_SEPARATOR);
		}
		
		
		bizCode = mid.substring(0, 3).toLowerCase();

		//첨부파일 디테일 생성 TM_AFILED, 
		for (int i = 0; i < list.size(); i++) {
		    
			Map data = (Map) list.get(i);

			//첨부파일이 없는 경우 생성하지 않는다.
			if(StrUtil.toNotNullString(data.get("FILE_IDXX")).length()<1)
				continue;

			//웹스퀘어와 구분자가 다름 : 예외처리 개념으로 C와 U만 받는다.
			int rowType = (Integer) data.get("ROW_TYPE");

			if (rowType == 1 || rowType == 2) {

				//임시 저장경로이다. FILE_PATH뒤에 bizcode/excelsample 이 붙기 전에 파일업로드 팝업에서 생성한 temp파일 경로를 유지한다.
				sourcePath = (String) data.get("FILE_PATH");
				
				// 임시 저장경로가 전체경로로 구성되어 있다면
				if (sourcePath.contains(baseDir)) {
				    sourcePath = sourcePath.substring(baseDir.length());
				}
				
				//임시 저장경로에서 실제 저장할 폴더의 경로로 변환
				String tmpDir = baseDir.concat(sourcePath);
				if (tmpDir.contains(tempUploadDir)) {
				    physicalPath = tmpDir.substring(tempUploadDir.length());
				} else {
				    physicalPath = sourcePath;
				}
				
				//세부 저장 경로가 주어진 경우, 업로드한 경로가 세부저장경로 아니면 기존의 경로를 무시하고 /업무경로/세부저장경로/년월 처리
				if((savePath != null) && (savePath.length() > 0)) {
					if(physicalPath.indexOf(ComFiledownloadController.DEFAULT_SEPARATOR + savePath) == -1) {
						physicalPath = bizCode.concat(ComFiledownloadController.DEFAULT_SEPARATOR).concat(savePath);

						// 디렉토리 뒤에 추가로 년월을 생성한다
		                SimpleDateFormat sf = new SimpleDateFormat("yyyyMM", Locale.KOREAN);
		                physicalPath = physicalPath.concat(ComFiledownloadController.DEFAULT_SEPARATOR).concat(sf.format(new Date(System.currentTimeMillis())));
					}
				}


				//실제 경로를 디비에 저장할 수 있도록 처리한다.
				data.put("FILE_PATH", FileManagerUtil.filePathBlackList(physicalPath));

				// 디렉토리 확인
				File dirPath = new File(FileManagerUtil.filePathBlackList(baseDir.concat(physicalPath)));

				if(!dirPath.exists()) {
					dirPath.mkdirs();
				}

				//파일 복사를 위해서 임시폴더에 있는 파일명 경로를 생성
				sourcePath = sourcePath.concat(ComFiledownloadController.DEFAULT_SEPARATOR).concat((String) data.get("PFIL_NAME"));
				physicalPath = physicalPath.concat(ComFiledownloadController.DEFAULT_SEPARATOR).concat((String) data.get("PFIL_NAME"));

				String logFileNM =  (String) data.get("LFIL_NAME");
				String stype =logFileNM.substring(logFileNM.lastIndexOf(".") + 1);

				data.put("SYST_CODE", bizCode);
				data.put("MENU_IDXX", mid);
				data.put("EXTN_NAME", stype);
				data.put("FPTY_CODE", "UPLD");
				
				physicalPath = baseDir.concat(physicalPath);
				sourcePath = baseDir.concat(sourcePath);
				
                    
				File srcFile = new File(physicalPath);

				if(!srcFile.exists()) {
					//첨부파일을 실제 경로로 복사한다~!!
					try {
						//ws버전과 카피하는게 다름
						FileUtil.fileCopy(sourcePath, physicalPath);

						//tmp폴더에서 실제폴더로 옮겨지면 tmp폴더의 파일을 삭제하는 로직이 FileUploadUtil.fileCopy() 에만 있음
						File oldFile = new File(sourcePath);
						oldFile.delete();


					} catch (IOException e) {
						LOGGER.warn("-------- Exception occurred while copy files. Caused : " + e.getMessage());
					}
				}
				

				//if((checkMap == null) || (checkMap.isEmpty())) {
				if(dao.selectTM_AFILED(data) == null) {
					// 파일정보 테이블을 기록한다!
					dao.insertTM_AFILED(data);	//상세테이블 저장
				} else {
					dao.updateTM_AFILED(data);
				}
				uploadCnt++;				

			}
		}
		return uploadCnt;
	}

	
    /* (non-Javadoc)
     * @see core.erp.com.service.ComAttachFileService#deleteFile(java.util.List)
     */
    @SuppressWarnings("rawtypes")
    public int deleteFile(List list) throws Exception {

        int iTotCnt = 0;


        String baseUploadDir = CoreProperties.getProperty("CoreERP.file.upload.path");
        
        //첨부파일 마스터 생성 TM_ATFILE, 마스터는 FILE_IDXX별로 1개만 생성
        for (int i = 0; i < list.size(); i++) {
            
            Map data = (Map) list.get(i);

            //넥사크로는 컨트롤단에서 request를 map에 담을 때 UPDT_USID,UPDT_DATE 를 담아와서 sessionUserInfo 사용할 필요 없음
            //첨부파일이 없는 경우 첨부파일 삭제 로직을 실행하지 않는다.
            if ((data.get("FILE_IDXX") != null) && (data.get("FILE_IDXX").toString().length() < 1)) continue;

            
            //컨트롤 단에서 삭제 리스트와 업데이트리스트를 분기시켜서 가져오기 때문에, 이 구문은 삭제리스트만 있음.
            //String rowStatus = (String) data.get("ROW_TYPE");

            String fileName = "";
            String filePath = "";
            File deleteFile = null;

            //2014-03 : 재조회 하지 않는 경우 등은 절대경로가 다를 수 있음, DB삭제시 저장상태로도 파일 삭제 위함

            //1. DB자료 삭제
            //디테일만 삭제한다.
            //디테일이 전부 삭제되면 헤더도 삭제된다.
            deleteTM_AFILED(data);

            //2. 파일 삭제(지정경로)
            fileName = (String) data.get("PFIL_NAME");
            filePath = (String) data.get("FILE_PATH");
            
            if (!filePath.startsWith(baseUploadDir)) {
                filePath = baseUploadDir.concat(filePath);
            }
            
            deleteFile = new File(filePath.concat(File.separatorChar + fileName));

            //파일 접근권한이 충분한지 모두 체크함
            if(deleteFile.isFile() && deleteFile.exists() && deleteFile.canWrite()) {
                deleteFile.delete();    //삭제
                iTotCnt++;
            }

        }
        return iTotCnt;

    }

    /* (non-Javadoc)
     * @see core.erp.com.service.ComAttachFileService#uploadFiles(java.util.List, java.lang.String, java.lang.String)
     */
    public int uploadFiles(List<Map<String, Object>> files, String menu, String savePath) throws Exception {
        
        int fileCount = 0;

        SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyyMM", Locale.KOREAN);
        String month = dateFormatter.format(new Date(System.currentTimeMillis()));
        
        Map<String, Object> eachFile = null;
        
        String program = menu;
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
        
        String baseUploadPath = CoreProperties.getProperty("CoreERP.file.upload.path");
        if (!baseUploadPath.endsWith("/")) {
            baseUploadPath = baseUploadPath.concat("/");
        }
        String tmpUploadPath = CoreProperties.getProperty("CoreERP.temp.upload.path");
        if (!tmpUploadPath.endsWith("/")) {
            tmpUploadPath = tmpUploadPath.concat("/");
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
            
            dstFilePath = srcFilePath;
            
            
            if (srcFilePath.indexOf("/tmp") > -1) {
                dstFilePath = srcFilePath.substring(0, srcFilePath.indexOf("/tmp"));
            }
            
            dstFilePath = dstFilePath.concat(File.separator).concat(prefixDir);
            
            if (!detailDir.isEmpty()) {
                if (dstFilePath.indexOf(File.separator.concat(detailDir)) == -1) {
                    dstFilePath = prefixDir.concat(File.separator).concat(detailDir);
                }
            } else {
                dstFilePath = prefixDir.concat(File.separator).concat(month);
            }
            
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(dstFilePath));
            targetPath = dstFilePath;
            
            // 전체 디렉토리
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(baseUploadPath.concat(dstFilePath)));
            if (!srcFilePath.contains(baseUploadPath)) {
                srcFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(baseUploadPath.concat(srcFilePath)));
            }
            
            dstDir = new File(dstFilePath);
            fileName = (String) eachFile.get("PFIL_NAME");
            srcFile = new File(srcFilePath, fileName);
            dstFile = new File(dstDir, fileName);
            
            LOGGER.info("--- Source file : " + srcFile.getAbsolutePath());
            LOGGER.info("--- Dest file : " + dstDir.getAbsolutePath());
            
            if (srcFile.exists()) {
                if (!dstDir.exists()) {
                    dstDir.mkdirs();
                    dstDir.setWritable(true, false);
                }
                FileCopyUtils.copy(srcFile, dstFile);
                srcFile.delete();
            }
            
            eachFile.put("FILE_PATH", targetPath);
            eachFile.put("SYST_CODE", prefixDir.toUpperCase());
            eachFile.put("MENU_IDXX", program);
            eachFile.put("EXTN_NAME", StringUtils.getFilenameExtension((String) eachFile.get("LFIL_NAME")));
            eachFile.put("FPTY_CODE", "UPLD");
            
            if (dao.selectTM_AFILED(eachFile) == null) {
                dao.insertTM_AFILED(eachFile);
            } else {
                dao.updateTM_AFILED(eachFile);
            }
            
            fileCount++;
            
        }
        
        return fileCount;
        
    }


    /* (non-Javadoc)
     * @see core.erp.com.service.ComAttachFileService#uploadFilesOutbound(java.util.List, java.lang.String, java.lang.String)
     */
    @Override
    public int uploadFilesOutbound(List<Map<String, Object>> files, String menu, String savePath) throws Exception {
        
        int fileCount = 0;

        SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyyMM", Locale.KOREAN);
        String month = dateFormatter.format(new Date(System.currentTimeMillis()));
        
        Map<String, Object> eachFile = null;
        
        String program = menu;
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
        
        String outUploadPath = CoreProperties.getProperty("CoreERP.outbound.upload.path");
        if (!outUploadPath.endsWith("/")) {
            outUploadPath = outUploadPath.concat("/");
        }
        
        /* 
        String tmpUploadPath = CoreProperties.getProperty("CoreERP.temp.upload.path");
        if (!tmpUploadPath.endsWith("/")) {
            tmpUploadPath = tmpUploadPath.concat("/");
        }
        */
        
        for (int index = 0; index < files.size(); index++) {
            
            eachFile = files.get(index);
            
            if ((eachFile == null) || (eachFile.isEmpty()) || (StrUtil.toNotNullString(eachFile.get("FILE_IDXX")).length() == 0)) {
                continue;
            }
            
            srcFilePath = (String) eachFile.get("FILE_PATH");
            
            if (srcFilePath.contains(baseUploadPath)) {
                srcFilePath = srcFilePath.substring(baseUploadPath.length());
            }
            
            dstFilePath = srcFilePath;
            
            if (srcFilePath.indexOf("/tmp") > -1) {
                dstFilePath = srcFilePath.substring(0, srcFilePath.indexOf("/tmp"));
            }
            
            dstFilePath = dstFilePath.concat(File.separator).concat(prefixDir);
            
            if (!detailDir.isEmpty()) {
                if (dstFilePath.indexOf(File.separator.concat(detailDir)) == -1) {
                    dstFilePath = prefixDir.concat(File.separator).concat(detailDir);
                }
            } else {
                dstFilePath = prefixDir.concat(File.separator).concat(month);
            }
            
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(dstFilePath));
            targetPath = dstFilePath;

            if (!srcFilePath.contains(baseUploadPath)) {
                srcFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(baseUploadPath.concat(srcFilePath)));
            }
            
            // 전체 디렉토리
            dstFilePath = StringUtils.cleanPath(FileManagerUtil.filePathBlackList(outUploadPath.concat(dstFilePath)));
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
            
            if (dao.selectTM_AFILED(eachFile) == null) {
                dao.insertTM_AFILED(eachFile);
            } else {
                dao.updateTM_AFILED(eachFile);
            }
            
            fileCount++;
            
        }
        
        return fileCount;
        
    }
	
}
