/**
 * core.erp.tmm.service.impl.PDMC0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMC0030Controller - 제작견적서 제작용  등록 조회
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.26
 * @version	1.0
 * @see		{@link PDMC0030}
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

@Repository("PDMC0030Dao")
public class PDMC0030Dao extends CmmBaseDAO {

	/**
	 * 제작 관리 화면을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 관리 하단 견적 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH01", searchVo);

	}
	
	
	/**
	 * 제작 관리 하단 견적상세 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH02", searchVo);

	}
	
	
	/**
	 * 제작 관리 하단 외주정산 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03_1(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH03_1", searchVo);

	}
	
	
	
	/**
	 * 제작 관리 하단 외주정산 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03_2(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH03_2", searchVo);

	}
	
	
	/**
	 * 제작 관리 하단 제작의뢰 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH04", searchVo);

	}
	
	/**
	 * 제작 관리 하단 제작물 탭 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH05(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH05", searchVo);

	}
	
	
	/**
	 * 제작 종류 콤보 가져오기
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH07(Map searchVo) throws Exception {
	
		return list("PDMC0030.SEARCH07", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작물 파일 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PDMC0030.SAVE00", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작물 관리 데이터 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {

		return update("PDMC0030.UPDATE00", dataVo);
		
	}
	
	
	
	/**
	 * <pre>
	 *  제작물 데이터 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMC0030.DELETE00", dataVo);
		
	}

	
	/** 파일계약서번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getFILE_NUMB() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMC0030.getFILE_NUMB", "");
	}

}
