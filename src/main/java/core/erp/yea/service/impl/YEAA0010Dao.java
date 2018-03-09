package core.erp.yea.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	YEAA0010Dao - 연말정산환경설정 프로그램 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김석영
 * @since	2016.10.27.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016.10.27.	김석영		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("YEAA0010Dao")
public class YEAA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연말정산환경설정-후속SQL 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연말정산환경설정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("YEAA0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  연말정산환경설정-매핑정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연말정산환경설정 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("YEAA0010.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  연말정산환경설정-후속SQL 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("YEAA0010.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  연말정산환경설정-매핑정보 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
		return insert("YEAA0010.SAVE01", dataVo);

	}
}
