package core.ifw.cmm.args;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;

import core.ifw.cmm.request.CoreRequest;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebArgumentResolver;
import org.springframework.web.context.request.NativeWebRequest;

/**
 * 프레임워크 컨트롤러 Request Handler Resolver
 * 
 * <br/><b>Description</b><br/>
 * 전자정부프레임워크에서 스프링 프레임워크 4.0 버전 업그레이드에 따라서 ArgumentResolver 클래스가 모두 변경되었으며,
 * 이에 따라 새로운 ArgumentResolver 클래스가 지원되며 전자정부프레임워크 2.X 버전에서는 해당 클래스를 사용합니다.
 *  
 * @author 박대규
 * @since 2010.01.05
 * @version 1.0
 * @see {@link WebArgumentResolver}
 * 
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.04 박대규          최초 생성
 *   2016.07.04 장성환          스프링 4.0 버전 변경으로 deprecated 됨
 *
 * Copyright (C) 2010 by KL-Net  All right reserved.
 * </pre>
 */
@Deprecated
public class CoreArgumentResolver implements WebArgumentResolver {
    
    /**
     * Logger for this class
     */
    private static final Logger logger = LoggerFactory.getLogger(CoreArgumentResolver.class);


    /* (non-Javadoc)
     * @see org.springframework.web.bind.support.WebArgumentResolver#resolveArgument(org.springframework.core.MethodParameter, org.springframework.web.context.request.NativeWebRequest)
     */
    public Object resolveArgument(MethodParameter methodParameter, NativeWebRequest webRequest) throws Exception {
//        if (logger.isDebugEnabled()) {
//            logger.debug("resolveArgument(MethodParameter, NativeWebRequest) - start"); //$NON-NLS-1$
//        }

        Class<?> type = methodParameter.getParameterType();
//        Method method = methodParameter.getMethod();
        if (type.equals(CoreRequest.class)) {
            HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
//            if (logger.isDebugEnabled()) {
//                logger.debug(request.getRequestURI());
//            }
            CoreRequest iSMiPlatformRequest = new CoreRequest(request);

//            if (logger.isDebugEnabled()) {
//                logger.debug("resolveArgument(MethodParameter, NativeWebRequest) - end"+iSMiPlatformRequest.getClass()); //$NON-NLS-1$
//            }
            return iSMiPlatformRequest;
        }

//        if (logger.isDebugEnabled()) {
//            logger.debug("resolveArgument(MethodParameter, NativeWebRequest) - end:UNRESOLVED"); //$NON-NLS-1$
//        }
        return UNRESOLVED;


        
    }

}
