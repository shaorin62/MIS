/**
 * core.erp.tmm.service.impl.PCMA0040Dao.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PCMA0040Controller - 제작 제작사관리 화면
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.06
 * @version	1.0
 * @see		{@link PCMA0040}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PCMA0040Dao")
public class PCMA0040Dao extends CmmBaseDAO {

	/**
	 * 제작 템플릿 관리 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PCMA0040.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 템플릿 상세 견적  내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PCMA0040.SEARCH01", searchVo);

	}
	
	/**
	 *  제작사 하단 광고주 팀 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PCMA0040.SEARCH02", searchVo);

	}
	
	
	/**
	 *  모든 거래처명 가져오기
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("PCMA0040.SEARCH03", searchVo);

	}
	
	/**
	 *  계약서 담당자 등록을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("PCMA0040.SEARCH04", searchVo);

	}
	
	

	/**
	 * <pre>
	 *  제작사 하단 업종분류 항목을 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PCMA0040.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작사 하단 광고주 팀관련하여 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		
		return insert("PCMA0040.SAVE01", dataVo);
	}
	
	/**
	 * <pre>
	 *  제작사 하단 제작사 계약 담당자 등록 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
		
		return insert("PCMA0040.SAVE02", dataVo);
	}

	/**
	 * <pre>
	 *  견적템플릿 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PCMA0040.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  견적템플릿 하단 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PCMA0040.UPDATE01", dataVo);
		
	}
	

	
	/**
	 * <pre>
	 *  제작 계약 담당자 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("PCMA0040.UPDATE02", dataVo);
		
	}
	

	/**
	 * <pre>
	 *  제작사 하단 업종 분류 삭제...- 사용하지 않음.
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("PCMA0040.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  제작사 하단 광고주 팀 관리 탭 저장및 수정 
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		return delete("PCMA0040.DELETE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  제작사 하단 계약 담당자 삭제  
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
		return delete("PCMA0040.DELETE02", dataVo);
		
	}
	

	
	/** 업종분류 저장 방식 선택  **/ 
	@SuppressWarnings("deprecation")
	public int getROW_TYPE(String CUST_CODE) throws Exception{
		return (int)getSqlMapClient().queryForObject("PCMA0040.getROW_TYPE", CUST_CODE);
	}

	/** 광고주 팀코드 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getCUST_CODE() throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0040.getCUST_CODE", "");
	}
	
	/** 제작 계약 담당자 순번 생성 **/ 
	@SuppressWarnings("deprecation")
	public String getIDXX_NUMB(Map dataVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0040.getIDXX_NUMB", dataVo);
	}	

}


