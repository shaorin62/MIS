package core.ifw.cmm.result;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.erp.com.web.ComImageViewerController;
import core.ifw.utl.CoreProperties;
import core.ifw.cmm.request.CALL_TYPE;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.tx.HttpPlatformResponse;
import com.nexacro.xapi.tx.PlatformType;

/**
 * 프레임워크 컨트롤러 마이플랫폼 View Servlet
 * 종류에 따라 리턴시킬 타입을 결정한다.
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
 *   2014.09.
 *
 * Copyright (C) 2010 by KL-Net  All right reserved.
 * </pre>
 */
 
public class CoreReturnView extends AbstractView {
    /**
     * Logger for this class
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(CoreReturnView.class);


    final char FILE_SEPARATOR     = File.separatorChar;
    
    private static final String AJAX_XML = "AJAX_XML";
    private static final String FORM_DATA = "FORM_DATA";
    private static final String FORM_PAGE = "FORM_PAGE";
    
    
    @SuppressWarnings("unchecked")
    @Override
    protected void renderMergedOutputModel(Map model, HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("renderMergedOutputModel(Map, HttpServletRequest, HttpServletResponse) - start"); //$NON-NLS-1$
        }
        
        //1.XML 을 내려 보낼때 (거의 사용할일 없을듯)
        if ( model.get( CoreReturnView.AJAX_XML ) != null ){
            PrintWriter writer = null;
            try {
                response.setContentType("text/xml");
                response.setHeader("Cache-Control", "no-cache");
                response.setCharacterEncoding("UTF-8");

                writer = response.getWriter();
                writer.write((String) model.get("ajaxXml"));
                
            } finally {

                writer.close();
            }
        }
        
        //2.XPlatform 결과 값을 내려 보낼때
        if ( model.get( CoreReturnView.FORM_DATA ) != null ){
        	Object data = model.get( CoreReturnView.FORM_DATA );
        	if ( data.getClass() ==  CoreResultData.class) {
                CoreResultData coreResultData = (CoreResultData) data;
                if (coreResultData.getCALL_TYPE() == CALL_TYPE.NEXACRO) {
					PlatformData platformData = (PlatformData) coreResultData.getPlatformData();
					HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, PlatformType.DEFAULT_CHAR_SET);
					res.setData(platformData);
					res.sendData();
				}
                
            }
        }
        
        //3.Form 으로 페이지를 이동할때 (요건 좀 있다 작업하자)
        if ( model.get( CoreReturnView.FORM_PAGE ) != null ){
            Object form = model.get( CoreReturnView.FORM_PAGE );
            if ( form.getClass() ==  ViewFormFile.class) {
                
                ViewFormFile platformForm = (ViewFormFile) form;
                
                File uFile = platformForm.getFile();
                int fSize = (int)uFile.length();
                
                if (LOGGER.isDebugEnabled()) {
                    LOGGER.debug("renderMergedOutputModel(Map, HttpServletRequest, HttpServletResponse) - center filename = " + uFile.getName() + " fSize=" + fSize); //$NON-NLS-1$
                }
                
                if (fSize > 0) {
                    BufferedInputStream in2 = new BufferedInputStream(new FileInputStream(uFile));
    
                    String mimetype = "application/x-msdownload";
                    //response.setBufferSize(fSize);
                    response.setContentType(mimetype);
                    response.setHeader("Content-Disposition", "attachment; filename=\"" + platformForm.getFile().getName() + "\"");
                    response.setContentLength(fSize);
    
                    FileCopyUtils.copy(in2, response.getOutputStream());
                    in2.close();
                    response.getOutputStream().flush();
                    response.getOutputStream().close(); 
                }else{
                    try{
                        String fileNotFound = "/kr/co/inbus/cmm/sec/fileNotFound.xml";
                        String miplatformPath = CoreProperties.getProperty("CoreERP.miplatformPath");
                        String fileNotFoundValue = (miplatformPath + fileNotFound).replace('\\', FILE_SEPARATOR).replace('/', FILE_SEPARATOR);
                        
                        fileNotFoundValue = ComImageViewerController.filePathBlackList(fileNotFoundValue); //2015.05.19 시큐어처리
                        
                        File nFile = new File (fileNotFoundValue);
                        int nSize = (int)nFile.length();
                        
                        
                        BufferedInputStream in2 = new BufferedInputStream(new FileInputStream(nFile));
                        
                        String mimetype = "application/x-msdownload";
                        //response.setBufferSize(fSize);
                        response.setContentType(mimetype);
                        response.setHeader("Content-Disposition", "attachment; filename=\"" + nFile.getName() + "\"");
                        response.setContentLength(nSize);
        
                        FileCopyUtils.copy(in2, response.getOutputStream());
                        in2.close();
                        response.getOutputStream().flush();
                        response.getOutputStream().close();      
                    }catch(Exception e){
                        LOGGER.warn("renderMergedOutputModel(miplatformForm)- exception ignored" + e.toString()); //$NON-NLS-1$
                        
                    }
                }
            }
        }
        

        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("renderMergedOutputModel(Map, HttpServletRequest, HttpServletResponse) - end"); //$NON-NLS-1$
        }
    }
}
