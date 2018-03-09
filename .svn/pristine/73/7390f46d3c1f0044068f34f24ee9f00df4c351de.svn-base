package core.erp.gw.util;

import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringReader;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletResponse;

import org.jdom.Attribute;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.jdom.output.XMLOutputter;

import core.erp.gw.model.Approval;
import core.erp.gw.model.GwExtInfo;
import core.erp.gw.model.Type;
import core.ifw.utl.CoreProperties;

/**
 * <pre>
 *	ComUtil - 결재 정보를 처리
 * </pre>
 * 
 * @author	
 * @since	2016. 08. 25
 * @version	1.0
 * 
 */
public class ComUtil {
	
	public static boolean gbCurr = false;
	public static int seqNo = 0;

	@SuppressWarnings("unchecked")
	private static Approval nodeParser(Element p_el, Object valueObj, Field[] fields) throws Exception 
	{
		List list = p_el.getChildren();
		Iterator it = list.iterator();
		
		while(it.hasNext()) {
			Element e = (Element)it.next();
			List att = e.getAttributes();
			if (att.size() != 0) {
				Iterator i = att.iterator();
	    
				while(i.hasNext()) {
					Attribute at = (Attribute)i.next();		//Attribute 파싱
			 	}
			}
			
			List li = e.getChildren();
			if (li.size() > 0) {
				nodeParser(e, valueObj, fields); 			//recursive call
			} else {
				if (!e.getValue().trim().equals("")) {  	//노드의 값이 있는 경우에만 출력
					ComUtil.setClassSetter(valueObj, fields, e.getParentElement().getName(), e.getName(), e.getValue());
				}
			}
		}
		return null;
	}
	
	public static Object getXmlData(InputStream in, String sClass) throws Exception {
 
		SAXBuilder builder = new SAXBuilder();
		Document doc = null; 
		doc = builder.build(in); 
		Field[] fields = Class.forName(sClass).getDeclaredFields();
		Object valueObj = Class.forName(sClass).newInstance();
		  
		Element root = doc.getRootElement();
		gbCurr = false;
		nodeParser(root, valueObj, fields); 
		return valueObj;
	}	
	
