package core.ifw.log.service;

import javax.annotation.Resource;

import org.aspectj.lang.ProceedingJoinPoint;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StopWatch;

import core.ifw.log.vo.LoginLog;
import core.ifw.log.vo.LoginVO;
import core.ifw.log.vo.SysLog;
import egovframework.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;

/**
 * @Class Name : EgovLogManageAspect.java
 * @Description : 시스템 로그 생성을 위한 ASPECT 클래스
 * @Modification Information
 *
 *    수정일       수정자         수정내용
 *    -------        -------     -------------------
 *    2009. 3. 11.     이삼섭   최초생성
 *
 * @author 공통 서비스 개발팀 이삼섭
 * @since 2009. 3. 11.
 * @version
 * @see
 *
 * Copyright (c) 2008 by MOPAS  All right reserved
 */
public class EgovLogManageAspect {
    /**
     * Logger for this class
     */
    private static final Logger LOGGER = LoggerFactory.getLogger(EgovLogManageAspect.class);

    /**
     * Logger for this class
     */
	
	@Resource(name="EgovLogManageService")
	private EgovLogManageService logManageService;

	/**
	 * 시스템 로그정보를 생성한다.
	 * sevice Class의 insert로 시작되는 Method
	 * 
	 * @param ProceedingJoinPoint
	 * @return Object
	 * @throws Exception 
	 */
	public Object logMerge(ProceedingJoinPoint joinPoint) throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("logInsert(ProceedingJoinPoint) - start"); //$NON-NLS-1$
        }
		
		StopWatch stopWatch = new StopWatch();
		
		try {
			stopWatch.start();
			
			Object retValue = joinPoint.proceed();

            return retValue;
		} catch (Throwable e) {
			throw e;
		} finally {
			stopWatch.stop();
			
			SysLog sysLog = new SysLog();
			String className = joinPoint.getTarget().getClass().getName();
			String methodName = joinPoint.getSignature().getName();
			Object[] args = joinPoint.getArgs();
			String processSeCode = "C";
			String processTime = Long.toString(stopWatch.getTotalTimeMillis());
			String uniqId = "";
			String ip = "";
			
	    	/* Authenticated  */
	        Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
	    	if(isAuthenticated.booleanValue()) {
				LoginVO user = (LoginVO)EgovUserDetailsHelper.getAuthenticatedUser();
				uniqId = user.getUniqId();
				ip = user.getIp();
	    	}

			sysLog.setSrvcNm(className);
			sysLog.setMethodNm(methodName);
			sysLog.setProcessSeCode(processSeCode);
			sysLog.setProcessTime(processTime);
			sysLog.setRqesterId(uniqId);
			sysLog.setRqesterIp(ip);
			
			logManageService.logInsertSysLog(sysLog);
			
		}
		
	}
	
	
	/**
	 * 시스템 로그정보를 생성한다.
	 * sevice Class의 select로 시작되는 Method
	 * 
	 * @param ProceedingJoinPoint
	 * @return Object
	 * @throws Exception 
	 */
	public Object logSelect(ProceedingJoinPoint joinPoint) throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("logSelect(ProceedingJoinPoint) - start"); //$NON-NLS-1$
        }
		StopWatch stopWatch = new StopWatch();
		
		try {
			stopWatch.start();
			
			Object retValue = joinPoint.proceed();
			return retValue;
		} catch (Throwable e) {
			throw e;
		} finally {
			stopWatch.stop();
			
			SysLog sysLog = new SysLog();
			String className = joinPoint.getTarget().getClass().getName();
			String methodName = joinPoint.getSignature().getName();
			String processSeCode = "R";
			String processTime = Long.toString(stopWatch.getTotalTimeMillis());
			String uniqId = "";
			String ip = "";
			
	    	/* Authenticated  */
	        Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
	    	if(isAuthenticated.booleanValue()) {
				LoginVO user = (LoginVO)EgovUserDetailsHelper.getAuthenticatedUser();
				uniqId = user.getUniqId();
				ip = user.getIp();
	    	}

			sysLog.setSrvcNm(className);
			sysLog.setMethodNm(methodName);
			sysLog.setProcessSeCode(processSeCode);
			sysLog.setProcessTime(processTime);
			sysLog.setRqesterId(uniqId);
			sysLog.setRqesterIp(ip);
			
			logManageService.logInsertSysLog(sysLog);
			
		}
		
	}
	
	/**
	 * 로그인 로그정보를 생성한다.
	 * EgovLoginController.actionMain Method
	 * 
	 * @param 
	 * @return void
	 * @throws Exception 
	 */
	public void logLogin() throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("logLogin() - start"); //$NON-NLS-1$
        }
		String uniqId = "";
		String ip = "";

		/* Authenticated  */
        Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
    	if(isAuthenticated.booleanValue()) {
			LoginVO user = (LoginVO)EgovUserDetailsHelper.getAuthenticatedUser();
			uniqId = user.getUniqId();
			ip = user.getIp();
            if (LOGGER.isDebugEnabled()) {
                LOGGER.debug("logLogin() - String ip=" + ip); //$NON-NLS-1$
            }
    	}

    	LoginLog loginLog = new LoginLog();
    	loginLog.setLoginId(uniqId);
        loginLog.setLoginIp(ip);
        loginLog.setLoginMthd("I"); // 로그인:I, 로그아웃:O
        loginLog.setErrOccrrAt("N");
        loginLog.setErrorCode("");
        logManageService.logInsertLoginLog(loginLog);

	}
	
	/**
	 * 로그아웃 로그정보를 생성한다.
	 * EgovLoginController.actionLogout Method
	 * 
	 * @param 
	 * @return void
	 * @throws Exception 
	 */
	public void logLogout() throws Throwable {
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("logLogout() - start"); //$NON-NLS-1$
        }
		String uniqId = "";
		String ip = "";

		/* Authenticated  */
        Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
    	if(isAuthenticated.booleanValue()) {
			LoginVO user = (LoginVO)EgovUserDetailsHelper.getAuthenticatedUser();
			uniqId = user.getUniqId();
			ip = user.getIp();
    	}

    	LoginLog loginLog = new LoginLog();
    	loginLog.setLoginId(uniqId);
        loginLog.setLoginIp(ip);
        loginLog.setLoginMthd("O"); // 로그인:I, 로그아웃:O
        loginLog.setErrOccrrAt("N");
        loginLog.setErrorCode("");
        logManageService.logInsertLoginLog(loginLog);
	}
	
}
