/**
 * core.erp.tmm.service.impl.PDMC0021Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMC0021Controller - 제작견적서 제작용  등록 조회
 * </pre>
 *
 * @author	오세훈
 * @since	2016.12.21
 * @version	1.0
 * @see		{@link PDMC0021}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.12.21	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PDMC0021Dao")
public class PDMC0021Dao extends CmmBaseDAO {

	/**
	 * 제작 견적서 - 제작용 을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMC0021.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 견적서 - 제작용  하단 상세 내역 조회  한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMC0021.SEARCH01", searchVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작용 견적서 헤더 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PDMC0021.SAVE00", dataVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 - 하단 상세 내역 입력 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PDMC0021.SAVE01", dataVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 하단 상세 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PDMC0021.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 하단 상세 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PDMC0021.UPDATE01", dataVo);
		
	}
	
	
	
	/**
	 * <pre>
	 *  제작견적서 견적 상세 내역 삭제 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMC0021.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  제작견적서 견적 예상견적이 있을경우 삭제 
	 *  이범석 부장님 요청으로 예상견적을 입력하지 않고 바로 진행하는 경우가 발생하여 예상견적 테이블과 함께 진행 되야함.
	 *  하지만 실행견적 삭제시 예상견적만 남아 있기 때문에 여기서 다시 입력시 이전 예상견적 모두 삭제 해야 함. 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PDMC0021.DELETE01", dataVo);
		
	}
	

	/** 견적번호 만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getPREE_CODE() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMC0021.getPREE_CODE", "");
	}
	
	/** 견적하단 견전순번 생성 **/ 
	@SuppressWarnings("deprecation")
	public String getPREE_IDXX(Map dataVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMC0021.getPREE_IDXX", dataVo);
	}
	

	
	
	/**
	 * 제작 견적서 - 견적서 출력 헤더
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PDMC0021.PRINT00", searchVo);

	}
	
	/**
	 * 제작 견적서 - 견적서 출력 상세
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PDMC0021.PRINT01", searchVo);

	}
	
}
