/**
 * core.erp.tmm.web.TMMA0070Controller.java - <Created by Code Template generator>
 */
package core.erp.tmm.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import core.erp.com.web.ComFiledownloadController;
import core.erp.tmm.service.TMMA0070Service;
import core.ifw.cmm.request.CoreRequest;
import core.ifw.cmm.result.CoreResultData;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.FileManagerUtil;


/**
 * <pre>
 *	TMMA0070Controller - 엑셀업로드서식관리 프로그램 컨트롤러 클래스
 * </pre>
 *
 * @author	최흥규
 * @since	2016.07.06
 * @version	1.0
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
 
@Controller
public class TMMA0070Controller {

	/**
	 * Logger init.
	 */
	private static final Logger logger = LoggerFactory.getLogger(TMMA0070Controller.class);

	/**
	 * 엑셀업로드서식관리 메뉴 서비스 클래스
	 */
	@Resource(name="TMMA0070Service")
	private TMMA0070Service service;

    /**
	 * 엑셀업로드양식 목록을 조회한다.
	 * @param param - 조회할 정보가 담긴 Map 객체
	 * @return "/TMMA0070/SEARCH00"
	 * @exception Exception - 조회시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/tmm/TMMA0070_SEARCH00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSEARCH00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			Map searchVo = coreRequest.getMapVariableList();
			logger.info("searchVo : " + searchVo.toString());
			
			coreResultData.setReturnDataMap((Map<String, Object>) service.processSEARCH00(searchVo));
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
	 * 엑셀업로드서식관리 을 저장,수정 또는 삭제한다.
	 * </pre>
	 *
	 * @param param - 저장, 수정 또는 삭제할 자료
	 * @return 처리 건수
	 * @exception Exception - 처리 시 발생한 예외
	 */
	@RequestMapping(value = "/core/erp/tmm/TMMA0070_SAVE00.do")
	@SuppressWarnings("rawtypes")
	public ModelAndView processSAVE00(CoreRequest coreRequest, ModelMap model) throws Exception {

		ModelAndView mav = new ModelAndView("coreReturnView");
		CoreResultData coreResultData = new CoreResultData(coreRequest.getCALL_TYPE());

		try {

			service.processSAVE00(coreRequest.getSaveDataSetAll());
			coreResultData.setResultMessageSuccessSave();

		} catch(Exception e) {
			logger.error("processSAVE00 : " + e.getMessage());
			coreResultData.setResultMessageFailSave(e);
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
	@RequestMapping("/core/erp/tmm/TMMA0070_sampledown.do")
	public void getSampledownload(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "name") String name,
			@RequestParam(value = "realname") String realname) throws Exception {

		try {
			// 파일다운로드 공통함수에서 인코딩한 문자열을 디코딩 한다!
			String filename = URLDecoder.decode(name, "UTF-8");	//물리 파일명
			String viewname = URLDecoder.decode(realname, "UTF-8");	//논리파일명
			
			downloadSampleFile(request, response, filename, viewname);
			

		} catch (Exception e) {

			if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
				logger.info(e.getMessage());
			}

			throw e;

		}

	}
	
	/**
	 * 엑셀 샘플 다운로드
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
	public static void downloadSampleFile(HttpServletRequest request,
			HttpServletResponse response, String name, String realname)
			throws Exception {
		
		String filepath = CoreProperties.getProperty("CoreERP.excel.path");
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
		String downloadFilePath = filepath + ComFiledownloadController.DEFAULT_SEPARATOR +  name;
		
		if(logger.isDebugEnabled() || logger.isInfoEnabled()) {
			logger.debug("File Path : " + downloadFilePath);
		}
		
		String message = "";

		//실제 파일 엑세스
		String srcFilePath = FileManagerUtil.filePathBlackList(downloadFilePath);
		
		if(!FileManagerUtil.isValidPath(srcFilePath)) {
			message = "해당 파일의 경로가 부적절하여 다운로드 할 수 없습니다.";
			FileManagerUtil.getAlertMessage(response, message);
			return;
		}
		
		File srcFile = new File(srcFilePath);
		
		//파일이 존재하지 않으면
		if(!srcFile.exists()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
			FileManagerUtil.getAlertMessage(response, message);
			return;
		}
		
		//파일을 읽을수 없다면..
		if(!srcFile.isFile() || !srcFile.canRead()) {
			//throw new FileNotFoundException(imageRealPath);
			message = "파일명 : " + viewname + ", 해당파일이 존재하지 않거나 다운로드 할 수 없습니다.";
			FileManagerUtil.getAlertMessage(response, message);
			return;
		}
		
		//파일 전송을 위한 응답객체 헤더 타입
		String contentType = "application/octet-stream;charset=UTF-8";
		
		response.setContentType(contentType);
		response.setContentLength((int) srcFile.length());
		response.setHeader("Content-Transfer-Encoding", "binary");
		
		String browserName = FileManagerUtil.getBrowser(request);
		
		//다운로드 받을 실제 파일명이 비었으면 물리 파일명과 동일하게 설정
		if((viewname == null) || (viewname.length() == 0)) {
			viewname = name;
		}
		
		String disposition = FileManagerUtil.getDisposition(viewname, browserName);
		
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

}
