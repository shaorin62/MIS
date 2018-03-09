package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0050Dao - 퇴직금정산내역 프로그램 데이터처리 DAO 클래스
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
@Repository("PAYF0050Dao")
public class PAYF0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  퇴직금정산내역 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직금정산내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0050.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 * 퇴직정산세액근거를 삭제한다
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 삭제 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("PAYF0050.DELETE00", dataVo);
	}

	/**
	 * <pre>
	 * 퇴직정산세액근거를 저장 한다
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 저장 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("PAYF0050.SAVE00", dataVo);
	}

}
