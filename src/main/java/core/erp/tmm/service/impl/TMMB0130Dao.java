/**
 * core.erp.tmm.service.impl.TMMB0130Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMB0130Dao - 권한변경이력조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.08.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.18	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMB0130Dao")
public class TMMB0130Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  그룹별사용자권한이력 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 그룹별사용자권한이력 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMB0130.SEARCH00", searchVo);

	}

}
