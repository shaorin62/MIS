/**
 * core.erp.mdm.service.impl.MACA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.mac.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MACA0010Dao - 회계 입금표 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.21
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.21	최제현		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MACA0010Dao")
public class MACA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  회계입금표 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 회계입금표 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MACA0010.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체사목록 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체사목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MACA0010.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  매체사코드로 담당자 메일 가져오기
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(String  sCUST_CODE) throws Exception {
	
		return list("MACA0010.SEARCH02", sCUST_CODE);

	}

	/**
	 * <pre>
	 *  입금표 출력을 위한 조회 
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 매체사목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPRINT00(Map searchVo) throws Exception {
		return list("MACA0010.PRINT00", searchVo);
	}
	
	/**
	 * <pre>
	 *  발송여부 입력
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processSEND00(Map dataVo) throws Exception {
	
		return update("MACA0010.SEND00", dataVo);
	
	}
}
