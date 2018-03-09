/**
 * core.erp.hrm.service.impl.HRME0040Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRME0040Dao - 인사발령현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	고민주
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	고민주		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRME0040Dao")
public class HRME0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  발령상세 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 발령상세 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("HRME0040.SEARCH00", searchVo);

	}

}