	/**
	 * 결재상신 XML 데이터 생성
	 * @param approval
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")	
	public static String makeGwXml(List<Map<String, Object>> approval) throws Exception { 
	   Document doc = new SAXBuilder().build(new StringReader(getEmptyXml()));
       XMLOutputter outputter = new XMLOutputter(); 
       Element root_el = doc.getRootElement();        
       parseGwXml(root_el , approval); 
       return outputter.outputString(doc);
	}
	
	/**
	 * 결재상신 XML 데이터 생성 (파일 존재)
	 * @param approval
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public static String makeGwXmlFile(List<Map<String, Object>> approval, List<Map<String, Object>> file) throws Exception { 
	   seqNo = 0;
	   Document doc = new SAXBuilder().build(new StringReader(getEmptyXmlFile(file.size())));
       XMLOutputter outputter = new XMLOutputter(); 
       Element root_el = doc.getRootElement();        
       parseGwXmlFile(root_el , approval, file,"parent");
       return outputter.outputString(doc);
	}
	
	/**
	 * 결재상신 XML 데이터 세팅
	 * @param el
	 * @param approval
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")	
	public static void parseGwXml(Element el ,  List<Map<String, Object>> approval) throws Exception { 
		List list   = el.getChildren();
		Iterator it = list.iterator();
		
		Map<String, ?> rec = (Map<String, ?>) approval.get(0); 
	    while(it.hasNext()) {
			Element e = (Element)it.next();
			List li = e.getChildren();
			if (li.size() > 0) {
				if(e.getName().equals("work")) {  
					e.addContent(ComUtil.gwKindGubn((String)rec.get("HtmlDocument"),(String)rec.get("documentType")));
			 	}
				parseGwXml(e, approval);  
			} else {  
    	        Iterator<String> itKey = rec.keySet().iterator();
    	        while (itKey.hasNext()) {
    	            String sKey = itKey.next();
    	            if(e.getName().equals(sKey)) {
						e.setText("<![CDATA[" +(String)rec.get(sKey)+"]]>");
					} else if(e.getName().equals("createTime") || e.getName().equals("modifiedTime")) {
						e.setText(ComUtil.toFormatedString("yyyy/MM/dd hh:mm:ss"));
					} else if(e.getName().equals("job_name")) {
						e.setText("<![CDATA[" + (String)rec.get("subject") +"]]>");
					} else if(e.getName().equals("createSystem")) {
						e.setText((String)rec.get("createSystem"));
					}
    	        } 
			}
		} 
	} 
	
	/**
	 * 결재상신 XML 데이터 세팅 (파일 존재)
	 * @param el
	 * @param approval
	 * @param file
	 * @param pk_name
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")	
	public static void parseGwXmlFile(Element el ,  List<Map<String, Object>> approval,  List<Map<String, Object>> file, String pk_name) throws Exception { 
		List list   = el.getChildren();
		Iterator it = list.iterator();
		
		Map<String, ?> rec = (Map<String, ?>) approval.get(0);
		
		int i = 0;
		int seq = 0;
		
		if(file.size() != 0) {
			for(Map<String, Object> map : file) {
				map.put("SEQ", i);
				i = i + 1;
			}
		}
		
	    while(it.hasNext()) {
			Element e = (Element)it.next();
			List li = e.getChildren();
			
			if (li.size() > 0) {
				if(e.getName().equals("work")) {  
					e.addContent(ComUtil.gwKindGubn((String)rec.get("HtmlDocument"),(String)rec.get("documentType")));
			 	}
				parseGwXmlFile(e, approval, file, "child");
			} else {  
				Iterator<String> itKey = rec.keySet().iterator();
    	        while (itKey.hasNext()) {
    	            String sKey = itKey.next();
    	            if(e.getName().equals(sKey)) {
						e.setText("<![CDATA[" +(String)rec.get(sKey)+"]]>");
					} else if(e.getName().equals("createTime") || e.getName().equals("modifiedTime")) {
						e.setText(ComUtil.toFormatedString("yyyy/MM/dd hh:mm:ss"));
					} else if(e.getName().equals("job_name")) {
						e.setText("<![CDATA[" + (String)rec.get("subject") +"]]>");
					} else if(e.getName().equals("createSystem")) {
						e.setText((String)rec.get("createSystem"));
					}
    	        }
    	        String file_path = "";
    	        if(file.size() != 0) {
	    	        if(e.getName().equals("name")) {
	    	        	for(Map<String, Object> map : file) 
	    	        	{	
	    	        		seq = (Integer)map.get("SEQ");
							
							if(seq == seqNo){
								System.out.println("file_name : " + map.get("FILE_NM"));
								e.setText((String)map.get("FILE_NM"));
							}
						}
	    	        } else if(e.getName().equals("url")) {
	    	        	for(Map<String, Object> map : file)
	    	        	{
							seq = (Integer)map.get("SEQ");

							file_path = CoreProperties.getProperty("CoreERP.approval.attchUrl");
													
							if(seq == seqNo){
								//file_path = file_path + (String)map.get("FILE_ID");
								file_path = file_path + (String)map.get("FILE_PATH") + "/" + (String)map.get("FILE_NM");
								System.out.println("file_path : " + file_path);
								e.setText("<![CDATA["+file_path+"]]>");								
							}
						}
	    	        	seqNo = seqNo+1;
	    	        }
    	        } //end file
			}
		}//end while
	}//end   
	
	@SuppressWarnings("unchecked")	
	public static void setClassSetter(Object valueObj, Field[] fields, String sParent, String sNode, String sData) throws Exception {
		String columnName = "";
		String newColumnName = "";		
		Method method = null;
	
		for (int i=0; i<fields.length; i++) {
			columnName = fields[i].getName();
			
			if (sParent.equals("ExtNFSancLineInfo") || (!gbCurr && sParent.equals("person"))) {		
				if (sParent.equals("ExtNFSancLineInfo")) gbCurr = false;
				newColumnName = "List";
				try {
					method = valueObj.getClass().getMethod("set" + newColumnName, new Class[] { String.class, String.class });
					if (method != null && sNode != null && !sNode.equals("")) {
						method.invoke(valueObj, new Object[] { new String(sNode == null ? "" : sNode), new String(sData == null ? "" : sData)});
						return;
					}
				} catch (Exception e) {
					e.printStackTrace();
					continue;
				}
			} else if (sParent.equals("CurrentNFSancLineInfo") || (gbCurr && sParent.equals("person"))) {				
				if (!("curr_" + sNode).toLowerCase().equals(columnName.toLowerCase())) continue;
				if (sParent.equals("CurrentNFSancLineInfo")) gbCurr = true;

				newColumnName = columnName.substring(0, 1).toUpperCase() + columnName.substring(1);
				try {
					method = valueObj.getClass().getMethod("set" + newColumnName, new Class[] { String.class });
					if (method != null) {
						method.invoke(valueObj, new Object[] { new String(sData == null ? "" : sData)});
						return;
					}
				} catch (Exception e) {
					continue;
				}
			} else {
				if (!sNode.toLowerCase().equals(columnName.toLowerCase())) continue;

				newColumnName = columnName.substring(0, 1).toUpperCase() + columnName.substring(1);
				try {
					method = valueObj.getClass().getMethod("set" + newColumnName, new Class[] { String.class });
					if (method != null) {
						method.invoke(valueObj, new Object[] { new String(sData == null ? "" : sData)});
						return;
					}
				} catch (Exception e) {
					continue;
				}
			}
		}		
	}

	/**
	 * 결재상신 empty xml
	 * @return
	 */
	public static String getEmptyXml() { 

		String sDocument = "<?xml version='1.0' encoding='UTF-8'?> 							\n";
		   	   sDocument += "<exchangeableDocument>  										\n";
		   	   sDocument += "<documentInformation>  										\n";
		   	   sDocument += "    <documentType></documentType>  							\n";
			   sDocument += "    <documentID></documentID>  								\n";
			   sDocument += "    <createTime></createTime>  								\n";
			   sDocument += "    <modifiedTime></modifiedTime>  							\n";
			   sDocument += "    <createSystem></createSystem> 								\n";
			   sDocument += "    <createServer></createServer>  							\n";
			   sDocument += "    <gccOrganizationCode></gccOrganizationCode>  				\n";
			   sDocument += "    <creator></creator>  										\n";
			   sDocument += "    <subject></subject>  										\n";
			   sDocument += "</documentInformation>  										\n";
			   sDocument += "<processInformation>  											\n";
			   sDocument += "    <destinationSystem>SmartFlow XF</destinationSystem>  		\n";
			   sDocument += "    <recipient></recipient>  									\n";
			   sDocument += "    <documentStatus></documentStatus>  						\n";
			   sDocument += "    <workflow></workflow>  									\n";
			   sDocument += "</processInformation>	  										\n";
			   sDocument += "<documentDescription>	  										\n";	
			   sDocument += "     <work>  													\n";
			   sDocument += "              <work_manage>  									\n";
			   sDocument += "                       <job_name></job_name>  					\n";
			   sDocument += "              </work_manage>  									\n";
			   sDocument += "              <work_ref></work_ref>  							\n"; 
			   sDocument += "       </work>  												\n";
			   sDocument += "</documentDescription>	  										\n";
			   sDocument += "<documentBody></documentBody>  								\n";
			   sDocument += "<attachments></attachments>  									\n"; 
			   sDocument += "</exchangeableDocument>    									\n";
	    
			   return sDocument;
	}
	
