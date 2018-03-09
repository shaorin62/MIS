/**
 * core.erp.pay.service.impl.PAYC0255Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYC0255Dao - 소급계산 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	이용관
 * @since	2016.10.18
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.10.18	이용관		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYC0255Dao")
public class PAYC0255Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  소급내역 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 소급내역 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYC0255.SEARCH00", searchVo);

	}


	/**
	 * <pre>
	 *  소급상세 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PAYC0255.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  소급상세 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 건수(사용하는 DB에서 지원하는 경우 삭제된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYC0255.DELETE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  소급계산 처리
	 * </pre>
	 * @param paramMap - 소급계산할 데이터
	 * @return 처리 결과
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map dataVo) throws Exception {
	
		return insert("PAYC0255.PROC00", dataVo);
		
	}

}
