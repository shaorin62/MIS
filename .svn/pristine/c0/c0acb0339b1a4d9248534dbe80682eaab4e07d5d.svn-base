/**
 * core.erp.mcm.service.impl.MCMA0060Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0060Dao - 카테고리관리(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.06
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.09.07	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0060Dao")
public class MCMA0060Dao extends CmmBaseDAO {
	

	/**
	 * <pre>
	 *  카테고리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 카테고리 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0060.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MCMA0060.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MCMA0060.SAVE00", dataVo);

	}
	

	/**
	 * <pre>
	 *  카테고리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MCMA0060.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  카테고리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MCMA0060.DELETE00", dataVo);
		
	}
	
}
