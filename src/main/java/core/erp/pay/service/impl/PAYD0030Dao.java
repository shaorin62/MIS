/**
 * core.erp.pay.service.impl.PAYD0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYD0030Dao - 예측결과관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	이용관
 * @since	2016.11.08
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.08	이용관		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYD0030Dao")
public class PAYD0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  급여 수당 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {

		return list("PAYD0030.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  급여예측결과 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여예측결과 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYD0030.SEARCH01", searchVo);

	}

}
