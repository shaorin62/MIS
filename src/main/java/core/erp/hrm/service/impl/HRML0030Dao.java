/**
 * core.erp.hrm.service.impl.HRML0030Dao.java - <Created by Code Template generator>
 */
package core.erp.hrm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HRML0030Dao - 근로(연봉)계약서확인 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	이준영
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	이준영		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HRML0030Dao")
public class HRML0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  근로(연봉)계약서확인 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근로(연봉)계약서 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HRML0030.SEARCH00", searchVo);

	}

}
