/**
 * core.erp.pay.service.impl.PAYA0135Dao.java - <Created by Code Template generator>
 */
package core.erp.pay.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	PAYA0135Dao - 정기상여등록(개인별) 프로그램 데이터처리 DAO 클래스
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

@Repository("PAYA0135Dao")
public class PAYA0135Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  개인별정기상여 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 개인별정기상여 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("PAYA0135.SEARCH00", searchVo);

	}
	/**
	 * <pre>
	 *  개인별정기상여 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 개인별정기상여 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
	
		return list("PAYA0135.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  개인별정기상여 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("PAYA0135.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  개인별정기상여 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("PAYA0135.DELETE00", dataVo);
		
	}

}
