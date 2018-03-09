/**
 * core.erp.tmm.service.impl.TMMA0310Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMA0310Dao - 경영계획및실적관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 *
 * @author	최인철
 * @since	2016.11.01
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.01	최인철		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMA0310Dao")
public class TMMA0310Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  경영계획및실적관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 경영계획및실적관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0310.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  경영계획및실적관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMA0310.SAVE00", dataVo);

	}
	
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMA0310.UPDATE00", dataVo);
		
	}
	
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMA0310.DELETE00", dataVo);
		
	}


}
