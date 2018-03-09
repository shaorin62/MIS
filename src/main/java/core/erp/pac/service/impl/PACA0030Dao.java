/**
 * core.erp.tmm.service.impl.PACA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0030ServiceImpl - 제작 전자세금계산서
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.20
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.20	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PACA0030Dao")
public class PACA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제작 전표  생성을 위한 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PACA0030.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  제작 전표 생성 데이터 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PACA0030.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  제작 매입전표 미완료 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PACA0030.SEARCH02", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 매입전표 완료 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("PACA0030.SEARCH03", searchVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작 매출 전표 생성 로직
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PACA0030.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  전표 번호 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0030.UPDATE00", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  정산 데이터에 전표 번호 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PACA0030.UPDATE01", dataVo);
		
	}	
	
	/**
	 * <pre>
	 *  정산 데이터에 전표 번호 업데이트
	 * </pre>
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
		return update("PACA0030.UPDATE02", dataVo);
	}	
	
	/** 전표 ID 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getSEQX_IDXX() throws Exception{
		return (String)getSqlMapClient().queryForObject("PACA0030.getSEQX_IDXX", "");
	}
	
	
	
	/**
	 * <pre>
	 *  제작 매출 전표 헤더처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map dataVo) throws Exception {
	
		return update("PACA0030.PROC00", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작 매입 전표 헤더처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map dataVo) throws Exception {
	
		return update("PACA0030.PROC01", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 매입 전표 개인 모델료 헤더 처리
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map dataVo) throws Exception {
	
		return update("PACA0030.PROC02", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작 매출 전표 삭제 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PACA0030.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  제작 매입 전표 삭제 프로시저 
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("PACA0030.DELETE01", dataVo);
		
	}

	
	/**
	 * <pre>
	 *  매출 전표 처리 마스터 입력 후 전표 번호 리턴
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processMASTER_SAVE_SL(Map dataVo) throws Exception {
	
		return update("PACA0030.MASTER_SAVE_SL", dataVo);
		

	}
	
	
	/**
	 * <pre>
	 *  매출 합산 전표 처리 차변 금액 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_SL_D(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_SL_D", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  매출 합산 전표 처리 대변 금액 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_SL_C(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_SL_C", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  매출 전표 부가세 대변 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_VAT_SL(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_VAT_SL", dataVo);
		
	}
	
	
	
	
	
	/**
	 * <pre>
	 *  매입 전표 처리 마스터 입력 후 전표 번호 리턴
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processMASTER_SAVE(Map dataVo) throws Exception {
	
		return update("PACA0030.MASTER_SAVE", dataVo);
		

	}
	
	
	/**
	 * <pre>
	 *  전표 번호 리턴을 위한 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSLIP_NUMB(String  sSOUS_LNKY) throws Exception {
	
		return (String)getSqlMapClient().queryForObject("PACA0030.processSLIP_NUMB", sSOUS_LNKY);

	}
	

	/**
	 * <pre>
	 *  전표 처리 대변 합산 급액 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_C(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_C", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  전표 처리 대변 자유직업소득세 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_C_YESU(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_C_YESU", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  전표 처리 대변 자유직업 주민세 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_C_YESU2(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_C_YESU2", dataVo);
		
	}
	
	
	
	/**
	 * <pre>
	 *  합산 전표 처리 차변 급액 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_D(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_D", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  합산 전표 처리 차변 부가가치세 라인 추가 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_LINE_SAVE_VAT(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_LINE_SAVE_VAT", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  합산 전표 처리 FINISH 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSP_FINISH(Map dataVo) throws Exception {
	
		return update("PACA0030.processSP_FINISH", dataVo);
		
	}
	
	
}
