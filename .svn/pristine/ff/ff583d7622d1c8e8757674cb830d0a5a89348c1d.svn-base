/**
 * core.erp.tmm.service.impl.TMMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMA0010Dao - 공통코드관리(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.06.29
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.06.29	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMA0010Dao")
public class TMMA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  공통코드마스터 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0010.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMA0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMA0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  공통코드마스터 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMA0010.DELETE00", dataVo);
		
	}

}
