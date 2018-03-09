package core.erp.com.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * <pre>
 *	ComLoginService - 기본 로그인 처리 서비스 인터페이스
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 6. 13.
 * @version	1.0
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
public interface ComLoginService {

	/**
	 * <pre>
	 * 로그인 - 신규
	 * NOTE : 2016.06.18 장성환 추가
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processLogin(Map<String, Object> searchVo, HttpServletRequest request) throws Exception;
	
	/**
	 * <pre>
	 * 로그인 - SSO 로그인
	 * NOTE : SSO로부터 전달받은 아이디만 체크하여 인증 및 처리함.
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processSSOLogin(Map<String, Object> searchVo, HttpServletRequest request) throws Exception;
	
	/**
	 * <pre>
	 * 패스워드 변경 - 신규
	 * NOTE : 2016.08.12 김준수 추가
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPasswordChange(Map<String, Object> searchVo) throws Exception;

	/**
	 * <pre>
	 * 패스워드 초기화  - 신규
	 * NOTE : 2016.09.29 권미영
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processPasswordInit(Map<String, Object> searchVo) throws Exception;

	/**
	/**
	 * <pre>
	 * 사용자 정보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public Object processUserInfo(Map<String, Object> searchVo) throws Exception;
	
	/**
	 * <pre>
	 * 로그인정보 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processLoginSave(Map<String, Object> saveData) throws Exception;	
	
	/**
	 * <pre>
	 * 마이메뉴 수정
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked","rawtypes"})
	public int processADDMYMENU(Map<String, Object> saveData) throws Exception;	
	
	/**
	 * <pre>
	 * 사용자 개인설정 정보 저장
	 * </pre>
	 *
	 * @param saveData 저장할 사용자 개인설정 정보
	 * @return 저장 결과
	 * @throws Exception 예외발생 시
	 */
	public int processSettingSave(Map<String, Object> saveData) throws Exception;
	
	/**
	 * <pre>
	 * 로그아웃 정보 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	public int processLogout(Map<String, Object> searchVo) throws Exception;
		
}