/**
 * core.erp.hat.service.impl.HATF0090Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	HATF0090Dao - 출장신청/정산 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	박정윤
 * @since	2016.09.09
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.09	박정윤		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("HATF0090Dao")
public class HATF0090Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  출장신청현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일비기초 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATF0090.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  출자정산현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일비기초 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATF0100.SEARCH00", searchVo);

	}


	/**
	 * <pre>
	 *  외근신청현황 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일비기초 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HATF0110.SEARCH00", searchVo);

	}

}
