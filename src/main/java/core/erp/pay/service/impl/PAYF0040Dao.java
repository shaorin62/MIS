package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0040Dao - 퇴직금지급현황 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 9. 6.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("PAYF0040Dao")
public class PAYF0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  퇴직금지급현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직금지급현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0040.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  퇴직금지급현황 테이블 수정
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE00(Map dataVo) throws Exception {
		return insert("PAYF0040.UPDATE00", dataVo);

	}

//	/**
//	 * 퇴직금지급내역 출력 조회
//	 * @param paramMap - 조회 파라미터
//	 * @return 퇴직급지급내역 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT00(Map<String, Object> paramMap) {
//		return (List<Map<String, Object>>)list("PAYF0040.REPORT00", paramMap);
//	}	
//	
//	/**
//	 * 퇴직금지급내역 출력 조회
//	 * @param paramMap - 조회 파라미터
//	 * @return 퇴직급지급내역 데이터 목록
//	 * @throws Exception - 처리시 발생한 예외
//	 */
//	public List<Map<String, Object>> getREPORT01(Map<String, Object> paramMap) {
//		return (List<Map<String, Object>>)list("PAYF0040.REPORT01", paramMap);
//	}	
}
