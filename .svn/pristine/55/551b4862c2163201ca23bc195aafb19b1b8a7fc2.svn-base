/**
 * core.erp.tmm.service.impl.PACA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0020ServiceImpl - 제작 전자세금계산서
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.19	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PACA0020Dao")
public class PACA0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제작 세금계산서 생성을 위한 제작명세서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PACA0020.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  제작 전자세금계산서 발송완료
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PACA0020.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  제작 전자세금계산서 미완료 상세 ITEM 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PACA0020.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  업체코드로 담당자 메일 가져오기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(String  sCUST_CODE) throws Exception {
	
		return list("PACA0020.SEARCH03", sCUST_CODE);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 발송
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PACA0020.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 ITEM 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PACA0020.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 STATUS 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE02(Map dataVo) throws Exception {
	
		return insert("PACA0020.SAVE02", dataVo);

	}

	/**
	 * <pre>
	 *  제작 세금계산서 INTERFACE 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE03(Map dataVo) throws Exception {
	
		return insert("PACA0020.SAVE03", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 전자세금계산서 코드 삽입
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0020.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  제작 전자세금계산서 데이터 취소 
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("PACA0020.UPDATE01", dataVo);
		
	}
	
	
	/**
	 * <pre>
	 *  전자결재 번호 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경조금 신청 결재 SEQ
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object getCONVERSATION_ID(Map searchVo) throws Exception {
		
		return list("PACA0020.getCONVERSATION_ID", searchVo);

	}
	
	
}
