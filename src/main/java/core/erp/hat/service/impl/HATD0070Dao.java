/**
 * core.erp.hrm.service.impl.HATD0070Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATD0070Dao - 자격취득현황 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.04
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.04	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATD0070Dao")
public class HATD0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  자격사항 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 자격사항 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATD0070.SEARCH00", searchVo);

	}
	
	/**
	 * <pre>
	 *  직급호봉표 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATD0070.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  직급호봉표 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processUPDATE00(Map dataVo) throws Exception {
	
		return update("HATD0070.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  직급호봉표 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATD0070.DELETE00", dataVo);
		
	}
}