	/**
	 * 결재상신 empty xml (파일 존재)
	 * @return
	 */
	public static String getEmptyXmlFile(int cnt) { 
		
		String sDocument = "<?xml version='1.0' encoding='UTF-8'?> 							\n";
		   	   sDocument += "<exchangeableDocument>  										\n";
		   	   sDocument += "<documentInformation>  										\n";
		   	   sDocument += "    <documentType></documentType>  							\n";
			   sDocument += "    <documentID></documentID>  								\n";
			   sDocument += "    <createTime></createTime>  								\n";
			   sDocument += "    <modifiedTime></modifiedTime>  							\n";
			   sDocument += "    <createSystem></createSystem> 								\n";
			   sDocument += "    <createServer></createServer>  							\n";
			   sDocument += "    <gccOrganizationCode></gccOrganizationCode>  				\n";
			   sDocument += "    <creator></creator>  										\n";
			   sDocument += "    <subject></subject>  										\n";
			   sDocument += "</documentInformation>  										\n";
			   sDocument += "<processInformation>  											\n";
			   sDocument += "    <destinationSystem>SmartFlow XF</destinationSystem>  		\n";
			   sDocument += "    <recipient></recipient>  									\n";
			   sDocument += "    <documentStatus></documentStatus>  						\n";
			   sDocument += "    <workflow></workflow>  									\n";
			   sDocument += "</processInformation>	  										\n";
			   sDocument += "<documentDescription>	  										\n";	
			   sDocument += "     <work>  													\n";
			   sDocument += "              <work_manage>  									\n";
			   sDocument += "                       <job_name></job_name>  					\n";
			   sDocument += "              </work_manage>  									\n";
			   sDocument += "              <work_ref></work_ref>  							\n"; 
			   sDocument += "       </work>  												\n";
			   sDocument += "</documentDescription>	  										\n";
			   sDocument += "<documentBody></documentBody>  								\n";
			   sDocument += "<attachments>													\n";
			   int j = 0;
			   for(int i = 0; i < cnt; i++){
				    j++;
				    sDocument += "   <file>                                     			\n";
					sDocument += "        <seq>" + j + "</seq>                      		\n";
					sDocument += "        <name></name>   	 								\n";
					sDocument += "        <url></url>  										\n";
					sDocument += "    </file>                                       		\n";
			   }
			   sDocument +=	"</attachments>  												\n"; 
			   sDocument += "</exchangeableDocument>    									\n";

			   return sDocument;
	}
	
