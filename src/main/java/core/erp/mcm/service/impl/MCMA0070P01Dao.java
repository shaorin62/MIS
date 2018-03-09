/**
 * core.erp.mcm.service.impl.MCMA0070P01Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0070P01Dao - 브랜드조회팝업(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.27
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.27	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0070P01Dao")
public class MCMA0070P01Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  브랜드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 브랜드 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0070P01.SEARCH00", searchVo);
	}
}
