package core.erp.com.service.impl;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import core.erp.com.service.ComLoginService;
import core.ifw.cmm.exception.ProcessException;
import core.ifw.log.vo.LoginVO;
import core.ifw.utl.CoreProperties;
import core.ifw.utl.CryptSHA;
import core.ifw.utl.DateTime;
import core.ifw.utl.StrUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * <pre>
 *	ComLoginServiceImpl - 기본 로그인 처리 서비스 인터페이스 구현 클래스
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 6. 13.
 * @version	1.0
 * @see		{@link EgovAbstractServiceImpl}, {@link ComLoginService}
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 6. 13.	genie			Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Service("ComLoginService")
public class ComLoginServiceImpl extends EgovAbstractServiceImpl implements ComLoginService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComLoginServiceImpl.class);

	@Resource(name="ComLoginDao")
	private ComLoginDao comLoginDao;
	
	
	@SuppressWarnings("rawtypes")
	public Object processLogin(Map<String, Object> searchVo, HttpServletRequest request) throws Exception{
		
		searchVo.put("LOGIN_IP", request.getRemoteAddr());
		
		// 입력 파라미터 처리
		String sUserID = CryptSHA.base64Decode(searchVo.get("USER_IDXX").toString());
		String sUserPW = CryptSHA.base64Decode(searchVo.get("SCRT_NUMB").toString());
		String sSysCode = CryptSHA.base64Decode(searchVo.get("SYSTEM").toString());
		
		String dbType = (String) (searchVo.get("GBL_DBTYPECD") == null ? "" : searchVo.get("GBL_DBTYPECD"));
		
		searchVo.put("USER_IDXX", sUserID);
		searchVo.put("SCRT_NUMB", sUserPW);
		
		if (LOGGER.isInfoEnabled()) {
		    LOGGER.info("------ Requested Login Info : " + searchVo);
		}
		
		String sUserIP    = (String) searchVo.get("LOGIN_IP");    //로그인 사용자 ID
		String sPassword  = "";                                   //비빌번호 
		
		Map<String, Object> searchUserInfo = (Map<String, Object>) comLoginDao.processLogin(searchVo);
		
		if (LOGGER.isInfoEnabled()) {
		    LOGGER.info("------ Retrieved User Info : " + searchUserInfo);
        }
		
		
		if ((searchUserInfo == null) || (searchUserInfo.isEmpty())) {
			throw new ProcessException("ID 또는 비밀번호를 확인하세요!");
		}
		
		sPassword = CryptSHA.encrypt256((String) searchVo.get("SCRT_NUMB"));

		if (!searchUserInfo.get("SCRT_NUMB").equals(sPassword)) {
			throw new ProcessException("ID 또는 비밀번호를 확인하세요!");
		}
		
		// 로그인 기록 저장
		searchVo = new LinkedHashMap<String, Object>();
		searchVo.put("USER_IDXX", searchUserInfo.get("USER_IDXX"));
		searchVo.put("EMPL_NUMB", searchUserInfo.get("EMPL_NUMB"));
		searchVo.put("LGIN_DATE", DateTime.getDateString("yyyyMMdd"));
		searchVo.put("LGIN_IPAR", sUserIP);
		
		comLoginDao.processLOGINSAVE(searchVo);
			
		// 세션에 저장할 사용자 정보
		LoginVO loginVo = new LoginVO();
		loginVo.setId(StrUtil.nullParam(searchUserInfo.get("USER_IDXX")));
		loginVo.setIhidNum(StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB")));
		loginVo.setName(StrUtil.nullParam(searchUserInfo.get("EMPL_NAME")));
		loginVo.setOrgnztId(StrUtil.nullParam(searchUserInfo.get("DEPT_CODE")));
		
		HttpSession session = request.getSession(true);
		session.setAttribute("__ERP_USER_LOGIN__", loginVo);
		session.setAttribute("GBL_USERID",      StrUtil.nullParam(searchUserInfo.get("USER_IDXX"))); 	/*사용자ID*/
		session.setAttribute("GBL_EMPLNO",      StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB"))); 	/*사원번호*/
		session.setAttribute("GBL_USERNM",      StrUtil.nullParam(searchUserInfo.get("EMPL_NAME"))); 	/*사원명*/
		session.setAttribute("GBL_ENFCCD",      StrUtil.nullParam(searchUserInfo.get("ENFC_CODE"))); 	/*사업장코드*/
		session.setAttribute("GBL_ENFCNM",      StrUtil.nullParam(searchUserInfo.get("ENFC_NAME"))); 	/*사업장명*/
		session.setAttribute("GBL_SECTCD",      StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1"))); 	/*소속부서코드*/
		session.setAttribute("GBL_SECTNM",      StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1"))); 	/*소속부서명*/
		session.setAttribute("GBL_DEPTCD",      StrUtil.nullParam(searchUserInfo.get("DEPT_CODE"))); 	/*부서코드*/
		session.setAttribute("GBL_DEPTNM",      StrUtil.nullParam(searchUserInfo.get("DEPT_NAME"))); 	/*부서명*/
		session.setAttribute("GBL_SYSTCD",		sSysCode); 	/*접속시스템코드*/
		
		session.setAttribute("GBL_DBTYPECD",	dbType); 	/* 접속 데이터베이스 타입 */
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("GBL_USERID",      StrUtil.nullParam(searchUserInfo.get("USER_IDXX"))); 	/*사용자ID*/
		returnMap.put("GBL_EMPLNO",      StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB"))); 	/*사원번호*/
		returnMap.put("GBL_LOGINIP",     sUserIP);                    					          /*로그인 IP*/
		returnMap.put("GBL_USERNM",      StrUtil.nullParam(searchUserInfo.get("EMPL_NAME"))); 	/*사원명*/
		returnMap.put("GBL_USERPW",      ""); 											/*비밀번호*/
		returnMap.put("GBL_SECTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
		returnMap.put("GBL_SECTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_DEPTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_CODE")));/*부서코드*/
		returnMap.put("GBL_DEPTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_NAME")));/*부서명*/
		returnMap.put("GBL_DEPTCD1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
		returnMap.put("GBL_DEPTNM1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_COMPANYCODE",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*회사코드*/
		returnMap.put("GBL_COMPANYNAME",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*회사명*/
		
		returnMap.put("GBL_ENFCCD",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*사업장코드*/
		returnMap.put("GBL_ENFCNM",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*사업장명*/
		
		returnMap.put("GBL_SYSTCD",		sSysCode);     /*접속시스템코드*/
		returnMap.put("GBL_DBTYPECD",	dbType);     /* 접속 데이터베이스 */
		
		
		
		//================================================== 세션에 서버IP를 이용한 KEY_STRING 값 저장(2016년말 솔루션 적용 대응)
		String sLocalAddr = request.getLocalAddr();
		if ("LOCAL".equals(CoreProperties.getProperty("CoreERP.runningMode"))) {	// 로컬개발환경은 FIX
			sLocalAddr = CoreProperties.getProperty("Inbus.dev.KeyString");
		}
		
		//L4 혹은 서버이전 등에서 문제 될 수 있으므로 C클래스까지만 쓰자!
		String[] sTempIP = sLocalAddr.split("\\.");
		sLocalAddr = "_";
		if ( sTempIP.length > 0 ) {
			sLocalAddr += sTempIP[0];
		}
		if ( sTempIP.length > 1 ) {
			sLocalAddr += "." + sTempIP[1];
		}
		if ( sTempIP.length > 2 ) {
			sLocalAddr += "." + sTempIP[2];
		}
		
		// 세션에만 입력하면 되는것인가?
		String keyValue1 = sLocalAddr;
		String keyValue2 = "RGNB_KSTR".concat(sLocalAddr);
		String keyValue3 = "ACNO_KSTR".concat(sLocalAddr);
		
		while ( true ) {
			if ( keyValue2.length() >= 32 && keyValue3.length() >= 32  ) {
				keyValue2 = keyValue2.substring(0, 32);
				keyValue3 = keyValue3.substring(0, 32);
				break;
			}
			keyValue2 = keyValue2.concat(sLocalAddr);
			keyValue3 = keyValue3.concat(sLocalAddr);
		}
		
		session.setAttribute("WSVR_IPAR", keyValue1);
		session.setAttribute("RGNB_KSTR", keyValue2);
		session.setAttribute("ACNO_KSTR", keyValue3);
		
		//================================================== 세션에 서버IP를 이용한 KEY_STRING 값 저장(2016년말 연말정산 솔루션 적용 대응)
		
		
		return returnMap;
		
	}
	
	
	@SuppressWarnings("rawtypes")
	public Object processSSOLogin(Map<String, Object> searchVo, HttpServletRequest request) throws Exception{
		
		searchVo.put("LOGIN_IP", request.getRemoteAddr());
		
		// 입력 파라미터 처리
		String sUserID = CryptSHA.base64Decode(searchVo.get("USER_IDXX").toString());
		String sSysCode = CryptSHA.base64Decode(searchVo.get("SYSTEM").toString());
		
		String dbType = (String) (searchVo.get("GBL_DBTYPECD") == null ? "" : searchVo.get("GBL_DBTYPECD"));
		
		searchVo.put("USER_IDXX", sUserID);
		
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("------ processSSOLogin >>>>>>>>>> Requested Login Info : " + searchVo);
		}
		
		String sUserIP    = (String) searchVo.get("LOGIN_IP");    //로그인 사용자 ID
		String sPassword  = "";                                   //비빌번호 
		
		Map<String, Object> searchUserInfo = (Map<String, Object>) comLoginDao.processLogin(searchVo);
		
		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("------ processSSOLogin >>>>>>>>>> Retrieved User Info : " + searchUserInfo);
		}
		
		if ((searchUserInfo == null) || (searchUserInfo.isEmpty())) {
			throw new ProcessException("ID 또는 비밀번호를 확인하세요!");
		}
		
		// 로그인 기록 저장
		searchVo = new LinkedHashMap<String, Object>();
		searchVo.put("USER_IDXX", searchUserInfo.get("USER_IDXX"));
		searchVo.put("EMPL_NUMB", searchUserInfo.get("EMPL_NUMB"));
		searchVo.put("LGIN_DATE", DateTime.getDateString("yyyyMMdd"));
		searchVo.put("LGIN_IPAR", sUserIP);
		
		comLoginDao.processLOGINSAVE(searchVo);
		
		// 세션에 저장할 사용자 정보
		LoginVO loginVo = new LoginVO();
		loginVo.setId(StrUtil.nullParam(searchUserInfo.get("USER_IDXX")));
		loginVo.setIhidNum(StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB")));
		loginVo.setName(StrUtil.nullParam(searchUserInfo.get("EMPL_NAME")));
		loginVo.setOrgnztId(StrUtil.nullParam(searchUserInfo.get("DEPT_CODE")));
		
		HttpSession session = request.getSession(true);
		session.setAttribute("__ERP_USER_LOGIN__", loginVo);
		session.setAttribute("GBL_USERID",      StrUtil.nullParam(searchUserInfo.get("USER_IDXX"))); 	/*사용자ID*/
		session.setAttribute("GBL_EMPLNO",      StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB"))); 	/*사원번호*/
		session.setAttribute("GBL_USERNM",      StrUtil.nullParam(searchUserInfo.get("EMPL_NAME"))); 	/*사원명*/
		session.setAttribute("GBL_ENFCCD",      StrUtil.nullParam(searchUserInfo.get("ENFC_CODE"))); 	/*사업장코드*/
		session.setAttribute("GBL_ENFCNM",      StrUtil.nullParam(searchUserInfo.get("ENFC_NAME"))); 	/*사업장명*/
		session.setAttribute("GBL_SECTCD",      StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1"))); 	/*소속부서코드*/
		session.setAttribute("GBL_SECTNM",      StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1"))); 	/*소속부서명*/
		session.setAttribute("GBL_DEPTCD",      StrUtil.nullParam(searchUserInfo.get("DEPT_CODE"))); 	/*부서코드*/
		session.setAttribute("GBL_DEPTNM",      StrUtil.nullParam(searchUserInfo.get("DEPT_NAME"))); 	/*부서명*/
		session.setAttribute("GBL_SYSTCD",		sSysCode); 	/*접속시스템코드*/
		
		session.setAttribute("GBL_DBTYPECD",	dbType); 	/* 접속 데이터베이스 타입 */
		
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		returnMap.put("GBL_USERID",      StrUtil.nullParam(searchUserInfo.get("USER_IDXX"))); 	/*사용자ID*/
		returnMap.put("GBL_EMPLNO",      StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB"))); 	/*사원번호*/
		returnMap.put("GBL_LOGINIP",     sUserIP);                    					          /*로그인 IP*/
		returnMap.put("GBL_USERNM",      StrUtil.nullParam(searchUserInfo.get("EMPL_NAME"))); 	/*사원명*/
		returnMap.put("GBL_USERPW",      ""); 											/*비밀번호*/
		returnMap.put("GBL_SECTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
		returnMap.put("GBL_SECTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_DEPTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_CODE")));/*부서코드*/
		returnMap.put("GBL_DEPTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_NAME")));/*부서명*/
		returnMap.put("GBL_DEPTCD1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
		returnMap.put("GBL_DEPTNM1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_COMPANYCODE",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*회사코드*/
		returnMap.put("GBL_COMPANYNAME",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*회사명*/
		
		returnMap.put("GBL_ENFCCD",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*사업장코드*/
		returnMap.put("GBL_ENFCNM",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*사업장명*/
		
		returnMap.put("GBL_SYSTCD",		sSysCode);     /*접속시스템코드*/
		returnMap.put("GBL_DBTYPECD",	dbType);     /* 접속 데이터베이스 */
		
		
		
		//================================================== 세션에 서버IP를 이용한 KEY_STRING 값 저장(2016년말 솔루션 적용 대응)
		String sLocalAddr = request.getLocalAddr();
		if ("LOCAL".equals(CoreProperties.getProperty("CoreERP.runningMode"))) {	// 로컬개발환경은 FIX
			sLocalAddr = CoreProperties.getProperty("Inbus.dev.KeyString");
		}
		
		//L4 혹은 서버이전 등에서 문제 될 수 있으므로 C클래스까지만 쓰자!
		String[] sTempIP = sLocalAddr.split("\\.");
		sLocalAddr = "_";
		if ( sTempIP.length > 0 ) {
			sLocalAddr += sTempIP[0];
		}
		if ( sTempIP.length > 1 ) {
			sLocalAddr += "." + sTempIP[1];
		}
		if ( sTempIP.length > 2 ) {
			sLocalAddr += "." + sTempIP[2];
		}
		
		// 세션에만 입력하면 되는것인가?
		String keyValue1 = sLocalAddr;
		String keyValue2 = "RGNB_KSTR".concat(sLocalAddr);
		String keyValue3 = "ACNO_KSTR".concat(sLocalAddr);
		
		while ( true ) {
			if ( keyValue2.length() >= 32 && keyValue3.length() >= 32  ) {
				keyValue2 = keyValue2.substring(0, 32);
				keyValue3 = keyValue3.substring(0, 32);
				break;
			}
			keyValue2 = keyValue2.concat(sLocalAddr);
			keyValue3 = keyValue3.concat(sLocalAddr);
		}
		
		session.setAttribute("WSVR_IPAR", keyValue1);
		session.setAttribute("RGNB_KSTR", keyValue2);
		session.setAttribute("ACNO_KSTR", keyValue3);
		
		//================================================== 세션에 서버IP를 이용한 KEY_STRING 값 저장(2016년말 연말정산 솔루션 적용 대응)
		
		
		return returnMap;
		
	}
	
	/* (non-Javadoc)
	 * @see core.erp.com.service.ComLoginService#processPasswordChange(java.util.Map)
	 */
	public Object processPasswordChange(Map<String, Object> searchVo) throws Exception {

		// 현재 아이디와 비밀번호
		String sUserID = CryptSHA.base64Decode(searchVo.get("USER_IDXX").toString());
		String sUserPW = CryptSHA.base64Decode(searchVo.get("CURR_NUMB").toString());
		String sCahngePW = CryptSHA.encrypt256(CryptSHA.base64Decode(searchVo.get("SCRT_NUMB").toString()));
		searchVo.put("USER_IDXX", sUserID);
		
		LOGGER.info("------ User Info : " + searchVo);

		// 현재 비밀번호 확인하기.
		Map<String, Object> searchUserInfo = (Map<String, Object>) comLoginDao.processLogin(searchVo);
		
		LOGGER.info("------ Retrieved User Info : " + searchUserInfo);
		
		if ((searchUserInfo == null) || (searchUserInfo.isEmpty())) {
			throw new ProcessException("아이디 혹은 비밀번호가 틀렸습니다.");
		}
		
		sUserPW = CryptSHA.encrypt256(sUserPW);
		
		if (!searchUserInfo.get("SCRT_NUMB").equals(sUserPW)) {
			throw new ProcessException("아이디 또는 비밀번호를 확인하세요!");
		}

		// 현재 비밀번호가 맞다면 새로운 비밀번호 주고 변경하기
		searchVo.put("SCRT_NUMB", sCahngePW);

		int result = comLoginDao.processPasswordChange(searchVo);
		return result;
		
	}		

	public Object processPasswordInit(Map<String, Object> searchVo) throws Exception {

		// 현재 아이디와 비밀번호
		String sUserID = CryptSHA.base64Decode(searchVo.get("USER_IDXX").toString());
		String sCahngePW = CryptSHA.encrypt256(CryptSHA.base64Decode(searchVo.get("SCRT_NUMB").toString()));

		searchVo.put("USER_IDXX", sUserID);
		searchVo.put("SCRT_NUMB", sCahngePW);

		int result = comLoginDao.processPasswordChange(searchVo);
		String sMessage = "";
		
		if (result > 0){
			sMessage = "비밀번호 변경에 성공하였습니다.";
		}
		return sMessage;
	}
	
	@SuppressWarnings("rawtypes")
	public Object processUserInfo(Map<String, Object> searchVo) throws Exception{
		
		// 반환 값(전역변수, 전역 데이터셋)을 저장할 Map 객체
		Map<String, Object> returnMap = new LinkedHashMap<String, Object>();
		
		// 파라미터 값 처리
		String sUserID = CryptSHA.base64Decode(searchVo.get("USER_IDXX").toString());
		searchVo.put("USER_IDXX", sUserID);
		String sSysCode = CryptSHA.base64Decode(searchVo.get("SYST_CODE").toString());
		searchVo.put("SYST_CODE", sSysCode);
		
		
		Map<String, Object> searchUserInfo = (Map<String, Object>) comLoginDao.processLogin(searchVo);
		
		returnMap.put("GBL_USERID",     StrUtil.nullParam(searchUserInfo.get("USER_IDXX"))); 	/*사용자 ID*/
		returnMap.put("GBL_EMPLNO",      StrUtil.nullParam(searchUserInfo.get("EMPL_NUMB"))); 	/*사원번호*/
		returnMap.put("GBL_LOGINIP",     StrUtil.nullParam(searchVo.get("GBL_LOGINIP")));					/*로그인 IP*/
		returnMap.put("GBL_USERNM",      StrUtil.nullParam(searchUserInfo.get("EMPL_NAME"))); 	/*사원명*/
		returnMap.put("GBL_USERPW",      ""); 											/*비밀번호*/
		returnMap.put("GBL_SECTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
        returnMap.put("GBL_SECTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_DEPTCD",     StrUtil.nullParam(searchUserInfo.get("DEPT_CODE")));/*부서코드*/
		returnMap.put("GBL_DEPTNM",     StrUtil.nullParam(searchUserInfo.get("DEPT_NAME")));/*부서명*/
		returnMap.put("GBL_DEPTCD1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVCD1")));/*소속코드*/
		returnMap.put("GBL_DEPTNM1",     StrUtil.nullParam(searchUserInfo.get("DEPT_LVNM1")));/*소속명*/
		returnMap.put("GBL_COMPANYCODE",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*회사코드*/
		returnMap.put("GBL_COMPANYNAME",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*회사명*/
		
		returnMap.put("GBL_ENFCCD",     StrUtil.nullParam(searchUserInfo.get("ENFC_CODE")));/*사업장코드*/
        returnMap.put("GBL_ENFCNM",     StrUtil.nullParam(searchUserInfo.get("ENFC_NAME")));/*사업장명*/
        
        
        returnMap.put("GBL_OPOSCD",     StrUtil.nullParam(searchUserInfo.get("OPOS_CODE")));	/* 직위코드 */
        returnMap.put("GBL_OPOSNM",     StrUtil.nullParam(searchUserInfo.get("OPOS_CDNM")));	/* 직위명 */
        
        
        // 사용자 개인설정(테마, 언어코드) 정보 조회
     	Map<String, Object> detailUserInfo = (Map<String, Object>) comLoginDao.processCommonUserInfo(searchVo);
     	
     	// 개인설정이 되어있지 않으면..
     	if (detailUserInfo == null) detailUserInfo = new HashMap<String, Object>();
     	
     	String themeCode = (String) detailUserInfo.get("MYTM_TYCD");
     	if ((themeCode == null) || themeCode.isEmpty()) {
     		themeCode = "PURPLE";	// 기본 테마
     	}
     	
     	String languageCode = (String) detailUserInfo.get("USER_LNCD");
     	if ((languageCode == null) || languageCode.isEmpty()) {
     		languageCode = "ko";	// 기본 언어는 한국어
     	}
     	
        returnMap.put("GBL_THEMECD",    themeCode);		/* 테마유형코드 */
        returnMap.put("GBL_LANGCD",     languageCode);	/* 사용자언어코드 */
        
        
        String dbType = (String) searchVo.get("GBL_DBTYPECD");
		
		if ((dbType == null) || "".equals(dbType)) {
			dbType = "ORACLE";
		}
        returnMap.put("GBL_DBTYPECD",	dbType);     /* 접속 데이터베이스 */
        
        
        searchVo.put("GBL_LANGCD", languageCode);
        
		returnMap.put("dsMenuList", comLoginDao.processMENUDOWN(searchVo));		// 기본 메뉴목록 조회
		returnMap.put("dsMyMenuList", comLoginDao.processMYMENUDOWN(searchVo));	// 마이메뉴 목록 조회
		returnMap.put("dsMessage", comLoginDao.processMESSAGEDOWN(searchVo));	// 시스템 공통메시지 목록 조회

		return returnMap;
		
	}

	@SuppressWarnings("rawtypes")	
	public int processLoginSave(Map<String, Object> saveData) throws Exception {
		return comLoginDao.processLOGINSAVE(saveData);
	}

	@SuppressWarnings("rawtypes")
	public int processADDMYMENU(Map saveData) throws Exception{
		 
		 int updateCount = 0;
		 int deleteCount = 0;
		 Map rowVo = null;
		 
		 //기존로직은 한줄짜리 데이터에 넣고  쓰는건데, 컬럼 관리상 ds에 한줄만 담아서 넘긴다.
		 //PROC_TYPE [S,D]로 구분. 삽입, 삭제
		 
		List ds     = (List) saveData.get("dsAddMyMenu");  
		rowVo = (Map) ds.get(0);
		
		if(rowVo.get("PROC_TYPE").equals("S")) {
			comLoginDao.processINSERTMYMENU(rowVo);
			updateCount++;
		} else if(rowVo.get("PROC_TYPE").equals("D")) {
			comLoginDao.processDELETEMYMENU(rowVo);
			deleteCount++;
		}		
		
		return deleteCount + updateCount;

	}

	/* (non-Javadoc)
	 * @see core.erp.com.service.ComLoginService#processLogOut(java.util.Map)
	 */
	@Override
	public int processLogout(Map<String, Object> searchVo) throws Exception {
		// TODO Auto-generated method stub
		searchVo.put("USER_IDXX", searchVo.get("GBL_USERID"));
		return (int) comLoginDao.processLOGOUT(searchVo);
	}

	/* (non-Javadoc)
	 * @see core.erp.com.service.ComLoginService#processSettingSave(java.util.Map)
	 */
	@Override
	public int processSettingSave(Map<String, Object> saveData)	throws Exception {
		
		int updateCount = 0;
		comLoginDao.processSettingSave(saveData);
		return updateCount;
		
	}

	
	
}