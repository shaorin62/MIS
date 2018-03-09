/***********************************************************************
* PROGRAM NAME     :  InitConfig.java
* DESCRIPTION      :  properties 파일들을 초기화
* DESIGNER NAME    :
* DEVELOPER NAME   :  조정호
* CREATE DATE      :  2006. 4. 27
*
* Date	            Ver         Name           Description
* ------------      ------      ------------   ------------------------
* 2006. 4. 27        V1.0        조정호      	   Initial Version
***********************************************************************/

package core.ifw.utl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import java.util.TreeSet;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class PropertiesUtil {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(PropertiesUtil.class);

    private static Log log = LogFactory.getLog("stamp.util.properties.PropertiesUtil.java");

    /**
     * properties파일이 변경 되었는지 검사
     *
     * @param propertiesFileName
     * @param beforeTime
     * @return boolean
     */
    synchronized public boolean isModify(String propertiesFileName, long beforeTime) {

        //log.debug("@param "+propertiesFileName);
        //log.debug("@param "+beforeTime);

        boolean         result      = false;
        long            lastModified
                                    = lastModify(propertiesFileName);

        if(lastModified > beforeTime)
            result                  = true;


        //log.debug("result:"+result);
        return result;
    }

    /**
     * properties파일의 변경된 시간을 반환
     *
     * @param propertiesFileName
     * @return Long 변경된 시간
     */
    synchronized public long lastModify(String propertiesFileName) {
        //log.debug("@param "+propertiesFileName);

        String          fileUrl     = null;

        try{
            fileUrl                 = this.getClass().getResource(propertiesFileName).toString();
        }catch(NullPointerException e) {
            fileUrl                 = propertiesFileName;
        }

        File            file        = new File(fileUrl);

        //log.debug("fileUrl:"+fileUrl);
        //log.debug("@return "+file.lastModified());
        return file.lastModified();
    }

    /**
     * properties파일을 읽어 HashMap에 담아 반환
     *
     * @param propertiesFileName
     * @return HashMap
     * @throws Exception 
     */
    synchronized public Map getProperties(String propertiesFileName) throws Exception {

        log.debug("getProperties::param "+propertiesFileName);

        HashMap         result      = new HashMap();

        InputStream     is          = null;
        Properties      prop        = new Properties();

        Iterator        it          = null;

        String          key         = null;
        String          value       = null;

        //정보를 읽어 오기
        try {
            is = this.getClass().getResourceAsStream(propertiesFileName);
            
            if( is == null )
                is = new FileInputStream(propertiesFileName);

            prop.load(is);

        } catch(Exception e) {
            log.error("@Exception "+this.getClass().getName()+e.getMessage());
            throw e;
        } finally {
            if(is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    log.error("@Exception"+this.getClass().getName()+e.getMessage());
                    throw e;
                }
            }
        }

        //properties값 가져오기
        it                          = new TreeSet(prop.keySet()).iterator();
        while(it.hasNext()) {
            key                     = (String)it.next();
            //value                   = prop.getProperty(key);
            //2015.05.11 시큐어코딩처리
            if (prop != null) {
            	value                   = prop.getProperty(key);
            }

            result.put(key, value);

            ////log.debug("key="+key+" value="+value);
        }
        return result;
    }
    
    /**
     * 값을 저장하게 하자.
     * @param sFileName
     * @param keyValue
     */
    public String writeProperties(String sFileName, Map keyValue) {
        
        String sLastFileName = null;
        
        try {
            sLastFileName = FileUtil.getLastFileName(sFileName);
            logger.debug("sLastFileName->" + sLastFileName + " keyValue->" + keyValue);
            
            Properties prop = new Properties();
            
            prop.putAll(keyValue);
            
            prop.store(new FileOutputStream(sLastFileName), null);
            
        } catch(Exception e) {
        	logger.warn("예외 발생");
            
        }
        
        return sLastFileName;
    }
    
    public static void main(String[] args) {
        String sFileName = "C:\\Temp\\build\\psaHMS\\test";
        String sPath = "";
        String sExt = "";
        
        String sRealFile = sFileName;
        if(sFileName.lastIndexOf(".") != -1) {
            sRealFile = sFileName.substring(0, sFileName.lastIndexOf("."));
            
            sExt = sFileName.substring( sFileName.lastIndexOf(".")+1, sFileName.length() ); 
        }
        
        sPath = sRealFile.substring(0, sFileName.lastIndexOf( File.separator ));
        sRealFile = sRealFile.substring( sRealFile.lastIndexOf( File.separator )+1, sRealFile.length() );
        
    }
}
