/**
 * core.erp.tmm.service.impl.FAMB0040Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMB0040Service - 전표 승인 처리 서비스 인터페이스
 * </pre>
 * 
 * @author	오혜성	
 * @since	2016.07.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMB0040Dao")
public class FAMB0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전표 승인 처리  테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMB0040.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  전표 승인 처리 목록을 상세 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표 상세 조회 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FAMB0040.SEARCH01", searchVo);

	}	
	
	/**
	 * <pre>
	 *  전표 승인 취소
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processAPPRPROC00(Map dataVo) throws Exception {
	
		return insert("FAMB0040.APPRPROC00", dataVo);

	}
	
	/**
	 * <pre>
	 *  전표 승인 취소
	 * </pre>
	 * @param paramMap - 취소할 데이터
	 * @return 취소 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processAPPRPROC01(Map dataVo) throws Exception {
	
		return insert("FAMB0040.APPRPROC01", dataVo);

	}	

	/**
	 * <pre>
	 *  전표 변화 내용 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("FAMB0040.UPDATE00", dataVo);
		
	}
	/**
	 * <pre>
	 *  전표 변화 내용 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map dataVo) throws Exception {
	
		return update("FAMB0040.SAVE00", dataVo);
		
	}

}
