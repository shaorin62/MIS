/**
 * core.erp.tmm.service.impl.FAMF0020Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMF0020Dao - 재무상태표 조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	권미영
 * @since	2016.10.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	권미영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMF0020Dao")
public class FAMF0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  재무상태표 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 재무상태표 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		
		return list("FAMF0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  재무상태표 자료 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {
		
		return insert("FAMF0020.SAVE00", searchVo);

	}
	
}
