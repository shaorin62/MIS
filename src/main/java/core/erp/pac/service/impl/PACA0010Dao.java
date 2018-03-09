/**
 * core.erp.tmm.service.impl.PACA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.pac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PACA0010ServiceImpl - 제작 세금계산서 생성을 위함
 * </pre>
 * 
 * @author	오세훈
 * @since	2016.10.10
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.10	오세훈		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright JNF Communication.(C) All right reserved.
 */
 

@Repository("PACA0010Dao")
public class PACA0010Dao extends CmmBaseDAO {

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
	
		return list("PACA0010.SEARCH00", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 완료된 데이터를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PACA0010.SEARCH01", searchVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 완료 및 미완료 모두 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PACA0010.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 완료 상세 내역 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH03(Map searchVo) throws Exception {
	
		return list("PACA0010.SEARCH03", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 생성건 해더
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PACA0010.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 생성건 상세
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("PACA0010.SAVE01", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 세금계산서 하단 상세 품목 수정
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE02(Map dataVo) throws Exception {
	
		return update("PACA0010.SAVE02", dataVo);

	}
	
	/**
	 * <pre>
	 *  제작 세금계산서 영수 구분 수정
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE03(Map dataVo) throws Exception {
	
		return update("PACA0010.SAVE03", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  세금계산서 번호 업데이트
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PACA0010.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
//	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PACA0010.DELETE00", dataVo);
		
	}
	
	
	
	
	/** 계산서번호 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getTAXX_NUMB(String sDEND_DATE) throws Exception{
		return (String)getSqlMapClient().queryForObject("PACA0010.getTAXX_NUMB", sDEND_DATE);
	}

	
	/** 계산서ID 채번 **/ 
	@SuppressWarnings("deprecation")
	public String getTAXX_IDXX(Map rowVo) throws Exception{
		return (String)getSqlMapClient().queryForObject("PACA0010.getTAXX_IDXX", rowVo);
	}
	
	
	
	/**
	 * <pre>
	 *  세금계산서 인쇄
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표라인 관리항목
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {

		return list("PACA0010.PRINT00", searchVo);

	}	
	
	/**
	 * <pre>
	 *  세금계산서 인쇄 상세
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표라인 관리항목
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT01(Map searchVo) throws Exception {

		return list("PACA0010.PRINT01", searchVo);

	}
	
	
	
	/**
	 * <pre>
	 *  수정 세금꼐산서 생성을 위한 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH10(Map searchVo) throws Exception {
	
		return list("PACA0010.SEARCH10", searchVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE10(Map dataVo) throws Exception {
	
		return insert("PACA0010.SAVE10", dataVo);

	}
	
	
	/**
	 * <pre>
	 *  제작 수정세금계산서  상세 생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE11(Map dataVo) throws Exception {
	
		return insert("PACA0010.SAVE11", dataVo);

	}
	
	
	
	/**
	 * <pre>
	 *  제작 수정세금계산서  생성 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE20(Map dataVo) throws Exception {
	
		return update("PACA0010.UPDATE20", dataVo);

	}
	
	

}
