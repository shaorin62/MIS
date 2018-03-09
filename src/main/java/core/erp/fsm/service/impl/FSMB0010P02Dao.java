/**
 * core.erp.fsm.service.impl.FSMB0010P02Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMB0010P02Dao - 품목정보조회 팝업
 * </pre>
 * 
 * @author	권미영
 * @since	2016.07.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.29	권미영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMB0010P02Dao")
public class FSMB0010P02Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  품목정보조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 조회한 품목정보 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMB0010P02.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  품목정보 콤보 정보조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 조회한 품목정보 콤보 정보 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMB0010P02.SEARCH01", searchVo);

	}
	
}
