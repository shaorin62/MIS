package core.erp.yea.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	YEAA0040Dao - 세액근거표 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.28.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.28.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("YEAA0040Dao")
public class YEAA0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  세액근거표 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세액근거표 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("YEAA0040.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  세액근거표 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("YEAA0040.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  세액근거표 테이블 수정
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("YEAA0040.UPDATE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  세액근거표 테이블 삭제
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("YEAA0040.DELETE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  세액근거표 복사한다.
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public void processPROC00(Map searchVo) throws Exception {		
		update("YEAA0040.PROC00", searchVo);	
	}
	
	
}
