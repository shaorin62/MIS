package core.ifw.cmm.result;

import java.io.File;

import core.erp.com.web.ComImageViewerController;
import core.ifw.utl.CoreProperties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



/**
 * 마이플랫폼 XML 화면 호출 공통 처리 클래스
 * @author 박대규
 * @since 2010.01.05
 * @version 1.0
 * @see
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.5  박대규          최초 생성
 *
 * Copyright (C) 2010 by KL-Net  All right reserved.
 * </pre>
 */
 
public class ViewFormFile {
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(ViewFormFile.class);

    protected String url; 
    protected File file;
    
    
    final char FILE_SEPARATOR     = File.separatorChar;
    
    public File getFile() {
        return file;
    }



    public String getUrl() {
        return url;
    }


    public void setUrl(String url) {
        this.url = url;
    }


    /**
     * String url 기반 마이플랫폼 XML 화면 호출 
     * @param url
     */
    public ViewFormFile(String url) {
        if (logger.isDebugEnabled()) {
            logger.debug("ISMiPlatformForm(String) - start"); //$NON-NLS-1$
        }

        this.url = url;
       
        String miplatformPath = CoreProperties.getProperty("CoreERP.miplatformPath");

        String fileSrcValue = (miplatformPath + url).replace('\\', FILE_SEPARATOR).replace('/', FILE_SEPARATOR);
        
        fileSrcValue = ComImageViewerController.filePathBlackList(fileSrcValue); //2015.05.19 시큐어처리
        
        this.file =  new File (fileSrcValue);
        
        if (logger.isDebugEnabled()) {
            logger.debug("ISMiPlatformForm(String) - center pdfFileSrcValue="+fileSrcValue + " this.file=" + this.file.length() +" this.file.getName()=" + this.file.getName()); //$NON-NLS-1$
        }
        
        if (logger.isDebugEnabled()) {
            logger.debug("ISMiPlatformForm(String) - end"); //$NON-NLS-1$
        }
    }
    
//    public String getXmlForm(){
//        
//        
//        
//        return 
//    }
}