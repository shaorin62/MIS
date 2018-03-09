/**
 * core.erp.mcm.service.impl.MCMA0010Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0010Dao - 공통코드관리(신규) 프로그램 데이터처리 DAO 클래스
 * </pre>
 * 
 * @author	최제현
 * @since	2016.10.05
 * @version	1.0
 *
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2016.08.30	조민희		Initial Created.
 * 2016.10.05	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0010Dao")
public class MCMA0010Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  공통코드관리 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통코드마스터 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0010.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  그룹코드명 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 그룹코드명 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MCMA0010.SEARCH01", searchVo);
	}
	

	/**
	 * <pre>
	 *  공통코드관리 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MCMA0010.SAVE00", dataVo);

	}

	/**
	 * <pre>
	 *  공통코드관리 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MCMA0010.UPDATE00", dataVo);
		
	}

	/**
	 * <pre>
	 *  공통코드관리 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MCMA0010.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  공통코드관리 신규코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 공통메시지 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_COMM_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0010.NEW_COMM_CODE", searchVo);

	}		
	
	/**
	 * <pre>
	 *  공통코드관리 신규그룹코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규그룹코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_GRUP_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0010.NEW_GRUP_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  조회쿼리를 가져온다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 조회쿼리
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processGET_SQL_QUERY(Map searchVo) throws Exception {
		return list("MCMA0010.GET_SQL_QUERY",searchVo);
	}
	
	/**
	 * <pre>
	 *  코드를 사용하는 테이블이 있는지 조회한다.
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 사용한 테이블의 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processCOUNT_DATA(String SQL_QUERY) throws Exception {
	
		return (int)select("MCMA0010.COUNT_DATA", SQL_QUERY);

	}	
}
