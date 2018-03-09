/**
 * core.erp.hrm.service.impl.HATF0070P01Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATF0070P01Dao - 출장여비정산등록 DAO 클래스
 * </pre>
 * 
 * @author	김남호
 * @since	2016.09.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.26	김남호		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("HATF0070P01Dao")
public class HATF0070P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  출장여비정산등록 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 결재상테조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATF0070P01.SEARCH00", searchVo);
	}
	
}
