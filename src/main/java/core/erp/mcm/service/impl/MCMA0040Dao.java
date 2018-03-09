/**
 * core.erp.mcm.service.impl.MCMA0040Dao.java - <Created by Code Template generator>
 */
package core.erp.mcm.service.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import core.ifw.cmm.dataaccess.CmmBaseDAO;

/**
 * <pre>
 *	MCMA0040Dao - 코바넷광고주등록(신규) 프로그램 데이터처리 DAO 클래스
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
 * 2016.09.06	조민희		Initial Created.
 * 2016.10.06	최제현		Check and Revise.
 * ====================================================
 * </pre>
 * 
 * Copyright INBUS.(C) All right reserved.
 */

@Repository("MCMA0040Dao")
public class MCMA0040Dao extends CmmBaseDAO {

	/**
	 * <pre>
	 *  코바넷광고주등록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 코바넷광고주등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH00(Map searchVo) throws Exception {
		return list("MCMA0040.SEARCH00", searchVo);
	}
	
	/**
	 * <pre>
	 *  SBS광고주등록 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return SBS광고주등록 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH01(Map searchVo) throws Exception {
		return list("MCMA0040.SEARCH01", searchVo);
	}
	
	/**
	 * <pre>
	 *  광고주 테이블 조회
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주 데이터 목록
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSEARCH02(Map searchVo) throws Exception {
		return list("MCMA0040.SEARCH02", searchVo);
	}
	
	/**
	 * <pre>
	 *  코바넷광고주코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE00(Map dataVo) throws Exception {
	
		return insert("MCMA0040.SAVE00", dataVo);

	}
	
	/**
	 * <pre>
	 *  SBS광고주코드 테이블 저장
	 * </pre>
	 * @param paramMap - 저장할 데이터
	 * @return 저장 결과(저장 시 selectKey 사용 시 해당 키 값 전달)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public Object processSAVE01(Map dataVo) throws Exception {
	
		return insert("MCMA0040.SAVE01", dataVo);

	}
	
	/**
	 * <pre>
	 *  코바넷광고주코드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE00(Map dataVo) throws Exception {
	
		return update("MCMA0040.UPDATE00", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  SBS광고주코드 테이블 수정
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE01(Map dataVo) throws Exception {
	
		return update("MCMA0040.UPDATE01", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  코바넷광고주코드 테이블 수정 (SBS코드가 있을 시)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE02(Map dataVo) throws Exception {
	
		return update("MCMA0040.UPDATE02", dataVo);
	
	}
	
	/**
	 * <pre>
	 *  SBS광고주코드 테이블 수정 (코바넷코드가 있을 시)
	 * </pre>
	 * @param paramMap - 수정할 데이터
	 * @return 수정 건수(사용하는 DB에서 지원하는 경우 수정된 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processUPDATE03(Map dataVo) throws Exception {
	
		return update("MCMA0040.UPDATE03", dataVo);
	
	}
	
	
	/**
	 * <pre>
	 * 코바넷광고주코드 테이블 삭제
	 * </pre>
	 * @param paramMap - 삭제할 데이터
	 * @return 삭제 결과(사용하는 DB에서 지원하는 경우 삭제한 건수)
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processDELETE00(Map dataVo) throws Exception {
	
		return delete("MCMA0040.DELETE00", dataVo);
		
	}
	
	/**
	 * <pre>
	 *  광고주코드 유무 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 광고주코드
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public String processGET_CUST_CODE(Map searchVo) throws Exception {
		return (String)selectByPk("MCMA0040.GET_CUST_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  SBS코드 유무 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 유 : 1 , 무 : 0
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processIS_SBSX_CODE(Map searchVo) throws Exception {
		return (int)selectByPk("MCMA0040.IS_SBSX_CODE", searchVo);

	}	
	
	/**
	 * <pre>
	 *  코바넷코드 유무 확인
	 * </pre>
	 * @param paramMap - 조회 파라미터
	 * @return 유 : 1 , 무 : 0
	 * @throws Exception - 처리시 발생한 예외
	 */
	@SuppressWarnings("rawtypes")
	public int processIS_KBNT_CODE(Map searchVo) throws Exception {
		return (int)selectByPk("MCMA0040.IS_KBNT_CODE", searchVo);

	}	
	
}
