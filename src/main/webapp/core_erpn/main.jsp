<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file= "./util.jsp" %>
<%@ page import="core.ifw.utl.CoreProperties" %>
<%@ page import="core.ifw.utl.StrUtil"%>


<!-- 

넥사크로플랫폼 실행 메인 페이지
@author 장성환
@since 2014.07
@description
	date			name		explanation
	******************************************************************
	2014.07.03		ksd			최초 작성
	2016.05.29		jsh			프레임워크 교체로 수정
	******************************************************************
	
 -->


<%

String sSvcType = CoreProperties.getProperty("CoreERP.runningMode");

String sFrameType = StrUtil.toNotNullString(request.getParameter("frametype"));
String sMenuID    = StrUtil.toNotNullString(request.getParameter("menuid"));

if (sFrameType.length() == 0) {
	sFrameType = "MDI";
}

String sRemoteAddr = request.getRemoteAddr();
String sUid        = "";
String sErrorMsg   = "";

//escape 처리
sFrameType = StrUtil.cleanXSS(sFrameType);
sMenuID = StrUtil.cleanXSS(sMenuID);
sSvcType = StrUtil.cleanXSS(sSvcType);

String sLoginYn  = "";	//인사급여 실행 여부
String sLoginMsg = "";  //오류 메시지


// CoreConfig에서 기본으로 로드할 값
String approvalCallUrl = CoreProperties.getProperty("CoreERP.approval.call.url");	// 전자결재 호출 URL


// 프로젝트 운영모드 구분 :: 솔루션 - 일반
String serviceEnv = CoreProperties.getProperty("CoreERP.serviceEnv");


// 실행 컨텍스트 경로
String contextRoot = request.getContextPath();



//FOR NSCOM SSO Auth
String userId = StrUtil.toNotNullString(session.getAttribute("__SSO_AUTH_ID"));	// 인증사용자ID
String sysCode = StrUtil.toNotNullString(session.getAttribute("__SYSTEM_CODE"));	// 접속 시스템 코드
String menuId = StrUtil.toNotNullString(session.getAttribute("__MENU_ID"));		// 접속 메뉴ID
String queryParam = StrUtil.toNotNullString(session.getAttribute("__QUERY_STRING"));		// 파라미터 쿼리

///////////// REMOVE UNUSED SESSION VALUES ///////////////////
session.removeAttribute("__QUERY_STRING");
session.removeAttribute("__SSO_AUTH_ID");
session.removeAttribute("__SYSTEM_CODE");
session.removeAttribute("__MENU_ID");
///////////// REMOVE UNUSED SESSION VALUES ///////////////////

// SSO 인증 여부
String isSsoAuth = "false";

// SSO Authorization...
if ((userId != null) && (!"".equals(userId))) {
	isSsoAuth = "true";
}



// 메뉴ID가 존재할 경우 SDI(단일 창 실행모드) 설정
if (!"".equals(menuId)) {
	sFrameType = "SDI";
	sMenuID = menuId;
}

%>

<!--[if gt IE 8]><!DOCTYPE html><!--<![endif]-->
<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" />
<link rel="icon" href="../favicon.ico?v=2" type="image/x-icon">
<link rel="shortcut icon" href="../favicon.ico?v=2" type="image/x-icon">
<meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width, target-densitydpi=device-dpi" />

<script type="text/javascript" src="./nexacro14lib/framework/SystemBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/SystemBase_HTML5.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/BasicObjs.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/Platform_HTML5.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/Platform.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/CssObjs.js"></script>
<script type="text/javascript" src="./nexacro14lib/framework/ErrorDefine.js"></script>

<script type="text/javascript" src="./nexacro14lib/component/CompBase/Element_HTML5.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/CompBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/CompEventBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/Data.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/EditBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/FormBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/TitleBar.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/StatusBar.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/FrameBase.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/ScrollBar.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/CompBase/Step.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Dataset.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/DomObject.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Button.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Static.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Edit.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/MaskEdit.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/TextArea.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/ImageViewer.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/CheckBox.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Radio.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/ListBox.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Combo.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Div.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/ProgressBar.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/PopupDiv.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Menu.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/PopupMenu.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Spin.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/DatePicker.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Calendar.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/GroupBox.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Tab.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/FileDownload.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/FileUpload.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/WebBrowser.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/Sketch.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/ExportObject.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/ComComp/ImportObject.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/Grid/GridInfo.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/Grid/Grid.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/Plugin.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/DeviceObjs.js"></script>

