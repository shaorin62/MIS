/**
 * core.erp.mdm.service.impl.MDMA0040Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMA0040Dao - 전파 거래명세서 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.20	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMA0040Dao")
public class MDMA0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전파 개별청약 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전파 개별청약 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MDMA0040.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  연월별 광고주 이름 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연월별 광고주 이름 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MDMA0040.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  전파 거래명세서(헤더) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전파 거래명세서(헤더) 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MDMA0040.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  전파 거래명세서(헤더) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전파 거래명세서(헤더) 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MDMA0040.SEARCH03", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 목록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH04(Map searchVo) throws Exception {
		return list("MDMA0040.SEARCH04", searchVo);
	}

	/**
	 * <pre>
	 *  전파 거래명세서 헤더 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MDMA0040.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  전파 거래명세서 상세 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("MDMA0040.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  전파 거래명세서(헤더 - 광고주별) 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("MDMA0040.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  전파 개별청약 
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MDMA0040.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  전파 개별청약 
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("MDMA0040.UPDATE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  전파 광고주별 거래명세서(헤더) 업데이트(금액 합산)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("MDMA0040.UPDATE02", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  전파 개별청약 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MDMA0040.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  전파 거래명세서(헤더) 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("MDMA0040.DELETE01", dataVo);
	}
	
	/**
	 * <pre>
	 *  전파 거래명세서(상세) 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("MDMA0040.DELETE02", dataVo);
		
	}	

	/**
	 * <pre>
	 *  신규 거래명세서(헤더) 번호채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_TRTR_NUMB(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMA0040.NEW_TRTR_NUMB", searchVo);

	}
	/**
	 * <pre>
	 * 거래명세서(헤더) 번호채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processTRTR_NUMB(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMA0040.TRTR_NUMB", searchVo);

	}

	/**
	 * <pre>
	 * 신규 거래명세서(상세) 번호채번
	 * </pre>
	 *
	 * @param paramMap - 조회 파라미터
	 * @return 신규 일련번호 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	public String processNewTSEQ_FILD(Map searchVo) throws Exception {

		return (String)selectByPk("MDMA0040.NEW_TSEQ_FILD", searchVo);
	}
	
	/**
	 * <pre>
	 * 세금계산서가 생성된 거래명세서가 있는지 찾는다.
	 * </pre>
	 *
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서가 생성된 거래명세서의 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	public int processCOUNTTRANXD(Map searchVo) throws Exception {
		return (int)selectByPk("MDMA0040.COUNTTRANXD", searchVo);
	}

	/**
	 * 거래 명세서 출력을 위한 헤더 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("MDMA0040.PRINT00", searchVo);

	}
	
	/**
	 * 거래 명세서 출력위한 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("MDMA0040.PRINT01", searchVo);

	}
	
	/**
	 * <pre>
	 *  전파 거래명세서 디테일 부가세금액 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
	
		return update("MDMA0040.UPDATE10", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  전파 거래명세서 헤더 부가세금액 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE11(Map dataVo) throws Exception {
	
		return update("MDMA0040.UPDATE11", dataVo);
	
	}

}
