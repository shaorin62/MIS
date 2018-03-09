/**
 * core.erp.hrm.service.impl.HATC0020Dao.java - <Created by Code Template generator>
 */
package core.erp.hat.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	HATC0020Dao - 시간외 근무신청서 DAO 클래스
 * </pre>
 * 
 * @author	이창운
 * @since	2016.09.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.06	이창운		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("HATC0020Dao")
public class HATC0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  시간외근무신청 헤더 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("HATC0020.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  시간외근무신청 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 근데신청 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("HATC0020.SEARCH01", searchVo);
	}
		
	/**
	 * <pre>
	 *  시간외근무신청 헤더 저장
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("HATC0020.SAVE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  시간외근무신청 테이블 저장
	 * </pre>
	 * @param paramMap  
	 * @return 
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("HATC0020.SAVE01", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  시간외근무신청 헤더 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("HATC0020.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  시간외근무신청 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
	
		return delete("HATC0020.DELETE01", dataVo);
		
	}
	

	/**
	 * <pre>
	 *  월근태 마감여부 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 월근태 마감여부 조회
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("HATC0020.SEARCH02", searchVo);

	}	

}
