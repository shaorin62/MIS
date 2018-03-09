package core.ifw.log.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import core.ifw.cmm.dataaccess.CmmBaseDAO;
import core.ifw.log.service.EgovLogManageService;
import core.ifw.log.vo.LoginLog;
import core.ifw.log.vo.LoginVO;
import core.ifw.log.vo.SysLog;
import core.ifw.log.vo.TrsmrcvLog;
import core.ifw.log.vo.UserLog;
import core.ifw.log.vo.WebLog;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name : EgovLogManageServiceImpl.java
 * @Description : 시스템 로그 관리를 위한 서비스 구현 클래스
 * @Modification Information
 *
 *    수정일       수정자         수정내용
 *    -------        -------     -------------------
 *    2009. 3. 11.     이삼섭
 *
 * @author 공통 서비스 개발팀 이삼섭
 * @since 2009. 3. 11.
 * @version
 * @see
 *
 * Copyright (c) 2008 by MOPAS  All right reserved
 */
@Service("EgovLogManageService")
public class EgovLogManageServiceImpl extends EgovAbstractServiceImpl implements EgovLogManageService {

    /** DAO */
    @Resource(name = "cmmBaseDAO")
    private CmmBaseDAO cmmBaseDAO;
	

	/**
	 * 접속로그를 기록한다.
	 * 
	 * @param LoginLog
	 */
	public void logInsertLoginLog(LoginLog loinLog) throws Exception {
		// TODO Auto-generated method stub
		String logId = "";//egovLoginLogIdGnrService.getNextStringId();
		loinLog.setLogId(logId);
		
		//로그 기록 처리 처리	

	}

	/**
	 * 시스템 로그정보를 생성한다.
	 * 
	 * @param SysLog
	 */
	public void logInsertSysLog(SysLog sysLog) throws Exception {
		// TODO Auto-generated method stub
		String requstId = "";//egovSysLogIdGnrService.getNextStringId();
		sysLog.setRequstId(requstId);
		
		String userId = null;
		
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		LoginVO loginVo = (LoginVO) request.getSession().getAttribute("__ERP_USER_LOGIN__");
		
		
		
		//로그 기록 처리 처리	
	}

	/**
	 * 시스템 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertSysLogSummary()
			throws Exception {
		// TODO Auto-generated method stub

	  //로그 기록 처리 처리
	}

	/**
	 * 웹 로그를 기록한다.
	 * 
	 * @param WebLog
	 */
	public void logInsertWebLog(WebLog webLog) throws Exception {
		// TODO Auto-generated method stub
		String requstId = "";//egovWebLogIdGnrService.getNextStringId();
		webLog.setRequstId(requstId);
		
		//로그 기록 처리 처리
	}

	/**
	 * 웹 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertWebLogSummary()
			throws Exception {
		// TODO Auto-generated method stub

	  //로그 기록 처리 처리
	}

	/**
	 * 송수신로그 정보를 생성한다.
	 * 
	 * @param TrsmrcvLog
	 */
	public void logInsertTrsmrcvLog(TrsmrcvLog trsmrcvLog) throws Exception {
		// TODO Auto-generated method stub
		String requstId = "";//egovTrsmrcvLogIdGnrService.getNextStringId();
		trsmrcvLog.setRequstId(requstId);
		
		//로그 기록 처리 처리
	}

	/**
	 * 송수신 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertTrsmrcvLogSummary()
			throws Exception {
		// TODO Auto-generated method stub
		
	  //로그 기록 처리 처리
	}
	
	/**
	 * 사용자 로그정보를 생성한다.
	 * 
	 * @param 
	 */
	public void logInsertUserLog() throws Exception {
		// TODO Auto-generated method stub

		//로그 기록 처리 처리
	}

	/**
	 * 접속로그를 조회한다.
	 * 
	 * @param loginLog
	 * @return loginLog
	 * @throws Exception 
	 */
	public LoginLog selectLoginLog(LoginLog loginLog) throws Exception{
		
	   return null;
	}	

	/**
	 * 접속로그 목록을 조회한다.
	 * 
	 * @param LoginLog
	 */
	public Map selectLoginLogInf(LoginLog loinLog) throws Exception {
	    return null;
	}

	/**
	 * 시스템 로그정보를 조회한다.
	 * 
	 * @param sysLog
	 * @return sysLog
	 * @throws Exception 
	 */
	public SysLog selectSysLog(SysLog sysLog) throws Exception{
	    return null;
	}	

	/**
	 * 시스템 로그정보 목록을 조회한다.
	 * 
	 * @param SysLog
	 */
	public Map selectSysLogInf(SysLog sysLog) throws Exception {
	    return null;
	}

	/**
	 * 웹 로그정보를 조회한다.
	 * 
	 * @param webLog
	 * @return webLog
	 * @throws Exception 
	 */
	public WebLog selectWebLog(WebLog webLog) throws Exception{
	    return null;
	}	

	/**
	 * 웹 로그정보 목록을 조회한다.
	 * 
	 * @param WebLog
	 */
	public Map selectWebLogInf(WebLog webLog) throws Exception {
	    return null;
	}

	/**
	 * 송수신 로그정보를 조회한다.
	 * 
	 * @param trsmrcvLog
	 * @return trsmrcvLog
	 * @throws Exception 
	 */
	public TrsmrcvLog selectTrsmrcvLog(TrsmrcvLog trsmrcvLog) throws Exception{
	    return null;
	}	

	/**
	 * 송수신 로그정보 목록을 조회한다.
	 * 
	 * @param TrsmrcvLog
	 */
	public Map selectTrsmrcvLogInf(TrsmrcvLog trsmrcvLog) throws Exception {
	    return null;
	}

	/**
	 * 사용자 로그정보를 조회한다.
	 * 
	 * @param userLog
	 * @return userLog
	 * @throws Exception 
	 */
	public UserLog selectUserLog(UserLog userLog) throws Exception{
	    return null;
	}	

	/**
	 * 사용자 로그정보 목록을 조회한다.
	 * 
	 * @param UserLog
	 */
	public Map selectUserLogInf(UserLog userLog) throws Exception {
	    return null;
	}


}
