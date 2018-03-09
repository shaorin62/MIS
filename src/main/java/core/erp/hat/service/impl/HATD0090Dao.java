/**
 * core.erp.hrm.service.impl.HATD0090Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATD0090Dao - 월별연차현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김칠석
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	김칠석		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATD0090Dao")
public class HATD0090Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  월별연차현황 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자격사항 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATD0090.SEARCH00", searchVo);

	}

}
