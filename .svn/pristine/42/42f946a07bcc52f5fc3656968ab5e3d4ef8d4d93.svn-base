/**
 * core.erp.tmm.service.impl.PDMD0020Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMD0020Controller - 제작명세서 - 제작명세서
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link PDMD0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.05	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PDMD0020Dao")
public class PDMD0020Dao extends CmmBaseDAO {

	/**
	 * 제작명세서 데이터 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMD0020.SEARCH00", searchVo);

	}
	
	/**
	 * 제작명세서 하단 상세 데이터 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMD0020.SEARCH01", searchVo);

	}
	

	/**
	 * 제작명세서 제작종류를 가져오기 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PDMD0020.SEARCH02", searchVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작명세서 하단 명세서 데이터 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PDMD0020.SAVE01", dataVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작명세서 하단 명세서 데이터 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PDMD0020.UPDATE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  제작명세서 명세서 하단 데이터 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PDMD0020.DELETE01", dataVo);
		
	}
	
	
	/** 명세서 하단데이터 견적번호 생성 **/ 
	@SuppressWarnings("deprecation")
	public String getPREE_IDXX(Map dataVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMD0020.getPREE_IDXX", dataVo);
	}
	
	
	/** 제작명세서 하단 수정시 상단 금액 저장 **/ 
	@SuppressWarnings("rawtypes")
	public int processUPDATEAMT(Map dataVo) throws Exception {
	
		return update("PDMD0020.UPDATEAMT", dataVo);
		
	}
	
	/**
	 * 제작 명세서 출력을 위한 헤더 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PDMD0020.PRINT00", searchVo);

	}
	
	/**
	 * 제작 명세서 출력위한 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PDMD0020.PRINT01", searchVo);

	}

}
