package core.erp.tmm.service.impl;

import java.util.Map;											

import org.springframework.stereotype.Repository;              

import core.ifw.cmm.dataaccess.CmmBaseDAO;        

/**
 * <pre>
 *	TMMD0110Dao - Meta 용어관리
 * <p><b>NOTE : Meta 용어관리</b></p>
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
@Repository("TMMD0110Dao")
public class TMMD0110Dao extends CmmBaseDAO  {

	/**
	 * <pre>
	 * Meta 용어 조회 처리
	 * </pre>
	 *
	 * @param searchVo 조회조건을 포함한 Map 객체
	 * @return 공통메시지 목록
	 * @throws Exception 데이터 조회 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("TMMD0110.SEARCH00", searchVo);
	}

	/**
	 * <pre>
	 * Meta 용어 삭제 처리
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 삭제 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		return delete("TMMD0110.DELETE00", dataVo);
	}

	/**
	 * <pre>
	 * Meta 용어 저장 처리
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 저장 결과
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		return insert("TMMD0110.SAVE00", dataVo);
	}

	/**
	 * <pre>
	 * Meta 용어 수정 처리
	 * </pre>
	 *
	 * @param dataVo 저장할 데이터 Map 객체
	 * @return 수정 건수
	 * @throws Exception 데이터 저장 중 발생한 예외
	 */	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		return update("TMMD0110.UPDATE00", dataVo);
	}

}
