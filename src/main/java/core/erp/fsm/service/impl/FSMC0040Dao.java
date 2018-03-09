/**
 * core.erp.tmm.service.impl.FSMC0040Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMC0040Dao - 불용자산현황 처리 데이터 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMC0040Dao")
public class FSMC0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  불용 자산 현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMC0040.SEARCH00", searchVo);

	}
	

}
