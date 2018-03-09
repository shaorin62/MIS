package core.erp.gw.service.impl;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.gw.model.Message;
import core.erp.gw.service.ApprovalService;
import core.erp.gw.util.ComUtil;
import core.erp.gw.util.NdsMessageException;
import core.ifw.utl.CoreProperties;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ApprovalServiceImpl - HR >> GW
 *  결재문서 상신/삭제(연동문서함:임시저장함)
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
@Service("ApprovalService")
public class ApprovalServiceImpl extends EgovAbstractServiceImpl implements ApprovalService {

	/** Logger init. */
	private static final Logger logger = LoggerFactory.getLogger(ApprovalServiceImpl.class);
	
	@Resource(name = "ApprovalDao")
	private ApprovalDao dao;
	
	@SuppressWarnings("rawtypes")
	public void sendApprovalData(Map saveData) throws Exception
	{
	
		Message	message = null;		
		String docKey []; 
		Map approvalMap = null;
		
//DataSet Approval Info. [documentType  documentID recipient documentStatus HtmlDocument subject creator isUsedFile]
		List approval = (List) saveData.get("dsTM_APPROVAL");
				
		approvalMap = (Map) approval.get(0);
		
//resources/core/config/CoreConfig.properties
		String sGwServer 		= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.gw_server"));
		String sGwPort 			= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.gw_port"));
		String sGwStartUrl 		= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.gw_starturl"));
		String sGwOpenUrl 		= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.gw_openurl"));
		String sCreateSystem 	= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.createSystem"));
		String sCmpID			= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.cmpID"));
		String sCmd 			= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.cmd"));
		String sEncode			= ComUtil.IsNull(CoreProperties.getProperty("CoreERP.approval.encode"));
 
	    String sJobID 			= (String)approvalMap.get("documentType");
		String sDocID 			= (String)approvalMap.get("documentID");  
		String sUserID 			= (String)approvalMap.get("recipient");
		String sProtID 			= (String)approvalMap.get("documentStatus");
		String sIsUsedFile		= (String)approvalMap.get("isUsedFile");
				
		approvalMap.put("createSystem", sCreateSystem);
		approval.add(0,approvalMap);
	    
		String sConnStr			= "";
	 
//documentType을 document_ID 와 appl_date_seq로 분리한다.
		docKey = ComUtil.getTokenArray(sDocID, "-");
	 
//RuntimeException
		if ("".equals(docKey[0]))   throw new NdsMessageException("그룹웨어 결재서식코드가 없습니다!");
		if ("".equals(sGwServer))   throw new NdsMessageException("그룹웨어 서버를 등록하세요!");
		if ("".equals(sGwPort))     throw new NdsMessageException("그룹웨어 포트를 등록하세요!");
		if ("".equals(sGwStartUrl)) throw new NdsMessageException("그룹웨어 시작URL을 등록하세요!");
		if ("".equals(sGwOpenUrl))  throw new NdsMessageException("그룹웨어 Open URL을 등록하세요!");
		if ("".equals(sCmpID))  	throw new NdsMessageException("그룹웨어 회사코드를 등록하세요!");
		if ("".equals(sCmd))  		throw new NdsMessageException("그룹웨어 CMD를 등록하세요!");
	    
		URL url = null;
		
		if (sProtID.equals("deleteDoc")) //결재문서 삭제(연동문서함:임시저장함)
		{
			url = new URL( "http", sGwServer, Integer.parseInt(sGwPort), sGwOpenUrl );
			sCmd = "goNsDeleteDoc";
		} else {
			url    	= new URL( "http", sGwServer, Integer.parseInt(sGwPort), sGwStartUrl );
		}
		
	 	HttpURLConnection urlConn = (HttpURLConnection)url.openConnection(); 
  
        urlConn.setRequestMethod("POST");  
        urlConn.setDoInput(true);  
        urlConn.setDoOutput(true);  
        urlConn.setUseCaches(false);   
        
        sConnStr  =	"protID="+URLEncoder.encode(sProtID, sEncode);  	 
        sConnStr +=	"&jobID="+URLEncoder.encode(sJobID, sEncode); 
        sConnStr +=	"&userID="+URLEncoder.encode(sUserID, sEncode);  
        sConnStr +=	"&docID="+URLEncoder.encode(sDocID, sEncode);
        sConnStr +=	"&cmpID="+URLEncoder.encode(sCmpID, sEncode);
        sConnStr +=	"&cmd="+URLEncoder.encode(sCmd, sEncode);
        
//결재 상신 XML SET
        if(sProtID.equals("createDoc")) 
        {	
        	//첨부 파일 존재
        	if("T".equals(sIsUsedFile))
        	{
        		//DataSet Approval File Info. (FILE_NM FILE_PATH FILE_ID)
        		List file = (List) saveData.get("dsTM_APPROVAL_FILE");
        		
        		logger.info("APPROVAL file size : " + file.size());    		
    			
        		//파일 규격 제공 시 ComUtil.java 수정 필요
        		sConnStr +=	"&Document=" + URLEncoder.encode(ComUtil.replaceTag(ComUtil.makeGwXmlFile(approval, file)),sEncode);
        	
        	} else {
        		sConnStr +=	"&Document=" + URLEncoder.encode(ComUtil.replaceTag(ComUtil.makeGwXml(approval)),sEncode);
        	}
        }
        
        logger.info("GW urlConn info : " + sConnStr);
                		
        DataOutputStream dos = new DataOutputStream(urlConn.getOutputStream());  
        
        dos.writeBytes(sConnStr);  
        dos.flush();  
        dos.close();  
        dos = null;
		
        int responseCode = urlConn.getResponseCode();         
         
        if ( responseCode == HttpURLConnection.HTTP_OK ) 
        {
        	 
        	message = (Message)ComUtil.getXmlData(urlConn.getInputStream(), Message.class.getCanonicalName()); 

			/** 
			 * 	N : 결재 상신 전, HR 임시저장
			 *	T : 결재 상신 후, 연동문서함에 있는 상태 
			 *	P : 결재 진행
			 *	R : 결재 반려
			 *	Y : 결재완료
			 */       	
     		if (message != null && message.getCode().equals("0")) 
     		{
     			
//결재 상태값 처리    			
     			String docState = "T";
         			
         		if (sProtID.equals("deleteDoc"))
         		{
         			docState = "N";
         		} else {
         			docState = "T";
         		}
         			
         		message.setGwServer(sGwServer);
         		message.setGwPort(sGwPort);
         		message.setGwOpenUrl(sGwOpenUrl);
         		message.setJobID(sJobID);
         		message.setDocID(sDocID);
         		message.setCmd(sCmd);
         		message.setUserID(sUserID);

//각 업무별 테이블에 결재 상태값 UPDATE :: resources/core/config/CoreConfig.properties     		
         		Map<String, Object> paramMap = new HashMap<String, Object>();         			
         		paramMap.put("TABLE_NM", CoreProperties.getProperty("CoreERP.approval.TB_"+docKey[0].substring(0,3)));
         		paramMap.put("DOCUMENT_ID", docKey[0]);
         		paramMap.put("APPR_SEQ", docKey[1]);
         		paramMap.put("APPR_STATE", docState);
	         			
//결재상태 업데이트     				
       			dao.processUPDATE00(paramMap);
         		

     		} else {
         		throw new NdsMessageException(message.getMessage());
         	} 
		       
        } else {
        	throw new NdsMessageException(urlConn.getResponseMessage());
        } 
        urlConn.disconnect();
        urlConn = null;
	}
}//end class