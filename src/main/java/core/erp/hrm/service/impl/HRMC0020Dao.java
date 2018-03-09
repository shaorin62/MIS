/**
 * core.erp.hrm.service.impl.HRMC0020Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMC0020Dao - 포상현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.05	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMC0020Dao")
public class HRMC0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  포상사항 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 포상사항 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMC0020.SEARCH00", searchVo);

	}

}
