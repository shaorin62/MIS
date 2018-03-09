package core.ifw.utl;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URLEncoder;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.util.FileCopyUtils;

import core.erp.com.service.impl.ComAttachFileDao;
import core.erp.com.web.ComFiledownloadController;
import core.ifw.cmm.exception.ProcessException;

/**
 * FileManagerUtil - 파일 관리를 위한 클래스
 * <p>
 * <b>NOTE : </b> 이미지 파일 로드, 파일 다운로드 등의 처리를 위한 유틸리티 클래스 <br/>
 * </p>
 * 
 * @author Genie J. (jsh@inbus.co.kr)
 * @since 2013. 5. 30.
 * @version 1.0
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *  수정일             수정자                       수정내용
 *  ----------    -------------    ---------------------------
 *  2013. 5. 30.    Genie J.              최초 생성
 * 
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */
public class FileManagerUtil {
	
	/**
	 * 이미지를 처리하기 위한 버퍼 사이즈
	 */
	private static final int BUFFER_SIZE = 2048;
	
	private static final Logger logger = Logger.getLogger(FileManagerUtil.class);

	@Resource(name = "comAttachFileDao")
	private ComAttachFileDao fileDao;
	
	/**
	 * 파일 이미지를 response 응답 객체에 전송한다!
	 * 
	 * @param request
	 *            - http 요청 객체
	 * @param response
	 *            - http 응답 객체
	 * @param path
	 *            - 이미지 경로
	 * @param name
	 *            - 파일명
	 * @throws Exception
	 *             오류 발생시 해당 exception 객체
	 */
	public static void loadImageFile(HttpServletRequest request,
			HttpServletResponse response, String path, String name)
			throws Exception {
		
		//이미지를 읽어서 응답으로 전달하기 위한 스트림 객체
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		
		String filepath = path;
		
		try {

			//2014-03 : 전체경로가 넘어올 경우가 있으므로...
			filepath = filepath.replaceAll(CoreProperties.getProperty("CoreERP.file.upload.path"), "");
			
			//전체 파일 경로
			//String imageRealPath = CoreProperties.getProperty("CoreERP.file.upload.path") + filepath + File.separatorChar + name;
			String imageRealPath = CoreProperties.getProperty("CoreERP.file.upload.path") + filepath + "/" + name;

			//이미지의 확장자명 찾기
			int offsetIdx = name.lastIndexOf(".");
			
			if(offsetIdx == -1) {
				offsetIdx = name.length() - 1;
			}
			
			String extension = name.substring(offsetIdx + 1);
			
			if((extension == null) || (extension.length() == 0)) {
				extension = "jpg";
			}
			//이미지 전송을 위한 응답객체 헤더 타입
			String contentType = "image/" + extension;
			
			//실제 파일 엑세스
			
			String filePath = filePathBlackList(imageRealPath);
			
			if(!isValidPath(filePath)) {
				logger.warn("Error occurred : 부적절한 경로 접근. [" + filePath + "]");
				throw new FileNotFoundException("부적절한 경로로 접근하였습니다.");
			}
			
			File srcFile = new File(filePath);
			
			//파일이 존재하지 않으면
			if(!srcFile.exists()) {
				throw new FileNotFoundException(imageRealPath);
			}
			
			//파일을 읽을수 없다면..
			if(!srcFile.isFile() || !srcFile.canRead()) {
				throw new FileNotFoundException(imageRealPath);
			}
			
			//이미지를 읽어들일 바이트배열
			byte[] image = new byte[BUFFER_SIZE];
			
			//이미지를 읽어서 응답 객체에 쓰기위한 스트림 생성
			bis = new BufferedInputStream(new FileInputStream(srcFile));
			bos = new BufferedOutputStream(response.getOutputStream());
			
			int chunk = 0;
			
			while((chunk = bis.read(image)) != -1) {
				bos.write(image, 0, chunk);
			}
			
			response.setHeader("Content-type", contentType);
			bos.flush();
			
		} catch (Exception e) {
			
			throw e;
			
		} finally {
			
			try {
				if(bos != null) {
					bos.close();
				}
			} catch (Exception ignoreException) {
				logger.debug("Exception Ignored : " + ignoreException.getMessage());
			}
			
			try {
				if(bis != null) {
					bis.close();
				}
			} catch (Exception ignoreException) {
				logger.debug("Exception Ignored : " + ignoreException.getMessage());
			}
			
		}
		
		
	}
	
