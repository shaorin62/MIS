/**
 * core.erp.hrm.service.impl.HATF0060Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATF0060Dao - 출장여비정산 내역조회 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김남호
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김남호		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATF0060Dao")
public class HATF0060Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  출장여비정산 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장여비정산 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATF0060.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  결재 SEQ 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장여비정산 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATF0060.SEARCH01", searchVo);

	}

}
