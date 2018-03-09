/**
 * core.erp.hat.service.impl.HATF0040Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;


/**
 * <pre>
 *	HATF0040Dao - 출장신청/정산 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	박정윤
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	박정윤		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("HATF0040Dao")
public class HATF0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  출장신청목록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장신청데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATF0040.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  결재 SEQ 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 출장신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATF0040.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  출장신청목록 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATF0040.DELETE00", dataVo);
		
	}
	
}
