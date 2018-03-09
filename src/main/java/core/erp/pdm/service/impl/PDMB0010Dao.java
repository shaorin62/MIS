/**
 * core.erp.tmm.service.impl.PDMB0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMB0010Controller - 제작의뢰 등록 조회
 * </pre>
 *
 * @author	오세훈
 * @since	2016.09.07
 * @version	1.0
 * @see		{@link PDMB0010}
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

@Repository("PDMB0010Dao")
public class PDMB0010Dao extends CmmBaseDAO {

	/**
	 * 제작의뢰 등록건을 조회한다.
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH00", searchVo);

	}
	
	/**
	 * 제작 종류를 가져오기 위한 조회
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  전자결재 관련 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH02", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  전자결재 시퀸스 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH03", searchVo);

	}


	/**
	 * 제작의뢰 실적분배율 등록
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH10", searchVo);

	}
	
	/**
	 * 제작의뢰 외주업체 실행예산등록
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH20(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH20", searchVo);

	}
	
	/**
	 * <pre>
	 *  외주업체 실행예산 등록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH30(Map searchVo) throws Exception {
	
		return list("PDMB0010.SEARCH30", searchVo);

	}
	
	

	
	/**
	 * <pre>
	 *  제작의뢰 내역 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PDMB0010.DELETE00", dataVo);

	}
	 
	 
		/**
		 * <pre>
		 *  전자결재 데이터 삭제
		 * </pre>
//		 * @param paramMap - 삭제할 데이터
		 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
		 * @throws Exception - 처리시 발생한 예외
		 */
		@SuppressWarnings("rawtypes")
		public int processDELETE01(Map dataVo) throws Exception {
		
			return delete("PDMB0010.DELETE01", dataVo);

		}
	
	/**
	 * <pre>
	 *  제작의뢰 실적 분배율 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE10(Map dataVo) throws Exception {
	
		return delete("PDMB0010.DELETE10", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  제작의뢰 외주내역 실행예산서 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE20(Map dataVo) throws Exception {
	
		return delete("PDMB0010.DELETE20", dataVo);

	}
	
	
	
	
	/**
	 * <pre>
	 *  제작의뢰 내역 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PDMB0010.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작의뢰 전자결재 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PDMB0010.SAVE01", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작의뢰 실적분배율 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE10(Map dataVo) throws Exception {
	
		return insert("PDMB0010.SAVE10", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작의뢰 외주업체 실행예산 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE20(Map dataVo) throws Exception {
	
		return insert("PDMB0010.SAVE20", dataVo);

	}
	

	/**
	 * <pre>
	 *  제작의뢰 내역 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PDMB0010.UPDATE00", dataVo);
		
	}
	

	/**
	 * <pre>
	 *  제작의뢰 실적분배율 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE10(Map dataVo) throws Exception {
	
		return update("PDMB0010.UPDATE10", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  제작의뢰 외주업체 실행예산 변경
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE20(Map dataVo) throws Exception {
	
		return update("PDMB0010.UPDATE20", dataVo);
		
	}
	
	
	
	
	
	/** 제작의뢰번호 만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getJOBN_NUMB() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMB0010.getJOBN_NUMB", "");
	}
	
	
	/** 실적분배율 id 만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getSEQX_IDXX() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMB0010.getSEQX_IDXX", "");
	}
	
	/** 실적분배율 JOB 순번 만들기**/ 
	@SuppressWarnings("deprecation")
	public String getJOBN_SEQX(String JOBN_NUMB) throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMB0010.getJOBN_SEQX", JOBN_NUMB);
	}
	
	
	/** 외주계획 실행예산서 ID 만들기 **/ 
	@SuppressWarnings("deprecation")
	public String getSEQX_IDXXOUT() throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMB0010.getSEQX_IDXXOUT", "");
	}
	
	/** 외주계획 실행예산서  JOB 순번 만들기**/ 
	@SuppressWarnings("deprecation")
	public String getJOBN_SEQXOUT(String JOBN_NUMB) throws Exception{
		return (String)getSqlMapClient().queryForObject("PDMB0010.getJOBN_SEQXOUT", JOBN_NUMB);
	}
	
	
	/**
	 * <pre>
	 *  제작의뢰서 인쇄
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표라인 관리항목
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {

		return list("PDMB0010.PRINT00", searchVo);

	}	
	
	/**
	 * <pre>
	 *  제작의뢰서 인쇄 추가 외주계획 추가
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표라인 관리항목
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {

		return list("PDMB0010.PRINT01", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작의뢰 WORK 알림
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return update("PDMB0010.SAVE02", dataVo);

	}
	
	
}
