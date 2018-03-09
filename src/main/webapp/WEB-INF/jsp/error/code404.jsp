<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<%@page import="org.slf4j.LoggerFactory"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.Writer"%>

<%!

final Logger LOGGER = LoggerFactory.getLogger("code404.jsp");

%>

<%

response.setStatus(HttpServletResponse.SC_OK);

LOGGER.warn("----- Status code : " + request.getAttribute("javax.servlet.error.status_code"));
LOGGER.warn("----- Exception type : " + request.getAttribute("javax.servlet.error.exception_type"));
LOGGER.warn("----- Exception : " + request.getAttribute("javax.servlet.error.exception"));
LOGGER.warn("----- Message : " + request.getAttribute("javax.servlet.error.message"));
LOGGER.warn("----- Request uri : " + request.getAttribute("javax.servlet.error.request_uri"));
LOGGER.warn("----- Request uri : " + request.getAttribute("javax.servlet.error.servlet_name"));
Writer writer = null;

try {
	
	response.reset();
	response.setCharacterEncoding("UTF-8");
	
	writer = response.getWriter();
	writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
	writer.write("<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">");
	writer.write("	<Parameters>");
	writer.write("		<Parameter id=\"ErrorCode\" type=\"string\">-404</Parameter>");
	writer.write("		<Parameter id=\"ErrorMsg\" type=\"string\">처리중&#32;오류가&#32;발생하였습니다.&#32;잠시후&#32;다시&#32;시도해주시기&#32;바랍니다</Parameter>");
	writer.write("	</Parameters>");
	writer.write("</Root>");
	
} catch (Exception e) {
	
	LOGGER.warn("------ Could not process error handling. Reason : " + e.getLocalizedMessage());
	
} finally {
	
	try {
		writer.flush();
		writer.close();
	} catch (Exception e) {
		LOGGER.warn("------ Could not close response writer. Reason : " + e.getLocalizedMessage());
	}
	
}

%>

