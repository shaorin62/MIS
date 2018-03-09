/**
 * core.ifw.cmm.args.CoreRequestMethodArgumentResolver.java
 */
package core.ifw.cmm.args;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import core.ifw.cmm.request.CoreRequest;


/**
 * <pre>
 *	CoreRequestMethodArgumentResolver - 투비소프트 UI 핸들러 메소드의 파라미터의 타입 분석 및 처리를 위한 Resolver 구현 클래스
 * <p><b>NOTE : </b>전자정부프레임워크 3.0 버전에서부터 스프링 프레임워크 3.1 버전 이상 지원에 의하여 기존의 {@link CoreArgumentResolver} 클래스가 아닌
 * 이 클래스를 사용하여 ArgumentResolver에 사용하여야 합니다. 기존의 {@link CoreArgumentResolver} 클래스의 사용도 가능하지만, 이후 버전에서 페기될 예정이므로
 * 되도록 이 클래스를 사용하여 설정을 하시기 바랍니다.
 * 보다 자세한 내용은 
 * 스프링 Docs(http://docs.spring.io/spring/docs/3.2.17.RELEASE/spring-framework-reference/htmlsingle/#new-in-3.1-handler-method-controller-processing) 를 참고하시기 바랍니다.
 * </p>
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 7. 4.
 * @version	1.0
 * @see		{@link HandlerMethodArgumentResolver},
 *          {@link RequestMappingHandlerAdapter},
 *          <a href="http://docs.spring.io/spring/docs/3.2.17.RELEASE/spring-framework-reference/htmlsingle/#new-in-3.1-handler-method-controller-processing">
 *              Spring Docs#new-in-3.1-handler-method-controller-processing</a>
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 4.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class CoreRequestMethodArgumentResolver implements HandlerMethodArgumentResolver {

    private static final Logger LOGGER = LoggerFactory.getLogger(CoreRequestMethodArgumentResolver.class);
    
    /* (non-Javadoc)
     * @see org.springframework.web.method.support.HandlerMethodArgumentResolver#supportsParameter(org.springframework.core.MethodParameter)
     */
    public boolean supportsParameter(MethodParameter parameter) {
        
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Parameter type : " + parameter.getParameterType().getCanonicalName() + ", resolving support : " + (parameter.getParameterType() == CoreRequest.class));
        }
        
        return parameter.getParameterType() == CoreRequest.class;
    }

    /* (non-Javadoc)
     * @see org.springframework.web.method.support.HandlerMethodArgumentResolver#resolveArgument(org.springframework.core.MethodParameter, org.springframework.web.method.support.ModelAndViewContainer, org.springframework.web.context.request.NativeWebRequest, org.springframework.web.bind.support.WebDataBinderFactory)
     */
    public Object resolveArgument(MethodParameter parameter,
            ModelAndViewContainer mavContainer, NativeWebRequest webRequest,
            WebDataBinderFactory binderFactory) throws Exception {
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("--------------- Parameter type : " + this.getClass().getCanonicalName() + " ::: Resolving parameter.");
        }
        HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
        CoreRequest coreRequest = new CoreRequest(request);
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("--------------- Parameter type : " + this.getClass().getCanonicalName() + " ::: Parameter resolved.");
        }
        return coreRequest;
        
    }

}
