/**
 * core.erp.com.web.ComIFController.java
 */
package core.erp.com.web;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.DataSet;

import core.erp.tmm.service.TMMA0020Service;
import core.ifw.utl.CoreProperties;

/**
 * <pre>
 *	ComIFController - 타 시스템 인터페이스를 위한 컨트롤러
 * </pre>
 * 
 * @author	Genie. J. <jsh@inbus.co.kr>
 * @since	2014. 10. 22.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 22.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComIFController {

	private static final Logger logger = LoggerFactory.getLogger(ComIFController.class);
	
	@Resource(name = "TMMA0020Service")
	private TMMA0020Service tMMA0020Service;
	
	
	/**
	 * <pre>
	 * 시스템 인터페이스를 위한 템플릿이다.
	 * </pre>
	 * @param request HTTP 요청 객체
	 * @param response HTTP 응답 객체
	 */
	@RequestMapping(value = "/core/erp/com/com_ifsvc01.do")
	public void getIFdata(HttpServletRequest request, HttpServletResponse response) {
		
		String returnMsg = "ERROR";

		FileWriter writer = null; //2015.05.15시큐어처리
		
		try {
			
			// 파라미터 값
			String reqCode = (request.getParameter("code") == null ? "" : request.getParameter("code"));
			
			Map paramMap = new HashMap();
			paramMap.put("edtSHRMSGE_CNTT", reqCode);
			
			//2016 06 10 김준수 수정
			// 조회
			Map<String, Object> dsResult = (Map<String, Object>) tMMA0020Service.processSEARCH00(paramMap);
			
			// 생성할 XML 파일 내용
			// 예제에서는 단순히 데이터셋 객체를 xml으로  변환하여 저장한다.
			String saveXml = ((DataSet) dsResult.get("dsTM_MESSXM")).saveXml();
			
			// List<Map<String, String>> 타입 객체를 XML으로 변환.
			List<Map<String, String>> retList = new ArrayList<Map<String,String>>();
			Map<String, String> dataMap1 = new HashMap<String, String>();
			dataMap1.put("CODE_VALU", "TEST_DATA");
			dataMap1.put("CODE_NAME", "테스트");
			retList.add(dataMap1);
			
			Map<String, String> dataMap2 = new HashMap<String, String>();
			dataMap2.put("DATA_VALU", "SEND_DATA_VALUE");
			dataMap2.put("DATA_STRING", "This is test xml value.");
			retList.add(dataMap2);
			
			/* TODO 
			 org.springframework.oxm.Marshaller 및 해당 인터페이스를 구현한 CastorMarshaller을 이용하여
			 객체를 XML으로 marshalling(변환)한다.
			 pom.xml 파일에 spring-oxm 및 castor 라이브러리 디펜던시를 추가한다.
			*/
			/*
			Marshaller marshaller = new CastorMarshaller();
			String dataXml = marshaller.marshall(retList);
			*/
			
			// 저장 위치 및 저장할 파일명.
			String savePath = CoreProperties.getProperty("CoreERP.interfacePath");
			String saveName = "IF_FILE_" + System.currentTimeMillis() + ".xml";
			
			// 파일 저장 위치가 없으면 생성한다.
			File saveDir = new File(savePath);
			if(!saveDir.exists()) {
				saveDir.mkdirs();
			}
			
			// XML 파일 생성
			File targetFile = new File(savePath + File.separatorChar + saveName);
			//FileWriter writer = new FileWriter(targetFile);
			writer = new FileWriter(targetFile);
			writer.write(saveXml);
			writer.flush();
			//writer.close(); //2015.05.15시큐어처리
			
			// 결과 상태값 및 파일명을 함께 전달한다.
			// 처리는 상대방쪽에서 받아서 알아서...(당연히 파일명은 줘야될듯?)
			returnMsg = "SUCCESS|" + saveName;
			
			// HTTP 응답쪽으로 결과값 전송. 결과값은 단순 텍스트로 전송하여준다.(필요시 형식 변경하여 전송)
			response.reset();
			response.setContentType("text/plain");
			response.getWriter().write(returnMsg);

			
		} catch (Exception e) {
			
			try {
				response.getWriter().write("ERROR");
			} catch (IOException ioe) {
				logger.warn(" ---------- Error : " + ioe.getLocalizedMessage());
			}
			
		} finally { //2015.05.15시큐어처리
		    if (writer != null) {
		        try { writer.close(); } catch (Exception ex) { logger.debug("error occurred."); }
		    }
		} //2015.05.15시큐어처리		
	}

}
