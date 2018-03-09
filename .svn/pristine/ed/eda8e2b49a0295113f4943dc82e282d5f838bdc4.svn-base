<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="core.ifw.utl.StrUtil"%>
<%@ page import="core.ifw.utl.CryptSHA"%>
<%@ page import="com.rathontech.common.crypt.CaCrypt"%>
<%

// Header에서 SMSession 확인
String value = request.getHeader("Cookie");
String SM = null;
String getssoinfo = "null";

String baseUrl = request.getRequestURL().toString();
String contextPath = request.getContextPath();
String queryStr = StrUtil.toNotNullString(request.getQueryString());
baseUrl = baseUrl.concat(("".equals(queryStr) ? "" : "?".concat(queryStr)));

log("----------------- Base url : " + baseUrl);
log("----------------- Context path : " + contextPath);
log("----------------- Query String : " + queryStr);


//NSCOM 테스트용 임시(empl에 사원번호 넘겨주면 sso 체크 없이 진행)(2016.12.13 by302)
if (StrUtil.toNotNullString(request.getParameter("empl")) == "") {
	
	if ((null != value) && (value.indexOf(";") != -1)) {
		
		String[] tC = value.split("; ");
		
		for (int i = tC.length - 1; i >= 0; i--) {
			
			String[] x = tC[i].split("=");
			
			if ("SMSESSION".equals(x[0])) {
				SM = x[1];
				break;
			}
		}
	}
	
	
	if ((null != SM) && !("LOGGEDOFF".equals(SM))) {
		
		Cookie[] ck = null;
		ck = request.getCookies();
		
		if (ck != null) {
			
			String ckname = "SMOFC";
			int ckfind = -1;
			String ckimport = null;
			
			for (int i = 0; i < ck.length; i++) {
				log("----------- ck[" + i + "] name : " + ck[i]);
				if (ck[i].getName().equals(ckname)) {
					ckfind = i;
					break;
				}
				
			}
			
			if (ckfind != -1 && ck[ckfind].getValue() != "" && ck[ckfind].getValue() != null) {
				
				// 암호화된 SMOFC 쿠키값 get
				ckimport = ck[ckfind].getValue();
				
				// 암호화된 SMOFC 쿠키값 복호화
				CaCrypt cry = new CaCrypt();
				String devalue = cry.extractValue(ckimport);
				
				// 복호화된 SMOFC값에서 시스템 사용자 인증에 필요한 정보 추출 (ex. 사번,회사코드 등...)
				String[] OFC = devalue.split(";");
				
				for (int x = OFC.length - 1; x >= 0; x--) {
					
					String[] cksp = OFC[x].split("=");
					
					if ("emp_no".equals(cksp[0])) {	// 사원번호 체크
						getssoinfo = cksp[1];
						break;
					}
				}
				
			} else {
				// SMOFC 값이 존재하지 않을 경우 WebAgent가 설치된 SSO 서버의 Protect된 Page로 리다이렉션
				// 그룹사별, 시스템별로 페이지 경로 상이함.
				log("-----------------[step 1] ck is null");
				response.sendRedirect("http://gwsso.nscom.co.kr:8000/redirectlogin/nk/nk_appl2016001.jsp?initpage=".concat(baseUrl));
			}
			
		} else {
			// SMOFC 값이 존재하지 않을 경우 WebAgent가 설치된 SSO 서버의 Protect된 Page로 리다이렉션
			// 그룹사별, 시스템별로 페이지 경로 상이함.
			log("-------------------- [step2] ck info is not found in cookie");
			response.sendRedirect("http://gwsso.nscom.co.kr:8000/redirectlogin/nk/nk_appl2016001.jsp?initpage=".concat(baseUrl));
		}
		
	} else {
		// SMSession 값이 존재하지 않을 경우 WebAgent가 설치된 CookieProvider 서버의
		// Protect된 Page로 리다이렉션
		log("--------------- [step3] smsession is not found");
		response.sendRedirect("http://gwsso.nscom.co.kr:8000/redirectlogin/nk/nk_appl2016001.jsp?initpage=".concat(baseUrl));
	}
	
} else {
	
    getssoinfo = StrUtil.toNotNullString(request.getParameter("empl"));
	
}

log("---------------------- [step4] getssoinfo : " + getssoinfo);

if (!"null".equals(getssoinfo)) {
	
	String systemCode = StrUtil.toNotNullString(request.getParameter("scd"));			// 시스템구분코드
	String menuId = 	StrUtil.toNotNullString(request.getParameter("mid"));			// 메뉴ID

	
	session.setAttribute("__QUERY_STRING", queryStr);
	session.setAttribute("__SSO_AUTH_ID", getssoinfo);
	session.setAttribute("__SYSTEM_CODE", systemCode);
	session.setAttribute("__MENU_ID", menuId);
	
	String nextUrl = contextPath.concat("/core_erpn/main.jsp");
	
%>
<html>
<head>
<script language="javascript">
function auto() {
	var ErpnWindow = window.open("<%=nextUrl%>", "_blank", "top=10, left=10, width=1261, height=871 , fullscreen=no, resizable=yes, titlebar=no, toolbar=no, location=no " ); 					
	ErpnWindow.focus();				

	window.open("", "_self").close();
}
</script>
</head>
<body onload="auto()">
</body>
</html>
<%
}
%>

