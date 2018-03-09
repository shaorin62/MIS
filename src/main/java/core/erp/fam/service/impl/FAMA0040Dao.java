/**
 * core.erp.fam.service.impl.FAMA0040Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAMA0040Dao - 거래처정보조회 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	황치웅
 * @since	2016.06.23
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.23	황치웅		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAMA0040Dao")
public class FAMA0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  감가상각율 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 감가상각율 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAMA0040.SEARCH00", searchVo);

	}

}
