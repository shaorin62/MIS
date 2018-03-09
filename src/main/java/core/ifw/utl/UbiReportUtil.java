/**
 * core.ifw.utl.UbiReportUtil.java
 */
package core.ifw.utl;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ubidcs.report.preview.UbiViewer;

import core.ifw.cmm.exception.ProcessException;

/**
 * <pre>
 *	UbiReportUtil - 
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2017. 1. 13.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2017. 1. 13.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2017 By INBUS Co,Ltd. All rights reserved.
 */
public class UbiReportUtil {

	public static final Logger LOGGER = LoggerFactory.getLogger(UbiReportUtil.class);

	
	/**
	 * 유비레포트를 이용하여 PDF 파일을 생성합니다.
	 * <p/>
	 * <p>
	 * 생성된 PDF 파일은 서버의 지정된 디렉토리에 저장됩니다.
	 * 함수 호출 정상적으로 pdf 파일이 생성되면, 생성된 파일의 전체 경로를 반환합니다.
	 * 또한, PDF 파일 생성을 위한 레포트는 필요한 경우 직접 SQL 문을 이용하여 데이터를 가져와야 합니다.
	 * </p>
	 *
	 * @param reportFile	PDF 파일로 만들고자 하는 유비레포트 출력물 파일입니다. 하위경로에 위치할 경우 "tmm/reportsample.jrf" 형식입니다.
	 * @param reportParam	레포트로 전달할 매개변수입니다. "변수명#값..." 형식으로 파라미터를 전달합니다.
	 * @param pdfFileName	생성할 PDF 파일명입니다. 확장자는 포함하지 않습니다.
	 * @return	생성된 PDF 파일의 경로를 반환합니다. 전체 디렉토리 경로 및 파일명이 포함되어 있습니다.
	 * @throws Exception 유비레포트 PDF 변환 실패 시 ProcessException이 전달됩니다.
	 */
	public static String generateReportPDF(String reportFile, String reportParam, String pdfFileName) throws Exception {
		
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("----- Generate pdf file from ubireport");
			LOGGER.info("----- Report File : " + reportFile);
			LOGGER.info("----- PDF File name : " + pdfFileName);
		}
		
		
		String baseUrl = CoreProperties.getProperty("Inbus.ubireport.url");	// 서블릿 기본 URL
		
		String fileURL = baseUrl +"/ubireport";
		String servletURL1 = baseUrl + "/UbiForm";
		String servletURL2 = baseUrl + "/UbiData";
		
		String jrfFileDir = CoreProperties.getProperty("Inbus.report.file.path");	// 유비레포트 파일 기본 경로
		String pdfFileDir = CoreProperties.getProperty("Inbus.pdf.export.path");	// PDF 파일을 저장할 디렉토리
		String dataSource = CoreProperties.getProperty("CoreERP.db.jndiName");		// 데이터베이스 연결에 사용할 DataSource 명
		String jrfFileName = reportFile;
		String generateFile = pdfFileDir.concat("/").concat(pdfFileName).concat(".pdf");
		
		
		File pdfDir = new File(pdfFileDir);
		
		if (!pdfDir.exists()) {
			pdfDir.mkdirs();
		}
		
		
		boolean isSuccess = false;

		UbiViewer ubiviewerExport = new UbiViewer(false, false);
		ubiviewerExport.setParameters(fileURL, servletURL1, servletURL2, jrfFileDir, jrfFileName, dataSource, reportParam, "TYPE6");
		ubiviewerExport.setExportParams("pdf", generateFile);
		ubiviewerExport.setServletRootURL(baseUrl);
		ubiviewerExport.isDeflater = false;
		ubiviewerExport.isUnicode = true;
		ubiviewerExport.isBase64 = false;
		
		isSuccess = ubiviewerExport.loadReport(); // 파일 저장 수행.

		LOGGER.info("----- Generate Success : " + isSuccess);
		
		if (!isSuccess) {
			throw new ProcessException("PDF 파일이 정상적으로 생성되지 않았습니다.[PDF_REPORT_FAIL]");
		}
		
		return generateFile;
		
	}

}
