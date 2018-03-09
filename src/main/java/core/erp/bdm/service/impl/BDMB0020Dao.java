package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmAbstractDAO;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMB0020Dao - 부서예산인원편성인원설정
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	양현덕 <yhd@inbus.co.kr>
 * @since	2016. 06. 27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 06. 27.	양현덕		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMB0020Dao")
public class BDMB0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통부서예산인원편성인원설정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("BDMB0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("BDMB0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("BDMB0020.UPDATE00", dataVo);
		
	}
	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("BDMB0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 저장(전월인원복사 처리)
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC00(Map dataVo) throws Exception {
	
		return delete("BDMB0020.PROC00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  부서예산인원편성인원설정 테이블 저장(인사자료연동 처리)
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map dataVo) throws Exception {
	
		return delete("BDMB0020.PROC01", dataVo);
		
	}

}