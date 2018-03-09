package core.erp.com.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	ComLoginDao - 기본 로그인 처리 서비스 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	genie <jsh@inbus.co.kr>
 * @since	2016. 6. 13.
 * @version	1.0
 * @see		{@link CmmBaseDAO}
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
@Repository("ComLoginDao")
public class ComLoginDao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 로그인 정보 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processLogin(Map searchVo) throws Exception {
		return selectByPk("COMLOGIN.LOGINCHECK", searchVo);
	}
	
	
	/**
	 * <pre>
	 * 비밀번호 변경
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processPasswordChange(Map searchVo) throws Exception {
		return update("COMLOGIN.PASSWORDCHANGE", searchVo);
	} 

	/**
	 * <pre>
	 * 메뉴리스트 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processMENUDOWN(Map searchVo) throws Exception {
		return list("COMLOGIN.MENUDOWN", searchVo);
	}	

	/**
	 * <pre>
	 * 마이메뉴리스트 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processMYMENUDOWN(Map searchVo) throws Exception {
		return list("COMLOGIN.MYMENUDOWN", searchVo);
	}

	/**
	 * <pre>
	 * 마이메뉴 저장
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processINSERTMYMENU(Map dataVo) throws Exception {
		return insert("COMLOGIN.INSERTMYMENU", dataVo);
	}
	
	/**
	 * <pre>
	 * 마이메뉴삭제
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETEMYMENU(Map dataVo) throws Exception {
		return delete("COMLOGIN.DELETEMYMENU", dataVo);
	}
	
	/**
	 * <pre>
	 * 메세지리스트 조회
	 * </pre>
	 *
	 * @param searchVo
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processMESSAGEDOWN(Map searchVo) throws Exception {
		return list("COMLOGIN.MESSAGEDOWN", searchVo);
	}	

	/**
	 * <pre>
	 * 로그인정보 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processLOGINSAVE(Map saveData) throws Exception {
		return update("COMLOGIN.LOGINSAVE", saveData);
	}

	
	/**
	 * <pre>
	 * 사용자 개인설정 정보 조회(테마, 언어코드 정보 조회)
	 * </pre>
	 *
	 * @param paramMap 사용자 아이디 정보
	 * @return 사용자의 개인 설정 정보
	 * @throws Exception 예외 발생 시
	 */
	public Object processCommonUserInfo(Map paramMap) throws Exception {
		return select("COMLOGIN.COMMONUSERINFO", paramMap);
	}
	
	
	/**
	 * <pre>
	 * 사용자 개인설정 정보 저장
	 * </pre>
	 *
	 * @param paramMap 저장할 사용자 개인설정 정보
	 * @return 저장 결과
	 * @throws Exception 예외발생 시
	 */
	public Object processSettingSave(Map paramMap) throws Exception {
		return insert("COMLOGIN.SETTINGSAVE", paramMap);
	}
	
	
	/**
	 * <pre>
	 * 로그아웃 저장
	 * </pre>
	 *
	 * @param saveData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processLOGOUT(Map saveData) throws Exception {
		return update("COMLOGIN.LOGOUT", saveData);
	}
	
	
	
}
