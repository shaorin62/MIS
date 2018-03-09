/**
 * core.erp.pay.service.impl.PAYA0110Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYA0110Dao - 비과세등록 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	고민주
 * @since	2016.07.13
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.13	고민주		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("PAYA0110Dao")
public class PAYA0110Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  비과세수당등록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 비과세수당등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYA0110.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  비과세수당등록 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYA0110.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  비과세수당등록 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("PAYA0110.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  비과세수당등록 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYA0110.DELETE00", dataVo);
		
	}

}
