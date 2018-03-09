/**
 * core.erp.tmm.service.impl.FAMF0010Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMF0010Dao - 합계잔액시산표 조회 프로그램 데이터처리 DAO 클래스
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

@Repository("FAMF0010Dao")
public class FAMF0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  합계잔액시산표 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 합계잔액시산표 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		 
		return list("FAMF0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  합계잔액시산표 자료 생성
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map searchVo) throws Exception {
		
		return insert("FAMF0010.SAVE00", searchVo);

	}
}
