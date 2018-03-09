/**
 * core.erp.tmm.service.impl.PDMC0020Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMC0020Controller - 제작견적서 제작용  등록 조회
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.23
 * @version	1.0
 * @see		{@link PDMC0020}
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

@Repository("PDMC0020Dao")
public class PDMC0020Dao extends CmmBaseDAO {

	/**
	 * 제작 견적서 - 제작용 을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMC0020.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 견적서 - 제작용 하단 상세 견적을 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMC0020.SEARCH01", searchVo);

	}
	
	/**
	 * 제작 견적서 - 제작용 하단 상세 견적을 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PDMC0020.SEARCH02", searchVo);

	}
	
	
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 - 제작용 하단 견적 상세 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PDMC0020.SAVE01", dataVo);

	}
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 - 제작용 견적 확정 버튼 클릭시 정산 데이터 생성
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("PDMC0020.SAVE02", dataVo);

	}
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작용 견적서 헤더가 없을경우 헤더를 저장해야 함
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
	
		return insert("PDMC0020.SAVE03", dataVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 - 제작용 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PDMC0020.UPDATE00", dataVo);
		
	}
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작견적서 - 제작용 하단 견적상세 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PDMC0020.UPDATE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  제작견적서 - 제작용 헤더 삭제 및 하단 상세내역 함께 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMC0020.DELETE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  제작견적서 - 제작용 하단 상세 내역 건별 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PDMC0020.DELETE01", dataVo);
		
	}
	
	
	/** 견적하단 견전순번 생성 **/ 
	@SuppressWarnings("deprecation")
	public String getPREE_IDXX(Map dataVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMC0020.getPREE_IDXX", dataVo);
	}
	
	
	/** 제작하단 수정시 상단 금액 저장 **/ 
	@SuppressWarnings("rawtypes")
	public int processUPDATEAMT(Map dataVo) throws Exception {
	
		return update("PDMC0020.UPDATEAMT", dataVo);
		
	}
	
	/** 제작하단 정산금액 계산 **/ 
	@SuppressWarnings("rawtypes")
	public int processUPDATESUJU(Map dataVo) throws Exception {
	
		return update("PDMC0020.UPDATESUJU", dataVo);
		
	}
	
	/** 견적번호 만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getPREE_CODE() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMC0020.getPREE_CODE", "");
	}
	
	
	/** 존재하는 정산 데이터 삭제 **/ 
	@SuppressWarnings("rawtypes")
	public int processDELETESUJU(Map dataVo) throws Exception {
	
		return delete("PDMC0020.DELETESUJU", dataVo);
		
	}
	
	
	/**
	 * 제작 견적서 - 견적서 출력 헤더
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("PDMC0020.PRINT00", searchVo);

	}
	
	/**
	 * 제작 견적서 - 견적서 출력 상세
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("PDMC0020.PRINT01", searchVo);

	}
	
}
