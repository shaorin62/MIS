/**
 * core.erp.hrm.service.impl.HRMK0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMK0030Dao - 증명서발급현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.15
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.15	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMK0030Dao")
public class HRMK0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  증명서발급 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 증명서발급 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRMK0030.SEARCH00", searchVo);

	}

}
