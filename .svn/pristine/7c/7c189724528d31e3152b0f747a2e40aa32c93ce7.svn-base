/**
 * core.erp.mdm.service.impl.MACA0010ServiceImpl.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;


import java.text.SimpleDateFormat;
import java.util.HashMap; 
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ibm.icu.text.DecimalFormat;

import core.erp.mac.service.MACA0010Service;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.security.Security;
import java.util.Properties;
 






import javax.activation.DataHandler;
import javax.activation.FileDataSource;
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


/**
 * <pre>
 *	MACA0010ServiceImpl - 회계 입금표 서비스 인터페이스 구현 클래스
 * </pre>
 *
 * @author	최제현
 * @since	2016.10.21
 * @version	1.0
 * @see		{@link MACA0010Service}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Service("MACA0010Service")
public class MACA0010ServiceImpl extends EgovAbstractServiceImpl implements MACA0010Service {

	/**
	 * 회계입금표 DAO class inject.
	 */
	@Resource(name = "MACA0010Dao")
	private MACA0010Dao dao;

	/**
	 * 회계입금표 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 회계입금표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsMD_DPTBXM", dao.processSEARCH00(searchVo));
		return returnMap;

    }
	
	/**
	 * 매체사 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 회계입금표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("dsAUTO_NAME", dao.processSEARCH01(searchVo));
		return returnMap;

    }
	
	/**
	 * 공통코드마스터 목록을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		Map rowVo = null;
		String sCUST_CODE = "";
		
		List dsMD_CUST_MAIL     = (List) saveData.get("dsMD_CUST_MAIL");
		int iCNT = 0;
		iCNT = dsMD_CUST_MAIL.size();
		
		for (int i = 0; i < dsMD_CUST_MAIL.size(); i++) {

			rowVo = (Map) dsMD_CUST_MAIL.get(i);
			
			if(iCNT == i + 1){
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "'";
			}else{
				sCUST_CODE += "'" + (String) rowVo.get("CUST_CODE") + "',";
			}
			
		}
		
		returnMap.put("dsMD_CUST_MAIL", dao.processSEARCH02(sCUST_CODE));
	
		return returnMap;

    }
	
	/**
	 * 입금표 출력을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 회계입금표 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo,Map saveData) throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		Map rowVo = null;
		Map QUERYvo = null;
		String IDXX_SEQX_QUERY = "";
		String YEAR_MNTH = null;
		
		List dsMD_DPTBXM   = (List) saveData.get("dsMD_DPTBXM");  
		
		for(int i=0 ; i < dsMD_DPTBXM.size() ; i++){
			rowVo = (Map) dsMD_DPTBXM.get(i);
			if(i==0){
				IDXX_SEQX_QUERY += "'"+rowVo.get("IDXX_SEQX")+"'"; 
			}else{
				IDXX_SEQX_QUERY += ", '"+rowVo.get("IDXX_SEQX")+"'"; 
			}
			YEAR_MNTH = (String)rowVo.get("YEAR_MNTH");
		}
		
		QUERYvo  = new HashMap<String, String>();
		QUERYvo.put("IDXX_SEQX_QUERY", IDXX_SEQX_QUERY);
		QUERYvo.put("YEAR_MNTH", YEAR_MNTH);
		
		returnMap.put("dsMD_DPTBXM_RPT", dao.processPRINT00(QUERYvo));
		return returnMap;

    }
	
	
	 //private static final String SMTP_HOST_NAME = "smtp.nsgportal.net";
	 private static final String SMTP_HOST_NAME = "172.26.250.143";
	 private static final String SMTP_PORT = "25";
	 private static final String emailFromAddress = "etax@nscom.co.kr";
	 //private static final String emailFromAddress = "jnfjnf00@gmail.com";
	 private static final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
	 	 
	
	/**
	 * 입금표 이메일 발송
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEND00(Map saveData,Map searchVo) throws Exception {
		
		Map rowVo = null;
		List dsMD_DPTBXM   = (List) saveData.get("dsMD_DPTBXM");  
		String COMI_FILD = null;
		String COMI_VAT = null;
		String COMI_SUM = null;
		String CREA_DATE = null;
		
		Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
		
		//보낼 메일 주소를 담는다.
		String[] sendTo = new String[dsMD_DPTBXM.size()];
		//제목을 담는다.
		String[] emailSubjectTxt = new String[dsMD_DPTBXM.size()];
		//내용을 담는다.
		String[] emailMsgTxt = new String[dsMD_DPTBXM.size()];
		//보낼 파일명을 담는다.
		String[] FileName = new String[dsMD_DPTBXM.size()];
		
		for(int i=0 ; i < dsMD_DPTBXM.size() ; i++){
			rowVo = (Map) dsMD_DPTBXM.get(i);
			if(rowVo.get("CHEK_FILD").toString().equals("1")){
				sendTo[i] = (String) rowVo.get("MELT_MLAD");
				emailSubjectTxt[i] = (String) rowVo.get("MEDX_NAME")+" 입금표입니다.";
				
				//들어갈 데이터 포맷 정리(금액)
				DecimalFormat df = new DecimalFormat("#,###");
				COMI_FILD = df.format((BigDecimal)rowVo.get("COMI_FILD"));
				COMI_VAT = df.format((BigDecimal)rowVo.get("COMI_VAT"));
				COMI_SUM = df.format((BigDecimal)rowVo.get("COMI_SUM"));
				//날짜형식
				CREA_DATE = searchVo.get("CREA_DATE").toString().substring(0,4)+"년 ";
				CREA_DATE += searchVo.get("CREA_DATE").toString().substring(4,6)+"월 ";
				CREA_DATE += searchVo.get("CREA_DATE").toString().substring(6,8)+"일 ";
				
				emailMsgTxt[i] = "<html><head><title></title></head>"+
									     " <body>"+
									     "  <table>";
				emailMsgTxt[i] += "   <tr><td colspan='2'><strong>농심기획 입금표 발행 알림</strong></td></tr>";
				emailMsgTxt[i] += "   <tr><td><br> 입 금 내 용 : </td><td><br> " + (String) rowVo.get("MEMO_FILD") + "</td></tr>";
				emailMsgTxt[i] += "   <tr><td> 공급받는자 : </td><td> " + (String) rowVo.get("MEDX_NAME") + "</td></tr>";
				emailMsgTxt[i] += "   <tr><td> 작 성 일 자 : </td><td style='text-align:right'>" + CREA_DATE + "</td></tr>";
				emailMsgTxt[i] += "   <tr><td> 금&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액 : </td><td style='text-align:right'>" +  COMI_FILD + " 원</td></tr>";
				emailMsgTxt[i] += "   <tr><td> 부 가 세 액 : </td><td style='text-align:right'>" + COMI_VAT + " 원</td></tr>";
				emailMsgTxt[i] += "   <tr><td> 합 계 금 액 : </td><td style='text-align:right'>" + COMI_SUM + " 원</td></tr>";
				emailMsgTxt[i] += "   <tr><td colspan='2'><br>문의사항은 02) 820-8914 로 연락바랍니다.</td></tr>";
				emailMsgTxt[i] += "   <tr><td colspan='2'>감사합니다.</td></tr>";
				emailMsgTxt[i] += "  </table></body></html>";
				
				FileName[i] = (String) rowVo.get("FILE_NAME");
				
				new MACA0010ServiceImpl().sendSSLMessage(sendTo[i], emailSubjectTxt[i], emailMsgTxt[i], emailFromAddress,FileName[i]);
				
				dao.processSEND00(rowVo);
			}
		}

		System.out.println("Sucessfully Sent mail to All Users");

		return 0;

    }
	
	 public void sendSSLMessage(String recipients, String subject,
			 String message, String from, String FileName) throws MessagingException, UnsupportedEncodingException {
		 	
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
			     return new PasswordAuthentication("etax@nscom.co.kr", "etax8914");
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
			 
			  msg.setSubject(subject);
			   
			  BodyPart messageBodyPart = new MimeBodyPart();
			  
			  // Fill the message
			  messageBodyPart.setContent(message,"text/html;charset=KSC5601");
			  Multipart multipart = new MimeMultipart();
			  multipart.addBodyPart(messageBodyPart);
			  
			  // Part two is attachment
			  messageBodyPart = new MimeBodyPart();
			  
			  //로컬
			  //File file = new File("D:/Java_Project/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp2/wtpwebapps/NSCOM_MIS/ubireport/pdfFile/"+FileName+".pdf");
			  //운영
			  File file = new File("/nscomwas/tomcat7/webapps/ROOT/ubireport/pdfFile/"+FileName+".pdf");
			  
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