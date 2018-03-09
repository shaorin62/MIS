/**
 * core.erp.mdm.service.impl.MDMD0020Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMD0020Dao - 인터넷 거래명세서 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.17
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.17	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMD0020Dao")
public class MDMD0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인터넷 개별청약 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인터넷 개별청약 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MDMD0020.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서(헤더) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인터넷 거래명세서(헤더) 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MDMD0020.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서(헤더) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인터넷 거래명세서(헤더) 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MDMD0020.SEARCH02", searchVo);
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
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("MDMD0020.SEARCH03", searchVo);
	}

	/**
	 * <pre>
	 *  인터넷 거래명세서 헤더 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MDMD0020.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서 상세 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("MDMD0020.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서(헤더 - 광고주별) 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("MDMD0020.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  인터넷 개별청약 
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MDMD0020.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  인터넷 개별청약 
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("MDMD0020.UPDATE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  인터넷 광고주별 거래명세서(헤더) 업데이트(금액 합산)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("MDMD0020.UPDATE02", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  인터넷 개별청약 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MDMD0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서(헤더) 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("MDMD0020.DELETE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서(상세) 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE02(Map dataVo) throws Exception {
	
		return delete("MDMD0020.DELETE02", dataVo);
		
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
	public String processNEW_TRAN_NUMB(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMD0020.NEW_TRAN_NUMB", searchVo);

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
	public String processTRAN_NUMB(Map searchVo) throws Exception {
	
		return (String)selectByPk("MDMD0020.TRAN_NUMB", searchVo);

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

		return (String)selectByPk("MDMD0020.NEW_TSEQ_FILD", searchVo);
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
		return (int)selectByPk("MDMD0020.COUNTTRANXD", searchVo);
	}
	/**
	 * 거래 명세서 출력을 위한 헤더 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("MDMD0020.PRINT00", searchVo);

	}
	
	/**
	 * 거래 명세서 출력위한 상세 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {
	
		return list("MDMD0020.PRINT01", searchVo);

	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서 디테일 부가세금액 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
	
		return update("MDMD0020.UPDATE10", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  인터넷 거래명세서 헤더 부가세금액 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE11(Map dataVo) throws Exception {
	
		return update("MDMD0020.UPDATE11", dataVo);
	
	}

}
