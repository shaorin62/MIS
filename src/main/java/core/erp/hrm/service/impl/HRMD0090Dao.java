/**
 * core.erp.hrm.service.impl.HRMD0090Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRMD0090Dao - 승진율현황(직위별) 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	안윤준
 * @since	2016.10.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.19	안윤준		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRMD0090Dao")
public class HRMD0090Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  승진율현황(직위별) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 승진율현황(직위별) 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("HRMD0090.SEARCH00", searchVo);

	}

}
