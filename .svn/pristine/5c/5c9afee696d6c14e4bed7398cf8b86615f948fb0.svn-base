/**
 * core.erp.com.web.ComImageViewerController.java
 */
package core.erp.com.web;

import java.io.File;
import java.io.FileInputStream;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import core.ifw.utl.CoreProperties;

/**
 * <pre>
 *	ComImageViewerController - 서버 이미지를 읽어서 표시하기 위한 컨트롤러
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
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComImageViewerController {

	private static final Logger logger = LoggerFactory.getLogger(ComImageViewerController.class);

	/**
	 * <pre>
	 * 이미지 파일을 읽어서 response 스트림으로 전달한다.
	 * <b>NOTE : </b>이미지를 표시하기 위하여 필히 파라미터는 이미지 파일의 경로, 파일명을 파라미터로 전달하여야 한다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param response HTTP 응답 객체
	 * @throws Exception 예외 발생 시
	 */
	@RequestMapping(value = "/core/erp/com/ComImageView.do")
	public void viewImageFile(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		try {
			
			String pImgDir = URLDecoder.decode(request.getParameter("path"), "UTF-8");;	// 이미지 저장 경로
			String pImgName = URLDecoder.decode(request.getParameter("name"), "UTF-8");	// 이미지 파일명
			
			logger.debug(" -------------------- File path : " + pImgDir + " , name : " + pImgName);
			
			String baseDir = CoreProperties.getProperty("CoreERP.file.upload.path");
			
			logger.debug(" -------------------- Base path : " + baseDir);
			
//			String fullPath = baseDir + pImgDir + File.separator + pImgName;
//			fullPath = filePathBlackList(fullPath);
			
			String fullPath = "";

			// 파라미터의 파일 경로와 기본 파일 저장경로를 이용하여 파일의 전체 저장경로 처리 
			if(pImgDir.indexOf(baseDir) > -1) {
				fullPath = baseDir + pImgDir.replace(baseDir, "");
			} else {
				fullPath = baseDir + pImgDir;
			}

			//전체 파일 경로
			fullPath = fullPath + File.separatorChar +  pImgName;
			
			logger.debug(" -------------------- Path trans : " + fullPath + ", valid : " + isValidPath(fullPath));
			
			if (isValidPath(fullPath)) {
				
				FileInputStream fis = null;
				
				try {
					
					File imgFile = new File(fullPath);
					fis = new FileInputStream(imgFile);
					FileCopyUtils.copy(fis, response.getOutputStream());
					response.getOutputStream().flush();
					
				} catch (Exception e) {
					logger.warn(" -------------------- Error occured while rendering image file...");
				} finally {
					try {
						if (fis != null) {
							fis.close();
						}
					} catch (Exception e2) {
						logger.warn(" -------------------- Error occured while rendering image file...");
					}
				}
				
			}
			
		} catch (Exception e) {
			logger.warn(" -------------------- Exception occurred : " + e.getLocalizedMessage());
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

	
}

