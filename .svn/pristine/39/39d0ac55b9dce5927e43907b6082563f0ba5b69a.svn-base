/**
 * core.erp.mcm.service.impl.MCMA0070Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0070Dao - 브랜드관리(신규) 프로그램 데이터처리 DAO 클래스
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

@Repository("MCMA0070Dao")
public class MCMA0070Dao extends CmmBaseDAO {
	

	/**
	 * <pre>
	 *  브랜드 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 브랜드 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0070.SEARCH00", searchVo);
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
		return list("MCMA0070.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  브랜드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MCMA0070.SAVE00", dataVo);

	}
	

	/**
	 * <pre>
	 *  브랜드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MCMA0070.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  브랜드 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MCMA0070.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  신규 브랜드 코드채번
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 신규 브랜드 코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processNEW_BRND_CODE(Map searchVo) throws Exception {
	
		return (String)selectByPk("MCMA0070.NEW_BRND_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  같은 브랜드명이 있는지 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 브랜드 명 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int GET_BRND_NAME(Map searchVo) throws Exception {
	
		return (int)selectByPk("MCMA0070.GET_BRND_NAME", searchVo);

	}	
	
	/**
	 * <pre>
	 *  같은 코바넷 코드가 있는지 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 코바넷코드 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int GET_KBNT_CODE(Map searchVo) throws Exception {
	
		return (int)selectByPk("MCMA0070.GET_KBNT_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  같은 미크 코드가 있는지 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 미크코드 개수
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int GET_SBSX_CODE(Map searchVo) throws Exception {
	
		return (int)selectByPk("MCMA0070.GET_SBSX_CODE", searchVo);

	}	
	
}
