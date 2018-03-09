/**
 * core.erp.hrm.service.impl.HRMC0210Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMC0210Dao - 노동조합원명단 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.11
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.11	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMC0210Dao")
public class HRMC0210Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  인사기본정보 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 인사기본정보 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMC0210.SEARCH00", searchVo);

	}

}
