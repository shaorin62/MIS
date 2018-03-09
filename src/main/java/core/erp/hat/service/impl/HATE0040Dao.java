/**
 * core.erp.hrm.service.impl.HATE0040Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATE0040Dao - 월근태현황 DAO 클래스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.136	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATE0040Dao")
public class HATE0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  월근태현황  테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 월근태현황 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATE0040.SEARCH00", searchVo);
	}
			
	/**
	 * <pre>
	 *  월근태현황 헤더 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(사용하는 DB에서 지원하는 경우 저장 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSAVE00(Map dataVo) throws Exception {
	
		return delete("HATE0040.SAVE00", dataVo);
		
	}
}
