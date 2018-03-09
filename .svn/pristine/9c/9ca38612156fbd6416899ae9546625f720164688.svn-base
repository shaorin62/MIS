/**
 * core.erp.tmm.service.impl.PCMA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PCMA0030Controller - 제작견적 템플릿 관리
 * </pre>
 *
 * @author	오세훈
 * @since	2016.08.31
 * @version	1.0
 * @see		{@link PCMA0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PCMA0030Dao")
public class PCMA0030Dao extends CmmBaseDAO {

	/**
	 * 제작 템플릿 관리 내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PCMA0030.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 템플릿 상세 견적  내역을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PCMA0030.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  제작템플릿관리 상단 테이블에 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PCMA0030.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작템플릿관리 하단 테이블에 저장한다.
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("PCMA0030.SAVE01", dataVo);
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
	
		return update("PCMA0030.UPDATE00", dataVo);
		
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
	
		return update("PCMA0030.UPDATE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  견적 템플릿  하단 테이블 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("PCMA0030.DELETE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  견적 템플릿  상단 테이블 및 하단의 모든 견적 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		return delete("PCMA0030.DELETE01", dataVo);
		
	}
	
	
	/** 템플릿 코드 가져오기  **/ 
	@SuppressWarnings("deprecation")
	public int getTYPE_CODE() throws Exception{
		return (int)getSqlMapClient().queryForObject("PCMA0030.getTYPE_CODE", "");
	}
	
	/** 견적 코드 가져오기  **/ 
	@SuppressWarnings("deprecation")
	public int getITEM_SEQE(String TYPE_CODE) throws Exception{
		return (int)getSqlMapClient().queryForObject("PCMA0030.getITEM_SEQE", TYPE_CODE);
	}


}