	/**
	 * 파일 이미지를 response 응답 객체에 전송한다!
	 * 
	 * @param request
	 *            - http 요청 객체
	 * @param response
	 *            - http 응답 객체
	 * @param path
	 *            - 이미지 경로
	 * @param name
	 *            - 파일명
	 * @throws Exception
	 *             오류 발생시 해당 exception 객체
	 */
	public static void loadHomepageImageFile(HttpServletRequest request,
			HttpServletResponse response, String name)
			throws Exception {
		
		//이미지를 읽어서 응답으로 전달하기 위한 스트림 객체
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		
		try {

			//전체 파일 경로
			//String imageRealPath = InbusCoreConfig.get("Inbus.HomepageURL") + File.separatorChar + name;
			String imageRealPath = CoreProperties.getProperty("CoreERP.HomepageURL") + File.separatorChar + name;
			
			
			int offsetIdx = name.lastIndexOf(".");
			
			if(offsetIdx == -1) {
				offsetIdx = name.length() - 1;
			}
			
			String extension = name.substring(offsetIdx + 1);
			
			if((extension == null) || (extension.length() == 0)) {
				extension = "jpg";
			}
			//이미지 전송을 위한 응답객체 헤더 타입
			String contentType = "image/" + extension;
			
			//실제 파일 엑세스
			
			String filePath = filePathBlackList(imageRealPath);
			
			if(!isValidPath(filePath)) {
				logger.warn("Error occurred : 부적절한 경로 접근. [" + filePath + "]");
				throw new FileNotFoundException("부적절한 경로로 접근하였습니다.");
			}
			
			File srcFile = new File(filePath);
			
			//파일이 존재하지 않으면
			if(!srcFile.exists()) {
				throw new FileNotFoundException(imageRealPath);
			}
			
			//파일을 읽을수 없다면..
			if(!srcFile.isFile() || !srcFile.canRead()) {
				throw new FileNotFoundException(imageRealPath);
			}
			
			//이미지를 읽어들일 바이트배열
			byte[] image = new byte[BUFFER_SIZE];
			
			//이미지를 읽어서 응답 객체에 쓰기위한 스트림 생성
			bis = new BufferedInputStream(new FileInputStream(srcFile));
			bos = new BufferedOutputStream(response.getOutputStream());
			
			int chunk = 0;
			
			while((chunk = bis.read(image)) != -1) {
				bos.write(image, 0, chunk);
			}
			
			response.setHeader("Content-type", contentType);
			bos.flush();
			
		} catch (Exception e) {
			
			throw e;
			
		} finally {
			
			try {
				if(bos != null) {
					bos.close();
				}
			} catch (Exception ignoreException) {
				logger.debug("Exception Ignored : " + ignoreException.getMessage());
			}
			
			try {
				if(bis != null) {
					bis.close();
				}
			} catch (Exception ignoreException) {
				logger.debug("Exception Ignored : " + ignoreException.getMessage());
			}
			
		}
		
		
	}
	
	
	/**
	 * 주어진 경로의 파일을 다운로드한다!
	 * 
	 * @param request
	 *            - 요청 객체
	 * @param response
	 *            - 응답 객체
	 * @param path
	 *            - 파일이 저장된 물리 경로
	 * @param name
	 *            - 다운로드할 파일명
	 * @param realname
	 *            - 다운로드시 사용자에게 표시할 파일명
	 * @throws Exception
	 */
	public static void downloadFile(HttpServletRequest request,
			HttpServletResponse response, String path, String name, String realname)
			throws Exception {
		
		String filepath = path;
		String viewname = realname;
		
		String defaultPath = CoreProperties.getProperty("CoreERP.file.upload.path");
		if (!defaultPath.startsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
		    defaultPath = defaultPath.concat(ComFiledownloadController.DEFAULT_SEPARATOR);
		}
		
		if (filepath.endsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
		    filepath = filepath.substring(0, filepath.length() - 1);
		}
		
		// 파라미터의 파일 경로와 기본 파일 저장경로를 이용하여 파일의 전체 저장경로 처리 
		if(filepath.indexOf(defaultPath) > -1) {
			filepath = defaultPath + filepath.replace(defaultPath, "");
		} else {
			filepath = defaultPath + filepath;
		}
		
		
		//전체 파일 경로
		String downloadFilePath = filepath + File.separatorChar +  name;
		
		if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
			logger.debug("File Path : " + downloadFilePath);
		}
		
