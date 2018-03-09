package core.ifw.log.service;

import java.util.Map;

import core.ifw.log.vo.LoginLog;
import core.ifw.log.vo.SysLog;
import core.ifw.log.vo.TrsmrcvLog;
import core.ifw.log.vo.UserLog;
import core.ifw.log.vo.WebLog;

/**
 * @Class Name : EgovLogManageService.java
 * @Description : 시스템 로그 관리를 위한 서비스 인터페이스
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
public interface EgovLogManageService {

	/**
	 * 접속로그를 기록한다.
	 * 
	 * @param LoginLog
	 */
	public void logInsertLoginLog(LoginLog loinLog) throws Exception;

	/**
	 * 시스템 로그정보를 생성한다.
	 * 
	 * @param SysLog
	 */
	public void logInsertSysLog(SysLog sysLog) throws Exception;

	/**
	 * 시스템 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertSysLogSummary() throws Exception;

	/**
	 * 웹 로그를 기록한다.
	 * 
	 * @param WebLog
	 */
	public void logInsertWebLog(WebLog webLog) throws Exception;

	/**
	 * 웹 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertWebLogSummary() throws Exception;

	/**
	 * 송수신로그 정보를 생성한다.
	 * 
	 * @param TrsmrcvLog
	 */
	public void logInsertTrsmrcvLog(TrsmrcvLog trsmrcvLog) throws Exception;

	/**
	 * 송수신 로그정보를 요약한다.
	 * 
	 * @param 
	 */
	public void logInsertTrsmrcvLogSummary() throws Exception;

	/**
	 * 사용자 로그정보를 생성한다.
	 * 
	 * @param 
	 */
	public void logInsertUserLog() throws Exception;

	/**
	 * 접속로그를 조회한다.
	 * 
	 * @param loginLog
	 * @return loginLog
	 * @throws Exception 
	 */
	public LoginLog selectLoginLog(LoginLog loginLog) throws Exception;

	/**
	 * 접속로그 목록을 조회한다.
	 * 
	 * @param LoginLog
	 */
	public Map selectLoginLogInf(LoginLog loinLog) throws Exception;

	/**
	 * 시스템로그를 조회한다.
	 * 
	 * @param sysLog
	 * @return sysLog
	 * @throws Exception 
	 */
	public SysLog selectSysLog(SysLog sysLog) throws Exception;

	/**
	 * 시스템 로그정보 목록을 조회한다.
	 * 
	 * @param SysLog
	 */
	public Map selectSysLogInf(SysLog sysLog) throws Exception;

	/**
	 * 웹로그를 조회한다.
	 * 
	 * @param webLog
	 * @return webLog
	 * @throws Exception 
	 */
	public WebLog selectWebLog(WebLog webLog) throws Exception;

	/**
	 * 웹 로그정보 목록을 조회한다.
	 * 
	 * @param WebLog
	 */
	public Map selectWebLogInf(WebLog webLog) throws Exception;	
	
	/**
	 * 송수신로그를 조회한다.
	 * 
	 * @param trsmrcvLog
	 * @return trsmrcvLog
	 * @throws Exception 
	 */
	public TrsmrcvLog selectTrsmrcvLog(TrsmrcvLog trsmrcvLog) throws Exception;

	/**
	 * 송수신 로그정보 목록을 조회한다.
	 * 
	 * @param TrsmrcvLog
	 */
	public Map selectTrsmrcvLogInf(TrsmrcvLog trsmrcvLog) throws Exception; 
	
	/**
	 * 사용자로그를 조회한다.
	 * 
	 * @param userLog
	 * @return userLog
	 * @throws Exception 
	 */
	public UserLog selectUserLog(UserLog userLog) throws Exception;

	/**
	 * 사용자 로그정보 목록을 조회한다.
	 * 
	 * @param UserLog
	 */
	public Map selectUserLogInf(UserLog userLog) throws Exception; 
	
}
