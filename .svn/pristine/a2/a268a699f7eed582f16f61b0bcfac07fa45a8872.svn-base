/**
 * core.erp.mac.service.impl.MACA0060Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0060Dao - 매체 세금계산서 발행 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.11.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.11.05	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0060Dao")
public class MACA0060Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  위수탁 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0060.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 세금계산서 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0060.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 목록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MACA0060.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 전송취소
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
		//XXSB_DTI_STATUS 상태변경
		return update("MACA0060.DELETE00", dataVo);
	}
	
	/**
	 * <pre>
	 *  위수탁 세금계산서 전송취소
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE10(Map dataVo) throws Exception {
		//XXSB_DTI_INTERFACE 상태변경
		return update("MACA0060.DELETE10", dataVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 전송취소
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE01(Map dataVo) throws Exception {
		
		//XXSB_DTI_STATUS 상태변경
		return update("MACA0060.DELETE01", dataVo);
	}
	
	/**
	 * <pre>
	 *  수수료 세금계산서 전송취소
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE11(Map dataVo) throws Exception {
		
		//XXSB_DTI_INTERFACE 상태변경
		return update("MACA0060.DELETE11", dataVo);
	}
	
	
	
	/**
	 * <pre>
	 *  이메일 재전송
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
		//XXSB_DTI_STATUS 상태변경, XXSB_INTERFACE
		return update("MACA0060.processUPDATE00", dataVo);
		
	}

}
