package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMA0230Dao - 일정 테이블 조회
 * <p><b>NOTE : 일정 테이블 조회</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 16.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 16.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMA0230Dao")
public class TMMA0230Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * 일정 테이블 조회
	 * </pre>
	 *
	 * @param searchVo 조회조건을 포함한 Map 객체
	 * @return 일정 테이블 조회
	 * @throws Exception 데이터 조회 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PKG_TMMA0230.SP_TMMA0230_SEARCH00", searchVo);
	}

	/**
	 * <pre>
	 * 일정 삭제 처리
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 삭제 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("PKG_TMMA0230.SP_TMMA0230_DELETE00", dataVo);
	}

	/**
	 * <pre>
	 * 일정 입력
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 저장 결과
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("PKG_TMMA0230.SP_TMMA0230_SAVE00", dataVo);
	}

	/**
	 * <pre>
	 * 일정 수정
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 수정 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("PKG_TMMA0230.SP_TMMA0230_UPDATE00", dataVo);
	}

}
