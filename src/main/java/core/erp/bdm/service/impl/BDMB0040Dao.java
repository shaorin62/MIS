package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMB0040Dao - 부서예산관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 27.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMB0040Dao")
public class BDMB0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부서예산관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통부서예산관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("BDMB0040.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  부서예산관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("BDMB0040.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  부서예산관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("BDMB0040.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  부서예산관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("BDMB0040.DELETE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  부서예산관리 복사
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {

		insert("BDMB0040.PROC00", searchVo);

	}
	
}