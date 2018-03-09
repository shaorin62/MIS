package core.erp.yea.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	YEAA0100_2016Dao - 연말정산내역 프로그램 데이터처리 DAO 클래스
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
@Repository("YEAA0100_2016Dao")
public class YEAA0100_2016Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  제출자레코드 Search
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연말정산내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("YEAA0100_2016.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  원천징수의무자별 집계레코드 Search
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연말정산내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("YEAA0100_2016.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  SAVE00
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연말정산내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {
		return list("YEAA0100_2016.SAVE00", searchVo);

	}
	
}