<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Namespace.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Eco.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/array.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/date.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/number.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/string.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/object.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Style.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Logger.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Color.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/XComp.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/PositionSize.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Json.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Event.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/LocalStorage.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/EcoLibrary/Factory.js"></script>

<script type="text/javascript" src="./nexacro14lib/component/ExtComp/ExtFileUpDownload.js"></script>

<script type="text/javascript" src="./nexacro14lib/component/UbiViewer/UbiViewer.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/UbiViewer/ubiajax.js"></script>
<script type="text/javascript" src="./nexacro14lib/component/UbiViewer/excanvas.js"></script>

<title></title>

<style type="text/css">
div {
	-moz-user-select: -moz-none;
	-webkit-user-select: none;
	-webkit-touch-callout: none;
	-webkit-appearance: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	outline: none;
}

v\:shape {
	behavior: url(#default#VML);
	display: inline-block;
}

v\:fill {
	behavior: url(#default#VML);
	display: inline-block;
}

v\:path {
	behavior: url(#default#VML);
	display: inline-block;
}

v\:line {
	behavior: url(#default#VML);
	display: inline-block;
}

v\:textpath {
	behavior: url(#default#VML);
	display: inline-block;
}

o\:opacity2 {
	behavior: url(#default#VML);
}

input::-ms-clear {
	display: none;
}

input::-ms-reveal {
	display: none;
}
</style>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
<script type="text/javascript">
function oninitframework() {

	if ('<%=sLoginYn%>' == 'N') {
		alert('<%=sLoginMsg%>');
		fn_close();
		return;
	}
	
	application.frameType  = '<%=sFrameType%>';		//MDI,SDI
	application.sdiMenuId  = '<%=sMenuID%>';		//SDI MenuID
	application.serverType = '<%=sSvcType%>';		//OPER,DEV,LOCAL
	application.systemType = '<%=sysCode%>';		//System 구분코드
	
	// SSO 처리 추가
	application.isSSOAuth = "<%=isSsoAuth%>";
	application.ssoUserId = '<%=userId%>';
	application.ssoParam = '<%=queryParam%>';
	
	application._SVCENV = '<%=serviceEnv%>';
	
	
	// 어플리케이션 접속정보
	application.svcDomain = document.location.protocol + "//" + document.location.hostname;
	
	if (document.location.port != "") {
		application.svcDomain = application.svcDomain + ":" + document.location.port;
	}
	
	
	var contextPath = "<%=request.getContextPath()%>";
	application.svcDomain = application.svcDomain + contextPath;

	
	// 기본 설정값 set
	application.approvalCallUrl = '<%=approvalCallUrl%>';	// 전자결재 호출 URL
	application._CONTEXT_ROOT = '<%=contextRoot%>';
	
	
	// -----> 넥사크로 구동 시작
	nexacro._initHTMLSysEvent(window, document);
	nexacro._prepareManagerFrame();
	
	
	// 웹폰트 사용 처리 시작
	/*
	var _frame_doc = nexacro._managerFrameDoc;
    var head = _frame_doc.head || _frame_doc.getElementsByTagName('head')[0];
    
    try {
    	var href = document.location.protocol + "//" + document.location.host;
        var link = _frame_doc.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = href + "/" + contextPath + "/css/fontfamily.css"; // 실제 경로로 변경
        head.appendChild(link);         
    } catch(e) {
    	console.info("--- Failed to loading css files.");
    }
    // 웹폰트 사용 처리 끝
	*/
	
	
	application.load("core_erpn", "core_erpn.xadl.js");

    // -----> 넥사크로 구동 끝
    
}

function fn_close(){
	open('', '_self').close();
}

function onfinalframework()	{}
</script>
</body>
</html>
