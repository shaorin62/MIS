package core.ifw.utl;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SendEmail {

	private static final Logger logger = LoggerFactory.getLogger(SendEmail.class);	
    /**
     * 내부 메일 발송.
     * @param (Map) dsMail 내부 메일 전송 항목{받는사람, 보내는사람, 제목, 내용}
     * @return 
     * @throws IOException
     */
	public static void innerMail(Map dsMail) throws Exception {
		
		try {
			String url = CoreProperties.getProperty("CoreERP.mail.inner");

//			String param = "FLAG="+"1";
//					param += "&RID=" +dsMail.get("Receiver");//받는사람 이메일
//					param += "&SID=" +dsMail.get("Sender");//보내는사람 이메일
//					param += "&TIT=" +dsMail.get("Subject");//제목
//					param += "&BODY="+dsMail.get("Contents");//내용
//					param += "&ALRT="+"1";

			//메일발송
			sendEmail(url, dsMail, "in");
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.warn("예외 발생");
			
		}

	}

    /**
     * 외부메일 발송.
     * @param (Map) dsMail 외부 메일 전송 항목{보내는 사람명, 보내는 사람이메일, 받는사람 이메일 제목, 내용}
     * @return 
     * @throws IOException
     */
	public static void outerMail(Map dsMail) throws Exception {
		
		try {
			String url = CoreProperties.getProperty("CoreERP.mail.outer");
			
//			String param = "senderName="+dsMail.get("SenderName");//보내는사람명
//					param += "&sender=" +dsMail.get("Sender");//보내는사람 이메일
//					param += "&to="     +dsMail.get("Receiver");//받는사람 이메일
//					param += "&subject="+dsMail.get("Subject");//제목
//					param += "&body="   +dsMail.get("Contents");//내용
//							
//					param += "&send_type="+"no_save_now";       //보낸편지함에 저장여부(no_save_now, save)
//					param += "&confirm_type="+"no_save_now";    //수신확인 저장여부(no_save_now, save)
//					param += "&x_priority="+"1";                //메일 중요도: 1(중요메일), 3(보통메일), 5(낮음)
//					param += "&return_url_forward="+"1";        //필요없는 파라메터 (사용안됨)
//					param += "&return_url_direct="+"1";         //메일 발송 후 return될 페이지 URL		
			
			//메일발송
			sendEmail(url, dsMail, "out");
			 

		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.warn("예외 발생");
			
		}
			
	}
	
    /**
     * 메일 발송.
     * @param url(메일발송 URL), param(전송할 메일 param)
     * @return 
     * @throws IOException
     */
	public static void sendEmail(String url, Map param, String inout) throws IOException {
		
		PostMethod httppost = null;
		GetMethod httpget = null; 
		try{
			
			HttpClient httpclient = new HttpClient();
	    	httpclient.getParams().setParameter("http.protocol.content-charset", "utf-8");
	    	httpclient.getHttpConnectionManager().getParams().setConnectionTimeout(5 * 1000);
	    	httpclient.getHttpConnectionManager().getParams().setSoTimeout(5 * 1000);
	    	StringBuffer surl = new StringBuffer();
	    	surl.append(url);
	    	httppost = new PostMethod(surl.toString());
			
			if (inout.equals("out")) {
				httppost.addParameter("senderName", URLEncoder.encode(param.get("SenderName").toString(),"utf-8"));
				httppost.addParameter("sender", "master@ktcu.or.kr");
				httppost.addParameter("subject", URLEncoder.encode(param.get("Subject").toString(), "utf-8"));
				httppost.addParameter("body",URLEncoder.encode(param.get("Contents").toString(), "utf-8"));
				httppost.addParameter("to", param.get("Receiver").toString());
	    	} else {

				httppost.addParameter("FLAG", "1");
				httppost.addParameter("RID", param.get("Receiver").toString());
				httppost.addParameter("SID", param.get("Sender").toString());
				httppost.addParameter("TIT",  param.get("Subject") == null ? (param.get("SUBJECT") == null ? "" : param.get("SUBJECT").toString()) : param.get("Subject").toString());
				httppost.addParameter("BODY", param.get("Contents").toString());	
				httppost.addParameter("ALRT", "1"); 

			}

	    	int code = httpclient.executeMethod(httppost);
	    	
		}catch(Exception e){
			logger.warn(e.getMessage());
    	} finally {
    		if(null != httppost) 
    			httppost.releaseConnection();
    	}		
		
	}
}
