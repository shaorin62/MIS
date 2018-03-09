/**
 * core.erp.pay.service.impl.PAYA0095Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYA0095Dao - 근무상태별지급율 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.19
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.19	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYA0095Dao")
public class PAYA0095Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  수당별지급율 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 수당별지급율 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYA0095.SEARCH00", searchVo);

	}
	/**
	 * <pre>
	 *  근무상태별지급율_근무상태 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여수식 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PAYA0095.SEARCH01", searchVo);

	}
	
	/**
	 * <pre>
	 *  근무상태별지급율_지급율 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 급여수식 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
	
		return list("PAYA0095.SEARCH02", searchVo);

	}
	
	/**
	 * <pre>
	 *  수당별지급율 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PAYA0095.UPDATE00", dataVo);
		
	}

}
