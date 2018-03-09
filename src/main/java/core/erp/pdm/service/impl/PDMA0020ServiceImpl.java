/**
 * core.erp.tmm.service.impl.PDMA0020ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;


import java.io.File;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.security.Security;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.annotation.Resource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Service;

import core.erp.mac.service.impl.MACA0010ServiceImpl;
import core.erp.pdm.service.PDMA0020Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * <pre>
 *	PDMA0020Controller - 계약관리 화면 조회
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.19
 * @version	1.0
 * @see		{@link PDMA0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Service("PDMA0020Service")
public class PDMA0020ServiceImpl extends EgovAbstractServiceImpl implements PDMA0020Service {

	/**
	 * 계약관리 화면 DAO class inject.
	 */
	@Resource(name = "PDMA0020Dao")
	private PDMA0020Dao dao;

	/**
	 * 계약관리 화면을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CONTXH", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 계약관리 하단 기초데이터 화면을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CONTXD", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 계약관리 하단상세 내역을 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CONTXD_DTL", dao.processSEARCH02(searchVo));
		return returnMap;

    }
	
	
	/**
	 * PDMA0020 계약서 상단 데이터를 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_CONTXH     = (List) saveData.get("dsPD_CONTXH");  
		List dsPD_CONTXH_Del = (List) saveData.get("dsPD_CONTXH_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_CONTXH_Del.size(); i++) {

        	rowVo = (Map) dsPD_CONTXH_Del.get(i);
			deleteCount += dao.processDELETE00(rowVo);

		}

        //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsPD_CONTXH.size(); i++) {

			rowVo = (Map) dsPD_CONTXH.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
				
			} else if (rowType == 2) {
				
				
				updateCount += dao.processUPDATE00(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PDMA0020 계약서 하단 데이터를 저장및 수정한다.
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE01(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;

		List dsPD_CONTXD     = (List) saveData.get("dsPD_CONTXD");  
		List dsPD_CONTXD_Del = (List) saveData.get("dsPD_CONTXD_DELETE");

		//DataSet의 Delete Row Count만큼 돌면서 Delete
        for (int i = 0; i < dsPD_CONTXD_Del.size(); i++) {

        	rowVo = (Map) dsPD_CONTXD_Del.get(i);
			deleteCount += dao.processDELETE01(rowVo);

		}

        //DataSet의 Row Count만큼 돌면서 Insert Or Update
		for (int i = 0; i < dsPD_CONTXD.size(); i++) {

			rowVo = (Map) dsPD_CONTXD.get(i);
			rowType = (Integer) rowVo.get("ROW_TYPE");
			
			
			if (rowType == 1) {
				
				
				//제작번호생성
				String sCONT_IDXX = (String) rowVo.get("CONT_IDXX");
				
				if(sCONT_IDXX == "" || sCONT_IDXX == null){
					
					sCONT_IDXX = dao.getCONT_IDXX();
					rowVo.put("CONT_IDXX", sCONT_IDXX );
				
				}

				dao.processSAVE01(rowVo);
				
			} else if (rowType == 2) {
				
				
				updateCount += dao.processUPDATE01(rowVo);

			}
		}
		
		return deleteCount + updateCount;
	}
	
	
	/**
	 * PDMA0020 계약서 생성버튼 클릭 계약서 생성 로직 
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 int rowType = 0;
		 int iBsdiv = 0;
		 int iColFlag = 0;
		 int iCnt,iCnt2 ;
		 
		 String sCONT_NUMB = "";

		List dsPD_CONTXD  = (List) saveData.get("dsPD_CONTXD");
		
		//그룹 최대값을 설정
		for (int i = 0; i < dsPD_CONTXD.size(); i++) {
			rowVo = (Map) dsPD_CONTXD.get(i);
			
			if(rowVo.get("CHK").equals("1")){
				iBsdiv = Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS")));
				if(iColFlag < iBsdiv){
					iColFlag = iBsdiv;
				}
				
			}
		}
		
		for( iCnt =1 ; iCnt <= iColFlag; iCnt ++){
			iCnt2 = 0;
			int iAMT = 0;
			int iSumAMT = 0;
			//그룹별 계산시작
			for (int i = 0; i < dsPD_CONTXD.size(); i++) {
				rowVo = (Map) dsPD_CONTXD.get(i);
				if(rowVo.get("CHK").equals("1")){
					if(Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS"))) == iCnt){
						
						iAMT = Integer.parseInt(String.valueOf(rowVo.get("CONT_AMTX")));
						iSumAMT += iAMT;
					}
				}
			}
			
			for (int i = 0; i < dsPD_CONTXD.size(); i++) {
				rowVo = (Map) dsPD_CONTXD.get(i);
				if(rowVo.get("CHK").equals("1")){
					if(Integer.parseInt(String.valueOf(rowVo.get("RANK_TANS"))) == iCnt){
						
						if(iCnt2 == iCnt){
						}else{
							
							sCONT_NUMB = dao.getCONT_NUMB();
							
							rowVo.put("CONT_AMTX", iSumAMT);
							rowVo.put("CONT_NUMB", sCONT_NUMB );
							
							SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
							Date d = new Date();
							String date = format.format(d);
							
							rowVo.put("CONT_DATE", date );
							rowVo.put("DELI_DATE", date );
							rowVo.put("CONT_STDT", date );
							rowVo.put("CONT_EDDT", date );
							
							dao.processSAVE02(rowVo);
						
						}
						
						String sJOBN_NUMB = (String) rowVo.get("JOBN_NUMB");
						rowVo.put("CONT_NUMB", sCONT_NUMB );
						
						//제작번호가 없을경우 생성 데이터에 계약서 번호 업데이트 아닐경우 실행견적 데이터에 계약서 번호 업데이트
						if(sJOBN_NUMB == "" || sJOBN_NUMB == null || sJOBN_NUMB.equals("")){
							dao.updateCONT_NUMB(rowVo);
						}else{
							dao.updateESTI_NUMB(rowVo);
						}
						
						iCnt2 = iCnt;
						
					}
				}
			}
		}

		return deleteCount + updateCount;
	}
	
	
	
	/**
	 * 제작 계약서 관리 계약서 출력을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map saveData) throws Exception {
		 Map rowVo = null;
		 Map QUERYvo = null;
		String CONT_NUMB_QUERY = "";
		
		List dsPD_CONTXH     = (List) saveData.get("dsPD_CONTXH");  
		
		boolean sGUBUN = true;
		
       //계약서 데이터의 경우 INSERT 는 없고 UPDATE 만 가능
		for (int i = 0; i < dsPD_CONTXH.size(); i++) {
			rowVo = (Map) dsPD_CONTXH.get(i);
			
			if(rowVo.get("CHK").equals("1")){
				if(sGUBUN==true){
					CONT_NUMB_QUERY += "'"+rowVo.get("CONT_NUMB")+"'"; 
					sGUBUN = false;
				}else{
					CONT_NUMB_QUERY += ", '"+rowVo.get("CONT_NUMB")+"'"; 
				}
			}
		}
		
		System.out.println("========================>" + CONT_NUMB_QUERY);
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("CONT_NUMB_QUERY", CONT_NUMB_QUERY);
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsPD_CONTXH_RPT", dao.processPRINT00(QUERYvo));
		return returnMap;

    }

	
	/* 운영 적용*/
	 //private static final String SMTP_HOST_NAME = "smtp.nsgportal.net";
	 private static final String SMTP_HOST_NAME = "172.26.250.143";
	 private static final String SMTP_PORT = "25";
	 private static final String emailFromAddress = "produce@nscom.co.kr";
	 private static final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
	 
	/*
	 private static final String SMTP_HOST_NAME = "smtp.gmail.com";
	 private static final String SMTP_PORT = "465";
	 private static final String emailFromAddress = "jnfjnf00@gmail.com";
	 private static final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
	 */
	 
	 
	/**
	 * PDMA0020 이메일 발송
	 * @param param - 저장할 정보가 담긴 Map 객체
	 * @return 처리건수
	 * @exception Exception 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSEND00(Map saveData, Map searchVo) throws Exception{
		
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;

		 List dsPD_CONTXH     = (List) saveData.get("dsPD_CONTXH");  

		  
		 Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
		  
		 for (int i=0; i<dsPD_CONTXH.size(); i++) {
		 rowVo = (Map) dsPD_CONTXH.get(i);
			
		 //선택된 데이터를 보낸다.
		 	if(rowVo.get("CHK").equals("1")){
		 		
		 		DecimalFormat df = new DecimalFormat("#,###");
		 		
			 		//받는 사람 메일 주소
					String sendTo = (String) rowVo.get("EMAL_ADDR");
					//제목 (계약명)
					String emailSubjectTxt = (String) rowVo.get("CONT_NAME");

			 		//계약금액
			 		String sCONT_AMTX = df.format((BigDecimal)rowVo.get("CONT_AMTX"));
			 		
			 		//제작명
			 		String sJOBN_NAME = (String) rowVo.get("JOBN_NAME");
			 		//제작사명
			 		String sCUST_NAME = (String) rowVo.get("CUST_NAME");
					//계약시작일
					String sCONT_STDT = rowVo.get("CONT_STDT").toString().substring(0,4)+"년 ";
					sCONT_STDT += rowVo.get("CONT_STDT").toString().substring(4,6)+"월 ";
					sCONT_STDT += rowVo.get("CONT_STDT").toString().substring(6,8)+"일 ";
					
					//계약종료일
					String sCONT_EDDT = rowVo.get("CONT_EDDT").toString().substring(0,4)+"년 ";
					sCONT_EDDT += rowVo.get("CONT_EDDT").toString().substring(4,6)+"월 ";
					sCONT_EDDT += rowVo.get("CONT_EDDT").toString().substring(6,8)+"일 ";
					
				
					String emailMsgTxt ="";
					
					emailMsgTxt += "<html>";
					emailMsgTxt += "<head></head>";
					emailMsgTxt += "<body>";
					emailMsgTxt += "<table>";
					emailMsgTxt += "<tr><td colspan=2><strong><font size='4'>농심기획 제작 계약서 발송 알림</font></strong></td></tr>";
					emailMsgTxt += "   <tr><td><font face='굴림'>- 제   작   명 : </font></td><td style='text-align:right'>" + sJOBN_NAME + "</td></tr>";
					emailMsgTxt += "   <tr><td><font face='굴림'>- 제 작 사 명 : </font></td><td style='text-align:right'>" + sCUST_NAME + "</td></tr>";
					emailMsgTxt += "   <tr><td><font face='굴림'>- 계 약 기 간 : </font></td><td style='text-align:right'>" + sCONT_STDT + "~" + sCONT_EDDT + "</td></tr>";
					emailMsgTxt += "   <tr><td><font face='굴림'>- 계 약 금 액 : </font></td><td style='text-align:right'>" + sCONT_AMTX + " 원</td></tr>";
					emailMsgTxt += "   <tr><td colspan='2'><br>*. 첨부된 계약서 원본을 참고 하시기 바랍니다. </td></tr>";
					emailMsgTxt += "   <tr><td colspan=2><br> <font color='red'>- 본 메일은 발신 전용 입니다. -</font><br><br></td></tr>";
					emailMsgTxt += "  </table>";
					emailMsgTxt += "</body>";
					emailMsgTxt += "</html>";
					
					System.out.println("===========================>" + emailMsgTxt);
					
					//가져갈 PDF 파일
					String DROP_FILE = (String) rowVo.get("DROP_FILE");
					 
				  new PDMA0020ServiceImpl().sendSSLMessage(sendTo, emailSubjectTxt, emailMsgTxt, emailFromAddress,DROP_FILE);
				  System.out.println("Sucessfully Sent mail to All Users");

				  
				  //=======================================> 메일발송 상태 변경
				  System.out.println("===============>" + searchVo.get("CONT_TYPE"));
				  System.out.println("===============>" + (String) rowVo.get("SEND_FLAG")); 
				  
				  
				  String sSEND_FLAG  = (String) rowVo.get("SEND_FLAG");
				  String sCONT_TYPE = searchVo.get("CONT_TYPE").toString();
				  
				  //미발송상태 기본계약서 발송 
				  if(sSEND_FLAG.equals("0") && sCONT_TYPE.equals("0")){
					  rowVo.put("SEND_FLAG", "1");
					  dao.processUPDATE02(rowVo);
					
				//미발송상태 개별계약서 발송 
				  }else if(sSEND_FLAG.equals("0") && sCONT_TYPE.equals("1")){
					  rowVo.put("SEND_FLAG", "2");
					  dao.processUPDATE02(rowVo);
					  
				//기본발송상태  개별계약서 발송  == 발송완료 
				  }else if(sSEND_FLAG.equals("1") && sCONT_TYPE.equals("1")){
					  rowVo.put("SEND_FLAG", "3");
					  dao.processUPDATE02(rowVo);
					  
					//개별발송상태  기본계약서 발송  == 발송완료 
				  }else if(sSEND_FLAG.equals("2") && sCONT_TYPE.equals("0")){
					  rowVo.put("SEND_FLAG", "3");
					  dao.processUPDATE02(rowVo);
				  }
				  
				  //=======================================> 메일발송 상태 변경
			
			  }
		  
		  }
		
		  return deleteCount + updateCount;
	}
	
	
	 public void sendSSLMessage(String recipients, String subject,
			 String message, String from, String DROP_FILE) throws MessagingException, UnsupportedEncodingException {
			  boolean debug = true;
			 
			  Properties props = new Properties();
			  props.put("mail.smtp.host", SMTP_HOST_NAME);
			  props.put("mail.smtp.auth", "true");
			  props.put("mail.debug", "true");
			  //props.put("mail.smtp.port", SMTP_PORT);
			  //props.put("mail.smtp.socketFactory.port", SMTP_PORT);
			  //props.put("mail.smtp.socketFactory.class", SSL_FACTORY);
			  //props.put("mail.smtp.socketFactory.fallback", "false");
			 
			  Session session = Session.getDefaultInstance(props,
			   new javax.mail.Authenticator() {
			 
				 
			    protected PasswordAuthentication getPasswordAuthentication() {
			    	//운영 계정
			     return new PasswordAuthentication("produce@nscom.co.kr", "produce8926");
			     //return new PasswordAuthentication("jnfjnf00", "jnfjnf123");
			    }
			   }
			  );
			 
			  session.setDebug(debug);
			 
			  Message msg = new MimeMessage(session);
			  InternetAddress addressFrom = new InternetAddress(from);
			  msg.setFrom(addressFrom);
			  
			  InternetAddress addressTo = new InternetAddress(recipients);
			  msg.setRecipient(Message.RecipientType.TO, addressTo);
			 
			  // Setting the Subject and Content Type
			  msg.setSubject(subject);
			   
			  //msg.setContent(message, "text/plain;charset=KSC5601");
			  //Transport.send(msg);
			   
			  /* 텍스트와 첨부파일을 함께 전송하는 경우에는 위의 2라인을 제거하고 아래의 모든 라인을 추가한다.*/
			  // Create the message part
			  BodyPart messageBodyPart = new MimeBodyPart();
			  
			  // Fill the message
			  messageBodyPart.setText(message);
			  messageBodyPart.setContent(message,"text/html;charset=KSC5601");
			  Multipart multipart = new MimeMultipart();
			  multipart.addBodyPart(messageBodyPart);
			  
			  System.out.println("===!!!" + DROP_FILE);
			  // Part two is attachment
			  messageBodyPart = new MimeBodyPart();

			  File file = new File("/nscomwas/tomcat7/webapps/ROOT/ubireport/pdfFile/" + DROP_FILE + ".pdf");
			  //File file = new File("D:/Java_Project/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp2/wtpwebapps/NSCOM_MIS/ubireport/pdfFile/" + DROP_FILE + ".pdf");
			  
			  FileDataSource fds = new FileDataSource(file);
			  messageBodyPart.setDataHandler(new DataHandler(fds));
			 
			  String fileName = fds.getName(); // 한글파일명은 영문으로 인코딩해야 첨부가 된다.
			  fileName = new String(fileName.getBytes("KSC5601"), "8859_1");
			  messageBodyPart.setFileName(fileName);
			  			 
			  multipart.addBodyPart(messageBodyPart);
			  
			  // Put parts in message
			  msg.setContent(multipart);
			  
			  // Send the message
			  Transport.send(msg);
			  
			  System.out.println("E-mail successfully sent!!");
			 }
	
}
