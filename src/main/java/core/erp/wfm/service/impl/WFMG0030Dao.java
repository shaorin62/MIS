/**
 * core.erp.hrm.service.impl.WFMG0020Dao.java - <Created by Code Template generator>
 */
package core.erp.wfm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	WFMG0030Dao - 연수지원신청서 DAO 클래스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	김혜림		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("WFMG0030Dao")
public class WFMG0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  연수지원현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 연수지원현황  목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("WFMG0030.SEARCH00", searchVo);
	}
	
}
