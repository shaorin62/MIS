package core.erp.edm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	EDMB0070Dao - 사원별교육현황 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김혜림
 * @since	2016.09.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.19	김혜림	 Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright NDS.(C) All right reserved.
 */

@Repository("EDMB0070Dao")
public class EDMB0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 사원별교육현황 데이터 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("EDMB0070.SEARCH00", searchVo);

	}

}
