/**
 * core.erp.tmm.service.impl.FSMD0040Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMD0040Dao - 감가상각비명세서(요약)(2015) 처리 데이터 DAO 클래스
 * </pre>
 * 
 * @author	오혜성
 * @since	2016.06.28
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.28	오혜성		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMD0040Dao")
public class FSMD0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 감가상각비명세서(요약)(2015) 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMD0040.SEARCH00", searchVo);

	}
	

}
