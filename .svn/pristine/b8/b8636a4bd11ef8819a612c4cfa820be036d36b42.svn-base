/**
 * core.erp.pay.service.impl.PAYB0150Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYB0150Dao - 퇴직자급여지급 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.18	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYB0150Dao")
public class PAYB0150Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  급여지급퇴직자 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여지급퇴직자 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYB0150.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  급여지급퇴직자 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYB0150.SAVE00", dataVo);

	}


}
