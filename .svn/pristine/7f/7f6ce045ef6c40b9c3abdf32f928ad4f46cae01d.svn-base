/**
 * core.erp.hrm.service.impl.HATC0070Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATC0070Dao - 외출자관리 내역조회 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김희정
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김희정		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATC0070Dao")
public class HATC0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  외출자관리 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 외출자관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATC0070.SEARCH00", searchVo);

	}
	
	/************************
	 * 외출자관리 등록/수정/삭제 처리  ! *
	 ************************/
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
		String GOOT_SEQN = (String) insert("HATC0070.SAVE00", dataVo);
		return GOOT_SEQN;
	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATC0070.UPDATE00", dataVo);
	
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATC0070.DELETE00", dataVo);
	
	}
	
}
