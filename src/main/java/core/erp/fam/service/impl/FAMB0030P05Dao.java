/**
 * core.erp.fam.service.impl.FAMB0030P05Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMB0030P05Dao - 증빙선택조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.08.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.08	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMB0030P05Dao")
public class FAMB0030P05Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  증빙 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증빙 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMB0030P05.SEARCH00", searchVo);

	}

}
