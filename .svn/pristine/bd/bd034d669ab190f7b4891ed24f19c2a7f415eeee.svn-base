package core.ifw.cmm.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.fdl.cmmn.exception.handler.ExceptionHandler;

/**
 * @Class Name : EgovComExcepHndlr.java
 * @Description : 공통서비스의 exception 처리 클래스
 * @Modification Information
 *
 *    수정일       수정자         수정내용
 *    -------        -------     -------------------
 *    2009. 3. 13.     이삼섭
 *
 * @author 공통 서비스 개발팀 이삼섭
 * @since 2009. 3. 13.
 * @version
 * @see
 *
 * Copyright (c) 2008 by MOPAS  All right reserved
 */
public class CoreComExcepHndlr implements ExceptionHandler {
    /**
     * Logger for this class
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(CoreComExcepHndlr.class);

    
    /*
    @Resource(name = "otherSSLMailSender")
    private SimpleSSLMail mailSender;
    
    
     */
    /**
     * 발생된 Exception을 처리한다.
     */
    public void occur(Exception ex, String packageName) {
    	try {
    	    //mailSender.send(ex, packageName);
    	    LOGGER.warn(packageName + " sending a alert mail  is completed =======================================================");
    	} catch (Exception e) {
    		LOGGER.warn("예외 발생");
    	    
	}
    }
}
