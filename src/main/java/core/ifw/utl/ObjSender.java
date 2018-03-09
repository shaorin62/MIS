package core.ifw.utl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/******************************************************************************
 * <pre>
 *   
 *   프로그램명 : JAVA ActionBean에서 특정 URL Page로 Map 객체 보내기 
 *   클래스명 : ComFile.java
 *   작성일자 : 2009. 10. 16.
 *   작 성 자 : 김석두(최초 작성)
 *   비   고 :
 *   Copyright (c) 2009 Inbus Co.,Ltd All Rights reserved.
 * 
 * </pre> 
 *****************************************************************************/
public class ObjSender {
    
	private static final Logger logger = LoggerFactory.getLogger(ObjSender.class);
	
    private HttpURLConnection connection;

    /**
     * <pre>
     * Constructor 해당 URL의 Connection을 생성다.
     * </pre>
     *
     * @param url
     * @throws Exception
     */
    public ObjSender(String url) throws Exception {
        
        connection = (HttpURLConnection)new URL(url).openConnection();
        connection.setDoInput(true);
        connection.setDoOutput(true);
      //connection.setRequestMethod("POST");
        connection.setAllowUserInteraction(true);
        connection.setConnectTimeout(10000);
        connection.setReadTimeout(10000);
        
    }

    /**
     * <pre>
     * Connection에서 output 스트림을 받아와 data를  write하고 flush 해준다.
     * </pre>
     *
     * @param data
     * @throws Exception
     */
    public void setData(Object data) throws Exception   {
        ObjectOutputStream oos = new ObjectOutputStream(connection.getOutputStream());
        oos.writeObject(data);
        oos.flush();
        oos.close();
    }
    
    /**
     * <pre>
     * Connection을 가져온다.
     * </pre>
     *
     * @throws Exception
     */
    public void send() throws Exception {
        
        connection.connect();
        
    }
        
    /**
     * <pre>
     * ResponseCode 코드를 리턴한다.
     * </pre>
     *
     * @return ResponseCode
     * @throws Exception
     */
    public int getResponseCode() throws Exception {
        
        return connection.getResponseCode();
        
    }
    
    /**
     * <pre>
     * 통신을 통해 넘어온 Object 객체를 리턴한다.
     * </pre>
     *
     * @return data
     * @throws Exception
     */
    public Object getData() throws Exception {
       
        ObjectInputStream ois = new ObjectInputStream(connection.getInputStream());
        Object data = ois.readObject();
        return data;

    }
    
    /**
     * <pre>
     * URL에서 리턴해준 결과를 String으로 반환해준다
     * </pre>
     *
     * @return rtnStr
     * @throws Exception
     */
    public String getStringData() throws Exception {
           
        /*****************************************************
         *   2013.11.01. 김석두 추가                         *
         *   해당 URL에서 결과를 String으로 줄 때 받는 처리  *
         *****************************************************/
        String tmpStr = "";
        String rtnStr = "";
        
        /*BufferedReader readBuff = new BufferedReader(new InputStreamReader(connection.getInputStream()));
               
        while (true) {
            tmpStr = readBuff.readLine();
            if (tmpStr == null) break;
            rtnStr += tmpStr;
            
        }

        readBuff.close();
        return rtnStr.trim();*/
        
        //2015.05.15시큐어처리
        BufferedReader readBuff = null;

	    try {

	        readBuff = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            
	        while (true) {
	            tmpStr = readBuff.readLine();
	            if (tmpStr == null) break;
	            rtnStr += tmpStr;
	        }

	    } finally {
		    if (readBuff != null) {
		        try { readBuff.close(); } catch (Exception ex) { logger.debug("error occurred."); }
		    }
	    }
	    return rtnStr.trim();
    }
    
}