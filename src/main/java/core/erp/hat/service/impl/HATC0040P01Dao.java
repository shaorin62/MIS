/**
 * core.erp.hrm.service.impl.HATC0040P01Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATC0040Dao - 휴가팝업 DAO 클래스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.28	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATC0040P01Dao")
public class HATC0040P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  휴가팝업 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 휴가팝업 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATC0040P01.SEARCH00", searchVo);
	}
}
