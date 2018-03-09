/**
 * core.erp.tmm.service.impl.TMMA0070Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMA0070Dao - 엑셀업로드서식관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최흥규
 * @since	2016.07.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.06	최흥규		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMA0070Dao")
public class TMMA0070Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  엑셀업로드양식 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 엑셀업로드양식 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMA0070.SEARCH00", searchVo);

	}

	/**
	 * <pre>
	 *  엑셀업로드양식 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMA0070.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  엑셀업로드양식 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMA0070.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  엑셀업로드양식 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMA0070.DELETE00", dataVo);
		
	}

}
