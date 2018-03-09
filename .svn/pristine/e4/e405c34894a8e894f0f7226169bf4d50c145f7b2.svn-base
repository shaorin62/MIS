/**
 * core.erp.tmm.service.impl.TMMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PCMA0010ServiceImpl - 공통코드관리(신규) 메뉴 서비스 인터페이스
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.09.02
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.02	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PCMA0010Dao")
public class PCMA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  공통코드마스터 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PCMA0010.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작분류항목 코드 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PCMA0010.SEARCH01", searchVo);

	}


	/**
	 * <pre>
	 *  공통코드마스터 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PCMA0010.SAVE00", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 견적코드관리 저장 
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PCMA0010.SAVE01", dataVo);

	}


	/**
	 * <pre>
	 *  공통코드마스터 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PCMA0010.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  공통코드마스터 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PCMA0010.UPDATE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PCMA0010.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  제작 견적코드관리 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PCMA0010.DELETE01", dataVo);
		
	}
	
	
	/** 대분류코드 만들기  **/ 
	@SuppressWarnings("deprecation")
	public String getHIGH_LEVL(String CLAS_TYPE) throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0010.getHIGH_LEVL", CLAS_TYPE);
	}
	
	/** 중분류코드 만들기  **/ 
	@SuppressWarnings("deprecation")
	public String getMIDD_LEVL(String HIGH_LEVL) throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0010.getMIDD_LEVL", HIGH_LEVL);
	}
	
	/** 소분류코드 만들기  **/ 
	@SuppressWarnings("deprecation")
	public String getSUBX_LEVL(Map dataVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PCMA0010.getSUBX_LEVL", dataVo);
	}

}
