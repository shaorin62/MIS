/**
 * core.erp.hrm.service.impl.HATB0020Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATB0020Dao - 일근태등록 내역조회 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김희정
 * @since	2016.09.07
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	김희정		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATB0020Dao")
public class HATB0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  일근태등록 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일근태등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATB0020.SEARCH00", searchVo);

	}
	
	/************************
	 * 일근태등록 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATB0020.SAVE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATB0020.UPDATE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATB0020.DELETE00", dataVo);
	
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
	
		return list("HATB0020.SEARCH01", searchVo);

	}
}
