package core.erp.com.web;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;                                              

import javax.annotation.Resource;                                  
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;                         
import org.slf4j.LoggerFactory;                  
import org.springframework.stereotype.Controller;					
import org.springframework.ui.ModelMap;                            
import org.springframework.web.bind.annotation.RequestMapping;     
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;               
  					






import core.erp.com.service.ComGroupwarepostService;
import core.ifw.utl.DateTime;

/**
 * <pre>
 *	ComGroupwarepostController - 그룹웨어 연동
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	임선빈  <isb@inbus.co.kr>
 * @since	2014. 10. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 6.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Controller
public class ComGroupwarepostController {

	private static final Logger logger = LoggerFactory.getLogger(ComGroupwarepostController.class);

	@Resource(name="ComGroupwarepostService")
	private ComGroupwarepostService comGroupwarepostService;

	/**
	 * <pre>
	 *  그룹웨어
	 * </pre>
	 *
	 * @param coreRequest
	 * @param model
	 * @return 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/core/erp/com/GWPOSTACTION.do", method = {RequestMethod.GET, RequestMethod.POST})
	public void GWPOSTACTION(HttpServletRequest request, HttpServletResponse response,@RequestParam(value="DOCX_TYPE", required=false) String DOCX_TYPE,
														 @RequestParam(value="LINK_KEYX", required=false) String LINK_KEYX,
														 @RequestParam(value="APVL_STAT", required=false) String APVL_STAT,
														 @RequestParam(value="DRFT_NUMB", required=false) String DRFT_NUMB) throws Exception {

		PrintWriter out = response.getWriter();	

		try {

			Map<String, Object> searchVo = new HashMap<String, Object>();
			// 키 앞의 영문자 삭제 로직(임시)
			 if('0' > LINK_KEYX.charAt(0) || '9' < LINK_KEYX.charAt(0)) {
				 //영문
				 LINK_KEYX = LINK_KEYX.substring(6,LINK_KEYX.length());
			 } else {
				 // 숫자
			 }
			
			searchVo.put("UPDT_DATE", DateTime.getDateString("yyyyMMddHHmmss"));
			searchVo.put("UPDT_USID", "GW_POST");			
			searchVo.put("DOCX_TYPE", DOCX_TYPE);
			searchVo.put("LINK_KEYX", LINK_KEYX);
			searchVo.put("APVL_STAT", APVL_STAT);
			searchVo.put("DRFT_NUMB", DRFT_NUMB);
			logger.info(searchVo.toString());
			
			comGroupwarepostService.processGWPOSTACTION(searchVo);

			// HTTP 응답쪽으로 결과값 전송. 성공
			response.reset();
			response.setContentType("text/plain"); 			
			response.setCharacterEncoding("UTF-8");

			out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
			out.println("<ndata>");
			out.println("    <status>Success</status>");
			out.println("    <code>0</code>");
			out.println("    <message>성공</message>");
			out.println("</ndata>");

		} catch(Exception e) {
			logger.error("GWPOSTACTION : " + e.getMessage());

			// HTTP 응답쪽으로 결과값 전송. 실패
			response.reset();
			response.setContentType("text/plain"); 			
			response.setCharacterEncoding("UTF-8");
			out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
			out.println("<ndata>");
			out.println("    <status>false</status>");
			out.println("    <code>-1</code>");
			out.println("    <message>실패</message>");
			out.println("</ndata>");

		}

		out.flush(); 
		out.close(); 
		
	}
	

}
