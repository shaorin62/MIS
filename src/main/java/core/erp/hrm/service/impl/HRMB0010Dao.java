package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMB0010Dao - 인사정보 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	박철영
 * @since	2016.07.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.07.07	박철영		Initial Created.
 * 2016.08.22	안윤준		수정
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMB0010Dao")
public class HRMB0010Dao extends CmmBaseDAO {
	
	/**
	 * 인사기본사항관리 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 인사기본사항관리 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH00", searchVo);		
	}
	
	/**
	 * 인사기본정보 상세 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 인사기본정보 상세 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH01", searchVo);		
	}
	
	/**
	 * 전경력 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 전경력 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH02", searchVo);		
	}
	
	/**
	 * 발령사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 발령사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH03", searchVo);		
	}
	
	/**
	 * 포상사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 포상사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH04", searchVo);		
	}
	
	/**
	 * 징계사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 징계사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH05", searchVo);		
	}
	
	/**
	 * 자격면허 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 자격면허 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH06(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH06", searchVo);		
	}
	
	/**
	 * 가족사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 가족사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH07", searchVo);		
	}
	
	/**
	 * 학력사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 학력사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH08(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH08", searchVo);		
	}
	
	/**
	 * 외국어사항 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 외국어사항 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH09(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH09", searchVo);		
	}
	
	/**
	 * 보증보험 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 보증보험 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH10", searchVo);		
	}
	
	/**
	 * 여권 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 여권 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH11(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH11", searchVo);		
	}
	
	/**
	 * 비자 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 비자 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH12(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH12", searchVo);		
	}
	
	/**
	 * 직무 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 교육훈련 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH13(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH13", searchVo);		
	}
	
	/**
	 * 교육 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 파일첨부 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH14(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH14", searchVo);		
	}
	
	/**
	 * 파일첨부 목록을 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 파일첨부 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH15(Map searchVo) throws Exception {
		return list("HRMB0010.SEARCH15", searchVo);		
	}
	 
	/**
	 * 인사기본사항 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE00", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public String processNEW_EMPL_NUMB(Map dataVo) throws Exception {
		return (String) selectByPk("HRMB0010.processNEW_EMPL_NUMB", dataVo);
	}
	
	/**
	 * 전경력 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE01", dataVo);
	}
	
	/**
	 * 자격면허 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE02", dataVo);
	}
	
	/**
	 * 가족사항 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE03", dataVo);
	}
	
	/**
	 * 학력사항 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE04(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE04", dataVo);
	}
	
	/**
	 * 외국어사항 자료를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE05(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE05", dataVo);
	}
	
	/**
	 * 변경요청 마스터를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE06(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE06", dataVo);
	}
	
	/**
	 * 상벌(포상,징계)를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE07(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE07", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public Object processSAVE08(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE08", dataVo);
	}
	
	/**
	 * 여권,비자를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE09(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE09", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public Object processSAVE10(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE10", dataVo);
	}
	
	/**
	 * 직무를 저장한다.
	 * @param paramMap - 등록 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE11(Map dataVo) throws Exception {
		return insert("HRMB0010.SAVE11", dataVo);
	}

	
	/**
	 * 인사기본정보 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE00", dataVo);		
	}
	
	/**
	 * 전경력 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE01", dataVo);		
	}
	
	/**
	 * 자격면허 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE02", dataVo);		
	}
	
	/**
	 * 가족사항 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE03", dataVo);		
	}
	
	/**
	 * 학력사항 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE04(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE04", dataVo);		
	}
	
	/**
	 * 외국어사항 자료를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE05(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE05", dataVo);		
	}
	
	/**
	 * 인사기본정보의 이미지 또는 서명 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE06(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE06", dataVo);
	}
	
	/**
	 * 상벌(포상,징계) 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE07(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE07", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public int processUPDATE08(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE08", dataVo);
	}
	
	/**
	 * 여권,비자 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE09(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE09", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE10", dataVo);
	}
	
	/**
	 * 직무 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE11(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE11", dataVo);
	}

	/**
	 * 교육훈련 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE13(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE13", dataVo);
	}
	
	/**
	 * 발령사항 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE14(Map dataVo) throws Exception {
		return update("HRMB0010.UPDATE14", dataVo);
	}
	
	/**
	 * 인사기본정보 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE00", dataVo);
	}
	
	/**
	 * 전경력 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE01", dataVo);
	}
	
	/**
	 * 자격면허 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE02", dataVo);
	}
	
	/**
	 * 가족사항 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE03(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE03", dataVo);
	}
	
	/**
	 * 학력사항 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE04(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE04", dataVo);
	}
	
	/**
	 * 외국어사항 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE05(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE05", dataVo);
	}
	
	/**
	 * 상벌(포상,징계) 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE07(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE07", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public int processDELETE08(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE08", dataVo);
	}
	
	/**
	 * 여권,비자 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE09(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE09", dataVo);
	}
	@SuppressWarnings("rawtypes")
	public int processDELETE10(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE10", dataVo);
	}
	
	/**
	 * 직무 자료를 삭제한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE11(Map dataVo) throws Exception {
		return delete("HRMB0010.DELETE11", dataVo);
	}
	

}
