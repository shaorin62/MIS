/**
 * core.erp.tmm.service.impl.PDMA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMA0020Controller - 제작 계약관리 화면 
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.19
 * @version	1.0
 * @see		{@link PDMA0020}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PDMA0020Dao")
public class PDMA0020Dao extends CmmBaseDAO {

	/**
	 * 제작 계약서 데이터 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMA0020.SEARCH00", searchVo);

	}
	
	/**
	 * 제작계약서 생성을 위한 기초 데이터를 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMA0020.SEARCH01", searchVo);

	}

	
	/**
	 * 제작계약서 상단 내역 상세 내역 조호 ㅣ
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PDMA0020.SEARCH02", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  계약서 데이터 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PDMA0020.UPDATE00", dataVo);
		
	}
	
	
	
	/**
	 * <pre>
	 *  계약서 하단 기초 데이터 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PDMA0020.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  계약서 하단 기초데이터 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PDMA0020.UPDATE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  계약서 발송시 상태 값변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("PDMA0020.UPDATE02", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  계약서 생성 로직
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("PDMA0020.SAVE02", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  계약서 데이터 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMA0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  계약서 데이터 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PDMA0020.DELETE01", dataVo);
		
	}
	
	
	
	/** 계약하단 기초데이터 순번  만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getCONT_IDXX() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMA0020.getCONT_IDXX", "");
	}
	
	/** 계약서 번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getCONT_NUMB() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMA0020.getCONT_NUMB", "");
	}
	
	
	/** 계약서 번호 업데이트 **/ 
	@SuppressWarnings("rawtypes")
	public int updateCONT_NUMB(Map dataVo) throws Exception{
		return update("PDMA0020.updateCONT_NUMB", dataVo);
	}
	
	/** 실행견적에 번호 업데이트 **/ 
	@SuppressWarnings("rawtypes")
	public int updateESTI_NUMB(Map dataVo) throws Exception{
		return update("PDMA0020.updateESTI_NUMB", dataVo);
	}
	
	
	
	/**
	 * 제작 계약서 관리 출력을 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PDMA0020.PRINT00", searchVo);

	}
	
}
