package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMD0010Dao - 단위테스트관리
 * <p><b>NOTE : 단위테스트관리</b></p>
 * </pre>
 * 
 * @author	신일용 <sil@inbus.co.kr>
 * @since	2014. 10. 15.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 10. 15.	신일용		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("TMMD0010Dao")
public class TMMD0010Dao extends CmmBaseDAO  {
	
	/**
	 * <pre>
	 * 단위테스트관리 조회 처리
	 * </pre>
	 *
	 * @param searchVo 조회조건을 포함한 Map 객체
	 * @return 공통메시지 목록
	 * @throws Exception 데이터 조회 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TMMD0010.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 * 단위테스트관리를 삭제한다
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 삭제 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("TMMD0010.DELETE00", dataVo);
	}

	/**
	 * <pre>
	 * 단위테스트관리를 저장한다
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 저장 결과
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("TMMD0010.SAVE00", dataVo);
	}

	/**
	 * <pre>
	 * 단위테스트관리를 수정 한다
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 수정 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("TMMD0010.UPDATE00", dataVo);
	}

}
