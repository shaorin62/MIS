/**
 * core.erp.mrp.service.impl.MRPA0030Dao.java - <Created by Code Template generator>
 */
package core.erp.mrp.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MRPA0030Dao - 통합큐시트 데이터처리 DAO 클래스
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

@Repository("MRPA0030Dao")
public class MRPA0030Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  프로그램리스트를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 프로그램리스트 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MRPA0030.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체별 프로그램리스트를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 프로그램리스트 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MRPA0030.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  일자별 프로그램리스트를 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 일자별 프로그램리스트 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MRPA0030.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 * 통합큐시트 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MRPA0030.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  프로그램목록 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MRPA0030.SAVE00", dataVo);

	}
	
	
}
