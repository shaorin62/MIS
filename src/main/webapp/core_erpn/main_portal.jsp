﻿<%@page import="org.springframework.util.StringUtils"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="core.ifw.utl.CoreProperties" %>
<%@ page import="core.ifw.utl.StrUtil"%>

<%
 
String sSvcType = CoreProperties.getProperty("CoreERP.runningMode");

String sUid = request.getParameter("userId");

//escape 처리
sUid = StrUtil.cleanXSS(sUid);
sSvcType = StrUtil.cleanXSS(sSvcType);

%>

<!--[if gt IE 8]><!DOCTYPE html><!--<![endif]-->
<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" />
  <meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width, target-densitydpi=device-dpi" />
  
  <script type="text/javascript" src="./nexacro14lib/framework/SystemBase.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/SystemBase_HTML5.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/BasicObjs.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/Platform_HTML5.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/Platform.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/CssObjs.js"></script>
  <script type="text/javascript" src="./nexacro14lib/framework/ErrorDefine.js"></script>

	<script type="text/javascript" src="./nexacro14lib/component/CompBase/Element_HTML5.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/CompBase/Element_Runtime.js"></script>
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
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/FlashPlayer.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/MediaPlayer.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/WebBrowser.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/Map.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/Sketch.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/ExportObject.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/ComComp/ImportObject.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/Grid/GridInfo.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/Grid/Grid.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/SQLite.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/SQLite_Runtime.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/Plugin.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/DeviceObjs.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/DeviceObjs_Runtime.js"></script>
	<script type="text/javascript" src="./nexacro14lib/component/DeviceAPI/Mobile.js"></script>

  <title></title>
  
  <style type="text/css">
    div {
      -moz-user-select:-moz-none;
      -webkit-user-select:none;
      -webkit-touch-callout:none;
      -webkit-appearance:none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      outline:none;
    }
    
    v\:shape    { behavior:url(#default#VML); display:inline-block; }
    v\:fill     { behavior:url(#default#VML); display:inline-block; }
    v\:path     { behavior:url(#default#VML); display:inline-block; }
    v\:line     { behavior:url(#default#VML); display:inline-block; }
    v\:textpath { behavior:url(#default#VML); display:inline-block; }
    o\:opacity2 { behavior:url(#default#VML); }
    
    input::-ms-clear  { display:none; }
    input::-ms-reveal { display:none; }
  </style>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
  <script type="text/javascript">
    function oninitframework()
    {

      
<%
	if ((sUid == null) || (!StringUtils.hasLength(sUid))) {
%>
		window.open("", "_self", "").close();
<%
	}

%>
	  
	  
      application.ssoId = '<%=sUid%>';
      application.frameType = 'MDI';           //MDI,SDI
      application.serverType = '<%=sSvcType%>';  //OPER,DEV,LOCAL
      //window.opener.document.getElementById("checkLoad").value = "true";
      
      nexacro._initHTMLSysEvent(window, document);
      nexacro._prepareManagerFrame();
      application.load("core_erpn", "core_erpn.xadl.js");
    }
    function onfinalframework()
    {
      
    }
  </script>
</body>
<OBJECT  ID="ZTransferX" width = "0" height = "0"  
  CLASSID="CLSID:C7C7225A-9476-47AC-B0B0-FF3B79D55E67"  
  codebase="http://intra.ktcu.or.kr/oz60/OZRViewer/ZTransferX.cab#version=2,2,3,7"> 
<PARAM NAME="download.Server" VALUE="http://intra.ktcu.or.kr/oz60/OZRViewer/"> 
<PARAM NAME="download.Port" VALUE="80"> 
<PARAM NAME="download.Instruction" VALUE="ozrviewer.idf"> 
<PARAM NAME="install.Base" VALUE="<PROGRAMS>/Forcs">
<PARAM NAME="install.NameSpace" VALUE="Cupid10_60"> 
</OBJECT>
</html>