	/**
	 * 특정 문자열로 구분된 문자열을 분리하여 배열로 리턴
	 * @param str string separated string
	 * @param strDelim separating string
	 * @return String[]
	 */
	public static String[] getTokenArray(String str, String strDelim)
	{
		if (str == null || str.length() == 0) return null;
		StringTokenizer st = new StringTokenizer(str, strDelim);

		String arrToken [];
		arrToken = new String[st.countTokens()];

		int i = 0;
		while (st.hasMoreTokens())
		{
			arrToken[i] = st.nextToken();
			i++;
		}

		return arrToken;
	} 
	
	public static String IsNull(String vStr) {
		if (vStr == null) return "";
		else return vStr;
	}
	 
	public static String getCurrentTime(String format)
	{
		DecimalFormat df = new DecimalFormat("00");
		
		Calendar currentCalendar = Calendar.getInstance();
		
		String strYear  = Integer.toString(currentCalendar.get(Calendar.YEAR));
		String strMonth = df.format(currentCalendar.get(Calendar.MONTH) + 1); 
		String strDay   = df.format(currentCalendar.get(Calendar.DATE));
		String strDate 	= strYear + strMonth + strDay;
		String hi 		= df.format(currentCalendar.get(Calendar.HOUR)); 
		String mi 		= df.format(currentCalendar.get(Calendar.MINUTE)); 
		String ss 		= df.format(currentCalendar.get(Calendar.SECOND)); 
		if(format.equals("yyyymmdd")){
			strDate = strYear + strMonth + strDay;		    
		}else if(format.equals("yyyymmddhh")){
			strDate = strYear + strMonth + strDay + hi;		    
		}else if(format.equals("yyyymmddhhmi")){
			strDate = strYear + strMonth + strDay + hi + mi;
		}else if(format.equals("yyyymmddhhmiss")){
			strDate = strYear + strMonth + strDay + hi + mi + ss;	
		}else{
			strDate = strYear + strMonth + strDay + hi + mi + ss;	
		}
		return strDate;
	}
	
	/**
	 * 태그변환
	 * @param source
	 * @return
	 */
	public static String replaceTag(String source)
	{
		if (source == null)
			return "";
		else
			source = source.trim();
			
		char cdoublequot = '"';
		Character doublequot = new Character(cdoublequot);
		source = mReplace(source, "&amp;", "&");
		source = mReplace(source, "&quot;", doublequot.toString());
		source = mReplace(source, "&lt;", "<");
		source = mReplace(source, "&gt;", ">");
		source = mReplace(source, "&#39;", "'");
		return source;
	}

	/**
	 * line의 문자중 oldString을 newString로 바꿔준다.
	 * @param line
	 * @param oldString
	 * @param newString
	 * @return
	 */
	public static String mReplace(String line,String oldString,String newString) 
	{
    if(line == null)
            return "";
		int index = 0;
		while ((index = line.indexOf(oldString, index)) >= 0) {
			line = line.substring(0,index) + newString + line.substring(index + oldString.length());
			index += newString.length();
		}
		
		return line;
	}
	
	/**
	 * 입력된 패턴으로 현재날짜와 시간을 가져온다.
	 * @param pattern
	 * @return
	 */
	public static String toFormatedString(String pattern)
	{
		java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(pattern);
 		String dateString = formatter.format(new Date());
		return dateString;
	}
	
