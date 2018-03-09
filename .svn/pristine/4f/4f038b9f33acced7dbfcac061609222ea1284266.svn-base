/**
 * core.erp.hrm.service.impl.HATB0050Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATB0050Dao - 월근태등록 내역조회 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김희정
 * @since	2016.09.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.13	김희정		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATB0050Dao")
public class HATB0050Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  월근태등록 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 월근태등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATB0050.SEARCH00", searchVo);

	}
	
	/************************
	 * 월근태등록/수정/삭제 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATB0050.SAVE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATB0050.UPDATE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATB0050.DELETE00", dataVo);
	
	}
	
	/************************
	 * 월근태생성 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("HATB0050.SAVE01", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("HATB0050.DELETE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  근태마감여부 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근태마감여부 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATB0050.SEARCH01", searchVo);

	}
}
