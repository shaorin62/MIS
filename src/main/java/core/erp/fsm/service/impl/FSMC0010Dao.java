/**
 * core.erp.tmm.service.impl.FSMC0010Dao.java - <Created by Code Template generator>
 */
package core.erp.fsm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FSMC0010Dao - 자산대장 처리 데이터 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.26
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.26	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FSMC0010Dao")
public class FSMC0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 * 자산대장 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FSMC0010.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 * 자산대장 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("FSMC0010.SEARCH01", searchVo);

	}	

	/**
	 * <pre>
	 * 기준일자 조회 후 리턴
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자산 분류 관리 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processSEARCH_STDS_YMTH(Map searchVo) throws Exception {
	
		return (String) selectByPk("FSMC0010.SEARCH_STDS_YMTH", searchVo);

	}

}
