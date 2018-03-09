/**
 * core.ifw.cmm.database.DatabaseRoutingInterceptor.java
 */
package core.ifw.cmm.database;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import core.ifw.utl.CryptSHA;

/**
 *	DatabaseRoutingInterceptor - HTTP 요청 처리 전/후 데이터베이스 인식에 필요한 정보를 설정 및 해제합니다.
 * <p><b>NOTE : </b>HTTP 요청에 따른 스프링 컨트롤러 실행 전 요청 정보를 판별하여 해당 요청에 사용할
 *  데이터베이스 타입정보를 스레드에 저장합니다. 
 *  또한 해당 핸들러가 실행 완료되면 스레드에 저장한 데이터베이스 인식 정보를 제거합니다.
 * </p>
 * 
 * @author	jang.sh <jsh@inbus.co.kr>
 * @since	2016. 11. 16.
 * @version	1.0
 * @see		{@link HandlerInterceptorAdapter}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 11. 16.	jang.sh		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
public class DatabaseRoutingInterceptor extends HandlerInterceptorAdapter {

	private final Logger LOGGER = LoggerFactory.getLogger(DatabaseRoutingInterceptor.class);
	
	/* (non-Javadoc)
	 * @see org.springframework.web.servlet.handler.HandlerInterceptorAdapter#preHandle(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object)
	 */
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		
		HandlerMethod handlerMethod = (HandlerMethod) handler;
		
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("---------- Handler : "
					+ handlerMethod.getBeanType().getCanonicalName()
					+ ", Method : " + handlerMethod.getMethod().getName() + " >>>>>>>> START");
		}
		
		LOGGER.info("---------- Session ID : " + request.getSession().getId());
		
		String dbType = request.getParameter("GBL_DBTYPECD");
		
		LOGGER.info("---------- Request Database Type : " + dbType);
		
		if ((dbType == null) || dbType.isEmpty()) {
			dbType = (String) (request.getSession().getAttribute("GBL_DBTYPECD") == null ? "" : request.getSession().getAttribute("GBL_DBTYPECD"));
			LOGGER.info("---------- Session Database Type : " + dbType);
		}
		
		if ((dbType == null) || (dbType.isEmpty())) {
			dbType = "Oracle";
		}
		
		DatabaseRoutingContextHolder.setDatabaseType(DatabaseTypes.valueOf(dbType.toUpperCase()));
		
		LOGGER.info("------- Database Type : " + DatabaseRoutingContextHolder.getDatabaseType());
		
		return super.preHandle(request, response, handler);
	}
	
	
	/* (non-Javadoc)
	 * @see org.springframework.web.servlet.handler.HandlerInterceptorAdapter#postHandle(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object, org.springframework.web.servlet.ModelAndView)
	 */
	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		HandlerMethod handlerMethod = (HandlerMethod) handler;
		
		DatabaseRoutingContextHolder.clearDatabaseType();
		
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("---------- Handler : "
					+ handlerMethod.getBeanType().getCanonicalName()
					+ ", Method : " + handlerMethod.getMethod().getName() + " >>>>>>>> END");
		}

		super.postHandle(request, response, handler, modelAndView);
	}
	
	
	
}
