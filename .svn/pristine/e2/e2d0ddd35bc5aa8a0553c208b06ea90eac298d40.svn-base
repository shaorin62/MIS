/**
 * core.erp.tmm.service.impl.FAME0020Dao.java - <Created by Code Template generator>
 */
package core.erp.fam.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	FAME0020Dao - 전표재집계및이월 관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	양현덕
 * @since	2016.07.14
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.14	양현덕		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("FAME0020Dao")
public class FAME0020Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  전표재집계및이월 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 전표재집계및이월 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("FAME0020.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  전표재집계및이월 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processPROC00(Map searchVo) throws Exception {
	
		return insert("FAME0020.PROC00", searchVo);

	}

	/**
	 * <pre>
	 *  전표재집계및이월 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC01(Map dataVo) throws Exception {
	
		return update("FAME0020.PROC01", dataVo);
		
	}

	/**
	 * <pre>
	 *  전표재집계및이월 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processPROC02(Map dataVo) throws Exception {
	
		return delete("FAME0020.PROC02", dataVo);
		
	}

}
