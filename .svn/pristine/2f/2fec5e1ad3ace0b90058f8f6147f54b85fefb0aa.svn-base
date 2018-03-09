package core.erp.bdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	BDMA0020Dao - 예산과목계정매핑관리
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	안윤준
 * @since	2016. 7. 26.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016. 7. 26.	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("BDMA0020Dao")
public class BDMA0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  예산과목계정매핑관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 예산과목계정매핑관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("BDMA0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  예산과목계정매핑관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("BDMA0020.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  예산과목계정매핑관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("BDMA0020.UPDATE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  예산과목계정매핑관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("BDMA0020.DELETE00", dataVo);
		
	}

}