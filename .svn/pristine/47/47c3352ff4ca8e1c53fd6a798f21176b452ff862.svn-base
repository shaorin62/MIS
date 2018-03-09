/**
 * core.erp.tmm.service.impl.TMMC0010Dao.java - <Created by Code Template generator>
 */
package core.erp.tmm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	TMMC0010Dao - 사업장관리 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	김춘호
 * @since	2016.07.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.07.06	김춘호		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("TMMC0010Dao")
public class TMMC0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  사업장 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 사업장 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
	
		return list("TMMC0010.SEARCH00", searchVo);

	}
	
	/**
	 * 사업장 조회건수를 조회한다.
	 * @param paramMap - 조회할 정보가 담긴 java.util.Map 객체
	 * @return 사업장 조회건수 목록
	 * @exception Exception
	 */
	public Object processSEARCH01(Map searchVo) throws Exception {
		
		return selectByPk("TMMC0010.SEARCH01", searchVo);

	}

	/**
	 * <pre>
	 *  사업장 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("TMMC0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  사업장 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("TMMC0010.UPDATE00", dataVo);
		
	}
	
	/**
	 * 사업장 직인 이미지 또는 서명 정보를 수정한다.
	 * @param paramMap - 수정할 정보가 담긴 java.util.Map 객체
	 * @return 없음
	 * @exception Exception
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("TMMC0010.UPDATE01", dataVo);
		
	}

	/**
	 * <pre>
	 *  사업장 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("TMMC0010.DELETE00", dataVo);
		
	}

}
