/**
 * core.erp.mrp.service.impl.MRPA0020Dao.java - <Created by Code Template generator>
 */
package core.erp.mrp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MRPA0020Dao - 가상간접광고리포트 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.25
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.25	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MRPA0020Dao")
public class MRPA0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  세금계산서가 발행된 전파,CATV 간접광고 목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서가 발행된 전파,CATV 간접광고 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MRPA0020.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주목록조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("MRPA0020.SEARCH01", searchVo);

	}
}
