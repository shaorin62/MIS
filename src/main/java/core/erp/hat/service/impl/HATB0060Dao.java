/**
 * core.erp.hrm.service.impl.HATB0060Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATB0060Dao - 근태마감 내역조회 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김희정
 * @since	2016.09.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.21	김희정		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATB0060Dao")
public class HATB0060Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  근태마감 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근태마감 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATB0060.SEARCH00", searchVo);

	}
	
	/************************
	 * 근태마감 등록/수정/삭제 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATB0060.SAVE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATB0060.DELETE00", dataVo);
	
	}
	
}