		String message = "";

		//실제 파일 엑세스
		String srcFilePath = FileManagerUtil.filePathBlackList(downloadFilePath);
		
		if(!isValidPath(srcFilePath)) {
			message = "해당 파일의 경로가 부적절하여 다운로드 할 수 없습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		File srcFile = new File(srcFilePath);
		
		//파일이 존재하지 않으면
		if(!srcFile.exists()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		//파일을 읽을수 없다면..
		if(!srcFile.isFile() || !srcFile.canRead()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		//파일 전송을 위한 응답객체 헤더 타입
		String contentType = "application/octet-stream;charset=UTF-8";
		
		response.setContentType(contentType);
		response.setContentLength((int) srcFile.length());
		response.setHeader("Content-Transfer-Encoding", "binary");
		
		String browserName = getBrowser(request);
		
		//다운로드 받을 실제 파일명이 비었으면 물리 파일명과 동일하게 설정
		if((viewname == null) || (viewname.length() == 0)) {
			viewname = name;
		}
		
		String disposition = getDisposition(viewname, browserName);
		
		response.setHeader("Content-Disposition", disposition);
		
		OutputStream out = response.getOutputStream();
		FileInputStream fis = null;
		
		try {
			
			fis = new FileInputStream(srcFile);
			FileCopyUtils.copy(fis, out);
			
		} catch (Exception e) {
			
			if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info("Error Message : " + e.getMessage());
			}
			
			throw e;
			
		} finally {
			
			if(fis != null) {
				fis.close();
			}
		}
		
	}
	/**
	 * 주어진 경로의 파일을 다운로드한다!
	 * 
	 * @param request
	 *            - 요청 객체
	 * @param response
	 *            - 응답 객체
	 * @param path
	 *            - 파일이 저장된 물리 경로
	 * @param name
	 *            - 다운로드할 파일명
	 * @param realname
	 *            - 다운로드시 사용자에게 표시할 파일명
	 * @throws Exception
	 */
	public static void downloadContextFile(HttpServletRequest request,
	        HttpServletResponse response, String path, String name, String realname)
	                throws Exception {
	    
	    String filepath = path;
	    String viewname = realname;
	    
	    String defaultPath = CoreProperties.getProperty("CoreERP.outbound.upload.path");
	    if (!defaultPath.endsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
	        defaultPath = defaultPath.concat(ComFiledownloadController.DEFAULT_SEPARATOR);
	    }
	    
	    if (filepath.endsWith(ComFiledownloadController.DEFAULT_SEPARATOR)) {
	        filepath = filepath.substring(0, filepath.length() - 1);
	    }
	    
	    // 파라미터의 파일 경로와 기본 파일 저장경로를 이용하여 파일의 전체 저장경로 처리 
	    if(filepath.indexOf(defaultPath) > -1) {
	        filepath = defaultPath + filepath.replace(defaultPath, "");
	    } else {
	        filepath = defaultPath + filepath;
	    }
	    
	    //전체 파일 경로
	    String downloadFilePath = filepath + File.separatorChar +  name;
	    
	    if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
	        logger.debug("File Path : " + downloadFilePath);
	    }
	    
	    String message = "";
	    
	    //실제 파일 엑세스
	    String srcFilePath = FileManagerUtil.filePathBlackList(downloadFilePath);
	    
	    if(!isValidPath(srcFilePath)) {
	        message = "해당 파일의 경로가 부적절하여 다운로드 할 수 없습니다.";
	        getAlertMessage(response, message);
	        return;
	    }
	    
	    File srcFile = new File(srcFilePath);
	    
	    //파일이 존재하지 않으면
	    if(!srcFile.exists()) {
	        //throw new FileNotFoundException(imageRealPath);
	        message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
	        getAlertMessage(response, message);
	        return;
	    }
	    
	    //파일을 읽을수 없다면..
	    if(!srcFile.isFile() || !srcFile.canRead()) {
	        //throw new FileNotFoundException(imageRealPath);
	        message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
	        getAlertMessage(response, message);
	        return;
	    }
	    
	    //파일 전송을 위한 응답객체 헤더 타입
	    String contentType = "application/octet-stream;charset=UTF-8";
	    
	    response.setContentType(contentType);
	    response.setContentLength((int) srcFile.length());
	    response.setHeader("Content-Transfer-Encoding", "binary");
	    
	    String browserName = getBrowser(request);
	    
	    //다운로드 받을 실제 파일명이 비었으면 물리 파일명과 동일하게 설정
	    if((viewname == null) || (viewname.length() == 0)) {
	        viewname = name;
	    }
	    
	    String disposition = getDisposition(viewname, browserName);
	    
	    response.setHeader("Content-Disposition", disposition);
	    
	    OutputStream out = response.getOutputStream();
	    FileInputStream fis = null;
	    
	    try {
	        
	        fis = new FileInputStream(srcFile);
	        FileCopyUtils.copy(fis, out);
	        
	    } catch (Exception e) {
	        
	        if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
	            logger.info("Error Message : " + e.getMessage());
	        }
	        
	        throw e;
	        
	    } finally {
	        
	        if(fis != null) {
	            fis.close();
	        }
	    }
	    
	}
	
	/**
	 * 주어진 경로의 파일을 다운로드한다!
	 * 
	 * @param request
	 *            - 요청 객체
	 * @param response
	 *            - 응답 객체
	 * @param path
	 *            - 파일이 저장된 물리 경로
	 * @param name
	 *            - 다운로드할 파일명
	 * @param realname
	 *            - 다운로드시 사용자에게 표시할 파일명
	 * @throws Exception
	 */
	public static void downloadUserManual(HttpServletRequest request,
			HttpServletResponse response, String path, String name, String realname)
					throws Exception {
		
		// 기본 파일 저장경로
		String filepath = path;
		String viewname = realname;
		
		//전체 파일 경로
		String downloadFilePath = filepath + File.separatorChar + name;
		
		if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
			logger.debug("File Path : " + downloadFilePath);
		}
		
		String message = "";
		
		//실제 파일 엑세스
		String srcFilePath = FileManagerUtil.filePathBlackList(downloadFilePath);
		
		if(!isValidPath(srcFilePath)) {
			message = "메뉴명 [" + realname.substring(0, realname.lastIndexOf(".")) + "]의 메뉴얼 저장경로가 부적절하여 다운로드 할 수 없습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		File srcFile = new File(srcFilePath);
		
		//파일이 존재하지 않으면
		if(!srcFile.exists()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "메뉴명 [" + realname.substring(0, realname.lastIndexOf(".")) + "], 메뉴얼이 존재하지 않습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		//파일을 읽을수 없다면..
		if(!srcFile.isFile() || !srcFile.canRead()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "메뉴명 [" + realname.substring(0, realname.lastIndexOf(".")) + "], 메뉴얼을 다운로드 할 수 없습니다.";
			getAlertMessage(response, message);
			return;
		}
		
		//파일 전송을 위한 응답객체 헤더 타입
		String contentType = "application/octet-stream;charset=UTF-8";
		
		response.setContentType(contentType);
		response.setContentLength((int) srcFile.length());
		response.setHeader("Content-Transfer-Encoding", "binary");
		
		String browserName = getBrowser(request);
		
		//다운로드 받을 실제 파일명이 비었으면 물리 파일명과 동일하게 설정
		if((viewname == null) || (viewname.length() == 0)) {
			viewname = name;
		}
		
		String disposition = getDisposition(viewname, browserName);
		
		response.setHeader("Content-Disposition", disposition);
		
		OutputStream out = response.getOutputStream();
		FileInputStream fis = null;
		
		try {
			
			fis = new FileInputStream(srcFile);
			FileCopyUtils.copy(fis, out);
			
		} catch (Exception e) {
			
			if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info("Error Message : " + e.getMessage());
			}
			
			throw e;
			
		} finally {
			
			if(fis != null) {
				fis.close();
			}
		}
		
	}
	
	
	/**
	 * 파일의 경로에서 상대 경로 표시된 부분을 삭제한다.
	 *
	 * @param value - 치환하고자 하는 파일 경로 문자열
	 * @return 파일 경로에서 상대경로(../../ 또는 ..\..)를 제거한다.
	 */
	public static String filePathBlackList(String value) {
		
		String returnValue = value;
		
		if ((returnValue == null) || returnValue.trim().equals("")) {
			return "";
		}

		returnValue = returnValue.replaceAll("\\.\\./", "");	// ../	제거
		returnValue = returnValue.replaceAll("\\.\\.\\\\", "");	// ..\	제거

		return returnValue;
	}
	
	
	/**
	 * 브라우저명을 체크한다!
	 * 
	 * @param request
	 *            - 사용자 요청객체
	 * @return 사용자의 브라우저 명
	 * @throws Exception
	 */
	public static String getBrowser(HttpServletRequest request) throws Exception {
		
		String browserName = "";
		
		try {
			
			// 요청 헤더를 이용하여 사용자 브라우저 타입 체크!
			String agent = request.getHeader("User-Agent");
			
			if(agent.indexOf("MSIE") > -1) {
				browserName = "MSIE";
			} else if(agent.indexOf("Chrome") > -1) {
				browserName = "Chrome";
			} else if(agent.indexOf("Opera") > -1) {
				browserName = "Opera";
			} else {
				browserName = "Safari";
			}
			
		} catch (Exception e) {
			
			if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info(e.getMessage());
			}
			
			throw e;
			
		}
		
		return browserName;
		
	}
	
	
	/**
	 * 다운로드 시 각 브라우저 타입별 content-disposition 헤더 문자열을 생성한다 
	 *
	 * @param fileName - 다운로드 할 파일명
	 * @param browser - 브라우저 타입
	 * @return 브라우저에 맞춰서 인코딩된 파일명을 포함하는 content-disposition 타입
	 * @throws Exception
	 */
	public static String getDisposition(String fileName, String browser) throws Exception {
		
		String prefix = "attachment;filename=";
		
		String disposition = "";
		
		try {
			
			//if(browser.equals("MSIE")) {
			//	disposition = URLEncoder.encode(fileName, "UTF-8").replaceAll("\\\\", "%20");
			//} else 
			if(browser.equals("Firefox")) {
				disposition = "\"" + new String(fileName.getBytes("UTF-8"), "8859_1") + "\"";
			} else if(browser.equals("Opera")) {
				disposition = "\"" + new String(fileName.getBytes("UTF-8"), "8859_1") + "\"";
			} else if(browser.equals("Chrome") || browser.equals("MSIE") || browser.equals("Safari")) {
				
				StringBuffer sbFileName = new StringBuffer();
				
				//크롬은 인코딩이 필요한 문자열만 인코딩하여 전달한다.
				for(int idx = 0; idx < fileName.length(); idx++) {
					char ch = fileName.charAt(idx);
					
					if(ch > '~') {
						sbFileName.append(URLEncoder.encode("" + ch, "UTF-8"));
					} else {
						sbFileName.append(ch);
					}
				}
				
				disposition = "\"" + sbFileName.toString() + "\"";
				
			} else {
				throw new Exception("Not Supported browser type. Browser : " + browser);
			}
			
		} catch (Exception e) {
			
			if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info(e.getMessage());
			}
			
			throw e;
			
		}
		
		return prefix + disposition;
		
	}

	/**
	 * <pre>
	 * 파일 경로에 부적절한 문자열이 존재하는지 체크한다.
	 * </pre>
	 * @param argPath - 체크할 경로
	 * @return 경로에 부적절한 문자가 없으면 true, 그렇지 않으면 false 반환
	 */
	public static boolean isValidPath (String argPath) {
	    if(argPath.indexOf("../") != -1 || argPath.indexOf("..\\") != -1 || argPath.indexOf("*") != -1)
	        return false;
	    return true;
	}

	
	/**
	 * <pre>
	 * 브라우저 Alert 메시지를 출력한다.
	 * </pre>
	 * @param response
	 * @param message - alert으로 출력할 메시지 내용
	 * @throws Exception
	 */
	public static void getAlertMessage(HttpServletResponse response, String message) throws Exception {
		
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter outWriter = response.getWriter();
	    outWriter.println("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
	    outWriter.println("<head>");
	    outWriter.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />");
	    outWriter.println("<script type='text/javascript'>");
	    outWriter.println("alert('"+ message + "');");
	    //outWriter.println("window.close();");
	    outWriter.println("</script>");
	    outWriter.println("</head>");
	    outWriter.println("</html>");
	    outWriter.flush();
	    outWriter.close();
		return;
	}
	
	
	
	/**
	 * <pre>
	 * 파일을 복사합니다.
	 * 복사대상 파일과 복사할 파일은 항상 프레임워크 설정의 기본파일 경로 하위에만 존재하여야 합니다.
	 * 만약 복사할 디렉토리에 기존 파일이 존재하면 기존파일을 덮어쓰게 됩니다. 
	 * </pre>
	 *
	 * @param sourceFile 원본파일 경로. 파일명을 포함하며 기본파일 경로 하위에 위치하여야 합니다.
	 * @param targetFile 복사할 위치의 경로. 복사 후 생성할 파일명을 포함하여야 하며 기본경로 하위이어야 합니다.
	 * @throws Exception
	 */
	public static void copyUploadFile(String sourceFile, String targetFile) throws Exception {
		copyUploadFile(sourceFile, targetFile, true);
	}
	
	/**
	 * <pre>
	 * 파일을 복사합니다.
	 * 복사대상 파일과 복사할 파일은 항상 프레임워크 설정의 기본파일 경로 하위에만 존재하여야 합니다.
	 * </pre>
	 *
	 * @param sourceFile 원본파일 경로. 파일명을 포함하며 기본파일 경로 하위에 위치하여야 합니다.
	 * @param targetFile 복사할 위치의 경로. 복사 후 생성할 파일명을 포함하여야 하며 기본경로 하위이어야 합니다.
	 * @param isOverwrite 기존에 파일이 존재한다면 true일 경우 기존파일을 덮어쓰고, false이면 기존의 파일을 덮어쓰지 않습니다.
	 * @throws Exception
	 */
	public static void copyUploadFile(String sourceFile, String targetFile, boolean isOverwrite) throws Exception {
		
		String baseDirStr = CoreProperties.getProperty("CoreERP.file.upload.path");
		
		File srcFile = new File(baseDirStr.concat(sourceFile));
		File destFile = new File(baseDirStr.concat(targetFile));
		
		File parent = destFile.getParentFile();
		
		// check file
		if (!srcFile.exists() || !srcFile.isFile()) {
			throw new ProcessException("원본파일이 존재하지 않거나 파일이 아닙니다");
		}
		
		if (destFile.exists()) {
			if(destFile.isFile()) {
                if( !isOverwrite ) {
                    throw new ProcessException("같은 이름의 파일이 존재합니다.");
                }
            } else {
                throw new ProcessException("같은 이름의 디렉토리가 존재합니다.");
            }
		}
		
		if (!parent.exists()) {
			parent.mkdirs();
		}
		
		logger.info("------ File Copy. FROM : " + srcFile.getAbsolutePath() + ", TO : " + destFile.getAbsolutePath());
		
		// 파일 복사
		FileCopyUtils.copy(srcFile, destFile);
		
		
	}
	
	
	
	/**
	 * <pre>
	 * 파일을 삭제합니다.
	 * </pre>
	 *
	 * @param deleteFile 삭제할 파일명을 포함하고 있는 파일의 경로명입니다.
	 * @throws Exception 예외 발생 시
	 */
	public static void deleteUploadFile(String deleteFile) throws Exception {
		
		String baseDirStr = CoreProperties.getProperty("CoreERP.file.upload.path");
		
		File delFile = new File(baseDirStr.concat(deleteFile));
		
		// 디렉토리 삭제 금지
		if (delFile.isDirectory()) {
			throw new ProcessException("디렉토리는 삭제할 수 없습니다!");
		}
		
		if (delFile.exists()) {
			logger.info("------ File will be DELETE!!! File : " + delFile.getAbsolutePath());
			delFile.delete();
		}
		
	}
	
	
	
}
