<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubidcs.report.preview.*, com.ubidcs.jdf.util.*, java.text.*, java.util.*"%>

<%
	request.setCharacterEncoding("UTF-8");
	
	String NL = "\n";
	System.out.println(NL);
	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 시작 =========================");

	String rDir = StrUtil.toString(request.getParameter("dir"));				// 리포트 파일 경로(URL)
	//System.out.println(rDir);
	String rJrf = StrUtil.toString(request.getParameter("jrf"));				// 리포트 파일명
	String rArg = StrUtil.toString(request.getParameter("arg"));				// 아규먼트
	String rDataType = StrUtil.toString(request.getParameter("datatype"));		// 데이타 타입	(DS/SVC)
	String rExportType = StrUtil.toString(request.getParameter("exporttype"));	// 저장 유형
	String rExportDir = StrUtil.toString(request.getParameter("exportdir"));	// 저장 경로
	String rExportFile = StrUtil.toString(request.getParameter("exportfile"));	// 저장 파일 명
	String rExportName = StrUtil.toString(request.getParameter("exportname"));	// 저장 계약명
	String rSsvData = StrUtil.toString(request.getParameter("ssvdata"));		// Dataset Data
	String rSvcUrl = StrUtil.toString(request.getParameter("svcurl"));			// Service URL Data

	//운영적용시 ""  - 테스트 개발시 NSCOM_MIS
	String app = "";
	//String app = "NSCOM_MIS";
	String host = request.getServerName() + ":" + request.getServerPort();
	String protocol = request.getProtocol().substring(0, request.getProtocol().indexOf("/")).toLowerCase();
	String url = protocol + "://" + host + (app.equals("")?"":("/" + app));
	
	String ds = "";	// WAS에 설정된 DataSource 명.
	String file_url = url + "/ubireport";	// 리포트에서 사용되는 이미지 또는 공통 아이템 정보를 가져오기위한 정보.
	//String servlet_url1 = (rDir.indexOf("http")==0)?"":(url + "/UbiForm");	// Form 서블릿 URL.
	String servlet_url1 ="";
	//String servlet_url2 = (rDataType != null && rDataType.equals("DS"))?"":(url + "/UbiData");	// Data 서블릿 URL.
	String servlet_url2 = url + "/UbiData";
	String args = "";					// 아규먼트 정보.
	String export_dir = rExportDir;		// 파일 저장 경로.
	String export_file = rExportFile;	// 계약번호 집합
	String export_name = rExportName;	// 계약명 집합

	boolean isSuccess = false;
	
	String  CONT_NUMB[] = export_file.split(",");
	String  CONT_NAME[] = export_name.split(",");
	int count = CONT_NUMB.length;
	
	try {
		for(int i=0; i<count; i++){
			
			UbiViewer ubiviewer = new UbiViewer(false, false);	// 객체 생성
			//ubiviewer.clientType = "nexacro";
			args = "CONT_NUMB#" + CONT_NUMB[i];
			ubiviewer.setParameters(file_url, servlet_url1, servlet_url2, rDir, rJrf, ds, args, "TYPE6"); // 파일 저장을 위한 기본 정보 설정
			ubiviewer.isDebug = true;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
			ubiviewer.isDeflater = false;	//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
			ubiviewer.isUnicode = true;	//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
			ubiviewer.isBase64 = false;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
			ubiviewer.isUTF8 = true;		//서버와의 통신 옵션 (ubigateway.property의 속성과 같아야함)
			ubiviewer.fontRevision = true;	// 변경 불가.
			//운영적용시 풀어야함  - 테스트 개발시 주석
			ubiviewer.setFontPath("/usr/lib/jvm/jre/lib/fonts/");
	
			if( rDataType != null && rDataType.equals("DS") )
				ubiviewer.dataSource = rSsvData;
			else
				ubiviewer.datasetInfos = rSvcUrl;
	
			ubiviewer.setExportParams(rExportType, (export_dir + CONT_NUMB[i] + i)); // 파일 저장 설정
	
			System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 시작");
			isSuccess = ubiviewer.loadReport(); // 파일 저장 수행.
			//System.out.println("getOrientation : " + ubiviewer.getOrientation());	// 마크애니 연동 시 활용
			System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] 파일 저장 종료");
	
			out.clearBuffer();
			
			
			
			String SuccessName = ""; 
			String Success_file[] = export_file.split(",");
					
			for(int j=0; j<count; j++){
				Success_file[j] = "<BR>파일명 : <a href='#' class='fileDownLoad' id='"+CONT_NUMB[j]+j+"'>" + CONT_NAME[j] + " " + CONT_NUMB[j]+".pdf</a>";
		        SuccessName += Success_file[j];
		     }
			
			
			
			if( isSuccess ) 
				//out.println("Export Success : " + (export_dir + CONT_NUMB[i]+i) + "<BR><BR>");
				out.println("<B><div style='text-align:center;'>파일 생성이 완료되었습니다.</div></B><hr><div style='text-align:center'>" + SuccessName + "</div><BR><hr>");
			else
				out.println("Export Fail!" + "<BR><BR>");
		}
	}
	catch(Exception e) {

		e.printStackTrace();
	}

	System.out.println("[" + (new SimpleDateFormat("yyyy-MM-dd kk:mm:ss.SSS")).format(Calendar.getInstance().getTime()) + "] export1.jsp 종료 =========================");
	System.out.println(NL);
	
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript">
   $(function(){
      $(".fileDownLoad").click(function(){
         //alert($(this).attr('id'));
         //window.open("http://localhost:9030/NSCOM_MIS/ubireport/pdfFile/"+$(this).attr('id')+".pdf", $(this).attr('id'), "width='100%',height='100%'");
         window.open("http://mis.nscom.co.kr/ubireport/pdfFile/"+$(this).attr('id')+".pdf", $(this).attr('id'), "width='400',height='700'");
      });
   });
</script>
</head>
<body style="background:#F3F3F3">
<div style='text-align:center'><button onclick="window.close();">닫기</button></div>
</body>
</html>