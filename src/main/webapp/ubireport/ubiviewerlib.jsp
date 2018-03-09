<%@ page import="com.ubidcs.report.preview.*" contentType="text/html; charset=euc-kr" pageEncoding="euc-kr" %>

<%

	String host = "ip:port";
	String app = "myapp";											// WebApplication ��.
	String url = "http://" + host + (app.equals("")?"":("/" + app));// WebApplication URL.
	String jrf_dir = "/WAS/myapp/ubireport/work/";					// ����Ʈ ���� ��ġ.
	String jrf = "ubi_sample.jrf";									// ����Ʈ ���ϸ�.
	String ds = "jdbc/tutorial";									// WAS�� ������ DataSource ��.
	String file_url = url + "/ubireport";							// ����Ʈ���� ���Ǵ� �̹��� �Ǵ� ���� ������ ������ ������������ ����.
	String servlet_url1 = url + "/UbiForm";							// Form ���� URL.
	String servlet_url2 = url + "/UbiData";							// Data ���� URL.
	String args = "arg1#value1#arg2#value2#...#argn#valuen#";		// �ƱԸ�Ʈ ����.
	String export_dir = "/WAS/myapp/ubireport/sample/";				// ���� ���� ���.
	String export_file = "ubi_sample.pdf";							// ���ϸ�.

	try {

		UbiViewer ubiviewer = new UbiViewer(false, false);	// ��ü ����
		ubiviewer.setParameters(file_url, servlet_url1, servlet_url2, jrf_dir, jrf, ds, args, "TYPE6"); // ���� ������ ���� �⺻ ���� ����
		ubiviewer.isDeflater = true;						//�������� ��� �ɼ� (ubigateway.property�� �Ӽ��� ���ƾ���)
		ubiviewer.isUnicode = false;						//�������� ��� �ɼ� (ubigateway.property�� �Ӽ��� ���ƾ���)
		ubiviewer.isBase64 = true;							//�������� ��� �ɼ� (ubigateway.property�� �Ӽ��� ���ƾ���)
		ubiviewer.isUTF8 = false;							//�������� ��� �ɼ� (ubigateway.property�� �Ӽ��� ���ƾ���)
		ubiviewer.fontRevision = true;						// ���� �Ұ�.
		ubiviewer.setFontPath("/java6/jre/lib/fonts/");		//WAS�� ��ġ�� ������ OS�� Non-Windows�� ��� ��Ʈ ������ �������� �κ��� ����.

		ubiviewer.setExportParams("PDF", (export_dir + export_file)); // ���� ���� ����

		boolean isSuccess = ubiviewer.loadReport(); // ���� ���� ����.

		if( isSuccess ) 
			out.println("Export Success!");
		else
			out.println("Export Fail!");
	}
	catch(Exception e) {

		e.printStackTrace();
	}

%>
