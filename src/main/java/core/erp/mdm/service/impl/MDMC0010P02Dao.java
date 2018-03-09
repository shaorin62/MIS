/**
 * core.erp.mdm.service.impl.MDMC0010P02Dao.java - <Created by Code Template generator>
 */
package core.erp.mdm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MDMC0010P02Dao - 신문사이즈조회팝업(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.13	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MDMC0010P02Dao")
public class MDMC0010P02Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  신문사이즈 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신문사이즈 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MDMC0010P02.SEARCH00", searchVo);
	}
}
