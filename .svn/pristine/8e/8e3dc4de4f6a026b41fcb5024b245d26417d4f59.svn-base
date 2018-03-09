package core.erp.com.web;

import java.io.File;
import java.io.FileInputStream;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.service.ComAttachFileService;
import core.ifw.cmm.exception.ProcessException;
import core.ifw.cmm.request.CALL_TYPE;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.DataSetUtil;
import core.ifw.utl.FileManagerUtil;

/**
 * <pre>
 *	FileManagerController - 파일 업로드/다운로드를 관리하기 위한 컨트롤러
 * </pre>
 * 
 * @author	Genie. J. <jsh@inbus.co.kr>
 * @since	2014. 11. 14
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 11. 14.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 * comFile_UploadSingle 은 사용 안함.. 테스트용도로만 사용
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComFiledownloadController {

	private static Logger logger = LoggerFactory.getLogger(ComFiledownloadController.class);	
	
	public static final String DEFAULT_SEPARATOR = "/";
	
	
	@Resource(name = "comAttachFileService")
	private ComAttachFileService service;
	
	
	/**
	 * <pre>
	 * 단일 첨부파일을 업로드 한다.
	 * <b>NOTE : </b>다운로드 받을 첨부파일의 저장 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param reponse HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@Deprecated
	@RequestMapping("/core/erp/com/comFile_UploadSingle.do")
	public ModelAndView fileUploadSingle(HttpServletRequest request, ModelMap model) throws Exception {

		// 전달할 데이터 객체를 직접 생성하여 클라이언트로 전달한다.
		CoreResultData coreResultData = new CoreResultData(CALL_TYPE.NEXACRO);
		ModelAndView mav = new ModelAndView("coreReturnView");

		try {
					
			//업로드 기본폴더
			String baseDir = CoreProperties.getProperty("CoreERP.file.upload.path");
			String filePath = request.getParameter("sPath");          //모듈별폴더
			String fileName = request.getParameter("sPhyFile");       //파일명
			String uploadPath = baseDir + File.separator + filePath;  //업로드 풀경로
			
			logger.debug(" -------------------- Upload path : " + uploadPath+"/"+fileName);
			
			uploadPath = ComImageViewerController.filePathBlackList(uploadPath); //파일경로에서 상대경로 제거
			
			File uploadDir = new File(uploadPath); //
			if (!uploadDir.exists()) {
				uploadDir.mkdirs();
			}
			
			// 일반 Http Request 객체를 스프링 Multipart 지원 Http Request 객체로 변환
			MultipartHttpServletRequest mRequest = (MultipartHttpServletRequest) request;
			Iterator<String> fileNames = mRequest.getFileNames();	// 업로드 된 파일명
			
			String tagName = fileNames.next();
			MultipartFile uploadFile = mRequest.getFile(tagName);
							
			// 업로드 할 파일을 생성한다.
			File newFile = new File(uploadDir, fileName);
			
			// 파일을 업로드 폴더로 이동한다.
			uploadFile.transferTo(newFile);
			
			// file moved successfully..
			logger.debug(" ------------------- Sigle File transfer success...");			
			
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.warn(" -------------------- Error occurred while uploading files..");
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}
	
	/**
	 * <pre>
	 * 단일 첨부파일을 삭제 한다.
	 * <b>NOTE : </b>다운로드 받을 첨부파일의 저장 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param reponse HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@Deprecated
	@RequestMapping("/core/erp/com/comFile_UploadDelete.do")
	public ModelAndView fileUploadDelete(HttpServletRequest request, ModelMap model) throws Exception {

		// 전달할 데이터 객체를 직접 생성하여 클라이언트로 전달한다.
		CoreResultData coreResultData = new CoreResultData(CALL_TYPE.NEXACRO);
		ModelAndView mav = new ModelAndView("coreReturnView");

		try {
					
			//업로드 기본폴더
			String baseDir = CoreProperties.getProperty("CoreERP.file.upload.path");
			String filePath = request.getParameter("sPath");          //모듈별폴더
			String fileName = request.getParameter("sPhyFile");       //파일명
			String uploadPath = baseDir + File.separator + filePath;  //업로드 풀경로
			
			logger.debug(" -------------------- Upload path : " + uploadPath+"/"+fileName);
			
			uploadPath = ComImageViewerController.filePathBlackList(uploadPath); //파일경로에서 상대경로 제거
			
			File uploadDir = new File(uploadPath); 
							
			// 업로드 할 파일을 생성한다.
			File newFile = new File(uploadDir, fileName);
						
			// 업로드 파일을 삭제한다.
			newFile.delete();
			
			// file moved successfully..
			logger.debug(" ------------------- Sigle File transfer success...");			
			
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.warn(" -------------------- Error occurred while deleting files..");
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}

	
	/**
	 * <pre>
	 * 다중 첨부파일을 업로드 한다. - ** 넥사크로 솔루션용
	 * <b>NOTE : </b>다운로드 받을 첨부파일의 저장 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param reponse HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@RequestMapping("/core/erp/com/comFile_UploadMulti.do")
	public ModelAndView fileUploadMulti(HttpServletRequest request, ModelMap model) throws Exception {
		
		// 전달할 데이터 객체를 직접 생성하여 클라이언트로 전달한다.
		CoreResultData coreResultData = new CoreResultData(CALL_TYPE.NEXACRO);
		ModelAndView mav = new ModelAndView("coreReturnView");
		
		try {
			
		    // 업로드 처리결과 데이터셋 생성
		    Object dsUploadFile = DataSetUtil.getDataSet("dsUploadFile");
		    DataSetUtil.addColumn(dsUploadFile, "FILE_IDXX");	// 파일명
		    DataSetUtil.addColumn(dsUploadFile, "FILE_PATH");	// 저장경로(업로드디렉토리부터의 상대경로)
		    DataSetUtil.addColumn(dsUploadFile, "PFIL_NAME");	// 물리파일명(실제 서버 디스크에 저장된 파일명)
		    DataSetUtil.addColumn(dsUploadFile, "LFIL_NAME");	// 파일명
			DataSetUtil.addColumn(dsUploadFile, "FILE_SIZE");	// 파일 크기
			DataSetUtil.addColumn(dsUploadFile, "EXTN_NAME");	// 파일확장자
			
			// 파일 업로드 업무영역
			String bizCat = StringUtils.isEmpty(request.getParameter("biz")) ? "etc" : request.getParameter("biz").toLowerCase();
			
			// 임시 업로드 디렉토리
			String baseTempDir = CoreProperties.getProperty("CoreERP.temp.upload.path");
			
			String yearMonth = new SimpleDateFormat("yyyyMM").format(new Date(System.currentTimeMillis()));
			
			String uploadPath = baseTempDir.endsWith(DEFAULT_SEPARATOR) ? baseTempDir.concat(bizCat) : baseTempDir.concat(DEFAULT_SEPARATOR).concat(bizCat);
			uploadPath = uploadPath.concat(DEFAULT_SEPARATOR).concat(yearMonth);
			
			logger.debug(" -------------------- Upload path : " + uploadPath);
			
			uploadPath = ComImageViewerController.filePathBlackList(uploadPath);
			uploadPath = StringUtils.cleanPath(uploadPath);
			
			String baseUploadPath = CoreProperties.getProperty("CoreERP.file.upload.path");
			String uploadPathSub = uploadPath;
			uploadPathSub = uploadPath.replace(baseUploadPath, "");
			
			logger.debug(" -------------------- Upload path(sub) : " + uploadPathSub);
			
			File uploadDir = new File(uploadPath);
			if (!uploadDir.exists()) {
				uploadDir.mkdirs();
			}
			
			// 일반 Http Request 객체를 스프링 Multipart 지원 Http Request 객체로 변환
			MultipartHttpServletRequest mRequest = (MultipartHttpServletRequest) request;
			Iterator<String> fileNames = mRequest.getFileNames();	// 업로드 된 파일명
			
			String tagName = "";
			MultipartFile mFile = null;
			File newFile = null;
			String fileName = "";	// 신규생성 파일은 timestamp + 6자리 난수
			int dsRow = 0;
			Random rnd = new Random(System.currentTimeMillis());
			
			/* 파일ID는 현재 타임스탬프 + 8자리 랜덤 숫자 */
			String mstFileId = System.currentTimeMillis() + RandomStringUtils.randomNumeric(8);
			
			//파일 확장자 체크
			String fileExtrn = "";
			
			String checkFileExtension = CoreProperties.getProperty("CoreERP.file.denyUploadFiles");
			
			String[] checkFileExtArr = org.springframework.util.StringUtils.commaDelimitedListToStringArray(checkFileExtension);
			
			while(fileNames.hasNext()) {
				
				tagName = fileNames.next();
								
				logger.debug(" -------------------- Upload file : " + tagName);
			
				mFile = mRequest.getFile(tagName);
				
				// 파일 확장자를 체크한다!
				fileExtrn = mFile.getOriginalFilename().substring(mFile.getOriginalFilename().lastIndexOf(".") + 1);
				
				logger.debug(" -------------------- Upload file extension : " + fileExtrn);
				
				//파일확장자 체크 로직
				for(int chkCnt = 0; chkCnt < checkFileExtArr.length; chkCnt++) {
                    
                    if(fileExtrn.equalsIgnoreCase(checkFileExtArr[chkCnt])) {
                        logger.warn("파일확장자 [" + fileExtrn + "] 은/는 업로드 할 수 없습니다.");
                        throw new ProcessException("파일확장자 [" + fileExtrn + "] 은/는 업로드 할 수 없습니다.");
                    }
                    
                }
				
				
				// 임시폴더에 파일 생성. 파일 명명 규칙은 현재 타임스탬프 + 8자리 랜덤 숫자
				fileName = mstFileId + RandomStringUtils.randomNumeric(8);
				
				// TODO 파일 용량을 체크할 경우 context-common.xml에서 사이즈 관련 속성 삭제 후 여기에서 체크하셔도 상관없습니다.
				logger.debug(" -------------------- File : " + mFile.getOriginalFilename() + ","
						+ " size : " + mFile.getSize() + ", content-type : " + mFile.getContentType());
				
				// 업로드 할 파일을 생성한다.
				newFile = new File(uploadDir, fileName);
				
				// 파일을 업로드 폴더로 이동한다.
				mFile.transferTo(newFile);
				
				// file moved successfully..
				logger.debug(" -------------------- Multi File transfer success...");
				
				dsRow = DataSetUtil.insertRow(dsUploadFile);
				DataSetUtil.setColumn(dsUploadFile, dsRow, "FILE_IDXX", mstFileId);
				DataSetUtil.setColumn(dsUploadFile, dsRow, "FILE_PATH", uploadPathSub);
				DataSetUtil.setColumn(dsUploadFile, dsRow, "PFIL_NAME", fileName);
				DataSetUtil.setColumn(dsUploadFile, dsRow, "LFIL_NAME", mFile.getOriginalFilename());
				DataSetUtil.setColumn(dsUploadFile, dsRow, "FILE_SIZE", mFile.getSize());
				DataSetUtil.setColumn(dsUploadFile, dsRow, "EXTN_NAME", fileExtrn);
				
			}
			
			Map<String, Object> returnMap = new HashMap<String, Object>();
			returnMap.put("dsFL_ATTACH", dsUploadFile);
			
			coreResultData.setReturnDataMap((Map<String, Object>)returnMap);
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.warn(" -------------------- Error occurred while uploading files..");
			logger.error("processSEARCH00 : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}
	
	
	/**
	 * 첨부파일을 다운로드 한다! - ** 실제 넥사크로 솔루션에서 사용하는 파일 다운로드 기능입니다.
	 *
	 * @param request - 요청 객체
	 * @param response - 응답 객체
	 * @param path - 파일 저장 경로
	 * @param name - 논리 파일명
	 * @param realname - 물리파일명
	 * @throws Exception
	 */
	@RequestMapping("/core/erp/com/comFile_filedown.do")
	public void getFiledownload(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "path") String path,
			@RequestParam(value = "name") String name,
			@RequestParam(value = "realname") String realname) throws Exception {

		try {
			
			// 파일다운로드 공통함수에서 인코딩한 문자열을 디코딩 한다!
			String filepath = URLDecoder.decode(path, "UTF-8");	//저장경로
			String filename = URLDecoder.decode(name, "UTF-8");	//논리파일명
			String viewname = URLDecoder.decode(realname, "UTF-8");	//물리파일명
			
			FileManagerUtil.downloadFile(request, response, filepath, filename, viewname);

		} catch (Exception e) {

			if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info(e.getMessage());
			}

			throw e;

		}

	}	
	
	/**
	 * <pre>
	 * 첨부파일을 다운로드 한다.
	 * <b>NOTE : </b>다운로드 받을 첨부파일의 저장 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param reponse HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@Deprecated
	@RequestMapping("/core/erp/com/comFile_Download.do")
	public void fileDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		try {
			
			//단말에서 올라온 DownLoad file Info
			String filePath = request.getParameter("FILE_PATH");   //첨부파일 경로
			String fileName = request.getParameter("LFIL_NAME");   //첨부파일명(논리명)
			String physName = request.getParameter("PFIL_NAME");   //첨부파일명(물리명)
			
			
			
			//업로드 기본 폴더
			String baseDir = CoreProperties.getProperty("CoreERP.file.upload.path");
			String fullPath = baseDir + filePath + physName;
			fullPath = ComImageViewerController.filePathBlackList(fullPath);
			
			logger.debug("File Name : " + fileName);
			logger.debug("File Physical Name : " + physName);
			logger.debug("File Path : " + filePath);
			logger.debug("File download Full Information : " + fullPath);
						
			if (ComImageViewerController.isValidPath(fullPath)) {

				File file = new File(fullPath);
				
				//파일이 존재하면
				if (file.exists()) {

					FileInputStream fis = null;
					response.setContentType("application/octet-stream;charset=UTF-8");
					response.setContentLength((int) file.length());
					response.setHeader("Content-Transfer-Encoding", "binary");
					
					String browser = FileManagerUtil.getBrowser(request);				
					String disposition = FileManagerUtil.getDisposition(fileName, browser);
					response.setHeader("Content-Disposition", disposition);
					
					try {
						
						fis = new FileInputStream(file);
						FileCopyUtils.copy(fis, response.getOutputStream());
						response.getOutputStream().flush();
						
					} catch (Exception e) {
						
						logger.warn("** Error occured while rendering image file...");
						
					} finally {
						
						try {
							if (fis != null) {
								fis.close();
							}
						} catch (Exception e2) {
							logger.warn("** Error occured while rendering image file...");
						}
					}
					
				}
				
			}

		} catch (Exception e) {
			logger.warn("**  Exception occurred while downloading file. " + e.getLocalizedMessage());
		}
	
	}
	
	/**
	 * 파일 목록을 조회한다.
	 * @param argDoc - 조회할 정보가 담긴 Document 객체
	 * @return "/TMMA0010/SEARCH00"
	 * @exception Exception
	 */
	@RequestMapping(value = "/core/erp/com/comFile_GetFile.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView getFile(CoreRequest coreRequest, ModelMap model) throws Exception {
		
		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.getFile(searchVo));
			coreResultData.setResultMessageSuccessSelect();

		} catch(Exception e) {
			logger.error("getFile : " + e.getMessage());
			coreResultData.setResultMessageFailSelect(e);
		}

		mav.addObject("FORM_DATA", coreResultData);
		return mav;
		
	}	
	
	
    /**
     * 첨부파일을 다운로드 한다! - ** 실제 넥사크로 솔루션에서 사용하는 파일 다운로드 기능입니다.
     * 해당 첨부파일 다운로드는 파일의 경로유형이 CTXT
     *
     * @param request - 요청 객체
     * @param response - 응답 객체
     * @param path - 파일 저장 경로
     * @param name - 논리 파일명
     * @param realname - 물리파일명
     * @throws Exception
     */
    @RequestMapping("/core/erp/com/comFile_contextfiledown.do")
    public void getContextFileDownload(HttpServletRequest request,
            HttpServletResponse response,
            @RequestParam(value = "path") String path,
            @RequestParam(value = "name") String name,
            @RequestParam(value = "realname") String realname) throws Exception {

        try {
            
            // 파일다운로드 공통함수에서 인코딩한 문자열을 디코딩 한다!
            String filepath = URLDecoder.decode(path, "UTF-8"); //저장경로
            String filename = URLDecoder.decode(name, "UTF-8"); //논리파일명
            String viewname = URLDecoder.decode(realname, "UTF-8"); //물리파일명
            
            FileManagerUtil.downloadContextFile(request, response, filepath, filename, viewname);

        } catch (Exception e) {

            if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
                logger.info(e.getMessage());
            }

            throw e;

        }

    }   
	
}
