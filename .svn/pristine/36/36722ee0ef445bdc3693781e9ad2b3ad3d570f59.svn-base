package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMB0050Dao - 추가예산관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 27.
 * @version	1.0
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier		Comment
 * ====================================================
 * 2016.10.11	권미영
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMB0050Dao")
public class BDMB0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  추가예산관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통추가예산관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("BDMB0050.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  전자결재용 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통추가예산관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
	
		return list("BDMB0050.PRINT00", searchVo);

	}
	
	/**
	 * <pre>
	 *  추가예산관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("BDMB0050.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  추가예산관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("BDMB0050.UPDATE00", dataVo);
		
	}
	/**
	 * <pre>
	 *  추가예산관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("BDMB0050.DELETE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  전자결재 연동 자료 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE99(Map dataVo) throws Exception {

		return delete("BDMB0050.DELETE99", dataVo);

	}

	/**
	 * <pre>
	 *  결재일련번호 채번 반환
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 결재 SEQ 조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH99(Map searchVo) throws Exception {

		return list("BDMB0050.SEARCH99", searchVo);

	}
	
	/**
	 * <pre>
	 *  전자결재 연동자료 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE99(Map dataVo) throws Exception {

		return insert("BDMB0050.SAVE99", dataVo);

	}

}