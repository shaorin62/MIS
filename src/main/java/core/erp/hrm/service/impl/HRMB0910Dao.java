package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMB0910Dao - 인재Pool관리 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 8. 12.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 8. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("HRMB0910Dao")
public class HRMB0910Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인재Pool관리 main 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMB0910.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  인재Pool관리 Tab(0) 학력 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HRMB0910.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  인재Pool관리 Tab(1) 경력 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HRMB0910.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  인재Pool관리 Tab(2) 면접 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("HRMB0910.SEARCH03", searchVo);

	}
	
	/**
	 * <pre>
	 *  인재Pool관리 Tab(3) 파일첨부 목록을 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("HRMB0910.SEARCH04", searchVo);

	}
	
	/**
	 * 인재Pool관리 main 정보를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("HRMB0910.SAVE00", dataVo);
	}
	
	/**
	 * 인재Pool관리 main 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("HRMB0910.UPDATE00", dataVo);
	}
	
	/**
	 * 인재Pool관리 main 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("HRMB0910.DELETE00", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(0) 학력 정보를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("HRMB0910.SAVE01", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(0) 학력 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
		return update("HRMB0910.UPDATE01", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(0) 학력 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		return delete("HRMB0910.DELETE01", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(1) 경력을 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		return insert("HRMB0910.SAVE02", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(1) 경력 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
		return update("HRMB0910.UPDATE02", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(1) 경력 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
		return delete("HRMB0910.DELETE02", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(2) 면접 정보를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
		return insert("HRMB0910.SAVE03", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(2) 면접 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
		return update("HRMB0910.UPDATE03", dataVo);
	}
	
	/**
	 * 인재Pool관리 Tab(2) 면접 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {
		return delete("HRMB0910.DELETE03", dataVo);
	}

}
