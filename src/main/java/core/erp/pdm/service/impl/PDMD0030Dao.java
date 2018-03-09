/**
 * core.erp.tmm.service.impl.PDMD0030Dao.java - <Created by Code Template generator>
 */
package core.erp.pdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PDMD0030Controller - 제작명세서 - 제작명세서
 * </pre>
 *
 * @author	오세훈
 * @since	2016.10.05
 * @version	1.0
 * @see		{@link PDMD0030}
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.05	오세훈		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright JNF Communication.(C) All right reserved.
 */

@Repository("PDMD0030Dao")
public class PDMD0030Dao extends CmmBaseDAO {

	/**
	 * 제작 청구완료
	 * @param param - 검색조건 정보가 담긴 Map 객체
	 * @return 조회한 공통코드마스터 목록
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PDMD0030.SEARCH00", searchVo);

	}
	
	
	/**
	 * **********************************************************************
	 * <pre>
	 *  제작 청구완료 데이터 수정 및 저장
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 * **********************************************************************
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PDMD0030.UPDATE00", dataVo);
		
	}
	

}
