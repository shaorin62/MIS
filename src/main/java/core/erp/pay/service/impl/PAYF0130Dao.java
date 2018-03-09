package core.erp.pay.service.impl;

import java.util.Map;
import org.springframework.stereotype.Repository;
import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYF0130Dao - PY_RTPSDC 테이블 데이터처리 DAO 클래스
 * <p><b>NOTE : </b></p>
 * </pre>
 * 
 * @author	김준수
 * @since	2016. 9. 12.
 * @version	1.0
 * @see		{@link }
 * 
 * <pre>
 * == Modification Information ==
 * Date			Modifier	Comment
 * ====================================================
 * 2016. 9. 12.	김준수		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
 */
@Repository("PAYF0130Dao")
public class PAYF0130Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("PAYF0130.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  퇴직연금납입금 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 퇴직연금납입금 데이터 목록
	 * @ - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("PAYF0130.SEARCH01", searchVo);

	}
	
}
