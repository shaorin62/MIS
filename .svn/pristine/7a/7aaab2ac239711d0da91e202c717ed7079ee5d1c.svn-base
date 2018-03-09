package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0060Dao - 퇴직소득전산매체 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 20.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 20.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("PAYF0060Dao")
public class PAYF0060Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  퇴직소득원천징수영수증 제출자 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직소득전산매체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0060.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  퇴직소득원천징수영수증 의무자 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직소득전산매체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYF0060.SEARCH01", searchVo);
		
	}
	
	/**
	 * <pre>
	 *  퇴직소득원천징수영수증 주근무처 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직소득전산매체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("PAYF0060.SEARCH02", searchVo);
		
	}
	
	/**
	 * <pre>
	 *  퇴직소득원천징수영수증 파일 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직소득전산매체 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings({ "rawtypes" })
	public Object processSEARCH03(Map searchVo) throws Exception {
		return list("PAYF0060.SEARCH03", searchVo);
		
	}
	
	/**
	 * <pre>
	 *  퇴직소득원천징수영수증 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("PAYF0060.SAVE00", dataVo);

	}
}