	public static String gwKindGubn(String sData, String gubn) throws Exception 
	{
		String temp = "";
		
//회계전표 [전표일자,전표번호,작성부서] 구분을 위해 분기, 사용자 화면에서 XML 제작 후 제공
		if (gubn.equals("KFI102"))
		{
			return sData;
		} else {
			temp += "              <work_item work_item_code ='001' work_item_name ='본문내용'>  \n";
			temp += "               <![CDATA[" + sData +"]]>  \n";
			temp += "              </work_item>				\n";
		
			return temp;
		}
	}
	
	/**
	 * 그룹웨어로 결과데이터를 response 한다.
	 * @param response
	 * @param nErrCode
	 * @param sMsg
	 * @throws Exception
	 */
	public static void sendResult(HttpServletResponse response, int nErrCode, String sMsg) throws Exception {
		PrintWriter out =  response.getWriter();   
		String sXml = "";
		if (nErrCode == 0) {
			sXml = "<?xml version='1.0' encoding='euc-kr'?> \n" +
			       "<ndata> \n" +
			       "  <status>Success</status> \n" + 
			       "  <code>0</code> \n" + 
			       "</ndata>"; 
		} else {			
			String sErrMsg = "";
			switch (nErrCode) {
				case 1 : sErrMsg = "Invalid Document Status"; break;
				case 2 : sErrMsg = "XML Validation fail!";    break;
				case 3 : sErrMsg = "protID Invalid!"; 		  break;
				case 4 : sErrMsg = "Previously Report is cannnot returned!"; break;
				default : sErrMsg = sMsg; break;
			}
			sXml = "<?xml version='1.0' encoding='euc-kr'?> \n" +
		       "<ndata> \n" +
		       "  <status>Error</status> \n" +
		       "  <code>" + String.valueOf(nErrCode) + "</code> \n" + 
		       "  <message>" + sErrMsg + "</message> \n" + 
		       "</ndata>"; 
			
		}
	
		String result = new String(sXml.getBytes("UTF-8"),"MS949");
		out.write(result);		
		out.flush();
		out.close();
		out = null;		
	} 
	
	public static GwExtInfo ExtInfo(Approval approval, String doc_id, String seq){
		String seqNum 	= "";		
		String processedTime    = approval.getCurr_processedTime();
		String notProcessReason = approval.getCurr_notProcessReason();
		boolean	next = false;
		boolean end	 = false;
		boolean one_line = false;
		
//주관결재선 관리를 위해 선언한 변수 - 시작 
		String init_id	= ""; 		//기안자 사번
		String init_dept= ""; 		//기안자 부서
		String gw_id 	= ""; 		//주관부서 담당자 사번
		String gw_dept 	= ""; 		//주관부서 담당자 부서
		String gw_seq   = ""; 		//최초 주관결재 SEQ번호
		List<String> id_temp 	= new ArrayList<String>();
		List<String> dept_temp 	= new ArrayList<String>();
//주관결재선 관리를 위해 선언한 변수 - 끝 
		
		GwExtInfo info = new GwExtInfo();
		
		info.setDoc_id(doc_id);
		info.setSeq(seq);
		
		for(int i = 0 ; i < approval.getList().size(); i ++)
		{
			Type t = (Type)approval.getList().get(i);
			if (t.getCode().equals("seqNum")){
				
				seqNum = t.getName();
				if(seqNum.equals(Integer.toString(Integer.parseInt(approval.getCurr_seqNum())+1)))	{
					next = true;
					info.setNext_seq(t.getName());  // 다음 Seq 이다.
				}
				if (!end){
					info.setEnd_seq(t.getName());	// 제일 마지막에 남는 SEQ값이 endSeq이다.
				}
				
			} else if (t.getCode().equals("id")){
				if (seqNum.equals("0"))	{
					info.setInit_id(t.getName());	// 신청자 ID
					init_id = t.getName();
				}else if (!end){ 
					info.setEnd_id(t.getName());	// 제일 마지막으로 들어오는 값이 담당자이다.
					gw_id = t.getName();
				}else if (end){
					id_temp.add(t.getName());		// 담당자를 제외하고 나머지 주관결재자 정보 (주관결재선 관리)
				}
			} else if (t.getCode().equals("deptID")){
				if (seqNum.equals("0"))	{
					init_dept = t.getName();		// 신청자 부서
				}else if (!end){ 
					gw_dept = t.getName();			// 제일 마지막으로 들어오는 값이 담당자 부서이다.(주관결재선 관리)
				}else if (end){					
					dept_temp.add(t.getName());		// 담당자를 제외하고 나머지 주관결재자 부서이다.(주관결재선 관리)
				}
			} 
			if(t.getCode().equals("name")){
				if (seqNum.equals("0"))	{
					info.setInit_name(t.getName());	// 신청자 성명
				}
			}
			
			if (t.getCode().equals("kind")){
				if(t.getName().equals("\uc8fc\uad00\uacb0\uc7ac")){			// 최초로 주관결재인 사람이 담당자이다.
					end = true;
					gw_seq = seqNum;										// 최초로 주관결재인 SEQ
				}else if(t.getName().equals("\uc8fc\uad00")){				// 최초로 주관결재인 사람이 담당자이다.
					end = true;
					gw_seq = seqNum;										// 최초로 주관결재인 SEQ
				}else if(t.getName().equals("1\uc778\uacb0\uc7ac") && seqNum.equals("0")){
					one_line = true;
				}
			} 
			if(next){
				if (t.getCode().equals("id")){
					info.setNext_id(t.getName());
				} else if(t.getCode().equals("kind")){
					info.setNext_kind(t.getName());
				}
			}
		}
		
//신청부서 없이 주관부서만 있는 결재선의 경우 주관부서 담당자가 기안으로 넘어옮. 기안자가 담당자이다.
		if(gw_seq.equals("1") && !one_line)
		{
			info.setEnd_id(init_id);
//결재선 정보 최종 조합 (담당자  + 주관결재자 정보)
			id_temp.add(0,gw_id);		// 주관결재 = 검토자
			dept_temp.add(0,gw_dept);	// 주관결재 = 검토 부서
			id_temp.add(0,init_id);		// 기안자 = 담당자
			dept_temp.add(0,init_dept);	// 기안자 = 담당 부서
			info.setGw_id(id_temp);
			info.setGw_dept(dept_temp);
		}else{
//결재선 정보 최종 조합 (담당자  + 주관결재자 정보)
			id_temp.add(0,gw_id);
			dept_temp.add(0,gw_dept);		
			info.setGw_id(id_temp);
			info.setGw_dept(dept_temp);
		}		
		
//처리시간 파싱
		processedTime = processedTime.replaceAll("/","").replaceAll(":","").replaceAll(" ","");
		approval.setCurr_processedTime(processedTime);
		
//반려사항 null 값 체크
		if(notProcessReason == null)
			approval.setCurr_notProcessReason("");
		
//next_id null 값 체크
		if(info.getNext_id() == null)
			info.setNext_id("");
		
//next_seq null 값 체크
		if(info.getNext_seq() == null)
			info.setNext_seq("");
		
//next_kind null 값 체크
		if(info.getNext_kind() == null)
			info.setNext_kind("");
		
		return  info;
	} 
	
	/**
	 * 결재라인 주관부서코드 체크함수
	 * @param approval
	 * @param deptCode
	 * @return
	 */
	public static boolean authDeptApproval(Approval approval, String deptCode)
	{
		boolean isDept = false;			//주관부서
		boolean isPass = false; 
		
		for(int i = 0 ; i < approval.getList().size(); i ++)
		{
			Type t = (Type)approval.getList().get(i);
			if (t.getCode().equals("deptID")){					   // 주관부서인지 아닌지 판단
				if(t.getName().equals(deptCode))	
					isDept = true;
				else 
					isDept = false;
			}				
						
			if (t.getCode().equals("kind")){ 					   // 주관결재선인지 아닌지 판단
				if(t.getName().equals("\uc8fc\uad00\uacb0\uc7ac")) //주관결재
				{	
					if(isDept == true){
						isPass = true;
					}else{
						isPass = false;
						return isPass;							  // 주관결재선부터 주관부서가 아니면 return err
					}
				}else if(t.getName().equals("\uc8fc\uad00")) 	  //주관
				{	
					if(isDept == true){
						isPass = true;
					}else{
						isPass = false;
						return isPass;							  // 주관결재선부터 주관부서가 아니면 return err
					}
				}
			}	    			
		}
 		return isPass;
	}
	
	/**
	 * 결재라인 합의 체크함수
	 * @param approval
	 * @param deptCode
	 * @return
	 */
	public static boolean authAgreeApproval(Approval approval, String deptCode)
	{
		boolean isDept = false;	//결재선
		
		for(int i = 0 ; i < approval.getList().size(); i ++)
		{
			Type t = (Type)approval.getList().get(i);
			if (t.getCode().equals("deptID")){					// 결재선 인지 판단
				if(t.getName().equals(deptCode))	
					isDept = true;
			}				
		}
 		return isDept;
	}
}